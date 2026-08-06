import Button from '../../../../components/Button/index.js'
import Container from '../../../../components/Container/index.js'
import {
  CTAActions,
  CTAContent,
  CTADescription,
  CTARoot,
  CTASubtitle,
  CTATitle,
} from './ServicesCTA.styles.js'

function ServicesCTA({ content, id }) {
  if (!content) return null

  return (
    <CTARoot id={id}>
      <Container>
        <CTAContent
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {content.eyebrow ? <CTASubtitle>{content.eyebrow}</CTASubtitle> : null}
          <CTATitle>{content.title}</CTATitle>
          <CTADescription>{content.description}</CTADescription>

          <CTAActions>
            {content.primaryCta ? (
              <Button to={content.path || '/contact'} size="large" variant="primary">
                {content.primaryCta}
              </Button>
            ) : null}

            {content.secondaryCta ? (
              <Button to="/gallery" size="large" variant="outline">
                {content.secondaryCta}
              </Button>
            ) : null}
          </CTAActions>
        </CTAContent>
      </Container>
    </CTARoot>
  )
}

export default ServicesCTA
