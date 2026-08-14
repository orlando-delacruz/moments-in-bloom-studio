import AdminPageHeader from '../../../components/admin/AdminPageHeader/index.js'
import EditorCard, { EditorCardCount } from '../../../components/admin/EditorCard/index.js'
import ImagePicker from '../../../components/admin/ImagePicker/index.js'
import Repeater from '../../../components/admin/Repeater/index.js'
import SaveBar from '../../../components/admin/SaveBar/index.js'
import ToggleSwitch from '../../../components/admin/ToggleSwitch/index.js'
import { FieldRow, SelectField, TextAreaField, TextField } from '../../../components/FormField/index.js'
import { adminPageMeta } from '../../../constants/admin.js'
import { useContent } from '../../../hooks/useContent.js'
import { MiniEditorBlock, ServicesCMSPage } from './ServicesCMS.styles.js'

const INCLUSION_ICONS = ['FiCompass', 'FiClock', 'FiFeather', 'FiAward', 'FiHeart', 'FiLayers', 'FiShield', 'FiSparkles', 'FiGift', 'FiSun']
const GALLERY_VARIANTS = ['large', 'tall', 'square']
const COLLECTION_TYPES = ['collection', 'sub-brand']

const CtaPair = ({ value, onChange }) => (
  <TextField
    label="Button label"
    value={value?.label ?? ''}
    onChange={(event) => onChange({ ...value, label: event.target.value })}
  />
)

const PlainCtaPair = ({ value, onChange }) => (
  <FieldRow>
    <TextField
      label="Primary button"
      value={value?.primaryCta ?? ''}
      onChange={(event) => onChange({ ...value, primaryCta: event.target.value })}
    />
    <TextField
      label="Secondary button"
      value={value?.secondaryCta ?? ''}
      onChange={(event) => onChange({ ...value, secondaryCta: event.target.value })}
    />
  </FieldRow>
)

const StringsRepeater = ({ items, onChange, addLabel, label, placeholder }) => (
  <Repeater
    items={items}
    onChange={onChange}
    createItem={() => ''}
    addLabel={addLabel}
    itemTitle={(item, index) => item || `${label} ${index + 1}`}
    renderItem={(item, index, { replace }) => (
      <TextField
        label={`${label} ${index + 1}`}
        value={item ?? ''}
        onChange={(event) => replace(event.target.value)}
        placeholder={placeholder}
      />
    )}
  />
)

const PackagesRepeater = ({ items, onChange, createItem, itemTitle }) => (
  <Repeater
    items={items}
    onChange={onChange}
    createItem={createItem}
    addLabel="Add package"
    itemTitle={itemTitle}
    renderItem={(item, index, { update: patch }) => (
      <div>
        <FieldRow>
          <TextField
            label="Name"
            value={item.name ?? ''}
            onChange={(event) => patch({ name: event.target.value })}
          />
          <TextField
            label="Price"
            value={item.price ?? ''}
            onChange={(event) => patch({ price: event.target.value })}
            placeholder="$600"
          />
        </FieldRow>
        <TextField
          label="Tagline"
          value={item.tagline ?? ''}
          onChange={(event) => patch({ tagline: event.target.value })}
        />
        <FieldRow>
          <TextField
            label="Hire duration"
            value={item.hireDuration ?? ''}
            onChange={(event) => patch({ hireDuration: event.target.value })}
          />
          <TextField
            label="Badge"
            value={item.badge ?? ''}
            onChange={(event) => patch({ badge: event.target.value })}
          />
        </FieldRow>
        <TextAreaField
          label="Description"
          value={item.description ?? ''}
          onChange={(event) => patch({ description: event.target.value })}
        />
        <ToggleSwitch
          label="Mark as popular"
          hint="Highlights this package on the services page."
          checked={item.popular}
          onChange={(popular) => patch({ popular })}
        />
        <StringsRepeater
          items={item.inclusions ?? []}
          onChange={(next) => patch({ inclusions: next })}
          addLabel="Add inclusion"
          label="Inclusion"
          placeholder="e.g. Unlimited prints"
        />
        <StringsRepeater
          items={item.addOns ?? []}
          onChange={(next) => patch({ addOns: next })}
          addLabel="Add add-on"
          label="Add-on"
          placeholder="e.g. Additional hour $100"
        />
        <TextField
          label="Travel notes"
          value={item.travelNotes ?? ''}
          onChange={(event) => patch({ travelNotes: event.target.value })}
        />
        <TextField
          label="Button text"
          value={item.ctaText ?? ''}
          onChange={(event) => patch({ ctaText: event.target.value })}
        />
      </div>
    )}
  />
)

