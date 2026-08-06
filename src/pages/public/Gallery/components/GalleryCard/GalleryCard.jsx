import * as S from './GalleryCard.styles.js'

function GalleryCard({ item, index, onClick }) {
  return (
    <S.GalleryItem
      $size={item.size}
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -4 }}
    >
      <S.GalleryImageWrapper>
        <S.GalleryImage
          src={item.src}
          alt={item.title}
          loading="lazy"
        />
        <S.GalleryOverlay
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          <S.GalleryNumber>{String(index + 1).padStart(2, '0')}</S.GalleryNumber>
          <S.GalleryCaption>
            <S.GalleryCaptionTitle>{item.title}</S.GalleryCaptionTitle>
            <S.GalleryCaptionSubtitle>{item.subtitle}</S.GalleryCaptionSubtitle>
          </S.GalleryCaption>
        </S.GalleryOverlay>
      </S.GalleryImageWrapper>
      <button
        onClick={onClick}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          zIndex: 2,
        }}
        aria-label={`View ${item.title}`}
      />
    </S.GalleryItem>
  )
}

export default GalleryCard
