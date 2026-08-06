import Container from '../../../../components/Container/index.js'
import Section from '../../../../components/Section/index.js'
import { SECTION_TONES } from '../../../../constants/ui.js'
import {
  FeatureCard,
  FeatureDescription,
  FeatureHeader,
  FeatureNumber,
  FeaturesCol,
  FeatureTitle,
  FloatingBadge,
  ImageFrame,
  SplitGrid,
  VisualCol,
} from './WhyOurServices.styles.js'

function WhyOurServices({ content, id }) {
  if (!content) return null

  return (
    <Section
      id={id}
      subtitle={content.subtitle}
      title={content.title}
      description={content.description}
      tone={SECTION_TONES.SURFACE}
    >
      <Container>
        <SplitGrid>
          <VisualCol
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <ImageFrame>
              <img
                src={content.image.src}
                alt={content.image.alt}
                loading="lazy"
              />
            </ImageFrame>
            {content.badge ? <FloatingBadge>{content.badge}</FloatingBadge> : null}
          </VisualCol>

          <FeaturesCol>
            {content.features.map((feature, index) => (
              <FeatureCard
                key={feature.number || index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <FeatureHeader>
                  <FeatureNumber>{feature.number}</FeatureNumber>
                </FeatureHeader>
                <FeatureTitle>{feature.title}</FeatureTitle>
                <FeatureDescription>{feature.description}</FeatureDescription>
              </FeatureCard>
            ))}
          </FeaturesCol>
        </SplitGrid>
      </Container>
    </Section>
  )
}

export default WhyOurServices
