import { Link, useNavigate, useParams } from 'react-router-dom'
import { useEffect, useMemo, useState } from 'react'
import ConfirmDialog from '../../../components/admin/ConfirmDialog/index.js'
import ContentCard from '../../../components/admin/ContentCard/index.js'
import ContentDetailHeader from '../../../components/admin/ContentDetailHeader/index.js'
import ContentFormSection from '../../../components/admin/ContentFormSection/index.js'
import ContentList from '../../../components/admin/ContentList/index.js'
import EmptyState from '../../../components/admin/EmptyState/index.js'
import { FieldRow, SelectField, TextAreaField, TextField } from '../../../components/FormField/index.js'
import ImagePicker from '../../../components/admin/ImagePicker/index.js'
import SaveActions from '../../../components/admin/SaveActions/index.js'
import ToggleSwitch from '../../../components/admin/ToggleSwitch/index.js'
import Toast from '../../../components/admin/Toast/index.js'
import Button from '../../../components/Button/index.js'
import { useContentDetail } from '../../../hooks/useContentDetail.js'
import { useUnsavedGuard } from '../../../hooks/useUnsavedGuard.jsx'
import { servicesSections } from './sections.jsx'
import { CollectionDetailStyles } from './CollectionDetailPage.styles.js'

const COLLECTION_TYPES = ['collection', 'sub-brand']

const managedElsewhere = {
  'luxe-photobooth': {
    note: 'The packages and highlights for this collection are managed in their own page sections.',
    links: [
      { label: 'Photobooth packages', to: '/admin/services/photoboothPackages' },
      { label: 'Photobooth highlights', to: '/admin/services/photoboothHighlights' },
    ],
  },
  'blissful-nest': {
    note: 'The introduction and prize options for this collection are managed in their own page sections.',
    links: [
      { label: 'Blissful Nest introduction', to: '/admin/services/blissfulNestIntro' },
      { label: 'Blissful Nest prize options', to: '/admin/services/blissfulNestPackages' },
    ],
  },
}

