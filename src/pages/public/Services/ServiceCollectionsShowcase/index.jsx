import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import CollectionSelector from "../../../../components/CollectionSelector/index.js";
import Container from "../../../../components/Container/index.js";
import Section from "../../../../components/Section/index.js";
import { SECTION_TONES } from "../../../../constants/ui.js";

import BlissfulNestShowcase from "./BlissfulNestShowcase/BlissfulNestShowcase.jsx";
import DecorHireCatalogue from "./DecorHireCatalogue/DecorHireCatalogue.jsx";
import LuxePhotoboothShowcase from "./LuxePhotoboothShowcase/LuxePhotoboothShowcase.jsx";

import * as S from "./ServiceCollectionsShowcase.styles.js";

function ServiceCollectionsShowcase({ collections = [], id }) {
  const [activeCollectionId, setActiveCollectionId] = useState(
    collections?.[0]?.id || "",
  );

  if (!collections || !collections.length) return null;

  const activeCollection =
    collections.find((collection) => collection.id === activeCollectionId) ||
    collections[0];

  return (
    <Section
      id={id}
      subtitle="Client Services"
      title="Bespoke Collections & Experiences"
      description="Select a service collection below to explore our decor hire catalogue, premium photobooth experiences, and the Blissful Nest sub-brand."
      tone={SECTION_TONES.SURFACE}
    >
      <Container>
        <S.ShowcaseSection>
          <CollectionSelector
            categories={collections}
            activeId={activeCollection.id}
            ariaLabel="Main Service Collections"
            idPrefix="collection"
            onSelect={setActiveCollectionId}
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCollection.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              id={`collection-panel-${activeCollection.id}`}
              role="tabpanel"
              aria-labelledby={`collection-tab-${activeCollection.id}`}
            >
              <S.ActiveCollectionHero>
                <S.CollectionHeroContent>
                  <S.CollectionHeroTagline>
                    {activeCollection.tagline}
                  </S.CollectionHeroTagline>
                  <S.CollectionHeroTitle>
                    {activeCollection.title}
                  </S.CollectionHeroTitle>
                  <S.CollectionHeroDesc>
                    {activeCollection.description}
                  </S.CollectionHeroDesc>
                  <S.CollectionHeroStats>
                    <S.StatItem>
                      <S.StatNumber>Melbourne</S.StatNumber>
                      <S.StatLabel>Service Region</S.StatLabel>
                    </S.StatItem>
                    <S.StatItem>
                      <S.StatNumber>100%</S.StatNumber>
                      <S.StatLabel>Bespoke Setup</S.StatLabel>
                    </S.StatItem>
                    <S.StatItem>
                      <S.StatNumber>5★</S.StatNumber>
                      <S.StatLabel>Guest Rating</S.StatLabel>
                    </S.StatItem>
                  </S.CollectionHeroStats>
                </S.CollectionHeroContent>
                <S.CollectionHeroImageWrapper>
                  <img
                    src={activeCollection.coverImage?.src}
                    alt={
                      activeCollection.coverImage?.alt || activeCollection.title
                    }
                    loading="lazy"
                  />
                </S.CollectionHeroImageWrapper>
              </S.ActiveCollectionHero>

              {activeCollection.id === "decor-hire" && (
                <DecorHireCatalogue collection={activeCollection} />
              )}

              {activeCollection.id === "luxe-photobooth" && (
                <LuxePhotoboothShowcase collection={activeCollection} />
              )}

              {activeCollection.type === "sub-brand" && (
                <BlissfulNestShowcase collection={activeCollection} />
              )}
            </motion.div>
          </AnimatePresence>
        </S.ShowcaseSection>
      </Container>
    </Section>
  );
}

export default ServiceCollectionsShowcase;
