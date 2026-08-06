import {
  FiBriefcase,
  FiHelpCircle,
  FiHome,
  FiImage,
  FiMail,
  FiSearch,
  FiSettings,
  FiUser,
  FiGrid,
} from 'react-icons/fi'
import { NavLink } from 'react-router-dom'
import { adminNavigation, routeMetadata } from '../../constants/navigation.js'
import { SidebarBrand, SidebarLink, SidebarNav, SidebarShell } from './Sidebar.styles.js'

const navigationIcons = {
  dashboard: FiGrid,
  homepage: FiHome,
  about: FiUser,
  services: FiBriefcase,
  gallery: FiImage,
  faqs: FiHelpCircle,
  enquiries: FiMail,
  seo: FiSearch,
  settings: FiSettings,
}

function Sidebar() {
  return (
    <SidebarShell aria-label="Admin sidebar">
      <SidebarBrand>{routeMetadata.admin.title}</SidebarBrand>
      <SidebarNav>
        {adminNavigation.map((item) => {
          const Icon = navigationIcons[item.icon]
          return (
            <NavLink key={item.path} to={item.path} end={item.path === '/admin/dashboard'}>
              <SidebarLink>
                <Icon aria-hidden="true" color="currentColor" size={16} />
                {item.label}
              </SidebarLink>
            </NavLink>
          )
        })}
      </SidebarNav>
    </SidebarShell>
  )
}

export default Sidebar
