import AdminPageHeader from '../../../components/admin/AdminPageHeader/index.js'
import EditorCard from '../../../components/admin/EditorCard/index.js'
import ImagePicker from '../../../components/admin/ImagePicker/index.js'
import SaveBar from '../../../components/admin/SaveBar/index.js'
import { TextAreaField, TextField } from '../../../components/FormField/index.js'
import { adminPageMeta } from '../../../constants/admin.js'
import { useContent } from '../../../hooks/useContent.js'
import { SEOPage } from './SEO.styles.js'

const SEO_PAGES = [
  { key: 'home', label: 'Homepage' },
  { key: 'about', label: 'About' },
  { key: 'services', label: 'Services' },
  { key: 'gallery', label: 'Gallery' },
  { key: 'contact', label: 'Contact' },
]

function SEO() {
  const { values, savedAt, dirty, update, save, reset } = useContent('seo')

  const updateSection = (sectionKey, patch) =>
    update((current) => ({ ...current, [sectionKey]: { ...current[sectionKey], ...patch } }))

  return (
    <SEOPage>
      <AdminPageHeader {...adminPageMeta.seo} />

      <EditorCard
        title="Site-wide metadata"
        description="The default title and description shown when no page metadata applies."
        defaultOpen
      >
        <TextField
          label="Site title"
          value={values.site?.title ?? ''}
          onChange={(event) => updateSection('site', { title: event.target.value })}
        />
        <TextAreaField
          label="Site description"
          value={values.site?.description ?? ''}
          onChange={(event) => updateSection('site', { description: event.target.value })}
        />
      </EditorCard>

      {SEO_PAGES.map((page) => {
        const section = values[page.key] ?? {}
        return (
          <EditorCard
            key={page.key}
            title={page.label}
            description={`How the ${page.label.toLowerCase()} page appears in search results.`}
            defaultOpen
          >
            <TextField
              label="SEO title"
              value={section.title ?? ''}
              onChange={(event) => updateSection(page.key, { title: event.target.value })}
            />
            <TextAreaField
              label="SEO description"
              rows={4}
              value={section.description ?? ''}
              onChange={(event) => updateSection(page.key, { description: event.target.value })}
            />
            <TextField
              label="URL"
              type="url"
              value={section.url ?? ''}
              onChange={(event) => updateSection(page.key, { url: event.target.value })}
            />
            <ImagePicker
              label="Share image URL"
              value={section.image ?? ''}
              onChange={(nextUrl) => updateSection(page.key, { image: nextUrl })}
            />
          </EditorCard>
        )
      })}

      <SaveBar dirty={dirty} savedAt={savedAt} onSave={save} onReset={reset} />
    </SEOPage>
  )
}

export default SEO