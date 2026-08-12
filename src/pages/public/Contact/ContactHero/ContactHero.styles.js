import { motion } from 'framer-motion'
import styled from 'styled-components'

export const HeroRoot = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  padding-block: clamp(7rem, 14vh, 9rem) clamp(4rem, 9vh, 6rem);
  background: linear-gradient(
    165deg,
    ${({ theme }) => theme.colors.ivory} 0%,
    ${({ theme }) => theme.colors.background} 78%
  );
  margin-top: calc(-1 * ${({ theme }) => theme.layout.headerHeight});
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-top: calc(-1 * ${({ theme }) => theme.layout.mobileHeaderHeight});
  }
`

export const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr);
  gap: clamp(2.5rem, 6vw, 5rem);
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.xl};
  }
`

export const HeroCopy = styled(motion.div)`
  position: relative;
  z-index: 1;
`

export const HeroEyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.primaryHover};
  font-family: ${({ theme }) => theme.typography.uiFont};
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin-bottom: ${({ theme }) => theme.spacing.md};

  &::before {
    content: '';
    width: 2.5rem;
    height: 1px;
    background: ${({ theme }) => theme.colors.gold};
  }
`

export const HeroTitle = styled.h1`
  margin: 0 0 ${({ theme }) => theme.spacing.lg};
  overflow: hidden;
  padding-bottom: 0.1em;
  margin-bottom: calc(${({ theme }) => theme.spacing.lg} - 0.1em);
  color: ${({ theme }) => theme.colors.textPrimary};
  font-family: ${({ theme }) => theme.typography.headingFont};
  font-size: clamp(2.5rem, 6vw, 4.25rem);
  font-weight: 400;
  line-height: 1.05;
  letter-spacing: -0.03em;
`

export const HeroDescription = styled.p`
  margin: 0;
  max-width: 46ch;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: clamp(1rem, 1.5vw, 1.15rem);
  line-height: 1.8;
`

export const HeroNote = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.lg};

  span {
    display: inline-flex;
    width: 0.5rem;
    height: 0.5rem;
    margin-top: 0.55rem;
    flex: 0 0 auto;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.gold};
  }

  p {
    color: ${({ theme }) => theme.colors.textSecondary};
    font-family: ${({ theme }) => theme.typography.uiFont};
    font-size: 0.78rem;
    line-height: 1.7;
    letter-spacing: 0.01em;
  }
`

export const HeroMedia = styled(motion.figure)`
  position: relative;
  margin: 0;
  aspect-ratio: 4 / 5;
  border-radius: ${({ theme }) => theme.radii['2xl']};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.imageCard};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 30%;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border: 1px solid rgba(245, 240, 232, 0.55);
    border-radius: inherit;
    pointer-events: none;
  }

  .hero-frame {
    position: absolute;
    z-index: 1;
    right: -0.75rem;
    bottom: -0.75rem;
    width: 2.5rem;
    height: 2.5rem;
    border-right: 2px solid ${({ theme }) => theme.colors.gold};
    border-bottom: 2px solid ${({ theme }) => theme.colors.gold};
    border-bottom-right-radius: ${({ theme }) => theme.radii.lg};
    pointer-events: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    aspect-ratio: 4 / 3;
    max-height: 26rem;
  }
`