/* eslint-disable react-refresh/only-export-components */
import { FieldRow, HelpText, SelectField, TextAreaField, TextField } from '../../../components/FormField/index.js'
import ToggleSwitch from '../../../components/admin/ToggleSwitch/index.js'

const createFaqId = () => `faq-${Date.now()}`
const createCategoryId = () => `cat-${Date.now()}`

const nextOrder = (items) =>
  items.length ? Math.max(...items.map((item) => item.order ?? 0)) + 1 : 1

const categoryOptions = (values) =>
  (values.categories ?? []).map((category) => ({
    value: category.id,
    label: category.label,
  }))

const categoryLabel = (values, categoryId) =>
  (values.categories ?? []).find((category) => category.id === categoryId)?.label ??
  categoryId

export const faqsSections = [
  {
    key: 'items',
    title: 'FAQ items',
    description: 'Questions, answers and whether each one is published.',
    type: 'list',
    hidden: true,
    itemLabel: 'FAQ',
    createInitial: (values) => ({
      id: createFaqId(),
      question: '',
      answer: '',
      category: values?.categories?.[0]?.id ?? '',
      order: nextOrder(values?.items ?? []),
      active: true,
    }),
    itemTitle: (item) => item.question || 'Untitled question',
    itemDescription: (item) => item.answer,
    itemMeta: (item, values) => [
      categoryLabel(values, item.category),
      `Order ${item.order ?? 0}`,
    ],
    itemStatus: (item) => (item.active ? 'active' : 'inactive'),
    validate: (draft) => {
      const errors = {}
      if (!draft?.question?.trim()) {
        errors.question = 'A question is required.'
      }
      return errors
    },
    itemForm: FaqItemForm,
  },
  {
    key: 'categories',
    title: 'FAQ categories',
    description: 'Group your questions into categories shown on the FAQ page.',
    type: 'list',
    hidden: true,
    itemLabel: 'category',
    createInitial: () => ({ id: createCategoryId(), label: 'New category' }),
    itemTitle: (item) => item.label || 'Unnamed category',
    itemDescription: () => undefined,
    itemMeta: (item, values) => [
      `${(values.items ?? []).filter((faq) => faq.category === item.id).length} questions`,
    ],
    validate: (draft) => {
      const errors = {}
      if (!draft?.label?.trim()) {
        errors.label = 'A category label is required.'
      }
      return errors
    },
    itemForm: CategoryForm,
  },
]

function FaqItemForm({ value, onChange, errors, values }) {
  return (
    <>
      <TextField
        label="Question"
        value={value?.question ?? ''}
        onChange={(event) => onChange({ ...value, question: event.target.value })}
        placeholder="e.g. How far in advance should we book?"
        error={errors.question}
      />
      <TextAreaField
        label="Answer"
        rows={6}
        value={value?.answer ?? ''}
        onChange={(event) => onChange({ ...value, answer: event.target.value })}
        placeholder="The answer your guests will see…"
      />
      <FieldRow>
        <SelectField
          label="Category"
          value={value?.category ?? ''}
          onChange={(event) => onChange({ ...value, category: event.target.value })}
          options={categoryOptions(values)}
          placeholder="Select a category"
        />
        <TextField
          label="Order"
          type="number"
          value={value?.order ?? 0}
          onChange={(event) => onChange({ ...value, order: Number(event.target.value) })}
          hint="Lower numbers appear first."
        />
      </FieldRow>
      <ToggleSwitch
        label="Published"
        hint="Inactive questions are hidden from visitors."
        checked={value?.active}
        onChange={(active) => onChange({ ...value, active })}
      />
    </>
  )
}

function CategoryForm({ value, onChange, errors }) {
  return (
    <>
      <TextField
        label="Category label"
        value={value?.label ?? ''}
        onChange={(event) => onChange({ ...value, label: event.target.value })}
        placeholder="e.g. Booking & availability"
        error={errors.label}
      />
      <HelpText>id: {value?.id}</HelpText>
    </>
  )
}