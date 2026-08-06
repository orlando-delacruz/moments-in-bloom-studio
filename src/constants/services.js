const imageUrl = (source, width = 1600) => `${source}?auto=format&fit=crop&w=${width}&q=85`

export const servicesSeo = Object.freeze({
  title: 'Luxury Event Styling & Photobooth Services Melbourne',
  description:
    'Discover Moments in Blooms bespoke event services in Melbourne — luxury photobooths, event styling, haute floral installations, custom claw machines, and curated tablescapes.',
  url: 'https://www.momentsinblooms.com.au/services',
  image: imageUrl('https://images.unsplash.com/photo-1519741497674-611481863552', 1800),
})

export const SERVICES_SECTION_IDS = Object.freeze({
  HERO: 'services-hero',
  INTRO: 'services-intro',
  FEATURED: 'services-featured',
  INCLUDED: 'services-included',
  EXPERIENCE: 'services-experience',
  GALLERY: 'services-gallery',
  WHY_US: 'services-why-us',
  TESTIMONIALS: 'services-testimonials',
  FAQ: 'services-faq',
  CTA: 'services-cta',
})

export const servicesHero = Object.freeze({
  eyebrow: 'Bespoke Event Styling & Entertainment · Melbourne',
  title: 'The Art of Extraordinary Celebrations.',
  description:
    'From couture floral installations and immersive photobooths to interactive claw machines and bespoke tablescapes — we shape moments that linger in memory.',
  primaryCta: {
    label: 'Reserve Your Event Date',
    path: '/contact',
  },
  secondaryCta: {
    label: 'Explore Our Portfolio',
    path: '/gallery',
  },
  badge: {
    title: 'Melbourne',
    subtitle: 'Premier Event Studio',
  },
  image: {
    src: imageUrl('https://images.unsplash.com/photo-1519741497674-611481863552', 2200),
    alt: 'Luxury wedding reception with candlelight and floral arrangements',
    credit: 'Photo by Secret Garden on Unsplash',
  },
})

export const servicesIntro = Object.freeze({
  subtitle: 'The Moments in Blooms Philosophy',
  title: 'Where architectural elegance meets romantic floral storytelling.',
  paragraph1:
    'We believe an event is more than a gathering — it is a living canvas where light, texture, flora, and laughter converge. Our studio designs bespoke atmospheres that feel effortlessly refined, intimate, and deeply personal.',
  paragraph2:
    'Whether you are planning a grand Yarra Valley wedding, a milestone birthday in South Yarra, or an exclusive brand showcase, every petal, linen, and detail is selected with uncompromising intent.',
  quote: {
    text: 'True luxury lies in the feeling a space evokes long after the candles have flickered out.',
    author: 'Creative Director',
    role: 'Moments in Blooms Melbourne',
  },
  primaryImage: {
    src: imageUrl('https://images.unsplash.com/photo-1520854221256-17451cc331bf', 1200),
    alt: 'Elegant floral tablescape with fine dinnerware and tall candles',
  },
  secondaryImage: {
    src: imageUrl('https://images.unsplash.com/photo-1511285560929-80b456fea0bc', 800),
    alt: 'Close-up of luxury bridal bouquet with pastel roses',
  },
})

