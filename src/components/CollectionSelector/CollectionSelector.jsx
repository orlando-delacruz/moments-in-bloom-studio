import { FiArrowRight } from "react-icons/fi";
import {
  ActivePill,
  CollectionArrow,
  CollectionDesc,
  CollectionIndex,
  CollectionItem,
  CollectionMeta,
  CollectionName,
  CollectionNav,
  CollectionNavList,
  CollectionSubBrand,
  CollectionTextGroup,
} from "./CollectionSelector.styles.js";

function CollectionSelector({
  categories = [],
  activeId,
  onSelect,
  ariaLabel = "Service Collections",
  idPrefix = "category",
}) {
  if (!categories.length) return null;

  return (
    <CollectionNav aria-label={ariaLabel}>
      <CollectionNavList role="tablist" aria-label={ariaLabel}>
        {categories.map((category, index) => {
          const isActive = category.id === activeId;

          return (
            <CollectionItem
              key={category.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`${idPrefix}-panel-${category.id}`}
              id={`${idPrefix}-tab-${category.id}`}
              $isActive={isActive}
              onClick={() => onSelect(category.id)}
            >
              {isActive && (
                <ActivePill
                  layoutId={`${idPrefix}ActivePill`}
                  transition={{ type: "spring", stiffness: 420, damping: 34 }}
                />
              )}

              <CollectionIndex $isActive={isActive} aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </CollectionIndex>

              <CollectionTextGroup>
                <CollectionName $isActive={isActive}>
                  {category.title}
                </CollectionName>
                {category.type === "sub-brand" && (
                  <CollectionSubBrand>Sister brand</CollectionSubBrand>
                )}
                {category.navSub && (
                  <CollectionDesc>{category.navSub}</CollectionDesc>
                )}
                {category.navMeta && (
                  <CollectionMeta $isActive={isActive}>
                    {category.navMeta}
                  </CollectionMeta>
                )}
              </CollectionTextGroup>

              <CollectionArrow
                $isActive={isActive}
                data-arrow
                aria-hidden="true"
              >
                <FiArrowRight />
              </CollectionArrow>
            </CollectionItem>
          );
        })}
      </CollectionNavList>
    </CollectionNav>
  );
}

export default CollectionSelector;
