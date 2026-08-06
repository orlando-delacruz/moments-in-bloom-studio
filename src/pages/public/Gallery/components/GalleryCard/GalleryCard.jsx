import { motion } from 'framer-motion'
import { GalleryItem, GalleryImageWrapper, GalleryImage, GalleryOverlay, GalleryCaption, GalleryCaptionTitle, GalleryCaptionSubtitle, GalleryNumber } from './GalleryCard.styles.js'

function GalleryCard({ item, index, onClick }) {
  return (
    <GalleryItem
      $size={item.size}
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -4 }}
    >
      <GalleryImageWrapper>
        <GalleryImage
          src={item.src}
          alt={item.title}
          loading="lazy"
        />
        <GalleryOverlay
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          <GalleryNumber>{String(index + 1).padStart(2, '0')}</GalleryNumber>
          <GalleryCaption>
            <GalleryCaptionTitle>{item.title}</GalleryCaptionTitle>
            <GalleryCaptionSubtitle>{item.subtitle}</GalleryCaptionSubtitle>
          </GalleryCaption>
        </GalleryOverlay>
      </GalleryImageWrapper>
      <button
        onClick={onClick}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          zIndex: 2,
        }}
        aria-label={`View ${item.title}`}
      />
    </GalleryItem>
  )
}

export default GalleryCard
