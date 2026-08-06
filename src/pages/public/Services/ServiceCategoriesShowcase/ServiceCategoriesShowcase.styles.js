import { motion } from 'framer-motion'
import styled from 'styled-components'

export const ShowcaseSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(3rem, 6vw, 5rem);
`

/* Level 1: Main Category Selector Bar / Grid */
export const CategoryNavGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: clamp(1rem, 2vw, 1.5rem);
  width: 100%;
`

export const CategoryTabCard = styled.button`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  padding: clamp(1.25rem, 2.5vw, 1.75rem);
  background: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.surface : 'rgba(255, 255, 255, 0.6)'};
  border: 1px solid
    ${({ $isActive, theme }) =>
      $isActive ? theme.colors.primary : theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.xl};
  cursor: pointer;
  box-shadow: ${({ $isActive, theme }) =>
    $isActive ? theme.shadows.soft : theme.shadows.card};
  transition: all ${({ theme }) => theme.transitions.fast};
  outline: none;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primaryHover};
    transform: translateY(-2px);
  }

  &:focus-visible {
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.focus};
  }
`

export const CategoryTabTag = styled.span`
  color: ${({ theme }) => theme.colors.primaryHover};
  font-size: 0.675rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin-bottom: 0.35rem;
`

export const CategoryTabTitle = styled.span`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-family: ${({ theme }) => theme.typography.headingFont};
  font-size: clamp(1.05rem, 1.8vw, 1.25rem);
  font-weight: 500;
  line-height: 1.25;
  margin-bottom: 0.5rem;
`

export const CategoryTabMeta = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: auto;
  padding-top: 0.5rem;
`

export const CategoryItemCount = styled.span`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.775rem;
`

export const CategoryBadge = styled.span`
  display: inline-block;
  padding: 0.2rem 0.6rem;
  background: rgba(198, 116, 149, 0.12);
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  border-radius: ${({ theme }) => theme.radii.pill};
`

export const ActiveIndicator = styled(motion.div)`
  position: absolute;
  bottom: -1px;
  left: 1.5rem;
  right: 1.5rem;
  height: 3px;
  background: ${({ theme }) => theme.colors.primary};
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
`

/* Active Category Hero Banner */
export const ActiveCategoryHero = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(2rem, 4vw, 4rem);
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.xl};
  padding: clamp(2rem, 4vw, 3.5rem);
  box-shadow: ${({ theme }) => theme.shadows.card};
  overflow: hidden;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: 1.1fr 0.9fr;
    align-items: center;
  }
`

export const CategoryHeroContent = styled.div`
  display: flex;
  flex-direction: column;
`

export const CategoryHeroTagline = styled.span`
  color: ${({ theme }) => theme.colors.primaryHover};
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`

export const CategoryHeroTitle = styled.h3`
  margin: 0 0 ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-family: ${({ theme }) => theme.typography.headingFont};
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 500;
  line-height: 1.1;
  letter-spacing: -0.03em;
`

export const CategoryHeroDesc = styled.p`
  margin: 0 0 ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1.05rem;
  line-height: 1.75;
`

export const CategoryHeroStats = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding-top: ${({ theme }) => theme.spacing.md};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`

export const StatItem = styled.div`
  display: flex;
  flex-direction: column;
`

export const StatNumber = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.typography.headingFont};
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1;
`

export const StatLabel = styled.span`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-top: 0.25rem;
`

export const CategoryHeroImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.imageCard};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`

/* Level 2: Sub-Service Cards Grid */
export const SubServicesContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
`

export const SubServicesHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`

export const SubServicesTitle = styled.h4`
  margin: 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-family: ${({ theme }) => theme.typography.headingFont};
  font-size: clamp(1.5rem, 2.5vw, 2rem);
  font-weight: 500;
`

export const SubServicesSubtitle = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.95rem;
`

