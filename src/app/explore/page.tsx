import { AnimatedSection } from "@/components/animated-section";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/ui";
import { zones } from "@/lib/site-data";

export default function ExplorePage() {
  return (
    <div>
      <PageHero title="Four zones. One culture engine." eyebrow="Explore" description="Discover how Katalyze turns movement through space into movement through the consumer and business funnel." image="/images/crowd.jpg" />
      <AnimatedSection className="section-pad">
        <div className="container-shell">
          <SectionHeading eyebrow="Zones" title="Curated experiences with distinct business intent" />
          <div className="grid gap-12 md:grid-cols-2">
            {zones.map((zone) => (
              <div key={zone.slug} className="border-l border-[#C4913E] pl-8">
                {zone.subtitle ? <p className="text-sm uppercase tracking-[0.24em] text-[#C4913E]">{zone.subtitle}</p> : null}
                <h3 className="mt-3 text-3xl font-bold uppercase text-white">{zone.title}</h3>
                {zone.description ? <p className="mt-4 text-base leading-7 text-white/85">{zone.description}</p> : null}
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
