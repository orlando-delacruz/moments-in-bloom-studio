import { useState } from 'react'
import { FiEdit2, FiHelpCircle, FiPlus, FiTrash2 } from 'react-icons/fi'
import AdminPageHeader from '../../../components/admin/AdminPageHeader/index.js'
import ConfirmDialog from '../../../components/admin/ConfirmDialog/index.js'
import DataTable from '../../../components/admin/DataTable/index.js'
import EditorCard, { EditorCardCount } from '../../../components/admin/EditorCard/index.js'
import EmptyState from '../../../components/admin/EmptyState/index.js'
import Modal from '../../../components/admin/Modal/index.js'
import { IconButton } from '../../../components/admin/Repeater/index.js'
import Repeater from '../../../components/admin/Repeater/index.js'
import SaveBar from '../../../components/admin/SaveBar/index.js'
import ToggleSwitch from '../../../components/admin/ToggleSwitch/index.js'
import Button from '../../../components/Button/index.js'
import { HelpText, TextAreaField, TextField, SelectField } from '../../../components/FormField/index.js'
import { adminPageMeta } from '../../../constants/admin.js'
import { useContent } from '../../../hooks/useContent.js'
import { FaqModalActions, FAQsCMSPage, TableCellActions, TableCellTitle } from './FAQsCMS.styles.js'

const createFaqId = () => `faq-${Date.now()}`

