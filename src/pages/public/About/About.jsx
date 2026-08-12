import SEO from '../../../components/SEO/index.js'
import {
  ABOUT_SECTION_IDS,
  aboutBrandStory,
  aboutCoreValues,
  aboutCta,
  aboutHero,
  aboutMissionVision,
  aboutSeo,
  aboutTestimonialHighlight,
} from '../../../constants/about.js'
import { AboutPage } from './About.styles.js'
import AboutHero from './AboutHero/index.js'
import BrandStory from './BrandStory/index.js'
import CoreValues from './CoreValues/index.js'
import CTA from './CTA/index.js'
import MissionVision from './MissionVision/index.js'
import TestimonialHighlight from './TestimonialHighlight/index.js'

function About() {
  return (
    <AboutPage>
      <SEO
        title={aboutSeo.title}
        description={aboutSeo.description}
        canonical={aboutSeo.url}
        image={aboutSeo.image}
        url={aboutSeo.url}
      />
      <AboutHero content={aboutHero} id={ABOUT_SECTION_IDS.HERO} />
      <BrandStory content={aboutBrandStory} id={ABOUT_SECTION_IDS.BRAND_STORY} />
      <MissionVision content={aboutMissionVision} id={ABOUT_SECTION_IDS.MISSION_VISION} />
      <CoreValues items={aboutCoreValues} id={ABOUT_SECTION_IDS.CORE_VALUES} />
      <TestimonialHighlight
        content={aboutTestimonialHighlight}
        id={ABOUT_SECTION_IDS.TESTIMONIAL}
      />
      <CTA content={aboutCta} id={ABOUT_SECTION_IDS.CTA} />
    </AboutPage>
  )
}

export default About