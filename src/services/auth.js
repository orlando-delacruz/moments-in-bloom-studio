import {
  ADMIN_DEMO_CREDENTIALS,
  ADMIN_SESSION_KEY,
  ADMIN_SESSION_TTL_MS,
} from '../constants/admin.js'

const DEMO_SIGN_IN_ERROR = 'Invalid email or password. Please try again.'

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

export const getSession = () => readSession()

export async function signIn(email, password) {
  const normalizedEmail = String(email ?? '').trim().toLowerCase()
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

export function signOut() {
  try {
    window.localStorage.removeItem(ADMIN_SESSION_KEY)
  } catch (error) {
    console.warn('[auth] session removal failed', error)
  }
}