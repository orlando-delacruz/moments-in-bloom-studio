import {
  ReasonContent,
  ReasonDescription,
  ReasonNumber,
  ReasonsList,
  ReasonRow,
  ReasonTitle,
  WhyContainer,
  WhyCopy,
  WhyEyebrow,
  WhyLead,
  WhyRoot,
  WhyTitle,
} from './WhyChooseUs.styles.js'

function WhyChooseUs({ reasons, id = 'home-why-choose-us' }) {
  return (
    <WhyRoot id={id}>
      <WhyContainer>
        <WhyLead>
          <WhyEyebrow>The difference is in the detail</WhyEyebrow>
          <WhyTitle>Why us?</WhyTitle>
          <WhyCopy>
            You bring the reason to celebrate. We bring the calm, creative thinking and considered details that make it all feel easy.
          </WhyCopy>
        </WhyLead>
        <ReasonsList>
          {reasons.map((reason, index) => (
            <ReasonRow
              key={reason.number}
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
            >
              <ReasonNumber aria-hidden="true">{reason.number}</ReasonNumber>
              <ReasonContent>
                <ReasonTitle>{reason.title}</ReasonTitle>
                <ReasonDescription>{reason.description}</ReasonDescription>
              </ReasonContent>
            </ReasonRow>
          ))}
        </ReasonsList>
      </WhyContainer>
    </WhyRoot>
  )
}

export default WhyChooseUs
