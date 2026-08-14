import styled from 'styled-components'
import { pageShellStyles } from '../../pageStyles.js'

export const EnquiriesPage = styled.div`
  ${pageShellStyles}
  display: grid;
  gap: ${({ theme }) => theme.spacing.xl};
`

export const Toolbar = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.md};
`

export const SearchWrap = styled.div`
  position: relative;
  width: 100%;
  max-width: 22rem;

  > svg {
    position: absolute;
    top: 50%;
    left: 0.85rem;
    transform: translateY(-50%);
    color: ${({ theme }) => theme.colors.textSecondary};
    pointer-events: none;
  }

  input {
    padding-left: 2.4rem;
  }
`

export const FilterBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.xs};
`

export const FilterButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  padding: 0.55rem 0.95rem;
  border: 1px solid ${({ theme, $active }) =>
    $active ? theme.colors.primary : theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ theme, $active }) =>
    $active ? theme.colors.primary : theme.colors.surface};
  color: ${({ theme, $active }) =>
    $active ? theme.colors.surface : theme.colors.textSecondary};
  font-family: ${({ theme }) => theme.typography.uiFont};
  font-size: 0.74rem;
  font-weight: 700;
  cursor: pointer;
  transition: color ${({ theme }) => theme.transitions.fast},
    background ${({ theme }) => theme.transitions.fast},
    border-color ${({ theme }) => theme.transitions.fast};

  span {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 1.25rem;
    height: 1.25rem;
    padding: 0 0.3rem;
    border-radius: ${({ theme }) => theme.radii.pill};
    background: ${({ theme, $active }) =>
      $active ? 'rgba(255, 255, 255, 0.22)' : theme.colors.secondary};
    font-size: 0.68rem;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.taupe};
  }
`

export const LoadError = styled.p`
  margin: 0;
  padding: 0.85rem 1rem;
  border: 1px solid rgba(201, 74, 70, 0.4);
  border-radius: ${({ theme }) => theme.radii.md};
  background: rgba(201, 74, 70, 0.07);
  color: ${({ theme }) => theme.colors.danger};
  font-size: 0.85rem;
  line-height: 1.6;
`

export const DetailGrid = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  align-items: start;
`

export const DetailLabel = styled.span`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-family: ${({ theme }) => theme.typography.uiFont};
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`

export const DetailValue = styled.span`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 0.88rem;
  line-height: 1.6;
  overflow-wrap: anywhere;
`