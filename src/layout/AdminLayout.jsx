import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar/index.js'
import Topbar from '../components/Topbar/index.js'
import { AdminMain, AdminShell, AdminWorkspace } from './AdminLayout.styles.js'

function AdminLayout() {
  return (
    <AdminShell>
      <Sidebar />
      <AdminWorkspace>
        <Topbar />
        <AdminMain id="admin-main-content">
          <Outlet />
        </AdminMain>
      </AdminWorkspace>
    </AdminShell>
  )
}

export default AdminLayout
