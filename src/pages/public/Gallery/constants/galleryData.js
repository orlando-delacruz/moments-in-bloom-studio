// Gallery categories for filtering
export const GALLERY_CATEGORIES = [
  { id: 'all', label: 'All Collections' },
  { id: 'weddings', label: 'Weddings' },
  { id: 'engagements', label: 'Engagements' },
  { id: 'birthdays', label: 'Birthdays' },
  { id: 'corporate', label: 'Corporate Events' },
  { id: 'luxury-booth', label: 'Luxury Booth' },
  { id: 'decor-hire', label: 'Decor Hire' },
  { id: 'blissful-nest', label: 'Blissful Nest' },
]

// Gallery items - placeholder data until CMS integration
export const GALLERY_ITEMS = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1600&q=80',
    title: 'Ethereal Garden Wedding',
    subtitle: 'Full Service Styling',
    category: 'weddings',
    size: 'large',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80',
    title: 'Intimate Engagement',
    subtitle: 'Floral Design',
    category: 'engagements',
    size: 'portrait',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1530103862676-de3c9da59af7?w=800&q=80',
    title: 'Golden Hour Celebration',
    subtitle: 'Table Styling',
    category: 'weddings',
    size: 'medium',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1478146896981-b80c4635432c?w=800&q=80',
    title: 'Modern Minimalist',
    subtitle: 'Decor Hire',
    category: 'decor-hire',
    size: 'small',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=1200&q=80',
    title: 'Romantic Tablescape',
    subtitle: 'Full Styling',
    category: 'weddings',
    size: 'wide',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1469334031218-e38a5597bd30?w=800&q=80',
    title: 'Boho Chic Birthday',
    subtitle: 'Party Styling',
    category: 'birthdays',
    size: 'medium',
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1519225421980-715cb0202128?w=800&q=80',
    title: 'Corporate Gala',
    subtitle: 'Event Design',
    category: 'corporate',
    size: 'portrait',
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1465495976277-3b43e2700f96?w=800&q=80',
    title: 'Luxury Photobooth',
    subtitle: 'Premium Experience',
    category: 'luxury-booth',
    size: 'small',
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&q=80',
    title: 'Cozy Blissful Nest',
    subtitle: 'Home Styling',
    category: 'blissful-nest',
    size: 'medium',
  },
  {
    id: 10,
    src: 'https://images.unsplash.com/photo-1507504031981-a2368c6e1518?w=1600&q=80',
    title: 'Enchanted Evening',
    subtitle: 'Full Service',
    category: 'weddings',
    size: 'large',
  },
]

// Featured event stories
export const FEATURED_STORIES = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80',
    tag: 'Featured Wedding',
    title: 'Sarah & James • Royal Botanic Gardens',
    description: 'A breathtaking celebration featuring cascading florals, crystal elegance, and an ethereal color palette that perfectly captured their love story.',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=1200&q=80',
    tag: 'Luxury Event',
    title: 'Victoria\'s 30th • Crown Pavilion',
    description: 'An unforgettable milestone birthday transformed into a glamorous affair with gold accents, lush greenery, and bespoke lighting design.',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1478146896981-b80c4635432c?w=1200&q=80',
    tag: 'Corporate Excellence',
    title: 'Tech Innovators Gala • Melbourne Convention Centre',
    description: 'A sophisticated corporate event blending modern aesthetics with warm hospitality, featuring custom installations and immersive experiences.',
  },
]

// Instagram preview posts
export const INSTAGRAM_POSTS = [
  { id: 1, src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80' },
  { id: 2, src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&q=80' },
  { id: 3, src: 'https://images.unsplash.com/photo-1530103862676-de3c9da59af7?w=600&q=80' },
  { id: 4, src: 'https://images.unsplash.com/photo-1478146896981-b80c4635432c?w=600&q=80' },
  { id: 5, src: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=600&q=80' },
  { id: 6, src: 'https://images.unsplash.com/photo-1469334031218-e38a5597bd30?w=600&q=80' },
  { id: 7, src: 'https://images.unsplash.com/photo-1519225421980-715cb0272128?w=600&q=80' },
  { id: 8, src: 'https://images.unsplash.com/photo-1465495976277-3b43e2700f96?w=600&q=80' },
]

// Hero section content
export const HERO_CONTENT = {
  eyebrow: 'Our Portfolio',
  title: 'Moments That Take Your Breath Away',
  description: 'Discover our curated collection of unforgettable celebrations, each thoughtfully designed to reflect the unique love stories and special moments we\'ve had the privilege to create.',
  primaryCTA: 'Start Your Journey',
  secondaryCTA: 'Explore Services',
  primaryLink: '/contact',
  secondaryLink: '/services',
  backgroundImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80',
}

// Introduction section content
export const INTRODUCTION_CONTENT = {
  eyebrow: 'Our Philosophy',
  title: 'Creating Unforgettable Celebrations',
  text: 'At Moments in Blooms, we believe every celebration tells a story. Our approach combines artistic vision with meticulous attention to detail, transforming spaces into immersive experiences that captivate hearts and create lasting memories. From intimate gatherings to grand affairs, each element is carefully curated to reflect your unique narrative.',
}

// CTA section content
export const CTA_CONTENT = {
  eyebrow: 'Begin Your Story',
  title: 'Let\'s Create Something Beautiful Together',
  description: 'Ready to bring your dream celebration to life? We\'d love to hear about your vision and help you create moments that will be cherished forever.',
  primaryCTA: 'Enquire Now',
  secondaryCTA: 'Learn More About Us',
  primaryLink: '/contact',
  secondaryLink: '/about',
  backgroundImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80',
}

// Instagram section content
export const INSTAGRAM_CONTENT = {
  eyebrow: 'Follow Us',
  title: '@momentsinblooms',
}

// Featured stories section content
export const FEATURED_STORIES_SECTION_CONTENT = {
  eyebrow: 'Portfolio Highlights',
  title: 'Featured Event Stories',
}