const HighlightsEditor = ({ value, onChange }) => (
  <>
    <MiniEditorBlock title="Frames feature" description="Australia's-first take-home photobooth frames.">
      <TextField
        label="Badge"
        value={value?.framesFeature?.badge ?? ''}
        onChange={(event) => onChange({ ...value, framesFeature: { ...value.framesFeature, badge: event.target.value } })}
      />
      <TextField
        label="Title"
        value={value?.framesFeature?.title ?? ''}
        onChange={(event) => onChange({ ...value, framesFeature: { ...value.framesFeature, title: event.target.value } })}
      />
      <TextAreaField
        label="Description"
        value={value?.framesFeature?.description ?? ''}
        onChange={(event) => onChange({ ...value, framesFeature: { ...value.framesFeature, description: event.target.value } })}
      />
      <StringsRepeater
        items={value?.framesFeature?.highlights ?? []}
        onChange={(next) => onChange({ ...value, framesFeature: { ...value.framesFeature, highlights: next } })}
        addLabel="Add highlight"
        label="Highlight"
        placeholder="e.g. Custom acrylic finishes"
      />
      <ImagePicker
        label="Image URL"
        value={value?.framesFeature?.image?.src ?? ''}
        onChange={(nextUrl) => onChange({ ...value, framesFeature: { ...value.framesFeature, image: { ...value.framesFeature.image, src: nextUrl } } })}
        alt={value?.framesFeature?.image?.alt ?? ''}
        onAltChange={(event) => onChange({ ...value, framesFeature: { ...value.framesFeature, image: { ...value.framesFeature.image, alt: event.target.value } } })}
      />
    </MiniEditorBlock>
    <MiniEditorBlock title="Studio grade" description="The studio-quality booth experience.">
      <TextField
        label="Badge"
        value={value?.studioGrade?.badge ?? ''}
        onChange={(event) => onChange({ ...value, studioGrade: { ...value.studioGrade, badge: event.target.value } })}
      />
      <TextField
        label="Title"
        value={value?.studioGrade?.title ?? ''}
        onChange={(event) => onChange({ ...value, studioGrade: { ...value.studioGrade, title: event.target.value } })}
      />
      <TextAreaField
        label="Description"
        value={value?.studioGrade?.description ?? ''}
        onChange={(event) => onChange({ ...value, studioGrade: { ...value.studioGrade, description: event.target.value } })}
      />
      <Repeater
        items={value?.studioGrade?.features ?? []}
        onChange={(next) => onChange({ ...value, studioGrade: { ...value.studioGrade, features: next } })}
        createItem={() => ({ title: 'New feature', desc: '' })}
        addLabel="Add feature"
        itemTitle={(item) => item.title || 'New feature'}
        renderItem={(item, index, { update: patch }) => (
          <div>
            <TextField
              label="Feature title"
              value={item.title ?? ''}
              onChange={(event) => patch({ title: event.target.value })}
            />
            <TextAreaField
              label="Feature description"
              value={item.desc ?? ''}
              onChange={(event) => patch({ desc: event.target.value })}
            />
          </div>
        )}
      />
    </MiniEditorBlock>
  </>
)

