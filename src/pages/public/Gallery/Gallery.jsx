import { useState, useCallback, useEffect } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { FiArrowRight, FiX, FiChevronLeft, FiChevronRight, FiInstagram } from 'react-icons/fi'
import { NavLink } from 'react-router-dom'
import Button from '../../../components/Button/index.js'
import { BUTTON_VARIANTS } from '../../../constants/ui.js'
import Container from '../../../components/Container/index.js'
import Section from '../../../components/Section/index.js'
import {
  GalleryPage,
  GalleryHero,
  HeroMedia,
  HeroOverlay,
  HeroContent,
  HeroEyebrow,
  HeroTitle,
  HeroDescription,
  HeroCTA,
  IntroSection,
  IntroContent,
  IntroEyebrow,
  IntroTitle,
  IntroText,
  CategoryNavSection,
  CategoryNavContainer,
  CategoryNavLabel,
  CategoryNavList,
  CategoryNavItem,
  GallerySection,
  GalleryContainer,
  EditorialGrid,
  GalleryItem,
  GalleryImageWrapper,
  GalleryImage,
  GalleryOverlay,
  GalleryCaption,
  GalleryCaptionTitle,
  GalleryCaptionSubtitle,
  GalleryNumber,
  FeaturedStoriesSection,
  StoriesContainer,
  SectionHeader,
  SectionEyebrow,
  SectionTitle,
  StoryCard,
  StoryImageWrapper,
  StoryImage,
  StoryContent,
  StoryTag,
  StoryTitle,
  StoryDescription,
  StoryLink,
  InstagramSection,
  InstagramContainer,
  InstagramGrid,
  InstagramItem,
  InstagramImage,
  InstagramOverlay,
  InstagramIcon,
  CTASection,
  CTAContainer,
  CTAEyebrow,
  CTATitle,
  CTADescription,
  CTAButtons,
  CTABackground,
  LightboxOverlay,
  LightboxContent,
  LightboxImage,
  LightboxClose,
  LightboxNav,
  LightboxCounter,
  LightboxCaption,
  LightboxCaptionTitle,
  LightboxCaptionSubtitle,
} from './Gallery.styles.js'

// Mock data for gallery items - will be replaced by CMS
const galleryCategories = [
  { id: 'all', label: 'All Collections' },
  { id: 'weddings', label: 'Weddings' },
  { id: 'engagements', label: 'Engagements' },
  { id: 'birthdays', label: 'Birthdays' },
  { id: 'corporate', label: 'Corporate Events' },
  { id: 'luxury-booth', label: 'Luxury Booth' },
  { id: 'decor-hire', label: 'Decor Hire' },
  { id: 'blissful-nest', label: 'Blissful Nest' },
]

