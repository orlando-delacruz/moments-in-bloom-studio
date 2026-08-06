import {
  ProcessContainer,
  ProcessCopy,
  ProcessDescription,
  ProcessEyebrow,
  ProcessHeader,
  ProcessIntro,
  ProcessItem,
  ProcessLabel,
  ProcessList,
  ProcessRoot,
  ProcessStep,
  ProcessStepTitle,
  ProcessTitle,
} from './Process.styles.js'

function Process({ steps, id = 'home-process' }) {
  return (
    <ProcessRoot id={id}>
      <ProcessContainer>
        <ProcessHeader>
          <ProcessEyebrow>From first thought to final flourish</ProcessEyebrow>
          <ProcessTitle>Let&apos;s make it feel easy.</ProcessTitle>
          <ProcessIntro>
            A clear, considered process keeps the creative part joyful and the practical part beautifully under control.
          </ProcessIntro>
        </ProcessHeader>
        <ProcessList>
          {steps.map((step, index) => {
            const side = index % 2 === 0 ? 'left' : 'right'
            return (
              <ProcessItem
                key={step.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
              >
                <ProcessCopy $side={side}>
                  <ProcessLabel>{step.step}</ProcessLabel>
                  <ProcessStepTitle>{step.title}</ProcessStepTitle>
                  <ProcessDescription>{step.description}</ProcessDescription>
                </ProcessCopy>
                <ProcessStep aria-hidden="true">{String(index + 1).padStart(2, '0')}</ProcessStep>
              </ProcessItem>
            )
          })}
        </ProcessList>
      </ProcessContainer>
    </ProcessRoot>
  )
}

export default Process
