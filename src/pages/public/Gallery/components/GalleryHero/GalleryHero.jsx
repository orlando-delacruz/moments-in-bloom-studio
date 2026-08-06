import { motion, useReducedMotion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'
import { NavLink } from 'react-router-dom'
import Button from '../../../../components/Button/index.js'
import { BUTTON_VARIANTS } from '../../../../constants/ui.js'
import {
  GalleryHero,
  HeroMedia,
  HeroOverlay,
  HeroContent,
  HeroEyebrow,
  HeroTitle,
  HeroDescription,
  HeroCTA,
} from './GalleryHero.styles.js'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

function GalleryHero({ content }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <GalleryHero>
      <HeroMedia
        $src={content.backgroundImage}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: shouldReduceMotion ? 0 : 8, ease: 'easeOut' }}
        aria-hidden="true"
      />
      <HeroOverlay aria-hidden="true" />
      <HeroContent>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 0.2 }}
        >
          <HeroEyebrow>{content.eyebrow}</HeroEyebrow>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 0.3 }}
        >
          <HeroTitle>{content.title}</HeroTitle>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 0.4 }}
        >
          <HeroDescription>{content.description}</HeroDescription>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 0.5 }}
        >
          <HeroCTA>
            <Button as={NavLink} to={content.primaryLink}>
              {content.primaryCTA}
              <FiArrowRight aria-hidden="true" size={18} />
            </Button>
            <Button as={NavLink} to={content.secondaryLink} variant={BUTTON_VARIANTS.OUTLINE}>
              {content.secondaryCTA}
            </Button>
          </HeroCTA>
        </motion.div>
      </HeroContent>
    </GalleryHero>
  )
}

export default GalleryHero
