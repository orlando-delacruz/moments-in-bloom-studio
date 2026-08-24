import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar/index.js'
import Topbar from '../components/Topbar/index.js'
import { AdminMain, AdminShell, AdminSkipLink, AdminWorkspace } from './AdminLayout.styles.js'

function AdminLayout() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [collapsed, setCollapsed] = useState(false)

  useEffect(() => {
    if (!drawerOpen) return undefined
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setDrawerOpen(false)
      }
    }
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [drawerOpen])

  return (
    <AdminShell $collapsed={collapsed}>
      <AdminSkipLink href="#admin-main-content">Skip to content</AdminSkipLink>
      <Sidebar
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        collapsed={collapsed}
        onToggleCollapse={() => setCollapsed((current) => !current)}
      />
      <AdminWorkspace $drawerOpen={drawerOpen} onClick={() => drawerOpen && setDrawerOpen(false)}>
        <Topbar onMenuClick={() => setDrawerOpen((open) => !open)} menuOpen={drawerOpen} />
        <AdminMain id="admin-main-content" tabIndex={-1}>
          <Outlet />
        </AdminMain>
      </AdminWorkspace>
    </AdminShell>
  )
}

export default AdminLayout