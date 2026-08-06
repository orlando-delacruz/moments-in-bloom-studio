import Container from '../../../../components/Container/index.js'
import Section from '../../../../components/Section/index.js'
import { SECTION_TONES } from '../../../../constants/ui.js'
import {
  GalleryGrid,
  GalleryItem,
  ItemCategory,
  ItemOverlay,
  ItemTitle,
} from './GalleryPreview.styles.js'

function GalleryPreview({ content, id }) {
  if (!content) return null

  return (
    <Section
      id={id}
      subtitle={content.subtitle}
      title={content.title}
      description={content.description}
      tone={SECTION_TONES.DEFAULT}
    >
      <Container>
        <GalleryGrid>
          {content.items.map((item, index) => (
            <GalleryItem
              key={item.id || index}
              $variant={item.variant}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <img
                src={item.image.src}
                alt={item.image.alt}
                loading="lazy"
              />
              <ItemOverlay>
                <ItemCategory>{item.category}</ItemCategory>
                <ItemTitle>{item.title}</ItemTitle>
              </ItemOverlay>
            </GalleryItem>
          ))}
        </GalleryGrid>
      </Container>
    </Section>
  )
}

export default GalleryPreview
