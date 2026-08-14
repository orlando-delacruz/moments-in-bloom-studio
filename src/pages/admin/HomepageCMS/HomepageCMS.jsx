import AdminPageHeader from '../../../components/admin/AdminPageHeader/index.js'
import EditorCard from '../../../components/admin/EditorCard/index.js'
import ImagePicker from '../../../components/admin/ImagePicker/index.js'
import Repeater from '../../../components/admin/Repeater/index.js'
import SaveBar from '../../../components/admin/SaveBar/index.js'
import ToggleSwitch from '../../../components/admin/ToggleSwitch/index.js'
import { FieldRow, SelectField, TextAreaField, TextField } from '../../../components/FormField/index.js'
import { adminPageMeta } from '../../../constants/admin.js'
import { useContent } from '../../../hooks/useContent.js'
import { HomepageCMSPage } from './HomepageCMS.styles.js'

const GALLERY_VARIANTS = ['feature', 'portrait', 'detail']

function HomepageCMS() {
  const { values, savedAt, dirty, update, save, reset } = useContent('homepage')

  const updateSection = (sectionKey, patch) =>
    update((current) => ({ ...current, [sectionKey]: { ...current[sectionKey], ...patch } }))

  const updateList = (sectionKey, nextItems) =>
    update((current) => ({ ...current, [sectionKey]: nextItems }))

  return (
    <HomepageCMSPage>
      <AdminPageHeader {...adminPageMeta.homepage} />

      <EditorCard
        title="Hero"
        description="The very first words visitors see on your homepage."
        defaultOpen
      >
        <TextField
          label="Eyebrow"
          value={values.hero?.eyebrow ?? ''}
          onChange={(event) => updateSection('hero', { eyebrow: event.target.value })}
        />
        <TextField
          label="Headline"
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
            value={values.hero?.primaryCta ?? ''}
            onChange={(event) => updateSection('hero', { primaryCta: event.target.value })}
          />
          <TextField
            label="Secondary button"
            value={values.hero?.secondaryCta ?? ''}
            onChange={(event) => updateSection('hero', { secondaryCta: event.target.value })}
          />
        </FieldRow>
        <ImagePicker
          label="Hero image URL"
          value={values.hero?.image?.src ?? ''}
          onChange={(nextUrl) => updateSection('hero', { image: { ...values.hero.image, src: nextUrl } })}
          alt={values.hero?.image?.alt ?? ''}
          onAltChange={(event) => updateSection('hero', { image: { ...values.hero.image, alt: event.target.value } })}
          credit={values.hero?.image?.credit ?? ''}
          onCreditChange={(event) => updateSection('hero', { image: { ...values.hero.image, credit: event.target.value } })}
        />
      </EditorCard>

      <EditorCard
        title="Trusted-by marks"
        description="The short phrases shown near the hero, e.g. 'Weddings'."
      >
        <Repeater
          items={values.trustMarks ?? []}
          onChange={(next) => updateList('trustMarks', next)}
          createItem={() => ''}
          addLabel="Add mark"
          itemTitle={(item) => item || 'New mark'}
          renderItem={(item, index, { replace }) => (
            <TextField
              label="Mark text"
              value={item ?? ''}
              onChange={(event) => replace(event.target.value)}
              placeholder="e.g. Weddings"
            />
          )}
        />
      </EditorCard>

      <EditorCard
        title="Services"
        description="The three service cards that link to your services page."
      >
        <Repeater
          items={values.services ?? []}
          onChange={(next) => updateList('services', next)}
          createItem={() => ({
            id: `service-${Date.now()}`,
            eyebrow: 'New service',
            title: 'New service',
            description: '',
            path: '/services',
            offset: false,
            image: { src: '', alt: '', credit: '' },
          })}
          addLabel="Add service"
          itemTitle={(item) => item.title || 'New service'}
          renderItem={(item, index, { update: patch }) => (
            <div>
              <TextField
                label="Eyebrow"
                value={item.eyebrow ?? ''}
                onChange={(event) => patch({ eyebrow: event.target.value })}
              />
              <TextField
                label="Title"
                value={item.title ?? ''}
                onChange={(event) => patch({ title: event.target.value })}
              />
              <TextAreaField
                label="Description"
                value={item.description ?? ''}
                onChange={(event) => patch({ description: event.target.value })}
              />
              <ToggleSwitch
                label="Offset layout"
                hint="Alternates the card layout on the homepage."
                checked={item.offset}
                onChange={(offset) => patch({ offset })}
              />
              <ImagePicker
                label="Card image URL"
                value={item.image?.src ?? ''}
                onChange={(nextUrl) => patch({ image: { ...item.image, src: nextUrl } })}
                alt={item.image?.alt ?? ''}
                onAltChange={(event) => patch({ image: { ...item.image, alt: event.target.value } })}
                credit={item.image?.credit ?? ''}
                onCreditChange={(event) => patch({ image: { ...item.image, credit: event.target.value } })}
              />
            </div>
          )}
        />
      </EditorCard>

      <EditorCard
        title="Gallery preview"
        description="The three images shown in the homepage gallery strip."
      >
        <Repeater
          items={values.galleryItems ?? []}
          onChange={(next) => updateList('galleryItems', next)}
          createItem={() => ({
            id: `gallery-${Date.now()}`,
            variant: 'detail',
            image: { src: '', alt: '', credit: '' },
          })}
          addLabel="Add image"
          itemTitle={(item, index) => item.image?.alt?.slice(0, 40) || `Image ${index + 1}`}
          renderItem={(item, index, { update: patch }) => (
            <div>
              <SelectField
                label="Layout variant"
                value={item.variant ?? 'detail'}
                onChange={(event) => patch({ variant: event.target.value })}
                options={GALLERY_VARIANTS}
              />
              <ImagePicker
                label="Image URL"
                value={item.image?.src ?? ''}
                onChange={(nextUrl) => patch({ image: { ...item.image, src: nextUrl } })}
                alt={item.image?.alt ?? ''}
                onAltChange={(event) => patch({ image: { ...item.image, alt: event.target.value } })}
                credit={item.image?.credit ?? ''}
                onCreditChange={(event) => patch({ image: { ...item.image, credit: event.target.value } })}
              />
            </div>
          )}
        />
      </EditorCard>

      <EditorCard
        title="Why choose us"
        description="The numbered reasons your clients choose Moments in Blooms."
      >
        <Repeater
          items={values.reasons ?? []}
          onChange={(next) => updateList('reasons', next)}
          createItem={() => ({ number: '06', title: 'New reason', description: '' })}
          addLabel="Add reason"
          itemTitle={(item) => item.title || 'New reason'}
          renderItem={(item, index, { update: patch }) => (
            <div>
              <TextField
                label="Number"
                value={item.number ?? ''}
                onChange={(event) => patch({ number: event.target.value })}
              />
              <TextField
                label="Title"
                value={item.title ?? ''}
                onChange={(event) => patch({ title: event.target.value })}
              />
              <TextAreaField
                label="Description"
                value={item.description ?? ''}
                onChange={(event) => patch({ description: event.target.value })}
              />
            </div>
          )}
        />
      </EditorCard>

      <EditorCard
        title="Testimonials"
        description="The client quotes shown on the homepage."
      >
        <Repeater
          items={values.testimonials ?? []}
          onChange={(next) => updateList('testimonials', next)}
          createItem={() => ({
            quote: '',
            name: 'A happy client',
            event: 'Wedding celebration',
            location: 'Melbourne, VIC',
            image: { src: '', alt: '' },
          })}
          addLabel="Add testimonial"
          itemTitle={(item) => item.name || 'New testimonial'}
          renderItem={(item, index, { update: patch }) => (
            <div>
              <TextAreaField
                label="Quote"
                value={item.quote ?? ''}
                onChange={(event) => patch({ quote: event.target.value })}
              />
              <FieldRow>
                <TextField
                  label="Name"
                  value={item.name ?? ''}
                  onChange={(event) => patch({ name: event.target.value })}
                />
                <TextField
                  label="Event"
                  value={item.event ?? ''}
                  onChange={(event) => patch({ event: event.target.value })}
                />
              </FieldRow>
              <TextField
                label="Location"
                value={item.location ?? ''}
                onChange={(event) => patch({ location: event.target.value })}
              />
              <ImagePicker
                label="Portrait image URL"
                value={item.image?.src ?? ''}
                onChange={(nextUrl) => patch({ image: { ...item.image, src: nextUrl } })}
                alt={item.image?.alt ?? ''}
                onAltChange={(event) => patch({ image: { ...item.image, alt: event.target.value } })}
              />
            </div>
          )}
        />
      </EditorCard>

      <EditorCard
        title="Instagram preview"
        description="The six images in the follow-us strip."
      >
        <Repeater
          items={values.instagramItems ?? []}
          onChange={(next) => updateList('instagramItems', next)}
          createItem={() => ({ id: `insta-${Date.now()}`, image: { src: '', alt: '', credit: '' } })}
          addLabel="Add image"
          itemTitle={(item, index) => item.image?.alt?.slice(0, 40) || `Image ${index + 1}`}
          renderItem={(item, index, { update: patch }) => (
            <ImagePicker
              label="Image URL"
              value={item.image?.src ?? ''}
              onChange={(nextUrl) => patch({ image: { ...item.image, src: nextUrl } })}
              alt={item.image?.alt ?? ''}
              onAltChange={(event) => patch({ image: { ...item.image, alt: event.target.value } })}
              credit={item.image?.credit ?? ''}
              onCreditChange={(event) => patch({ image: { ...item.image, credit: event.target.value } })}
            />
          )}
        />
      </EditorCard>

      <EditorCard
        title="Call to action"
        description="The closing invitation at the bottom of the homepage."
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
            value={values.cta?.primaryCta ?? ''}
            onChange={(event) => updateSection('cta', { primaryCta: event.target.value })}
          />
          <TextField
            label="Secondary button"
            value={values.cta?.secondaryCta ?? ''}
            onChange={(event) => updateSection('cta', { secondaryCta: event.target.value })}
          />
        </FieldRow>
      </EditorCard>

      <EditorCard
        title="Search & sharing"
        description="How this page appears in search results and when shared."
      >
        <TextField
          label="SEO title"
          value={values.seo?.title ?? ''}
          onChange={(event) => updateSection('seo', { title: event.target.value })}
        />
        <TextAreaField
          label="SEO description"
          value={values.seo?.description ?? ''}
          onChange={(event) => updateSection('seo', { description: event.target.value })}
        />
        <TextField
          label="URL"
          type="url"
          value={values.seo?.url ?? ''}
          onChange={(event) => updateSection('seo', { url: event.target.value })}
        />
        <ImagePicker
          label="Share image URL"
          value={values.seo?.image ?? ''}
          onChange={(nextUrl) => updateSection('seo', { image: nextUrl })}
        />
      </EditorCard>

      <SaveBar dirty={dirty} savedAt={savedAt} onSave={save} onReset={reset} />
    </HomepageCMSPage>
  )
}

export default HomepageCMS