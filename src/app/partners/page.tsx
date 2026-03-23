import { AnimatedSection } from "@/components/animated-section";
import { PageHero } from "@/components/page-hero";
import { partnerLogos } from "@/lib/site-data";

export default function PartnersPage() {
  return (
    <div>
      <PageHero title="Partnerships with premium cultural gravity" eyebrow="Partners" description="From headline sponsorships to curated installations, Katalyze offers brand formats built for relevance and results." image="/images/b2b_lounge.webp" />
      <AnimatedSection className="section-pad">
        <div className="container-shell grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <div className="k-card rounded-[32px] p-8">
            <h2 className="text-3xl font-black uppercase text-white">Partner tiers</h2>
            <ul className="mt-5 space-y-4 text-sm leading-7 text-white/70">
              <li>• Founding partner — owned zone + launch event</li>
              <li>• Cultural partner — editorial integration + live content</li>
              <li>• Hospitality partner — VIP lounge and guest experience</li>
            </ul>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {partnerLogos.map((logo) => <div key={logo} className="k-card rounded-[24px] p-6 text-center text-sm uppercase tracking-[0.28em] text-white/75">{logo}</div>)}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
