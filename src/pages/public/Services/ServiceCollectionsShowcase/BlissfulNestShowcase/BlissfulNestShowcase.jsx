import { motion } from "framer-motion";
import { FiArrowRight, FiGift } from "react-icons/fi";

import Button from "../../../../../components/Button/index.js";

import * as S from "./BlissfulNestShowcase.styles.js";

function BlissfulNestShowcase({ collection }) {
  const productCategories = collection.productCategories || [];

  if (!productCategories.length) return null;

  return (
    <S.NestSection>
      <S.NestIntro>
        <S.NestEyebrow>{collection.sisterLabel}</S.NestEyebrow>
        <S.NestBrandTitle>{collection.title}</S.NestBrandTitle>
        <S.NestIntroText>{collection.intro}</S.NestIntroText>
        <div>
          <Button to="/contact" variant="primary" size="large">
            <span>Enquire Now</span>
            <FiArrowRight />
          </Button>
        </div>
      </S.NestIntro>

      {productCategories.map((category) => (
        <S.ProductCategory key={category.id}>
          <S.ProductCategoryHeader>
            <S.ProductCategoryTag>Current Offering</S.ProductCategoryTag>
            <S.ProductCategoryTitle>{category.name}</S.ProductCategoryTitle>
            {category.description && (
              <S.ProductCategoryDesc>{category.description}</S.ProductCategoryDesc>
            )}
          </S.ProductCategoryHeader>

          <S.PackageGrid>
            {category.packages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <S.PackageCard>
                  <S.PackageImageWrapper>
                    <img src={pkg.image} alt={pkg.name} loading="lazy" />
                  </S.PackageImageWrapper>
                  <S.PackageBody>
                    <S.PackageBadge>{pkg.badge}</S.PackageBadge>
                    <S.PackageName>{pkg.name}</S.PackageName>
                    <S.PackageTagline>{pkg.tagline}</S.PackageTagline>
                    <S.PackageDesc>{pkg.description}</S.PackageDesc>
                    <S.PackageItems>
                      {pkg.items.map((item) => (
                        <li key={item}>
                          <FiGift />
                          <span>{item}</span>
                        </li>
                      ))}
                    </S.PackageItems>
                  </S.PackageBody>
                </S.PackageCard>
              </motion.div>
            ))}
          </S.PackageGrid>
        </S.ProductCategory>
      ))}
    </S.NestSection>
  );
}

export default BlissfulNestShowcase;
