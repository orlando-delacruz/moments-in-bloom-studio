import SEO from '../../../components/SEO/index.js'
import {
  CONTACT_SECTION_IDS,
  contactCta,
  contactHero,
  contactInformation,
  contactSeo,
  enquiryFormRail,
  enquiryIntro,
} from '../../../constants/contact.js'
import ContactCTA from './ContactCTA/index.js'
import ContactHero from './ContactHero/index.js'
import ContactInformation from './ContactInformation/index.js'
import EnquiryForm from './EnquiryForm/index.js'
import EnquiryIntro from './EnquiryIntro/index.js'
import { ContactPage } from './Contact.styles.js'

function Contact() {
  return (
    <ContactPage>
      <SEO
        title={contactSeo.title}
        description={contactSeo.description}
        canonical={contactSeo.url}
        image={contactSeo.image}
        url={contactSeo.url}
      />

      <ContactHero content={contactHero} id={CONTACT_SECTION_IDS.HERO} />
      <EnquiryIntro content={enquiryIntro} id={CONTACT_SECTION_IDS.INTRO} />
      <EnquiryForm content={enquiryFormRail} id={CONTACT_SECTION_IDS.FORM} />
      <ContactInformation content={contactInformation} id={CONTACT_SECTION_IDS.INFORMATION} />
      <ContactCTA content={contactCta} id={CONTACT_SECTION_IDS.CTA} />
    </ContactPage>
  )
}

export default Contact