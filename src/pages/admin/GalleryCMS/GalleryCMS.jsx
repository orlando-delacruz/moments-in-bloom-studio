import { useState } from 'react'
import { FiImage, FiPlus } from 'react-icons/fi'
import AdminPageHeader from '../../../components/admin/AdminPageHeader/index.js'
import ContentCard from '../../../components/admin/ContentCard/index.js'
import ContentList from '../../../components/admin/ContentList/index.js'
import ContentToolbar from '../../../components/admin/ContentToolbar/index.js'
import EmptyState from '../../../components/admin/EmptyState/index.js'
import Button from '../../../components/Button/index.js'
import { adminPageMeta } from '../../../constants/admin.js'
import { useContent } from '../../../hooks/useContent.js'
import { gallerySections } from './sections.jsx'
import { GalleryCMSPage } from './GalleryCMS.styles.js'

function GalleryCMS() {
  const { values, savedAt } = useContent('gallery')
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('')

  const categories = values.categories ?? []
  const items = values.items ?? []
  const itemsSection = gallerySections.find((section) => section.key === 'items')
  const pageSections = gallerySections.filter(
    (section) => section.key !== 'items',
  )

  const normalizedSearch = search.trim().toLowerCase()
  const filteredItems = items.filter((item) => {
    if (
      normalizedSearch &&
      !`${item.title ?? ''} ${item.subtitle ?? ''}`
        .toLowerCase()
        .includes(normalizedSearch)
    ) {
      return false
    }
    if (category && item.category !== category) return false
    return true
  })

  return (
    <GalleryCMSPage>
      <AdminPageHeader
        {...adminPageMeta.gallery}
        actions={
          <Button to="/admin/gallery/items/new" variant="primary">
            <FiPlus aria-hidden="true" size={15} />
            Add image
          </Button>
        }
      />

      <ContentToolbar
        searchValue={search}
        onSearchChange={setSearch}
        searchPlaceholder="Search images…"
        count={filteredItems.length}
        countLabel="images"
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
        ]}
      />

      <ContentList
        title="Gallery images"
        description="The images in your gallery grid."
        emptyState={
          <EmptyState
            icon={<FiImage aria-hidden="true" />}
            title={
              items.length === 0 ? 'No gallery images yet' : 'No images match your search'
            }
            description={
              items.length === 0
                ? 'Add your first gallery image to get started.'
                : 'Try adjusting your search or filters.'
            }
            action={
              items.length === 0 ? (
                <Button to="/admin/gallery/items/new" variant="outline">
                  <FiPlus aria-hidden="true" size={15} />
                  Add image
                </Button>
              ) : null
            }
          />
        }
      >
        {filteredItems.map((item, index) => (
          <ContentCard
            key={item.id ?? index}
            to={`/admin/gallery/items/${item.id}`}
            title={itemsSection.itemTitle(item, values)}
            description={itemsSection.itemDescription(item, values)}
            meta={itemsSection.itemMeta(item, values)}
            thumbnail={itemsSection.itemThumb(item, values)}
            lastUpdated={savedAt}
          />
        ))}
      </ContentList>

      <ContentList
        title="Page content"
        description="Categories, featured stories and the copy sections of the gallery page."
      >
        {pageSections.map((section) => (
          <ContentCard
            key={section.key}
            to={`/admin/gallery/${section.key}`}
            title={section.title}
            description={section.description}
            meta={section.sectionMeta?.(values)}
            lastUpdated={savedAt}
          />
        ))}
      </ContentList>
    </GalleryCMSPage>
  )
}

export default GalleryCMS