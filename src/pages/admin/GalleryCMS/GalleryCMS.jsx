import { useState } from 'react'
import { FiEdit2, FiImage, FiPlus, FiTrash2 } from 'react-icons/fi'
import AdminPageHeader from '../../../components/admin/AdminPageHeader/index.js'
import ConfirmDialog from '../../../components/admin/ConfirmDialog/index.js'
import DataTable from '../../../components/admin/DataTable/index.js'
import EditorCard, { EditorCardCount } from '../../../components/admin/EditorCard/index.js'
import EmptyState from '../../../components/admin/EmptyState/index.js'
import ImagePicker from '../../../components/admin/ImagePicker/index.js'
import Modal from '../../../components/admin/Modal/index.js'
import { IconButton } from '../../../components/admin/Repeater/index.js'
import Repeater from '../../../components/admin/Repeater/index.js'
import SaveBar from '../../../components/admin/SaveBar/index.js'
import Button from '../../../components/Button/index.js'
import { FieldRow, SelectField, TextAreaField, TextField } from '../../../components/FormField/index.js'
import { adminPageMeta } from '../../../constants/admin.js'
import { useContent } from '../../../hooks/useContent.js'
import {
  GalleryCMSPage,
  TableCellActions,
  Thumb,
} from './GalleryCMS.styles.js'

const GALLERY_SIZES = ['large', 'portrait', 'medium', 'small', 'wide']

