import { motion } from 'framer-motion'
import styled from 'styled-components'

export const IncludedGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(1.5rem, 3vw, 2.5rem);

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: repeat(3, 1fr);
  }
`

export const IncludedCard = styled(motion.article)`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: clamp(2rem, 3.5vw, 2.75rem);
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.xl};
  box-shadow: ${({ theme }) => theme.shadows.card};
  transition: transform ${({ theme }) => theme.transitions.slow},
    box-shadow ${({ theme }) => theme.transitions.slow},
    border-color ${({ theme }) => theme.transitions.slow};

  &:hover {
    transform: translateY(-6px);
    border-color: rgba(198, 116, 149, 0.35);
    box-shadow: ${({ theme }) => theme.shadows.soft};
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 2rem;
    right: 2rem;
    height: 2px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      ${({ theme }) => theme.colors.primary} 50%,
      transparent 100%
    );
    opacity: 0.6;
  }
`

export const IconContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.primaryHover};
  font-size: 1.35rem;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  box-shadow: ${({ theme }) => theme.shadows.badge};
  transition: transform ${({ theme }) => theme.transitions.fast},
    background ${({ theme }) => theme.transitions.fast},
    color ${({ theme }) => theme.transitions.fast};

  ${IncludedCard}:hover & {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.surface};
    transform: scale(1.08);
  }
`

export const CardTitle = styled.h3`
  margin: 0 0 ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-family: ${({ theme }) => theme.typography.headingFont};
  font-size: clamp(1.25rem, 2vw, 1.45rem);
  font-weight: 500;
  line-height: 1.25;
  letter-spacing: -0.02em;
`

export const CardDescription = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.95rem;
  line-height: 1.7;
`
