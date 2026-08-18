import { useCallback, useEffect, useMemo, useState } from 'react'
import Button from '../../../components/Button/index.js'
import SEO from '../../../components/SEO/index.js'
import { BUTTON_VARIANTS } from '../../../constants/ui.js'
import {
  fetchPublicFaqPage,
  getPublicPageFallback,
} from '../../../services/faqs.js'

import FAQCategoryNav from './FAQCategoryNav.jsx'
import FAQCTA from './FAQCTA.jsx'
import FAQHero from './FAQHero.jsx'
import FAQList from './FAQList.jsx'
import { FaqListSkeleton, FaqNavSkeleton } from './FAQSkeleton.jsx'

import {
  FaqCategorySection,
  FaqContainer,
  FaqContentSection,
  FaqErrorBlock,
  FaqErrorMessage,
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

function buildFaqStructuredData(categories) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: categories.flatMap((category) =>
      category.faqs.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    ),
  }
}

function FAQs() {
  const [pageData, setPageData] = useState(null)
  const [status, setStatus] = useState('loading')
  const [reloadKey, setReloadKey] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState(null)

  useEffect(() => {
    let cancelled = false
    fetchPublicFaqPage()
      .then(({ data }) => {
        if (cancelled) return
        if (data) {
          setPageData(data)
          setStatus('ready')
        } else {
          setStatus('error')
        }
      })
      .catch(() => {
        if (!cancelled) setStatus('error')
      })
    return () => {
      cancelled = true
    }
  }, [reloadKey])

  const categories = useMemo(
    () => (status === 'ready' ? pageData?.categories ?? [] : []),
    [status, pageData],
  )
  const fallback = useMemo(() => getPublicPageFallback(), [])
  const ready = status === 'ready'
  const failed = status === 'error'

  const handleRetry = useCallback(() => {
    setStatus('loading')
    setReloadKey((key) => key + 1)
  }, [])

  const activeCategory = categories.some(
    (category) => category.id === selectedCategory,
  )
    ? selectedCategory
    : categories[0]?.id ?? null

  const handleSelectCategory = useCallback((categoryId) => {
    setSelectedCategory(categoryId)
  }, [])

  const heroContent = ready
    ? pageData.hero
    : failed
      ? fallback.hero
      : null

  const sectionContent = ready
    ? pageData.section
    : failed
      ? fallback.section
      : null

  return (
    <FaqPage>
      <SEO
        title={faqsSeo.title}
        description={faqsSeo.description}
        canonical={faqsSeo.url}
        url={faqsSeo.url}
        jsonLd={ready ? buildFaqStructuredData(categories) : undefined}
      />

      <FAQHero
        loading={status === 'loading'}
        eyebrow={heroContent?.eyebrow ?? ''}
        title={heroContent?.title ?? ''}
        description={heroContent?.description ?? ''}
      />

      <FaqCategorySection>
        <FaqContainer>
          <FaqFilterIntro>
            {sectionContent ? (
              <>
                <FaqFilterEyebrow>
                  {sectionContent.eyebrow}
                </FaqFilterEyebrow>
                <FaqFilterTitle>{sectionContent.title}</FaqFilterTitle>
                <FaqFilterDescription>
                  {sectionContent.description}
                </FaqFilterDescription>
              </>
            ) : null}
          </FaqFilterIntro>

          {status === 'loading' ? <FaqNavSkeleton /> : null}
          {ready && categories.length > 0 ? (
            <FAQCategoryNav
              categories={categories}
              selected={activeCategory}
              onSelect={handleSelectCategory}
            />
          ) : null}
          {failed ? (
            <FaqErrorBlock>
              <FaqErrorMessage>
                We couldn't load the FAQs right now. Please try again shortly.
              </FaqErrorMessage>
              <Button
                type="button"
                variant={BUTTON_VARIANTS.OUTLINE}
                onClick={handleRetry}
              >
                Try again
              </Button>
            </FaqErrorBlock>
          ) : null}
        </FaqContainer>
      </FaqCategorySection>

      <FaqContentSection>
        <FaqContainer>
          {status === 'loading' ? <FaqListSkeleton /> : null}
          {ready ? (
            <FAQList categories={categories} selected={activeCategory} />
          ) : null}
        </FaqContainer>
      </FaqContentSection>

      {heroContent ? (
        <FAQCTA cta={ready ? pageData.cta : fallback.cta} />
      ) : null}
    </FaqPage>
  )
}

export default FAQs