export const photoboothPackages = Object.freeze([
  {
    id: 'signature-package',
    name: 'SIGNATURE',
    tagline: 'Essential Luxury Photo Experience',
    price: '$600',
    hireDuration: '3 Hours Hire',
    popular: false,
    badge: '3 Hours',
    description:
      'Our foundation photo studio experience featuring studio-grade DSLR optics, softbox beauty lighting, custom monogrammed prints, and instant digital sharing.',
    inclusions: [
      'Studio-grade DSLR camera & beauty softbox lighting',
      'Unlimited instant high-definition physical prints',
      'Custom print template design with your monogram or logo',
      'Selection from our luxury studio fabric backdrops',
      'Friendly, uniformed photobooth attendant on site',
      'Instant digital sharing via QR Code & AirDrop',
      'Complete delivery, setup, and pack-down handling',
    ],
    addOns: [
      'Extra Hire Time: $100 per additional hour',
      'Take-Home Photobooth Frame Bundle: $150',
      'Vintage Audio Guestbook Add-on: $200',
      'Custom Neon Light Backdrop Sign: $120',
    ],
    travelNotes:
      'Complimentary travel within 35km of Melbourne CBD. A standard per-km travel fee applies for locations beyond 35km.',
    ctaText: 'Reserve Signature Package',
  },
  {
    id: 'glam-package',
    name: 'GLAM',
    tagline: 'Smooth Beauty Filter & Extended Hire',
    price: '$850',
    hireDuration: '4 Hours Hire',
    popular: false,
    badge: '4 Hours',
    description:
      'Elevated studio booth experience including our signature Hollywood glam skin-smoothing filter, silk velvet backdrop, and extended 4-hour coverage.',
    inclusions: [
      'Everything included in the Signature Package',
      'Hollywood B&W & Color skin-smoothing Glam Filter mode',
      '4 Hours continuous photobooth operation',
      'Premium Silk Velvet or Botanical Backdrop selection',
      'Custom wooden easel & framed instruction display',
      'Full high-resolution digital album download link post-event',
      'Choice of 2x6 photo strips or 4x6 postcard print layouts',
    ],
    addOns: [
      'Take-Home Photobooth Frame Pack: $150',
      'Vintage Audio Guestbook Add-on: $150',
      'Custom Vinyl Monogram Backing: $100',
      'Idle Hour (setup completed early): $60 per hour',
    ],
    travelNotes:
      'Complimentary travel within 40km of Melbourne CBD. Standard Victorian regional rates apply for extended travel.',
    ctaText: 'Reserve Glam Package',
  },
  {
    id: 'vip-package',
    name: 'VIP',
    tagline: 'The Ultimate All-Inclusive Photobooth Suite',
    price: '$1200',
    hireDuration: '4 Hours Hire',
    popular: true,
    badge: 'Most Popular Luxury Suite',
    description:
      'Our flagship luxury experience featuring Australia’s first Take-Home Photobooth Frames, Vintage Audio Guestbook integration, double prints, and VIP lead attendant.',
    inclusions: [
      'Everything included in Glam & Signature Packages',
      '4 Hours continuous photobooth operation',
      'Australia’s First Take-Home Photobooth Frames set for guests',
      'Vintage Audio Guestbook phone & audio recording reel included',
      'Double instant physical prints for every guest session',
      'Custom Neon or Monogrammed backdrop integration',
      'Dedicated Senior Lead Attendant on site',
      'Priority VIP early bump-in and venue setup',
    ],
    addOns: [
      'Extra Hire Time: $100 per additional hour',
      'Custom Hardcover Leather Photo Album & Pen Set: $150',
      'Deluxe Prop Collection Upgrade: $80',
    ],
    travelNotes:
      'Complimentary travel within 50km of Melbourne CBD. Discounted regional Victorian travel fees.',
    ctaText: 'Reserve VIP Suite',
  },
])

export const photoboothHighlights = Object.freeze({
  framesFeature: {
    badge: 'Exclusive Keepsake',
    title: "Australia's First Take-Home Photobooth Frames",
    description:
      'We are proud to introduce an exclusive luxury touch for your guests — bespoke take-home photo frames crafted specifically to fit your instant prints. Guests leave with a stunning physical memento ready to be displayed in their home as a lasting memory of your celebration.',
    highlights: [
      'Custom acrylic and timber frame finishes tailored to your aesthetic',
      'Precision cut to perfectly fit instant 2x6 and 4x6 photobooth prints',
      'Personalized with gold leaf monograms or event dates on request',
      'The ultimate wedding and party favor loved by guests of all ages',
    ],
    image: {
      src: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1200&q=85',
      alt: 'Luxury custom photo frame with elegant event print inside',
    },
  },
  studioGrade: {
    badge: 'Uncompromising Quality',
    title: 'Studio-Grade Photobooth Moments',
    description:
      'We treat every booth capture as a magazine-worthy portrait studio. Combining high-resolution DSLR sensors, softbox studio beauty lighting, and lab-quality dye-sublimation printing, your guests receive flawless prints that never fade.',
    features: [
      {
        title: 'Professional Cameras',
        desc: 'High-resolution DSLR optics providing razor-sharp clarity and rich natural skin tones.',
      },
      {
        title: 'Studio Softbox Lighting',
        desc: 'Diffused studio beauty lighting engineered to eliminate harsh shadows and flatter every guest.',
      },
      {
        title: 'Unlimited Instant Prints',
        desc: 'Lab-quality prints ready in under 10 seconds, waterproof and smudge-proof for a lifetime.',
      },
      {
        title: 'Personalised Templates',
        desc: 'Bespoke print graphic artwork tailored with your names, event date, monogram, or branding.',
      },
      {
        title: 'Elegant Backdrops',
        desc: 'Curated collection of silk velvet, botanical flower walls, and modern architectural arches.',
      },
      {
        title: 'Premium Quality',
        desc: 'White-glove service managed by professional attendants trained to keep the energy high.',
      },
    ],
  },
})