function FAQsCMS() {
  const { values, savedAt, dirty, update, save, reset } = useContent('faqs')
  const [editing, setEditing] = useState(null)
  const [deleting, setDeleting] = useState(null)

  const categories = values.categories ?? []
  const items = values.items ?? []

  const categoryOptions = categories.map((category) => ({
    value: category.id,
    label: category.label,
  }))

  const categoryLabel = (categoryId) =>
    categories.find((category) => category.id === categoryId)?.label ?? categoryId

  const updateItems = (nextItems) => update((current) => ({ ...current, items: nextItems }))
  const updateCategories = (nextCategories) =>
    update((current) => ({ ...current, categories: nextCategories }))

  const openCreate = () =>
    setEditing({
      id: createFaqId(),
      question: '',
      answer: '',
      category: categories[0]?.id ?? '',
      order: items.length ? Math.max(...items.map((item) => item.order ?? 0)) + 1 : 1,
      active: true,
    })

  const saveEditing = () => {
    if (!editing?.question.trim()) return
    const exists = items.some((item) => item.id === editing.id)
    updateItems(exists
      ? items.map((item) => (item.id === editing.id ? { ...editing } : item))
      : [...items, editing])
    setEditing(null)
  }

  const handleDelete = () => {
    updateItems(items.filter((item) => item.id !== deleting.id))
    setDeleting(null)
  }

  const toggleActive = (id, active) => {
    updateItems(items.map((item) => (item.id === id ? { ...item, active } : item)))
  }

  return (
    <FAQsCMSPage>
      <AdminPageHeader
        {...adminPageMeta.faqs}
        actions={
          <Button type="button" variant="primary" onClick={openCreate}>
            <FiPlus aria-hidden="true" size={15} />
            Add FAQ
          </Button>
        }
      />

      <EditorCard
        title="FAQ categories"
        description="Group your questions into categories shown on the FAQ page."
        defaultOpen
      >
        <Repeater
          items={categories}
          onChange={updateCategories}
          createItem={() => ({ id: `cat-${Date.now()}`, label: 'New category' })}
          addLabel="Add category"
          itemTitle={(item) => item.label || 'Unnamed category'}
          renderItem={(item, index, { update: patch }) => (
            <>
              <TextField
                label="Category label"
                value={item.label ?? ''}
                onChange={(event) => patch({ label: event.target.value })}
                placeholder="e.g. Booking & availability"
              />
              <HelpText>id: {item.id}</HelpText>
            </>
          )}
        />
      </EditorCard>

      <EditorCard
        title="FAQ items"
        description="Questions, answers and whether each one is published."
        meta={<EditorCardCount>{items.length}</EditorCardCount>}
        defaultOpen
      >
        <DataTable
          columns={[
            {
              key: 'question',
              header: 'Question',
              render: (row) => <TableCellTitle>{row.question}</TableCellTitle>,
            },
            {
              key: 'category',
              header: 'Category',
              render: (row) => categoryLabel(row.category),
            },
            {
              key: 'order',
              header: 'Order',
              render: (row) => row.order ?? 0,
            },
            {
              key: 'active',
              header: 'Active',
              render: (row) => (
                <ToggleSwitch
                  checked={row.active}
                  onChange={(active) => toggleActive(row.id, active)}
                />
              ),
            },
            {
              key: 'actions',
              header: '',
              render: (row) => (
                <RowActions
                  onEdit={() => setEditing(row)}
                  onDelete={() => setDeleting(row)}
                />
              ),
            },
          ]}
          rows={items}
          rowKey={(row) => row.id}
          emptyState={
            <EmptyState
              icon={<FiHelpCircle aria-hidden="true" />}
              title="No FAQs yet"
              description="Add your first frequently asked question to get started."
            />
          }
        />
        <Button type="button" variant="outline" onClick={openCreate}>
          <FiPlus aria-hidden="true" size={15} />
          Add FAQ
        </Button>
      </EditorCard>

      <Modal
        open={Boolean(editing)}
        title={items.some((item) => item.id === editing?.id) ? 'Edit FAQ' : 'New FAQ'}
        description="Publishing tips: keep answers concise and use the category that best fits the question."
        onClose={() => setEditing(null)}
        footer={
          <FaqModalActions>
            <Button type="button" variant="outline" onClick={() => setEditing(null)}>
              Cancel
            </Button>
            <Button
              type="button"
              variant="primary"
              onClick={saveEditing}
              disabled={!editing?.question.trim()}
            >
              Save FAQ
            </Button>
          </FaqModalActions>
        }
      >
        <TextField
          label="Question"
          value={editing?.question ?? ''}
          onChange={(event) => setEditing((current) => ({ ...current, question: event.target.value }))}
          placeholder="e.g. How far in advance should we book?"
        />
        <TextAreaField
          label="Answer"
          rows={6}
          value={editing?.answer ?? ''}
          onChange={(event) => setEditing((current) => ({ ...current, answer: event.target.value }))}
          placeholder="The answer your guests will see…"
        />
        <SelectField
          label="Category"
          value={editing?.category ?? ''}
          onChange={(event) => setEditing((current) => ({ ...current, category: event.target.value }))}
          options={categoryOptions}
          placeholder="Select a category"
        />
                  <TextField
            label="Order"
            type="number"
            value={editing?.order ?? 0}
            onChange={(event) => setEditing((current) => ({ ...current, order: Number(event.target.value) }))}
          />
          <HelpText>Lower numbers appear first.</HelpText>
        <ToggleSwitch
          label="Published"
          hint="Inactive questions are hidden from visitors."
          checked={editing?.active}
          onChange={(active) => setEditing((current) => ({ ...current, active }))}
        />
      </Modal>

      <ConfirmDialog
        open={Boolean(deleting)}
        title="Delete this FAQ?"
        description="This removes the question permanently. This cannot be undone."
        confirmLabel="Delete FAQ"
        cancelLabel="Cancel"
        onConfirm={handleDelete}
        onCancel={() => setDeleting(null)}
      />

      <SaveBar dirty={dirty} savedAt={savedAt} onSave={save} onReset={reset} />
    </FAQsCMSPage>
  )
}

function RowActions({ onEdit, onDelete }) {
  return (
    <TableCellActions>
      <IconButton type="button" onClick={onEdit} aria-label="Edit" title="Edit">
        <FiEdit2 aria-hidden="true" size={15} />
      </IconButton>
      <IconButton type="button" $danger onClick={onDelete} aria-label="Delete" title="Delete">
        <FiTrash2 aria-hidden="true" size={15} />
      </IconButton>
    </TableCellActions>
  )
}

export default FAQsCMS