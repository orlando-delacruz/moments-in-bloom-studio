import { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'
import { EditorCardActions, EditorCardBody, EditorCardDescription, EditorCardHeader, EditorCardHeading, EditorCardMeta, EditorCardShell, EditorCardTitle } from './EditorCard.styles.js'

function EditorCard({
  title,
  description,
  meta,
  actions,
  children,
  defaultOpen = false,
}) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <EditorCardShell>
      <EditorCardHeader
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
      >
        <EditorCardHeading>
          <EditorCardTitle>{title}</EditorCardTitle>
          {description ? <EditorCardDescription>{description}</EditorCardDescription> : null}
        </EditorCardHeading>
        <EditorCardMeta>
          {meta}
          <span className="chevron">
            <FiChevronDown aria-hidden="true" size={16} />
          </span>
        </EditorCardMeta>
      </EditorCardHeader>
      <EditorCardBody hidden={!open}>
        {children}
        {actions ? <EditorCardActions>{actions}</EditorCardActions> : null}
      </EditorCardBody>
    </EditorCardShell>
  )
}

export default EditorCard