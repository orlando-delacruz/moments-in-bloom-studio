const imageUrl = (source, width = 1600) => `${source}?auto=format&fit=crop&w=${width}&q=85`

export const ABOUT_SECTION_IDS = Object.freeze({
  HERO: 'hero',
  BRAND_STORY: 'story',
  MISSION_VISION: 'mission-vision',
  CORE_VALUES: 'core-values',
  WHY_US: 'why-us',
  BEHIND_EXPERIENCE: 'experience',
  STATS: 'stats',
  TESTIMONIAL: 'testimonial',
  CTA: 'cta',
})

export const aboutSeo = Object.freeze({
  title: 'About Us | Moments in Blooms - Luxury Event Styling & Floral Design',
  description:
    'Learn about Moments in Blooms, Melbourne’s premier luxury event styling and floral design studio dedicated to crafting unforgettable celebrations with artistry and timeless elegance.',
  url: '/about',
  image: imageUrl('https://images.unsplash.com/photo-1519225421980-715cb0215aed', 1200),
})

export const aboutHero = Object.freeze({
  eyebrow: 'Our Heritage & Philosophy',
  title: 'Designing moments that bloom into memories.',
  description:
    'Melbourne’s premier luxury event styling studio crafting bespoke botanical art and unforgettable atmospheres.',
  primaryCta: {
    label: 'Explore Our Services',
    path: '/services',
  },
  secondaryCta: {
    label: 'Get in Touch',
    path: '/contact',
  },
  image: {
    src: imageUrl('https://images.unsplash.com/photo-1519225421980-715cb0215aed', 1600),
    alt: 'Luxury floral installation with warm candlelit table setup',
    credit: 'Photo on Unsplash',
  },
})

export const aboutBrandStory = Object.freeze({
  subtitle: 'Our Story',
  title: 'Rooted in passion, cultivated with intention.',
  paragraphs: Object.freeze([
    'Moments in Blooms began with a simple yet profound realization: extraordinary celebrations are born from the seamless union of artistic floral design and thoughtful atmosphere.',
    'Over the years, our studio has grown from intimate botanical styling into one of Melbourne’s most sought-after luxury event styling houses. We treat every floral arrangement as a living sculpture, carefully selecting blooms for texture, movement, and color harmony.',
    'Whether styling an opulent vineyard wedding, an intimate private soirée, or a high-profile brand launch, our team brings meticulous attention to detail and unwavering artistic passion to every single element.',
  ]),
  quote: {
    text: 'We believe flowers speak a quiet language of luxury—transforming spaces into unforgettable emotional experiences.',
    author: 'Elena Vance',
    role: 'Founder & Creative Director',
  },
  image: {
    src: imageUrl('https://images.unsplash.com/photo-1561181286-d3fee7d55364', 1200),
    alt: 'Floral artist carefully arranging fresh luxury roses and greenery for a center piece',
    credit: 'Photo on Unsplash',
  },
})

export const aboutMissionVision = Object.freeze({
  subtitle: 'Purpose & Perspective',
  title: 'What drives our creative pursuit',
  mission: {
    tag: 'Our Mission',
    title: 'Curating Extraordinary Experiences',
    description:
      'To design and execute sensory-rich event environments through bespoke botanical arrangements, refined prop curations, and seamless atmosphere creation that honours our clients’ unique stories.',
  },
  vision: {
    tag: 'Our Vision',
    title: 'Pioneering Timeless Floral Artistry',
    description:
      'To be recognized as Australia’s premier luxury event styling studio—setting benchmarks in sustainable botanical practices, artistic innovation, and emotionally resonant event design.',
  },
})

export const aboutCoreValues = Object.freeze([
  {
    id: 'artistic-mastery',
    iconName: 'FiStar',
    title: 'Artistic Mastery',
    description:
      'We treat every arrangement as a bespoke piece of art, combining unexpected textures, organic silhouettes, and fine color palettes.',
  },
  {
    id: 'uncompromising-quality',
    iconName: 'FiAward',
    title: 'Uncompromising Quality',
    description:
      'Only the finest locally grown blooms and premium materials make it into our installations, ensuring fresh and breathtaking displays.',
  },
  {
    id: 'intentional-elegance',
    iconName: 'FiFeather',
    title: 'Intentional Elegance',
    description:
      'Every candle place setting, draped linen, and floral arch is curated with visual balance and subtle luxury in mind.',
  },
  {
    id: 'personal-connection',
    iconName: 'FiHeart',
    title: 'Personal Connection',
    description:
      'We work closely with couples and hosts to translate personal stories and event visions into authentic, emotional atmospheres.',
  },
])

