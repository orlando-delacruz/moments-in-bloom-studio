import { AnimatePresence } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../../../../components/Button/index.js'
import { BUTTON_VARIANTS } from '../../../../constants/ui.js'
import {
  FAQAction,
  FAQAnswer,
  FAQContainer,
  FAQEyebrow,
  FAQHeader,
  FAQIcon,
  FAQItem,
  FAQList,
  FAQPanel,
  FAQRoot,
  FAQTitle,
  FAQTrigger,
} from './FAQPreview.styles.js'

function FAQPreview({ items, id = 'home-faq-preview' }) {
  const [openId, setOpenId] = useState(null)

  return (
    <FAQRoot id={id}>
      <FAQContainer>
        <FAQHeader>
          <FAQEyebrow>A few helpful things</FAQEyebrow>
          <FAQTitle>Good to know.</FAQTitle>
        </FAQHeader>
        <FAQList>
          {items.map((item) => {
            const isOpen = openId === item.id
            const panelId = `faq-panel-${item.id}`
            const triggerId = `faq-trigger-${item.id}`

            return (
              <FAQItem key={item.id}>
                <FAQTrigger
                  id={triggerId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                >
                  <span>{item.question}</span>
                  <FAQIcon
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    aria-hidden="true"
                  >
                    +
                  </FAQIcon>
                </FAQTrigger>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <FAQPanel
                      key={panelId}
                      id={panelId}
                      role="region"
                      aria-labelledby={triggerId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <FAQAnswer>{item.answer}</FAQAnswer>
                    </FAQPanel>
                  ) : null}
                </AnimatePresence>
              </FAQItem>
            )
          })}
        </FAQList>
        <FAQAction>
          <Button as={NavLink} to="/faqs" variant={BUTTON_VARIANTS.GHOST}>
            View all FAQs
            <FiArrowUpRight aria-hidden="true" color="currentColor" size={16} />
          </Button>
        </FAQAction>
      </FAQContainer>
    </FAQRoot>
  )
}

export default FAQPreview
