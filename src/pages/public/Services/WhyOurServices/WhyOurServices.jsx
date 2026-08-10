import Container from '../../../../components/Container/index.js'
import { ImageReveal, SafeReveal } from '../../../../components/Reveal/index.js'
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
          <VisualCol>
            <ImageFrame>
              <ImageReveal>
                <img
                  src={content.image.src}
                  alt={content.image.alt}
                  loading="lazy"
                />
              </ImageReveal>
            </ImageFrame>
            {content.badge ? <FloatingBadge>{content.badge}</FloatingBadge> : null}
          </VisualCol>

          <FeaturesCol>
            {content.features.map((feature, index) => (
              <SafeReveal
                key={feature.number || index}
                as={FeatureCard}
                from={{ y: 28, scale: 0.985 }}
              >
                <FeatureHeader>
                  <FeatureNumber>{feature.number}</FeatureNumber>
                </FeatureHeader>
                <FeatureTitle>{feature.title}</FeatureTitle>
                <FeatureDescription>{feature.description}</FeatureDescription>
              </SafeReveal>
            ))}
          </FeaturesCol>
        </SplitGrid>
      </Container>
    </Section>
  )
}

export default WhyOurServices