export const SubServicesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(2rem, 4vw, 3rem);

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const SubServiceCard = styled(motion.article)`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.xl};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.card};
  transition: transform ${({ theme }) => theme.transitions.slow},
    box-shadow ${({ theme }) => theme.transitions.slow},
    border-color ${({ theme }) => theme.transitions.slow};

  &:hover {
    transform: translateY(-6px);
    border-color: rgba(198, 116, 149, 0.35);
    box-shadow: ${({ theme }) => theme.shadows.soft};
  }
`

export const SubServiceImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform ${({ theme }) => theme.transitions.slow};
  }

  ${SubServiceCard}:hover img {
    transform: scale(1.06);
  }
`

export const SubServiceBadge = styled.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.35rem 0.85rem;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(8px);
  color: ${({ theme }) => theme.colors.primaryHover};
  font-size: 0.675rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  border-radius: ${({ theme }) => theme.radii.pill};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`

export const SubServiceContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: clamp(1.5rem, 3vw, 2.25rem);
`

export const SubServiceTagline = styled.span`
  color: ${({ theme }) => theme.colors.primaryHover};
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin-bottom: 0.35rem;
`

export const SubServiceTitle = styled.h5`
  margin: 0 0 ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-family: ${({ theme }) => theme.typography.headingFont};
  font-size: clamp(1.3rem, 2vw, 1.6rem);
  font-weight: 500;
  line-height: 1.2;
`

export const SubServiceDesc = styled.p`
  margin: 0 0 ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.95rem;
  line-height: 1.7;
`

export const HighlightsList = styled.ul`
  list-style: none;
  margin: 0 0 ${({ theme }) => theme.spacing.lg};
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`

export const HighlightItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 0.875rem;
  line-height: 1.45;

  svg {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1rem;
    flex-shrink: 0;
    margin-top: 0.15rem;
  }
`

export const CardFooter = styled.div`
  margin-top: auto;
  padding-top: ${({ theme }) => theme.spacing.sm};
`

/* ==========================================================================
   DECOR HIRE CATALOGUE STYLES
   ========================================================================== */
export const CatalogueSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(2.5rem, 5vw, 4rem);
`

export const CategoryBlock = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.xl};
  padding: clamp(1.75rem, 3.5vw, 3rem);
  box-shadow: ${({ theme }) => theme.shadows.card};
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
`

export const CategoryHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding-bottom: 1.25rem;
`

export const CategoryTitle = styled.h4`
  margin: 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-family: ${({ theme }) => theme.typography.headingFont};
  font-size: clamp(1.5rem, 2.5vw, 2.2rem);
  font-weight: 500;
`

export const CategorySubtitle = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.95rem;
  line-height: 1.6;
`

export const RedRomanceCard = styled.div`
  background: linear-gradient(135deg, rgba(120, 20, 50, 0.04) 0%, rgba(255, 255, 255, 0.9) 100%);
  border: 1px solid rgba(198, 116, 149, 0.25);
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: clamp(1.5rem, 3vw, 2.25rem);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const OptionGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(3, 1fr);
  }
`

export const OptionCard = styled.div`
  background: #ffffff;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);

  img {
    width: 100%;
    height: 180px;
    object-fit: cover;
  }
`

export const OptionCardBody = styled.div`
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
`

export const OptionName = styled.h6`
  margin: 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-family: ${({ theme }) => theme.typography.headingFont};
  font-size: 1.15rem;
  font-weight: 500;
`

export const OptionSpecs = styled.span`
  display: inline-block;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
`

export const OptionDesc = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.85rem;
  line-height: 1.5;
`

export const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.25rem;
`

export const GalleryItem = styled.div`
  position: relative;
  border-radius: ${({ theme }) => theme.radii.md};
  overflow: hidden;
  aspect-ratio: 4 / 3;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`

export const GalleryCaption = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
  color: #ffffff;
  font-size: 0.85rem;
  font-weight: 500;
