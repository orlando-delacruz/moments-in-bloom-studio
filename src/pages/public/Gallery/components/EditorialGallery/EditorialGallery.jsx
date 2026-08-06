import { motion } from 'framer-motion'

import GalleryCard from '../GalleryCard/GalleryCard.jsx'

import * as S from './EditorialGallery.styles.js'

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

function EditorialGallery({ items, onImageClick }) {
  return (
    <S.GallerySection>
      <S.GalleryContainer>
        <motion.div
          layout
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          key={items.length}
        >
          <S.EditorialGrid>
            {items.map((item, index) => (
              <GalleryCard
                key={item.id}
                item={item}
                index={index}
                onClick={() => onImageClick(index)}
              />
            ))}
          </S.EditorialGrid>
        </motion.div>
      </S.GalleryContainer>
    </S.GallerySection>
  )
}

export default EditorialGallery
