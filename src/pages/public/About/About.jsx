import { useContent } from '../../../hooks/useContent.js'
import SEO from '../../../components/SEO/index.js'
import { ABOUT_SECTION_IDS, aboutSeo } from '../../../constants/about.js'
import { AboutPage } from './About.styles.js'
import AboutHero from './AboutHero/index.js'
import BrandStory from './BrandStory/index.js'
import CoreValues from './CoreValues/index.js'
import CTA from './CTA/index.js'
import MissionVision from './MissionVision/index.js'
import TestimonialHighlight from './TestimonialHighlight/index.js'

function About() {
  const { values } = useContent('about')

  return (
    <AboutPage>
      <SEO
        title={aboutSeo.title}
        description={aboutSeo.description}
        canonical={aboutSeo.url}
        image={aboutSeo.image}
        url={aboutSeo.url}
      />
      <AboutHero content={values.hero} id={ABOUT_SECTION_IDS.HERO} />
      <BrandStory content={values.brandStory} id={ABOUT_SECTION_IDS.BRAND_STORY} />
      <MissionVision content={values.missionVision} id={ABOUT_SECTION_IDS.MISSION_VISION} />
      <CoreValues items={values.coreValues} id={ABOUT_SECTION_IDS.CORE_VALUES} />
      <TestimonialHighlight
        content={values.testimonialHighlight}
        id={ABOUT_SECTION_IDS.TESTIMONIAL}
      />
      <CTA content={values.cta} id={ABOUT_SECTION_IDS.CTA} />
    </AboutPage>
  )
}

export default About