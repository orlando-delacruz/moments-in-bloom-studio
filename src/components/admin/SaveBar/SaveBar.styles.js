import styled from 'styled-components'

export const SaveBarShell = styled.div`
  position: sticky;
  bottom: 0;
  z-index: ${({ theme }) => theme.layers.backToTop};
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.xxl};
  padding: 0.9rem ${({ theme }) => theme.spacing.lg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  background: ${({ theme }) => theme.surfaces.headerScrolled};
  box-shadow: ${({ theme }) => theme.shadows.header};
  backdrop-filter: blur(${({ theme }) => theme.effects.headerBlur});
`

export const SaveStatus = styled.span`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme, $dirty }) =>
    $dirty ? theme.colors.warning : theme.colors.textSecondary};
  font-family: ${({ theme }) => theme.typography.uiFont};
  font-size: 0.76rem;
  font-weight: 700;

  .status-dot {
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.warning};
  }
`

export const SaveActions = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-left: auto;
`