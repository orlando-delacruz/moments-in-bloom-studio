import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { FiArrowLeft, FiHelpCircle, FiPlus } from 'react-icons/fi'
import AdminPageHeader from '../../../components/admin/AdminPageHeader/index.js'
import ConfirmDialog from '../../../components/admin/ConfirmDialog/index.js'
import ContentList from '../../../components/admin/ContentList/index.js'
import ContentToolbar from '../../../components/admin/ContentToolbar/index.js'
import EmptyState from '../../../components/admin/EmptyState/index.js'
import Toast from '../../../components/admin/Toast/index.js'
import Button from '../../../components/Button/index.js'
import { adminPageMeta } from '../../../constants/admin.js'
import {
  archiveFaq,
  fetchFaqsAdmin,
  restoreFaq,
  setFaqOrder,
} from '../../../services/faqs.js'
import {
  FaqBackLink,
  FAQsCMSPage,
} from './FAQsCMS.styles.js'
import {
  FaqErrorState,
  FaqListSkeletonRows,
  FaqRow,
} from './FaqListParts.jsx'
import { byOrder, isActive } from './faqListUtils.js'

function FaqItems() {
  const [data, setData] = useState(null)
  const [status, setStatus] = useState('loading')
  const [reloadKey, setReloadKey] = useState(0)
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('')
  const [busy, setBusy] = useState(false)
  const [deleteTarget, setDeleteTarget] = useState(null)
  const [feedback, setFeedback] = useState(null)
  const [feedbackTone, setFeedbackTone] = useState('success')
  const feedbackTimer = useRef(null)

  const showFeedback = useCallback((message, tone = 'success') => {
    setFeedback(message)
    setFeedbackTone(tone)
    if (feedbackTimer.current) {
      window.clearTimeout(feedbackTimer.current)
    }
    feedbackTimer.current = window.setTimeout(() => setFeedback(null), 3200)
  }, [])

  useEffect(() => {
    let cancelled = false
    fetchFaqsAdmin()
      .then((result) => {
        if (cancelled) return
        if (result.error) {
          setData(null)
          setStatus('error')
          return
        }
        setData(result.data)
        setStatus('ready')
      })
      .catch(() => {
        if (!cancelled) {
          setData(null)
          setStatus('error')
        }
      })
    return () => {
      cancelled = true
    }
  }, [reloadKey])

  const loadData = useCallback(() => {
    setStatus('loading')
    setReloadKey((key) => key + 1)
  }, [])

  useEffect(() => {
    return () => {
      if (feedbackTimer.current) {
        window.clearTimeout(feedbackTimer.current)
      }
    }
  }, [])

  const categories = useMemo(() => data?.categories ?? [], [data])
  const faqs = data?.faqs ?? []
  const activeCategories = useMemo(() => categories.filter(isActive), [categories])
  const categoryName = useCallback(
    (categoryId) =>
      categories.find((category) => category.id === categoryId)?.name ??
      'Uncategorised',
    [categories],
  )

  const normalizedSearch = search.trim().toLowerCase()
  const filteredFaqs = faqs.filter((faq) => {
    if (
      normalizedSearch &&
      !`${faq.question ?? ''} ${faq.answer ?? ''}`
        .toLowerCase()
        .includes(normalizedSearch)
    ) {
      return false
    }
    if (categoryFilter && faq.category_id !== categoryFilter) {
      return false
    }
    if (statusFilter === 'published' && (!faq.is_published || faq.deleted_at)) {
      return false
    }
    if (statusFilter === 'unpublished' && (faq.is_published || faq.deleted_at)) {
      return false
    }
    if (statusFilter === 'archived' && !faq.deleted_at) return false
    return true
  })

  const runOrderSwap = async (first, second) => {
    setBusy(true)
    const [firstResult, secondResult] = await Promise.all([
      setFaqOrder(first.id, second.display_order),
      setFaqOrder(second.id, first.display_order),
    ])
    setBusy(false)
    if (firstResult.error || secondResult.error) {
      showFeedback(
        firstResult.error?.message ??
          secondResult.error?.message ??
          "We couldn't reorder the items. Please try again.",
        'error',
      )
      return false
    }
    await loadData()
    return true
  }

  const handleMoveFaq = async (faq, direction) => {
    if (busy) return
    const siblings = faqs
      .filter((entry) => entry.category_id === faq.category_id && isActive(entry))
      .sort(byOrder)
    const index = siblings.findIndex((entry) => entry.id === faq.id)
    const neighbor = siblings[index + direction]
    if (!neighbor) return
    if (await runOrderSwap(faq, neighbor)) {
      showFeedback('FAQ order updated.')
    }
  }

  const handleDeleteFaq = async () => {
    if (!deleteTarget) return
    setBusy(true)
    const result = await archiveFaq(deleteTarget.id)
    setBusy(false)
    setDeleteTarget(null)
    if (result.error) {
      showFeedback(result.error.message, 'error')
      return
    }
    await loadData()
    showFeedback('FAQ archived. It is now hidden from visitors.')
  }

  const handleRestoreFaq = async (faq) => {
    if (busy) return
    setBusy(true)
    const result = await restoreFaq(faq.id)
    setBusy(false)
    if (result.error) {
      showFeedback(result.error.message, 'error')
      return
    }
    await loadData()
    showFeedback('FAQ restored.')
  }

  return (
    <FAQsCMSPage>
      <FaqBackLink to="/admin/faqs/content">
        <FiArrowLeft aria-hidden="true" size={14} />
        FAQ Content
      </FaqBackLink>

      <AdminPageHeader
        {...adminPageMeta.faqsItems}
        actions={
          <Button to="/admin/faqs/content/items/new" variant="primary">
            <FiPlus aria-hidden="true" size={15} />
            Add FAQ
          </Button>
        }
      />

      {status === 'loading' ? <FaqListSkeletonRows rows={4} /> : null}
      {status === 'error' ? <FaqErrorState onRetry={loadData} /> : null}

      {status === 'ready' ? (
        <>
          <ContentToolbar
            searchValue={search}
            onSearchChange={setSearch}
            searchPlaceholder="Search questions…"
            count={filteredFaqs.length}
            countLabel="FAQs"
            filters={[
              {
                key: 'category',
                label: 'Filter by category',
                value: categoryFilter,
                onChange: setCategoryFilter,
                placeholder: 'All categories',
                options: categories.map((category) => ({
                  value: category.id,
                  label: category.deleted_at
                    ? `${category.name} (archived)`
                    : category.name,
                })),
              },
              {
                key: 'status',
                label: 'Filter by status',
                value: statusFilter,
                onChange: setStatusFilter,
                placeholder: 'All statuses',
                options: [
                  { value: 'published', label: 'Published' },
                  { value: 'unpublished', label: 'Unpublished' },
                  { value: 'archived', label: 'Archived' },
                ],
              },
            ]}
          />

          <ContentList
            title="FAQ items"
            description="Questions, answers and whether each one is published. Ordering is applied within each category."
            emptyState={
              faqs.length === 0 ? (
                activeCategories.length === 0 ? (
                  <EmptyState
                    icon={<FiHelpCircle aria-hidden="true" />}
                    title="Create a category first"
                    description="FAQ items are organised by category. Add your first category, then come back to write your questions and answers."
                    action={
                      <Button
                        to="/admin/faqs/content/categories"
                        variant="outline"
                      >
                        <FiPlus aria-hidden="true" size={15} />
                        Manage categories
                      </Button>
                    }
                  />
                ) : (
                  <EmptyState
                    icon={<FiHelpCircle aria-hidden="true" />}
                    title="No FAQ items yet"
                    description="Add your first question and answer to start building your FAQ section."
                    action={
                      <Button to="/admin/faqs/content/items/new" variant="outline">
                        <FiPlus aria-hidden="true" size={15} />
                        Add FAQ
                      </Button>
                    }
                  />
                )
              ) : filteredFaqs.length === 0 ? (
                <EmptyState
                  icon={<FiHelpCircle aria-hidden="true" />}
                  title="No FAQs match your search"
                  description="Try adjusting your search or filters."
                />
              ) : null
            }
          >
            {filteredFaqs.map((faq) => {
              const siblings = faqs
                .filter(
                  (entry) =>
                    entry.category_id === faq.category_id && isActive(entry),
                )
                .sort(byOrder)
              const index = siblings.findIndex((entry) => entry.id === faq.id)
              return (
                <FaqRow
                  key={faq.id}
                  faq={faq}
                  categoryName={categoryName(faq.category_id)}
                  first={index === 0}
                  last={index === siblings.length - 1}
                  busy={busy}
                  onMove={handleMoveFaq}
                  onDelete={setDeleteTarget}
                  onRestore={handleRestoreFaq}
                />
              )
            })}
          </ContentList>
        </>
      ) : null}

      <ConfirmDialog
        open={Boolean(deleteTarget)}
        title="Delete FAQ?"
        description="This archives the question and hides it from visitors. You can restore it later from the FAQ editor."
        confirmLabel="Delete FAQ"
        cancelLabel="Cancel"
        onConfirm={handleDeleteFaq}
        onCancel={() => setDeleteTarget(null)}
      />

      <Toast visible={Boolean(feedback)} message={feedback} tone={feedbackTone} />
    </FAQsCMSPage>
  )
}

export default FaqItems