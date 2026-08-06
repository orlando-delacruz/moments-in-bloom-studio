import { useState, useCallback, useEffect } from 'react'

/**
 * Custom hook for managing lightbox state and navigation
 * @param {Array} items - Array of gallery items
 * @returns {Object} Lightbox state and handlers
 */
export const useLightbox = (items = []) => {
  const [isOpen, setIsOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openLightbox = useCallback((index) => {
    setCurrentIndex(index)
    setIsOpen(true)
    document.body.style.overflow = 'hidden'
  }, [])

  const closeLightbox = useCallback(() => {
    setIsOpen(false)
    document.body.style.overflow = ''
  }, [])

  const navigateLightbox = useCallback((direction) => {
    if (!items.length) return
    
    setCurrentIndex(prev => {
      if (direction === 'next') {
        return (prev + 1) % items.length
      }
      return (prev - 1 + items.length) % items.length
    })
  }, [items.length])

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeLightbox()
      } else if (e.key === 'ArrowRight') {
        navigateLightbox('next')
      } else if (e.key === 'ArrowLeft') {
        navigateLightbox('prev')
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, closeLightbox, navigateLightbox])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  return {
    isOpen,
    currentIndex,
    currentItem: items[currentIndex],
    openLightbox,
    closeLightbox,
    navigateLightbox,
    totalItems: items.length,
  }
}

export default useLightbox