export const blissfulNestPrizeOptions = Object.freeze([
  {
    id: 'standard-prize',
    title: 'Standard Prize Package',
    tagline: 'Playful Nostalgia & Soft Keepsakes',
    description:
      'Curated pastel plush toys, custom keychains, soft plush keepsakes, and traditional metallic event tokens.',
    badge: 'Classic Choice',
    items: ['Pastel plush companions', 'Custom acrylic keyrings', 'Metallic play tokens'],
    image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=800&q=85',
  },
  {
    id: 'premium-prize',
    title: 'Premium Prize Package',
    tagline: 'Artisan Confectionery & Favors',
    description:
      'Custom boxed wedding favor gifts, gourmet artisan chocolates, bespoke scented candles, and monogrammed keepsakes.',
    badge: 'Host Favorite',
    items: ['Bespoke scented mini candles', 'Artisan boxed chocolates', 'Monogrammed favors'],
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=85',
  },
  {
    id: 'deluxe-prize',
    title: 'Deluxe Prize Package',
    tagline: 'Luxury Beauty & Mini Champagne',
    description:
      'Designer beauty and skincare miniatures, mini Moët or Bottega champagne bottles, and high-value prize capsules.',
    badge: 'VIP Luxury',
    items: ['Mini champagne bottles', 'Designer beauty miniatures', 'VIP prize capsules'],
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=85',
  },
  {
    id: 'custom-order-prize',
    title: 'Custom Order Package',
    tagline: 'Tailored for Brand & Theme',
    description:
      'Completely tailored prizes sourced, packaged, and branded specifically for your wedding color palette, theme, or corporate sponsors.',
    badge: 'Bespoke Sourcing',
    items: ['Custom corporate merchandise', 'Bespoke branded packaging', 'Theme-matched items'],
    image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=85',
  },
])

