import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'
import { NavLink } from 'react-router-dom'
import Button from '../../../../components/Button/index.js'
import { BUTTON_VARIANTS } from '../../../../constants/ui.js'
import {
  CTASection,
  CTAContainer,
  CTAEyebrow,
  CTATitle,
  CTADescription,
  CTAButtons,
  CTABackground,
} from './GalleryCTA.styles.js'

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

function GalleryCTA({ content }) {
  return (
    <CTASection>
      <CTABackground $src={content.backgroundImage} aria-hidden="true" />
      <CTAContainer>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <CTAEyebrow>{content.eyebrow}</CTAEyebrow>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <CTATitle>{content.title}</CTATitle>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <CTADescription>{content.description}</CTADescription>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <CTAButtons>
              <Button as={NavLink} to={content.primaryLink}>
                {content.primaryCTA}
                <FiArrowRight aria-hidden="true" size={18} />
              </Button>
              <Button as={NavLink} to={content.secondaryLink} variant={BUTTON_VARIANTS.OUTLINE}>
                {content.secondaryCTA}
              </Button>
            </CTAButtons>
          </motion.div>
        </motion.div>
      </CTAContainer>
    </CTASection>
  )
}

export default GalleryCTA
