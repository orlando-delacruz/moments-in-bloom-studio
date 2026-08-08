import { useCallback, useState } from 'react'
import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'

import { useImageFallback } from '../../hooks/index.js'

import { GALLERY_FALLBACK_IMAGES } from '../../constants/galleryImages.js'

import StoryModal from '../StoryModal/StoryModal.jsx'

import * as S from './FeaturedStory.styles.js'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

function FeaturedStory({ content }) {
  const [activeStory, setActiveStory] = useState(null)

  const handleClose = useCallback(() => setActiveStory(null), [])

  return (
    <S.FeaturedStoriesSection>
      <S.StoriesContainer>
        <S.SectionHeader>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <S.SectionEyebrow>{content.eyebrow}</S.SectionEyebrow>
            <S.SectionTitle>{content.title}</S.SectionTitle>
          </motion.div>
        </S.SectionHeader>

        {content.stories.map((story, index) => (
          <StoryCard key={story.id} story={story} index={index} onOpen={setActiveStory} />
        ))}
      </S.StoriesContainer>

      <StoryModal story={activeStory} onClose={handleClose} />
    </S.FeaturedStoriesSection>
  )
}

function StoryCard({ story, index, onOpen }) {
  const { src, onError } = useImageFallback(story.image, GALLERY_FALLBACK_IMAGES.story)

  const handleOpen = useCallback(() => onOpen(story), [onOpen, story])

  return (
    <S.StoryCard
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      whileHover={{ y: -4 }}
    >
      <S.StoryImageWrapper>
        <S.StoryImage src={src} alt={story.title} loading="lazy" onError={onError} />
      </S.StoryImageWrapper>
      <S.StoryContent>
        <S.StoryTag>{story.tag}</S.StoryTag>
        <S.StoryTitle>{story.title}</S.StoryTitle>
        <S.StoryDescription>{story.description}</S.StoryDescription>
        <S.StoryLink type="button" onClick={handleOpen}>
          View Full Story
          <FiArrowRight aria-hidden="true" size={16} />
        </S.StoryLink>
      </S.StoryContent>
    </S.StoryCard>
  )
}

export default FeaturedStory
