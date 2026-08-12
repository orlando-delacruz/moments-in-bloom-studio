import SEO from '../../../components/SEO/index.js'
import {
  serviceCollections,
  SERVICES_SECTION_IDS,
  servicesCta,
  servicesExperienceTimeline,
  servicesFaqs,
  servicesHero,
  servicesSeo,
} from '../../../constants/services.js'
import FAQPreview from '../Home/FAQPreview/FAQPreview.jsx'
import ServiceCollectionsShowcase from './ServiceCollectionsShowcase/index.js'
import { ServicesPage } from './Services.styles.js'
import ServicesCTA from './ServicesCTA/index.js'
import ServicesExperience from './ServicesExperience/index.js'
import ServicesHero from './ServicesHero/index.js'

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
      <ServiceCollectionsShowcase
        collections={serviceCollections}
        id={SERVICES_SECTION_IDS.FEATURED}
      />
      <ServicesExperience
        content={servicesExperienceTimeline}
        id={SERVICES_SECTION_IDS.EXPERIENCE}
      />
      <FAQPreview items={servicesFaqs} id={SERVICES_SECTION_IDS.FAQ} tone="surface" />
      <ServicesCTA content={servicesCta} id={SERVICES_SECTION_IDS.CTA} />
    </ServicesPage>
  )
}

export default Services