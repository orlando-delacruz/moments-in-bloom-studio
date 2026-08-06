import styled from 'styled-components'
import { motion } from 'framer-motion'
import { pageShellStyles } from '../../pageStyles.js'

export const GalleryPage = styled.div`
  ${pageShellStyles}
`

// Hero Section
export const GalleryHero = styled.section`
  position: relative;
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.background};
`

export const HeroMedia = styled(motion.div)`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.$src});
  background-size: cover;
  background-position: center;
  z-index: 0;
`

export const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(46, 46, 46, 0.3) 0%,
    rgba(46, 46, 46, 0.5) 50%,
    rgba(46, 46, 46, 0.7) 100%
  );
  z-index: 1;
`

export const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 900px;
  padding: ${({ theme }) => theme.spacing.xxl};
  color: white;
`

export const HeroEyebrow = styled.p`
  font-family: ${({ theme }) => theme.typography.bodyFont};
  font-size: 0.875rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  opacity: 0.9;
`

export const HeroTitle = styled.h1`
  font-family: ${({ theme }) => theme.typography.headingFont};
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  line-height: ${({ theme }) => theme.typography.headingLineHeight};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-weight: 400;
`

export const HeroDescription = styled.p`
  font-family: ${({ theme }) => theme.typography.bodyFont};
  font-size: clamp(1rem, 1.5vw, 1.25rem);
  line-height: 1.7;
  max-width: 600px;
  margin: 0 auto ${({ theme }) => theme.spacing.xl};
  opacity: 0.95;
`

export const HeroCTA = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  justify-content: center;
  flex-wrap: wrap;
`

// Introduction Section
export const IntroSection = styled.section`
  padding: ${({ theme }) => theme.spacing.sectionStandard};
  background: ${({ theme }) => theme.colors.background};
`

export const IntroContent = styled.div`
  max-width: ${({ theme }) => theme.layout.contentMaxWidth};
  margin: 0 auto;
  text-align: center;
`

export const IntroEyebrow = styled.p`
  font-family: ${({ theme }) => theme.typography.bodyFont};
  font-size: 0.8rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`

export const IntroTitle = styled.h2`
  font-family: ${({ theme }) => theme.typography.headingFont};
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: ${({ theme }) => theme.typography.headingLineHeight};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.textPrimary};
`

export const IntroText = styled.p`
  font-family: ${({ theme }) => theme.typography.bodyFont};
  font-size: clamp(1rem, 1.3vw, 1.125rem);
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.textSecondary};
`

// Category Navigation
export const CategoryNavSection = styled.section`
  padding: ${({ theme }) => theme.spacing.xl} 0;
  background: ${({ theme }) => theme.colors.surface};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`

export const CategoryNavContainer = styled.div`
  max-width: ${({ theme }) => theme.layout.containerMaxWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.xl};
`

export const CategoryNavLabel = styled.p`
  font-family: ${({ theme }) => theme.typography.bodyFont};
  font-size: 0.75rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  text-align: center;
`

export const CategoryNavList = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  justify-content: center;
  flex-wrap: wrap;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    overflow-x: auto;
    flex-wrap: nowrap;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    -ms-overflow-style: none;
    padding-bottom: ${({ theme }) => theme.spacing.sm};
    
    &::-webkit-scrollbar {
      display: none;
    }
  }
`

export const CategoryNavItem = styled.button`
  font-family: ${({ theme }) => theme.typography.bodyFont};
  font-size: 0.9rem;
  font-weight: 500;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.pill};
  color: ${({ theme }) => theme.colors.textSecondary};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.standard};
  white-space: nowrap;
  
  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
  }
  
  &[aria-selected="true"] {
    background: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
    color: white;
  }
  
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.focus};
    outline-offset: 2px;
  }
`

// Editorial Gallery
export const GallerySection = styled.section`
  padding: ${({ theme }) => theme.spacing.sectionStandard} 0;
  background: ${({ theme }) => theme.colors.background};
`

export const GalleryContainer = styled.div`
  max-width: ${({ theme }) => theme.layout.containerMaxWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.xl};
`

export const EditorialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: ${({ theme }) => theme.spacing.lg};
  auto-flow: dense;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: repeat(8, 1fr);
    gap: ${({ theme }) => theme.spacing.md};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.md};
  }
