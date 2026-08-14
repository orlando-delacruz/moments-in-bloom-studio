import styled from 'styled-components'
import { pageShellStyles } from '../../pageStyles.js'

export const GalleryCMSPage = styled.div`
  ${pageShellStyles}
  display: grid;
  gap: ${({ theme }) => theme.spacing.xl};
`

export const Thumb = styled.img`
  display: block;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: ${({ theme }) => theme.radii.sm};
  object-fit: cover;
  background: ${({ theme }) => theme.colors.secondary};
`

export const TableCellActions = styled.span`
  display: inline-flex;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing.xs};
`