const FeaturedItemEditor = ({ value, onChange }) => (
  <>
    <TextField
      label="Featured item name"
      value={value?.name ?? ''}
      onChange={(event) => onChange({ ...value, name: event.target.value })}
    />
    <FieldRow>
      <TextField
        label="Tagline"
        value={value?.tagline ?? ''}
        onChange={(event) => onChange({ ...value, tagline: event.target.value })}
      />
      <TextField
        label="Dimensions"
        value={value?.dimensions ?? ''}
        onChange={(event) => onChange({ ...value, dimensions: event.target.value })}
      />
    </FieldRow>
    <TextAreaField
      label="Description"
      value={value?.description ?? ''}
      onChange={(event) => onChange({ ...value, description: event.target.value })}
    />
    {value?.image || value?.options || value?.gallery ? (
      <ImagePicker
        label="Image URL"
        value={value?.image?.src ?? ''}
        onChange={(nextUrl) => onChange({ ...value, image: { ...value.image, src: nextUrl } })}
        alt={value?.image?.alt ?? ''}
        onAltChange={(event) => onChange({ ...value, image: { ...value.image, alt: event.target.value } })}
      />
    ) : null}
    <Repeater
      items={value?.options ?? []}
      onChange={(next) => onChange({ ...value, options: next })}
      createItem={() => ({ name: 'New option', specs: '', desc: '', image: '' })}
      addLabel="Add option"
      itemTitle={(item) => item.name || 'New option'}
      renderItem={(item, index, { update: patch }) => (
        <div>
          <TextField
            label="Option name"
            value={item.name ?? ''}
            onChange={(event) => patch({ name: event.target.value })}
          />
          <TextField
            label="Specs"
            value={item.specs ?? ''}
            onChange={(event) => patch({ specs: event.target.value })}
          />
          <TextAreaField
            label="Description"
            value={item.desc ?? ''}
            onChange={(event) => patch({ desc: event.target.value })}
          />
          <ImagePicker
            label="Image URL"
            value={item.image ?? ''}
            onChange={(nextUrl) => patch({ image: nextUrl })}
          />
        </div>
      )}
    />
    <Repeater
      items={value?.gallery ?? []}
      onChange={(next) => onChange({ ...value, gallery: next })}
      createItem={() => ({ src: '', title: '' })}
      addLabel="Add gallery image"
      itemTitle={(item, index) => item.title || `Gallery image ${index + 1}`}
      renderItem={(item, index, { update: patch }) => (
        <div>
          <TextField
            label="Image title"
            value={item.title ?? ''}
            onChange={(event) => patch({ title: event.target.value })}
          />
          <ImagePicker
            label="Image URL"
            value={item.src ?? ''}
            onChange={(nextUrl) => patch({ src: nextUrl })}
          />
        </div>
      )}
    />
  </>
)

