import { useCallback, useMemo, useState } from 'react'

import SEO from '../../../components/SEO/index.js'
import { getActiveCategories, getActiveFaqs } from '../../../constants/faqs.js'

import FAQCategoryNav from './FAQCategoryNav.jsx'
import FAQCTA from './FAQCTA.jsx'
import FAQHero from './FAQHero.jsx'
import FAQList from './FAQList.jsx'

import {
  FaqCategorySection,
  FaqContainer,
  FaqContentSection,
  FaqFilterDescription,
  FaqFilterEyebrow,
  FaqFilterIntro,
  FaqFilterTitle,
  FaqPage,
} from './FAQs.styles.js'

const faqsSeo = Object.freeze({
  title: 'Frequently Asked Questions',
  description:
    'Answers about our Melbourne event styling, florals, decor hire, Luxe Photobooth, Blissful Nest and the journey from first enquiry to your celebration.',
  url: 'https://www.momentsinblooms.com.au/faqs',
})

function buildFaqStructuredData(activeFaqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: activeFaqs.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

function FAQs() {
  const categories = useMemo(() => getActiveCategories(), [])
  const [selectedCategory, setSelectedCategory] = useState(
    categories[0]?.id ?? null,
  )

  const handleSelectCategory = useCallback((categoryId) => {
    setSelectedCategory(categoryId)
  }, [])

  return (
    <FaqPage>
      <SEO
        title={faqsSeo.title}
        description={faqsSeo.description}
        canonical={faqsSeo.url}
        url={faqsSeo.url}
        jsonLd={buildFaqStructuredData(getActiveFaqs())}
      />
      <FAQHero />

      <FaqCategorySection>
        <FaqContainer>
          <FaqFilterIntro>
            <FaqFilterEyebrow>Browse by topic</FaqFilterEyebrow>
            <FaqFilterTitle>Find the answer you need.</FaqFilterTitle>
            <FaqFilterDescription>
              Choose a category to see the questions couples and hosts ask most
              often before they book.
            </FaqFilterDescription>
          </FaqFilterIntro>

          <FAQCategoryNav
            categories={categories}
            selected={selectedCategory}
            onSelect={handleSelectCategory}
          />
        </FaqContainer>
      </FaqCategorySection>

      <FaqContentSection>
        <FaqContainer>
          <FAQList categories={categories} selected={selectedCategory} />
        </FaqContainer>
      </FaqContentSection>

      <FAQCTA />
    </FaqPage>
  )
}

export default FAQs
