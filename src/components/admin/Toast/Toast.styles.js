import styled from 'styled-components'
import { motion } from 'framer-motion'

export const ToastShell = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  max-width: 24rem;
  padding: 0.85rem 1.1rem;
  border: 1px solid
    ${({ theme, $tone }) =>
      $tone === 'success' ? theme.colors.success : theme.colors.danger};
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) => theme.shadows.soft};
  color: ${({ theme, $tone }) =>
    $tone === 'success' ? theme.colors.success : theme.colors.danger};
  font-family: ${({ theme }) => theme.typography.uiFont};
  font-size: 0.8rem;
  font-weight: 700;
`