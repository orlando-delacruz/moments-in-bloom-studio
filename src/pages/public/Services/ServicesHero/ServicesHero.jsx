import Button from '../../../../components/Button/index.js'
import Container from '../../../../components/Container/index.js'
import {
  BadgeSubtitle,
  BadgeTitle,
  FloatingBadge,
  HeroActions,
  HeroBackground,
  HeroContent,
  HeroDescription,
  HeroEyebrow,
  HeroRoot,
  HeroTitle,
} from './ServicesHero.styles.js'

function ServicesHero({ content, id }) {
  if (!content) return null

  return (
    <HeroRoot id={id}>
      <HeroBackground>
        <img src={content.image.src} alt={content.image.alt} loading="eager" />
      </HeroBackground>

      <Container>
        <HeroContent
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {content.eyebrow ? (
            <HeroEyebrow
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {content.eyebrow}
            </HeroEyebrow>
          ) : null}

          <HeroTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {content.title}
          </HeroTitle>

          <HeroDescription
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {content.description}
          </HeroDescription>

          <HeroActions
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            {content.primaryCta ? (
              <Button to={content.primaryCta.path} size="large" variant="primary">
                {content.primaryCta.label}
              </Button>
            ) : null}

            {content.secondaryCta ? (
              <Button to={content.secondaryCta.path} size="large" variant="outline">
                {content.secondaryCta.label}
              </Button>
            ) : null}
          </HeroActions>
        </HeroContent>
      </Container>

      {content.badge ? (
        <FloatingBadge
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <BadgeTitle>{content.badge.title}</BadgeTitle>
          <BadgeSubtitle>{content.badge.subtitle}</BadgeSubtitle>
        </FloatingBadge>
      ) : null}
    </HeroRoot>
  )
}

export default ServicesHero
