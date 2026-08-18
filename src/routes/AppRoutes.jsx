import { lazy, Suspense } from 'react'
import { Navigate, Outlet, createBrowserRouter, RouterProvider } from 'react-router-dom'
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
const HomepageSectionDetail = lazy(() =>
  import('../pages/admin/HomepageCMS/DetailPages.jsx').then((m) => ({ default: m.HomepageSectionDetail })))
const HomepageItemDetail = lazy(() =>
  import('../pages/admin/HomepageCMS/DetailPages.jsx').then((m) => ({ default: m.HomepageItemDetail })))
const AboutCMS = lazy(() => import('../pages/admin/AboutCMS/AboutCMS.jsx'))
const AboutSectionDetail = lazy(() =>
  import('../pages/admin/AboutCMS/DetailPages.jsx').then((m) => ({ default: m.AboutSectionDetail })))
const AboutItemDetail = lazy(() =>
  import('../pages/admin/AboutCMS/DetailPages.jsx').then((m) => ({ default: m.AboutItemDetail })))
const ServicesCMS = lazy(() => import('../pages/admin/ServicesCMS/ServicesCMS.jsx'))
const ServicesSectionDetail = lazy(() =>
  import('../pages/admin/ServicesCMS/DetailPages.jsx').then((m) => ({ default: m.ServicesSectionDetail })))
const ServicesItemDetail = lazy(() =>
  import('../pages/admin/ServicesCMS/DetailPages.jsx').then((m) => ({ default: m.ServicesItemDetail })))
const CollectionDetailPage = lazy(() =>
  import('../pages/admin/ServicesCMS/DetailPages.jsx').then((m) => ({ default: m.CollectionDetailPage })))
const CollectionSectionDetailPage = lazy(() =>
  import('../pages/admin/ServicesCMS/DetailPages.jsx').then((m) => ({ default: m.CollectionSectionDetailPage })))
const GalleryCMS = lazy(() => import('../pages/admin/GalleryCMS/GalleryCMS.jsx'))
const GallerySectionDetail = lazy(() =>
  import('../pages/admin/GalleryCMS/DetailPages.jsx').then((m) => ({ default: m.GallerySectionDetail })))
const GalleryItemDetail = lazy(() =>
  import('../pages/admin/GalleryCMS/DetailPages.jsx').then((m) => ({ default: m.GalleryItemDetail })))
const FAQsCMS = lazy(() => import('../pages/admin/FAQsCMS/FAQsCMS.jsx'))
const FaqItemDetail = lazy(() =>
  import('../pages/admin/FAQsCMS/FaqItemDetail.jsx'))
const FaqCategoryDetail = lazy(() =>
  import('../pages/admin/FAQsCMS/FaqCategoryDetail.jsx'))
const FaqPageDetail = lazy(() =>
  import('../pages/admin/FAQsCMS/FaqPageDetail.jsx'))
const FaqContent = lazy(() =>
  import('../pages/admin/FAQsCMS/FaqContent.jsx'))
const FaqItems = lazy(() =>
  import('../pages/admin/FAQsCMS/FaqItems.jsx'))
const FaqCategories = lazy(() =>
  import('../pages/admin/FAQsCMS/FaqCategories.jsx'))
const Enquiries = lazy(() => import('../pages/admin/Enquiries/Enquiries.jsx'))
const SEO = lazy(() => import('../pages/admin/SEO/SEO.jsx'))
const SeoSectionDetail = lazy(() =>
  import('../pages/admin/SEO/DetailPages.jsx').then((m) => ({ default: m.SeoSectionDetail })))
const Settings = lazy(() => import('../pages/admin/Settings/Settings.jsx'))
const SettingsSectionDetail = lazy(() =>
  import('../pages/admin/Settings/DetailPages.jsx').then((m) => ({ default: m.SettingsSectionDetail })))
const Login = lazy(() => import('../pages/admin/Login/Login.jsx'))
const NotFound = lazy(() => import('../pages/NotFound/NotFound.jsx'))

function AppShell() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <ScrollToTop />
      <Outlet />
    </Suspense>
  )
}

