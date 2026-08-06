import Container from '../components/Container/index.js'
import Heading from '../components/Heading/index.js'
import SEO from '../components/SEO/index.js'
import Section from '../components/Section/index.js'
import Text from '../components/Text/index.js'

function PagePlaceholder({ PageShell, title, description, eyebrow }) {
  return (
    <PageShell>
      <SEO title={title} description={description} />
      <Section $tone="soft">
        <Container>
          <div className="page-placeholder-content">
            <Text $muted $size="0.75rem">{eyebrow}</Text>
            <Heading level={1}>{title}</Heading>
            <Text $muted>{description}</Text>
          </div>
        </Container>
      </Section>
    </PageShell>
  )
}

export default PagePlaceholder
