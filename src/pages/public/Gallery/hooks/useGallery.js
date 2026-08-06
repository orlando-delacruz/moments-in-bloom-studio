import { useCallback, useMemo, useState } from 'react'

import { filterByCategory } from '../utils/galleryHelpers.js'

/**
 * Custom hook for managing gallery state and filtering logic
 * @param {Array} allItems - All gallery items
 * @param {Array} categories - Available categories
 * @returns {Object} Gallery state and handlers
 */
export const useGallery = (allItems = [], categories = []) => {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredItems = useMemo(
    () => filterByCategory(allItems, activeCategory),
    [allItems, activeCategory]
  )

  const handleCategoryChange = useCallback((categoryId) => {
    setActiveCategory(categoryId)
  }, [])

  return {
    activeCategory,
    setActiveCategory: handleCategoryChange,
    filteredItems,
    categories,
    totalItems: allItems.length,
    displayedItems: filteredItems.length,
  }
}

export default useGallery
