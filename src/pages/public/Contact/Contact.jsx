import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiArrowRight, FiCheck, FiClock, FiMail, FiMapPin, FiPhone } from 'react-icons/fi'

import Button from '../../../components/Button/index.js'
import TitleReveal from '../../../components/Reveal/index.js'

import { footerContact, footerSocialLinks } from '../../../constants/navigation.js'

import {
  EASE_LUXE,
  fadeUp,
  softReveal,
  staggerContainer,
  VIEWPORT_DEFAULT,
} from '../../../styles/animations.js'

import * as S from './Contact.styles.js'

const EVENT_TYPES = Object.freeze([
  'Wedding',
  'Elopement & Intimate Celebration',
  'Private Celebration',
  'Corporate Event',
  'Photobooth & Experiences',
  'Something else',
])

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <S.ContactPage>
      <S.ContactHero>
        <S.ContactHeroContent>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: EASE_LUXE }}
          >
            <S.ContactHeroEyebrow>Let's Begin</S.ContactHeroEyebrow>
          </motion.div>
          <S.ContactHeroTitle>
            <TitleReveal delay={0.4}>Tell us about your celebration.</TitleReveal>
          </S.ContactHeroTitle>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85, ease: EASE_LUXE }}
          >
            <S.ContactHeroDescription>
              Share your date, venue and vision, and our creative team will be in touch
              with a few thoughtful questions and a tailored direction for your event.
            </S.ContactHeroDescription>
          </motion.div>
        </S.ContactHeroContent>
      </S.ContactHero>

      <S.ContactSection>
        <S.ContactContainer>
          <motion.div
            variants={softReveal}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_DEFAULT}
          >
            <S.FormCard>
              {submitted ? (
                <S.SuccessPanel
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: EASE_LUXE }}
                >
                  <S.SuccessIcon aria-hidden="true">
                    <FiCheck size={28} />
                  </S.SuccessIcon>
                  <S.SuccessTitle>Thank you for reaching out.</S.SuccessTitle>
                  <S.SuccessText>
                    Your enquiry has been received. Our creative team will review the
                    details and be in touch shortly with a few thoughtful questions.
                  </S.SuccessText>
                </S.SuccessPanel>
              ) : (
                <>
                  <S.FormEyebrow>Begin the conversation</S.FormEyebrow>
                  <S.FormTitle>Share your vision with us</S.FormTitle>
                  <S.FormIntro>
                    The more we know about your date, venue and mood, the more personal
                    the proposal we can craft for you.
                  </S.FormIntro>
                  <S.Form onSubmit={handleSubmit}>
                    <S.Field>
                      <S.FieldLabel htmlFor="contact-name">Name *</S.FieldLabel>
                      <S.FieldInput
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        placeholder="Your full name"
                      />
                    </S.Field>
                    <S.FormRow>
                      <S.Field>
                        <S.FieldLabel htmlFor="contact-email">Email *</S.FieldLabel>
                        <S.FieldInput
                          id="contact-email"
                          name="email"
                          type="email"
                          required
                          autoComplete="email"
                          placeholder="you@example.com"
                        />
                      </S.Field>
                      <S.Field>
                        <S.FieldLabel htmlFor="contact-phone">Phone</S.FieldLabel>
                        <S.FieldInput
                          id="contact-phone"
                          name="phone"
                          type="tel"
                          autoComplete="tel"
                          placeholder="Optional"
                        />
                      </S.Field>
                    </S.FormRow>
                    <S.FormRow>
                      <S.Field>
                        <S.FieldLabel htmlFor="contact-event-type">
                          Event type
                        </S.FieldLabel>
                        <S.FieldSelect id="contact-event-type" name="eventType" defaultValue="">
                          <option value="" disabled>
                            Select a type
                          </option>
                          {EVENT_TYPES.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </S.FieldSelect>
                      </S.Field>
                      <S.Field>
                        <S.FieldLabel htmlFor="contact-date">Event date</S.FieldLabel>
                        <S.FieldInput
                          id="contact-date"
                          name="eventDate"
                          type="date"
                          placeholder="Optional"
                        />
                      </S.Field>
                    </S.FormRow>
                    <S.Field>
                      <S.FieldLabel htmlFor="contact-message">
                        Tell us about your celebration *
                      </S.FieldLabel>
                      <S.FieldTextarea
                        id="contact-message"
                        name="message"
                        required
                        placeholder="Venue, guest numbers, styling direction, inspiration…"
                      />
                    </S.Field>
                    <S.FormNote>
                      We treat every enquiry as a conversation — no spam, no obligation,
                      just a considered response from our team.
                    </S.FormNote>
                    <div>
                      <Button type="submit">
                        Send Enquiry
                        <FiArrowRight aria-hidden="true" size={18} />
                      </Button>
                    </div>
                  </S.Form>
                </>
              )}
            </S.FormCard>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_DEFAULT}
          >
            <S.InfoPanel>
              <motion.div variants={fadeUp}>
                <S.InfoTitle>Studio details</S.InfoTitle>
                <S.InfoIntro>
                  Prefer a direct conversation? Reach out through any of the channels
                  below — we would love to hear from you.
                </S.InfoIntro>
              </motion.div>
              <S.InfoList>
                <motion.li variants={fadeUp}>
                  <S.InfoItem>
                    <S.InfoIcon aria-hidden="true">
                      <FiMail size={18} />
                    </S.InfoIcon>
                    <div>
                      <S.InfoLabel>Email</S.InfoLabel>
                      <S.InfoLink href={`mailto:${footerContact.email}`}>
                        {footerContact.email}
                      </S.InfoLink>
                    </div>
                  </S.InfoItem>
                </motion.li>
                <motion.li variants={fadeUp}>
                  <S.InfoItem>
                    <S.InfoIcon aria-hidden="true">
                      <FiPhone size={18} />
                    </S.InfoIcon>
                    <div>
                      <S.InfoLabel>Phone</S.InfoLabel>
                      <S.InfoLink href={`tel:${footerContact.phone.replace(/[^+\d]/g, '')}`}>
                        {footerContact.phone}
                      </S.InfoLink>
                    </div>
                  </S.InfoItem>
                </motion.li>
                <motion.li variants={fadeUp}>
                  <S.InfoItem>
                    <S.InfoIcon aria-hidden="true">
                      <FiMapPin size={18} />
                    </S.InfoIcon>
                    <div>
                      <S.InfoLabel>Based in</S.InfoLabel>
                      <S.InfoValue>{footerContact.location}</S.InfoValue>
                    </div>
                  </S.InfoItem>
                </motion.li>
                <motion.li variants={fadeUp}>
                  <S.InfoItem>
                    <S.InfoIcon aria-hidden="true">
                      <FiClock size={18} />
                    </S.InfoIcon>
                    <div>
                      <S.InfoLabel>Studio visits</S.InfoLabel>
                      <S.InfoValue>
                        By appointment — weekday and selected weekend times.
                      </S.InfoValue>
                    </div>
                  </S.InfoItem>
                </motion.li>
              </S.InfoList>
              <motion.div variants={fadeUp}>
                <S.SocialRow>
                  {footerSocialLinks.map((social) => (
                    <S.SocialLink
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {social.label}
                      <FiArrowRight aria-hidden="true" size={14} />
                    </S.SocialLink>
                  ))}
                </S.SocialRow>
              </motion.div>
            </S.InfoPanel>
          </motion.div>
        </S.ContactContainer>
      </S.ContactSection>
    </S.ContactPage>
  )
}

export default Contact
