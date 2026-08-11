import SEO from '../../../components/SEO/index.js'
import {
  HOME_SECTION_IDS,
  homepageCta,
  homepageGalleryItems,
  homepageHero,
  homepageInstagramItems,
  homepageReasons,
  homepageSeo,
  homepageServices,
  homepageTestimonials,
  homepageTrustMarks,
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
  return (
    <HomePage>
      <SEO
        title={homepageSeo.title}
        description={homepageSeo.description}
        canonical={homepageSeo.url}
        image={homepageSeo.image}
        url={homepageSeo.url}
      />
      <Hero content={homepageHero} id={HOME_SECTION_IDS.HERO} />
      <TrustedBy marks={homepageTrustMarks} id={HOME_SECTION_IDS.TRUST} />
      <Services items={homepageServices} id={HOME_SECTION_IDS.SERVICES} />
      <GalleryPreview items={homepageGalleryItems} id={HOME_SECTION_IDS.GALLERY} />
      <WhyChooseUs reasons={homepageReasons} id={HOME_SECTION_IDS.WHY_US} />
      <Testimonials items={homepageTestimonials} id={HOME_SECTION_IDS.TESTIMONIALS} />
      <InstagramPreview items={homepageInstagramItems} id={HOME_SECTION_IDS.INSTAGRAM} />
      <CTA content={homepageCta} id={HOME_SECTION_IDS.CTA} />
    </HomePage>
  )
}

export default Home
