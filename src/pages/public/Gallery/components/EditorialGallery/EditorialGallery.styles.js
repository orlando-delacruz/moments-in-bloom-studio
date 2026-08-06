import styled from 'styled-components'

export const GallerySection = styled.section`
  padding: ${({ theme }) => theme.spacing.sectionStandard} 0;
  background: ${({ theme }) => theme.colors.background};
`

export const GalleryContainer = styled.div`
  max-width: ${({ theme }) => theme.layout.containerMaxWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.xl};
`

export const EditorialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: ${({ theme }) => theme.spacing.lg};
  auto-flow: dense;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: repeat(8, 1fr);
    gap: ${({ theme }) => theme.spacing.md};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.md};
  }
`
