import { useState } from 'react'
import { FiAtSign, FiMapPin, FiMenu, FiSliders } from 'react-icons/fi'
import AdminPageHeader from '../../../components/admin/AdminPageHeader/index.js'
import ContentFormSection from '../../../components/admin/ContentFormSection/index.js'
import Repeater from '../../../components/admin/Repeater/index.js'
import SaveBar from '../../../components/admin/SaveBar/index.js'
import { TextAreaField, TextField } from '../../../components/FormField/index.js'
import { adminPageMeta } from '../../../constants/admin.js'
import { useContent } from '../../../hooks/useContent.js'
import { SettingsPage as SettingsPageShell, TabBar, TabButton } from './Settings.styles.js'

const TABS = [
  { key: 'contact', label: 'Contact info', icon: FiMapPin },
  { key: 'social', label: 'Social links', icon: FiAtSign },
  { key: 'footer', label: 'Footer', icon: FiMenu },
  { key: 'form', label: 'Enquiry form', icon: FiSliders },
]

function Settings() {
  const { values, savedAt, dirty, update, save, reset } = useContent('settings')
  const [tab, setTab] = useState('contact')

  const updateSection = (sectionKey, nextValue) =>
    update((current) => ({ ...current, [sectionKey]: nextValue }))

  return (
    <SettingsPageShell>
      <AdminPageHeader {...adminPageMeta.settings} />

      <TabBar role="tablist" aria-label="Settings sections">
        {TABS.map((item) => {
          const Icon = item.icon
          return (
            <TabButton
              key={item.key}
              type="button"
              role="tab"
              aria-selected={tab === item.key}
              $active={tab === item.key}
              onClick={() => setTab(item.key)}
            >
              <Icon aria-hidden="true" size={15} />
              {item.label}
            </TabButton>
          )
        })}
      </TabBar>

      {tab === 'contact' ? (
        <ContactTab
          contact={values.contactInformation}
          rail={values.enquiryFormRail}
          onChange={(sectionKey, nextValue) => updateSection(sectionKey, nextValue)}
        />
      ) : null}

      {tab === 'social' ? (
        <ContentFormSection
          title="Social links"
          description="Links shown in the footer and social buttons across the site."
          
        >
          <Repeater
            items={values.footerSocialLinks ?? []}
            onChange={(next) => updateSection('footerSocialLinks', next)}
            createItem={() => ({ label: 'New platform', href: 'https://' })}
            addLabel="Add social link"
            itemTitle={(item) => item.label || 'Unnamed link'}
            renderItem={(item, index, { update: patch }) => (
              <div>
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
              </div>
            )}
          />
        </ContentFormSection>
      ) : null}

      {tab === 'footer' ? (
        <>
          <ContentFormSection
            title="Studio contact details"
            description="The phone number, email and location shown in the footer."
            
          >
            <TextField
              label="Location"
              value={values.footerContact?.location ?? ''}
              onChange={(event) =>
                updateSection('footerContact', {
                  ...values.footerContact,
                  location: event.target.value,
                })
              }
            />
            <TextField
              label="Email"
              type="email"
              value={values.footerContact?.email ?? ''}
              onChange={(event) =>
                updateSection('footerContact', {
                  ...values.footerContact,
                  email: event.target.value,
                })
              }
            />
            <TextField
              label="Phone"
              value={values.footerContact?.phone ?? ''}
              onChange={(event) =>
                updateSection('footerContact', {
                  ...values.footerContact,
                  phone: event.target.value,
                })
              }
            />
          </ContentFormSection>

          <ContentFormSection
            title="Footer navigation"
            description="The link groups listed in the footer columns."
            
          >
            <Repeater
              items={values.footerGroups ?? []}
              onChange={(next) => updateSection('footerGroups', next)}
              createItem={() => ({ title: 'New group', links: [] })}
              addLabel="Add group"
              itemTitle={(item) => item.title || 'Unnamed group'}
              renderItem={(group, index, { update: patch }) => (
                <div>
                  <TextField
                    label="Group title"
                    value={group.title ?? ''}
                    onChange={(event) => patch({ title: event.target.value })}
                  />
                  <Repeater
                    items={group.links ?? []}
                    onChange={(nextLinks) => patch({ links: nextLinks })}
                    createItem={() => ({ label: 'New link', path: '/' })}
                    addLabel="Add link"
                    itemTitle={(link) => link.label || 'Unnamed link'}
                    renderItem={(link, linkIndex, { update: patchLink }) => (
                      <div>
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
                      </div>
                    )}
                  />
                </div>
              )}
            />
          </ContentFormSection>
        </>
      ) : null}

      {tab === 'form' ? (
        <FormOptionsTab
          values={values}
          onChange={updateSection}
        />
      ) : null}

      <SaveBar dirty={dirty} savedAt={savedAt} onSave={save} onReset={reset} />
    </SettingsPageShell>
  )
}

