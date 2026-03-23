import Image from "next/image";
import { ArrowRight, Building2, BriefcaseBusiness, MapPin, Ticket } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { PillButton } from "@/components/ui";

const stats = [
  { value: "50K+", label: "Attendees" },
  { value: "120+", label: "Brands" },
  { value: "40+", label: "Speakers" },
  { value: "4", label: "Zones" },
];

const audiences = [
  {
    eyebrow: "For Visitors",
    title: "Come for the drop. Stay for the citywide energy.",
    description:
      "Live stages, beauty launches, fashion moments, tastings, and Seoul-only discoveries packed into one unforgettable weekend.",
    href: "/tickets",
    cta: "Explore visitor passes",
    image: "/images/imagen_hero_festival.jpg",
    accent: "from-[#DC1E5A]/80 via-[#DC1E5A]/45 to-black/70",
    ring: "shadow-[0_0_0_1px_rgba(220,30,90,0.45)]",
  },
  {
    eyebrow: "For Brands",
    title: "Turn attention into sales, fandom, and cultural relevance.",
    description:
      "Launch hero products, build immersive booths, and own premium moments inside Seoul's most exciting culture-commerce festival.",
    href: "/partners",
    cta: "Partner with us",
    image: "/images/imagen_market_drop.jpg",
    accent: "from-[#D4AF37]/80 via-[#D4AF37]/35 to-black/70",
    ring: "shadow-[0_0_0_1px_rgba(212,175,55,0.45)]",
  },
  {
    eyebrow: "For Buyers",
    title: "Meet Korean brands where taste, product, and business align.",
    description:
      "Private networking, curated intros, lounge hospitality, and direct access to founders, labels, and operators ready to scale globally.",
    href: "/b2b",
    cta: "Request B2B access",
    image: "/images/imagen_buyer_networking.jpg",
    accent: "from-cyan-500/80 via-cyan-500/35 to-black/70",
    ring: "shadow-[0_0_0_1px_rgba(34,211,238,0.45)]",
  },
];

const zones = [
  {
    icon: "🛍️",
    title: "THE DROP",
    description:
      "Fashion, beauty, collectibles, and limited-edition brand moments built to spark queues, cameras, and conversion.",
    image: "/images/imagen_market_drop.jpg",
    overlay: "bg-[rgba(220,30,90,0.62)]",
  },
  {
    icon: "🎵",
    title: "THE STAGE",
    description:
      "A high-voltage performance platform for music, dance, showcases, and headline moments that travel far beyond DDP.",
    image: "/images/imagen_stage_show.jpg",
    overlay: "bg-[rgba(130,30,220,0.62)]",
  },
  {
    icon: "🔬",
    title: "THE LAB",
    description:
      "Talks, workshops, creator sessions, and hands-on experiments where culture builders share what is coming next.",
    image: "/images/imagen_lab_workshop.jpg",
    overlay: "bg-[rgba(0,180,130,0.62)]",
  },
  {
    icon: "🎨",
    title: "THE GALLERY",
    description:
      "Installations, art-forward activations, and premium hospitality for guests who want a more curated point of view.",
    image: "/images/imagen_gallery_installation.jpg",
    overlay: "bg-[rgba(200,160,30,0.62)]",
  },
];

const lineup = [
  {
    name: "Artist TBA",
    genre: "Global Headliner · Coming Soon",
    image: "/images/imagen_creator_portrait.jpg",
  },
  {
    name: "Special Guest",
    genre: "Fashion x Sound Crossover",
    image: "/images/crowd.jpg",
  },
  {
    name: "More To Drop",
    genre: "Creators, Founders & Performers",
    image: "/images/imagen_brand_lounge.jpg",
  },
];