const galleryItems = [
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

const featuredStories = [
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

const instagramPosts = [
  { id: 1, src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80' },
  { id: 2, src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&q=80' },
  { id: 3, src: 'https://images.unsplash.com/photo-1530103862676-de3c9da59af7?w=600&q=80' },
  { id: 4, src: 'https://images.unsplash.com/photo-1478146896981-b80c4635432c?w=600&q=80' },
  { id: 5, src: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=600&q=80' },
  { id: 6, src: 'https://images.unsplash.com/photo-1469334031218-e38a5597bd30?w=600&q=80' },
  { id: 7, src: 'https://images.unsplash.com/photo-1519225421980-715cb0272128?w=600&q=80' },
  { id: 8, src: 'https://images.unsplash.com/photo-1465495976277-3b43e2700f96?w=600&q=80' },
]

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const shouldReduceMotion = useReducedMotion()

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory)

  const openLightbox = useCallback((index) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
    document.body.style.overflow = 'hidden'
  }, [])

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false)
    document.body.style.overflow = ''
  }, [])

  const navigateLightbox = useCallback((direction) => {
    setCurrentImageIndex(prev => {
      const newIndex = direction === 'next'
        ? (prev + 1) % filteredItems.length
        : (prev - 1 + filteredItems.length) % filteredItems.length
      return newIndex
    })
  }, [filteredItems.length])

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!lightboxOpen) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') navigateLightbox('next')
      if (e.key === 'ArrowLeft') navigateLightbox('prev')
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [lightboxOpen, closeLightbox, navigateLightbox])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <GalleryPage>
      {/* Hero Section */}
      <GalleryHero>
        <HeroMedia
          $src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: shouldReduceMotion ? 0 : 8, ease: 'easeOut' }}
          aria-hidden="true"
        />
        <HeroOverlay aria-hidden="true" />
        <HeroContent>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <HeroEyebrow>Our Portfolio</HeroEyebrow>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <HeroTitle>Moments That Take Your Breath Away</HeroTitle>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <HeroDescription>
              Discover our curated collection of unforgettable celebrations, 
              each thoughtfully designed to reflect the unique love stories 
              and special moments we've had the privilege to create.
            </HeroDescription>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <HeroCTA>
              <Button as={NavLink} to="/contact">
                Start Your Journey
                <FiArrowRight aria-hidden="true" size={18} />
              </Button>
              <Button as={NavLink} to="/services" variant={BUTTON_VARIANTS.OUTLINE}>
                Explore Services
              </Button>
            </HeroCTA>
          </motion.div>
        </HeroContent>
      </GalleryHero>

      {/* Introduction Section */}
      <IntroSection>
        <Container>
          <IntroContent>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
            >
              <IntroEyebrow>Our Philosophy</IntroEyebrow>
              <IntroTitle>Creating Unforgettable Celebrations</IntroTitle>
              <IntroText>
                At Moments in Blooms, we believe every celebration tells a story. 
                Our approach combines artistic vision with meticulous attention to detail, 
                transforming spaces into immersive experiences that captivate hearts 
                and create lasting memories. From intimate gatherings to grand affairs, 
                each element is carefully curated to reflect your unique narrative.
              </IntroText>
            </motion.div>
          </IntroContent>
        </Container>
      </IntroSection>

      {/* Category Navigation */}
      <CategoryNavSection>
        <CategoryNavContainer>
          <CategoryNavLabel>Filter By Category</CategoryNavLabel>
          <CategoryNavList role="tablist" aria-label="Gallery Categories">
            {galleryCategories.map((category) => (
              <CategoryNavItem
                key={category.id}
                role="tab"
                aria-selected={activeCategory === category.id}
                aria-controls={`gallery-panel-${category.id}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.label}
              </CategoryNavItem>
            ))}
          </CategoryNavList>
        </CategoryNavContainer>
      </CategoryNavSection>

      {/* Editorial Gallery */}
      <GallerySection>
        <GalleryContainer>
          <motion.div
            layout
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            key={activeCategory}
          >
            <EditorialGrid>
              <AnimatePresence mode="popLayout">
                {filteredItems.map((item, index) => (
                  <GalleryItem
                    key={item.id}
                    $size={item.size}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    whileHover={{ y: -4 }}
                  >
                    <GalleryImageWrapper>
                      <GalleryImage
                        src={item.src}
                        alt={item.title}
                        loading="lazy"
                      />
                      <GalleryOverlay
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      >
                        <GalleryNumber>{String(index + 1).padStart(2, '0')}</GalleryNumber>
                        <GalleryCaption>
                          <GalleryCaptionTitle>{item.title}</GalleryCaptionTitle>
                          <GalleryCaptionSubtitle>{item.subtitle}</GalleryCaptionSubtitle>
                        </GalleryCaption>
                      </GalleryOverlay>
                    </GalleryImageWrapper>
                    <button
                      onClick={() => openLightbox(index)}
                      style={{
                        position: 'absolute',
                        inset: 0,
                        width: '100%',
                        height: '100%',
                        background: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        zIndex: 2,
                      }}
                      aria-label={`View ${item.title}`}
                    />
                  </GalleryItem>
                ))}
              </AnimatePresence>
            </EditorialGrid>
          </motion.div>
        </GalleryContainer>
      </GallerySection>

      {/* Featured Event Stories */}
      <FeaturedStoriesSection>
        <StoriesContainer>
          <SectionHeader>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <SectionEyebrow>Portfolio Highlights</SectionEyebrow>
              <SectionTitle>Featured Event Stories</SectionTitle>
            </motion.div>
          </SectionHeader>

          {featuredStories.map((story, index) => (
            <StoryCard
              key={story.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
            >
              <StoryImageWrapper>
                <StoryImage src={story.image} alt={story.title} loading="lazy" />
              </StoryImageWrapper>
              <StoryContent>
                <StoryTag>{story.tag}</StoryTag>
                <StoryTitle>{story.title}</StoryTitle>
                <StoryDescription>{story.description}</StoryDescription>
                <StoryLink>
                  View Full Story
                  <FiArrowRight aria-hidden="true" size={16} />
                </StoryLink>
              </StoryContent>
            </StoryCard>
          ))}
        </StoriesContainer>
      </FeaturedStoriesSection>

      {/* Instagram Section */}
      <InstagramSection>
        <InstagramContainer>
          <SectionHeader>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <SectionEyebrow>Follow Us</SectionEyebrow>
              <SectionTitle>@momentsinblooms</SectionTitle>
            </motion.div>
          </SectionHeader>

          <InstagramGrid>
            {instagramPosts.map((post, index) => (
              <InstagramItem
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ scale: 1.02 }}
              >
                <InstagramImage src={post.src} alt="Instagram post" loading="lazy" />
                <InstagramOverlay
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <InstagramIcon>
                    <FiInstagram size={32} />
                  </InstagramIcon>
                </InstagramOverlay>
              </InstagramItem>
            ))}
          </InstagramGrid>
        </InstagramContainer>
      </InstagramSection>

      {/* CTA Section */}
      <CTASection>
        <CTABackground $src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80" aria-hidden="true" />
        <CTAContainer>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <CTAEyebrow>Begin Your Story</CTAEyebrow>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <CTATitle>Let's Create Something Beautiful Together</CTATitle>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <CTADescription>
                Ready to bring your dream celebration to life? We'd love to hear about 
                your vision and help you create moments that will be cherished forever.
              </CTADescription>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <CTAButtons>
                <Button as={NavLink} to="/contact">
                  Enquire Now
                  <FiArrowRight aria-hidden="true" size={18} />
                </Button>
                <Button as={NavLink} to="/about" variant={BUTTON_VARIANTS.OUTLINE}>
                  Learn More About Us
                </Button>
              </CTAButtons>
            </motion.div>
          </motion.div>
        </CTAContainer>
      </CTASection>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <LightboxOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeLightbox}
          >
            <LightboxContent onClick={(e) => e.stopPropagation()}>
              <LightboxClose onClick={closeLightbox} aria-label="Close lightbox">
                <FiX size={24} />
              </LightboxClose>

              <LightboxNav
                $direction="prev"
                onClick={() => navigateLightbox('prev')}
                aria-label="Previous image"
              >
                <FiChevronLeft size={28} />
              </LightboxNav>

              <LightboxNav
                $direction="next"
                onClick={() => navigateLightbox('next')}
                aria-label="Next image"
              >
                <FiChevronRight size={28} />
              </LightboxNav>

              <AnimatePresence mode="wait">
                <LightboxImage
                  key={filteredItems[currentImageIndex]?.id}
                  src={filteredItems[currentImageIndex]?.src}
                  alt={filteredItems[currentImageIndex]?.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                />
              </AnimatePresence>

              <LightboxCounter>
                {currentImageIndex + 1} / {filteredItems.length}
              </LightboxCounter>

              <LightboxCaption
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                key={filteredItems[currentImageIndex]?.id}
              >
                <LightboxCaptionTitle>
                  {filteredItems[currentImageIndex]?.title}
                </LightboxCaptionTitle>
                <LightboxCaptionSubtitle>
                  {filteredItems[currentImageIndex]?.subtitle}
                </LightboxCaptionSubtitle>
              </LightboxCaption>
            </LightboxContent>
          </LightboxOverlay>
        )}
      </AnimatePresence>
    </GalleryPage>
  )
}

export default Gallery
