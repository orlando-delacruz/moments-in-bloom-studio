import { motion } from 'framer-motion'
import Container from '../../../components/Container/index.js'
import TitleReveal from '../../../components/Reveal/TitleReveal.jsx'
import { EASE_LUXE } from '../../../styles/animations.js'
import {
  FaqHeroContent,
  FaqHeroDescription,
  FaqHeroEyebrow,
  FaqHeroRoot,
  FaqHeroTitle,
} from './FAQHero.styles.js'

function FAQHero() {
  return (
    <FaqHeroRoot>
      <Container>
        <FaqHeroContent>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: EASE_LUXE }}
          >
            <FaqHeroEyebrow>Frequently Asked Questions</FaqHeroEyebrow>
          </motion.div>
          <FaqHeroTitle>
            <TitleReveal delay={0.4}>Everything you need to know.</TitleReveal>
          </FaqHeroTitle>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85, ease: EASE_LUXE }}
          >
            <FaqHeroDescription>
              Answers about services, styling, planning, travel and the journey from
              first enquiry to your final celebration.
            </FaqHeroDescription>
          </motion.div>
        </FaqHeroContent>
      </Container>
    </FaqHeroRoot>
  )
}

export default FAQHero