`

/* ==========================================================================
   PHOTOBOOTH STORYTELLING & LUXURY PACKAGES STYLES
   ========================================================================== */
export const PhotoboothStorySection = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(3rem, 6vw, 5rem);
`

export const StoryHeroBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  background: linear-gradient(135deg, #FAF7F2 0%, #FFFFFF 100%);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.xl};
  padding: clamp(2rem, 4vw, 3.5rem);

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: 1.1fr 0.9fr;
    align-items: center;
  }
`

export const ExclusiveFramesFeature = styled.div`
  background: linear-gradient(135deg, #1A1817 0%, #2A2422 100%);
  color: #FFFFFF;
  border-radius: ${({ theme }) => theme.radii.xl};
  padding: clamp(2rem, 4vw, 3.5rem);
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
`

export const ExclusiveFramesBadge = styled.span`
  display: inline-block;
  padding: 0.35rem 0.85rem;
  background: rgba(212, 175, 55, 0.2);
  color: #D4AF37;
  border: 1px solid rgba(212, 175, 55, 0.4);
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  border-radius: ${({ theme }) => theme.radii.pill};
  margin-bottom: 0.75rem;
`

export const ExclusiveFramesTitle = styled.h4`
  margin: 0 0 1rem;
  font-family: ${({ theme }) => theme.typography.headingFont};
  font-size: clamp(1.8rem, 3.2vw, 2.5rem);
  color: #FFFFFF;
  font-weight: 500;
  line-height: 1.15;
`

export const ExclusiveFramesDesc = styled.p`
  margin: 0 0 1.5rem;
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  line-height: 1.7;
`

export const StudioGradeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
`

export const StudioFeatureCard = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  box-shadow: ${({ theme }) => theme.shadows.card};

  h6 {
    margin: 0;
    color: ${({ theme }) => theme.colors.textPrimary};
    font-family: ${({ theme }) => theme.typography.headingFont};
    font-size: 1.15rem;
    font-weight: 500;
  }

  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 0.875rem;
    line-height: 1.6;
  }
`

/* Pricing Section */
export const PricingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const PricingHeader = styled.div`
  text-align: center;
  max-width: 650px;
  margin: 0 auto;

  h4 {
    margin: 0 0 0.5rem;
    color: ${({ theme }) => theme.colors.textPrimary};
    font-family: ${({ theme }) => theme.typography.headingFont};
    font-size: clamp(2rem, 3.5vw, 2.75rem);
    font-weight: 500;
  }

  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 1rem;
  }
`

export const PackageGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: repeat(3, 1fr);
    align-items: stretch;
  }
`

export const PackageCard = styled.div`
  position: relative;
  background: ${({ $popular, theme }) =>
    $popular
      ? 'linear-gradient(180deg, #231F20 0%, #151314 100%)'
      : theme.colors.surface};
  color: ${({ $popular }) => ($popular ? '#FFFFFF' : 'inherit')};
  border: ${({ $popular, theme }) =>
    $popular
      ? '2px solid #D4AF37'
      : `1px solid ${theme.colors.border}`};
  border-radius: ${({ theme }) => theme.radii.xl};
  padding: clamp(2rem, 3vw, 2.5rem);
  display: flex;
  flex-direction: column;
  box-shadow: ${({ $popular }) =>
    $popular
      ? '0 20px 40px rgba(0, 0, 0, 0.25)'
      : '0 10px 30px rgba(0, 0, 0, 0.04)'};
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-6px);
  }
`

export const PackageBadge = styled.span`
  position: absolute;
  top: -14px;
  left: 50%;
  transform: translateX(-50%);
  background: #D4AF37;
  color: #111111;
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  padding: 0.35rem 1.25rem;
  border-radius: ${({ theme }) => theme.radii.pill};
  white-space: nowrap;
  box-shadow: 0 4px 12px rgba(212, 175, 55, 0.4);
`

