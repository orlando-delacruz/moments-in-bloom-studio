import { FiStar } from 'react-icons/fi'
import Container from '../../../../components/Container/index.js'
import Section from '../../../../components/Section/index.js'
import { SECTION_TONES } from '../../../../constants/ui.js'
import {
  AuthorAvatar,
  AuthorFooter,
  AuthorMeta,
  AuthorName,
  CardTop,
  EventTag,
  QuoteText,
  RatingStars,
  TestimonialCard,
  TestimonialsGrid,
} from './ClientLove.styles.js'

function ClientLove({ testimonials, id }) {
  if (!testimonials || !testimonials.length) return null

  return (
    <Section
      id={id}
      subtitle="Client Testimonials"
      title="Kind Words From Our Celebrators"
      description="Read how couples, private hosts, and brand partners describe their styling experience with Moments in Blooms."
      tone={SECTION_TONES.DEFAULT}
    >
      <Container>
        <TestimonialsGrid>
          {testimonials.map((item, index) => (
            <TestimonialCard
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <CardTop>
                <RatingStars>
                  {Array.from({ length: item.rating || 5 }).map((_, i) => (
                    <FiStar key={i} fill="currentColor" aria-hidden="true" />
                  ))}
                </RatingStars>
                <QuoteText>“{item.quote}”</QuoteText>
              </CardTop>

              <AuthorFooter>
                {item.image ? (
                  <AuthorAvatar>
                    <img src={item.image.src} alt={item.image.alt} loading="lazy" />
                  </AuthorAvatar>
                ) : null}
                <AuthorMeta>
                  <AuthorName>{item.name}</AuthorName>
                  <EventTag>{item.event}</EventTag>
                </AuthorMeta>
              </AuthorFooter>
            </TestimonialCard>
          ))}
        </TestimonialsGrid>
      </Container>
    </Section>
  )
}

export default ClientLove
