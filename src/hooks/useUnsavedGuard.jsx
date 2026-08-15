import { useEffect } from 'react'
import { useBlocker } from 'react-router-dom'
import ConfirmDialog from '../components/admin/ConfirmDialog/index.js'

/**
 * Protects a page from losing unsaved edits. Returns a `ConfirmDialog`
 * (render it in the page tree) that appears when the user attempts to
 * navigate away, and guards against hard reloads/closing the tab.
 */
function useUnsavedGuard({
  active = false,
  title = 'Unsaved changes',
  description = 'You have unsaved changes. Are you sure you want to leave?',
  confirmLabel = 'Leave',
  cancelLabel = 'Stay',
}) {
  const blocker = useBlocker(active)

  useEffect(() => {
    if (!active) return undefined
    const handleBeforeUnload = (event) => {
      event.preventDefault()
      event.returnValue = ''
    }
    window.addEventListener('beforeunload', handleBeforeUnload)
    return () => window.removeEventListener('beforeunload', handleBeforeUnload)
  }, [active])

  if (blocker.state !== 'blocked') return null

  return (
    <ConfirmDialog
      open
      title={title}
      description={description}
      confirmLabel={confirmLabel}
      cancelLabel={cancelLabel}
      onConfirm={() => {
        blocker.proceed()
        blocker.reset()
      }}
      onCancel={() => blocker.reset()}
    />
  )
}

export default useUnsavedGuard
export { useUnsavedGuard }