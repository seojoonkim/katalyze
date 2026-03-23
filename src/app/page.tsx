import React from "react";
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
    image: "/images/audience_visitors.jpg",
    fallback: "linear-gradient(135deg, #DC1E5A, #8220DC)",
    overlay: "linear-gradient(180deg, rgba(220,30,90,0.24) 0%, rgba(130,32,220,0.18) 42%, rgba(0,0,0,0.72) 100%)",
    ring: "shadow-[0_0_0_1px_rgba(220,30,90,0.45)]",
  },
  {
    eyebrow: "For Brands",
    title: "Turn attention into sales, fandom, and cultural relevance.",
    description:
      "Launch hero products, build immersive booths, and own premium moments inside Seoul's most exciting culture-commerce festival.",
    href: "/partners",
    cta: "Partner with us",
    image: "/images/audience_brands.jpg",
    fallback: "linear-gradient(135deg, #D4AF37, #C8A01E)",
    overlay: "linear-gradient(180deg, rgba(212,175,55,0.22) 0%, rgba(200,160,30,0.14) 40%, rgba(0,0,0,0.72) 100%)",
    ring: "shadow-[0_0_0_1px_rgba(212,175,55,0.45)]",
  },
  {
    eyebrow: "For Buyers",
    title: "Meet Korean brands where taste, product, and business align.",
    description:
      "Private networking, curated intros, lounge hospitality, and direct access to founders, labels, and operators ready to scale globally.",
    href: "/b2b",
    cta: "Request B2B access",
    image: "/images/audience_buyers.jpg",
    fallback: "linear-gradient(135deg, #00B482, #1B2A4A)",
    overlay: "linear-gradient(180deg, rgba(0,180,130,0.2) 0%, rgba(27,42,74,0.18) 42%, rgba(0,0,0,0.74) 100%)",
    ring: "shadow-[0_0_0_1px_rgba(0,180,130,0.45)]",
  },
];

const zones = [
  {
    icon: "🛍️",
    title: "THE DROP",
    description:
      "Fashion, beauty, collectibles, and limited-edition brand moments built to spark queues, cameras, and conversion.",
    image: "/images/zone_drop.jpg",
    fallback: "linear-gradient(135deg, #DC1E5A 0%, #1a0008 100%)",
    overlay: "linear-gradient(180deg, rgba(220,30,90,0.20) 0%, rgba(0,0,0,0.70) 100%)",
  },
  {
    icon: "🎵",
    title: "THE STAGE",
    description:
      "A high-voltage performance platform for music, dance, showcases, and headline moments that travel far beyond DDP.",
    image: "/images/zone_stage.jpg",
    fallback: "linear-gradient(135deg, #8220DC 0%, #1a0030 100%)",
    overlay: "linear-gradient(180deg, rgba(130,32,220,0.20) 0%, rgba(0,0,0,0.70) 100%)",
  },
  {
    icon: "🔬",
    title: "THE LAB",
    description:
      "Talks, workshops, creator sessions, and hands-on experiments where culture builders share what is coming next.",
    image: "/images/zone_lab.jpg",
    fallback: "linear-gradient(135deg, #00B482 0%, #001a10 100%)",
    overlay: "linear-gradient(180deg, rgba(0,180,130,0.22) 0%, rgba(0,0,0,0.70) 100%)",
  },
  {
    icon: "🎨",
    title: "THE GALLERY",
    description:
      "Installations, art-forward activations, and premium hospitality for guests who want a more curated point of view.",
    image: "/images/zone_gallery.jpg",
    fallback: "linear-gradient(135deg, #D4AF37 0%, #1a1000 100%)",
    overlay: "linear-gradient(180deg, rgba(212,175,55,0.20) 0%, rgba(0,0,0,0.72) 100%)",
  },
];

const lineup = [
  {
    name: "Artist TBA",
    genre: "Global Headliner · Coming Soon",
    image: "/images/lineup_artist1.jpg",
    fallback: "linear-gradient(135deg, #8220DC 0%, #1a0a2e 100%)",
  },
  {
    name: "Special Guest",
    genre: "Fashion x Sound Crossover",
    image: "/images/zone_stage.jpg",
    fallback: "linear-gradient(135deg, #DC1E5A 0%, #1a0008 100%)",
  },
  {
    name: "More To Drop",
    genre: "Creators, Founders & Performers",
    image: "/images/business_brands.jpg",
    fallback: "linear-gradient(135deg, #D4AF37 0%, #1a1000 100%)",
  },
];

