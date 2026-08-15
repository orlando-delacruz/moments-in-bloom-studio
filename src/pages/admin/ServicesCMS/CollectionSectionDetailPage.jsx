import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useMemo, useRef, useState } from 'react'
import ConfirmDialog from '../../../components/admin/ConfirmDialog/index.js'
import ContentDetailHeader from '../../../components/admin/ContentDetailHeader/index.js'
import ContentFormSection from '../../../components/admin/ContentFormSection/index.js'
import EmptyState from '../../../components/admin/EmptyState/index.js'
import { TextAreaField, TextField } from '../../../components/FormField/index.js'
import ImagePicker from '../../../components/admin/ImagePicker/index.js'
import Repeater from '../../../components/admin/Repeater/index.js'
import SaveActions from '../../../components/admin/SaveActions/index.js'
import Toast from '../../../components/admin/Toast/index.js'
import Button from '../../../components/Button/index.js'
import { useContent } from '../../../hooks/useContent.js'
import { useUnsavedGuard } from '../../../hooks/useUnsavedGuard.jsx'
import { CollectionSectionDetailStyles } from './CollectionSectionDetailPage.styles.js'

const clone = (value) => (value == null ? null : JSON.parse(JSON.stringify(value)))

const createInitial = () => ({
  id: `section-${Date.now()}`,
  title: '',
  subtitle: '',
  description: '',
  featuredItem: {
    name: '',
    tagline: '',
    description: '',
    options: [],
    gallery: [],
  },
})

