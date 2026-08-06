import styled from 'styled-components'
import Container from '../Container/index.js'

export const TopbarShell = styled.header`
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.background};
`

export const TopbarContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.md};
  min-height: 4.5rem;
`

export const TopbarTitle = styled.h1`
  margin: 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-family: ${({ theme }) => theme.typography.headingFont};
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 500;
  line-height: 1.15;
`

export const TopbarMeta = styled.span`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.8125rem;
`
