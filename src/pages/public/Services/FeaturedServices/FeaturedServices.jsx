import { FiCheckCircle } from 'react-icons/fi'
import Button from '../../../../components/Button/index.js'
import Container from '../../../../components/Container/index.js'
import Section from '../../../../components/Section/index.js'
import { SECTION_TONES } from '../../../../constants/ui.js'
import {
  ContentWrapper,
  CtaWrapper,
  FeatureItem,
  FeatureList,
  FeaturedContainer,
  ImageWrapper,
  ServiceDescription,
  ServiceTag,
  ServiceTitle,
  ShowcaseRow,
} from './FeaturedServices.styles.js'

function FeaturedServices({ services, id }) {
  if (!services || !services.length) return null

  return (
    <Section
      id={id}
      subtitle="Curated Portfolio"
      title="Our Signature Offerings"
      description="Explore our range of bespoke services designed to elevate weddings, private soirees, and high-profile brand celebrations across Victoria."
      tone={SECTION_TONES.SURFACE}
    >
      <Container>
        <FeaturedContainer>
          {services.map((service, index) => {
            const isReversed = index % 2 !== 0

            return (
              <ShowcaseRow
                key={service.id}
                $isReversed={isReversed}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <ImageWrapper $isReversed={isReversed}>
                  <img
                    src={service.image.src}
                    alt={service.image.alt}
                    loading="lazy"
                  />
                </ImageWrapper>

                <ContentWrapper $isReversed={isReversed}>
                  <ServiceTag>{service.tag}</ServiceTag>
                  <ServiceTitle>{service.title}</ServiceTitle>
                  <ServiceDescription>{service.description}</ServiceDescription>

                  <FeatureList>
                    {service.highlights.map((highlight, idx) => (
                      <FeatureItem key={idx}>
                        <FiCheckCircle aria-hidden="true" />
                        <span>{highlight}</span>
                      </FeatureItem>
                    ))}
                  </FeatureList>

                  <CtaWrapper>
                    <Button to={service.ctaPath} variant="primary" size="medium">
                      {service.ctaText}
                    </Button>
                  </CtaWrapper>
                </ContentWrapper>
              </ShowcaseRow>
            )
          })}
        </FeaturedContainer>
      </Container>
    </Section>
  )
}

export default FeaturedServices
