import { motion, useReducedMotion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'
import { NavLink } from 'react-router-dom'

import Button from '../../../../../components/Button/index.js'

import { BUTTON_VARIANTS } from '../../../../../constants/ui.js'

import * as S from './GalleryHero.styles.js'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

function GalleryHero({ content }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <S.GalleryHero>
      <S.HeroMedia
        $src={content.backgroundImage}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: shouldReduceMotion ? 0 : 8, ease: 'easeOut' }}
        aria-hidden="true"
      />
      <S.HeroOverlay aria-hidden="true" />
      <S.HeroContent>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 0.2 }}
        >
          <S.HeroEyebrow>{content.eyebrow}</S.HeroEyebrow>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 0.3 }}
        >
          <S.HeroTitle>{content.title}</S.HeroTitle>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 0.4 }}
        >
          <S.HeroDescription>{content.description}</S.HeroDescription>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 0.5 }}
        >
          <S.HeroCTA>
            <Button as={NavLink} to={content.primaryLink}>
              {content.primaryCTA}
              <FiArrowRight aria-hidden="true" size={18} />
            </Button>
            <Button as={NavLink} to={content.secondaryLink} variant={BUTTON_VARIANTS.OUTLINE}>
              {content.secondaryCTA}
            </Button>
          </S.HeroCTA>
        </motion.div>
      </S.HeroContent>
    </S.GalleryHero>
  )
}

export default GalleryHero