`

export const GalleryItem = styled(motion.div)`
  position: relative;
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  background: ${({ theme }) => theme.colors.surface};
  
  ${(props) => props.$size === 'large' && `
    grid-column: span 8;
    grid-row: span 2;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
      grid-column: span 8;
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      grid-column: span 1;
    }
  `}
  
  ${(props) => props.$size === 'medium' && `
    grid-column: span 4;
    grid-row: span 1;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
      grid-column: span 4;
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      grid-column: span 1;
    }
  `}
  
  ${(props) => props.$size === 'small' && `
    grid-column: span 4;
    grid-row: span 1;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
      grid-column: span 4;
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      grid-column: span 1;
    }
  `}
  
  ${(props) => props.$size === 'portrait' && `
    grid-column: span 4;
    grid-row: span 2;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
      grid-column: span 4;
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      grid-column: span 1;
    }
  `}
  
  ${(props) => props.$size === 'wide' && `
    grid-column: span 6;
    grid-row: span 1;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
      grid-column: span 8;
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      grid-column: span 1;
    }
  `}
`

export const GalleryImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 280px;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radii.lg};
`

export const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform ${({ theme }) => theme.transitions.slow};
  
  ${GalleryItem}:hover & {
    transform: scale(1.05);
  }
`

export const GalleryOverlay = styled(motion.div)`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    transparent 0%,
    rgba(46, 46, 46, 0.7) 100%
  );
  opacity: 0;
  transition: opacity ${({ theme }) => theme.transitions.standard};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: ${({ theme }) => theme.spacing.lg};
  
  ${GalleryItem}:hover & {
    opacity: 1;
  }
`

export const GalleryCaption = styled.div`
  color: white;
`

export const GalleryCaptionTitle = styled.h3`
  font-family: ${({ theme }) => theme.typography.headingFont};
  font-size: 1.25rem;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`

export const GalleryCaptionSubtitle = styled.p`
  font-family: ${({ theme }) => theme.typography.bodyFont};
  font-size: 0.875rem;
  opacity: 0.9;
`

export const GalleryNumber = styled.span`
  position: absolute;
  top: ${({ theme }) => theme.spacing.md};
  left: ${({ theme }) => theme.spacing.md};
  font-family: ${({ theme }) => theme.typography.bodyFont};
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  color: white;
  background: rgba(46, 46, 46, 0.6);
  padding: ${({ theme }) => theme.spacing.xxs} ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.radii.sm};
  z-index: 1;
`

// Featured Event Stories
export const FeaturedStoriesSection = styled.section`
  padding: ${({ theme }) => theme.spacing.sectionStandard} 0;
  background: ${({ theme }) => theme.colors.surface};
`

export const StoriesContainer = styled.div`
  max-width: ${({ theme }) => theme.layout.containerMaxWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.xl};
`

export const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
`

export const SectionEyebrow = styled.p`
  font-family: ${({ theme }) => theme.typography.bodyFont};
  font-size: 0.8rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`

export const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.typography.headingFont};
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: ${({ theme }) => theme.typography.headingLineHeight};
  color: ${({ theme }) => theme.colors.textPrimary};
`

export const StoryCard = styled(motion.article)`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: ${({ theme }) => theme.spacing.xxl};
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
  
  &:last-of-type {
    margin-bottom: 0;
  }
  
  &:nth-child(even) {
    direction: rtl;
    
    > * {
      direction: ltr;
    }
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.lg};
    
    &:nth-child(even) {
      direction: ltr;
    }
  }
`

export const StoryImageWrapper = styled.div`
  position: relative;
  border-radius: ${({ theme }) => theme.radii.xl};
  overflow: hidden;
  aspect-ratio: 4/3;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    aspect-ratio: 16/9;
  }
`

export const StoryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform ${({ theme }) => theme.transitions.slow};
  
  ${StoryCard}:hover & {
    transform: scale(1.03);
  }
`

export const StoryContent = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
`

export const StoryTag = styled.p`
  font-family: ${({ theme }) => theme.typography.bodyFont};
  font-size: 0.75rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`

export const StoryTitle = styled.h3`
  font-family: ${({ theme }) => theme.typography.headingFont};
  font-size: clamp(1.5rem, 2.5vw, 2rem);
  line-height: ${({ theme }) => theme.typography.headingLineHeight};
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`

export const StoryDescription = styled.p`
  font-family: ${({ theme }) => theme.typography.bodyFont};
  font-size: 1rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`

export const StoryLink = styled.button`
  font-family: ${({ theme }) => theme.typography.bodyFont};
  font-size: 0.9rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary};
  background: none;
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: 0;
  transition: color ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    color: ${({ theme }) => theme.colors.primaryHover};
  }
`

// Instagram Section
export const InstagramSection = styled.section`
  padding: ${({ theme }) => theme.spacing.sectionStandard} 0;
  background: ${({ theme }) => theme.colors.secondary};