function backgroundStyle(image: string, fallback: string, overlay?: string) {
  // 이미지를 div 안에 absolute로 배치하는 대신, 
  // CSS custom property로 이미지 경로를 전달
  // 실제 렌더링은 컴포넌트 내부에서 처리
  const style: React.CSSProperties = {
    position: "relative",
  };
  if (image) {
    // 이미지 + 오버레이 레이어링
    // backgroundSize에서 그라데이션은 '100% 100%', 이미지는 'cover'
    const layers: string[] = [];
    const sizes: string[] = [];
    if (overlay) { layers.push(overlay); sizes.push("100% 100%"); }
    layers.push(`url('${image}')`);
    sizes.push("cover");
    layers.push(fallback);
    sizes.push("100% 100%");
    style.backgroundImage = layers.join(", ");
    style.backgroundSize = sizes.join(", ");
    style.backgroundPosition = "center";
    style.backgroundRepeat = "no-repeat";
  } else {
    style.backgroundImage = overlay ? `${overlay}, ${fallback}` : fallback;
  }
  return style;
}

export default function Home() {
  return (
    <div className="bg-[#050505] text-[var(--foreground)]">
      <section className="relative flex min-h-screen items-end overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero_main.jpg"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ zIndex: 0 }}
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.35) 45%, rgba(0,0,0,0.80) 100%), radial-gradient(circle at top, rgba(212,175,55,0.20), transparent 32%)",
            zIndex: 1,
          }}
        />
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
                className={`group relative min-h-[460px] overflow-hidden rounded-[32px] ${card.ring}`}
                style={backgroundStyle(card.image, card.fallback, card.overlay)}
              >
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
          <div
            className="relative min-h-[420px] overflow-hidden rounded-[34px] border border-white/10"
            style={backgroundStyle(
              "/images/venue_ddp.jpg",
              "linear-gradient(135deg, #1B2A4A, #0D0D0D)",
              "linear-gradient(180deg, rgba(27,42,74,0.14) 0%, rgba(0,0,0,0.60) 100%)"
            )}
          />
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
              <div
                key={zone.title}
                className="group relative h-[400px] overflow-hidden rounded-[30px]"
                style={backgroundStyle(zone.image, zone.fallback, zone.overlay)}
              >
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

      <AnimatedSection className="bg-[linear-gradient(135deg,#1a0a2e_0%,#0D0D0D_100%)] py-20 md:py-28">
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
                <div
                  className="relative h-[360px]"
                  style={backgroundStyle(
                    artist.image,
                    artist.fallback,
                    "linear-gradient(180deg, rgba(0,0,0,0.10) 0%, rgba(0,0,0,0.72) 100%)"
                  )}
                />
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
          <div
            className="group relative min-h-[440px] overflow-hidden rounded-[34px] border border-[#D4AF37]/35"
            style={backgroundStyle(
              "/images/business_brands.jpg",
              "linear-gradient(135deg, #1a1000, #2a1800)",
              "linear-gradient(180deg, rgba(212,175,55,0.18) 0%, rgba(0,0,0,0.78) 100%), linear-gradient(135deg, rgba(212,175,55,0.40), transparent 55%)"
            )}
          >
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

          <div
            className="group relative min-h-[440px] overflow-hidden rounded-[34px] border border-[#00B482]/35"
            style={backgroundStyle(
              "/images/audience_buyers.jpg",
              "linear-gradient(135deg, #001a10, #001a1a)",
              "linear-gradient(180deg, rgba(0,180,130,0.18) 0%, rgba(0,0,0,0.78) 100%), linear-gradient(135deg, rgba(0,180,130,0.32), transparent 58%)"
            )}
          >
            <div className="relative z-10 flex h-full flex-col justify-end p-8 md:p-10">
              <BriefcaseBusiness className="h-8 w-8 text-[#00D49A]" />
              <p className="mt-5 text-xs uppercase tracking-[0.34em] text-[#00D49A]">For Buyers</p>
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
          <div
            className="group relative min-h-[520px] overflow-hidden rounded-[36px]"
            style={backgroundStyle(
              "/images/venue_ddp.jpg",
              "linear-gradient(135deg, #1B2A4A, #0D0D0D)",
              "linear-gradient(180deg, rgba(27,42,74,0.12) 0%, rgba(0,0,0,0.76) 100%), radial-gradient(circle at top right, rgba(212,175,55,0.22), transparent 28%)"
            )}
          >
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

      <AnimatedSection className="bg-[linear-gradient(135deg,#D4AF37_0%,#C8751E_100%)] py-20 md:py-24">
        <div className="container-shell text-center text-black">
          <div
            className="relative overflow-hidden rounded-[36px] px-6 py-16 md:px-10 md:py-24"
            style={backgroundStyle(
              "/images/final_cta.jpg",
              "linear-gradient(135deg,#D4AF37_0%,#C8751E_100%)",
              "linear-gradient(180deg, rgba(212,175,55,0.18) 0%, rgba(0,0,0,0.28) 100%)"
            )}
          >
            <div className="absolute inset-0 bg-black/20" />
            <div className="relative z-10">
              <p className="text-xs uppercase tracking-[0.38em] text-white/80">Final Call</p>
              <h2 className="mt-4 font-display text-6xl tracking-[0.05em] text-white md:text-8xl">DON&apos;T MISS IT.</h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-white/90 md:text-lg">
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
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
