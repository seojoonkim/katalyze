import { AnimatedSection } from "@/components/animated-section";
import { PageHero } from "@/components/page-hero";
import { programMoments } from "@/lib/site-data";

export default function ProgramPage() {
  return (
    <div>
      <PageHero title="Programming for impact, not filler" eyebrow="Program" description="Each hour is designed to build discovery, energy, and conversion across audiences." image="/images/zone_stage.jpg" />
      <AnimatedSection className="section-pad">
        <div className="container-shell">
          {programMoments.map((item, idx) => (
            <div key={item.time} className={`py-8 md:flex md:items-center md:justify-between ${idx !== programMoments.length - 1 ? 'border-b border-white/10' : ''}`}>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[#d4af37]">{item.time}</p>
                <h2 className="mt-2 text-4xl font-black uppercase text-white leading-tight">{item.title}</h2>
              </div>
              <p className="mt-4 max-w-xl text-sm leading-7 text-white/65 md:mt-0 md:text-right">{item.meta}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}
