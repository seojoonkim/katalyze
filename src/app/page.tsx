import Image from "next/image";
import { ArrowRight, Building2, Ticket, BriefcaseBusiness } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { ImageCard, PillButton, SectionHeading } from "@/components/ui";
import { audienceCards, partnerLogos, programMoments, stats, zones } from "@/lib/site-data";

export default function Home() {
  return (
    <div>
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/hero_bg_main.webp" alt="DDP Seoul" fill priority className="object-cover" />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="container-shell relative flex min-h-screen flex-col justify-end pb-16 pt-32 md:pb-24">
          <p className="mb-4 text-xs uppercase tracking-[0.42em] text-[#d4af37]">Seoul DDP · September 2026</p>
          <h1 className="max-w-5xl font-black uppercase leading-[0.85] text-white" style={{ fontFamily: "var(--font-bebas)", fontSize: "clamp(5rem, 16vw, 13rem)" }}>KATALYZE</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-white/75 md:text-xl">
            A new Seoul-born festival platform where fans, brands, and global buyers collide across culture, commerce, and creativity.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <PillButton href="/tickets">Get tickets</PillButton>
            <PillButton href="/partners" variant="secondary">Partner with us</PillButton>
            <PillButton href="/b2b" variant="secondary">B2B access</PillButton>
          </div>
          <div className="mt-14 grid gap-4 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="k-card rounded-[24px] p-5">
                <p className="text-3xl font-black text-white md:text-4xl">{stat.value}</p>
                <p className="mt-2 text-sm uppercase tracking-[0.18em] text-white/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AnimatedSection className="section-pad">
        <div className="container-shell">
          <SectionHeading eyebrow="Audience" title="Built for visitors, brands, and buyers" />
          <div className="grid gap-6 md:grid-cols-3">
            {audienceCards.map((card) => (
              <div key={card.title} className="k-card rounded-[28px] p-7">
                <p className="text-xs uppercase tracking-[0.32em] text-[#d4af37]">{card.eyebrow}</p>
                <h3 className="mt-3 text-3xl font-black uppercase text-white">{card.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/65">{card.description}</p>
                <PillButton href={card.href} variant="ghost">{card.cta}</PillButton>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-pad pt-0">
        <div className="container-shell k-card rounded-[36px] p-8 md:p-12">
          <p className="text-xs uppercase tracking-[0.35em] text-[#d4af37]">Positioning</p>
          <p className="mt-4 max-w-5xl text-3xl font-black uppercase leading-tight text-white md:text-5xl">
            Katalyze is the premium Korean culture business festival where community energy turns into brand equity, sell-through, and global relationships.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-pad pt-0">
        <div className="container-shell">
          <SectionHeading eyebrow="4 Zones" title="Move through the full K-culture funnel" description="From discovery and hype to hospitality and deal-making, each zone is curated to create momentum." />
          <div className="grid gap-6 md:grid-cols-2">
            {zones.map((zone) => <ImageCard key={zone.slug} {...zone} />)}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-pad pt-0">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHeading eyebrow="Program" title="One day, many signals" description="Editorial keynotes, retail drops, workshops, hospitality, and a headline night program." />
            <PillButton href="/program">See full program</PillButton>
          </div>
          <div className="k-card rounded-[32px] p-6 md:p-8">
            {programMoments.map((item) => (
              <div key={item.time} className="flex flex-col gap-3 border-b border-white/10 py-5 last:border-b-0 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-[#d4af37]">{item.time}</p>
                  <p className="mt-2 text-2xl font-bold uppercase text-white">{item.title}</p>
                </div>
                <p className="max-w-sm text-sm leading-7 text-white/65">{item.meta}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-pad pt-0 overflow-hidden">
        <div className="container-shell">
          <SectionHeading eyebrow="Featured Brands" title="A marquee made for momentum" />
          <div className="k-card overflow-hidden rounded-full px-6 py-5">
            <div className="marquee-track text-sm uppercase tracking-[0.4em] text-white/75">
              {[...partnerLogos, ...partnerLogos].map((logo, idx) => <span key={`${logo}-${idx}`}>{logo}</span>)}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-pad pt-0">
        <div className="container-shell grid gap-6 lg:grid-cols-2">
          <div className="k-card rounded-[32px] p-8">
            <Building2 className="text-[#d4af37]" />
            <h3 className="mt-6 text-3xl font-black uppercase text-white">For brands</h3>
            <p className="mt-4 text-sm leading-7 text-white/65">Launch products, own narrative moments, and connect with Seoul’s most culture-forward audience.</p>
            <div className="mt-6"><PillButton href="/partners">Request partnership deck</PillButton></div>
          </div>
          <div className="k-card rounded-[32px] p-8">
            <BriefcaseBusiness className="text-[#d4af37]" />
            <h3 className="mt-6 text-3xl font-black uppercase text-white">For buyers</h3>
            <p className="mt-4 text-sm leading-7 text-white/65">Source Korean labels, unlock curated introductions, and close business in a premium lounge environment.</p>
            <div className="mt-6"><PillButton href="/b2b" variant="secondary">Apply for trade access</PillButton></div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-pad pt-0">
        <div className="container-shell grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div className="relative min-h-[320px] overflow-hidden rounded-[32px] border border-white/10 bg-white/5">
            <Image src="/images/seoul_ddp_exterior.webp" alt="DDP Exterior" fill className="object-cover" />
          </div>
          <div>
            <SectionHeading eyebrow="Venue" title="Dongdaemun Design Plaza" description="An architectural icon in the center of Seoul, DDP gives Katalyze an unmistakable stage for global cultural gravity." />
            <ul className="space-y-3 text-sm leading-7 text-white/70">
              <li>• Landmark architecture by Zaha Hadid</li>
              <li>• High-capacity indoor + outdoor programming</li>
              <li>• Connected to fashion, retail, and late-night Seoul energy</li>
            </ul>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="section-pad pt-0 pb-20">
        <div className="container-shell k-card rounded-[36px] p-8 text-center md:p-14">
          <p className="text-xs uppercase tracking-[0.35em] text-[#d4af37]">Next Step</p>
          <h2 className="mt-4 text-4xl font-black uppercase text-white md:text-6xl">Choose your entry point</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <PillButton href="/tickets"><Ticket className="mr-2 h-4 w-4" /> Tickets</PillButton>
            <PillButton href="/partners" variant="secondary"><Building2 className="mr-2 h-4 w-4" /> Partners</PillButton>
            <PillButton href="/b2b" variant="secondary"><ArrowRight className="mr-2 h-4 w-4" /> Buyers</PillButton>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
