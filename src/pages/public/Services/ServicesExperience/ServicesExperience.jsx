import Container from '../../../../components/Container/index.js'
import Section from '../../../../components/Section/index.js'
import { SECTION_TONES } from '../../../../constants/ui.js'
import {
  ProcessTimeline,
  StepCard,
  StepContent,
  StepDescription,
  StepNumber,
  StepTitle,
} from './ServicesExperience.styles.js'

function ServicesExperience({ content, id }) {
  if (!content) return null

  return (
    <Section
      id={id}
      subtitle={content.subtitle}
      title={content.title}
      description={content.description}
      tone={SECTION_TONES.SURFACE}
    >
      <Container>
        <ProcessTimeline>
          {content.steps.map((step, index) => (
            <StepCard
              key={step.number || index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <StepNumber>{step.number}</StepNumber>
              <StepContent>
                <StepTitle>{step.title}</StepTitle>
                <StepDescription>{step.description}</StepDescription>
              </StepContent>
            </StepCard>
          ))}
        </ProcessTimeline>
      </Container>
    </Section>
  )
}

export default ServicesExperience
