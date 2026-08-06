import { useState, useCallback, useEffect } from 'react'
import { filterByCategory } from '../utils/galleryHelpers'

/**
 * Custom hook for managing gallery state and filtering logic
 * @param {Array} allItems - All gallery items
 * @param {Array} categories - Available categories
 * @returns {Object} Gallery state and handlers
 */
export const useGallery = (allItems = [], categories = []) => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [filteredItems, setFilteredItems] = useState(allItems)

  // Filter items when category changes
  useEffect(() => {
    const filtered = filterByCategory(allItems, activeCategory)
    setFilteredItems(filtered)
  }, [activeCategory, allItems])

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
