import { useEffect, useRef } from 'react'
import { FiAlertTriangle } from 'react-icons/fi'
import Button from '../../Button/index.js'
import {
  ConfirmActions,
  ConfirmCard,
  ConfirmDescription,
  ConfirmIcon,
  ConfirmOverlay,
  ConfirmTitle,
} from './ConfirmDialog.styles.js'

function ConfirmDialog({
  open = false,
  title,
  description,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  onConfirm,
  onCancel,
}) {
  const cardRef = useRef(null)

  useEffect(() => {
    if (!open) return undefined

    const previousActive = document.activeElement
    cardRef.current?.querySelector('[data-cancel]')?.focus()

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onCancel?.()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      if (previousActive instanceof HTMLElement) {
        previousActive.focus()
      }
    }
  }, [open, onCancel])

  if (!open) return null

  return (
    <ConfirmOverlay role="presentation">
      <ConfirmCard
        ref={cardRef}
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="confirm-title"
        aria-describedby="confirm-description"
      >
        <ConfirmIcon>
          <FiAlertTriangle aria-hidden="true" size={22} />
        </ConfirmIcon>
        <ConfirmTitle id="confirm-title">{title}</ConfirmTitle>
        {description ? (
          <ConfirmDescription id="confirm-description">{description}</ConfirmDescription>
        ) : null}
        <ConfirmActions>
          <Button type="button" variant="outline" onClick={onCancel} data-cancel>
            {cancelLabel}
          </Button>
          <Button type="button" variant="danger" onClick={onConfirm}>
            {confirmLabel}
          </Button>
        </ConfirmActions>
      </ConfirmCard>
    </ConfirmOverlay>
  )
}

export default ConfirmDialog