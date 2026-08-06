import * as S from './CategoryNavigation.styles.js'

function CategoryNavigation({ categories, activeCategory, onCategoryChange }) {
  return (
    <S.CategoryNavSection>
      <S.CategoryNavContainer>
        <S.CategoryNavLabel>Filter By Category</S.CategoryNavLabel>
        <S.CategoryNavList role="tablist" aria-label="Gallery Categories">
          {categories.map((category) => (
            <S.CategoryNavItem
              key={category.id}
              role="tab"
              aria-selected={activeCategory === category.id}
              aria-controls={`gallery-panel-${category.id}`}
              onClick={() => onCategoryChange(category.id)}
            >
              {category.label}
            </S.CategoryNavItem>
          ))}
        </S.CategoryNavList>
      </S.CategoryNavContainer>
    </S.CategoryNavSection>
  )
}

export default CategoryNavigation
