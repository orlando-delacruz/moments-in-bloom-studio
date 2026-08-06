import Heading from '../Heading/index.js'
import { SectionDescription, SectionHeader, SectionRoot, SectionSubtitle, SectionAction } from './Section.styles.js'

function Section({
  action,
  children,
  description,
  subtitle,
  title,
  headingLevel = 2,
  tone = 'default',
  ...props
}) {
  const hasHeader = Boolean(title || subtitle || description || action)

  return (
    <SectionRoot $tone={tone} {...props}>
      {hasHeader ? (
        <SectionHeader>
          {subtitle ? <SectionSubtitle>{subtitle}</SectionSubtitle> : null}
          {title ? <Heading level={headingLevel}>{title}</Heading> : null}
          {description ? <SectionDescription>{description}</SectionDescription> : null}
          {action ? <SectionAction>{action}</SectionAction> : null}
        </SectionHeader>
      ) : null}
      {children}
    </SectionRoot>
  )
}

export default Section
