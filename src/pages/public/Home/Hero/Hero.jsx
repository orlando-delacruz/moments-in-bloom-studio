import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { FiArrowDown, FiArrowUpRight } from 'react-icons/fi'
import { NavLink } from 'react-router-dom'
import Button from '../../../../components/Button/index.js'
import { BUTTON_VARIANTS } from '../../../../constants/ui.js'
import {
  HeroActions,
  HeroContainer,
  HeroCopy,
  HeroDecoration,
  HeroDescription,
  HeroEyebrow,
  HeroMedia,
  HeroOverlay,
  HeroRoot,
  HeroSideNote,
  HeroTitle,
  ScrollCue,
} from './Hero.styles.js'

const contentVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.08 },
  },
}

function Hero({ content, id = 'home-hero' }) {
  const shouldReduceMotion = useReducedMotion()
  const { scrollY } = useScroll()
  const mediaY = useTransform(scrollY, [0, 800], [0, shouldReduceMotion ? 0 : 72])

  return (
    <HeroRoot id={id}>
      <HeroMedia $src={content.image.src} style={{ y: mediaY }} aria-hidden="true" />
      <HeroOverlay aria-hidden="true" />
      <HeroDecoration
        aria-hidden="true"
        animate={shouldReduceMotion ? undefined : { rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
      />
      <HeroContainer>
        <HeroCopy variants={contentVariants} initial="hidden" animate="visible">
          <motion.div variants={contentVariants}>
            <HeroEyebrow>{content.eyebrow}</HeroEyebrow>
          </motion.div>
          <motion.div variants={contentVariants}>
            <HeroTitle>{content.title}</HeroTitle>
          </motion.div>
          <motion.div variants={contentVariants}>
            <HeroDescription>{content.description}</HeroDescription>
          </motion.div>
          <HeroActions>
            <Button as={NavLink} to="/contact">
              {content.primaryCta}
              <FiArrowUpRight aria-hidden="true" color="currentColor" size={17} />
            </Button>
            <Button as={NavLink} to="/gallery" variant={BUTTON_VARIANTS.OUTLINE}>
              {content.secondaryCta}
            </Button>
          </HeroActions>
        </HeroCopy>
        <HeroSideNote
          initial={{ opacity: 0, x: 18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          Floral design
          <br />
          thoughtful details
          <br />
          joyful gatherings
        </HeroSideNote>
      </HeroContainer>
      <ScrollCue href="#home-trusted-by" aria-label="Scroll to discover more">
        <span>Scroll to discover</span>
        <FiArrowDown aria-hidden="true" color="currentColor" size={14} />
      </ScrollCue>
      <span className="sr-only">{content.image.credit}</span>
    </HeroRoot>
  )
}

export default Hero
