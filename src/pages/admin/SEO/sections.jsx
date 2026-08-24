/* eslint-disable react-refresh/only-export-components */
import { TextAreaField, TextField } from '../../../components/FormField/index.js'
import ImageField from '../../../components/admin/ImageField/index.js'

function SeoForm({ value, onChange }) {
  const patch = (next) => onChange({ ...value, ...next })
  return (
    <>
      <TextField
        label="SEO title"
        value={value?.title ?? ''}
        onChange={(event) => patch({ title: event.target.value })}
      />
      <TextAreaField
        label="SEO description"
        rows={4}
        value={value?.description ?? ''}
        onChange={(event) => patch({ description: event.target.value })}
      />
      <TextField
        label="Keywords"
        value={value?.keywords ?? ''}
        onChange={(event) => patch({ keywords: event.target.value })}
        hint="Comma-separated, e.g. wedding styling Melbourne, florals"
      />
      <TextField
        label="URL"
        type="url"
        value={value?.url ?? ''}
        onChange={(event) => patch({ url: event.target.value })}
      />
      <ImageField
        label="Share image"
        value={value?.image ?? ''}
        onChange={(image) => patch({ image })}
      />
    </>
  )
}

export const seoSections = [
  {
    key: 'site',
    title: 'Site-wide metadata',
    description: 'The default title and description shown when no page metadata applies.',
    type: 'object',
    form: SeoForm,
  },
  {
    key: 'home',
    title: 'Homepage',
    description: 'How the homepage appears in search results.',
    type: 'object',
    form: SeoForm,
  },
  {
    key: 'about',
    title: 'About',
    description: 'How the About page appears in search results.',
    type: 'object',
    form: SeoForm,
  },
  {
    key: 'services',
    title: 'Services',
    description: 'How the Services page appears in search results.',
    type: 'object',
    form: SeoForm,
  },
  {
    key: 'gallery',
    title: 'Gallery',
    description: 'How the Gallery page appears in search results.',
    type: 'object',
    form: SeoForm,
  },
  {
    key: 'contact',
    title: 'Contact',
    description: 'How the Contact page appears in search results.',
    type: 'object',
    form: SeoForm,
  },
  {
    key: 'faqs',
    title: 'FAQs',
    description: 'How the FAQs page appears in search results.',
    type: 'object',
    form: SeoForm,
  },
]