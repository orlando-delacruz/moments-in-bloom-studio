/* eslint-disable react-refresh/only-export-components */
import { TextAreaField, TextField } from '../../../components/FormField/index.js'
import { HelpText } from '../../../components/FormField/FormField.styles.js'
import ImageField from '../../../components/admin/ImageField/index.js'
import Repeater from '../../../components/admin/Repeater/index.js'

export const contactSections = [
  {
    key: 'hero',
    title: 'Hero',
    description: 'The opening of your Contact page.',
    type: 'object',
    form: HeroForm,
  },
  {
    key: 'information',
    title: 'Contact information',
    description: 'The introduction and response note shown on the contact page.',
    type: 'object',
    form: InformationForm,
  },
  {
    key: 'enquiryFormRail',
    title: 'Enquiry form rail',
    description: "The 'What happens after you send it?' steps beside the form.",
    type: 'object',
    sectionMeta: (values) => [
      `${(values.enquiryFormRail?.steps ?? []).length} steps`,
    ],
    form: EnquiryFormRailForm,
  },
  {
    key: 'cta',
    title: 'Call to action',
    description: 'The closing invitation at the bottom of the contact page.',
    type: 'object',
    form: CtaForm,
  },
  {
    key: 'enquiryFormOptions',
    title: 'Enquiry form options',
    description: 'The choices offered to clients in the enquiry form.',
    type: 'object',
    sectionMeta: (values) => [
      `${(values.eventTypeOptions ?? []).length} event types`,
    ],
    form: EnquiryFormOptionsForm,
  },
]

function HeroForm({ value, onChange }) {
  const patch = (next) => onChange({ ...value, ...next })
  return (
    <>
      <TextField
        label="Eyebrow"
        hint="Small label above the title (e.g. 'Let's create something beautiful')."
        value={value?.eyebrow ?? ''}
        onChange={(event) => patch({ eyebrow: event.target.value })}
      />
      <TextField
        label="Title"
        value={value?.title ?? ''}
        onChange={(event) => patch({ title: event.target.value })}
      />
      <TextAreaField
        label="Description"
        value={value?.description ?? ''}
        onChange={(event) => patch({ description: event.target.value })}
      />
      <TextField
        label="Note"
        hint="Short reassurance shown below the description (e.g. 'Every enquiry is reviewed personally')."
        value={value?.note ?? ''}
        onChange={(event) => patch({ note: event.target.value })}
      />
      <ImageField
        label="Hero image"
        value={value?.image?.src ?? ''}
        onChange={(src) => patch({ image: { ...value.image, src } })}
        alt={value?.image?.alt ?? ''}
        onAltChange={(event) => patch({ image: { ...value.image, alt: event.target.value } })}
      />
    </>
  )
}

function InformationForm({ value, onChange }) {
  const patch = (next) => onChange({ ...value, ...next })
  return (
    <>
      <TextField
        label="Eyebrow"
        hint="Small label above the title (e.g. 'Prefer a conversation?')."
        value={value?.eyebrow ?? ''}
        onChange={(event) => patch({ eyebrow: event.target.value })}
      />
      <TextField
        label="Title"
        value={value?.title ?? ''}
        onChange={(event) => patch({ title: event.target.value })}
      />
      <TextAreaField
        label="Description"
        value={value?.description ?? ''}
        onChange={(event) => patch({ description: event.target.value })}
      />
      <TextField
        label="Response note"
        hint="Shown below the description — sets expectations about reply timing."
        value={value?.responseNote ?? ''}
        onChange={(event) => patch({ responseNote: event.target.value })}
      />
    </>
  )
}

function EnquiryFormRailForm({ value, onChange }) {
  const patch = (next) => onChange({ ...value, ...next })
  return (
    <>
      <TextField
        label="Eyebrow"
        hint="Small label above the title (e.g. 'Your enquiry, in good hands')."
        value={value?.eyebrow ?? ''}
        onChange={(event) => patch({ eyebrow: event.target.value })}
      />
      <TextField
        label="Title"
        value={value?.title ?? ''}
        onChange={(event) => patch({ title: event.target.value })}
      />
      <TextField
        label="Note"
        hint="Closing remark shown below the steps (e.g. 'The team usually replies within one to two business days')."
        value={value?.note ?? ''}
        onChange={(event) => patch({ note: event.target.value })}
      />
      <HelpText>
        Step numbers are generated automatically from the order below. Drag to reorder.
      </HelpText>
      <Repeater
        items={value?.steps ?? []}
        onChange={(steps) => patch({ steps })}
        createItem={() => ({ title: 'New step', description: '' })}
        addLabel="Add step"
        itemTitle={(step, index) => {
          const num = String(index + 1).padStart(2, '0')
          return `${num} — ${step.title || 'New step'}`
        }}
        renderItem={(step, index, { update: patchStep }) => (
          <>
            <TextField
              label={`Step ${String(index + 1).padStart(2, '0')} title`}
              value={step.title ?? ''}
              onChange={(event) => patchStep({ title: event.target.value })}
            />
            <TextAreaField
              label="Description"
              value={step.description ?? ''}
              onChange={(event) => patchStep({ description: event.target.value })}
            />
          </>
        )}
      />
    </>
  )
}

