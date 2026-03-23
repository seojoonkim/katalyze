import { AnimatedSection } from "@/components/animated-section";
import { PageHero } from "@/components/page-hero";
import { ImageCard, SectionHeading } from "@/components/ui";
import { zones } from "@/lib/site-data";

export default function ExplorePage() {
  return (
    <div>
      <PageHero title="Four zones. One culture engine." eyebrow="Explore" description="Discover how Katalyze turns movement through space into movement through the consumer and business funnel." image="/images/zone_stage.webp" />
      <AnimatedSection className="section-pad">
        <div className="container-shell">
          <SectionHeading eyebrow="Zones" title="Curated experiences with distinct business intent" />
          <div className="grid gap-6 md:grid-cols-2">{zones.map((zone) => <ImageCard key={zone.slug} {...zone} className="h-full" />)}</div>
        </div>
      </AnimatedSection>
    </div>
  );
}
