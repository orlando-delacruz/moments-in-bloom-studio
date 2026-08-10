import { motion } from 'framer-motion'
import styled from 'styled-components'
import PageContainer from '../../../../components/PageContainer/index.js'

export const ProcessRoot = styled.section`
  padding-block: ${({ theme }) => theme.spacing.sectionStandard};
  background: ${({ theme }) => theme.colors.beige};
`

export const ProcessContainer = styled(PageContainer)``

export const ProcessHeader = styled.div`
  display: grid;
  justify-items: center;
  max-width: 48rem;
  margin: 0 auto clamp(4rem, 9vw, 7rem);
  text-align: center;
`

export const ProcessEyebrow = styled.span`
  color: ${({ theme }) => theme.colors.primaryHover};
  font-family: ${({ theme }) => theme.typography.uiFont};
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
`

export const ProcessTitle = styled.h2`
  margin-top: ${({ theme }) => theme.spacing.md};
  overflow: hidden;
  padding-bottom: 0.1em;
  margin-bottom: -0.1em;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-family: ${({ theme }) => theme.typography.headingFont};
  font-size: clamp(2.75rem, 7vw, 6rem);
  font-weight: 500;
  letter-spacing: -0.07em;
  line-height: 0.9;
`

export const ProcessIntro = styled.p`
  max-width: 32rem;
  margin-top: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.95rem;
  line-height: 1.8;
`

export const ProcessList = styled(motion.ol)`
  position: relative;
  display: grid;
  gap: ${({ theme }) => theme.spacing.xxl};
  margin: 0;
  padding: 0;
  list-style: none;

  &::before {
    position: absolute;
    top: 1rem;
    bottom: 1rem;
    left: 50%;
    width: 1px;
    background: rgba(26, 24, 23, 0.14);
    content: '';
    transform: translateX(-50%);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: ${({ theme }) => theme.spacing.xl};

    &::before {
      left: 1rem;
    }
  }
`

export const ProcessTrack = styled(motion.span)`
  position: absolute;
  z-index: 0;
  top: 1rem;
  bottom: 1rem;
  left: 50%;
  width: 1px;
  background: ${({ theme }) => theme.colors.taupe};
  transform-origin: top;
  pointer-events: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    left: 1rem;
  }
`

export const ProcessItem = styled(motion.li)`
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1fr) 5rem minmax(0, 1fr);
  align-items: center;
  min-height: 7rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 2rem minmax(0, 1fr);
    align-items: start;
    min-height: 0;
  }
`

export const ProcessCopy = styled.div`
  grid-column: ${({ $side }) => ($side === 'left' ? '1' : '3')};
  display: grid;
  gap: ${({ theme }) => theme.spacing.xs};
  padding: ${({ theme }) => theme.spacing.md};
  text-align: ${({ $side }) => ($side === 'left' ? 'right' : 'left')};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-column: 2;
    padding: 0 0 ${({ theme }) => theme.spacing.md};
    text-align: left;
  }
`

export const ProcessStep = styled(motion.span)`
  grid-column: 2;
  grid-row: 1;
  z-index: 1;
  display: inline-grid;
  width: 2rem;
  height: 2rem;
  place-items: center;
  margin-inline: auto;
  border: 1px solid ${({ theme }) => theme.colors.background};
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.surface};
  font-size: 0.6875rem;
  font-weight: 700;
  transition: transform ${({ theme }) => theme.transitions.fast},
    box-shadow ${({ theme }) => theme.transitions.fast};

  ${ProcessItem}:hover & {
    transform: scale(1.15);
    box-shadow: 0 0 0 4px rgba(165, 137, 116, 0.25);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-column: 1;
    margin: 0;
  }
`

export const ProcessLabel = styled.span`
  color: ${({ theme }) => theme.colors.primaryHover};
  font-family: ${({ theme }) => theme.typography.uiFont};
  font-size: 0.6875rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
`

export const ProcessStepTitle = styled.h3`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-family: ${({ theme }) => theme.typography.headingFont};
  font-size: clamp(1.8rem, 3vw, 2.6rem);
  font-weight: 500;
  letter-spacing: -0.04em;
  line-height: 1;
`

export const ProcessDescription = styled.p`
  max-width: 24rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.875rem;
  line-height: 1.75;
`
