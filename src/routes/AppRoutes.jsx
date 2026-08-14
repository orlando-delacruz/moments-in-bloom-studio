import { lazy, Suspense } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import AdminLayout from '../layout/AdminLayout.jsx'
import PublicLayout from '../layout/PublicLayout.jsx'
import { LoadingScreen } from '../components/Loading/index.js'
import RequireAuth from '../components/RequireAuth/index.js'
import ScrollToTop from '../components/ScrollToTop/index.js'

const Home = lazy(() => import('../pages/public/Home/Home.jsx'))
const About = lazy(() => import('../pages/public/About/About.jsx'))
const Services = lazy(() => import('../pages/public/Services/Services.jsx'))
const Gallery = lazy(() => import('../pages/public/Gallery/Gallery.jsx'))
const FAQs = lazy(() => import('../pages/public/FAQs/FAQs.jsx'))
const Contact = lazy(() => import('../pages/public/Contact/Contact.jsx'))
const Dashboard = lazy(() => import('../pages/admin/Dashboard/Dashboard.jsx'))
const HomepageCMS = lazy(() => import('../pages/admin/HomepageCMS/HomepageCMS.jsx'))
const AboutCMS = lazy(() => import('../pages/admin/AboutCMS/AboutCMS.jsx'))
const ServicesCMS = lazy(() => import('../pages/admin/ServicesCMS/ServicesCMS.jsx'))
const GalleryCMS = lazy(() => import('../pages/admin/GalleryCMS/GalleryCMS.jsx'))
const FAQsCMS = lazy(() => import('../pages/admin/FAQsCMS/FAQsCMS.jsx'))
const Enquiries = lazy(() => import('../pages/admin/Enquiries/Enquiries.jsx'))
const SEO = lazy(() => import('../pages/admin/SEO/SEO.jsx'))
const Settings = lazy(() => import('../pages/admin/Settings/Settings.jsx'))
const Login = lazy(() => import('../pages/admin/Login/Login.jsx'))
const NotFound = lazy(() => import('../pages/NotFound/NotFound.jsx'))

function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="faqs" element={<FAQs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>

          <Route path="admin/login" element={<Login />} />

          <Route
            path="admin"
            element={
              <RequireAuth>
                <AdminLayout />
              </RequireAuth>
            }
          >
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="homepage" element={<HomepageCMS />} />
            <Route path="about" element={<AboutCMS />} />
            <Route path="services" element={<ServicesCMS />} />
            <Route path="gallery" element={<GalleryCMS />} />
            <Route path="faqs" element={<FAQsCMS />} />
            <Route path="enquiries" element={<Enquiries />} />
            <Route path="seo" element={<SEO />} />
            <Route path="settings" element={<Settings />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default AppRoutes
