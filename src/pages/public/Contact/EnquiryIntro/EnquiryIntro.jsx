import { motion } from 'framer-motion'
import SafeReveal from '../../../../components/Reveal/SafeReveal.jsx'
import TitleReveal from '../../../../components/Reveal/TitleReveal.jsx'
import {
  EASE_LUXE,
  staggerContainer,
  staggerItem,
  VIEWPORT_DEFAULT,
} from '../../../../styles/animations.js'
import * as S from './EnquiryIntro.styles.js'

function EnquiryIntro({ content, id }) {
  if (!content) return null

  return (
    <S.IntroRoot id={id}>
      <S.IntroContent>
        <SafeReveal from={{ y: 12 }} duration={0.6}>
          <S.IntroEyebrow>{content.eyebrow}</S.IntroEyebrow>
        </SafeReveal>
        <S.IntroTitle>
          <TitleReveal>{content.title}</TitleReveal>
        </S.IntroTitle>
        <SafeReveal from={{ y: 24 }} duration={0.55} delay={0.1}>
          <S.IntroDescription>{content.description}</S.IntroDescription>
        </SafeReveal>
      </S.IntroContent>

      <S.IntroCardsWrap>
        <S.IntroCards
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_DEFAULT}
        >
          {content.cards.map((card) => (
            <motion.div
              key={card.number}
              variants={staggerItem}
              transition={{ ease: EASE_LUXE }}
            >
              <S.IntroCard>
                <S.IntroCardNumber>{card.number}</S.IntroCardNumber>
                <S.IntroCardTitle>{card.title}</S.IntroCardTitle>
                <S.IntroCardDescription>{card.description}</S.IntroCardDescription>
              </S.IntroCard>
            </motion.div>
          ))}
        </S.IntroCards>
      </S.IntroCardsWrap>
    </S.IntroRoot>
  )
}

export default EnquiryIntro