export const serviceCategories = Object.freeze([
  {
    id: 'decor-hire',
    order: 1,
    featured: true,
    title: 'Decor Hire',
    navSub: 'Luxury Event Decor',
    navMeta: '4 Collections',
    description:
      'Luxury decor collections for weddings and special events.',
    coverImage: {
      src: 'https://images.unsplash.com/photo-1707333512411-3fd0773d15ce?auto=format&fit=crop&w=1400&q=85',
      alt: 'Curated event decor hire setup with plinths and flower arrangements',
    },
    sections: [
      {
        id: 'flower-arrangements',
        title: 'Flower Arrangements',
        subtitle: 'Bespoke Floral Sculptures & Focal Centerpieces',
        description:
          'Couture artificial and fresh botanical arrangements crafted for maximum visual impact. Highlighted by our signature Red Romance collection.',
        featuredItem: {
          name: 'Red Romance Collection',
          tagline: 'Signature High-Impact Botanical Feature',
          description:
            'Deep crimson roses, velvety wine blooms, and lush trailing foliage designed to create dramatic romantic focal points.',
          options: [
            {
              name: 'Grand Arrangement',
              specs: '2.1m Height · High-Impact Floor or Entrance Statement',
              desc: 'Architectural 2.1m high floral tower ideal for ceremony altars, grand venue entrances, or stage framing.',
              image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=800&q=85',
            },
            {
              name: 'Small Hanging Arrangement',
              specs: 'Suspended Ceiling / Archway Accent',
              desc: 'Elegantly proportioned hanging arrangement for arbors, backdrop corners, or ceiling light installations.',
              image: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=800&q=85',
            },
            {
              name: 'Surface Set',
              specs: 'Table & Plinth Accent Collection',
              desc: 'Coordinated trio of surface arrangements designed for welcome tables, cake plinths, and guest dining.',
              image: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=800&q=85',
            },
          ],
        },
      },
      {
        id: 'whimsical-garden',
        title: 'Whimsical Garden Collection',
        subtitle: 'Enchanted Lighting & Botanical Artistry',
        description:
          'Ethereal garden elements designed to infuse magical atmosphere and warm glow into evening receptions and cocktail hours.',
        featuredItem: {
          name: 'Light Up Butterflies',
          tagline: 'Illuminated Enchanted Sculpture Features',
          description:
            'Delicate, glowing butterfly sculptures crafted with soft interior LED lighting, ideal for garden paths, photo backdrops, and dancefloor corners.',
          gallery: [
            {
              src: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=85',
              title: 'Illuminated Garden Pathway',
            },
            {
              src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=85',
              title: 'Glow Butterfly Canopy',
            },
            {
              src: 'https://images.unsplash.com/photo-1682376932031-c62735732f6b?auto=format&fit=crop&w=800&q=85',
              title: 'Ethereal Reception Lounge',
            },
          ],
        },
      },
      {
        id: 'backdrops-collection',
        title: 'Backdrops & Architectural Walls',
        subtitle: 'Statement Focal Walls & Photo Backdrops',
        description:
          'Architectural arches, ribbed plaster panels, and curved walls designed to elevate stage areas, photo moments, and ceremony altars.',
        featuredItem: {
          name: 'Ripple Arch Backdrop',
          dimensions: '2m Height × 1m Width',
          tagline: 'Textured Ribbed Architectural Feature Wall',
          description:
            'A modern 2m x 1m ribbed arch backdrop in warm off-white plaster finish. Easily customized with floral sprays, neon signage, or vinyl monograms.',
          image: 'https://images.unsplash.com/photo-1682376932031-c62735732f6b?auto=format&fit=crop&w=1000&q=85',
        },
      },
      {
        id: 'plinths-props',
        title: 'Plinths & Props Collection',
        subtitle: 'Display Pedestals & Custom Furniture Hire',
        description:
          'Multi-height display pedestals, cake plinths, easels, and velvet seating crafted for cohesive event styling.',
        featuredItem: {
          name: 'White Ripple Plinths',
          tagline: 'Fluted Architectural Display Pedestals',
          description:
            'Classic white fluted ripple plinths available in sets of 3 varying heights (90cm, 70cm, 50cm). Perfect for displaying cakes, floral arrangements, or prize items.',
          image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=85',
        },
      },
    ],
  },
  {
    id: 'luxe-booths',
    order: 2,
    featured: true,
    title: 'Luxe Photobooth',
    navSub: 'Mirror Booth Experience',
    navMeta: '3 Packages',
    description:
      'Premium mirror photobooth experiences with luxury upgrades.',
    coverImage: {
      src: 'https://images.pexels.com/photos/8602142/pexels-photo-8602142.jpeg?auto=compress&cs=tinysrgb&w=1200&q=85',
      alt: 'Minimal luxury photobooth studio backdrop with soft lighting',
    },
    isPhotoboothSpecialSection: true,
  },
  {
    id: 'blissful-nest',
    order: 3,
    featured: true,
    title: 'Blissful Nest',
    navSub: 'Luxury Claw Machines',
    navMeta: 'Prize Collections',
    description:
      'Luxury claw machine experiences and prize collections.',
    coverImage: {
      src: 'https://images.unsplash.com/photo-1763076703663-8d28a686612f?auto=format&fit=crop&w=1200&q=85',
      alt: 'Pastel claw machines filled with plush toys and gifts',
    },
    isBlissfulNestSpecialSection: true,
  },
])


