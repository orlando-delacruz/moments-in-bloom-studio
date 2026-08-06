import { Outlet } from 'react-router-dom'
import BackToTop from '../components/BackToTop/index.js'
import Footer from '../components/Footer/index.js'
import Navbar from '../components/Navbar/index.js'
import { PublicMain, PublicShell } from './PublicLayout.styles.js'

function PublicLayout() {
  return (
    <PublicShell>
      <Navbar />
      <PublicMain id="main-content">
        <Outlet />
      </PublicMain>
      <BackToTop />
      <Footer />
    </PublicShell>
  )
}

export default PublicLayout
