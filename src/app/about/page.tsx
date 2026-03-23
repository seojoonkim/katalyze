import { AnimatedSection } from "@/components/animated-section";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/ui";

export default function AboutPage() {
  return (
    <div>
      <PageHero title="Where Korean culture becomes global deal flow" eyebrow="About Katalyze" description="Katalyze is a hybrid cultural festival and business platform designed to turn Seoul energy into measurable commercial momentum." image="/images/hero_parallax_crowd.webp" />
      <AnimatedSection className="section-pad">
        <div className="container-shell grid gap-16 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeading eyebrow="Manifesto" title="Editorial taste. Market intent." />
            <p className="text-lg leading-8 text-white/70">Katalyze curates the collision of fandom, premium retail, hospitality, music, and B2B trade into one orchestrated weekend. It is designed for culture lovers who want access, and for brands that want outcomes.</p>
          </div>
          <div className="border-l border-white/10 pl-8 lg:pl-12">
            <p className="text-xs uppercase tracking-[0.25em] text-[#d4af37] mb-4">Why it matters</p>
            <ul className="space-y-6 text-sm leading-7 text-white/70">
              <li>• Seoul as the live interface for culture, design, and commerce</li>
              <li>• A premium format that serves both consumer excitement and B2B efficiency</li>
              <li>• A destination brand with long-term expansion potential across Asia</li>
            </ul>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
