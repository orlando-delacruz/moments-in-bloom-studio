import { useContent } from '../../../hooks/useContent.js'
import SEO from '../../../components/SEO/index.js'
import {
  SERVICES_SECTION_IDS,
  servicesSeo,
} from '../../../constants/services.js'
import FaqSection from './FaqSection/index.js'
import ServiceCollectionsShowcase from './ServiceCollectionsShowcase/index.js'
import { ServicesPage } from './Services.styles.js'
import ServicesCTA from './ServicesCTA/index.js'
import ServicesExperience from './ServicesExperience/index.js'
import ServicesHero from './ServicesHero/index.js'

function Services() {
  const { values } = useContent('services')

  return (
    <ServicesPage>
      <SEO
        title={servicesSeo.title}
        description={servicesSeo.description}
        canonical={servicesSeo.url}
        image={servicesSeo.image}
        url={servicesSeo.url}
      />
      <ServicesHero content={values.hero} id={SERVICES_SECTION_IDS.HERO} />
      <ServiceCollectionsShowcase
        collections={values.serviceCollections}
        photoboothPackages={values.photoboothPackages}
        photoboothHighlights={values.photoboothHighlights}
        blissfulNestIntro={values.blissfulNestIntro}
        blissfulNestPackages={values.blissfulNestPackages}
        id={SERVICES_SECTION_IDS.FEATURED}
      />
      <ServicesExperience
        content={values.experienceTimeline}
        id={SERVICES_SECTION_IDS.EXPERIENCE}
      />
      <FaqSection id={SERVICES_SECTION_IDS.FAQ} />
      <ServicesCTA content={values.cta} id={SERVICES_SECTION_IDS.CTA} />
    </ServicesPage>
  )
}

export default Services
