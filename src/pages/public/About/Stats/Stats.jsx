import Container from '../../../../components/Container/index.js'
import Section from '../../../../components/Section/index.js'
import { SECTION_TONES } from '../../../../constants/ui.js'
import {
  StatCard,
  StatDescription,
  StatLabel,
  StatsGrid,
  StatValue,
} from './Stats.styles.js'

function Stats({ content, id }) {
  const { subtitle, title, description, items } = content

  return (
    <Section
      id={id}
      subtitle={subtitle}
      title={title}
      description={description}
      tone={SECTION_TONES.SOFT}
    >
      <Container>
        <StatsGrid>
          {items.map((item, index) => (
            <StatCard
              key={item.label || index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <StatValue>{item.value}</StatValue>
              <StatLabel>{item.label}</StatLabel>
              <StatDescription>{item.description}</StatDescription>
            </StatCard>
          ))}
        </StatsGrid>
      </Container>
    </Section>
  )
}

export default Stats
