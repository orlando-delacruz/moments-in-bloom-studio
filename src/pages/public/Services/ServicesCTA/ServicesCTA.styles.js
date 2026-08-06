import { motion } from 'framer-motion'
import styled from 'styled-components'

export const CTARoot = styled.section`
  position: relative;
  padding-block: clamp(5.5rem, 10vw, 8.5rem);
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.focus} 0%,
    ${({ theme }) => theme.colors.primaryHover} 100%
  );
  color: ${({ theme }) => theme.colors.surface};
  overflow: hidden;
  isolation: isolate;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -20%;
    width: 60vw;
    height: 60vw;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.12) 0%,
      rgba(255, 255, 255, 0) 70%
    );
    pointer-events: none;
    z-index: 1;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -50%;
    right: -20%;
    width: 60vw;
    height: 60vw;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      rgba(198, 116, 149, 0.25) 0%,
      rgba(0, 0, 0, 0) 70%
    );
    pointer-events: none;
    z-index: 1;
  }
`

export const CTAContent = styled(motion.div)`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 50rem;
  margin-inline: auto;
`

export const CTASubtitle = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 0.725rem;
  font-weight: 700;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`

export const CTATitle = styled.h2`
  margin: 0 0 ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.surface};
  font-family: ${({ theme }) => theme.typography.headingFont};
  font-size: clamp(2.25rem, 5.5vw, 3.75rem);
  font-weight: 500;
  letter-spacing: -0.04em;
  line-height: 1.05;
`

export const CTADescription = styled.p`
  margin: 0 0 ${({ theme }) => theme.spacing.xl};
  color: rgba(255, 255, 255, 0.92);
  font-size: clamp(1.05rem, 1.6vw, 1.25rem);
  line-height: 1.7;
  max-width: 44ch;
`

export const CTAActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.md};
`
