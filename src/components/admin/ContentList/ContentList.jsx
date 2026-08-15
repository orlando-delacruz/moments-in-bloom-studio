import { ContentGroupBody, ContentGroupDescription, ContentGroupHeading, ContentGroupShell, ContentGroupTitle } from './ContentList.styles.js'

function ContentList({ title, description, emptyState, children }) {
  return (
    <ContentGroupShell>
      {title ? (
        <ContentGroupHeading>
          <ContentGroupTitle>{title}</ContentGroupTitle>
          {description ? (
            <ContentGroupDescription>{description}</ContentGroupDescription>
          ) : null}
        </ContentGroupHeading>
      ) : null}
      {emptyState ? (
        emptyState
      ) : (
        <ContentGroupBody>{children}</ContentGroupBody>
      )}
    </ContentGroupShell>
  )
}

export default ContentList