import { motion } from 'framer-motion'
import {
  FiAward,
  FiClock,
  FiCompass,
  FiFeather,
  FiHeart,
  FiLayers,
} from 'react-icons/fi'
import Container from '../../../../components/Container/index.js'
import Section from '../../../../components/Section/index.js'
import { SECTION_TONES } from '../../../../constants/ui.js'
import { rise, staggerContainer, VIEWPORT_DEFAULT } from '../../../../styles/animations.js'
import {
  CardDescription,
  CardTitle,
  IconContainer,
  IncludedCard,
  IncludedGrid,
} from './WhatsIncluded.styles.js'

const iconMap = {
  FiCompass,
  FiClock,
  FiFeather,
  FiAward,
  FiHeart,
  FiLayers,
}

function WhatsIncluded({ content, id }) {
  if (!content) return null

  return (
    <Section
      id={id}
      subtitle={content.subtitle}
      title={content.title}
      description={content.description}
      tone={SECTION_TONES.DEFAULT}
    >
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_DEFAULT}
        >
          <IncludedGrid>
            {content.items.map((item, index) => {
              const IconComponent = iconMap[item.iconName] || FiAward

              return (
                <IncludedCard key={item.id || index} variants={rise}>
                  <IconContainer>
                    <IconComponent aria-hidden="true" />
                  </IconContainer>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </IncludedCard>
              )
            })}
          </IncludedGrid>
        </motion.div>
      </Container>
    </Section>
  )
}

export default WhatsIncluded
