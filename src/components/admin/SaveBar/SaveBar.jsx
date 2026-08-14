import { useEffect, useRef, useState } from 'react'
import { FiCheckCircle, FiInfo } from 'react-icons/fi'
import Button from '../../Button/index.js'
import ConfirmDialog from '../ConfirmDialog/index.js'
import Toast from '../Toast/index.js'
import { SaveActions, SaveBarShell, SaveStatus } from './SaveBar.styles.js'

const formatSavedAt = (isoDate) => {
  try {
    return new Intl.DateTimeFormat('en-AU', {
      day: 'numeric',
      month: 'short',
      hour: 'numeric',
      minute: '2-digit',
    }).format(new Date(isoDate))
  } catch {
    return isoDate
  }
}

function SaveBar({ dirty = false, savedAt, onSave, onReset }) {
  const [saving, setSaving] = useState(false)
  const [confirmReset, setConfirmReset] = useState(false)
  const [feedback, setFeedback] = useState(null)
  const hideTimer = useRef(null)

  useEffect(() => {
    return () => {
      if (hideTimer.current) {
        window.clearTimeout(hideTimer.current)
      }
    }
  }, [])

  const showFeedback = (message) => {
    setFeedback(message)
    if (hideTimer.current) {
      window.clearTimeout(hideTimer.current)
    }
    hideTimer.current = window.setTimeout(() => setFeedback(null), 3000)
  }

  const handleSave = () => {
    if (!dirty || saving) return
    setSaving(true)
    onSave()
    setSaving(false)
    showFeedback('Changes saved.')
  }

  const handleReset = () => {
    setConfirmReset(false)
    onReset()
    showFeedback('Changes reset to defaults.')
  }

  return (
    <SaveBarShell>
      <SaveStatus $dirty={dirty}>
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
      <SaveActions>
        <Button
          type="button"
          variant="outline"
          disabled={!dirty || saving}
          onClick={() => setConfirmReset(true)}
        >
          Reset
        </Button>
        <Button
          type="button"
          variant="primary"
          disabled={!dirty || saving}
          onClick={handleSave}
          aria-busy={saving}
        >
          {saving ? 'Saving…' : 'Save changes'}
        </Button>
      </SaveActions>

      <ConfirmDialog
        open={confirmReset}
        title="Reset this page?"
        description="This discards your unsaved edits and restores the original default content. This cannot be undone."
        confirmLabel="Reset to defaults"
        cancelLabel="Cancel"
        onConfirm={handleReset}
        onCancel={() => setConfirmReset(false)}
      />
      <Toast visible={Boolean(feedback)} message={feedback} />
    </SaveBarShell>
  )
}

export default SaveBar