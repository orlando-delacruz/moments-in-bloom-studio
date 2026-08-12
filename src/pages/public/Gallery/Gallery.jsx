import { useGallery } from './hooks/index.js'
import { useLightbox } from './hooks/index.js'

import {
  CTA_CONTENT,
  GALLERY_CATEGORIES,
  GALLERY_ITEMS,
  HERO_CONTENT,
  INSTAGRAM_CONTENT,
  INSTAGRAM_POSTS,
  INTRODUCTION_CONTENT,
} from './constants/index.js'

import {
  EditorialGallery,
  GalleryCTA,
  GalleryHero,
  GalleryLightbox,
  InstagramPreview,
  Introduction,
} from './components/index.js'

import * as S from './Gallery.styles.js'

function Gallery() {
  const { visibleItems, hasMore, loadMore } = useGallery(
    GALLERY_ITEMS,
    GALLERY_CATEGORIES,
  )

  const {
    isOpen,
    currentIndex,
    currentItem,
    openLightbox,
    closeLightbox,
    navigateLightbox,
    totalItems,
  } = useLightbox(visibleItems)

  return (
    <S.GalleryPage>
      <GalleryHero content={HERO_CONTENT} />

      <Introduction content={INTRODUCTION_CONTENT} />

      <EditorialGallery
        items={visibleItems}
        hasMore={hasMore}
        onLoadMore={loadMore}
        onImageClick={openLightbox}
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