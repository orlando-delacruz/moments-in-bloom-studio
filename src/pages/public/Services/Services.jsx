import SEO from '../../../components/SEO/index.js'
import {
  serviceCollections,
  SERVICES_SECTION_IDS,
  servicesCta,
  servicesExperienceTimeline,
  servicesFaqs,
  servicesGallery,
  servicesHero,
  servicesIntro,
  servicesSeo,
  servicesTestimonials,
  servicesWhyChooseUs,
  whatsIncluded,
} from '../../../constants/services.js'
import ClientLove from './ClientLove/index.js'
import FAQPreview from '../Home/FAQPreview/FAQPreview.jsx'
import GalleryPreview from './GalleryPreview/index.js'
import ServiceCollectionsShowcase from './ServiceCollectionsShowcase/index.js'
import { ServicesPage } from './Services.styles.js'
import ServicesCTA from './ServicesCTA/index.js'
import ServicesExperience from './ServicesExperience/index.js'
import ServicesHero from './ServicesHero/index.js'
import ServicesIntro from './ServicesIntro/index.js'
import WhatsIncluded from './WhatsIncluded/index.js'
import WhyOurServices from './WhyOurServices/index.js'

function Services() {
  return (
    <ServicesPage>
      <SEO
        title={servicesSeo.title}
        description={servicesSeo.description}
        canonical={servicesSeo.url}
        image={servicesSeo.image}
        url={servicesSeo.url}
      />
      <ServicesHero content={servicesHero} id={SERVICES_SECTION_IDS.HERO} />
      <ServicesIntro content={servicesIntro} id={SERVICES_SECTION_IDS.INTRO} />
      <ServiceCollectionsShowcase
        collections={serviceCollections}
        id={SERVICES_SECTION_IDS.FEATURED}
      />
      <WhatsIncluded content={whatsIncluded} id={SERVICES_SECTION_IDS.INCLUDED} />
      <ServicesExperience
        content={servicesExperienceTimeline}
        id={SERVICES_SECTION_IDS.EXPERIENCE}
      />
      <GalleryPreview content={servicesGallery} id={SERVICES_SECTION_IDS.GALLERY} />
      <WhyOurServices content={servicesWhyChooseUs} id={SERVICES_SECTION_IDS.WHY_US} />
      <ClientLove
        testimonials={servicesTestimonials}
        id={SERVICES_SECTION_IDS.TESTIMONIALS}
      />
      <FAQPreview items={servicesFaqs} id={SERVICES_SECTION_IDS.FAQ} tone="surface" />
      <ServicesCTA content={servicesCta} id={SERVICES_SECTION_IDS.CTA} />
    </ServicesPage>
  )
}

export default Services
