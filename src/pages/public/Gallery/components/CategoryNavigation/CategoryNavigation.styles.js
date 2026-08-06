import styled from 'styled-components'

export const CategoryNavSection = styled.section`
  padding: ${({ theme }) => theme.spacing.xl} 0;
  background: ${({ theme }) => theme.colors.surface};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`

export const CategoryNavContainer = styled.div`
  max-width: ${({ theme }) => theme.layout.containerMaxWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.xl};
`

export const CategoryNavLabel = styled.p`
  font-family: ${({ theme }) => theme.typography.bodyFont};
  font-size: 0.75rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  text-align: center;
`

export const CategoryNavList = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  justify-content: center;
  flex-wrap: wrap;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    overflow-x: auto;
    flex-wrap: nowrap;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    -ms-overflow-style: none;
    padding-bottom: ${({ theme }) => theme.spacing.sm};
    
    &::-webkit-scrollbar {
      display: none;
    }
  }
`

export const CategoryNavItem = styled.button`
  font-family: ${({ theme }) => theme.typography.bodyFont};
  font-size: 0.9rem;
  font-weight: 500;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.pill};
  color: ${({ theme }) => theme.colors.textSecondary};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.standard};
  white-space: nowrap;
  
  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
  }
  
  &[aria-selected="true"] {
    background: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
    color: white;
  }
  
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.focus};
    outline-offset: 2px;
  }
`