export default function Home() {
  return (
    <div className="bg-[#050505] text-[var(--foreground)]">
      <section className="relative flex min-h-screen items-end overflow-hidden bg-[#111]">
        <div className="absolute inset-0">
          <Image src="/images/imagen_hero_festival.jpg" alt="Katalyze festival hero" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/35 to-black/75" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.20),transparent_32%)]" />
        </div>
        <div className="container-shell relative z-10 flex min-h-screen flex-col justify-end pb-10 pt-28 md:pb-16 lg:pt-32">
          <div className="max-w-5xl">
            <p className="text-xs font-medium uppercase tracking-[0.45em] text-[#D4AF37] md:text-sm">SEOUL DDP · SEPTEMBER 2026</p>
            <h1 className="mt-5 font-display text-[clamp(5.25rem,20vw,10rem)] leading-[0.88] text-white drop-shadow-[0_12px_40px_rgba(0,0,0,0.45)] md:text-[clamp(7rem,18vw,12rem)]">
              KATALYZE
            </h1>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-white/88 md:text-2xl md:leading-10">
              Where Culture Drops, Deals Close, and the World Shows Up
            </p>
            <div className="mt-8 flex flex-wrap gap-3 md:gap-4">
              <PillButton href="/tickets">GET TICKETS</PillButton>
              <PillButton href="/partners" variant="secondary">PARTNER WITH US</PillButton>
              <PillButton href="/b2b" variant="secondary">B2B ACCESS</PillButton>
            </div>
          </div>

          <div className="mt-12 grid gap-3 md:mt-16 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-[24px] border border-white/12 bg-white/8 px-5 py-5 backdrop-blur-md">
                <p className="font-display text-4xl tracking-[0.06em] text-white md:text-5xl">{stat.value}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.3em] text-white/70 md:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AnimatedSection className="bg-[#0D0D0D] py-20 md:py-28">
        <div className="container-shell">
          <div className="mb-10 max-w-3xl md:mb-14">
            <p className="text-xs uppercase tracking-[0.38em] text-[#D4AF37]">Audience Selector</p>
            <h2 className="mt-4 font-display text-5xl tracking-[0.06em] text-white md:text-7xl">CHOOSE YOUR ENTRY POINT</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {audiences.map((card) => (
              <a
                key={card.title}
                href={card.href}
                className={`group relative min-h-[460px] overflow-hidden rounded-[32px] bg-[#141414] ${card.ring}`}
              >
                <Image src={card.image} alt={card.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className={`absolute inset-0 bg-gradient-to-b ${card.accent}`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="relative z-10 flex h-full flex-col justify-end p-7 md:p-8">
                  <p className="text-xs uppercase tracking-[0.34em] text-white/80">{card.eyebrow}</p>
                  <h3 className="mt-4 max-w-sm font-display text-4xl leading-[0.96] text-white md:text-5xl">{card.title}</h3>
                  <p className="mt-4 max-w-sm text-sm leading-7 text-white/82 md:text-base">{card.description}</p>
                  <div className="mt-6 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.24em] text-white">
                    <span>{card.cta}</span>
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/10 transition group-hover:bg-white group-hover:text-black">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-[linear-gradient(180deg,#080808_0%,#12091c_55%,#080808_100%)] py-20 md:py-28">
        <div className="container-shell grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="rounded-[34px] border border-white/10 bg-white/5 p-8 backdrop-blur-sm md:p-12">
            <div className="text-7xl leading-none text-[#D4AF37] md:text-8xl">“</div>
            <p className="-mt-5 max-w-3xl font-display text-4xl leading-[0.95] text-white md:text-6xl">
              KATALYZE is where Seoul’s creative electricity becomes a platform for fandom, discovery, and real business momentum.
            </p>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/72 md:text-lg">
              Not just a conference. Not just a festival. A live, deal-making, culture-shaping convergence of brands, buyers, creators, and audiences ready to move.
            </p>
          </div>
          <div className="relative min-h-[420px] overflow-hidden rounded-[34px] border border-white/10 bg-[#181818]">
            <Image src="/images/imagen_ddp_night.jpg" alt="Seoul night skyline" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-[#0A0A0A] py-20 md:py-28">
        <div className="container-shell">
          <div className="mb-10 max-w-3xl md:mb-14">
            <p className="text-xs uppercase tracking-[0.38em] text-[#D4AF37]">4 Zones</p>
            <h2 className="mt-4 font-display text-5xl tracking-[0.06em] text-white md:text-7xl">THE WORLD OF KATALYZE</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {zones.map((zone) => (
              <div key={zone.title} className="group relative h-[400px] overflow-hidden rounded-[30px] bg-[#161616]">
                <Image src={zone.image} alt={zone.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className={`absolute inset-0 transition-opacity duration-500 group-hover:opacity-70 ${zone.overlay}`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-black/24 to-transparent" />
                <div className="relative z-10 flex h-full flex-col justify-end p-7 md:p-8">
                  <div className="mb-4 text-5xl">{zone.icon}</div>
                  <h3 className="font-display text-4xl tracking-[0.06em] text-white md:text-5xl">{zone.title}</h3>
                  <p className="mt-4 max-w-md text-sm leading-7 text-white/85 md:text-base">{zone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-[linear-gradient(180deg,#0B0710_0%,#17091F_55%,#09070F_100%)] py-20 md:py-28">
        <div className="container-shell">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.38em] text-[#D4AF37]">Program Preview</p>
              <h2 className="mt-4 font-display text-5xl tracking-[0.06em] text-[#D4AF37] md:text-7xl">THE LINEUP</h2>
            </div>
            <PillButton href="/program" variant="secondary">VIEW FULL PROGRAM</PillButton>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {lineup.map((artist) => (
              <div key={artist.name} className="overflow-hidden rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-sm">
                <div className="relative h-[360px] bg-[#141414]">
                  <Image src={artist.image} alt={artist.name} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-4xl text-white">{artist.name}</h3>
                  <p className="mt-2 text-sm uppercase tracking-[0.22em] text-white/70">{artist.genre}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <section className="overflow-hidden bg-[#F5F2ED] py-7 text-[#0D0D0D] md:py-8">
        <div className="marquee-track font-display text-3xl tracking-[0.18em] md:text-4xl">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i} className="flex gap-8 whitespace-nowrap px-4">
              <span>SAMSUNG</span>
              <span>·</span>
              <span>CJ</span>
              <span>·</span>
              <span>MUSINSA</span>
              <span>·</span>
              <span>HYBE</span>
              <span>·</span>
              <span>NURI HOUSE</span>
              <span>·</span>
              <span>DOD</span>
              <span>·</span>
              <span>KLOOK</span>
              <span>·</span>
              <span>KOREAN AIR</span>
              <span>·</span>
            </span>
          ))}
        </div>
      </section>

      <AnimatedSection className="bg-[#090909] py-20 md:py-28">
        <div className="container-shell grid gap-6 lg:grid-cols-2">
          <div className="group relative min-h-[440px] overflow-hidden rounded-[34px] bg-[#171717]">
            <Image src="/images/imagen_brand_lounge.jpg" alt="Partner lounge" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/45 to-black/85" />
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(212,175,55,0.40),transparent_55%)]" />
            <div className="relative z-10 flex h-full flex-col justify-end p-8 md:p-10">
              <Building2 className="h-8 w-8 text-[#D4AF37]" />
              <p className="mt-5 text-xs uppercase tracking-[0.34em] text-[#F0D980]">For Partners & Brands</p>
              <h3 className="mt-4 font-display text-4xl leading-[0.96] text-white md:text-5xl">Build the most photographed booth in Seoul.</h3>
              <p className="mt-4 max-w-lg text-sm leading-7 text-white/82 md:text-base">
                Own premium real estate, launch limited drops, host founder conversations, and turn audience energy into measurable impact.
              </p>
              <div className="mt-7">
                <PillButton href="/partners">REQUEST PARTNERSHIP DECK</PillButton>
              </div>
            </div>
          </div>

          <div className="group relative min-h-[440px] overflow-hidden rounded-[34px] bg-[#171717]">
            <Image src="/images/imagen_buyer_networking.jpg" alt="Buyer networking" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/45 to-black/85" />
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(34,211,238,0.42),transparent_58%)]" />
            <div className="relative z-10 flex h-full flex-col justify-end p-8 md:p-10">
              <BriefcaseBusiness className="h-8 w-8 text-cyan-300" />
              <p className="mt-5 text-xs uppercase tracking-[0.34em] text-cyan-300">For Buyers</p>
              <h3 className="mt-4 font-display text-4xl leading-[0.96] text-white md:text-5xl">Source the next breakout Korean brand before everyone else does.</h3>
              <p className="mt-4 max-w-lg text-sm leading-7 text-white/82 md:text-base">
                Curated meetings, premium hospitality, and access to labels spanning beauty, fashion, design, food, and cultural IP.
              </p>
              <div className="mt-7">
                <PillButton href="/b2b" variant="secondary">APPLY FOR BUYER ACCESS</PillButton>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-[#050505] py-20 md:py-28">
        <div className="container-shell">
          <div className="group relative min-h-[520px] overflow-hidden rounded-[36px] bg-[#161616]">
            <Image src="/images/imagen_ddp_night.jpg" alt="Seoul DDP venue" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/35 to-black/78" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.22),transparent_28%)]" />
            <div className="relative z-10 flex min-h-[520px] flex-col justify-end p-8 md:p-12">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-black/20 px-4 py-2 text-xs uppercase tracking-[0.26em] text-white/85 backdrop-blur-sm">
                <MapPin className="h-3.5 w-3.5 text-[#D4AF37]" /> SEOUL · DDP · SEPTEMBER 2026
              </div>
              <h2 className="mt-6 max-w-4xl font-display text-5xl leading-[0.9] text-white md:text-7xl">THE CITY. THE ICON. THE MOMENT.</h2>
              <div className="mt-8">
                <PillButton href="/about">PLAN YOUR VISIT</PillButton>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-[linear-gradient(135deg,#D4AF37_0%,#F39A3D_48%,#F56A2A_100%)] py-20 md:py-24">
        <div className="container-shell text-center text-black">
          <p className="text-xs uppercase tracking-[0.38em] text-black/70">Final Call</p>
          <h2 className="mt-4 font-display text-6xl tracking-[0.05em] md:text-8xl">DON&apos;T MISS IT.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-black/75 md:text-lg">
            Lock in your ticket, partnership, or buyer application now and be part of the culture-commerce event everyone will talk about after Seoul Fashion Week.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 md:gap-4">
            <PillButton href="/tickets">
              <Ticket className="mr-2 h-4 w-4" /> GET TICKETS
            </PillButton>
            <PillButton href="/partners" variant="secondary">PARTNER WITH US</PillButton>
            <PillButton href="/b2b" variant="secondary">B2B ACCESS</PillButton>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
