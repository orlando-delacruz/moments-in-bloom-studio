import Container from '../../../../components/Container/index.js'
import Section from '../../../../components/Section/index.js'
import { SECTION_TONES } from '../../../../constants/ui.js'
import {
  IntroContent,
  IntroGrid,
  IntroQuote,
  IntroTextGroup,
  IntroVisual,
  PrimaryImageFrame,
  QuoteAuthor,
  QuoteRole,
  SecondaryImageFloat,
} from './ServicesIntro.styles.js'

function ServicesIntro({ content, id }) {
  if (!content) return null

  return (
    <Section
      id={id}
      subtitle={content.subtitle}
      title={content.title}
      tone={SECTION_TONES.DEFAULT}
    >
      <Container>
        <IntroGrid>
          <IntroContent
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <IntroTextGroup>
              <p>{content.paragraph1}</p>
              <p>{content.paragraph2}</p>
            </IntroTextGroup>

            {content.quote ? (
              <IntroQuote>
                <p>“{content.quote.text}”</p>
                <cite>
                  <QuoteAuthor>{content.quote.author}</QuoteAuthor>
                  <QuoteRole>{content.quote.role}</QuoteRole>
                </cite>
              </IntroQuote>
            ) : null}
          </IntroContent>

          <IntroVisual
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <PrimaryImageFrame>
              <img
                src={content.primaryImage.src}
                alt={content.primaryImage.alt}
                loading="lazy"
              />
            </PrimaryImageFrame>

            {content.secondaryImage ? (
              <SecondaryImageFloat>
                <img
                  src={content.secondaryImage.src}
                  alt={content.secondaryImage.alt}
                  loading="lazy"
                />
              </SecondaryImageFloat>
            ) : null}
          </IntroVisual>
        </IntroGrid>
      </Container>
    </Section>
  )
}

export default ServicesIntro
