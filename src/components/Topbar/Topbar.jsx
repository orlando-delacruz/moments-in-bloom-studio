import { FiExternalLink, FiLogOut, FiMenu } from 'react-icons/fi'
import { useLocation, useNavigate } from 'react-router-dom'
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

  const handleSignOut = () => {
    signOut()
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
            aria-label={adminLogin.signOutLabel}
            title={adminLogin.signOutLabel}
          >
            <FiLogOut aria-hidden="true" size={16} />
          </TopbarSignOut>
        </TopbarActions>
      </TopbarContainer>
    </TopbarShell>
  )
}

export default Topbar