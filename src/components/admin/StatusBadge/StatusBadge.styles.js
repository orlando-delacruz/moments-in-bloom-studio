import styled from 'styled-components'

const statusStyles = {
  new: `
    background: rgba(200, 154, 94, 0.14);
    color: #8a6626;
  `,
  contacted: `
    background: rgba(165, 137, 116, 0.16);
    color: #6e5745;
  `,
  responded: `
    background: rgba(63, 125, 84, 0.14);
    color: ${({ theme }) => theme.colors.success};
  `,
  archived: `
    background: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.textSecondary};
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

  ${({ $status }) => statusStyles[$status] ?? statusStyles.archived}
`