export const aboutWhyChooseUs = Object.freeze({
  subtitle: 'The Distinction',
  title: 'Why couples & hosts choose Moments in Blooms',
  description:
    'Our comprehensive approach blends creative direction, bespoke botanical artistry, and logistics so you can savor every moment.',
  highlights: Object.freeze([
    {
      number: '01',
      title: 'Full-Service Creative Direction',
      description:
        'From initial moodboards and spatial layouts to flower selection and on-site setup, we oversee every aesthetic detail.',
    },
    {
      number: '02',
      title: 'Curated Props & Decor Collection',
      description:
        'Access our private collection of bespoke decor, artisan pottery, custom photo booths, and premium linens.',
    },
    {
      number: '03',
      title: 'Sustainable Botanical Sourcing',
      description:
        'We prioritize eco-conscious practices, foam-free floral techniques, and locally grown seasonal blooms from Victorian growers.',
    },
    {
      number: '04',
      title: 'Seamless On-Site Execution',
      description:
        'Our dedicated installation team ensures flawless setup and timely bump-out, allowing you to be a guest at your own event.',
    },
  ]),
})

export const aboutBehindExperience = Object.freeze({
  subtitle: 'Thoughtful Execution',
  title: 'Behind the Experience',
  description:
    'Every celebration is crafted through a refined multi-stage journey designed to eliminate stress and deliver flawless botanical beauty.',
  steps: Object.freeze([
    {
      stepNumber: '01',
      title: 'Discovery & Creative Direction',
      description:
        'We begin with a deep exploration of your aesthetic preferences, venue architecture, color stories, and moodboard curation.',
    },
    {
      stepNumber: '02',
      title: 'Bespoke Floral & Prop Curation',
      description:
        'Sourcing fresh Victorian seasonal blooms and hand-selecting artisan tableware, linens, and custom photobooths.',
    },
    {
      stepNumber: '03',
      title: 'Spatial Planning & Logistics',
      description:
        'Collaborating with venue managers, lighting teams, and planners to align timelines and spatial layouts for maximum visual impact.',
    },
    {
      stepNumber: '04',
      title: 'On-Site Master Styling',
      description:
        'Our expert installation team hand-places archways, hanging installations, and candlelit centerpieces on your event morning.',
    },
    {
      stepNumber: '05',
      title: 'After-Event Care & Repurposing',
      description:
        'Discreet and timely bump-out service, including wrapping bouquets for guests to take home and sustainable flower composting.',
    },
  ]),
})

export const aboutStats = Object.freeze({
  subtitle: 'Proven Excellence',
  title: 'Our Craft in Numbers',
  description:
    'Years of dedicated floral artistry and luxury event styling defined by quality and unforgettable celebrations.',
  items: Object.freeze([
    {
      value: '350+',
      label: 'Luxury Events Styled',
      description: 'Weddings, galas, and high-profile brand activations across Victoria.',
    },
    {
      value: '100%',
      label: 'Five-Star Praise',
      description: 'Overwhelming praise from couples and event planners for our reliability.',
    },
    {
      value: '8+ Yrs',
      label: 'Artistic Craftsmanship',
      description: 'Years perfecting organic floral techniques and bespoke event design.',
    },
    {
      value: '25+',
      label: 'Venue Partners',
      description: 'Trusted partnerships with Melbourne’s top luxury wedding and event venues.',
    },
  ]),
})

export const aboutTestimonialHighlight = Object.freeze({
  subtitle: 'Client Praise',
  title: 'A Moment to Remember',
  quote:
    'Working with Moments in Blooms was the single best decision we made for our wedding day. The floral installations were an absolute dream that elevated our entire reception. Elena and her team executed everything with grace and perfection.',
  author: 'Charlotte & James',
  role: 'Yarra Valley Vineyard Wedding',
  image: imageUrl('https://images.unsplash.com/photo-1519741497674-611481863552', 800),
})

export const aboutCta = Object.freeze({
  subtitle: 'Begin Your Journey',
  title: 'Let’s bring your celebration to life.',
  description:
    'Whether you have a detailed vision or need creative guidance, we invite you to share your event details with our design team.',
  primaryCta: {
    label: 'Request Consultation',
    path: '/contact',
  },
  secondaryCta: {
    label: 'Browse Portfolio',
    path: '/gallery',
  },
})
