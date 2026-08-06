import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import Button from "../../../../components/Button/index.js";
import CollectionSelector from "../../../../components/CollectionSelector/index.js";
import Container from "../../../../components/Container/index.js";
import Section from "../../../../components/Section/index.js";
import { SECTION_TONES } from "../../../../constants/ui.js";
import {
  blissfulNestIntro,
  blissfulNestPrizeOptions,
  photoboothHighlights,
  photoboothPackages,
} from "../../../../constants/services.js";
import {
  ActiveCategoryHero,
  AddOnsBlock,
  CategoryBlock,
  CategoryHeader,
  CategoryHeroContent,
  CategoryHeroDesc,
  CategoryHeroImageWrapper,
  CategoryHeroStats,
  CategoryHeroTagline,
  CategoryHeroTitle,
  CategorySubtitle,
  CategoryTabTag,
  CategoryTitle,
  ExclusiveFramesBadge,
  ExclusiveFramesDesc,
  ExclusiveFramesFeature,
  ExclusiveFramesTitle,
  GalleryCaption,
  GalleryGrid,
  GalleryItem,
  InclusionList,
  InclusionsBlock,
  OptionCard,
  OptionCardBody,
  OptionDesc,
  OptionGrid,
  OptionName,
  OptionSpecs,
  PackageBadge,
  PackageCard,
  PackageGrid,
  PackageName,
  PackagePrice,
  PackageTagline,
  PhotoboothStorySection,
  PricingContainer,
  PricingHeader,
  PrizeBadge,
  PrizeCard,
  PrizeContent,
  PrizeDesc,
  PrizeOptionsGrid,
  PrizeTagline,
  PrizeTitle,
  RedRomanceCard,
  ShowcaseSection,
  StatItem,
  StatLabel,
  StatNumber,
  StoryHeroBlock,
  StudioFeatureCard,
  StudioGradeGrid,
  SubcategoryNav,
  SubcategoryPill,
  TravelNote,
} from "./ServiceCategoriesShowcase.styles.js";

