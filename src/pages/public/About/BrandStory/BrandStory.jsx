import Container from '../../../../components/Container/index.js'
import Section from '../../../../components/Section/index.js'
import { SECTION_TONES } from '../../../../constants/ui.js'
import {
  BadgeSub,
  BadgeTitle,
  DecorativeBadge,
  ImageFrame,
  QuoteAuthor,
  QuoteRole,
  StoryContent,
  StoryGrid,
  StoryParagraphs,
  StoryQuoteCard,
  StoryVisual,
} from './BrandStory.styles.js'

function BrandStory({ content, id }) {
  const { subtitle, title, paragraphs, quote, image } = content

  return (
    <Section id={id} subtitle={subtitle} title={title} tone={SECTION_TONES.SURFACE}>
      <Container>
        <StoryGrid>
          <StoryContent
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <StoryParagraphs>
              {paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </StoryParagraphs>

            {quote && (
              <StoryQuoteCard>
                <p>&ldquo;{quote.text}&rdquo;</p>
                <cite>
                  <QuoteAuthor>{quote.author}</QuoteAuthor>
                  <QuoteRole>{quote.role}</QuoteRole>
                </cite>
              </StoryQuoteCard>
            )}
          </StoryContent>

          <StoryVisual
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <ImageFrame>
              <img src={image.src} alt={image.alt} loading="lazy" />
            </ImageFrame>
            <DecorativeBadge>
              <BadgeTitle>Est.</BadgeTitle>
              <BadgeSub>2018</BadgeSub>
            </DecorativeBadge>
          </StoryVisual>
        </StoryGrid>
      </Container>
    </Section>
  )
}

export default BrandStory
