import { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'
import Container from '../../../../components/Container/index.js'
import Section from '../../../../components/Section/index.js'
import { SECTION_TONES } from '../../../../constants/ui.js'
import {
  AccordionWrapper,
  FAQAnswerContent,
  FAQAnswerPanel,
  FAQItem,
  FAQQuestionButton,
} from './FAQPreview.styles.js'

function FAQPreview({ faqs, id }) {
  const [openIndex, setOpenIndex] = useState(0)

  if (!faqs || !faqs.length) return null

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <Section
      id={id}
      subtitle="Essential Enquiries"
      title="Frequently Asked Questions"
      description="Everything you need to know about reserving our styling services, venue logistics, and investment terms."
      tone={SECTION_TONES.SURFACE}
    >
      <Container>
        <AccordionWrapper>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <FAQItem key={faq.id || index} $isOpen={isOpen}>
                <FAQQuestionButton
                  onClick={() => toggleFAQ(index)}
                  $isOpen={isOpen}
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <FiChevronDown aria-hidden="true" />
                </FAQQuestionButton>

                <FAQAnswerPanel
                  initial={false}
                  animate={{
                    height: isOpen ? 'auto' : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <FAQAnswerContent>{faq.answer}</FAQAnswerContent>
                </FAQAnswerPanel>
              </FAQItem>
            )
          })}
        </AccordionWrapper>
      </Container>
    </Section>
  )
}

export default FAQPreview
