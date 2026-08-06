import { pageShellStyles } from '../../pageStyles.js'
import Container from '../../../components/Container/index.js'
import Section from '../../../components/Section/index.js'
import { useGallery } from './hooks/useGallery.js'
import { useLightbox } from './hooks/useLightbox.js'
import {
  GALLERY_CATEGORIES,
  GALLERY_ITEMS,
  FEATURED_STORIES,
  INSTAGRAM_POSTS,
  HERO_CONTENT,
  INTRODUCTION_CONTENT,
  CTA_CONTENT,
  INSTAGRAM_CONTENT,
  FEATURED_STORIES_SECTION_CONTENT,
} from './constants/galleryData.js'
import {
  GalleryHero,
  Introduction,
  CategoryNavigation,
  EditorialGallery,
  FeaturedStory,
  InstagramPreview,
  GalleryCTA,
  GalleryLightbox,
} from './components/index.js'
import { GalleryPage } from './Gallery.styles.js'

function Gallery() {
  const {
    activeCategory,
    setActiveCategory,
    filteredItems,
    categories,
  } = useGallery(GALLERY_ITEMS, GALLERY_CATEGORIES)

  const {
    isOpen,
    currentIndex,
    currentItem,
    openLightbox,
    closeLightbox,
    navigateLightbox,
    totalItems,
  } = useLightbox(filteredItems)

  return (
    <GalleryPage>
      {/* Hero Section */}
      <GalleryHero content={HERO_CONTENT} />

      {/* Introduction Section */}
      <Introduction content={INTRODUCTION_CONTENT} />

      {/* Category Navigation */}
      <CategoryNavigation
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      {/* Editorial Gallery */}
      <EditorialGallery items={filteredItems} onImageClick={openLightbox} />

      {/* Featured Event Stories */}
      <FeaturedStory
        content={{
          ...FEATURED_STORIES_SECTION_CONTENT,
          stories: FEATURED_STORIES,
        }}
      />

      {/* Instagram Section */}
      <InstagramPreview content={INSTAGRAM_CONTENT} posts={INSTAGRAM_POSTS} />

      {/* CTA Section */}
      <GalleryCTA content={CTA_CONTENT} />

      {/* Lightbox */}
      <GalleryLightbox
        isOpen={isOpen}
        currentItem={currentItem}
        currentIndex={currentIndex}
        totalItems={totalItems}
        onClose={closeLightbox}
        onNavigate={navigateLightbox}
      />
    </GalleryPage>
  )
}

export default Gallery
