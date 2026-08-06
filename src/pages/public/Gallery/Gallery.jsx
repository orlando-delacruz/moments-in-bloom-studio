import { useGallery } from './hooks/index.js'
import { useLightbox } from './hooks/index.js'

import {
  CTA_CONTENT,
  FEATURED_STORIES,
  FEATURED_STORIES_SECTION_CONTENT,
  GALLERY_CATEGORIES,
  GALLERY_ITEMS,
  HERO_CONTENT,
  INSTAGRAM_CONTENT,
  INSTAGRAM_POSTS,
  INTRODUCTION_CONTENT,
} from './constants/index.js'

import {
  CategoryNavigation,
  EditorialGallery,
  FeaturedStory,
  GalleryCTA,
  GalleryHero,
  GalleryLightbox,
  InstagramPreview,
  Introduction,
} from './components/index.js'

import * as S from './Gallery.styles.js'

function Gallery() {
  const { activeCategory, setActiveCategory, filteredItems, categories } = useGallery(
    GALLERY_ITEMS,
    GALLERY_CATEGORIES
  )

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
    <S.GalleryPage>
      <GalleryHero content={HERO_CONTENT} />

      <Introduction content={INTRODUCTION_CONTENT} />

      <CategoryNavigation
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <EditorialGallery items={filteredItems} onImageClick={openLightbox} />

      <FeaturedStory
        content={{
          ...FEATURED_STORIES_SECTION_CONTENT,
          stories: FEATURED_STORIES,
        }}
      />

      <InstagramPreview content={INSTAGRAM_CONTENT} posts={INSTAGRAM_POSTS} />

      <GalleryCTA content={CTA_CONTENT} />

      <GalleryLightbox
        isOpen={isOpen}
        currentItem={currentItem}
        currentIndex={currentIndex}
        totalItems={totalItems}
        onClose={closeLightbox}
        onNavigate={navigateLightbox}
      />
    </S.GalleryPage>
  )
}

export default Gallery
