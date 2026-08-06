import styled from 'styled-components'
import { motion } from 'framer-motion'

export const GalleryItem = styled(motion.div)`
  position: relative;
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  background: ${({ theme }) => theme.colors.surface};
  
  ${(props) => props.$size === 'large' && `
    grid-column: span 8;
    grid-row: span 2;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
      grid-column: span 8;
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      grid-column: span 1;
    }
  `}
  
  ${(props) => props.$size === 'medium' && `
    grid-column: span 4;
    grid-row: span 1;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
      grid-column: span 4;
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      grid-column: span 1;
    }
  `}
  
  ${(props) => props.$size === 'small' && `
    grid-column: span 4;
    grid-row: span 1;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
      grid-column: span 4;
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      grid-column: span 1;
    }
  `}
  
  ${(props) => props.$size === 'portrait' && `
    grid-column: span 4;
    grid-row: span 2;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
      grid-column: span 4;
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      grid-column: span 1;
    }
  `}
  
  ${(props) => props.$size === 'wide' && `
    grid-column: span 6;
    grid-row: span 1;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
      grid-column: span 8;
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      grid-column: span 1;
    }
  `}
`

export const GalleryImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 280px;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radii.lg};
`

export const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform ${({ theme }) => theme.transitions.slow};
  
  ${GalleryItem}:hover & {
    transform: scale(1.05);
  }
`

export const GalleryOverlay = styled(motion.div)`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    transparent 0%,
    rgba(46, 46, 46, 0.7) 100%
  );
  opacity: 0;
  transition: opacity ${({ theme }) => theme.transitions.standard};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: ${({ theme }) => theme.spacing.lg};
  
  ${GalleryItem}:hover & {
    opacity: 1;
  }
`

export const GalleryCaption = styled.div`
  color: white;
`

export const GalleryCaptionTitle = styled.h3`
  font-family: ${({ theme }) => theme.typography.headingFont};
  font-size: 1.25rem;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`

export const GalleryCaptionSubtitle = styled.p`
  font-family: ${({ theme }) => theme.typography.bodyFont};
  font-size: 0.875rem;
  opacity: 0.9;
`

export const GalleryNumber = styled.span`
  position: absolute;
  top: ${({ theme }) => theme.spacing.md};
  left: ${({ theme }) => theme.spacing.md};
  font-family: ${({ theme }) => theme.typography.bodyFont};
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  color: white;
  background: rgba(46, 46, 46, 0.6);
  padding: ${({ theme }) => theme.spacing.xxs} ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.radii.sm};
  z-index: 1;
`
