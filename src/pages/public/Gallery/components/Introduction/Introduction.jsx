import { motion } from 'framer-motion'
import Container from '../../../../components/Container/index.js'
import {
  IntroSection,
  IntroContent,
  IntroEyebrow,
  IntroTitle,
  IntroText,
} from './Introduction.styles.js'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

function Introduction({ content }) {
  return (
    <IntroSection>
      <Container>
        <IntroContent>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <IntroEyebrow>{content.eyebrow}</IntroEyebrow>
            <IntroTitle>{content.title}</IntroTitle>
            <IntroText>{content.text}</IntroText>
          </motion.div>
        </IntroContent>
      </Container>
    </IntroSection>
  )
}

export default Introduction
