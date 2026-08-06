import Container from '../../../../components/Container/index.js'
import Section from '../../../../components/Section/index.js'
import { SECTION_TONES } from '../../../../constants/ui.js'
import {
  DifferentiatorsGrid,
  HighlightCard,
  HighlightDescription,
  HighlightHeader,
  HighlightNumber,
  HighlightTitle,
} from './WhyChooseUs.styles.js'

function WhyChooseUs({ content, id }) {
  const { subtitle, title, description, highlights } = content

  return (
    <Section
      id={id}
      subtitle={subtitle}
      title={title}
      description={description}
      tone={SECTION_TONES.DEFAULT}
    >
      <Container>
        <DifferentiatorsGrid>
          {highlights.map((item, index) => (
            <HighlightCard
              key={item.number || index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <HighlightHeader>
                <HighlightNumber>{item.number}</HighlightNumber>
              </HighlightHeader>
              <HighlightTitle>{item.title}</HighlightTitle>
              <HighlightDescription>{item.description}</HighlightDescription>
            </HighlightCard>
          ))}
        </DifferentiatorsGrid>
      </Container>
    </Section>
  )
}

export default WhyChooseUs
