import { isEmailConfigured, sendEnquiryEmail } from './email.js'
import { supabase } from './supabaseClient.js'

const DEMO_STORAGE_KEY = 'mib_demo_public_enquiries'

const DOCUMENTED_COLUMNS = [
  'customer_name',
  'email',
  'phone',
  'event_date',
  'event_type',
  'venue',
  'selected_services',
  'message',
  'status',
]

const FALLBACK_ERROR_MESSAGE =
  "We couldn't send your enquiry just yet. Please try again or contact us directly."

const shapeError = (error) => {
  console.error('[enquiries] createEnquiry failed', error)
  return { message: FALLBACK_ERROR_MESSAGE }
}

const trimToNull = (value) => {
  if (typeof value !== 'string') return value
  const trimmed = value.trim()
  return trimmed === '' ? null : trimmed
}

const toExternal = (values) => {
  const serviceLabels = Array.isArray(values.serviceLabels)
    ? values.serviceLabels.map((label) => String(label).trim()).filter(Boolean)
    : []

  return {
    customer_name: trimToNull(values.name),
    email: trimToNull(values.email)?.toLowerCase() ?? null,
    phone: trimToNull(values.phone),
    event_type: trimToNull(values.eventType),
    selected_services: serviceLabels,
    event_date: values.eventDate || null,
    venue: trimToNull(values.venue),
    guest_count: trimToNull(values.guestCount),
    setup_required: trimToNull(values.setupRequired),
    message: trimToNull(values.message),
    status: 'new',
  }
}

const appendExtrasToMessage = (payload) => {
  const extras = [`Approximate guest count: ${payload.guest_count ?? 'Not stated'}`, `Setup/styling of hired items required: ${payload.setup_required ?? 'Not stated'}`]
  const baseMessage = payload.message ?? ''
  return [...extras, baseMessage].filter(Boolean).join('\n\n')
}

function readDemoQueue() {
  try {
    const raw = window.localStorage.getItem(DEMO_STORAGE_KEY)
    const parsed = raw ? JSON.parse(raw) : []
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

function writeDemoQueue(queue) {
  try {
    window.localStorage.setItem(DEMO_STORAGE_KEY, JSON.stringify(queue))
  } catch (error) {
    console.warn('[enquiries] demo storage unavailable', error)
  }
}

function storeDemoEnquiry(payload) {
  const record = {
    id: typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    ...payload,
  }

  const queue = readDemoQueue()
  queue.push(record)
  writeDemoQueue(queue)

  console.warn(
    '[enquiries] Supabase not configured — enquiry stored in browser demo storage instead.',
  )

  return { data: record, error: null, demo: true }
}

async function insertIntoSupabase(payload) {
  try {
    const { data, error } = await supabase
      .from('enquiries')
      .insert(payload)
      .select()
      .single()

    if (error) throw error
    return { data, error: null, demo: false }
  } catch (error) {
    const isMissingColumn = error?.code === '42703'

    if (isMissingColumn) {
      const fallback = Object.fromEntries(
        DOCUMENTED_COLUMNS.map((column) => [column, payload[column]]),
      )
      fallback.message = appendExtrasToMessage(payload)

      try {
        const { data, error: retryError } = await supabase
          .from('enquiries')
          .insert(fallback)
          .select()
          .single()

        if (retryError) throw retryError
        return { data, error: null, demo: false }
      } catch (retryError) {
        return { data: null, error: shapeError(retryError), demo: false }
      }
    }

    return { data: null, error: shapeError(error), demo: false }
  }
}

export async function createEnquiry(values) {
  const payload = toExternal(values)

  if (isEmailConfigured()) {
    const emailError = await sendEnquiryEmail(values)
    if (emailError) {
      return {
        data: null,
        error: { message: `${FALLBACK_ERROR_MESSAGE} (${emailError})` },
      }
    }
  }

  if (!supabase) {
    return storeDemoEnquiry(payload)
  }

  return insertIntoSupabase(payload)
}

export function listDemoEnquiries() {
  return readDemoQueue()
}

export async function listEnquiries() {
  if (!supabase) {
    const queue = readDemoQueue()
    const sorted = [...queue].sort(
      (a, b) => new Date(b.created_at) - new Date(a.created_at),
    )
    return { data: sorted, error: null, demo: true }
  }

  try {
    const { data, error } = await supabase
      .from('enquiries')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) throw error
    return { data, error: null, demo: false }
  } catch (error) {
    return { data: null, error: shapeError(error), demo: false }
  }
}

export async function updateEnquiryStatus(id, status) {
  if (!supabase) {
    const queue = readDemoQueue()
    const next = queue.map((record) =>
      record.id === id
        ? { ...record, status, updated_at: new Date().toISOString() }
        : record,
    )
    writeDemoQueue(next)
    return { data: next.find((record) => record.id === id) ?? null, error: null, demo: true }
  }

  try {
    const { data, error } = await supabase
      .from('enquiries')
      .update({ status })
      .eq('id', id)
      .select()
      .single()

    if (error) throw error
    return { data, error: null, demo: false }
  } catch (error) {
    return { data: null, error: shapeError(error), demo: false }
  }
}