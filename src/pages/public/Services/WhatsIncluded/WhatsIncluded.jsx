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
        <IncludedGrid>
          {content.items.map((item, index) => {
            const IconComponent = iconMap[item.iconName] || FiAward

            return (
              <IncludedCard
                key={item.id || index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <IconContainer>
                  <IconComponent aria-hidden="true" />
                </IconContainer>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </IncludedCard>
            )
          })}
        </IncludedGrid>
      </Container>
    </Section>
  )
}

export default WhatsIncluded
