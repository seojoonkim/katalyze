import { AnimatedSection } from "@/components/animated-section";
import { PageHero } from "@/components/page-hero";
import { partnerLogos } from "@/lib/site-data";

export default function PartnersPage() {
  return (
    <div>
      <PageHero title="Partnerships with premium cultural gravity" eyebrow="Partners" description="From headline sponsorships to curated installations, Katalyze offers brand formats built for relevance and results." image="/images/b2b_connect.jpg" />
      <AnimatedSection className="section-pad">
        <div className="container-shell">
          <div className="mb-16">
            <h2 className="text-3xl font-black uppercase text-white mb-8">Partner tiers</h2>
            <ul className="space-y-6 text-sm leading-8 text-white/70 max-w-2xl">
              <li className="border-l border-[#d4af37] pl-6">
                <span className="text-[#d4af37] font-semibold">Founding partner</span> — owned zone + launch event
              </li>
              <li className="border-l border-[#d4af37] pl-6">
                <span className="text-[#d4af37] font-semibold">Cultural partner</span> — editorial integration + live content
              </li>
              <li className="border-l border-[#d4af37] pl-6">
                <span className="text-[#d4af37] font-semibold">Hospitality partner</span> — VIP lounge and guest experience
              </li>
            </ul>
          </div>
          <div className="border-t border-white/10 pt-12">
            <p className="text-xs uppercase tracking-[0.3em] text-[#d4af37] mb-8">Current partners</p>
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
              {partnerLogos.map((logo) => (
                <div key={logo} className="text-center">
                  <p className="text-sm uppercase tracking-[0.28em] text-white/75">{logo}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
