import { AnimatedSection } from "@/components/animated-section";
import { PageHero } from "@/components/page-hero";
import { PillButton } from "@/components/ui";

export default function B2BPage() {
  return (
    <div>
      <PageHero title="A buyer-first trade environment inside a festival shell" eyebrow="B2B Trade" description="Katalyze helps buyers source Korean labels while the broader festival creates cultural urgency and discovery." image="/images/b2b_lounge.webp" />
      <AnimatedSection className="section-pad">
        <div className="container-shell grid gap-6 md:grid-cols-3">
          {[
            ["Buyer matching", "Curated introductions based on category, price point, and region."],
            ["Private lounge", "A hospitality-first setting for meetings, product previews, and relationship building."],
            ["Showcase access", "Fast-track access to launches, founder talks, and cultural signals shaping demand."],
          ].map(([title, desc]) => (
            <div key={title} className="k-card rounded-[28px] p-7">
              <h2 className="text-2xl font-black uppercase text-white">{title}</h2>
              <p className="mt-4 text-sm leading-7 text-white/65">{desc}</p>
            </div>
          ))}
        </div>
        <div className="container-shell mt-10"><PillButton href="/tickets">Apply for buyer access</PillButton></div>
      </AnimatedSection>
    </div>
  );
}
