import styled from 'styled-components'
import { pageShellStyles } from '../../pageStyles.js'

export const ServicesCMSPage = styled.div`
  ${pageShellStyles}
  display: grid;
  gap: ${({ theme }) => theme.spacing.xl};
`

export const MiniEditorBlock = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.lg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ theme }) => theme.colors.background};

  > div:first-child > strong {
    color: ${({ theme }) => theme.colors.textPrimary};
    font-family: ${({ theme }) => theme.typography.uiFont};
    font-size: 0.7rem;
    letter-spacing: 0.16em;
    text-transform: uppercase;
  }

  > div:first-child > p {
    margin: 0.2rem 0 0;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 0.8rem;
  }
`