function CtaForm({ value, onChange }) {
  const patch = (next) => onChange({ ...value, ...next })

  const validatePath = (path) => {
    if (!path) return undefined
    if (/^\//.test(path) || /^https?:\/\//.test(path)) return undefined
    return 'Start with / for internal pages (e.g. /services) or https:// for external links.'
  }

  return (
    <>
      <TextField
        label="Eyebrow"
        hint="Small label above the title (e.g. 'Feeling inspired?')."
        value={value?.eyebrow ?? ''}
        onChange={(event) => patch({ eyebrow: event.target.value })}
      />
      <TextField
        label="Title"
        value={value?.title ?? ''}
        onChange={(event) => patch({ title: event.target.value })}
      />
      <TextAreaField
        label="Description"
        value={value?.description ?? ''}
        onChange={(event) => patch({ description: event.target.value })}
      />
      <TextField
        label="Primary button"
        value={value?.primaryCta ?? ''}
        onChange={(event) => patch({ primaryCta: event.target.value })}
      />
      <TextField
        label="Primary link"
        hint="Internal path (e.g. /services) or full URL (e.g. https://...)."
        value={value?.primaryPath ?? ''}
        onChange={(event) => patch({ primaryPath: event.target.value })}
        error={validatePath(value?.primaryPath ?? '')}
      />
      <TextField
        label="Secondary button"
        value={value?.secondaryCta ?? ''}
        onChange={(event) => patch({ secondaryCta: event.target.value })}
      />
      <TextField
        label="Secondary link"
        hint="Internal path (e.g. /gallery) or full URL (e.g. https://...)."
        value={value?.secondaryPath ?? ''}
        onChange={(event) => patch({ secondaryPath: event.target.value })}
        error={validatePath(value?.secondaryPath ?? '')}
      />
    </>
  )
}

const StringsRepeater = ({ label, items, onChange, addLabel, placeholder }) => (
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

function EnquiryFormOptionsForm({ value, onChange }) {
  return (
    <>
      <HelpText>
        These are the choices shown in the enquiry form on the public Contact page.
        Add or remove options to match the services and events you offer.
      </HelpText>
      <Repeater
        items={value?.eventTypeOptions ?? []}
        onChange={(eventTypeOptions) => onChange({ ...value, eventTypeOptions })}
        createItem={() => ''}
        addLabel="Add event type"
        itemTitle={(item, index) => item || `Event type ${index + 1}`}
        renderItem={(item, index, { replace }) => (
          <TextField
            label={`Event type ${index + 1}`}
            value={item ?? ''}
            onChange={(event) => replace(event.target.value)}
            placeholder="e.g. Wedding"
          />
        )}
      />
      <HelpText style={{ marginTop: '1.5rem' }}>
        Options shown in the Service Interest step — clients can select multiple.
      </HelpText>
      <Repeater
        items={value?.serviceInterestOptions ?? []}
        onChange={(serviceInterestOptions) => onChange({ ...value, serviceInterestOptions })}
        createItem={() => ({ value: 'new-service', label: 'New service' })}
        addLabel="Add service option"
        itemTitle={(item) => item.label || 'New option'}
        renderItem={(item, index, { update: patch }) => (
          <>
            <TextField
              label="Label"
              value={item.label ?? ''}
              onChange={(event) => patch({ label: event.target.value })}
            />
            <TextField
              label="Value"
              value={item.value ?? ''}
              onChange={(event) => patch({ value: event.target.value })}
            />
          </>
        )}
      />
      <HelpText style={{ marginTop: '1.5rem' }}>
        Options shown in the Guest Count dropdown during event details.
      </HelpText>
      <StringsRepeater
        label="Guest count"
        items={value?.guestCountOptions ?? []}
        onChange={(guestCountOptions) => onChange({ ...value, guestCountOptions })}
        addLabel="Add guest count"
        placeholder="e.g. 51–100"
      />
      <HelpText style={{ marginTop: '1.5rem' }}>
        Options shown in the Setup &amp; Styling step — clients pick one.
      </HelpText>
      <StringsRepeater
        label="Setup option"
        items={value?.setupRequirementOptions ?? []}
        onChange={(setupRequirementOptions) => onChange({ ...value, setupRequirementOptions })}
        addLabel="Add setup option"
        placeholder="e.g. Yes"
      />
    </>
  )
}
