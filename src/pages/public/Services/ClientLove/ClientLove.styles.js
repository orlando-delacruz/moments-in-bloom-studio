import { motion } from 'framer-motion'
import styled from 'styled-components'

export const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(2rem, 4vw, 3rem);

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(3, 1fr);
  }
`

export const TestimonialCard = styled(motion.article)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: clamp(2rem, 3.5vw, 2.75rem);
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.xl};
  box-shadow: ${({ theme }) => theme.shadows.card};
  transition: transform ${({ theme }) => theme.transitions.slow},
    box-shadow ${({ theme }) => theme.transitions.slow};

  &:hover {
    transform: translateY(-6px);
    box-shadow: ${({ theme }) => theme.shadows.soft};
  }

  &::before {
    content: '“';
    position: absolute;
    top: 1rem;
    right: 2rem;
    font-family: ${({ theme }) => theme.typography.headingFont};
    font-size: 5rem;
    line-height: 1;
    color: ${({ theme }) => theme.colors.primary};
    opacity: 0.12;
    pointer-events: none;
  }
`

export const CardTop = styled.div`
  display: flex;
  flex-direction: column;
`

export const RatingStars = styled.div`
  display: flex;
  gap: 0.25rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-size: 1rem;
`

export const QuoteText = styled.blockquote`
  margin: 0 0 ${({ theme }) => theme.spacing.lg};
  padding: 0;
  border: none;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-family: ${({ theme }) => theme.typography.headingFont};
  font-size: clamp(1.05rem, 1.8vw, 1.2rem);
  font-style: italic;
  line-height: 1.6;
`

export const AuthorFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-top: ${({ theme }) => theme.spacing.md};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`

export const AuthorAvatar = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  border: 1px solid ${({ theme }) => theme.colors.border};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const AuthorMeta = styled.div`
  display: flex;
  flex-direction: column;
`

export const AuthorName = styled.span`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: 600;
  font-size: 0.95rem;
`

export const EventTag = styled.span`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.7875rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-top: 0.15rem;
`
