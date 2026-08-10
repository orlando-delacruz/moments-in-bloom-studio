import styled from 'styled-components'
import { motion } from 'framer-motion'
import { pageShellStyles } from '../../pageStyles.js'

export const FAQsPage = styled.div`
  ${pageShellStyles}
`

export const FaqHero = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 62vh;
  padding: clamp(7rem, 14vh, 9rem) clamp(1.5rem, 5vw, 2.5rem) clamp(3.5rem, 8vh, 5rem);
  background: ${({ theme }) => theme.colors.ivory};
  margin-top: calc(-1 * ${({ theme }) => theme.layout.headerHeight});

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-top: calc(-1 * ${({ theme }) => theme.layout.mobileHeaderHeight});
  }
`

export const FaqHeroContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 900px;
  text-align: center;
`

export const FaqHeroEyebrow = styled.p`
  font-family: ${({ theme }) => theme.typography.uiFont};
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primaryHover};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`

export const FaqHeroTitle = styled.h1`
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

export const FaqHeroDescription = styled.p`
  font-family: ${({ theme }) => theme.typography.bodyFont};
  font-size: clamp(1rem, 1.5vw, 1.2rem);
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 620px;
  margin: 0 auto;
`

export const FaqSection = styled.section`
  padding: ${({ theme }) => theme.spacing.sectionStandard} 0;
  background: ${({ theme }) => theme.colors.background};
`

export const FaqContainer = styled.div`
  max-width: ${({ theme }) => theme.layout.contentMaxWidth};
  margin: 0 auto;
  padding: 0 clamp(1.25rem, 4vw, 2rem);
`

export const FaqList = styled(motion.div)`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`

export const FaqItem = styled(motion.div)`
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`

export const FaqTrigger = styled.button`
  display: flex;
  width: 100%;
  min-height: ${({ theme }) => theme.controls.tapTarget};
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => theme.spacing.lg} 0;
  border: 0;
  background: transparent;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-family: ${({ theme }) => theme.typography.headingFont};
  font-size: clamp(1.1rem, 2vw, 1.4rem);
  font-weight: 500;
  letter-spacing: -0.02em;
  line-height: 1.25;
  text-align: left;
  cursor: pointer;
  transition: color ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.primaryHover};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.focus};
    outline-offset: 4px;
  }
`

export const FaqIcon = styled(motion.span)`
  display: inline-grid;
  width: 2rem;
  height: 2rem;
  flex: 0 0 auto;
  place-items: center;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.primaryHover};
  font-size: 1.3rem;
  font-weight: 400;
  line-height: 1;
`

export const FaqPanel = styled(motion.div)`
  overflow: hidden;
`

export const FaqAnswer = styled.p`
  max-width: 42rem;
  padding: 0 3rem ${({ theme }) => theme.spacing.lg} 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.95rem;
  line-height: 1.8;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding-right: 0;
  }
`

export const FaqContactSection = styled.section`
  padding: ${({ theme }) => theme.spacing.sectionStandard} 0;
  background: ${({ theme }) => theme.colors.beige};
`

export const FaqContactContent = styled.div`
  max-width: ${({ theme }) => theme.layout.contentMaxWidth};
  margin: 0 auto;
  padding: 0 clamp(1.25rem, 4vw, 2rem);
  text-align: center;
`

export const FaqContactEyebrow = styled.p`
  font-family: ${({ theme }) => theme.typography.uiFont};
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primaryHover};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`

export const FaqContactTitle = styled.h2`
  font-family: ${({ theme }) => theme.typography.headingFont};
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 400;
  line-height: ${({ theme }) => theme.typography.headingLineHeight};
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`

export const FaqContactText = styled.p`
  font-family: ${({ theme }) => theme.typography.bodyFont};
  font-size: 1rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 560px;
  margin: 0 auto ${({ theme }) => theme.spacing.xl};
`
