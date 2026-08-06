import styled from 'styled-components'

export const SidebarShell = styled.aside`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
  width: ${({ theme }) => theme.layout.adminSidebarWidth};
  min-height: 100vh;
  padding: ${({ theme }) => theme.spacing.xl};
  border-right: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 100%;
    min-height: auto;
    padding: ${({ theme }) => theme.spacing.md};
    border-right: 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }
`

export const SidebarBrand = styled.span`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-family: ${({ theme }) => theme.typography.headingFont};
  font-size: 1.25rem;
`

export const SidebarNav = styled.nav`
  display: grid;
  gap: ${({ theme }) => theme.spacing.xs};
`

export const SidebarLink = styled.span`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  min-height: 2.75rem;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.radii.md};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.875rem;
  font-weight: 700;
  transition: ${({ theme }) => theme.transitions.fast};

  a:hover &,
  a.active & {
    background: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.primaryHover};
  }
`