function GalleryCMS() {
  const { values, savedAt, dirty, update, save, reset } = useContent('gallery')
  const [editingItem, setEditingItem] = useState(null)
  const [deletingItem, setDeletingItem] = useState(null)

  const categories = values.categories ?? []
  const items = values.items ?? []

  const updateSection = (sectionKey, patch) =>
    update((current) => ({ ...current, [sectionKey]: { ...current[sectionKey], ...patch } }))

  const updateList = (sectionKey, nextItems) =>
    update((current) => ({ ...current, [sectionKey]: nextItems }))

  const categoryLabel = (categoryId) =>
    categories.find((category) => category.id === categoryId)?.label ?? categoryId

  const saveEditing = () => {
    if (!editingItem?.title.trim()) return
    const exists = items.some((item) => item.id === editingItem.id)
    updateList('items', exists
      ? items.map((item) => (item.id === editingItem.id ? { ...editingItem } : item))
      : [...items, editingItem])
    setEditingItem(null)
  }

  const handleDelete = () => {
    updateList('items', items.filter((item) => item.id !== deletingItem.id))
    setDeletingItem(null)
  }

  const openCreate = () =>
    setEditingItem({
      id: `item-${Date.now()}`,
      src: '',
      title: '',
      subtitle: '',
      category: categories[0]?.id ?? '',
      size: 'medium',
    })

  return (
    <GalleryCMSPage>
      <AdminPageHeader
        {...adminPageMeta.gallery}
        actions={
          <Button type="button" variant="primary" onClick={openCreate}>
            <FiPlus aria-hidden="true" size={15} />
            Add image
          </Button>
        }
      />

      <EditorCard
        title="Categories"
        description="The filters visitors use to browse the gallery."
        defaultOpen
      >
        <Repeater
          items={categories}
          onChange={(next) => updateList('categories', next)}
          createItem={() => ({ id: `cat-${Date.now()}`, label: 'New category' })}
          addLabel="Add category"
          itemTitle={(item) => item.label || 'Unnamed category'}
          renderItem={(item, index, { update: patch }) => (
            <div>
              <TextField
                label="Category label"
                value={item.label ?? ''}
                onChange={(event) => patch({ label: event.target.value })}
                placeholder="e.g. Weddings"
              />
              <TextField
                label="Category id"
                value={item.id ?? ''}
                onChange={(event) => patch({ id: event.target.value })}
                hint="Used to link gallery items to this category."
              />
            </div>
          )}
        />
      </EditorCard>

      <EditorCard
        title="Gallery items"
        description="The images in your gallery grid."
        meta={<EditorCardCount>{items.length}</EditorCardCount>}
        defaultOpen
      >
        <DataTable
          columns={[
            {
              key: 'image',
              header: 'Image',
              render: (row) => <Thumb src={row.src} alt={row.title ?? ''} />,
            },
            {
              key: 'title',
              header: 'Title',
              render: (row) => <strong>{row.title ?? '—'}</strong>,
            },
            {
              key: 'category',
              header: 'Category',
              render: (row) => categoryLabel(row.category),
            },
            {
              key: 'size',
              header: 'Size',
              render: (row) => row.size ?? 'medium',
            },
            {
              key: 'actions',
              header: '',
              render: (row) => (
                <TableCellActions>
                  <IconButton
                    type="button"
                    onClick={() => setEditingItem(row)}
                    aria-label="Edit"
                    title="Edit"
                  >
                    <FiEdit2 aria-hidden="true" size={15} />
                  </IconButton>
                  <IconButton
                    type="button"
                    $danger
                    onClick={() => setDeletingItem(row)}
                    aria-label="Delete"
                    title="Delete"
                  >
                    <FiTrash2 aria-hidden="true" size={15} />
                  </IconButton>
                </TableCellActions>
              ),
            },
          ]}
          rows={items}
          rowKey={(row) => row.id}
          emptyState={
            <EmptyState
              icon={<FiImage aria-hidden="true" />}
              title="No gallery items yet"
              description="Add your first gallery image to get started."
            />
          }
        />
        <Button
          type="button"
          variant="outline"
          onClick={openCreate}
        >
          <FiPlus aria-hidden="true" size={15} />
          Add image
        </Button>
      </EditorCard>

      <EditorCard
        title="Featured stories"
        description="The long-form event stories shown on the gallery page."
      >
        <Repeater
          items={values.featuredStories ?? []}
          onChange={(next) => updateList('featuredStories', next)}
          createItem={() => ({
            id: `story-${Date.now()}`,
            image: '',
            tag: 'Featured Wedding',
            title: '',
            description: '',
            eventType: 'Wedding',
            location: '',
            narrative: '',
            gallery: [],
            highlights: [],
            services: [],
          })}
          addLabel="Add story"
          itemTitle={(item) => item.title || 'New story'}
          renderItem={(item, index, { update: patch }) => (
            <div>
              <FieldRow>
                <TextField
                  label="Tag"
                  value={item.tag ?? ''}
                  onChange={(event) => patch({ tag: event.target.value })}
                />
                <TextField
                  label="Event type"
                  value={item.eventType ?? ''}
                  onChange={(event) => patch({ eventType: event.target.value })}
                />
              </FieldRow>
              <TextField
                label="Title"
                value={item.title ?? ''}
                onChange={(event) => patch({ title: event.target.value })}
              />
              <TextField
                label="Location"
                value={item.location ?? ''}
                onChange={(event) => patch({ location: event.target.value })}
              />
              <TextAreaField
                label="Description"
                value={item.description ?? ''}
                onChange={(event) => patch({ description: event.target.value })}
              />
              <TextAreaField
                label="Narrative"
                rows={6}
                value={item.narrative ?? ''}
                onChange={(event) => patch({ narrative: event.target.value })}
              />
              <ImagePicker
                label="Cover image URL"
                value={item.image ?? ''}
                onChange={(nextUrl) => patch({ image: nextUrl })}
              />
              <Repeater
                items={item.gallery ?? []}
                onChange={(next) => patch({ gallery: next })}
                createItem={() => ''}
                addLabel="Add gallery image"
                itemTitle={(image, imageIndex) => `Gallery image ${imageIndex + 1}`}
                renderItem={(image, imageIndex, { replace }) => (
                  <ImagePicker
                    label={`Gallery image ${imageIndex + 1} URL`}
                    value={image ?? ''}
                    onChange={(nextUrl) => replace(nextUrl)}
                  />
                )}
              />
              <StringsListEditor
                label="Highlights"
                items={item.highlights ?? []}
                onChange={(next) => patch({ highlights: next })}
                addLabel="Add highlight"
                placeholder="e.g. A hand-built floral archway"
              />
              <StringsListEditor
                label="Services used"
                items={item.services ?? []}
                onChange={(next) => patch({ services: next })}
                addLabel="Add service"
                placeholder="e.g. Event Decor Hire"
              />
            </div>
          )}
        />
      </EditorCard>

      <EditorCard
        title="Instagram preview"
        description="The square posts in the follow-us strip."
      >
        <Repeater
          items={values.instagramPosts ?? []}
          onChange={(next) => updateList('instagramPosts', next)}
          createItem={() => ({ id: `post-${Date.now()}`, src: '' })}
          addLabel="Add post"
          itemTitle={(item, itemIndex) => `Post ${itemIndex + 1}`}
          renderItem={(item, itemIndex, { update: patch }) => (
            <ImagePicker
              label={`Post ${itemIndex + 1} image URL`}
              value={item.src ?? ''}
              onChange={(nextUrl) => patch({ src: nextUrl })}
            />
          )}
        />
      </EditorCard>

      <EditorCard
        title="Hero section"
        description="The opening of the gallery page."
      >
        <TextField
          label="Eyebrow"
          value={values.hero?.eyebrow ?? ''}
          onChange={(event) => updateSection('hero', { eyebrow: event.target.value })}
        />
        <TextField
          label="Title"
          value={values.hero?.title ?? ''}
          onChange={(event) => updateSection('hero', { title: event.target.value })}
        />
        <TextAreaField
          label="Description"
          value={values.hero?.description ?? ''}
          onChange={(event) => updateSection('hero', { description: event.target.value })}
        />
        <FieldRow>
          <TextField
            label="Primary button"
            value={values.hero?.primaryCTA ?? ''}
            onChange={(event) => updateSection('hero', { primaryCTA: event.target.value })}
          />
          <TextField
            label="Secondary button"
            value={values.hero?.secondaryCTA ?? ''}
            onChange={(event) => updateSection('hero', { secondaryCTA: event.target.value })}
          />
        </FieldRow>
        <ImagePicker
          label="Background image URL"
          value={values.hero?.backgroundImage ?? ''}
          onChange={(nextUrl) => updateSection('hero', { backgroundImage: nextUrl })}
        />
      </EditorCard>

      <EditorCard
        title="Introduction & Instagram sections"
        description="The philosophy text and follow-us headings."
      >
        <TextField
          label="Intro eyebrow"
          value={values.introduction?.eyebrow ?? ''}
          onChange={(event) => updateSection('introduction', { eyebrow: event.target.value })}
        />
        <TextField
          label="Intro title"
          value={values.introduction?.title ?? ''}
          onChange={(event) => updateSection('introduction', { title: event.target.value })}
        />
        <TextAreaField
          label="Intro text"
          value={values.introduction?.text ?? ''}
          onChange={(event) => updateSection('introduction', { text: event.target.value })}
        />
        <TextField
          label="Instagram eyebrow"
          value={values.instagram?.eyebrow ?? ''}
          onChange={(event) => updateSection('instagram', { eyebrow: event.target.value })}
        />
        <TextField
          label="Instagram handle"
          value={values.instagram?.title ?? ''}
          onChange={(event) => updateSection('instagram', { title: event.target.value })}
        />
      </EditorCard>

      <EditorCard
        title="Featured stories section"
        description="The heading above the featured stories."
      >
        <TextField
          label="Eyebrow"
          value={values.featuredStoriesSection?.eyebrow ?? ''}
          onChange={(event) => updateSection('featuredStoriesSection', { eyebrow: event.target.value })}
        />
        <TextField
          label="Title"
          value={values.featuredStoriesSection?.title ?? ''}
          onChange={(event) => updateSection('featuredStoriesSection', { title: event.target.value })}
        />
      </EditorCard>

      <EditorCard
        title="Call to action"
        description="The closing invitation on the gallery page."
      >
        <TextField
          label="Eyebrow"
          value={values.cta?.eyebrow ?? ''}
          onChange={(event) => updateSection('cta', { eyebrow: event.target.value })}
        />
        <TextField
          label="Title"
          value={values.cta?.title ?? ''}
          onChange={(event) => updateSection('cta', { title: event.target.value })}
        />
        <TextAreaField
          label="Description"
          value={values.cta?.description ?? ''}
          onChange={(event) => updateSection('cta', { description: event.target.value })}
        />
        <FieldRow>
          <TextField
            label="Primary button"
            value={values.cta?.primaryCTA ?? ''}
            onChange={(event) => updateSection('cta', { primaryCTA: event.target.value })}
          />
          <TextField
            label="Secondary button"
            value={values.cta?.secondaryCTA ?? ''}
            onChange={(event) => updateSection('cta', { secondaryCTA: event.target.value })}
          />
        </FieldRow>
        <ImagePicker
          label="Background image URL"
          value={values.cta?.backgroundImage ?? ''}
          onChange={(nextUrl) => updateSection('cta', { backgroundImage: nextUrl })}
        />
      </EditorCard>

      <Modal
        open={Boolean(editingItem)}
        title={items.some((item) => item.id === editingItem?.id) ? 'Edit gallery item' : 'New gallery item'}
        onClose={() => setEditingItem(null)}
        footer={
          <>
            <Button type="button" variant="outline" onClick={() => setEditingItem(null)}>
              Cancel
            </Button>
            <Button
              type="button"
              variant="primary"
              onClick={saveEditing}
              disabled={!editingItem?.title.trim()}
            >
              Save item
            </Button>
          </>
        }
      >
        <TextField
          label="Title"
          value={editingItem?.title ?? ''}
          onChange={(event) => setEditingItem((current) => ({ ...current, title: event.target.value }))}
        />
        <TextField
          label="Subtitle"
          value={editingItem?.subtitle ?? ''}
          onChange={(event) => setEditingItem((current) => ({ ...current, subtitle: event.target.value }))}
        />
        <FieldRow>
          <SelectField
            label="Category"
            value={editingItem?.category ?? ''}
            onChange={(event) => setEditingItem((current) => ({ ...current, category: event.target.value }))}
            options={categories.map((category) => ({ value: category.id, label: category.label }))}
            placeholder="Select a category"
          />
          <SelectField
            label="Grid size"
            value={editingItem?.size ?? 'medium'}
            onChange={(event) => setEditingItem((current) => ({ ...current, size: event.target.value }))}
            options={GALLERY_SIZES}
          />
        </FieldRow>
        <ImagePicker
          label="Image URL"
          value={editingItem?.src ?? ''}
          onChange={(nextUrl) => setEditingItem((current) => ({ ...current, src: nextUrl }))}
        />
      </Modal>

      <ConfirmDialog
        open={Boolean(deletingItem)}
        title="Delete this gallery item?"
        description="This removes the image from your gallery. This cannot be undone."
        confirmLabel="Delete item"
        cancelLabel="Cancel"
        onConfirm={handleDelete}
        onCancel={() => setDeletingItem(null)}
      />

      <SaveBar dirty={dirty} savedAt={savedAt} onSave={save} onReset={reset} />
    </GalleryCMSPage>
  )
}

const StringsListEditor = ({ label, items, onChange, addLabel, placeholder }) => (
  <Repeater
    items={items}
    onChange={onChange}
    createItem={() => ''}
    addLabel={addLabel}
    itemTitle={(item, itemIndex) => item || `${label} ${itemIndex + 1}`}
    renderItem={(item, itemIndex, { replace }) => (
      <TextField
        label={`${label} ${itemIndex + 1}`}
        value={item ?? ''}
        onChange={(event) => replace(event.target.value)}
        placeholder={placeholder}
      />
    )}
  />
)

export default GalleryCMS