export const PackageName = styled.h5`
  margin: 0 0 0.25rem;
  font-family: ${({ theme }) => theme.typography.headingFont};
  font-size: 1.75rem;
  font-weight: 500;
  letter-spacing: 0.05em;
`

export const PackagePrice = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
  margin-bottom: 0.5rem;

  span.amount {
    font-family: ${({ theme }) => theme.typography.headingFont};
    font-size: 2.75rem;
    font-weight: 600;
    line-height: 1;
    color: ${({ $popular }) => ($popular ? '#D4AF37' : 'inherit')};
  }

  span.duration {
    font-size: 0.85rem;
    opacity: 0.8;
  }
`

export const PackageTagline = styled.p`
  margin: 0 0 1.5rem;
  font-size: 0.875rem;
  opacity: 0.85;
  line-height: 1.5;
  padding-bottom: 1rem;
  border-bottom: 1px solid
    ${({ $popular }) =>
      $popular ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0,0,0,0.08)'};
`

export const InclusionsBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.5rem;

  h6 {
    margin: 0;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    opacity: 0.9;
  }
`

export const InclusionList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  li {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    font-size: 0.85rem;
    line-height: 1.45;

    svg {
      color: ${({ $popular }) => ($popular ? '#D4AF37' : '#C67495')};
      flex-shrink: 0;
      font-size: 1rem;
      margin-top: 0.1rem;
    }
  }
`

export const AddOnsBlock = styled.div`
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px dashed
    ${({ $popular }) =>
      $popular ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0,0,0,0.1)'};
  margin-bottom: 1.25rem;

  h6 {
    margin: 0 0 0.5rem;
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    opacity: 0.8;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.35rem;

    li {
      font-size: 0.8rem;
      opacity: 0.85;
    }
  }
`

export const TravelNote = styled.p`
  margin: 0 0 1.5rem;
  font-size: 0.75rem;
  font-style: italic;
  opacity: 0.75;
  line-height: 1.4;
`

/* ==========================================================================
   BLISSFUL NEST PRIZE OPTIONS STYLES
   ========================================================================== */
export const PrizeOptionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
`

export const PrizeCard = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: ${({ theme }) => theme.shadows.card};
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-4px);
  }

  img {
    width: 100%;
    height: 160px;
    object-fit: cover;
  }
`

export const PrizeContent = styled.div`
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
`

export const PrizeBadge = styled.span`
  align-self: flex-start;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
  background: rgba(198, 116, 149, 0.12);
  padding: 0.2rem 0.6rem;
  border-radius: ${({ theme }) => theme.radii.pill};
`

export const PrizeTitle = styled.h6`
  margin: 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-family: ${({ theme }) => theme.typography.headingFont};
  font-size: 1.15rem;
  font-weight: 500;
`

export const PrizeTagline = styled.span`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.primaryHover};
  font-weight: 600;
`

export const PrizeDesc = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.85rem;
  line-height: 1.5;
`

export const SubcategoryNav = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  align-items: center;
  margin-top: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-wrap: nowrap;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    -ms-overflow-style: none;
    padding-bottom: 0.5rem;
    
    &::-webkit-scrollbar {
      display: none;
    }
  }
`

export const SubcategoryPill = styled.button`
  padding: 0.6rem 1.25rem;
  border-radius: ${({ theme }) => theme.radii.pill};
  font-size: 0.875rem;
  font-weight: 500;
  border: 1px solid
    ${({ $isActive, theme }) =>
      $isActive ? theme.colors.primary : theme.colors.border};
  background: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.primary : theme.colors.surface};
  color: ${({ $isActive }) => ($isActive ? '#FFFFFF' : 'inherit')};
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: ${({ $isActive, theme }) =>
    $isActive ? theme.shadows.soft : 'none'};
  white-space: nowrap;
  flex-shrink: 0;
  min-height: 44px;
  touch-action: manipulation;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primaryHover};
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.focus};
    outline-offset: 2px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0.7rem 1.35rem;
    font-size: 0.9rem;
  }
`

