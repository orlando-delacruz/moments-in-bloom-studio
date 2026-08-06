import {
  LoadingRule,
  LoadingScreenBrand,
  LoadingScreenContent,
  LoadingScreenRoot,
} from './LoadingScreen.styles.js'

const brandVariants = {
  initial: { opacity: 0, letterSpacing: '0.2em' },
  animate: { opacity: 1, letterSpacing: '-0.02em', transition: { duration: 1.1, ease: 'easeOut' } },
}

function LoadingScreen({ label = 'Loading Moments in Blooms' }) {
  return (
    <LoadingScreenRoot
      role="status"
      aria-live="polite"
      initial={{ y: 0, opacity: 1 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: '-100%', opacity: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <LoadingScreenContent>
        <LoadingScreenBrand variants={brandVariants} initial="initial" animate="animate">
          Moments in Blooms
        </LoadingScreenBrand>
        <LoadingRule initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 0.8, delay: 0.4 }} />
        <span className="sr-only">{label}</span>
      </LoadingScreenContent>
    </LoadingScreenRoot>
  )
}

export default LoadingScreen
