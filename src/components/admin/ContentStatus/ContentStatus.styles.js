import styled from 'styled-components'

const toneStyles = {
  success: `
    background: rgba(63, 125, 84, 0.14);
    color: ${({ theme }) => theme.colors.success};
  `,
  muted: `
    background: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.textSecondary};
  `,
  neutral: `
    background: rgba(165, 137, 116, 0.16);
    color: ${({ theme }) => theme.colors.taupeText};
  `,
  gold: `
    background: rgba(200, 154, 94, 0.14);
    color: #8a6626;
  `,
  warning: `
    background: rgba(201, 138, 46, 0.14);
    color: ${({ theme }) => theme.colors.warning};
  `,
  danger: `
    background: rgba(201, 74, 70, 0.12);
    color: ${({ theme }) => theme.colors.danger};
  `,
}

export const StatusPill = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 0.3rem 0.7rem;
  border-radius: ${({ theme }) => theme.radii.pill};
  font-family: ${({ theme }) => theme.typography.uiFont};
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: capitalize;
  white-space: nowrap;

  ${({ $tone }) => toneStyles[$tone] ?? toneStyles.muted}
`