import { AnimatedSection } from "@/components/animated-section";
import { PageHero } from "@/components/page-hero";
import { ImageCard, PillButton } from "@/components/ui";

const cards = [
  { title: "Fashion Drops", subtitle: "Streetwear", description: "Limited capsules, designer collaborations, and influencer-led launches.", image: "/images/fashion_drop.webp" },
  { title: "K-Beauty Showcase", subtitle: "Beauty", description: "Discovery-led activation format for premium and emerging beauty brands.", image: "/images/kbeauty_showcase.webp" },
  { title: "Curated Retail", subtitle: "Marketplace", description: "Designed for conversion, with visual merchandising and premium guest flow.", image: "/images/zone_drop.webp" },
];

export default function MarketplacePage() {
  return (
    <div>
      <PageHero title="The Drop" eyebrow="Marketplace" description="A retail-first environment for premium launches, K-beauty discovery, and limited-edition sell-through." image="/images/zone_drop.webp" />
      <AnimatedSection className="section-pad">
        <div className="container-shell grid gap-6 md:grid-cols-3">{cards.map((card) => <ImageCard key={card.title} {...card} />)}</div>
        <div className="container-shell mt-10"><PillButton href="/partners">Inquire about a drop</PillButton></div>
      </AnimatedSection>
    </div>
  );
}
