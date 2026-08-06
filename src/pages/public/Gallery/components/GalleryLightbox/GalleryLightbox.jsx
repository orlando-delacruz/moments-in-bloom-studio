import { AnimatePresence } from 'framer-motion'
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import {
  LightboxOverlay,
  LightboxContent,
  LightboxImage,
  LightboxClose,
  LightboxNav,
  LightboxCounter,
  LightboxCaption,
  LightboxCaptionTitle,
  LightboxCaptionSubtitle,
} from './GalleryLightbox.styles.js'

function GalleryLightbox({ isOpen, currentItem, currentIndex, totalItems, onClose, onNavigate }) {
  if (!isOpen) return null

  return (
    <AnimatePresence>
      <LightboxOverlay
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
      >
        <LightboxContent onClick={(e) => e.stopPropagation()}>
          <LightboxClose onClick={onClose} aria-label="Close lightbox">
            <FiX size={24} />
          </LightboxClose>

          <LightboxNav
            $direction="prev"
            onClick={() => onNavigate('prev')}
            aria-label="Previous image"
          >
            <FiChevronLeft size={28} />
          </LightboxNav>

          <LightboxNav
            $direction="next"
            onClick={() => onNavigate('next')}
            aria-label="Next image"
          >
            <FiChevronRight size={28} />
          </LightboxNav>

          <AnimatePresence mode="wait">
            <LightboxImage
              key={currentItem?.id}
              src={currentItem?.src}
              alt={currentItem?.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            />
          </AnimatePresence>

          <LightboxCounter>
            {currentIndex + 1} / {totalItems}
          </LightboxCounter>

          <LightboxCaption
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            key={currentItem?.id}
          >
            <LightboxCaptionTitle>
              {currentItem?.title}
            </LightboxCaptionTitle>
            <LightboxCaptionSubtitle>
              {currentItem?.subtitle}
            </LightboxCaptionSubtitle>
          </LightboxCaption>
        </LightboxContent>
      </LightboxOverlay>
    </AnimatePresence>
  )
}

export default GalleryLightbox
