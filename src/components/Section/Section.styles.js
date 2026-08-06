import styled from 'styled-components'

const backgroundByTone = {
  default: 'background',
  soft: 'secondary',
  surface: 'surface',
}

export const SectionRoot = styled.section`
  padding-block: ${({ theme }) => theme.spacing.section};
  background: ${({ $tone, theme }) =>
    theme.colors[backgroundByTone[$tone] || backgroundByTone.default]};
`

export const SectionHeader = styled.div`
  display: grid;
  width: min(100% - 2rem, ${({ theme }) => theme.layout.containerMaxWidth});
  gap: ${({ theme }) => theme.spacing.sm};
  max-width: ${({ theme }) => theme.layout.contentMaxWidth};
  margin-right: auto;
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
  margin-left: auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.tabletMin}) {
    width: min(100% - 4rem, ${({ theme }) => theme.layout.containerMaxWidth});
  }
`

export const SectionSubtitle = styled.span`
  display: block;
  color: ${({ theme }) => theme.colors.primaryHover};
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
`

export const SectionDescription = styled.p`
  max-width: 46rem;
  margin: ${({ theme }) => theme.spacing.xs} 0 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.95rem;
  line-height: 1.75;
`

export const SectionAction = styled.div`
  margin-top: ${({ theme }) => theme.spacing.md};
`