function ContactTab({ contact, rail, onChange }) {
  const updateContact = (patch) => onChange('contactInformation', { ...contact, ...patch })

  return (
    <>
      <ContentFormSection
        title="Contact section"
        description="The introduction shown on the contact page."
        
      >
        <TextField
          label="Eyebrow"
          value={contact?.eyebrow ?? ''}
          onChange={(event) => updateContact({ eyebrow: event.target.value })}
        />
        <TextField
          label="Title"
          value={contact?.title ?? ''}
          onChange={(event) => updateContact({ title: event.target.value })}
        />
        <TextAreaField
          label="Description"
          value={contact?.description ?? ''}
          onChange={(event) => updateContact({ description: event.target.value })}
        />
        <TextField
          label="Response note"
          value={contact?.responseNote ?? ''}
          onChange={(event) => updateContact({ responseNote: event.target.value })}
        />
      </ContentFormSection>

      <ContentFormSection
        title="Enquiry form rail"
        description="The 'What happens after you send it?' steps beside the form."
        
      >
        <TextField
          label="Eyebrow"
          value={rail?.eyebrow ?? ''}
          onChange={(event) => onChange('enquiryFormRail', { ...rail, eyebrow: event.target.value })}
        />
        <TextField
          label="Title"
          value={rail?.title ?? ''}
          onChange={(event) => onChange('enquiryFormRail', { ...rail, title: event.target.value })}
        />
        <TextField
          label="Note"
          value={rail?.note ?? ''}
          onChange={(event) => onChange('enquiryFormRail', { ...rail, note: event.target.value })}
        />
        <Repeater
          items={rail?.steps ?? []}
          onChange={(nextSteps) => onChange('enquiryFormRail', { ...rail, steps: nextSteps })}
          createItem={() => ({ number: '01', title: 'New step', description: '' })}
          addLabel="Add step"
          itemTitle={(step) => step.title || 'New step'}
          renderItem={(step, index, { update: patch }) => (
            <div>
              <TextField
                label="Number"
                value={step.number ?? ''}
                onChange={(event) => patch({ number: event.target.value })}
              />
              <TextField
                label="Step title"
                value={step.title ?? ''}
                onChange={(event) => patch({ title: event.target.value })}
              />
              <TextAreaField
                label="Description"
                value={step.description ?? ''}
                onChange={(event) => patch({ description: event.target.value })}
              />
            </div>
          )}
        />
      </ContentFormSection>
    </>
  )
}

function FormOptionsTab({ values, onChange }) {
  const stringRepeater = (label, sectionKey, placeholder) => (
    <Repeater
      items={values[sectionKey] ?? []}
      onChange={(next) => onChange(sectionKey, next)}
      createItem={() => ''}
      addLabel={`Add ${label.toLowerCase()}`}
      itemTitle={(item) => item || 'New option'}
      renderItem={(item, index, { replace }) => (
        <TextField
          label={`${label} option`}
          value={item ?? ''}
          onChange={(event) => replace(event.target.value)}
          placeholder={placeholder}
        />
      )}
    />
  )

  return (
    <>
      <ContentFormSection
        title="Event types"
        description="The event type choices offered in the enquiry form."
        
      >
        {stringRepeater('Event type', 'eventTypeOptions', 'e.g. Wedding')}
      </ContentFormSection>

      <ContentFormSection
        title="Services of interest"
        description="The service options clients can select in the enquiry form."
      >
        <Repeater
          items={values.serviceInterestOptions ?? []}
          onChange={(next) => onChange('serviceInterestOptions', next)}
          createItem={() => ({ value: 'new-service', label: 'New service' })}
          addLabel="Add service option"
          itemTitle={(item) => item.label || 'New option'}
          renderItem={(item, index, { update: patch }) => (
            <div>
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
            </div>
          )}
        />
      </ContentFormSection>

      <ContentFormSection
        title="Guest count options"
        description="The guest count choices offered in the enquiry form."
      >
        {stringRepeater('Guest count', 'guestCountOptions', 'e.g. 51–100')}
      </ContentFormSection>

      <ContentFormSection
        title="Setup requirement options"
        description="Whether hired items need styling and setup on the day."
      >
        {stringRepeater('Setup option', 'setupRequirementOptions', 'e.g. Yes')}
      </ContentFormSection>
    </>
  )
}

export default Settings