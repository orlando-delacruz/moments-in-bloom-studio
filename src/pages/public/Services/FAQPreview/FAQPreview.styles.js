import { motion } from 'framer-motion'
import styled from 'styled-components'

export const AccordionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  max-width: 52rem;
  margin-inline: auto;
`

export const FAQItem = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.xl};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.card};
  transition: border-color ${({ theme }) => theme.transitions.fast},
    box-shadow ${({ theme }) => theme.transitions.fast};

  ${({ $isOpen, theme }) =>
    $isOpen &&
    `
    border-color: rgba(198, 116, 149, 0.4);
    box-shadow: ${theme.shadows.soft};
  `}
`

export const FAQQuestionButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: clamp(1.25rem, 2.5vw, 1.75rem);
  background: transparent;
  border: none;
  cursor: pointer;
  text-align: left;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-family: ${({ theme }) => theme.typography.headingFont};
  font-size: clamp(1.1rem, 2vw, 1.3rem);
  font-weight: 500;
  line-height: 1.35;

  svg {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.25rem;
    flex-shrink: 0;
    transition: transform ${({ theme }) => theme.transitions.fast};
    transform: ${({ $isOpen }) => ($isOpen ? 'rotate(180deg)' : 'rotate(0)')};
  }
`

export const FAQAnswerPanel = styled(motion.div)`
  overflow: hidden;
`

export const FAQAnswerContent = styled.p`
  margin: 0;
  padding: 0 clamp(1.25rem, 2.5vw, 1.75rem) clamp(1.25rem, 2.5vw, 1.75rem);
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.975rem;
  line-height: 1.75;
`
