import { useEffect, useRef, useState } from 'react'
import { FiAlertCircle, FiCheckCircle, FiInfo } from 'react-icons/fi'
import Button from '../../Button/index.js'
import Toast from '../Toast/index.js'
import { formatSavedAt } from '../../../utils/formatDate.js'
import {
  SaveActionsError,
  SaveActionsRow,
  SaveBarShell,
  SaveStatus,
} from './SaveActions.styles.js'

const MIN_SAVING_MS = 350

function SaveActions({
  dirty = false,
  savedAt,
  saving: savingProp,
  onSave,
  onCancel,
  onReset,
  submitLabel = 'Save Changes',
  cancelLabel = 'Cancel',
  resetLabel = 'Discard',
  successMessage = 'Changes saved successfully.',
}) {
  const [saving, setSaving] = useState(false)
  const [feedback, setFeedback] = useState(null)
  const [feedbackTone, setFeedbackTone] = useState('success')
  const [inlineError, setInlineError] = useState(null)
  const hideTimer = useRef(null)

  useEffect(() => {
    return () => {
      if (hideTimer.current) {
        window.clearTimeout(hideTimer.current)
      }
    }
  }, [])

  const showFeedback = (message, tone = 'success') => {
    setFeedback(message)
    setFeedbackTone(tone)
    if (hideTimer.current) {
      window.clearTimeout(hideTimer.current)
    }
    hideTimer.current = window.setTimeout(() => setFeedback(null), 3200)
  }

  const handleSave = async () => {
    if (!dirty || saving || savingProp) return
    setSaving(true)
    setInlineError(null)
    const startedAt = Date.now()
    let result
    try {
      result = (await onSave()) ?? { ok: true }
    } catch {
      result = { ok: false }
    }
    const elapsed = Date.now() - startedAt
    if (elapsed < MIN_SAVING_MS) {
      await new Promise((resolve) => window.setTimeout(resolve, MIN_SAVING_MS - elapsed))
    }
    setSaving(false)
    if (result.ok) {
      showFeedback(successMessage)
    } else {
      const message =
        result.message ??
        'Unable to save changes. Please review the highlighted fields.'
      setInlineError(message)
      showFeedback(message, 'error')
    }
  }

  const handleReset = () => {
    setInlineError(null)
    onReset?.()
    showFeedback('Changes discarded.')
  }

  const isSaving = saving || savingProp

  return (
    <SaveBarShell>
      <div>
        <SaveStatus $dirty={dirty} role="status" aria-live="polite">
          {dirty ? (
            <>
              <span className="status-dot" aria-hidden="true" />
              Unsaved changes
            </>
          ) : savedAt ? (
            <>
              <FiCheckCircle aria-hidden="true" size={15} />
              Saved {formatSavedAt(savedAt)}
            </>
          ) : (
            <>
              <FiInfo aria-hidden="true" size={15} />
              No changes yet
            </>
          )}
        </SaveStatus>
        {inlineError ? (
          <SaveActionsError role="alert">
            <FiAlertCircle aria-hidden="true" size={15} />
            {inlineError}
          </SaveActionsError>
        ) : null}
      </div>
      <SaveActionsRow>
        {onReset ? (
          <Button
            type="button"
            variant="ghost"
            radius="md"
            disabled={!dirty || isSaving}
            onClick={handleReset}
          >
            {resetLabel}
          </Button>
        ) : null}
        {onCancel ? (
          <Button
            type="button"
            variant="outline"
            radius="md"
            disabled={isSaving}
            onClick={onCancel}
          >
            {cancelLabel}
          </Button>
        ) : null}
        <Button
          type="button"
          variant="primary"
          radius="md"
          disabled={!dirty || isSaving}
          loading={isSaving}
          onClick={handleSave}
          aria-busy={isSaving}
        >
          {isSaving ? 'Saving…' : submitLabel}
        </Button>
      </SaveActionsRow>
      <Toast
        visible={Boolean(feedback)}
        message={feedback}
        tone={feedbackTone}
        position="fixed"
      />
    </SaveBarShell>
  )
}

export default SaveActions