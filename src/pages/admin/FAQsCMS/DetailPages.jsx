import ItemDetailPage from '../../../components/admin/ItemDetailPage/index.js'
import SectionDetailPage from '../../../components/admin/SectionDetailPage/index.js'
import { faqsSections } from './sections.jsx'

const BASE_PATH = '/admin/faqs'

const FaqsSectionDetail = () => (
  <SectionDetailPage
    pageKey="faqs"
    basePath={BASE_PATH}
    pageTitle="FAQs"
    sections={faqsSections}
  />
)

const FaqsItemDetail = () => (
  <ItemDetailPage
    pageKey="faqs"
    basePath={BASE_PATH}
    pageTitle="FAQs"
    sections={faqsSections}
  />
)

export { FaqsSectionDetail, FaqsItemDetail }