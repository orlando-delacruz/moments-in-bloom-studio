import { useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import Button from '../../../../components/Button/index.js'
import Container from '../../../../components/Container/index.js'
import { BUTTON_VARIANTS } from '../../../../constants/ui.js'
import {
  HeroActions,
  HeroContent,
  HeroDescription,
  HeroEyebrow,
  HeroMedia,
  HeroOverlay,
  HeroRoot,
  HeroTitle,
} from './AboutHero.styles.js'

function AboutHero({ content }) {
  const { eyebrow, title, description, primaryCta, secondaryCta, image } = content
  const shouldReduceMotion = useReducedMotion()
  const { scrollY } = useScroll()
  const mediaY = useTransform(scrollY, [0, 800], [0, shouldReduceMotion ? 0 : 60])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <HeroRoot>
      {image && image.src && (
        <HeroMedia $src={image.src} style={{ y: mediaY }} aria-hidden="true" />
      )}
      <HeroOverlay aria-hidden="true" />
      <Container>
        <HeroContent variants={containerVariants} initial="hidden" animate="visible">
          {eyebrow && <HeroEyebrow>{eyebrow}</HeroEyebrow>}

          <HeroTitle variants={itemVariants}>{title}</HeroTitle>

          <HeroDescription variants={itemVariants}>{description}</HeroDescription>

          <HeroActions variants={itemVariants}>
            {primaryCta && (
              <Button as={NavLink} to={primaryCta.path} variant={BUTTON_VARIANTS.PRIMARY}>
                {primaryCta.label}
              </Button>
            )}
            {secondaryCta && (
              <Button as={NavLink} to={secondaryCta.path} variant={BUTTON_VARIANTS.OUTLINE}>
                {secondaryCta.label}
              </Button>
            )}
          </HeroActions>
        </HeroContent>
      </Container>
    </HeroRoot>
  )
}

export default AboutHero
