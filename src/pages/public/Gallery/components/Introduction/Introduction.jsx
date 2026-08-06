import { motion } from 'framer-motion'

import Container from '../../../../../components/Container/index.js'

import * as S from './Introduction.styles.js'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

function Introduction({ content }) {
  return (
    <S.IntroSection>
      <Container>
        <S.IntroContent>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <S.IntroEyebrow>{content.eyebrow}</S.IntroEyebrow>
            <S.IntroTitle>{content.title}</S.IntroTitle>
            <S.IntroText>{content.text}</S.IntroText>
          </motion.div>
        </S.IntroContent>
      </Container>
    </S.IntroSection>
  )
}

export default Introduction
