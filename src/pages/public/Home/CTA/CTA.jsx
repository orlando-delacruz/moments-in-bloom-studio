import { FiArrowUpRight } from 'react-icons/fi'
import { NavLink } from 'react-router-dom'
import Button from '../../../../components/Button/index.js'
import { BUTTON_VARIANTS } from '../../../../constants/ui.js'
import {
  CTAActions,
  CTAContainer,
  CTADescription,
  CTAEyebrow,
  CTARoot,
  CTATitle,
  CTABottomLine,
  CTAOrb,
} from './CTA.styles.js'

function CTA({ content, id = 'home-cta' }) {
  return (
    <CTARoot id={id}>
      <CTAOrb
        aria-hidden="true"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 34, repeat: Infinity, ease: 'linear' }}
      />
      <CTAContainer>
        <CTAEyebrow>{content.eyebrow}</CTAEyebrow>
        <CTATitle
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {content.title}
        </CTATitle>
        <CTADescription>{content.description}</CTADescription>
        <CTAActions>
          <Button as={NavLink} to="/contact" variant={BUTTON_VARIANTS.OUTLINE}>
            {content.primaryCta}
            <FiArrowUpRight aria-hidden="true" color="currentColor" size={17} />
          </Button>
          <Button as={NavLink} to="/gallery" variant={BUTTON_VARIANTS.GHOST}>
            {content.secondaryCta}
          </Button>
        </CTAActions>
      </CTAContainer>
      <CTABottomLine aria-hidden="true" />
    </CTARoot>
  )
}

export default CTA
