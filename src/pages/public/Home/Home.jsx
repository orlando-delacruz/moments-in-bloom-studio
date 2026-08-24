import { useContent } from '../../../hooks/useContent.js'
import SEO from '../../../components/SEO/index.js'
import {
  HOME_SECTION_IDS,
  homepageSeo,
} from '../../../constants/homepage.js'
import CTA from './CTA/CTA.jsx'
import GalleryPreview from './GalleryPreview/GalleryPreview.jsx'
import Hero from './Hero/Hero.jsx'
import InstagramPreview from './InstagramPreview/InstagramPreview.jsx'
import { HomePage } from './Home.styles.js'
import Services from './Services/Services.jsx'
import Testimonials from './Testimonials/Testimonials.jsx'
import TrustedBy from './TrustedBy/TrustedBy.jsx'
import WhyChooseUs from './WhyChooseUs/WhyChooseUs.jsx'

function Home() {
  const { values } = useContent('homepage')

  return (
    <HomePage>
      <SEO
        title={homepageSeo.title}
        description={homepageSeo.description}
        canonical={homepageSeo.url}
        image={homepageSeo.image}
        url={homepageSeo.url}
      />
      <Hero content={values.hero} id={HOME_SECTION_IDS.HERO} />
      <TrustedBy marks={values.trustMarks} id={HOME_SECTION_IDS.TRUST} />
      <Services items={values.services} id={HOME_SECTION_IDS.SERVICES} />
      <GalleryPreview items={values.galleryItems} id={HOME_SECTION_IDS.GALLERY} />
      <WhyChooseUs reasons={values.reasons} id={HOME_SECTION_IDS.WHY_US} />
      <Testimonials items={values.testimonials} id={HOME_SECTION_IDS.TESTIMONIALS} />
      <InstagramPreview items={values.instagramItems} id={HOME_SECTION_IDS.INSTAGRAM} />
      <CTA content={values.cta} id={HOME_SECTION_IDS.CTA} />
    </HomePage>
  )
}

export default Home
