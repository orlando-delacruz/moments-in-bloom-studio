import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { FiArrowLeft, FiHelpCircle, FiPlus } from 'react-icons/fi'
import AdminPageHeader from '../../../components/admin/AdminPageHeader/index.js'
import ContentList from '../../../components/admin/ContentList/index.js'
import EmptyState from '../../../components/admin/EmptyState/index.js'
import Modal from '../../../components/admin/Modal/index.js'
import Toast from '../../../components/admin/Toast/index.js'
import Button from '../../../components/Button/index.js'
import { SelectField } from '../../../components/FormField/index.js'
import { adminPageMeta } from '../../../constants/admin.js'
import {
  archiveCategory,
  fetchFaqsAdmin,
  restoreCategory,
  setCategoryOrder,
} from '../../../services/faqs.js'
import {
  FaqBackLink,
  FaqModalHint,
  FAQsCMSPage,
} from './FAQsCMS.styles.js'
import {
  CategoryRow,
  FaqErrorState,
  FaqListSkeletonRows,
} from './FaqListParts.jsx'
import { byOrder, isActive } from './faqListUtils.js'

function FaqCategories() {
  const [data, setData] = useState(null)
  const [status, setStatus] = useState('loading')
  const [reloadKey, setReloadKey] = useState(0)
  const [busy, setBusy] = useState(false)
  const [categoryDelete, setCategoryDelete] = useState(null)
  const [moveTarget, setMoveTarget] = useState('')
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

  const assignedFaqCount = (categoryId) =>
    faqs.filter((faq) => faq.category_id === categoryId && isActive(faq)).length

  const runOrderSwap = async (first, second) => {
    setBusy(true)
    const [firstResult, secondResult] = await Promise.all([
      setCategoryOrder(first.id, second.display_order),
      setCategoryOrder(second.id, first.display_order),
    ])
    setBusy(false)
    if (firstResult.error || secondResult.error) {
      showFeedback(
        firstResult.error?.message ??
          secondResult.error?.message ??
          "We couldn't reorder the categories. Please try again.",
        'error',
      )
      return false
    }
    await loadData()
    return true
  }

  const handleMoveCategory = async (category, direction) => {
    if (busy) return
    const siblings = categories.filter(isActive).sort(byOrder)
    const index = siblings.findIndex((entry) => entry.id === category.id)
    const neighbor = siblings[index + direction]
    if (!neighbor) return
    if (await runOrderSwap(category, neighbor)) {
      showFeedback('Category order updated.')
    }
  }

  const openCategoryDelete = (category) => {
    setMoveTarget('')
    setCategoryDelete(category)
  }

  const handleDeleteCategory = async () => {
    if (!categoryDelete) return
    setBusy(true)
    const result = await archiveCategory(categoryDelete.id, {
      moveFaqsTo: moveTarget || undefined,
    })
    setBusy(false)
    setCategoryDelete(null)
    setMoveTarget('')
    if (result.error) {
      showFeedback(result.error.message, 'error')
      return
    }
    await loadData()
    showFeedback('Category archived.')
  }

  const handleRestoreCategory = async (category) => {
    if (busy) return
    setBusy(true)
    const result = await restoreCategory(category.id)
    setBusy(false)
    if (result.error) {
      showFeedback(result.error.message, 'error')
      return
    }
    await loadData()
    showFeedback('Category restored.')
  }

  const pendingCategoryFaqs = categoryDelete
    ? assignedFaqCount(categoryDelete.id)
    : 0
  const moveOptions = categories
    .filter((category) => category.id !== categoryDelete?.id && isActive(category))
    .sort(byOrder)
    .map((category) => ({ value: category.id, label: category.name }))

  return (
    <FAQsCMSPage>
      <FaqBackLink to="/admin/faqs/content">
        <FiArrowLeft aria-hidden="true" size={14} />
        FAQ Content
      </FaqBackLink>

      <AdminPageHeader
        {...adminPageMeta.faqsCategories}
        actions={
          <Button to="/admin/faqs/content/categories/new" variant="primary">
            <FiPlus aria-hidden="true" size={15} />
            Add category
          </Button>
        }
      />

      {status === 'loading' ? <FaqListSkeletonRows rows={4} /> : null}
      {status === 'error' ? <FaqErrorState onRetry={loadData} /> : null}

      {status === 'ready' ? (
        <ContentList
          title="FAQ categories"
          description="Groups shown as the filter on the FAQ page. The first category appears selected by default."
          emptyState={
            <EmptyState
              icon={<FiHelpCircle aria-hidden="true" />}
              title="No categories yet"
              description="Create your first category to organize your questions."
              action={
                <Button to="/admin/faqs/content/categories/new" variant="outline">
                  <FiPlus aria-hidden="true" size={15} />
                  Add category
                </Button>
              }
            />
          }
        >
          {[...categories].sort(byOrder).map((category, index, list) => {
            const activeSiblings = list.filter(isActive)
            const activeIndex = activeSiblings.findIndex(
              (entry) => entry.id === category.id,
            )
            return (
              <CategoryRow
                key={category.id}
                category={category}
                count={assignedFaqCount(category.id)}
                first={activeIndex === 0}
                last={activeIndex === activeSiblings.length - 1}
                busy={busy}
                onMove={handleMoveCategory}
                onDelete={openCategoryDelete}
                onRestore={handleRestoreCategory}
              />
            )
          })}
        </ContentList>
      ) : null}

      <Modal
        open={Boolean(categoryDelete)}
        title="Delete category?"
        description={
          pendingCategoryFaqs > 0
            ? `This category still has ${pendingCategoryFaqs} FAQ${pendingCategoryFaqs === 1 ? '' : 's'}. Choose a category to move them into before deleting — nothing will be lost.`
            : 'This archives the category and removes it from the public filter.'
        }
        onClose={() => setCategoryDelete(null)}
        footer={
          <>
            <Button
              type="button"
              variant="outline"
              disabled={busy}
              onClick={() => setCategoryDelete(null)}
            >
              Cancel
            </Button>
            <Button
              type="button"
              variant="danger"
              disabled={busy || (pendingCategoryFaqs > 0 && !moveTarget)}
              onClick={handleDeleteCategory}
            >
              {busy ? 'Deleting…' : 'Delete Category'}
            </Button>
          </>
        }
      >
        {pendingCategoryFaqs > 0 ? (
          <SelectField
            label={`Move ${pendingCategoryFaqs} FAQ${pendingCategoryFaqs === 1 ? '' : 's'} to`}
            value={moveTarget}
            onChange={(event) => setMoveTarget(event.target.value)}
            options={moveOptions}
            placeholder="Choose a category…"
          />
        ) : (
          <FaqModalHint>
            The category's questions are archived with it.
          </FaqModalHint>
        )}
      </Modal>

      <Toast visible={Boolean(feedback)} message={feedback} tone={feedbackTone} />
    </FAQsCMSPage>
  )
}

export default FaqCategories