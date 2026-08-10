import { useCallback, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'
import { NavLink } from 'react-router-dom'

import Button from '../../../components/Button/index.js'
import TitleReveal from '../../../components/Reveal/index.js'
import { BUTTON_VARIANTS } from '../../../constants/ui.js'
import { homepageFaqItems } from '../../../constants/homepage.js'
import { servicesFaqs } from '../../../constants/services.js'

import {
  EASE_LUXE,
  fadeUp,
  softReveal,
  staggerContainer,
  VIEWPORT_DEFAULT,
} from '../../../styles/animations.js'

import * as S from './FAQs.styles.js'

const faqItems = Object.freeze([...homepageFaqItems, ...servicesFaqs])

function FAQs() {
  const [openId, setOpenId] = useState(null)
  const triggerRefs = useRef([])

  const handleTriggerKeyDown = useCallback((event, index) => {
    const triggers = triggerRefs.current
    let nextIndex = null

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault()
        nextIndex = (index + 1) % triggers.length
        break
      case 'ArrowUp':
        event.preventDefault()
        nextIndex = (index - 1 + triggers.length) % triggers.length
        break
      case 'Home':
        event.preventDefault()
        nextIndex = 0
        break
      case 'End':
        event.preventDefault()
        nextIndex = triggers.length - 1
        break
      default:
        break
    }

    if (nextIndex !== null) {
      const nextItem = faqItems[nextIndex]
      triggers[nextIndex].focus()
      setOpenId(nextItem.id)
    }
  }, [])

  return (
    <S.FAQsPage>
      <S.FaqHero>
        <S.FaqHeroContent>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: EASE_LUXE }}
          >
            <S.FaqHeroEyebrow>Frequently Asked Questions</S.FaqHeroEyebrow>
          </motion.div>
          <S.FaqHeroTitle>
            <TitleReveal delay={0.4}>Everything you need to know.</TitleReveal>
          </S.FaqHeroTitle>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85, ease: EASE_LUXE }}
          >
            <S.FaqHeroDescription>
              Answers about bookings, styling, service areas and the journey from first
              enquiry to your final celebration.
            </S.FaqHeroDescription>
          </motion.div>
        </S.FaqHeroContent>
      </S.FaqHero>

      <S.FaqSection>
        <S.FaqContainer>
          <S.FaqList
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_DEFAULT}
          >
            {faqItems.map((item, index) => {
              const isOpen = openId === item.id
              const panelId = `faq-page-panel-${item.id}`
              const triggerId = `faq-page-trigger-${item.id}`

              return (
                <S.FaqItem key={item.id} variants={softReveal}>
                  <S.FaqTrigger
                    ref={(node) => {
                      triggerRefs.current[index] = node
                    }}
                    id={triggerId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                    onKeyDown={(event) => handleTriggerKeyDown(event, index)}
                  >
                    <span>{item.question}</span>
                    <S.FaqIcon
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.25 }}
                      aria-hidden="true"
                    >
                      +
                    </S.FaqIcon>
                  </S.FaqTrigger>
                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <S.FaqPanel
                        key={panelId}
                        id={panelId}
                        role="region"
                        aria-labelledby={triggerId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: EASE_LUXE }}
                      >
                        <S.FaqAnswer>{item.answer}</S.FaqAnswer>
                      </S.FaqPanel>
                    ) : null}
                  </AnimatePresence>
                </S.FaqItem>
              )
            })}
          </S.FaqList>
        </S.FaqContainer>
      </S.FaqSection>

      <S.FaqContactSection>
        <S.FaqContactContent>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_DEFAULT}
          >
            <motion.div variants={fadeUp}>
              <S.FaqContactEyebrow>Still curious?</S.FaqContactEyebrow>
            </motion.div>
            <motion.div variants={fadeUp}>
              <S.FaqContactTitle>Let's talk about your celebration.</S.FaqContactTitle>
            </motion.div>
            <motion.div variants={fadeUp}>
              <S.FaqContactText>
                If you cannot find the answer you are looking for, our team is happy to
                help with anything specific to your date, venue or vision.
              </S.FaqContactText>
            </motion.div>
            <motion.div variants={fadeUp}>
              <Button as={NavLink} to="/contact" variant={BUTTON_VARIANTS.GHOST}>
                Ask us a question
                <FiArrowRight aria-hidden="true" color="currentColor" size={16} />
              </Button>
            </motion.div>
          </motion.div>
        </S.FaqContactContent>
      </S.FaqContactSection>
    </S.FAQsPage>
  )
}

export default FAQs