const router = createBrowserRouter([
  {
    element: <AppShell />,
    children: [
      {
        element: <PublicLayout />,
        children: [
          { path: '/', element: <Home /> },
          { path: 'about', element: <About /> },
          { path: 'services', element: <Services /> },
          { path: 'gallery', element: <Gallery /> },
          { path: 'faqs', element: <FAQs /> },
          { path: 'contact', element: <Contact /> },
          { path: '*', element: <NotFound /> },
        ],
      },
      { path: 'admin/login', element: <Login /> },
      {
        path: 'admin',
        element: (
          <RequireAuth>
            <AdminLayout />
          </RequireAuth>
        ),
        children: [
          { index: true, element: <Navigate replace to="dashboard" /> },
          { path: 'dashboard', element: <Dashboard /> },
          { path: 'homepage', element: <HomepageCMS /> },
          { path: 'homepage/:sectionKey', element: <HomepageSectionDetail /> },
          { path: 'homepage/:sectionKey/new', element: <HomepageItemDetail /> },
          { path: 'homepage/:sectionKey/:itemId', element: <HomepageItemDetail /> },
          { path: 'about', element: <AboutCMS /> },
          { path: 'about/:sectionKey', element: <AboutSectionDetail /> },
          { path: 'about/:sectionKey/new', element: <AboutItemDetail /> },
          { path: 'about/:sectionKey/:itemId', element: <AboutItemDetail /> },
          { path: 'services', element: <ServicesCMS /> },
          { path: 'services/:sectionKey', element: <ServicesSectionDetail /> },
          { path: 'services/:sectionKey/new', element: <ServicesItemDetail /> },
          { path: 'services/:sectionKey/:itemId', element: <ServicesItemDetail /> },
          {
            path: 'services/serviceCollections/:collectionId',
            element: <CollectionDetailPage />,
          },
          {
            path: 'services/serviceCollections/:collectionId/sections/:sectionId',
            element: <CollectionSectionDetailPage />,
          },
          { path: 'gallery', element: <GalleryCMS /> },
          { path: 'gallery/items', element: <GalleryCMS /> },
          { path: 'gallery/items/new', element: <GalleryItemDetail /> },
          { path: 'gallery/items/:itemId', element: <GalleryItemDetail /> },
          { path: 'gallery/:sectionKey', element: <GallerySectionDetail /> },
          { path: 'gallery/:sectionKey/new', element: <GalleryItemDetail /> },
          { path: 'gallery/:sectionKey/:itemId', element: <GalleryItemDetail /> },
          { path: 'faqs', element: <FAQsCMS /> },
          { path: 'faqs/hero', element: <FaqPageDetail section="hero" /> },
          { path: 'faqs/content', element: <FaqContent /> },
          {
            path: 'faqs/content/heading',
            element: <FaqPageDetail section="heading" />,
          },
          {
            path: 'faqs/content/categories',
            element: <FaqCategories />,
          },
          {
            path: 'faqs/content/categories/new',
            element: <FaqCategoryDetail />,
          },
          {
            path: 'faqs/content/categories/:categoryId',
            element: <FaqCategoryDetail />,
          },
          { path: 'faqs/content/items', element: <FaqItems /> },
          {
            path: 'faqs/content/items/new',
            element: <FaqItemDetail />,
          },
          {
            path: 'faqs/content/items/:faqId',
            element: <FaqItemDetail />,
          },
          { path: 'faqs/cta', element: <FaqPageDetail section="cta" /> },
          { path: 'faqs/page', element: <FaqPageDetail /> },
          { path: 'enquiries', element: <Enquiries /> },
          { path: 'seo', element: <SEO /> },
          { path: 'seo/:sectionKey', element: <SeoSectionDetail /> },
          { path: 'settings', element: <Settings /> },
          { path: 'settings/:sectionKey', element: <SettingsSectionDetail /> },
          { path: '*', element: <NotFound /> },
        ],
      },
    ],
  },
])

function AppRoutes() {
  return <RouterProvider router={router} />
}

export default AppRoutes