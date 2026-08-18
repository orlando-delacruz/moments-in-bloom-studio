import { useRef, useState } from 'react'
import { FiExternalLink, FiLogOut, FiMenu } from 'react-icons/fi'
import { useLocation, useNavigate } from 'react-router-dom'
import ConfirmDialog from '../admin/ConfirmDialog/index.js'
import Toast from '../admin/Toast/index.js'
import { adminLogin } from '../../constants/admin.js'
import { adminNavigationGroups, routeMetadata } from '../../constants/navigation.js'
import useAuth from '../../hooks/useAuth.js'
import {
  TopbarActions,
  TopbarContainer,
  TopbarContext,
  TopbarMenuButton,
  TopbarShell,
  TopbarSignOut,
  TopbarTitle,
  TopbarUser,
  TopbarUserAvatar,
  TopbarUserEmail,
  TopbarViewSite,
} from './Topbar.styles.js'

function Topbar({ onMenuClick, menuOpen = false }) {
  const { session, signOut } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const [confirmOpen, setConfirmOpen] = useState(false)
  const [isSigningOut, setIsSigningOut] = useState(false)
  const [signOutError, setSignOutError] = useState(null)
  const errorTimerRef = useRef(null)

  const currentGroup = adminNavigationGroups.find((group) =>
    group.items.some(
      (item) =>
        location.pathname === item.path ||
        location.pathname.startsWith(`${item.path}/`),
    ),
  )
  const currentItem = currentGroup?.items.find(
    (item) =>
      location.pathname === item.path ||
      location.pathname.startsWith(`${item.path}/`),
  )

  const showSignOutError = (message) => {
    setSignOutError(message)
    window.clearTimeout(errorTimerRef.current)
    errorTimerRef.current = window.setTimeout(() => setSignOutError(null), 3200)
  }

  const handleSignOut = () => {
    setConfirmOpen(true)
  }

  const handleCancelSignOut = () => {
    if (isSigningOut) return
    setConfirmOpen(false)
  }

  const handleConfirmSignOut = async () => {
    if (isSigningOut) return
    setIsSigningOut(true)

    const result = await signOut()
    setIsSigningOut(false)

    if (result?.error) {
      setConfirmOpen(false)
      showSignOutError(result.error.message)
      return
    }

    setConfirmOpen(false)
    navigate('/admin/login', { replace: true })
  }

  const email = session?.email ?? ''
  const initials = email
    .split('@')[0]
    .split(/[._-]+/)
    .map((part) => part[0] ?? '')
    .join('')
    .slice(0, 2)
    .toUpperCase()

  return (
    <TopbarShell>
      <TopbarContainer>
        <TopbarContext>
          {onMenuClick ? (
            <TopbarMenuButton
              type="button"
              onClick={onMenuClick}
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={menuOpen}
              aria-controls="admin-sidebar"
              title="Open navigation menu"
            >
              <FiMenu aria-hidden="true" size={18} />
            </TopbarMenuButton>
          ) : null}
          <div>
            <TopbarTitle>{currentItem?.label ?? routeMetadata.admin.title}</TopbarTitle>
            {currentGroup && currentGroup.id !== 'overview' ? (
              <span>{currentGroup.label}</span>
            ) : null}
          </div>
        </TopbarContext>

        <TopbarActions>
          <TopbarViewSite to="/" target="_blank" rel="noreferrer">
            <FiExternalLink aria-hidden="true" size={14} />
            <span>View site</span>
          </TopbarViewSite>
          {session ? (
            <TopbarUser title={email}>
              <TopbarUserAvatar aria-hidden="true">{initials}</TopbarUserAvatar>
              <TopbarUserEmail>{email}</TopbarUserEmail>
            </TopbarUser>
          ) : null}
          <TopbarSignOut
            type="button"
            onClick={handleSignOut}
            disabled={isSigningOut}
            aria-busy={isSigningOut}
            aria-label={adminLogin.signOutLabel}
            title={adminLogin.signOutLabel}
          >
            <FiLogOut aria-hidden="true" size={16} />
          </TopbarSignOut>
        </TopbarActions>
      </TopbarContainer>

      <ConfirmDialog
        open={confirmOpen}
        title="Log out?"
        description="Are you sure you want to log out of the admin dashboard?"
        confirmLabel="Yes, Log Out"
        cancelLabel="Cancel"
        onConfirm={handleConfirmSignOut}
        onCancel={handleCancelSignOut}
      />

      <Toast visible={Boolean(signOutError)} message={signOutError} tone="error" />
    </TopbarShell>
  )
}

export default Topbar