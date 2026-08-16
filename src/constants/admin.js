const ADMIN_DEMO_EMAIL = 'owner@momentsinblooms.com'
const ADMIN_DEMO_PASSWORD = 'bloom-admin'

export const ADMIN_DEMO_CREDENTIALS = Object.freeze({
  email: ADMIN_DEMO_EMAIL,
  password: ADMIN_DEMO_PASSWORD,
})

export const ADMIN_SESSION_KEY = 'mib_admin_session'
export const ADMIN_SESSION_TTL_MS = 8 * 60 * 60 * 1000

export const adminLogin = Object.freeze({
  eyebrow: 'Studio Admin',
  title: 'Welcome back.',
  description:
    'Sign in to manage your website content, gallery, SEO and enquiries.',
  emailLabel: 'Email address',
  emailPlaceholder: 'you@momentsinblooms.com',
  passwordLabel: 'Password',
  submitLabel: 'Sign in',
  loadingLabel: 'Signing in…',
  demoHint: `Demo mode is active. Sign in with ${ADMIN_DEMO_EMAIL} and password ${ADMIN_DEMO_PASSWORD}.`,
  supabaseHint:
    'Admin access is managed by Supabase. Sign in with the email and password set up for your admin account.',
  backToSiteLabel: 'Back to the website',
  signOutLabel: 'Sign out',
})

export const adminPageMeta = Object.freeze({
  dashboard: {
    eyebrow: 'Overview',
    title: 'Dashboard',
    description:
      'See how your website is performing and jump straight to the content you want to update.',
  },
  homepage: {
    eyebrow: 'Content management',
    title: 'Homepage',
    description:
      'Edit the hero, services, gallery preview, testimonials and call-to-action of your homepage.',
  },
  about: {
    eyebrow: 'Content management',
    title: 'About',
    description:
      'Tell your brand story, share your values and highlight why couples choose Moments in Blooms.',
  },
  services: {
    eyebrow: 'Content management',
    title: 'Services',
    description:
      'Manage your packages, pricing, inclusions and the details of every service collection.',
  },
  gallery: {
    eyebrow: 'Content management',
    title: 'Gallery',
    description:
      'Curate your gallery images, categories and the featured stories you want to tell.',
  },
  faqs: {
    eyebrow: 'Content management',
    title: 'FAQs',
    description:
      'Keep your frequently asked questions up to date so enquiries spend less time asking.',
  },
  enquiries: {
    eyebrow: 'Lead inbox',
    title: 'Enquiries',
    description:
      'Review every enquiry that comes through your website and track how you respond.',
  },
  seo: {
    eyebrow: 'Visibility',
    title: 'SEO',
    description:
      'Control how your pages appear in search results with titles, descriptions and images.',
  },
  settings: {
    eyebrow: 'Studio profile',
    title: 'Settings',
    description:
      'Keep your contact details, social links, footer navigation and enquiry options current.',
  },
})

export const adminDashboard = Object.freeze({
  welcomeEyebrow: 'Studio at a glance',
  welcomeTitle: 'Welcome back',
  demoNoticeTitle: 'Demo mode',
  demoNotice:
    'Supabase is not configured, so your edits are saved in this browser only. Set up your environment variables to store content on the live site.',
  reviewEnquiriesLabel: 'Review enquiries',
  contentOverviewTitle: 'Website content',
  recentEnquiriesTitle: 'Recent enquiries',
  viewAllLabel: 'View all',
  enquiriesTotalLabel: 'Total enquiries',
  enquiriesWeekLabel: 'New this week',
  pagesUpdatedLabel: 'Pages updated',
  lastSavedLabel: 'Saved',
  notSavedYetLabel: 'Not saved yet',
  noEnquiriesLabel: 'No enquiries yet',
  noEnquiriesHint:
    'Enquiries from the contact form will appear here.',
})

export const enquiryStatusLabels = Object.freeze({
  new: 'New',
  contacted: 'Contacted',
  quoted: 'Quoted',
  closed: 'Closed',
})

export const ENQUIRY_STATUSES = Object.freeze(['new', 'contacted', 'quoted', 'closed'])
