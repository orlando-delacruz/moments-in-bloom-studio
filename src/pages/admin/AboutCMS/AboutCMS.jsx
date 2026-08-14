import AdminPageHeader from '../../../components/admin/AdminPageHeader/index.js'
import EditorCard from '../../../components/admin/EditorCard/index.js'
import ImagePicker from '../../../components/admin/ImagePicker/index.js'
import Repeater from '../../../components/admin/Repeater/index.js'
import SaveBar from '../../../components/admin/SaveBar/index.js'
import { FieldRow, SelectField, TextAreaField, TextField } from '../../../components/FormField/index.js'
import { adminPageMeta } from '../../../constants/admin.js'
import { useContent } from '../../../hooks/useContent.js'
import { AboutCMSPage, MiniPanel, MiniPanelTitle } from './AboutCMS.styles.js'

const CORE_VALUE_ICONS = ['FiStar', 'FiAward', 'FiFeather', 'FiHeart', 'FiSparkles', 'FiShield', 'FiGift', 'FiSun']

const CtaFields = ({ cta, onChange }) => (
  <>
    <FieldRow>
      <TextField
        label="Primary button label"
        value={cta?.primaryCta?.label ?? ''}
        onChange={(event) => onChange({ primaryCta: { ...cta.primaryCta, label: event.target.value } })}
      />
      <TextField
        label="Secondary button label"
        value={cta?.secondaryCta?.label ?? ''}
        onChange={(event) => onChange({ secondaryCta: { ...cta.secondaryCta, label: event.target.value } })}
      />
    </FieldRow>
  </>
)

const SubtitleTitle = ({ values, onChange, subtitleKey = 'subtitle', titleKey = 'title' }) => (
  <>
    <TextField
      label="Eyebrow"
      value={values?.[subtitleKey] ?? ''}
      onChange={(event) => onChange({ [subtitleKey]: event.target.value })}
    />
    <TextField
      label="Title"
      value={values?.[titleKey] ?? ''}
      onChange={(event) => onChange({ [titleKey]: event.target.value })}
    />
  </>
)

