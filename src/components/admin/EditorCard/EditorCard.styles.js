import styled from 'styled-components'

export const EditorCardShell = styled.section`
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  background: ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) => theme.shadows.card};
`

export const EditorCardHeader = styled.button`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: ${({ theme }) => theme.spacing.md};
  align-items: center;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.lg};
  border: 0;
  background: transparent;
  color: inherit;
  text-align: left;
  cursor: pointer;
  transition: background ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: rgba(165, 137, 116, 0.07);

    h3 {
      color: ${({ theme }) => theme.colors.primaryHover};
    }

    .chevron {
      border-color: ${({ theme }) => theme.colors.taupe};
      color: ${({ theme }) => theme.colors.primaryHover};
    }
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.focus};
    outline-offset: -2px;
  }

  &[aria-expanded='true'] .chevron {
    transform: rotate(180deg);
  }
`

export const EditorCardHeading = styled.div`
  display: grid;
  gap: 0.25rem;
  min-width: 0;
`

export const EditorCardTitle = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-family: ${({ theme }) => theme.typography.headingFont};
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.2;
  transition: color ${({ theme }) => theme.transitions.fast};
`

export const EditorCardDescription = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.82rem;
  line-height: 1.6;
`

export const EditorCardMeta = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};

  .chevron {
    display: grid;
    place-items: center;
    width: 2rem;
    height: 2rem;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.textSecondary};
    transition: transform ${({ theme }) => theme.transitions.fast},
      border-color ${({ theme }) => theme.transitions.fast},
      color ${({ theme }) => theme.transitions.fast};
  }
`

export const EditorCardCount = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 1.75rem;
  height: 1.75rem;
  padding: 0 ${({ theme }) => theme.spacing.xs};
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-family: ${({ theme }) => theme.typography.uiFont};
  font-size: 0.72rem;
  font-weight: 700;
`

export const EditorCardBody = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => theme.spacing.lg};

  &[hidden] {
    display: none;
  }
`

export const EditorCardActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.xs};
`