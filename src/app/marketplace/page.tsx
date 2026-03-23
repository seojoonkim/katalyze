import { AnimatedSection } from "@/components/animated-section";
import { PageHero } from "@/components/page-hero";
import { SectionHeading, PillButton } from "@/components/ui";

const formats = [
  { title: "Fashion Drops", subtitle: "Streetwear", description: "Limited capsules, designer collaborations, and influencer-led launches." },
  { title: "K-Beauty Showcase", subtitle: "Beauty", description: "Discovery-led activation format for premium and emerging beauty brands." },
  { title: "Curated Retail", subtitle: "Marketplace", description: "Designed for conversion, with visual merchandising and premium guest flow." },
];

export default function MarketplacePage() {
  return (
    <div>
      <PageHero title="The Drop" eyebrow="Marketplace" description="A retail-first environment for premium launches, K-beauty discovery, and limited-edition sell-through." image="/images/zone_drop.webp" />
      <AnimatedSection className="section-pad">
        <div className="container-shell">
          <SectionHeading eyebrow="Formats" title="Retail environments with clear conversion intent" />
          <div className="grid gap-12 md:grid-cols-3">
            {formats.map((format) => (
              <div key={format.title} className="border-b border-white/10 pb-8">
                <p className="text-xs uppercase tracking-[0.24em] text-[#d4af37]">{format.subtitle}</p>
                <h3 className="mt-3 text-2xl font-bold uppercase text-white">{format.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/65">{format.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="container-shell mt-16"><PillButton href="/partners">Inquire about a drop</PillButton></div>
      </AnimatedSection>
    </div>
  );
}
