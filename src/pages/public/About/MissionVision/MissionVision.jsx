import Container from '../../../../components/Container/index.js'
import Section from '../../../../components/Section/index.js'
import { SECTION_TONES } from '../../../../constants/ui.js'
import {
  CardDescription,
  CardsGrid,
  CardTag,
  CardTitle,
  StyledMissionCard,
} from './MissionVision.styles.js'

function MissionVision({ content, id }) {
  const { subtitle, title, mission, vision } = content

  return (
    <Section id={id} subtitle={subtitle} title={title} tone={SECTION_TONES.SOFT}>
      <Container>
        <CardsGrid>
          <StyledMissionCard
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <CardTag>{mission.tag}</CardTag>
            <CardTitle>{mission.title}</CardTitle>
            <CardDescription>{mission.description}</CardDescription>
          </StyledMissionCard>

          <StyledMissionCard
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <CardTag>{vision.tag}</CardTag>
            <CardTitle>{vision.title}</CardTitle>
            <CardDescription>{vision.description}</CardDescription>
          </StyledMissionCard>
        </CardsGrid>
      </Container>
    </Section>
  )
}

export default MissionVision
