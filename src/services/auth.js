import { supabase } from './supabaseClient.js'
import {
  ADMIN_DEMO_CREDENTIALS,
  ADMIN_SESSION_KEY,
  ADMIN_SESSION_TTL_MS,
} from '../constants/admin.js'

const DEMO_SIGN_IN_ERROR = 'Invalid email or password. Please try again.'
const SUPABASE_SIGN_IN_ERROR = 'Invalid email or password. Please try again.'
const SUPABASE_SIGN_OUT_ERROR = 'We couldn\'t sign you out right now. Please try again.'

const normalizeSupabaseSession = (session) =>
  session?.user
    ? {
        email: session.user.email ?? '',
        signedInAt: new Date().toISOString(),
      }
    : null

function readSession() {
  try {
    const raw = window.localStorage.getItem(ADMIN_SESSION_KEY)
    if (!raw) return null
    const session = JSON.parse(raw)
    if (!session?.email || !session?.expiresAt) return null
    if (Date.now() > session.expiresAt) {
      window.localStorage.removeItem(ADMIN_SESSION_KEY)
      return null
    }
    return session
  } catch {
    return null
  }
}

function writeSession(session) {
  try {
    window.localStorage.setItem(ADMIN_SESSION_KEY, JSON.stringify(session))
  } catch (error) {
    console.warn('[auth] session storage unavailable', error)
  }
}

/**
 * Synchronous session read. Returns the demo session immediately when
 * Supabase is not configured; returns null otherwise (the real session is
 * resolved asynchronously via getSupabaseSession).
 */
export const getSession = () => (!supabase ? readSession() : null)

export async function getSupabaseSession() {
  if (!supabase) {
    return { session: readSession(), error: null }
  }

  const { data, error } = await supabase.auth.getSession()
  if (error) {
    console.error('[auth] getSession failed', error)
    return { session: null, error: { message: SUPABASE_SIGN_IN_ERROR } }
  }
  return { session: normalizeSupabaseSession(data.session), error: null }
}

export async function signIn(email, password) {
  const normalizedEmail = String(email ?? '').trim().toLowerCase()

  if (!supabase) {
    const isValid =
      normalizedEmail === ADMIN_DEMO_CREDENTIALS.email &&
      String(password ?? '') === ADMIN_DEMO_CREDENTIALS.password

    if (!isValid) {
      return { session: null, error: { message: DEMO_SIGN_IN_ERROR } }
    }

    const session = {
      email: normalizedEmail,
      signedInAt: new Date().toISOString(),
      expiresAt: Date.now() + ADMIN_SESSION_TTL_MS,
    }
    writeSession(session)
    return { session, error: null }
  }

  const { data, error } = await supabase.auth.signInWithPassword({
    email: normalizedEmail,
    password: String(password ?? ''),
  })

  if (error) {
    console.warn('[auth] signInWithPassword failed', error)
    return { session: null, error: { message: SUPABASE_SIGN_IN_ERROR } }
  }

  return { session: normalizeSupabaseSession(data.session), error: null }
}

export async function signOut() {
  if (!supabase) {
    try {
      window.localStorage.removeItem(ADMIN_SESSION_KEY)
    } catch (error) {
      console.warn('[auth] session removal failed', error)
    }
    return { error: null }
  }

  const { error } = await supabase.auth.signOut()
  if (error) {
    console.warn('[auth] signOut failed', error)
    return { error: { message: SUPABASE_SIGN_OUT_ERROR } }
  }
  return { error: null }
}

/**
 * Subscribes to Supabase auth state changes (sign-in, token refresh,
 * sign-out). Returns an unsubscribe function. No-op in demo mode.
 */
export function subscribeToAuthChanges(callback) {
  if (!supabase) return () => {}

  const { data } = supabase.auth.onAuthStateChange((_event, session) => {
    callback(normalizeSupabaseSession(session))
  })
  return () => data.subscription.unsubscribe()
}