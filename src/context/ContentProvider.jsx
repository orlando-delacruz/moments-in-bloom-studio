import { useCallback, useMemo, useState } from 'react'
import {
  getSeedContent,
  getStoredContent,
  resetPageContent,
  savePageContent,
} from '../services/content.js'
import { ContentContext } from './ContentContext.jsx'

const cloneValues = (value) => JSON.parse(JSON.stringify(value))

function ContentProvider({ children }) {
  const [stored, setStored] = useState(() => getStoredContent())
  const [dirtyPages, setDirtyPages] = useState(() => new Set())

  const updatePage = useCallback((pageKey, updater) => {
    setStored((prev) => {
      const current = prev[pageKey]?.values ?? getSeedContent(pageKey)
      const next =
        typeof updater === 'function'
          ? updater(cloneValues(current))
          : cloneValues(updater)
      return { ...prev, [pageKey]: { ...prev[pageKey], values: next } }
    })
    setDirtyPages((prev) => {
      const next = new Set(prev)
      next.add(pageKey)
      return next
    })
  }, [])

  const savePage = useCallback((pageKey) => {
    setStored((prev) => {
      const entry = savePageContent(pageKey, prev[pageKey]?.values ?? {})
      return { ...prev, [pageKey]: entry }
    })
    setDirtyPages((prev) => {
      const next = new Set(prev)
      next.delete(pageKey)
      return next
    })
  }, [])

  const resetPage = useCallback((pageKey) => {
    resetPageContent(pageKey)
    setStored((prev) => {
      const next = { ...prev }
      delete next[pageKey]
      return next
    })
    setDirtyPages((prev) => {
      const next = new Set(prev)
      next.delete(pageKey)
      return next
    })
  }, [])

  const value = useMemo(
    () => ({ stored, dirtyPages, updatePage, savePage, resetPage }),
    [stored, dirtyPages, updatePage, savePage, resetPage],
  )

  return <ContentContext.Provider value={value}>{children}</ContentContext.Provider>
}

export default ContentProvider