`

export const InstagramContainer = styled.div`
  max-width: ${({ theme }) => theme.layout.containerMaxWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.xl};
`

export const InstagramGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({ theme }) => theme.spacing.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const InstagramItem = styled(motion.div)`
  position: relative;
  aspect-ratio: 1;
  border-radius: ${({ theme }) => theme.radii.md};
  overflow: hidden;
  cursor: pointer;
`

export const InstagramImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform ${({ theme }) => theme.transitions.slow};
  
  ${InstagramItem}:hover & {
    transform: scale(1.08);
  }
`

export const InstagramOverlay = styled(motion.div)`
  position: absolute;
  inset: 0;
  background: rgba(198, 116, 149, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity ${({ theme }) => theme.transitions.standard};
`

export const InstagramIcon = styled.span`
  color: white;
  font-size: 2rem;
`

// CTA Section
export const CTASection = styled.section`
  position: relative;
  padding: ${({ theme }) => theme.spacing.sectionGenerous} 0;
  background: ${({ theme }) => theme.colors.background};
  overflow: hidden;
`

export const CTAContainer = styled.div`
  max-width: ${({ theme }) => theme.layout.containerMaxWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.xl};
  position: relative;
  z-index: 2;
  text-align: center;
`

export const CTAEyebrow = styled.p`
  font-family: ${({ theme }) => theme.typography.bodyFont};
  font-size: 0.8rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`

export const CTATitle = styled.h2`
  font-family: ${({ theme }) => theme.typography.headingFont};
  font-size: clamp(2.5rem, 5vw, 4rem);
  line-height: ${({ theme }) => theme.typography.headingLineHeight};
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`

export const CTADescription = styled.p`
  font-family: ${({ theme }) => theme.typography.bodyFont};
  font-size: clamp(1rem, 1.3vw, 1.25rem);
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 600px;
  margin: 0 auto ${({ theme }) => theme.spacing.xl};
`

export const CTAButtons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  justify-content: center;
  flex-wrap: wrap;
`

export const CTABackground = styled.div`
  position: absolute;
  inset: 0;
  background-image: url(${(props) => props.$src});
  background-size: cover;
  background-position: center;
  opacity: 0.08;
  z-index: 1;
`

// Lightbox
export const LightboxOverlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(10, 10, 10, 0.95);
  z-index: ${({ theme }) => theme.layers.loading + 10};
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(8px);
`

export const LightboxContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.xl};
`

export const LightboxImage = styled(motion.img)`
  max-width: 100%;
  max-height: 85vh;
  object-fit: contain;
  border-radius: ${({ theme }) => theme.radii.sm};
`

export const LightboxClose = styled.button`
  position: absolute;
  top: ${({ theme }) => theme.spacing.lg};
  right: ${({ theme }) => theme.spacing.lg};
  width: ${({ theme }) => theme.controls.tapTarget};
  height: ${({ theme }) => theme.controls.tapTarget};
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 50%;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all ${({ theme }) => theme.transitions.fast};
  z-index: 3;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
  
  &:focus-visible {
    outline: 2px solid white;
    outline-offset: 2px;
  }
`

export const LightboxNav = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: ${({ theme }) => theme.controls.tapTarget};
  height: ${({ theme }) => theme.controls.tapTarget};
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 50%;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all ${({ theme }) => theme.transitions.fast};
  z-index: 3;
  
  ${(props) => props.$direction === 'prev' ? 'left: 2rem;' : 'right: 2rem;'}
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
  
  &:focus-visible {
    outline: 2px solid white;
    outline-offset: 2px;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    ${(props) => props.$direction === 'prev' ? 'left: 1rem;' : 'right: 1rem;'}
  }
`

export const LightboxCounter = styled.div`
  position: absolute;
  bottom: ${({ theme }) => theme.spacing.lg};
  left: 50%;
  transform: translateX(-50%);
  font-family: ${({ theme }) => theme.typography.bodyFont};
  font-size: 0.875rem;
  color: white;
  background: rgba(255, 255, 255, 0.1);
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.radii.pill};
  z-index: 3;
`

export const LightboxCaption = styled(motion.div)`
  position: absolute;
  bottom: ${({ theme }) => theme.spacing.xxl};
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  color: white;
  max-width: 600px;
  padding: 0 ${({ theme }) => theme.spacing.lg};
`

export const LightboxCaptionTitle = styled.h3`
  font-family: ${({ theme }) => theme.typography.headingFont};
  font-size: 1.25rem;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`

export const LightboxCaptionSubtitle = styled.p`
  font-family: ${({ theme }) => theme.typography.bodyFont};
  font-size: 0.875rem;
  opacity: 0.9;
`
