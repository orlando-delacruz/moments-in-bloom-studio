import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'

import * as S from './FeaturedStory.styles.js'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

function FeaturedStory({ content }) {
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
          <S.StoryCard
            key={story.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: index * 0.15 }}
          >
            <S.StoryImageWrapper>
              <S.StoryImage src={story.image} alt={story.title} loading="lazy" />
            </S.StoryImageWrapper>
            <S.StoryContent>
              <S.StoryTag>{story.tag}</S.StoryTag>
              <S.StoryTitle>{story.title}</S.StoryTitle>
              <S.StoryDescription>{story.description}</S.StoryDescription>
              <S.StoryLink>
                View Full Story
                <FiArrowRight aria-hidden="true" size={16} />
              </S.StoryLink>
            </S.StoryContent>
          </S.StoryCard>
        ))}
      </S.StoriesContainer>
    </S.FeaturedStoriesSection>
  )
}

export default FeaturedStory
