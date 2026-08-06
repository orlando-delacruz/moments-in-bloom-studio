import { motion } from 'framer-motion'
import styled from 'styled-components'
import PageContainer from '../../../../components/PageContainer/index.js'

export const CTARoot = styled.section`
  position: relative;
  overflow: hidden;
  padding-block: ${({ theme }) => theme.spacing.sectionGenerous};
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  isolation: isolate;
`

export const CTAContainer = styled(PageContainer)`
  position: relative;
  z-index: 1;
  display: grid;
  justify-items: center;
  text-align: center;
`

export const CTAEyebrow = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
`

export const CTATitle = styled(motion.h2)`
  max-width: 10ch;
  margin-top: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.background};
  font-family: ${({ theme }) => theme.typography.headingFont};
  font-size: clamp(3rem, 9vw, 8.5rem);
  font-weight: 500;
  letter-spacing: -0.08em;
  line-height: 0.85;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: clamp(2.75rem, 15vw, 4.5rem);
    letter-spacing: -0.06em;
  }
`

export const CTADescription = styled.p`
  max-width: 32rem;
  margin-top: ${({ theme }) => theme.spacing.xl};
  color: rgba(255, 253, 251, 0.84);
  font-size: clamp(1rem, 1.7vw, 1.2rem);
  line-height: 1.75;
`

export const CTAActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.xxl};

  a:first-child {
    border-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.background};
  }

  a:first-child:hover:not(:disabled) {
    border-color: ${({ theme }) => theme.colors.background};
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.primaryHover};
  }

  a:last-child {
    color: ${({ theme }) => theme.colors.background};
  }

  a:last-child:hover:not(:disabled) {
    background: ${({ theme }) => theme.effects.ctaGhostHover};
    color: ${({ theme }) => theme.colors.background};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: grid;
    width: min(100%, 22rem);

    a {
      width: 100%;
    }
  }
`

export const CTAOrb = styled(motion.span)`
  position: absolute;
  z-index: -1;
  top: 12%;
  right: 9%;
  width: clamp(8rem, 18vw, 17rem);
  aspect-ratio: 1;
  border: 1px solid rgba(255, 253, 251, 0.34);
  border-radius: 50%;

  &::after {
    position: absolute;
    inset: 18%;
    border: 1px solid rgba(253, 230, 240, 0.42);
    border-radius: 50%;
    content: '';
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    top: 8%;
    right: -3rem;
  }
`

export const CTABottomLine = styled.span`
  position: absolute;
  bottom: 0;
  left: 50%;
  width: min(76rem, 90%);
  height: 1px;
  background: rgba(255, 253, 251, 0.32);
  content: '';
  transform: translateX(-50%);
`
