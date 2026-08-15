import { useState } from 'react'
import { FiHelpCircle, FiPlus } from 'react-icons/fi'
import AdminPageHeader from '../../../components/admin/AdminPageHeader/index.js'
import ContentCard from '../../../components/admin/ContentCard/index.js'
import ContentList from '../../../components/admin/ContentList/index.js'
import ContentToolbar from '../../../components/admin/ContentToolbar/index.js'
import EmptyState from '../../../components/admin/EmptyState/index.js'
import Button from '../../../components/Button/index.js'
import { adminPageMeta } from '../../../constants/admin.js'
import { useContent } from '../../../hooks/useContent.js'
import { faqsSections } from './sections.jsx'
import { FAQsCMSPage } from './FAQsCMS.styles.js'

function FAQsCMS() {
  const { values, savedAt } = useContent('faqs')
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('')
  const [status, setStatus] = useState('')

  const categories = values.categories ?? []
  const items = values.items ?? []
  const itemsSection = faqsSections.find((section) => section.key === 'items')
  const categoriesSection = faqsSections.find(
    (section) => section.key === 'categories',
  )

  const normalizedSearch = search.trim().toLowerCase()
  const filteredItems = items.filter((item) => {
    if (
      normalizedSearch &&
      !`${item.question ?? ''} ${item.answer ?? ''}`
        .toLowerCase()
        .includes(normalizedSearch)
    ) {
      return false
    }
    if (category && item.category !== category) return false
    if (status && (item.active ? 'active' : 'inactive') !== status) return false
    return true
  })

  return (
    <FAQsCMSPage>
      <AdminPageHeader
        {...adminPageMeta.faqs}
        actions={
          <Button to="/admin/faqs/items/new" variant="primary">
            <FiPlus aria-hidden="true" size={15} />
            Add FAQ
          </Button>
        }
      />

      <ContentToolbar
        searchValue={search}
        onSearchChange={setSearch}
        searchPlaceholder="Search questions…"
        count={filteredItems.length}
        countLabel="FAQs"
        filters={[
          {
            key: 'category',
            label: 'Filter by category',
            value: category,
            onChange: setCategory,
            placeholder: 'All categories',
            options: categories.map((entry) => ({
              value: entry.id,
              label: entry.label,
            })),
          },
          {
            key: 'status',
            label: 'Filter by status',
            value: status,
            onChange: setStatus,
            placeholder: 'All statuses',
            options: [
              { value: 'active', label: 'Active' },
              { value: 'inactive', label: 'Inactive' },
            ],
          },
        ]}
      />

      <ContentList
        title="FAQ items"
        description="Questions, answers and whether each one is published."
        emptyState={
          <EmptyState
            icon={<FiHelpCircle aria-hidden="true" />}
            title={items.length === 0 ? 'No FAQs yet' : 'No FAQs match your search'}
            description={
              items.length === 0
                ? 'Add your first frequently asked question to get started.'
                : 'Try adjusting your search or filters.'
            }
            action={
              items.length === 0 ? (
                <Button to="/admin/faqs/items/new" variant="outline">
                  <FiPlus aria-hidden="true" size={15} />
                  Add FAQ
                </Button>
              ) : null
            }
          />
        }
      >
        {filteredItems.map((item, index) => (
          <ContentCard
            key={item.id ?? index}
            to={`/admin/faqs/items/${item.id}`}
            title={itemsSection.itemTitle(item, values)}
            description={itemsSection.itemDescription(item, values)}
            meta={itemsSection.itemMeta(item, values)}
            status={itemsSection.itemStatus(item, values)}
            lastUpdated={savedAt}
          />
        ))}
      </ContentList>

      <ContentList
        title="FAQ categories"
        description="Group your questions into categories shown on the FAQ page."
        emptyState={
          <EmptyState
            icon={<FiHelpCircle aria-hidden="true" />}
            title="No categories yet"
            description="Add your first category to organise the FAQ page."
            action={
              <Button to="/admin/faqs/categories/new" variant="outline">
                <FiPlus aria-hidden="true" size={15} />
                Add category
              </Button>
            }
          />
        }
      >
        {categories.map((item, index) => (
          <ContentCard
            key={item.id ?? index}
            to={`/admin/faqs/categories/${item.id}`}
            title={categoriesSection.itemTitle(item, values)}
            description={categoriesSection.itemDescription(item, values)}
            meta={categoriesSection.itemMeta(item, values)}
            lastUpdated={savedAt}
          />
        ))}
      </ContentList>
    </FAQsCMSPage>
  )
}

export default FAQsCMS