function ServiceCategoriesShowcase({ categories = [], id }) {
  const [activeCategoryId, setActiveCategoryId] = useState(
    categories?.[0]?.id || "",
  );
  const [activeDecorSubcategory, setActiveDecorSubcategory] = useState("all");

  if (!categories || !categories.length) return null;

  const activeCategory =
    categories.find((cat) => cat.id === activeCategoryId) || categories[0];

  const decorSectionsToDisplay = activeCategory.sections
    ? activeCategory.sections.filter(
        (sec) =>
          activeDecorSubcategory === "all" || activeDecorSubcategory === sec.id,
      )
    : [];

  return (
    <Section
      id={id}
      subtitle="Client Services"
      title="Bespoke Collections & Experiences"
      description="Select a primary service collection below to explore our luxury decor hire, studio-grade photobooths, and custom claw machine prize offerings."
      tone={SECTION_TONES.DEFAULT}
    >
      <Container>
        <ShowcaseSection>
          {/* LEVEL 1: Main Service Category Selector */}
          <CollectionSelector
            categories={categories}
            activeId={activeCategoryId}
            ariaLabel="Main Service Categories"
            idPrefix="category"
            onSelect={(id) => {
              setActiveCategoryId(id);
              if (id === "decor-hire") {
                setActiveDecorSubcategory("all");
              }
            }}
          />

          {/* ACTIVE CATEGORY SHOWCASE DISPLAY */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              id={`category-panel-${activeCategory.id}`}
              role="tabpanel"
              aria-labelledby={`category-tab-${activeCategory.id}`}
            >
              <ShowcaseSection>
                {/* Main Category Feature Showcase Header */}
                <ActiveCategoryHero>
                  <CategoryHeroContent>
                    <CategoryHeroTagline>
                      {activeCategory.tagline}
                    </CategoryHeroTagline>
                    <CategoryHeroTitle>
                      {activeCategory.title}
                    </CategoryHeroTitle>
                    <CategoryHeroDesc>
                      {activeCategory.description}
                    </CategoryHeroDesc>
                    <CategoryHeroStats>
                      <StatItem>
                        <StatNumber>Melbourne</StatNumber>
                        <StatLabel>Service Region</StatLabel>
                      </StatItem>
                      <StatItem>
                        <StatNumber>100%</StatNumber>
                        <StatLabel>Bespoke Setup</StatLabel>
                      </StatItem>
                      <StatItem>
                        <StatNumber>5★</StatNumber>
                        <StatLabel>Guest Rating</StatLabel>
                      </StatItem>
                    </CategoryHeroStats>
                  </CategoryHeroContent>
                  <CategoryHeroImageWrapper>
                    <img
                      src={activeCategory.coverImage?.src}
                      alt={
                        activeCategory.coverImage?.alt || activeCategory.title
                      }
                      loading="lazy"
                    />
                  </CategoryHeroImageWrapper>
                </ActiveCategoryHero>

                {/* -----------------------------------------------------------
                    SPECIAL CATEGORY 1: DECOR HIRE CATALOGUE
                   ----------------------------------------------------------- */}
                {activeCategory.id === "decor-hire" &&
                  activeCategory.sections && (
                    <ShowcaseSection>
                      {/* Subcategory Pills Selector */}
                      <div
                        style={{
                          background: "#FAF7F2",
                          padding: "1.25rem 1.75rem",
                          borderRadius: "16px",
                          border: "1px solid rgba(0,0,0,0.06)",
                        }}
                      >
                        <CategorySubtitle
                          style={{
                            fontWeight: 600,
                            color: "#1A1817",
                            marginBottom: "0.5rem",
                          }}
                        >
                          Explore Subcategories:
                        </CategorySubtitle>
                        <SubcategoryNav
                          role="tablist"
                          aria-label="Decor Hire Subcategories"
                        >
                          <SubcategoryPill
                            $isActive={activeDecorSubcategory === "all"}
                            onClick={() => setActiveDecorSubcategory("all")}
                          >
                            All Subcategories
                          </SubcategoryPill>
                          {activeCategory.sections.map((sec) => (
                            <SubcategoryPill
                              key={sec.id}
                              $isActive={activeDecorSubcategory === sec.id}
                              onClick={() => setActiveDecorSubcategory(sec.id)}
                            >
                              {sec.title}
                            </SubcategoryPill>
                          ))}
                        </SubcategoryNav>
                      </div>

                      {/* Render Filtered Subcategories */}
                      {decorSectionsToDisplay.map((sec) => (
                        <CategoryBlock key={sec.id}>
                          <CategoryHeader>
                            <CategoryTitle>{sec.title}</CategoryTitle>
                            <CategorySubtitle>{sec.subtitle}</CategorySubtitle>
                          </CategoryHeader>

                          {/* Special Red Romance Showcase */}
                          {sec.id === "flower-arrangements" &&
                            sec.featuredItem && (
                              <RedRomanceCard>
                                <div>
                                  <CategoryTabTag style={{ color: "#C67495" }}>
                                    Featured Collection
                                  </CategoryTabTag>
                                  <CategoryTitle
                                    style={{
                                      fontSize: "1.8rem",
                                      color: "#8B1E3F",
                                    }}
                                  >
                                    • {sec.featuredItem.name}
                                  </CategoryTitle>
                                  <CategorySubtitle>
                                    {sec.featuredItem.description}
                                  </CategorySubtitle>
                                </div>

                                <OptionGrid>
                                  {sec.featuredItem.options?.map(
                                    (opt, oIdx) => (
                                      <OptionCard key={oIdx}>
                                        <img
                                          src={opt.image}
                                          alt={opt.name}
                                          loading="lazy"
                                        />
                                        <OptionCardBody>
                                          <OptionName>{opt.name}</OptionName>
                                          <OptionSpecs>{opt.specs}</OptionSpecs>
                                          <OptionDesc>{opt.desc}</OptionDesc>
                                        </OptionCardBody>
                                      </OptionCard>
                                    ),
                                  )}
                                </OptionGrid>
                              </RedRomanceCard>
                            )}

                          {/* Special Whimsical Garden Showcase */}
                          {sec.id === "whimsical-garden" &&
                            sec.featuredItem && (
                              <div>
                                <div style={{ marginBottom: "1.25rem" }}>
                                  <CategoryTitle style={{ fontSize: "1.6rem" }}>
                                    • {sec.featuredItem.name}
                                  </CategoryTitle>
                                  <CategorySubtitle>
                                    {sec.featuredItem.description}
                                  </CategorySubtitle>
                                </div>
                                <GalleryGrid>
                                  {sec.featuredItem.gallery?.map(
                                    (gal, gIdx) => (
                                      <GalleryItem key={gIdx}>
                                        <img
                                          src={gal.src}
                                          alt={gal.title}
                                          loading="lazy"
                                        />
                                        <GalleryCaption>
                                          {gal.title}
                                        </GalleryCaption>
                                      </GalleryItem>
                                    ),
                                  )}
                                </GalleryGrid>
                              </div>
                            )}

                          {/* Backdrops Section */}
                          {sec.id === "backdrops-collection" &&
                            sec.featuredItem && (
                              <div
                                style={{
                                  display: "grid",
                                  gridTemplateColumns: "1fr",
                                  gap: "2rem",
                                }}
                              >
                                <div
                                  style={{
                                    display: "grid",
                                    gridTemplateColumns:
                                      "repeat(auto-fit, minmax(300px, 1fr))",
                                    gap: "2rem",
                                    alignItems: "center",
                                  }}
                                >
                                  <div>
                                    <OptionSpecs
                                      style={{
                                        fontSize: "0.8rem",
                                        marginBottom: "0.5rem",
                                      }}
                                    >
                                      Dimensions: {sec.featuredItem.dimensions}
                                    </OptionSpecs>
                                    <CategoryTitle
                                      style={{
                                        fontSize: "1.8rem",
                                        marginBottom: "0.75rem",
                                      }}
                                    >
                                      • {sec.featuredItem.name}
                                    </CategoryTitle>
                                    <CategorySubtitle
                                      style={{ marginBottom: "1.5rem" }}
                                    >
                                      {sec.featuredItem.description}
                                    </CategorySubtitle>
                                    <Button
                                      to="/contact"
                                      variant="primary"
                                      size="medium"
                                    >
                                      <span>Request a Quote</span>
                                      <FiArrowRight />
                                    </Button>
                                  </div>
                                  <div
                                    style={{
                                      borderRadius: "16px",
                                      overflow: "hidden",
                                      height: "280px",
                                    }}
                                  >
                                    <img
                                      src={sec.featuredItem.image}
                                      alt={sec.featuredItem.name}
                                      style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                            )}

                          {/* Plinths & Props Section */}
                          {sec.id === "plinths-props" && sec.featuredItem && (
                            <div
                              style={{
                                display: "grid",
                                gridTemplateColumns:
                                  "repeat(auto-fit, minmax(300px, 1fr))",
                                gap: "2rem",
                                alignItems: "center",
                              }}
                            >
                              <div
                                style={{
                                  borderRadius: "16px",
                                  overflow: "hidden",
                                  height: "280px",
                                }}
                              >
                                <img
                                  src={sec.featuredItem.image}
                                  alt={sec.featuredItem.name}
                                  style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                  }}
                                />
                              </div>
                              <div>
                                <OptionSpecs
                                  style={{
                                    fontSize: "0.8rem",
                                    marginBottom: "0.5rem",
                                  }}
                                >
                                  Catalogue Showcase
                                </OptionSpecs>
                                <CategoryTitle
                                  style={{
                                    fontSize: "1.8rem",
                                    marginBottom: "0.75rem",
                                  }}
                                >
                                  • {sec.featuredItem.name}
                                </CategoryTitle>
                                <CategorySubtitle
                                  style={{ marginBottom: "1.5rem" }}
                                >
                                  {sec.featuredItem.description}
                                </CategorySubtitle>
                                <Button
                                  to="/contact"
                                  variant="secondary"
                                  size="medium"
                                >
                                  <span>Request a Quote</span>
                                  <FiArrowRight />
                                </Button>
                              </div>
                            </div>
                          )}
                        </CategoryBlock>
                      ))}
                    </ShowcaseSection>
                  )}

                {/* -----------------------------------------------------------
                    SPECIAL CATEGORY 2: LUXE PHOTOBOOTH EXPERIENCES
                   ----------------------------------------------------------- */}
                {activeCategory.id === "luxe-booths" && (
                  <PhotoboothStorySection>
                    {/* Storytelling 1: Luxury Booth Experience */}
                    <StoryHeroBlock>
                      <div>
                        <CategoryTabTag style={{ color: "#C67495" }}>
                          Refined Entertainment
                        </CategoryTabTag>
                        <CategoryTitle
                          style={{ fontSize: "2.5rem", marginBottom: "1rem" }}
                        >
                          Luxury Booth Experience
                        </CategoryTitle>
                        <CategorySubtitle
                          style={{
                            fontSize: "1.05rem",
                            lineHeight: "1.8",
                            marginBottom: "1.5rem",
                          }}
                        >
                          Designed for Melbourne’s most elegant celebrations,
                          our studio photobooths elevate traditional event
                          captures into high-fashion portraiture. Equipped with
                          beauty softbox lights and high-resolution DSLR
                          sensors, every photo looks like a magazine print.
                        </CategorySubtitle>
                        <Button to="/contact" variant="primary" size="large">
                          <span>Reserve Your Date</span>
                          <FiArrowRight />
                        </Button>
                      </div>
                      <div
                        style={{
                          borderRadius: "20px",
                          overflow: "hidden",
                          height: "340px",
                          boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
                        }}
                      >
                        <img
                          src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1200&q=85"
                          alt="Luxury Photobooth Guest Moment"
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                    </StoryHeroBlock>

                    {/* Storytelling 2: Australia's First Take-Home Photobooth Frames */}
                    <ExclusiveFramesFeature>
                      <div>
                        <ExclusiveFramesBadge>
                          {photoboothHighlights.framesFeature.badge}
                        </ExclusiveFramesBadge>
                        <ExclusiveFramesTitle>
                          {photoboothHighlights.framesFeature.title}
                        </ExclusiveFramesTitle>
                        <ExclusiveFramesDesc>
                          {photoboothHighlights.framesFeature.description}
                        </ExclusiveFramesDesc>
                        <InclusionList $popular={true}>
                          {photoboothHighlights.framesFeature.highlights.map(
                            (item, fIdx) => (
                              <li key={fIdx}>
                                <FiCheck />
                                <span>{item}</span>
                              </li>
                            ),
                          )}
                        </InclusionList>
                      </div>
                      <div
                        style={{
                          borderRadius: "16px",
                          overflow: "hidden",
                          height: "320px",
                          border: "1px solid rgba(212, 175, 55, 0.3)",
                        }}
                      >
                        <img
                          src={photoboothHighlights.framesFeature.image.src}
                          alt={photoboothHighlights.framesFeature.image.alt}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                    </ExclusiveFramesFeature>

                    {/* Storytelling 3: Studio-Grade Moments */}
                    <div>
                      <div
                        style={{ textAlign: "center", marginBottom: "2.5rem" }}
                      >
                        <CategoryTabTag style={{ color: "#C67495" }}>
                          {photoboothHighlights.studioGrade.badge}
                        </CategoryTabTag>
                        <CategoryTitle style={{ fontSize: "2.2rem" }}>
                          {photoboothHighlights.studioGrade.title}
                        </CategoryTitle>
                        <CategorySubtitle
                          style={{ maxWidth: "650px", margin: "0.5rem auto 0" }}
                        >
                          {photoboothHighlights.studioGrade.description}
                        </CategorySubtitle>
                      </div>

                      <StudioGradeGrid>
                        {photoboothHighlights.studioGrade.features.map(
                          (feat, sIdx) => (
                            <StudioFeatureCard key={sIdx}>
                              <h6>• {feat.title}</h6>
                              <p>{feat.desc}</p>
                            </StudioFeatureCard>
                          ),
                        )}
                      </StudioGradeGrid>
                    </div>

                    {/* Dedicated Hotel-Level Pricing Section */}
                    <PricingContainer>
                      <PricingHeader>
                        <CategoryTabTag style={{ color: "#C67495" }}>
                          Transparent Investment
                        </CategoryTabTag>
                        <h4>Luxury Photobooth Packages</h4>
                        <p>
                          All-inclusive packages tailored with zero hidden fees.
                          Select the perfect suite for your event duration and
                          guest experience.
                        </p>
                      </PricingHeader>

                      <PackageGrid>
                        {photoboothPackages.map((pkg) => (
                          <PackageCard key={pkg.id} $popular={pkg.popular}>
                            {pkg.popular && (
                              <PackageBadge>{pkg.badge}</PackageBadge>
                            )}

                            <PackageName>{pkg.name}</PackageName>

                            <PackagePrice $popular={pkg.popular}>
                              <span className="amount">{pkg.price}</span>
                              <span className="duration">
                                / {pkg.hireDuration}
                              </span>
                            </PackagePrice>

                            <PackageTagline $popular={pkg.popular}>
                              {pkg.description}
                            </PackageTagline>

                            <InclusionsBlock>
                              <h6>Inclusions</h6>
                              <InclusionList $popular={pkg.popular}>
                                {pkg.inclusions.map((inc, iIdx) => (
                                  <li key={iIdx}>
                                    <FiCheck />
                                    <span>{inc}</span>
                                  </li>
                                ))}
                              </InclusionList>
                            </InclusionsBlock>

                            <AddOnsBlock $popular={pkg.popular}>
                              <h6>Optional Add-Ons</h6>
                              <ul>
                                {pkg.addOns.map((add, aIdx) => (
                                  <li key={aIdx}>• {add}</li>
                                ))}
                              </ul>
                            </AddOnsBlock>

                            <TravelNote>Note: {pkg.travelNotes}</TravelNote>

                            <Button
                              to="/contact"
                              variant={pkg.popular ? "primary" : "secondary"}
                              size="medium"
                              fullWidth
                            >
                              <span>{pkg.ctaText}</span>
                              <FiArrowRight />
                            </Button>
                          </PackageCard>
                        ))}
                      </PackageGrid>
                    </PricingContainer>
                  </PhotoboothStorySection>
                )}

                {/* -----------------------------------------------------------
                    SPECIAL CATEGORY 3: BLISSFUL NEST ARCADE
                   ----------------------------------------------------------- */}
                {activeCategory.id === "blissful-nest" && (
                  <ShowcaseSection>
                    {/* Blissful Nest Intro & Claw Machines */}
                    <StoryHeroBlock>
                      <div>
                        <CategoryTabTag style={{ color: "#C67495" }}>
                          Playful Elegance
                        </CategoryTabTag>
                        <CategoryTitle
                          style={{ fontSize: "2.5rem", marginBottom: "1rem" }}
                        >
                          Claw Machines
                        </CategoryTitle>
                        <CategorySubtitle
                          style={{
                            fontSize: "1.05rem",
                            lineHeight: "1.8",
                            marginBottom: "1.5rem",
                          }}
                        >
                          {blissfulNestIntro.paragraph}
                        </CategorySubtitle>
                        <Button to="/contact" variant="primary" size="large">
                          <span>Enquire Now</span>
                          <FiArrowRight />
                        </Button>
                      </div>
                      <div
                        style={{
                          borderRadius: "20px",
                          overflow: "hidden",
                          height: "340px",
                        }}
                      >
                        <img
                          src="https://images.unsplash.com/photo-1763076703663-8d28a686612f?auto=format&fit=crop&w=1200&q=85"
                          alt="Blissful Nest Luxury Claw Machine"
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                    </StoryHeroBlock>

                    {/* Prize Options Section */}
                    <CategoryBlock>
                      <CategoryHeader>
                        <CategoryTitle>Prize Options</CategoryTitle>
                        <CategorySubtitle>
                          Choose from our pre-curated gift tiers or request
                          custom bespoke prize sourcing for your brand or
                          wedding palette.
                        </CategorySubtitle>
                      </CategoryHeader>

                      <PrizeOptionsGrid>
                        {blissfulNestPrizeOptions.map((prize) => (
                          <PrizeCard key={prize.id}>
                            <img
                              src={prize.image}
                              alt={prize.title}
                              loading="lazy"
                            />
                            <PrizeContent>
                              <PrizeBadge>{prize.badge}</PrizeBadge>
                              <PrizeTitle>{prize.title}</PrizeTitle>
                              <PrizeTagline>{prize.tagline}</PrizeTagline>
                              <PrizeDesc>{prize.description}</PrizeDesc>
                            </PrizeContent>
                          </PrizeCard>
                        ))}
                      </PrizeOptionsGrid>
                    </CategoryBlock>
                  </ShowcaseSection>
                )}
              </ShowcaseSection>
            </motion.div>
          </AnimatePresence>
        </ShowcaseSection>
      </Container>
    </Section>
  );
}

export default ServiceCategoriesShowcase;
