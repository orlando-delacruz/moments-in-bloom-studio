import { NAVBAR_THEMES } from './ui.js'

export const publicNavigation = Object.freeze([
  { label: 'Home', path: '/', navbarTheme: NAVBAR_THEMES.LIGHT },
  { label: 'About', path: '/about', navbarTheme: NAVBAR_THEMES.LIGHT },
  { label: 'Services', path: '/services', navbarTheme: NAVBAR_THEMES.DARK },
  { label: 'Gallery', path: '/gallery', navbarTheme: NAVBAR_THEMES.DARK },
  { label: 'FAQs', path: '/faqs', navbarTheme: NAVBAR_THEMES.DARK },
  { label: 'Contact', path: '/contact', navbarTheme: NAVBAR_THEMES.LIGHT },
])

export const adminNavigation = Object.freeze([
  { label: 'Dashboard', path: '/admin/dashboard', icon: 'dashboard' },
  { label: 'Homepage CMS', path: '/admin/homepage', icon: 'homepage' },
  { label: 'About CMS', path: '/admin/about', icon: 'about' },
  { label: 'Services CMS', path: '/admin/services', icon: 'services' },
  { label: 'Gallery CMS', path: '/admin/gallery', icon: 'gallery' },
  { label: 'FAQs CMS', path: '/admin/faqs', icon: 'faqs' },
  { label: 'Enquiries', path: '/admin/enquiries', icon: 'enquiries' },
  { label: 'SEO', path: '/admin/seo', icon: 'seo' },
  { label: 'Settings', path: '/admin/settings', icon: 'settings' },
])

export const footerNavigationGroups = Object.freeze([
  {
    title: 'Explore',
    links: [
      { label: 'About us', path: '/about' },
      { label: 'Our services', path: '/services' },
      { label: 'View gallery', path: '/gallery' },
      { label: 'Contact us', path: '/contact' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Event styling', path: '/services' },
      { label: 'Floral design', path: '/services' },
      { label: 'Tablescapes', path: '/services' },
      { label: 'Private celebrations', path: '/services' },
    ],
  },
])

export const footerContact = Object.freeze({
  location: 'Melbourne, Australia',
  email: 'hello@momentsinblooms.com',
  phone: '+61 3 0000 0000',
})

export const footerSocialLinks = Object.freeze([
  { label: 'Instagram', href: 'https://www.instagram.com' },
  { label: 'Facebook', href: 'https://www.facebook.com' },
])

export const routeMetadata = Object.freeze({
  public: {
    title: 'Moments in Blooms',
    description: 'Luxury event styling and floral design in Melbourne, Australia.',
  },
  admin: {
    title: 'Moments in Blooms Admin',
    description: 'Content management foundation for Moments in Blooms.',
  },
})
