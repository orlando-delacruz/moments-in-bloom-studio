import { useContent } from '../../../hooks/useContent.js'
import SEO from '../../../components/SEO/index.js'
import { CONTACT_SECTION_IDS, contactSeo } from '../../../constants/contact.js'
import ContactCTA from './ContactCTA/index.js'
import ContactHero from './ContactHero/index.js'
import ContactInformation from './ContactInformation/index.js'
import EnquiryForm from './EnquiryForm/index.js'
import { ContactPage } from './Contact.styles.js'

function Contact() {
  const { values } = useContent('contact')

  return (
    <ContactPage>
      <SEO
        title={contactSeo.title}
        description={contactSeo.description}
        canonical={contactSeo.url}
        image={contactSeo.image}
        url={contactSeo.url}
      />

      <ContactHero content={values.hero} id={CONTACT_SECTION_IDS.HERO} />
      <EnquiryForm
        content={values.enquiryFormRail}
        id={CONTACT_SECTION_IDS.FORM}
        eventTypeOptions={values.enquiryFormOptions?.eventTypeOptions}
        serviceInterestOptions={values.enquiryFormOptions?.serviceInterestOptions}
        guestCountOptions={values.enquiryFormOptions?.guestCountOptions}
        setupRequirementOptions={values.enquiryFormOptions?.setupRequirementOptions}
      />
      <ContactInformation content={values.information} id={CONTACT_SECTION_IDS.INFORMATION} />
      <ContactCTA content={values.cta} id={CONTACT_SECTION_IDS.CTA} />
    </ContactPage>
  )
}

export default Contact