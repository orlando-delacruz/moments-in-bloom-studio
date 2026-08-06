import { CategoryNavSection, CategoryNavContainer, CategoryNavLabel, CategoryNavList, CategoryNavItem } from './CategoryNavigation.styles.js'

function CategoryNavigation({ categories, activeCategory, onCategoryChange }) {
  return (
    <CategoryNavSection>
      <CategoryNavContainer>
        <CategoryNavLabel>Filter By Category</CategoryNavLabel>
        <CategoryNavList role="tablist" aria-label="Gallery Categories">
          {categories.map((category) => (
            <CategoryNavItem
              key={category.id}
              role="tab"
              aria-selected={activeCategory === category.id}
              aria-controls={`gallery-panel-${category.id}`}
              onClick={() => onCategoryChange(category.id)}
            >
              {category.label}
            </CategoryNavItem>
          ))}
        </CategoryNavList>
      </CategoryNavContainer>
    </CategoryNavSection>
  )
}

export default CategoryNavigation
