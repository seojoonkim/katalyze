import { AnimatedSection } from "@/components/animated-section";
import { PageHero } from "@/components/page-hero";
import { programMoments } from "@/lib/site-data";

export default function ProgramPage() {
  return (
    <div>
      <PageHero title="Programming for impact, not filler" eyebrow="Program" description="Each hour is designed to build discovery, energy, and conversion across audiences." image="/images/zone_stage.webp" />
      <AnimatedSection className="section-pad">
        <div className="container-shell space-y-4">
          {programMoments.map((item) => (
            <div key={item.time} className="k-card rounded-[28px] p-6 md:flex md:items-center md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[#d4af37]">{item.time}</p>
                <h2 className="mt-2 text-3xl font-black uppercase text-white">{item.title}</h2>
              </div>
              <p className="mt-4 max-w-xl text-sm leading-7 text-white/65 md:mt-0">{item.meta}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}