function ServicesCMS() {
  const { values, savedAt, dirty, update, save, reset } = useContent('services')

  const updateSection = (sectionKey, patch) =>
    update((current) => ({ ...current, [sectionKey]: { ...current[sectionKey], ...patch } }))

  const updateList = (sectionKey, nextItems) =>
    update((current) => ({ ...current, [sectionKey]: nextItems }))

  return (
    <ServicesCMSPage>
      <AdminPageHeader {...adminPageMeta.services} />

      <EditorCard title="Hero" description="The opening of the services page." defaultOpen>
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
        <CtaPair
          value={values.hero?.primaryCta}
          onChange={(primaryCta) => updateSection('hero', { primaryCta })}
        />
        <CtaPair
          value={values.hero?.secondaryCta}
          onChange={(secondaryCta) => updateSection('hero', { secondaryCta })}
        />
        <FieldRow>
          <TextField
            label="Badge title"
            value={values.hero?.badge?.title ?? ''}
            onChange={(event) => updateSection('hero', { badge: { ...values.hero.badge, title: event.target.value } })}
          />
          <TextField
            label="Badge subtitle"
            value={values.hero?.badge?.subtitle ?? ''}
            onChange={(event) => updateSection('hero', { badge: { ...values.hero.badge, subtitle: event.target.value } })}
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
        title="Introduction"
        description="The philosophy section with two images and a quote."
      >
        <TextField
          label="Eyebrow"
          value={values.intro?.subtitle ?? ''}
          onChange={(event) => updateSection('intro', { subtitle: event.target.value })}
        />
        <TextField
          label="Title"
          value={values.intro?.title ?? ''}
          onChange={(event) => updateSection('intro', { title: event.target.value })}
        />
        <TextAreaField
          label="Paragraph one"
          value={values.intro?.paragraph1 ?? ''}
          onChange={(event) => updateSection('intro', { paragraph1: event.target.value })}
        />
        <TextAreaField
          label="Paragraph two"
          value={values.intro?.paragraph2 ?? ''}
          onChange={(event) => updateSection('intro', { paragraph2: event.target.value })}
        />
        <FieldRow>
          <TextField
            label="Quote text"
            value={values.intro?.quote?.text ?? ''}
            onChange={(event) => updateSection('intro', { quote: { ...values.intro.quote, text: event.target.value } })}
          />
        </FieldRow>
        <FieldRow>
          <TextField
            label="Quote author"
            value={values.intro?.quote?.author ?? ''}
            onChange={(event) => updateSection('intro', { quote: { ...values.intro.quote, author: event.target.value } })}
          />
          <TextField
            label="Quote role"
            value={values.intro?.quote?.role ?? ''}
            onChange={(event) => updateSection('intro', { quote: { ...values.intro.quote, role: event.target.value } })}
          />
        </FieldRow>
        <ImagePicker
          label="Primary image URL"
          value={values.intro?.primaryImage?.src ?? ''}
          onChange={(nextUrl) => updateSection('intro', { primaryImage: { ...values.intro.primaryImage, src: nextUrl } })}
          alt={values.intro?.primaryImage?.alt ?? ''}
          onAltChange={(event) => updateSection('intro', { primaryImage: { ...values.intro.primaryImage, alt: event.target.value } })}
        />
        <ImagePicker
          label="Secondary image URL"
          value={values.intro?.secondaryImage?.src ?? ''}
          onChange={(nextUrl) => updateSection('intro', { secondaryImage: { ...values.intro.secondaryImage, src: nextUrl } })}
          alt={values.intro?.secondaryImage?.alt ?? ''}
          onAltChange={(event) => updateSection('intro', { secondaryImage: { ...values.intro.secondaryImage, alt: event.target.value } })}
        />
      </EditorCard>

      <EditorCard
        title="Luxe Photobooth packages"
        description="Pricing, inclusions and add-ons for the photobooth."
        meta={<EditorCardCount>{(values.photoboothPackages ?? []).length}</EditorCardCount>}
      >
        <PackagesRepeater
          items={values.photoboothPackages ?? []}
          onChange={(next) => updateList('photoboothPackages', next)}
          createItem={() => ({
            id: `package-${Date.now()}`,
            name: 'NEW PACKAGE',
            tagline: '',
            price: '',
            hireDuration: '',
            popular: false,
            badge: '',
            description: '',
            inclusions: [],
            addOns: [],
            travelNotes: '',
            ctaText: 'Reserve Your Date',
          })}
          itemTitle={(item) => `${item.name ?? ''} ${item.price ?? ''}`.trim() || 'New package'}
        />
      </EditorCard>

      <EditorCard
        title="Photobooth highlights"
        description="The two feature blocks below the packages."
      >
        <HighlightsEditor
          value={values.photoboothHighlights}
          onChange={(next) => updateSection('photoboothHighlights', next)}
        />
      </EditorCard>

      <EditorCard
        title="Blissful Nest"
        description="The intro paragraph and claw machine prize packages."
      >
        <TextAreaField
          label="Introduction paragraph"
          value={values.blissfulNestIntro?.paragraph ?? ''}
          onChange={(event) => updateSection('blissfulNestIntro', { paragraph: event.target.value })}
        />
        <Repeater
          items={values.blissfulNestPackages ?? []}
          onChange={(next) => updateList('blissfulNestPackages', next)}
          createItem={() => ({
            id: `nest-${Date.now()}`,
            name: 'New package',
            tagline: '',
            description: '',
            badge: '',
            items: [],
            image: '',
          })}
          addLabel="Add package"
          itemTitle={(item) => item.name || 'New package'}
          renderItem={(item, index, { update: patch }) => (
            <div>
              <FieldRow>
                <TextField
                  label="Name"
                  value={item.name ?? ''}
                  onChange={(event) => patch({ name: event.target.value })}
                />
                <TextField
                  label="Badge"
                  value={item.badge ?? ''}
                  onChange={(event) => patch({ badge: event.target.value })}
                />
              </FieldRow>
              <TextField
                label="Tagline"
                value={item.tagline ?? ''}
                onChange={(event) => patch({ tagline: event.target.value })}
              />
              <TextAreaField
                label="Description"
                value={item.description ?? ''}
                onChange={(event) => patch({ description: event.target.value })}
              />
              <StringsRepeater
                items={item.items ?? []}
                onChange={(next) => patch({ items: next })}
                addLabel="Add item"
                label="Item"
                placeholder="e.g. Pastel plush companions"
              />
              <ImagePicker
                label="Image URL"
                value={item.image ?? ''}
                onChange={(nextUrl) => patch({ image: nextUrl })}
              />
            </div>
          )}
        />
      </EditorCard>

      <EditorCard
        title="Collections"
        description="The main service collections and everything inside them."
        meta={<EditorCardCount>{(values.serviceCollections ?? []).length}</EditorCardCount>}
      >
        <Repeater
          items={values.serviceCollections ?? []}
          onChange={(next) => updateList('serviceCollections', next)}
          createItem={() => ({
            id: `collection-${Date.now()}`,
            type: 'collection',
            brand: 'Moments in Blooms',
            order: 1,
            featured: true,
            title: 'New collection',
            navSub: '',
            navMeta: '',
            description: '',
            tagline: '',
            coverImage: { src: '', alt: '' },
            sections: [],
          })}
          addLabel="Add collection"
          itemTitle={(item) => item.title || 'New collection'}
          renderItem={(collection, index, { update: patch }) => (
            <div>
              <FieldRow>
                <TextField
                  label="Title"
                  value={collection.title ?? ''}
                  onChange={(event) => patch({ title: event.target.value })}
                />
                <SelectField
                  label="Type"
                  value={collection.type ?? 'collection'}
                  onChange={(event) => patch({ type: event.target.value })}
                  options={COLLECTION_TYPES}
                />
              </FieldRow>
              <FieldRow>
                <TextField
                  label="Nav subtitle"
                  value={collection.navSub ?? ''}
                  onChange={(event) => patch({ navSub: event.target.value })}
                />
                <TextField
                  label="Nav meta"
                  value={collection.navMeta ?? ''}
                  onChange={(event) => patch({ navMeta: event.target.value })}
                />
              </FieldRow>
              <TextAreaField
                label="Description"
                value={collection.description ?? ''}
                onChange={(event) => patch({ description: event.target.value })}
              />
              <TextField
                label="Tagline"
                value={collection.tagline ?? ''}
                onChange={(event) => patch({ tagline: event.target.value })}
              />
              <FieldRow>
                <TextField
                  label="Order"
                  type="number"
                  value={collection.order ?? 1}
                  onChange={(event) => patch({ order: Number(event.target.value) })}
                />
                <div>
                  <ToggleSwitch
                    label="Featured"
                    hint="Featured collections are highlighted on the services page."
                    checked={collection.featured}
                    onChange={(featured) => patch({ featured })}
                  />
                </div>
              </FieldRow>
              <ImagePicker
                label="Cover image URL"
                value={collection.coverImage?.src ?? ''}
                onChange={(nextUrl) => patch({ coverImage: { ...collection.coverImage, src: nextUrl } })}
                alt={collection.coverImage?.alt ?? ''}
                onAltChange={(event) => patch({ coverImage: { ...collection.coverImage, alt: event.target.value } })}
              />
              <Repeater
                items={collection.sections ?? []}
                onChange={(nextSections) => patch({ sections: nextSections })}
                createItem={() => ({
                  id: `section-${Date.now()}`,
                  title: 'New section',
                  subtitle: '',
                  description: '',
                  featuredItem: { name: '', tagline: '', description: '', options: [], gallery: [], image: { src: '', alt: '' } },
                })}
                addLabel="Add section"
                itemTitle={(section) => section.title || 'New section'}
                renderItem={(section, sectionIndex, { update: patchSection }) => (
                  <div>
                    <TextField
                      label="Section title"
                      value={section.title ?? ''}
                      onChange={(event) => patchSection({ title: event.target.value })}
                    />
                    <TextField
                      label="Subtitle"
                      value={section.subtitle ?? ''}
                      onChange={(event) => patchSection({ subtitle: event.target.value })}
                    />
                    <TextAreaField
                      label="Description"
                      value={section.description ?? ''}
                      onChange={(event) => patchSection({ description: event.target.value })}
                    />
                    <FeaturedItemEditor
                      value={section.featuredItem}
                      onChange={(featuredItem) => patchSection({ featuredItem })}
                    />
                  </div>
                )}
              />
            </div>
          )}
        />
      </EditorCard>

      <EditorCard
        title="Collection showcase"
        description="The text above the collection picker."
      >
        <TextField
          label="Eyebrow"
          value={values.serviceCollectionsShowcase?.subtitle ?? ''}
          onChange={(event) => updateSection('serviceCollectionsShowcase', { subtitle: event.target.value })}
        />
        <TextField
          label="Title"
          value={values.serviceCollectionsShowcase?.title ?? ''}
          onChange={(event) => updateSection('serviceCollectionsShowcase', { title: event.target.value })}
        />
        <TextAreaField
          label="Description"
          value={values.serviceCollectionsShowcase?.description ?? ''}
          onChange={(event) => updateSection('serviceCollectionsShowcase', { description: event.target.value })}
        />
        <FieldRow>
          <TextField
            label="Subcategory label"
            value={values.serviceCollectionsShowcase?.subcategoryLabel ?? ''}
            onChange={(event) => updateSection('serviceCollectionsShowcase', { subcategoryLabel: event.target.value })}
          />
          <TextField
            label="All collections label"
            value={values.serviceCollectionsShowcase?.allCollectionsLabel ?? ''}
            onChange={(event) => updateSection('serviceCollectionsShowcase', { allCollectionsLabel: event.target.value })}
          />
        </FieldRow>
      </EditorCard>

      <EditorCard
        title="What's included"
        description="The six white-glove commitments every experience includes."
      >
        <TextField
          label="Eyebrow"
          value={values.whatsIncluded?.subtitle ?? ''}
          onChange={(event) => updateSection('whatsIncluded', { subtitle: event.target.value })}
        />
        <TextField
          label="Title"
          value={values.whatsIncluded?.title ?? ''}
          onChange={(event) => updateSection('whatsIncluded', { title: event.target.value })}
        />
        <TextAreaField
          label="Description"
          value={values.whatsIncluded?.description ?? ''}
          onChange={(event) => updateSection('whatsIncluded', { description: event.target.value })}
        />
        <Repeater
          items={values.whatsIncluded?.items ?? []}
          onChange={(next) => updateSection('whatsIncluded', { items: next })}
          createItem={() => ({ id: `inc-${Date.now()}`, iconName: 'FiHeart', title: 'New commitment', description: '' })}
          addLabel="Add commitment"
          itemTitle={(item) => item.title || 'New commitment'}
          renderItem={(item, index, { update: patch }) => (
            <div>
              <SelectField
                label="Icon"
                value={item.iconName ?? 'FiHeart'}
                onChange={(event) => patch({ iconName: event.target.value })}
                options={INCLUSION_ICONS}
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
        title="Experience timeline"
        description="The six-step journey clients move through."
      >
        <TextField
          label="Eyebrow"
          value={values.experienceTimeline?.subtitle ?? ''}
          onChange={(event) => updateSection('experienceTimeline', { subtitle: event.target.value })}
        />
        <TextField
          label="Title"
          value={values.experienceTimeline?.title ?? ''}
          onChange={(event) => updateSection('experienceTimeline', { title: event.target.value })}
        />
        <TextAreaField
          label="Description"
          value={values.experienceTimeline?.description ?? ''}
          onChange={(event) => updateSection('experienceTimeline', { description: event.target.value })}
        />
        <Repeater
          items={values.experienceTimeline?.steps ?? []}
          onChange={(next) => updateSection('experienceTimeline', { steps: next })}
          createItem={() => ({ number: '07', title: 'New step', description: '' })}
          addLabel="Add step"
          itemTitle={(item) => item.title || 'New step'}
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
        title="Services gallery"
        description="The curated images on the services page."
      >
        <TextField
          label="Eyebrow"
          value={values.gallery?.subtitle ?? ''}
          onChange={(event) => updateSection('gallery', { subtitle: event.target.value })}
        />
        <TextField
          label="Title"
          value={values.gallery?.title ?? ''}
          onChange={(event) => updateSection('gallery', { title: event.target.value })}
        />
        <TextAreaField
          label="Description"
          value={values.gallery?.description ?? ''}
          onChange={(event) => updateSection('gallery', { description: event.target.value })}
        />
        <Repeater
          items={values.gallery?.items ?? []}
          onChange={(next) => updateSection('gallery', { items: next })}
          createItem={() => ({
            id: `gal-${Date.now()}`,
            variant: 'square',
            title: 'New image',
            category: 'Wedding Styling',
            image: { src: '', alt: '' },
          })}
          addLabel="Add image"
          itemTitle={(item) => item.title || 'New image'}
          renderItem={(item, index, { update: patch }) => (
            <div>
              <FieldRow>
                <TextField
                  label="Title"
                  value={item.title ?? ''}
                  onChange={(event) => patch({ title: event.target.value })}
                />
                <SelectField
                  label="Layout variant"
                  value={item.variant ?? 'square'}
                  onChange={(event) => patch({ variant: event.target.value })}
                  options={GALLERY_VARIANTS}
                />
              </FieldRow>
              <TextField
                label="Category"
                value={item.category ?? ''}
                onChange={(event) => patch({ category: event.target.value })}
              />
              <ImagePicker
                label="Image URL"
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
        title="Testimonials"
        description="Client reviews shown on the services page."
      >
        <Repeater
          items={values.testimonials ?? []}
          onChange={(next) => updateList('testimonials', next)}
          createItem={() => ({
            quote: '',
            name: 'A happy client',
            event: 'Wedding Celebration',
            rating: 5,
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
              <ToggleSwitch
                label="Five star rating"
                checked={Number(item.rating ?? 5) >= 5}
                onChange={(checked) => patch({ rating: checked ? 5 : 4 })}
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
        title="Call to action"
        description="The closing invitation on the services page."
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
        <PlainCtaPair value={values.cta} onChange={(patch) => updateSection('cta', patch)} />
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
    </ServicesCMSPage>
  )
}

export default ServicesCMS