function CollectionSectionDetailPage() {
  const { collectionId, sectionId } = useParams()
  const navigate = useNavigate()
  const { values, savedAt, update, save } = useContent('services')

  const collection = useMemo(
    () => (values.serviceCollections ?? []).find((entry) => entry.id === collectionId),
    [values, collectionId],
  )
  const creating = sectionId === 'new'
  const existing = useMemo(
    () => (creating ? undefined : collection?.sections?.find((entry) => entry.id === sectionId)),
    [collection, sectionId, creating],
  )

  const [draft, setDraft] = useState(() => clone(creating ? createInitial() : existing ?? null))
  const [dirty, setDirty] = useState(false)
  const syncedRef = useRef({ existing, creating })

  useEffect(() => {
    const previous = syncedRef.current
    if (previous.existing !== existing || previous.creating !== creating) {
      syncedRef.current = { existing, creating }
      setDraft(clone(creating ? createInitial() : existing ?? null))
      setDirty(false)
    }
  }, [existing, creating])

  const [errors, setErrors] = useState({})
  const [toast, setToast] = useState(null)
  const [confirmingDelete, setConfirmingDelete] = useState(false)
  const [saving, setSaving] = useState(false)
  const { guard, GuardDialog } = useUnsavedGuard({ active: dirty })

  useEffect(() => {
    if (!toast) return undefined
    const timer = window.setTimeout(() => setToast(null), 3200)
    return () => window.clearTimeout(timer)
  }, [toast])

  const patch = (next) => {
    setDraft(next)
    setDirty(true)
  }
  const patchFeatured = (next) => patch({ ...draft, featuredItem: { ...draft.featuredItem, ...next } })

  const backPath = `/admin/services/serviceCollections/${collectionId}`

  const handleSave = async () => {
    const nextErrors = {}
    if (!draft?.title?.trim()) {
      nextErrors.title = 'A section title is required.'
    }
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return
    setSaving(true)
    await new Promise((resolve) => setTimeout(resolve, 350))
    const sections = collection?.sections ?? []
    const alreadyExists = sections.some((entry) => entry.id === draft.id)
    const nextSections = alreadyExists
      ? sections.map((entry) => (entry.id === draft.id ? draft : entry))
      : [...sections, draft]
    const updatedCollections = (values.serviceCollections ?? []).map((entry) =>
      entry.id === collectionId ? { ...entry, sections: nextSections } : entry,
    )
    update((current) => ({ ...current, serviceCollections: updatedCollections }))
    save('services')
    setDirty(false)
    setSaving(false)
    setToast({ tone: 'success', message: 'Changes saved successfully.' })
    if (creating) {
      navigate(`${backPath}/sections/${draft.id}`, { state: { mibSaved: true } })
    }
  }

  const handleDelete = () => {
    const nextSections = (collection?.sections ?? []).filter((entry) => entry.id !== sectionId)
    const updatedCollections = (values.serviceCollections ?? []).map((entry) =>
      entry.id === collectionId ? { ...entry, sections: nextSections } : entry,
    )
    update((current) => ({ ...current, serviceCollections: updatedCollections }))
    save('services')
    setConfirmingDelete(false)
    navigate(backPath)
  }

  if (!creating && !collection) {
    return (
      <CollectionSectionDetailStyles.Page>
        <EmptyState
          title="Collection not found"
          description="The collection you are trying to edit no longer exists."
          actions={
            <Button onClick={() => navigate('/admin/services')}>Back to Services</Button>
          }
        />
      </CollectionSectionDetailStyles.Page>
    )
  }

  return (
    <CollectionSectionDetailStyles.Page>
      <ContentDetailHeader
        backTo={backPath}
        backLabel="Back to collection"
        eyebrow={collection?.title ?? 'Collection'}
        title={creating ? 'New section' : (draft?.title || 'Untitled section')}
        lastUpdated={creating ? undefined : savedAt}
        actions={
          !creating ? (
            <Button variant="outline" onClick={() => setConfirmingDelete(true)}>
              Delete section
            </Button>
          ) : null
        }
      />
      <ContentFormSection
        title="Section details"
        description="The title and intro for this collection section."
      >
        <TextField
          label="Title"
          value={draft?.title ?? ''}
          onChange={(event) => patch({ ...draft, title: event.target.value })}
          error={errors.title}
        />
        <TextField
          label="Subtitle"
          value={draft?.subtitle ?? ''}
          onChange={(event) => patch({ ...draft, subtitle: event.target.value })}
        />
        <TextAreaField
          label="Description"
          rows={4}
          value={draft?.description ?? ''}
          onChange={(event) => patch({ ...draft, description: event.target.value })}
        />
      </ContentFormSection>
      <ContentFormSection
        title="Featured item"
        description="The hero product or experience within this section."
      >
        <TextField
          label="Item name"
          value={draft?.featuredItem?.name ?? ''}
          onChange={(event) => patchFeatured({ name: event.target.value })}
        />
        <TextField
          label="Item tagline"
          value={draft?.featuredItem?.tagline ?? ''}
          onChange={(event) => patchFeatured({ tagline: event.target.value })}
        />
        <TextField
          label="Dimensions"
          value={draft?.featuredItem?.dimensions ?? ''}
          onChange={(event) => patchFeatured({ dimensions: event.target.value })}
          placeholder="2m Height x 1m Width"
        />
        <TextAreaField
          label="Item description"
          rows={4}
          value={draft?.featuredItem?.description ?? ''}
          onChange={(event) => patchFeatured({ description: event.target.value })}
        />
        <ImagePicker
          label="Featured image URL"
          value={draft?.featuredItem?.image ?? ''}
          onChange={(image) => patchFeatured({ image })}
        />
      </ContentFormSection>
      <ContentFormSection
        title="Options"
        description="The variations or configurations offered within this featured item."
      >
        <Repeater
          items={draft?.featuredItem?.options ?? []}
          onChange={(options) => patchFeatured({ options })}
          createItem={() => ({ name: 'New option', specs: '', desc: '', image: '' })}
          addLabel="Add option"
          itemTitle={(item) => item.name || 'New option'}
          renderItem={(item, index, { update: patchItem }) => (
            <>
              <TextField
                label="Option name"
                value={item.name ?? ''}
                onChange={(event) => patchItem({ name: event.target.value })}
              />
              <TextField
                label="Specs"
                value={item.specs ?? ''}
                onChange={(event) => patchItem({ specs: event.target.value })}
                placeholder="2.1m Height - High-Impact Statement"
              />
              <TextAreaField
                label="Description"
                rows={3}
                value={item.desc ?? ''}
                onChange={(event) => patchItem({ desc: event.target.value })}
              />
              <ImagePicker
                label="Option image URL"
                value={item.image ?? ''}
                onChange={(image) => patchItem({ image })}
              />
            </>
          )}
        />
      </ContentFormSection>
      <ContentFormSection
        title="Gallery"
        description="Supporting images shown alongside this section."
      >
        <Repeater
          items={draft?.featuredItem?.gallery ?? []}
          onChange={(gallery) => patchFeatured({ gallery })}
          createItem={() => ({ src: '', title: '' })}
          addLabel="Add image"
          itemTitle={(item) => item.title || 'New image'}
          renderItem={(item, index, { update: patchItem }) => (
            <>
              <TextField
                label="Image title"
                value={item.title ?? ''}
                onChange={(event) => patchItem({ title: event.target.value })}
              />
              <ImagePicker
                label="Image URL"
                value={item.src ?? ''}
                onChange={(src) => patchItem({ src })}
              />
            </>
          )}
        />
      </ContentFormSection>
      <SaveActions
        dirty={dirty}
        saving={saving}
        onCancel={() => navigate(backPath)}
        onSave={handleSave}
      />
      {GuardDialog}
      {toast && (
        <Toast
          visible
          tone={toast.tone}
          message={toast.message}
        />
      )}
      <ConfirmDialog
        open={confirmingDelete}
        title={`Delete ${draft?.title || 'this section'}?`}
        description="This cannot be undone."
        confirmLabel="Delete section"
        tone="danger"
        onConfirm={handleDelete}
        onCancel={() => setConfirmingDelete(false)}
      />
      {guard}
    </CollectionSectionDetailStyles.Page>
  )
}

export default CollectionSectionDetailPage