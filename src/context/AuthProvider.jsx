import { useCallback, useMemo, useState } from 'react'
import { getSession, signIn as signInService, signOut as signOutService } from '../services/auth.js'
import { AuthContext } from './AuthContext.jsx'

function AuthProvider({ children }) {
  const [session, setSession] = useState(() => getSession())

  const signIn = useCallback(async (email, password) => {
    const result = await signInService(email, password)
    if (result.session) {
      setSession(result.session)
    }
    return result
  }, [])

  const signOut = useCallback(() => {
    signOutService()
    setSession(null)
  }, [])

  const value = useMemo(
    () => ({ session, signIn, signOut }),
    [session, signIn, signOut],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider