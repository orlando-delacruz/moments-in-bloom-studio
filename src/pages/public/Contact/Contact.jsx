import PagePlaceholder from '../../PagePlaceholder.jsx'
import { ContactPage } from './Contact.styles.js'

function Contact() {
  return (
    <PagePlaceholder
      PageShell={ContactPage}
      eyebrow="Contact"
      title="This page is currently in progress"
      description="Our contact form is being prepared — we will be in touch shortly."
    />
  )
}

export default Contact
