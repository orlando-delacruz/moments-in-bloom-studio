import { FiStar } from 'react-icons/fi'
import Container from '../../../../components/Container/index.js'
import Section from '../../../../components/Section/index.js'
import { SECTION_TONES } from '../../../../constants/ui.js'
import {
  AuthorMeta,
  AuthorName,
  ContentCol,
  EventRole,
  HighlightCard,
  ImageFrame,
  QuoteText,
  StarsRow,
} from './TestimonialHighlight.styles.js'

function TestimonialHighlight({ content, id }) {
  const { subtitle, title, quote, author, role, image } = content

  return (
    <Section id={id} subtitle={subtitle} title={title} tone={SECTION_TONES.DEFAULT}>
      <Container>
        <HighlightCard
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <ContentCol>
            <StarsRow aria-label="5 out of 5 stars">
              {[...Array(5)].map((_, i) => (
                <FiStar key={i} size={18} fill="currentColor" />
              ))}
            </StarsRow>

            <QuoteText>&ldquo;{quote}&rdquo;</QuoteText>

            <AuthorMeta>
              <AuthorName>{author}</AuthorName>
              <EventRole>{role}</EventRole>
            </AuthorMeta>
          </ContentCol>

          {image && (
            <ImageFrame>
              <img src={image} alt={`Wedding celebration for ${author}`} loading="lazy" />
            </ImageFrame>
          )}
        </HighlightCard>
      </Container>
    </Section>
  )
}

export default TestimonialHighlight
