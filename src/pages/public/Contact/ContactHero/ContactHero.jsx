import { motion } from 'framer-motion'
import Container from '../../../../components/Container/index.js'
import TitleReveal from '../../../../components/Reveal/TitleReveal.jsx'
import { EASE_LUXE } from '../../../../styles/animations.js'
import * as S from './ContactHero.styles.js'

function ContactHero({ content, id }) {
  if (!content) return null

  return (
    <S.HeroRoot id={id}>
      <Container>
        <S.HeroGrid>
          <S.HeroCopy
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE_LUXE }}
          >
            <S.HeroEyebrow>{content.eyebrow}</S.HeroEyebrow>
            <S.HeroTitle>
              <TitleReveal delay={0.15}>{content.title}</TitleReveal>
            </S.HeroTitle>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55, ease: EASE_LUXE }}
            >
              <S.HeroDescription>{content.description}</S.HeroDescription>
            </motion.div>
            <S.HeroNote
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.75, ease: EASE_LUXE }}
            >
              <span aria-hidden="true" />
              <p>{content.note}</p>
            </S.HeroNote>
          </S.HeroCopy>

          <S.HeroMedia
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.3, ease: EASE_LUXE }}
          >
            <img
              src={content.image.src}
              alt={content.image.alt}
              loading="eager"
              width="560"
              height="700"
            />
            <span className="hero-frame" aria-hidden="true" />
          </S.HeroMedia>
        </S.HeroGrid>
      </Container>
      <span className="sr-only">{content.image.credit}</span>
    </S.HeroRoot>
  )
}

export default ContactHero