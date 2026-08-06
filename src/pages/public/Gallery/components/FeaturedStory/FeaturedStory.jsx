import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'
import {
  FeaturedStoriesSection,
  StoriesContainer,
  SectionHeader,
  SectionEyebrow,
  SectionTitle,
  StoryCard,
  StoryImageWrapper,
  StoryImage,
  StoryContent,
  StoryTag,
  StoryTitle,
  StoryDescription,
  StoryLink,
} from './FeaturedStory.styles.js'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

function FeaturedStory({ content }) {
  return (
    <FeaturedStoriesSection>
      <StoriesContainer>
        <SectionHeader>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <SectionEyebrow>{content.eyebrow}</SectionEyebrow>
            <SectionTitle>{content.title}</SectionTitle>
          </motion.div>
        </SectionHeader>

        {content.stories.map((story, index) => (
          <StoryCard
            key={story.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: index * 0.15 }}
          >
            <StoryImageWrapper>
              <StoryImage src={story.image} alt={story.title} loading="lazy" />
            </StoryImageWrapper>
            <StoryContent>
              <StoryTag>{story.tag}</StoryTag>
              <StoryTitle>{story.title}</StoryTitle>
              <StoryDescription>{story.description}</StoryDescription>
              <StoryLink>
                View Full Story
                <FiArrowRight aria-hidden="true" size={16} />
              </StoryLink>
            </StoryContent>
          </StoryCard>
        ))}
      </StoriesContainer>
    </FeaturedStoriesSection>
  )
}

export default FeaturedStory
