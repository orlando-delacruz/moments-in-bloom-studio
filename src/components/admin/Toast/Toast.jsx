import { AnimatePresence } from 'framer-motion'
import { FiAlertCircle, FiCheckCircle } from 'react-icons/fi'
import { EASE_LUXE } from '../../../styles/animations.js'
import { ToastShell } from './Toast.styles.js'

function Toast({ message, tone = 'success', visible = false }) {
  const Icon = tone === 'success' ? FiCheckCircle : FiAlertCircle

  return (
    <AnimatePresence>
      {visible && message ? (
        <ToastShell
          key="toast"
          $tone={tone}
          role="status"
          initial={{ opacity: 0, y: 16, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 8, scale: 0.98 }}
          transition={{ duration: 0.28, ease: EASE_LUXE }}
        >
          <Icon aria-hidden="true" size={17} />
          <span>{message}</span>
        </ToastShell>
      ) : null}
    </AnimatePresence>
  )
}

export default Toast