import styled from 'styled-components'
import { motion } from 'framer-motion'
import { pageShellStyles } from '../../pageStyles.js'

export const ContactPage = styled.div`
  ${pageShellStyles}
`

export const ContactHero = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  padding: clamp(7rem, 14vh, 9rem) clamp(1.5rem, 5vw, 2.5rem) clamp(3.5rem, 8vh, 5rem);
  background: ${({ theme }) => theme.colors.ivory};
  margin-top: calc(-1 * ${({ theme }) => theme.layout.headerHeight});

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-top: calc(-1 * ${({ theme }) => theme.layout.mobileHeaderHeight});
  }
`

export const ContactHeroContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 900px;
  text-align: center;
`

export const ContactHeroEyebrow = styled.p`
  font-family: ${({ theme }) => theme.typography.uiFont};
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primaryHover};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`

export const ContactHeroTitle = styled.h1`
  font-family: ${({ theme }) => theme.typography.headingFont};
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  font-weight: 400;
  line-height: ${({ theme }) => theme.typography.headingLineHeight};
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  overflow: hidden;
  padding-bottom: 0.1em;
  margin-bottom: calc(${({ theme }) => theme.spacing.lg} - 0.1em);
`

export const ContactHeroDescription = styled.p`
  font-family: ${({ theme }) => theme.typography.bodyFont};
  font-size: clamp(1rem, 1.5vw, 1.2rem);
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 620px;
  margin: 0 auto;
`

export const ContactSection = styled.section`
  padding: ${({ theme }) => theme.spacing.sectionStandard} 0;
  background: ${({ theme }) => theme.colors.background};
`

export const ContactContainer = styled.div`
  max-width: ${({ theme }) => theme.layout.containerMaxWidth};
  margin: 0 auto;
  padding: 0 clamp(1.25rem, 4vw, 2rem);
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: ${({ theme }) => theme.spacing.xxl};
  align-items: start;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

export const FormCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.xl};
  box-shadow: ${({ theme }) => theme.shadows.soft};
  padding: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.lg};
  }
`

export const FormEyebrow = styled.p`
  font-family: ${({ theme }) => theme.typography.uiFont};
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primaryHover};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`

export const FormTitle = styled.h2`
  font-family: ${({ theme }) => theme.typography.headingFont};
  font-size: clamp(1.75rem, 3vw, 2.25rem);
  font-weight: 400;
  line-height: ${({ theme }) => theme.typography.headingLineHeight};
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`

export const FormIntro = styled.p`
  font-family: ${({ theme }) => theme.typography.bodyFont};
  font-size: 0.95rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`

export const Form = styled.form`
  display: grid;
  gap: ${({ theme }) => theme.spacing.lg};
`

export const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`

export const Field = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.xs};
`

export const FieldLabel = styled.label`
  font-family: ${({ theme }) => theme.typography.uiFont};
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textSecondary};
`

export const FieldInput = styled.input`
  width: 100%;
  min-height: ${({ theme }) => theme.controls.tapTarget};
  padding: 0.75rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-family: ${({ theme }) => theme.typography.uiFont};
  font-size: 0.95rem;
  transition: border-color ${({ theme }) => theme.transitions.fast},
    box-shadow ${({ theme }) => theme.transitions.fast};

  &::placeholder {
    color: ${({ theme }) => theme.colors.textSecondary};
    opacity: 0.7;
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.focus};
    box-shadow: ${({ theme }) => theme.shadows.focus};
  }
`

export const FieldSelect = styled.select`
  width: 100%;
  min-height: ${({ theme }) => theme.controls.tapTarget};
  padding: 0.75rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-family: ${({ theme }) => theme.typography.uiFont};
  font-size: 0.95rem;
  transition: border-color ${({ theme }) => theme.transitions.fast},
    box-shadow ${({ theme }) => theme.transitions.fast};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.focus};
    box-shadow: ${({ theme }) => theme.shadows.focus};
  }
`

export const FieldTextarea = styled.textarea`
  width: 100%;
  min-height: 9rem;
  padding: 0.75rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-family: ${({ theme }) => theme.typography.uiFont};
  font-size: 0.95rem;
  line-height: 1.6;
  resize: vertical;
  transition: border-color ${({ theme }) => theme.transitions.fast},
    box-shadow ${({ theme }) => theme.transitions.fast};

  &::placeholder {
    color: ${({ theme }) => theme.colors.textSecondary};
    opacity: 0.7;
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.focus};
    box-shadow: ${({ theme }) => theme.shadows.focus};
  }
`

export const FormNote = styled.p`
  font-family: ${({ theme }) => theme.typography.uiFont};
  font-size: 0.75rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.textSecondary};
`

export const SuccessPanel = styled(motion.div)`
  display: grid;
  justify-items: center;
  text-align: center;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.xxl} ${({ theme }) => theme.spacing.lg};
`

export const SuccessIcon = styled.div`
  display: grid;
  place-items: center;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.blushSoft};
  color: ${({ theme }) => theme.colors.primaryHover};
  font-size: 1.5rem;
`

export const SuccessTitle = styled.h3`
  font-family: ${({ theme }) => theme.typography.headingFont};
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 400;
  line-height: ${({ theme }) => theme.typography.headingLineHeight};
  color: ${({ theme }) => theme.colors.textPrimary};
`

export const SuccessText = styled.p`
  font-family: ${({ theme }) => theme.typography.bodyFont};
  font-size: 0.95rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 32rem;
`

export const InfoPanel = styled(motion.div)`
  background: ${({ theme }) => theme.colors.ivory};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.xl};
  padding: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.lg};
  }
`

export const InfoTitle = styled.h2`
  font-family: ${({ theme }) => theme.typography.headingFont};
  font-size: clamp(1.5rem, 2.5vw, 2rem);
  font-weight: 400;
  line-height: ${({ theme }) => theme.typography.headingLineHeight};
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`

export const InfoIntro = styled.p`
  font-family: ${({ theme }) => theme.typography.bodyFont};
  font-size: 0.95rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`

export const InfoList = styled.ul`
  list-style: none;
  margin: 0 0 ${({ theme }) => theme.spacing.xl};
  padding: 0;
  display: grid;
  gap: ${({ theme }) => theme.spacing.lg};
`

export const InfoItem = styled.li`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: ${({ theme }) => theme.spacing.md};
  align-items: start;
`

export const InfoIcon = styled.span`
  display: grid;
  place-items: center;
  width: 2.5rem;
  height: 2.5rem;
  flex: 0 0 auto;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.primaryHover};
`

export const InfoLabel = styled.p`
  font-family: ${({ theme }) => theme.typography.uiFont};
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 0.25rem;
`

export const InfoValue = styled.p`
  font-family: ${({ theme }) => theme.typography.bodyFont};
  font-size: 1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textPrimary};
`

export const InfoLink = styled.a`
  font-family: ${({ theme }) => theme.typography.bodyFont};
  font-size: 1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textPrimary};
  text-decoration: none;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -0.15rem;
    height: 1px;
    width: 100%;
    background: ${({ theme }) => theme.colors.gold};
    transform: scaleX(0.4);
    transform-origin: left;
    transition: transform ${({ theme }) => theme.transitions.standard};
  }

  &:hover::after {
    transform: scaleX(1);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.focus};
    outline-offset: 4px;
  }
`

export const SocialRow = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  padding-top: ${({ theme }) => theme.spacing.lg};
`

export const SocialLink = styled.a`
  font-family: ${({ theme }) => theme.typography.uiFont};
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  transition: color ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.primaryHover};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.focus};
    outline-offset: 4px;
  }
`
