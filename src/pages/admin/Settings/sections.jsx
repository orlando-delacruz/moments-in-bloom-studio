/* eslint-disable react-refresh/only-export-components */
import { FieldRow, TextAreaField, TextField } from '../../../components/FormField/index.js'
import Repeater from '../../../components/admin/Repeater/index.js'

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

export const settingsSections = [
  {
    key: 'contactInformation',
    title: 'Contact section',
    description: 'The introduction shown on the contact page.',
    type: 'object',
    sectionMeta: (values) => [values.contactInformation?.title].filter(Boolean),
    form: ContactInformationForm,
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
    key: 'footerContact',
    title: 'Studio contact details',
    description: 'The phone number, email and location shown in the footer.',
    type: 'object',
    sectionMeta: (values) =>
      [values.footerContact?.email, values.footerContact?.phone].filter(Boolean),
    form: FooterContactForm,
  },
  {
    key: 'footerSocialLinks',
    title: 'Social links',
    description: 'The links shown in the footer and social buttons across the site.',
    type: 'flatList',
    sectionMeta: (values) => [`${(values.footerSocialLinks ?? []).length} links`],
    form: SocialLinksForm,
  },
  {
    key: 'footerGroups',
    title: 'Footer navigation',
    description: 'The link groups listed in the footer columns.',
    type: 'flatList',
    sectionMeta: (values) => [`${(values.footerGroups ?? []).length} groups`],
    form: FooterGroupsForm,
  },
  {
    key: 'eventTypeOptions',
    title: 'Event types',
    description: 'The event type choices offered in the enquiry form.',
    type: 'flatList',
    sectionMeta: (values) => [`${(values.eventTypeOptions ?? []).length} options`],
    form: ({ value, onChange }) => (
      <StringsRepeater
        label="Event type"
        items={value ?? []}
        onChange={onChange}
        addLabel="Add event type"
        placeholder="e.g. Wedding"
      />
    ),
  },
  {
    key: 'serviceInterestOptions',
    title: 'Services of interest',
    description: 'The service options clients can select in the enquiry form.',
    type: 'flatList',
    sectionMeta: (values) => [
      `${(values.serviceInterestOptions ?? []).length} options`,
    ],
    form: ServiceInterestsForm,
  },
  {
    key: 'guestCountOptions',
    title: 'Guest count options',
    description: 'The guest count choices offered in the enquiry form.',
    type: 'flatList',
    sectionMeta: (values) => [
      `${(values.guestCountOptions ?? []).length} options`,
    ],
    form: ({ value, onChange }) => (
      <StringsRepeater
        label="Guest count"
        items={value ?? []}
        onChange={onChange}
        addLabel="Add guest count"
        placeholder="e.g. 51–100"
      />
    ),
  },
  {
    key: 'setupRequirementOptions',
    title: 'Setup requirement options',
    description: 'Whether hired items need styling and setup on the day.',
    type: 'flatList',
    sectionMeta: (values) => [
      `${(values.setupRequirementOptions ?? []).length} options`,
    ],
    form: ({ value, onChange }) => (
      <StringsRepeater
        label="Setup option"
        items={value ?? []}
        onChange={onChange}
        addLabel="Add setup option"
        placeholder="e.g. Yes"
      />
    ),
  },
]

function ContactInformationForm({ value, onChange }) {
  const patch = (next) => onChange({ ...value, ...next })
  return (
    <>
      <TextField
        label="Eyebrow"
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
        value={value?.note ?? ''}
        onChange={(event) => patch({ note: event.target.value })}
      />
      <Repeater
        items={value?.steps ?? []}
        onChange={(steps) => patch({ steps })}
        createItem={() => ({ number: '01', title: 'New step', description: '' })}
        addLabel="Add step"
        itemTitle={(step) => step.title || 'New step'}
        renderItem={(step, index, { update: patchStep }) => (
          <>
            <FieldRow>
              <TextField
                label="Number"
                value={step.number ?? ''}
                onChange={(event) => patchStep({ number: event.target.value })}
              />
              <TextField
                label="Step title"
                value={step.title ?? ''}
                onChange={(event) => patchStep({ title: event.target.value })}
              />
            </FieldRow>
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

function FooterContactForm({ value, onChange }) {
  const patch = (next) => onChange({ ...value, ...next })
  return (
    <>
      <TextField
        label="Location"
        value={value?.location ?? ''}
        onChange={(event) => patch({ location: event.target.value })}
      />
      <FieldRow>
        <TextField
          label="Email"
          type="email"
          value={value?.email ?? ''}
          onChange={(event) => patch({ email: event.target.value })}
        />
        <TextField
          label="Phone"
          value={value?.phone ?? ''}
          onChange={(event) => patch({ phone: event.target.value })}
        />
      </FieldRow>
    </>
  )
}

function SocialLinksForm({ value, onChange }) {
  return (
    <Repeater
      items={value ?? []}
      onChange={onChange}
      createItem={() => ({ label: 'New platform', href: 'https://' })}
      addLabel="Add social link"
      itemTitle={(item) => item.label || 'Unnamed link'}
      renderItem={(item, index, { update: patch }) => (
        <FieldRow>
          <TextField
            label="Platform"
            value={item.label ?? ''}
            onChange={(event) => patch({ label: event.target.value })}
            placeholder="e.g. Instagram"
          />
          <TextField
            label="URL"
            type="url"
            value={item.href ?? ''}
            onChange={(event) => patch({ href: event.target.value })}
            placeholder="https://instagram.com/yourhandle"
          />
        </FieldRow>
      )}
    />
  )
}

function FooterGroupsForm({ value, onChange }) {
  return (
    <Repeater
      items={value ?? []}
      onChange={onChange}
      createItem={() => ({ title: 'New group', links: [] })}
      addLabel="Add group"
      itemTitle={(item) => item.title || 'Unnamed group'}
      renderItem={(group, index, { update: patch }) => (
        <>
          <TextField
            label="Group title"
            value={group.title ?? ''}
            onChange={(event) => patch({ title: event.target.value })}
          />
          <Repeater
            items={group.links ?? []}
            onChange={(links) => patch({ links })}
            createItem={() => ({ label: 'New link', path: '/' })}
            addLabel="Add link"
            itemTitle={(link) => link.label || 'Unnamed link'}
            renderItem={(link, linkIndex, { update: patchLink }) => (
              <FieldRow>
                <TextField
                  label="Label"
                  value={link.label ?? ''}
                  onChange={(event) => patchLink({ label: event.target.value })}
                />
                <TextField
                  label="Path"
                  value={link.path ?? ''}
                  onChange={(event) => patchLink({ path: event.target.value })}
                  placeholder="/services"
                />
              </FieldRow>
            )}
          />
        </>
      )}
    />
  )
}

function ServiceInterestsForm({ value, onChange }) {
  return (
    <Repeater
      items={value ?? []}
      onChange={onChange}
      createItem={() => ({ value: 'new-service', label: 'New service' })}
      addLabel="Add service option"
      itemTitle={(item) => item.label || 'New option'}
      renderItem={(item, index, { update: patch }) => (
        <FieldRow>
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
        </FieldRow>
      )}
    />
  )
}