import { FiAward, FiFeather, FiHeart, FiStar } from 'react-icons/fi'
import Container from '../../../../components/Container/index.js'
import Section from '../../../../components/Section/index.js'
import { SECTION_TONES } from '../../../../constants/ui.js'
import {
  IconContainer,
  ValueCard,
  ValueDescription,
  ValuesGrid,
  ValueTitle,
} from './CoreValues.styles.js'

const iconMap = {
  FiStar: FiStar,
  FiAward: FiAward,
  FiFeather: FiFeather,
  FiHeart: FiHeart,
}

function CoreValues({ items, id }) {
  return (
    <Section
      id={id}
      subtitle="Our Principles"
      title="Values that guide every arrangement"
      description="The foundational standards behind our creative direction, floral selection, and client relationships."
      tone={SECTION_TONES.SURFACE}
    >
      <Container>
        <ValuesGrid>
          {items.map((item, index) => {
            const IconComponent = iconMap[item.iconName] || FiStar

            return (
              <ValueCard
                key={item.id || index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <IconContainer>
                  <IconComponent aria-hidden="true" />
                </IconContainer>
                <ValueTitle>{item.title}</ValueTitle>
                <ValueDescription>{item.description}</ValueDescription>
              </ValueCard>
            )
          })}
        </ValuesGrid>
      </Container>
    </Section>
  )
}

export default CoreValues