function CollectionDetailPage() {
  const { collectionId } = useParams()
  const navigate = useNavigate()
  const section = servicesSections.find((entry) => entry.key === 'serviceCollections')
  const initialValue = useMemo(() => section.createInitial?.(), [section])
  const { draft, dirty, savedAt, creating, patch, saveDraft, removeItem } = useContentDetail(
    'services',
    { listKey: 'serviceCollections', itemId: collectionId, initialValue },
  )
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

  const collection = draft
  const managedBy = collection?.id ? managedElsewhere[collection.id] : undefined
  const hasSections = Boolean(collection?.sections?.length)

  const handleSave = async () => {
    const nextErrors = section.validate?.(draft) ?? {}
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return
    setSaving(true)
    await new Promise((resolve) => setTimeout(resolve, 350))
    saveDraft()
    setSaving(false)
    setToast({ tone: 'success', message: 'Changes saved successfully.' })
    if (creating) {
      navigate(`/admin/services/serviceCollections/${draft.id}`, { state: { mibSaved: true } })
    }
  }

  const handleDelete = () => {
    removeItem()
    setConfirmingDelete(false)
    navigate('/admin/services')
  }

  return (
    <CollectionDetailStyles.Page>
      <ContentDetailHeader
        backTo="/admin/services"
        backLabel="Back to Services"
        eyebrow="Collections"
        title={creating ? 'New collection' : (collection?.title || 'Untitled collection')}
        status={section.itemStatus?.(collection)}
        lastUpdated={creating ? undefined : savedAt}
        actions={
          !creating ? (
            <Button
              variant="outline"
              onClick={() => setConfirmingDelete(true)}
            >
              Delete collection
            </Button>
          ) : null
        }
      />
      <ContentFormSection
        title="Collection overview"
        description="How this collection appears in the services navigation and on its page."
      >
        <FieldRow>
          <SelectField
            label="Type"
            value={collection?.type ?? 'collection'}
            onChange={(event) => patch({ ...collection, type: event.target.value })}
            options={COLLECTION_TYPES}
          />
          <TextField
            label="Order"
            type="number"
            value={collection?.order ?? 1}
            onChange={(event) => patch({ ...collection, order: Number(event.target.value) })}
          />
        </FieldRow>
        <TextField
          label="Title"
          value={collection?.title ?? ''}
          onChange={(event) => patch({ ...collection, title: event.target.value })}
          error={errors.title}
        />
        <FieldRow>
          <TextField
            label="Navigation subtitle"
            value={collection?.navSub ?? ''}
            onChange={(event) => patch({ ...collection, navSub: event.target.value })}
          />
          <TextField
            label="Navigation meta"
            value={collection?.navMeta ?? ''}
            onChange={(event) => patch({ ...collection, navMeta: event.target.value })}
            placeholder="4 Collections"
          />
        </FieldRow>
        <TextAreaField
          label="Description"
          rows={4}
          value={collection?.description ?? ''}
          onChange={(event) => patch({ ...collection, description: event.target.value })}
        />
        <TextField
          label="Tagline"
          value={collection?.tagline ?? ''}
          onChange={(event) => patch({ ...collection, tagline: event.target.value })}
        />
        <ToggleSwitch
          label="Featured"
          hint="Shown as a featured collection across the site."
          checked={Boolean(collection?.featured)}
          onChange={(checked) => patch({ ...collection, featured: checked })}
        />
        <ImagePicker
          label="Cover image URL"
          value={collection?.coverImage?.src ?? ''}
          onChange={(src) => patch({ ...collection, coverImage: { ...collection.coverImage, src } })}
          alt={collection?.coverImage?.alt ?? ''}
          onAltChange={(event) =>
            patch({ ...collection, coverImage: { ...collection.coverImage, alt: event.target.value } })
          }
        />
      </ContentFormSection>
      {hasSections && (
        <ContentList
          title={`Sections within ${collection?.title ?? 'this collection'}`}
          description="Click a section to review and update its featured item and gallery."
          actions={
            <Button
              onClick={() => navigate(`/admin/services/serviceCollections/${collection.id}/sections/new`)}
            >
              Add section
            </Button>
          }
        >
          {collection.sections.map((entry, index) => (
            <ContentCard
              key={entry.id ?? index}
              to={`/admin/services/serviceCollections/${collection.id}/sections/${entry.id}`}
              title={entry.title}
              description={entry.description}
              meta={[entry.subtitle, entry.featuredItem?.name].filter(Boolean)}
              lastUpdated={savedAt}
            />
          ))}
        </ContentList>
      )}
      {!hasSections && managedBy && (
        <ContentFormSection
          title="Collection sections"
          description={managedBy.note}
        >
          <EmptyState
            title={collection?.type === 'sub-brand' ? 'Managed separately' : 'Add a section'}
            description={
              collection?.type === 'sub-brand'
                ? 'This sub-brand keeps its experience content in dedicated page sections.'
                : 'No sections yet — add the first one to start building this collection.'
            }
            actions={
              collection?.type === 'sub-brand' ? (
                managedBy.links.map((link) => (
                  <Button key={link.to} variant="outline" as={Link} to={link.to}>
                    {link.label}
                  </Button>
                ))
              ) : (
                <Button onClick={() => navigate(`/admin/services/serviceCollections/${collection.id}/sections/new`)}>
                  Add section
                </Button>
              )
            }
          />
        </ContentFormSection>
      )}
      <SaveActions
        dirty={dirty}
        saving={saving}
        onCancel={() => navigate('/admin/services')}
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
        title={`Delete ${collection?.title ?? 'this collection'}?`}
        description="This cannot be undone."
        confirmLabel="Delete collection"
        tone="danger"
        onConfirm={handleDelete}
        onCancel={() => setConfirmingDelete(false)}
      />
      {guard}
    </CollectionDetailStyles.Page>
  )
}

export default CollectionDetailPage