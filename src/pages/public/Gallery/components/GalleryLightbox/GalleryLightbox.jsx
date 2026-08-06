import { AnimatePresence } from 'framer-motion'
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi'

import * as S from './GalleryLightbox.styles.js'

function GalleryLightbox({ isOpen, currentItem, currentIndex, totalItems, onClose, onNavigate }) {
  if (!isOpen) return null

  return (
    <AnimatePresence>
      <S.LightboxOverlay
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
      >
        <S.LightboxContent onClick={(e) => e.stopPropagation()}>
          <S.LightboxClose onClick={onClose} aria-label="Close lightbox">
            <FiX size={24} />
          </S.LightboxClose>

          <S.LightboxNav
            $direction="prev"
            onClick={() => onNavigate('prev')}
            aria-label="Previous image"
          >
            <FiChevronLeft size={28} />
          </S.LightboxNav>

          <S.LightboxNav
            $direction="next"
            onClick={() => onNavigate('next')}
            aria-label="Next image"
          >
            <FiChevronRight size={28} />
          </S.LightboxNav>

          <AnimatePresence mode="wait">
            <S.LightboxImage
              key={currentItem?.id}
              src={currentItem?.src}
              alt={currentItem?.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            />
          </AnimatePresence>

          <S.LightboxCounter>
            {currentIndex + 1} / {totalItems}
          </S.LightboxCounter>

          <S.LightboxCaption
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            key={currentItem?.id}
          >
            <S.LightboxCaptionTitle>
              {currentItem?.title}
            </S.LightboxCaptionTitle>
            <S.LightboxCaptionSubtitle>
              {currentItem?.subtitle}
            </S.LightboxCaptionSubtitle>
          </S.LightboxCaption>
        </S.LightboxContent>
      </S.LightboxOverlay>
    </AnimatePresence>
  )
}

export default GalleryLightbox
