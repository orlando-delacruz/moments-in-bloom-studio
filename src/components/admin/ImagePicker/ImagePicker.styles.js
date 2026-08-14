import styled from 'styled-components'

export const ImagePickerGrid = styled.div`
  display: grid;
  grid-template-columns: 9rem 1fr;
  gap: ${({ theme }) => theme.spacing.lg};
  align-items: start;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`

export const PreviewFrame = styled.div`
  display: grid;
  place-items: center;
  width: 9rem;
  height: 9rem;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.textSecondary};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const ImageFields = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.md};
  min-width: 0;
`