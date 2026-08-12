import { motion } from 'framer-motion'
import styled from 'styled-components'

export const IntroRoot = styled.section`
  padding-block: ${({ theme }) => theme.spacing.sectionStandard} ${({ theme }) => theme.spacing.section};
  background: ${({ theme }) => theme.colors.background};
`

export const IntroContent = styled.div`
  max-width: ${({ theme }) => theme.layout.contentMaxWidth};
  margin-inline: auto;
  text-align: center;
`

export const IntroEyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.primaryHover};
  font-family: ${({ theme }) => theme.typography.uiFont};
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin-bottom: ${({ theme }) => theme.spacing.md};

  &::before,
  &::after {
    content: '';
    width: 1.5rem;
    height: 1px;
    background: ${({ theme }) => theme.colors.gold};
  }
`

export const IntroTitle = styled.h2`
  margin: 0 0 ${({ theme }) => theme.spacing.md};
  overflow: hidden;
  padding-bottom: 0.1em;
  margin-bottom: calc(${({ theme }) => theme.spacing.md} - 0.1em);
  color: ${({ theme }) => theme.colors.textPrimary};
  font-family: ${({ theme }) => theme.typography.headingFont};
  font-size: clamp(1.75rem, 3.5vw, 2.5rem);
  font-weight: 400;
  line-height: 1.12;
  letter-spacing: -0.02em;
`

export const IntroDescription = styled.p`
  margin: 0 auto;
  max-width: 52ch;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: clamp(0.98rem, 1.4vw, 1.08rem);
  line-height: 1.8;
`

export const IntroCardsWrap = styled.div`
  width: min(100% - 2rem, 56rem);
  margin-inline: auto;
`

export const IntroCards = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.sm};
  }
`

export const IntroCard = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.xs};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.radii.lg};
  background: ${({ theme }) => theme.colors.ivory};
  text-align: left;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.md};
  }
`

export const IntroCardNumber = styled.span`
  color: ${({ theme }) => theme.colors.gold};
  font-family: ${({ theme }) => theme.typography.uiFont};
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.16em;
`

export const IntroCardTitle = styled.h3`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-family: ${({ theme }) => theme.typography.headingFont};
  font-size: 1.2rem;
  font-weight: 400;
`

export const IntroCardDescription = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.9rem;
  line-height: 1.7;
`