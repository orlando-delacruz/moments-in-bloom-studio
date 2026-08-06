import { FiArrowUpRight, FiStar } from 'react-icons/fi'
import { NavLink } from 'react-router-dom'
import Button from '../../../../components/Button/index.js'
import { BUTTON_VARIANTS } from '../../../../constants/ui.js'
import {
  GalleryAction,
  GalleryCollage,
  GalleryContainer,
  GalleryCopy,
  GalleryEyebrow,
  GalleryFeature,
  GalleryHeader,
  GalleryImage,
  GalleryRoot,
  GallerySide,
  GallerySpark,
  GalleryTitle,
} from './GalleryPreview.styles.js'

function GalleryPreview({ items, id = 'home-gallery-preview' }) {
  const [feature, firstSide, secondSide] = items

  return (
    <GalleryRoot id={id}>
      <GalleryContainer>
        <GalleryHeader>
          <div>
            <GalleryEyebrow>A glimpse of the good stuff</GalleryEyebrow>
            <GalleryTitle>Made for the memory.</GalleryTitle>
          </div>
          <GalleryCopy>
            A little floral, a little playful, always intentional. Explore a selection of celebrations styled with our signature mix of softness and surprise.
          </GalleryCopy>
        </GalleryHeader>
        <GalleryCollage>
          <GalleryFeature
            to="/gallery"
            aria-label="View featured floral installation in the gallery"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <GalleryImage src={feature.image.src} alt={feature.image.alt} loading="lazy" />
          </GalleryFeature>
          <GallerySide
            $overlap
            to="/gallery"
            aria-label="View couple walking through petals in the gallery"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, delay: 0.12 }}
          >
            <GalleryImage src={firstSide.image.src} alt={firstSide.image.alt} loading="lazy" />
          </GallerySide>
          <GallerySide
            to="/gallery"
            aria-label="View place card detail in the gallery"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, delay: 0.22 }}
          >
            <GalleryImage src={secondSide.image.src} alt={secondSide.image.alt} loading="lazy" />
          </GallerySide>
          <GallerySpark
            aria-hidden="true"
            animate={{ rotate: [12, 22, 12], scale: [1, 1.06, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <FiStar aria-hidden="true" color="currentColor" size={19} />
          </GallerySpark>
        </GalleryCollage>
        <span className="sr-only">
          {items.map((item) => item.image.credit).join('. ')}
        </span>
        <GalleryAction>
          <Button as={NavLink} to="/gallery" variant={BUTTON_VARIANTS.OUTLINE}>
            View Gallery
            <FiArrowUpRight aria-hidden="true" color="currentColor" size={16} />
          </Button>
        </GalleryAction>
      </GalleryContainer>
    </GalleryRoot>
  )
}

export default GalleryPreview