export const whatsIncluded = Object.freeze({
  subtitle: 'The Standard of Excellence',
  title: 'What every service experience includes',
  description:
    'Regardless of package size, every Moments in Blooms experience is backed by our white-glove commitment to quality.',
  items: [
    {
      id: 'inc-1',
      iconName: 'FiCompass',
      title: 'Creative Direction & Concept',
      description: 'Bespoke color palettes, spatial layouts, and visual moodboards tailored specifically to your venue.',
    },
    {
      id: 'inc-2',
      iconName: 'FiClock',
      title: 'Precision On-Site Setup',
      description: 'Early venue arrival and meticulous installation hours before your guests walk through the doors.',
    },
    {
      id: 'inc-3',
      iconName: 'FiFeather',
      title: 'Botanical & Prop Curation',
      description: 'Fresh seasonal flowers hand-selected from Melbourne markets and pristine rental decor items.',
    },
    {
      id: 'inc-4',
      iconName: 'FiAward',
      title: 'Dedicated Lead Stylist',
      description: 'A experienced styling lead overseeing every detail so you remain calm, present, and stress-free.',
    },
    {
      id: 'inc-5',
      iconName: 'FiHeart',
      title: 'Personalised Branding',
      description: 'Custom monograms, custom photo print templates, and bespoke signage options available.',
    },
    {
      id: 'inc-6',
      iconName: 'FiLayers',
      title: 'Discreet Pack-Down',
      description: 'Complete bump-out and venue restoration after the event concludes, executed quietly and efficiently.',
    },
  ],
})

export const servicesExperienceTimeline = Object.freeze({
  subtitle: 'Our Thoughtful Process',
  title: 'The Journey to Your Unforgettable Event',
  description:
    'Six deliberate steps ensuring a calm, inspiring, and flawless creative partnership from start to finish.',
  steps: [
    {
      number: '01',
      title: 'Discovery & Consultation',
      description:
        'We begin with an intimate discussion about your event vision, guest count, venue specs, and aesthetic aspirations.',
    },
    {
      number: '02',
      title: 'Concept & Proposal',
      description:
        'Our design team curates a detailed visual moodboard, color palette, and itemized transparent investment proposal.',
    },
    {
      number: '03',
      title: 'Curation & Preparation',
      description:
        'We secure custom props, order premium blooms directly from local growers, and design custom print graphics.',
    },
    {
      number: '04',
      title: 'Precision Installation',
      description:
        'On event day, our styling crew arrives early to build floral clouds, set tables, and position lighting flawlessly.',
    },
    {
      number: '05',
      title: 'The Celebration',
      description:
        'You step into an enchanting room where every detail is taken care of, allowing you to celebrate effortlessly.',
    },
    {
      number: '06',
      title: 'Seamless Aftercare',
      description:
        'After the music stops, we manage complete pack-down, leaving the venue pristine with zero stress for you.',
    },
  ],
})

export const servicesGallery = Object.freeze({
  subtitle: 'Visual Portfolio',
  title: 'Curated Celebrations in Melbourne',
  description:
    'A glimpse into real weddings, milestones, and brand activations designed and styled by Moments in Blooms.',
  items: [
    {
      id: 'gal-1',
      variant: 'large',
      title: 'Yarra Valley Vineyard Reception',
      category: 'Wedding Styling',
      image: {
        src: imageUrl('https://images.unsplash.com/photo-1519741497674-611481863552', 1600),
        alt: 'Yarra Valley wedding reception with candlelight and floral arrangements',
      },
    },
    {
      id: 'gal-2',
      variant: 'tall',
      title: 'Crown Towers Champagne Soirée',
      category: 'Milestone Celebration',
      image: {
        src: imageUrl('https://images.unsplash.com/photo-1780593194924-35f0343e738b', 1000),
        alt: 'Champagne tower at a luxury event',
      },
    },
    {
      id: 'gal-3',
      variant: 'square',
      title: 'Botanical Ceremony Archway',
      category: 'Floral Installation',
      image: {
        src: imageUrl('https://images.unsplash.com/photo-1682376932031-c62735732f6b', 1000),
        alt: 'Blush pink and cream floral arch detail',
      },
    },
    {
      id: 'gal-4',
      variant: 'square',
      title: 'Custom Photobooth Moment',
      category: 'Interactive Experience',
      image: {
        src: imageUrl('https://images.unsplash.com/photo-1661030220966-f1223eeafb5c', 1000),
        alt: 'Guests taking photos in a styled photobooth',
      },
    },
  ],
})

