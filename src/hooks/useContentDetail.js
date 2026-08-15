import { useEffect, useMemo, useRef, useState } from 'react'
import { useContent } from './useContent.js'

const clone = (value) =>
  value == null ? null : JSON.parse(JSON.stringify(value))

/**
 * Draft-first editing for a single slice of a content page.
 *
 * Pass `sectionKey` to edit an object section (e.g. `hero`), or `listKey` +
 * `itemId` to edit one item inside a list section. When `itemId` is `"new"`
 * the draft starts from `initialValue` and saving appends it to the list.
 *
 * Edits stay local (`draft`) until `saveDraft` is called, which pushes the
 * change into the shared content store and persists it.
 */
function useContentDetail(pageKey, { sectionKey, listKey, itemId, initialValue }) {
  const { values, savedAt, update, save } = useContent(pageKey)

  const item = useMemo(() => {
    if (listKey) {
      const items = values[listKey] ?? []
      return items.find((entry) => entry.id === itemId)
    }
    return values[sectionKey]
  }, [values, listKey, sectionKey, itemId])

  const creating = Boolean(listKey && itemId === 'new')
  const exists = Boolean(creating || item)

  const [draft, setDraft] = useState(() =>
    clone(creating ? initialValue : item ?? null),
  )
  const [dirty, setDirty] = useState(false)
  const syncedRef = useRef({ item, initialValue })

  useEffect(() => {
    const previous = syncedRef.current
    if (previous.item !== item || previous.initialValue !== initialValue) {
      syncedRef.current = { item, initialValue }
      setDraft(clone(creating ? initialValue : item ?? null))
      setDirty(false)
    }
  }, [item, initialValue, creating])

  const patch = (updater) => {
    setDraft((current) =>
      typeof updater === 'function' ? updater(current) : updater,
    )
    setDirty(true)
  }

  const persist = (nextValue) => {
    update((current) => {
      if (listKey) {
        return { ...current, [listKey]: nextValue }
      }
      return { ...current, [sectionKey]: nextValue }
    })
    save(pageKey)
  }

  const saveDraft = (next = draft) => {
    if (listKey) {
      const items = values[listKey] ?? []
      const existsInList = items.some((entry) => entry.id === next.id)
      const nextItems = existsInList
        ? items.map((entry) => (entry.id === next.id ? next : entry))
        : [...items, next]
      persist(nextItems)
    } else {
      persist(next)
    }
    setDraft(clone(next))
    setDirty(false)
  }

  const discardDraft = () => {
    setDraft(clone(creating ? initialValue : item ?? null))
    setDirty(false)
  }

  const removeItem = () => {
    if (!listKey || creating) return
    persist((values[listKey] ?? []).filter((entry) => entry.id !== itemId))
    setDirty(false)
  }

  return {
    values,
    item,
    draft,
    dirty,
    savedAt,
    creating,
    exists,
    patch,
    saveDraft,
    discardDraft,
    removeItem,
  }
}

export default useContentDetail
export { useContentDetail }