function AboutCMS() {
  const { values, savedAt, dirty, update, save, reset } = useContent('about')

  const updateSection = (sectionKey, patch) =>
    update((current) => ({ ...current, [sectionKey]: { ...current[sectionKey], ...patch } }))

  const updateList = (sectionKey, nextItems) =>
    update((current) => ({ ...current, [sectionKey]: nextItems }))

  return (
    <AboutCMSPage>
      <AdminPageHeader {...adminPageMeta.about} />

      <EditorCard title="Hero" description="The opening of your About page." defaultOpen>
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
        <CtaFields
          cta={values.hero}
          onChange={(patch) => updateSection('hero', patch)}
        />
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
        title="Brand story"
        description="The narrative that introduces your studio."
      >
        <SubtitleTitle values={values.brandStory} onChange={(patch) => updateSection('brandStory', patch)} />
        <Repeater
          items={values.brandStory?.paragraphs ?? []}
          onChange={(nextParagraphs) => updateSection('brandStory', { paragraphs: nextParagraphs })}
          createItem={() => ''}
          addLabel="Add paragraph"
          itemTitle={(paragraph) => paragraph.slice(0, 48) || 'New paragraph'}
          renderItem={(paragraph, index, { replace }) => (
            <TextAreaField
              label={`Paragraph ${index + 1}`}
              value={paragraph ?? ''}
              onChange={(event) => replace(event.target.value)}
            />
          )}
        />
        <FieldRow>
          <TextField
            label="Quote text"
            value={values.brandStory?.quote?.text ?? ''}
            onChange={(event) => updateSection('brandStory', { quote: { ...values.brandStory.quote, text: event.target.value } })}
          />
        </FieldRow>
        <FieldRow>
          <TextField
            label="Quote author"
            value={values.brandStory?.quote?.author ?? ''}
            onChange={(event) => updateSection('brandStory', { quote: { ...values.brandStory.quote, author: event.target.value } })}
          />
          <TextField
            label="Quote role"
            value={values.brandStory?.quote?.role ?? ''}
            onChange={(event) => updateSection('brandStory', { quote: { ...values.brandStory.quote, role: event.target.value } })}
          />
        </FieldRow>
        <ImagePicker
          label="Story image URL"
          value={values.brandStory?.image?.src ?? ''}
          onChange={(nextUrl) => updateSection('brandStory', { image: { ...values.brandStory.image, src: nextUrl } })}
          alt={values.brandStory?.image?.alt ?? ''}
          onAltChange={(event) => updateSection('brandStory', { image: { ...values.brandStory.image, alt: event.target.value } })}
          credit={values.brandStory?.image?.credit ?? ''}
          onCreditChange={(event) => updateSection('brandStory', { image: { ...values.brandStory.image, credit: event.target.value } })}
        />
      </EditorCard>

      <EditorCard
        title="Mission & vision"
        description="Your studio's purpose and where it is heading."
      >
        <SubtitleTitle values={values.missionVision} onChange={(patch) => updateSection('missionVision', patch)} />
        <MiniPanel>
          <MiniPanelTitle>Mission</MiniPanelTitle>
          <TextField
            label="Tag"
            value={values.missionVision?.mission?.tag ?? ''}
            onChange={(event) => updateSection('missionVision', { mission: { ...values.missionVision.mission, tag: event.target.value } })}
          />
          <TextField
            label="Title"
            value={values.missionVision?.mission?.title ?? ''}
            onChange={(event) => updateSection('missionVision', { mission: { ...values.missionVision.mission, title: event.target.value } })}
          />
          <TextAreaField
            label="Description"
            value={values.missionVision?.mission?.description ?? ''}
            onChange={(event) => updateSection('missionVision', { mission: { ...values.missionVision.mission, description: event.target.value } })}
          />
        </MiniPanel>
        <MiniPanel>
          <MiniPanelTitle>Vision</MiniPanelTitle>
          <TextField
            label="Tag"
            value={values.missionVision?.vision?.tag ?? ''}
            onChange={(event) => updateSection('missionVision', { vision: { ...values.missionVision.vision, tag: event.target.value } })}
          />
          <TextField
            label="Title"
            value={values.missionVision?.vision?.title ?? ''}
            onChange={(event) => updateSection('missionVision', { vision: { ...values.missionVision.vision, title: event.target.value } })}
          />
          <TextAreaField
            label="Description"
            value={values.missionVision?.vision?.description ?? ''}
            onChange={(event) => updateSection('missionVision', { vision: { ...values.missionVision.vision, description: event.target.value } })}
          />
        </MiniPanel>
      </EditorCard>

      <EditorCard
        title="Core values"
        description="The values that guide your work, with an icon for each."
      >
        <Repeater
          items={values.coreValues ?? []}
          onChange={(next) => updateList('coreValues', next)}
          createItem={() => ({ id: `value-${Date.now()}`, iconName: 'FiHeart', title: 'New value', description: '' })}
          addLabel="Add value"
          itemTitle={(item) => item.title || 'New value'}
          renderItem={(item, index, { update: patch }) => (
            <div>
              <SelectField
                label="Icon"
                value={item.iconName ?? 'FiHeart'}
                onChange={(event) => patch({ iconName: event.target.value })}
                options={CORE_VALUE_ICONS}
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
        title="Why choose us"
        description="The highlights that set your studio apart."
      >
        <SubtitleTitle values={values.whyChooseUs} onChange={(patch) => updateSection('whyChooseUs', patch)} />
        <TextAreaField
          label="Description"
          value={values.whyChooseUs?.description ?? ''}
          onChange={(event) => updateSection('whyChooseUs', { description: event.target.value })}
        />
        <Repeater
          items={values.whyChooseUs?.highlights ?? []}
          onChange={(nextHighlights) => updateSection('whyChooseUs', { highlights: nextHighlights })}
          createItem={() => ({ number: '01', title: 'New highlight', description: '' })}
          addLabel="Add highlight"
          itemTitle={(item) => item.title || 'New highlight'}
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
        title="Behind the experience"
        description="The steps clients move through with your studio."
      >
        <SubtitleTitle values={values.behindExperience} onChange={(patch) => updateSection('behindExperience', patch)} />
        <TextAreaField
          label="Description"
          value={values.behindExperience?.description ?? ''}
          onChange={(event) => updateSection('behindExperience', { description: event.target.value })}
        />
        <Repeater
          items={values.behindExperience?.steps ?? []}
          onChange={(nextSteps) => updateSection('behindExperience', { steps: nextSteps })}
          createItem={() => ({ stepNumber: '01', title: 'New step', description: '' })}
          addLabel="Add step"
          itemTitle={(item) => item.title || 'New step'}
          renderItem={(item, index, { update: patch }) => (
            <div>
              <TextField
                label="Step number"
                value={item.stepNumber ?? ''}
                onChange={(event) => patch({ stepNumber: event.target.value })}
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
        title="Stats"
        description="The figures that show your studio's track record."
      >
        <SubtitleTitle values={values.stats} onChange={(patch) => updateSection('stats', patch)} />
        <TextAreaField
          label="Description"
          value={values.stats?.description ?? ''}
          onChange={(event) => updateSection('stats', { description: event.target.value })}
        />
        <Repeater
          items={values.stats?.items ?? []}
          onChange={(nextItems) => updateSection('stats', { items: nextItems })}
          createItem={() => ({ value: '150+', label: 'Celebrations', description: '' })}
          addLabel="Add stat"
          itemTitle={(item) => `${item.value ?? ''} ${item.label ?? ''}`.trim() || 'New stat'}
          renderItem={(item, index, { update: patch }) => (
            <div>
              <FieldRow>
                <TextField
                  label="Value"
                  value={item.value ?? ''}
                  onChange={(event) => patch({ value: event.target.value })}
                />
                <TextField
                  label="Label"
                  value={item.label ?? ''}
                  onChange={(event) => patch({ label: event.target.value })}
                />
              </FieldRow>
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
        title="Featured testimonial"
        description="The standout quote highlighted on the About page."
      >
        <SubtitleTitle values={values.testimonialHighlight} onChange={(patch) => updateSection('testimonialHighlight', patch)} />
        <TextAreaField
          label="Quote"
          value={values.testimonialHighlight?.quote ?? ''}
          onChange={(event) => updateSection('testimonialHighlight', { quote: event.target.value })}
        />
        <FieldRow>
          <TextField
            label="Author"
            value={values.testimonialHighlight?.author ?? ''}
            onChange={(event) => updateSection('testimonialHighlight', { author: event.target.value })}
          />
          <TextField
            label="Role"
            value={values.testimonialHighlight?.role ?? ''}
            onChange={(event) => updateSection('testimonialHighlight', { role: event.target.value })}
          />
        </FieldRow>
        <ImagePicker
          label="Portrait image URL"
          value={values.testimonialHighlight?.image?.src ?? ''}
          onChange={(nextUrl) => updateSection('testimonialHighlight', { image: { ...values.testimonialHighlight.image, src: nextUrl } })}
          alt={values.testimonialHighlight?.image?.alt ?? ''}
          onAltChange={(event) => updateSection('testimonialHighlight', { image: { ...values.testimonialHighlight.image, alt: event.target.value } })}
        />
      </EditorCard>

      <EditorCard
        title="Call to action"
        description="The closing invitation on the About page."
      >
        <SubtitleTitle values={values.cta} onChange={(patch) => updateSection('cta', patch)} />
        <TextAreaField
          label="Description"
          value={values.cta?.description ?? ''}
          onChange={(event) => updateSection('cta', { description: event.target.value })}
        />
        <CtaFields cta={values.cta} onChange={(patch) => updateSection('cta', patch)} />
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
    </AboutCMSPage>
  )
}

export default AboutCMS