export const servicesWhyChooseUs = Object.freeze({
  subtitle: 'The Moments in Blooms Difference',
  title: 'Why discerning hosts choose our studio',
  description:
    'We combine artistic flair with meticulous logisitical execution to create events that excel in both beauty and precision.',
  image: {
    src: imageUrl('https://images.unsplash.com/photo-1527529482837-4698179dc6ce', 1400),
    alt: 'Stylist carefully adjusting a candle on a luxury dinner table',
  },
  badge: 'Melbourne Choice',
  features: [
    {
      number: '01',
      title: 'Uncompromising Floral & Material Quality',
      description:
        'We source fresh blooms daily from Victorian growers and select high-grade linens, crystal, and custom props.',
    },
    {
      number: '02',
      title: 'Seamless Turnkey Execution',
      description:
        'From venue liaisons and bump-in permits to midnight bump-outs, we manage all logistics so you enjoy peace of mind.',
    },
    {
      number: '03',
      title: 'Tailored Aesthetic — Never Off-The-Shelf',
      description:
        'No cookie-cutter packages. Every styling design is custom-curated to reflect your unique personal taste.',
    },
    {
      number: '04',
      title: 'Transparent Investment & Inclusions',
      description:
        'Clear, itemized proposals with zero hidden costs. You know exactly what is included at every stage.',
    },
  ],
})

export const servicesTestimonials = Object.freeze([
  {
    quote:
      'Moments in Blooms turned our venue into an ethereal dreamscape. The photobooth was a huge hit with our guests, and the floral archway was breathtaking!',
    name: 'Charlotte & Harrison',
    event: 'Yarra Valley Wedding',
    rating: 5,
    image: {
      src: imageUrl('https://images.unsplash.com/photo-1534528741775-53994a69daeb', 400),
      alt: 'Portrait of Charlotte & Harrison',
    },
  },
  {
    quote:
      'The attention to detail was beyond anything we imagined. The custom claw machine brought so much joy to our guests, and the tablescape was magazine-worthy.',
    name: 'Victoria S.',
    event: '30th Milestone Birthday · South Yarra',
    rating: 5,
    image: {
      src: imageUrl('https://images.unsplash.com/photo-1517841905240-472988babdf9', 400),
      alt: 'Portrait of Victoria S.',
    },
  },
  {
    quote:
      'Our brand launch needed to feel luxurious, warm, and inviting. Moments in Blooms delivered a turnkey styling solution that blew our VIP guests away.',
    name: 'Marcus Vance',
    event: 'Luxe Brand Showcase · Melbourne CBD',
    rating: 5,
    image: {
      src: imageUrl('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d', 400),
      alt: 'Portrait of Marcus Vance',
    },
  },
])

export const servicesFaqs = Object.freeze([
  {
    id: 'faq-1',
    question: 'How far in advance should we book your services?',
    answer:
      'We recommend booking 6 to 12 months in advance for weekend weddings during peak season (October to April). For photobooths, claw machines, and private events, 2 to 4 months lead time is usually sufficient subject to availability.',
  },
  {
    id: 'faq-2',
    question: 'Can we combine multiple services into a custom package?',
    answer:
      'Yes! Combining services such as Event Styling + Haute Florals + Luxe Photobooth allows us to create a unified aesthetic across your entire venue, while providing bundled investment savings.',
  },
  {
    id: 'faq-3',
    question: 'Which areas in Victoria do you service?',
    answer:
      'We service all Greater Melbourne metropolitan suburbs, Yarra Valley, Mornington Peninsula, Daylesford, and the Bellarine Peninsula. Travel fees apply for regional Victorian locations.',
  },
  {
    id: 'faq-4',
    question: 'What happens during bump-in and bump-out on the event day?',
    answer:
      'Our team coordinates directly with your venue manager to secure bump-in timing. We handle complete setup prior to guest arrival and return after the event to pack down quietly and efficiently.',
  },
  {
    id: 'faq-5',
    question: 'How do we secure our date?',
    answer:
      'To lock in your date on our studio calendar, we require a 30% retainer deposit alongside a signed styling agreement. The remaining balance is due 14 days prior to your celebration.',
  },
])

export const servicesCta = Object.freeze({
  eyebrow: 'Reserve Your Celebration Date',
  title: 'Let’s bring your dream event to life.',
  description:
    'Tell us about your date, venue, and vision. Our creative team will curate a bespoke proposal tailored to your celebration.',
  primaryCta: 'Submit An Enquiry',
  secondaryCta: 'View Our Gallery',
  path: '/contact',
})
