import { NavLink } from 'react-router-dom'
import Button from '../../../../components/Button/index.js'
import Container from '../../../../components/Container/index.js'
import { BUTTON_VARIANTS } from '../../../../constants/ui.js'
import {
  CTAActions,
  CTAContent,
  CTADescription,
  CTARoot,
  CTASubtitle,
  CTATitle,
} from './CTA.styles.js'

function CTA({ content, id }) {
  const { subtitle, title, description, primaryCta, secondaryCta } = content

  return (
    <CTARoot id={id}>
      <Container>
        <CTAContent
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {subtitle && <CTASubtitle>{subtitle}</CTASubtitle>}
          <CTATitle>{title}</CTATitle>
          <CTADescription>{description}</CTADescription>

          <CTAActions>
            {primaryCta && (
              <Button as={NavLink} to={primaryCta.path} variant={BUTTON_VARIANTS.SECONDARY}>
                {primaryCta.label}
              </Button>
            )}
            {secondaryCta && (
              <Button as={NavLink} to={secondaryCta.path} variant={BUTTON_VARIANTS.SECONDARY}>
                {secondaryCta.label}
              </Button>
            )}
          </CTAActions>
        </CTAContent>
      </Container>
    </CTARoot>
  )
}

export default CTA
