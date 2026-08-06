import { motion } from 'framer-motion'
import styled from 'styled-components'

export const FeaturedContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(5rem, 9vw, 9rem);
`

export const ShowcaseRow = styled(motion.article)`
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(2.5rem, 5vw, 5.5rem);
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: ${({ $isReversed }) =>
      $isReversed ? '1fr 1.15fr' : '1.15fr 1fr'};
  }
`

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 3;
  border-radius: ${({ theme }) => theme.radii.xl};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.imageCard};
  order: 1;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    order: ${({ $isReversed }) => ($isReversed ? 2 : 1)};
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform ${({ theme }) => theme.transitions.slow};
  }

  &:hover img {
    transform: scale(1.05);
  }
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  order: 2;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    order: ${({ $isReversed }) => ($isReversed ? 1 : 2)};
  }
`

export const ServiceTag = styled.span`
  color: ${({ theme }) => theme.colors.primaryHover};
  font-size: 0.725rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`

export const ServiceTitle = styled.h3`
  margin: 0 0 ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-family: ${({ theme }) => theme.typography.headingFont};
  font-size: clamp(1.85rem, 3.5vw, 2.75rem);
  font-weight: 500;
  line-height: 1.1;
  letter-spacing: -0.03em;
`

export const ServiceDescription = styled.p`
  margin: 0 0 ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1.05rem;
  line-height: 1.75;
`

export const FeatureList = styled.ul`
  list-style: none;
  margin: 0 0 ${({ theme }) => theme.spacing.xl};
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`

export const FeatureItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 0.95rem;
  line-height: 1.5;

  svg {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.125rem;
    flex-shrink: 0;
    margin-top: 0.15rem;
  }
`

export const CtaWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`
