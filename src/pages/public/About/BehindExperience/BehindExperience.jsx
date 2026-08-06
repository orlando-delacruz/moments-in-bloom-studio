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
} from './BehindExperience.styles.js'

function BehindExperience({ content, id }) {
  const { subtitle, title, description, steps } = content

  return (
    <Section
      id={id}
      subtitle={subtitle}
      title={title}
      description={description}
      tone={SECTION_TONES.SURFACE}
    >
      <Container>
        <ProcessTimeline>
          {steps.map((step, index) => (
            <StepCard
              key={step.stepNumber || index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <StepNumber>{step.stepNumber}</StepNumber>
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

export default BehindExperience
