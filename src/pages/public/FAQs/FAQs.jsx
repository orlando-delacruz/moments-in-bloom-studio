import PagePlaceholder from '../../PagePlaceholder.jsx'
import { FAQsPage } from './FAQs.styles.js'

function FAQs() {
  return (
    <PagePlaceholder
      PageShell={FAQsPage}
      eyebrow="Frequently Asked Questions"
      title="This page is currently in progress"
      description="We are still building out our full list of answers — check back soon."
    />
  )
}

export default FAQs
