import React from "react";
import { ArrowRight, Building2, BriefcaseBusiness, MapPin, Ticket } from "lucide-react";
import { PillButton } from "@/components/ui";

const stats = [
  { value: "50K+", label: "Attendees" },
  { value: "200+", label: "Brands" },
  { value: "40+", label: "Speakers" },
  { value: "4", label: "Zones" },
];

const audiences = [
  {
    eyebrow: "FOR VISITORS",
    tag: "방문객",
    title: "Come for the drop. Stay for the obsession.",
    description:
      "50,000명이 서울 한복판에서 동시에 발견하는 순간. 패션 론칭, K-뷰티 첫 공개, 라이브 퍼포먼스, 그리고 서울만의 감각 — 하나의 주말에 전부.",
    href: "/tickets",
    cta: "Explore visitor passes",
    image: "/images/audience_visitors.jpg",
    fallback: "linear-gradient(135deg, #DC1E5A, #8220DC)",
    overlay: "linear-gradient(180deg, rgba(220,30,90,0.24) 0%, rgba(130,32,220,0.18) 42%, rgba(0,0,0,0.72) 100%)",
    ring: "shadow-[0_0_0_1px_rgba(220,30,90,0.45)]",
  },
  {
    eyebrow: "FOR BRANDS",
    tag: "브랜드",
    title: "50,000 people. 72 hours. Your brand's defining Seoul moment.",
    description:
      "한정판 드롭, 몰입형 부스, 파운더 토크, 그리고 실시간 전환. 대한민국 최대 컬처 커머스 페스티벌에서 브랜드의 다음 챕터를 쓰세요.",
    href: "/partners",
    cta: "Partner with us",
    image: "/images/audience_brands.jpg",
    fallback: "linear-gradient(135deg, #D4AF37, #C8A01E)",
    overlay: "linear-gradient(180deg, rgba(212,175,55,0.22) 0%, rgba(200,160,30,0.14) 40%, rgba(0,0,0,0.72) 100%)",
    ring: "shadow-[0_0_0_1px_rgba(212,175,55,0.45)]",
  },
  {
    eyebrow: "FOR BUYERS",
    tag: "바이어",
    title: "The next global brand is Korean. Find it first.",
    description:
      "프라이빗 네트워킹, 큐레이티드 미팅, VIP 라운지. 뷰티, 패션, 디자인, F&B, 컬처 IP — 전 세계가 주목하기 전에, 먼저 만나세요.",
    href: "/b2b",
    cta: "Request B2B access",
    image: "/images/audience_buyers.jpg",
    fallback: "linear-gradient(135deg, #00C9A7, #1B2A4A)",
    overlay: "linear-gradient(180deg, rgba(0,201,167,0.2) 0%, rgba(27,42,74,0.18) 42%, rgba(0,0,0,0.74) 100%)",
    ring: "shadow-[0_0_0_1px_rgba(0,201,167,0.45)]",
  },
];

const zones = [
  {
    icon: "🛍️",
    title: "THE DROP",
    subtitle: "줄 서는 이유가 있는 공간.",
    description:
      "한정판 캡슐, 브랜드 첫 공개, 인플루언서 콜라보, 뷰티 디스커버리 — 카메라가 향하는 곳, 전환이 일어나는 곳.",
    en: "Where the queue forms. Where the camera points. Where the drop lands.",
    image: "/images/zone_drop.jpg",
    fallback: "linear-gradient(135deg, #DC1E5A 0%, #1a0008 100%)",
    overlay: "linear-gradient(180deg, rgba(220,30,90,0.20) 0%, rgba(0,0,0,0.70) 100%)",
  },
  {
    icon: "🎵",
    title: "THE STAGE",
    subtitle: "DDP가 울리는 밤.",
    description:
      "음악, 댄스, 패션쇼, 헤드라인 퍼포먼스 — 소리가 건물을 타고 서울 전체에 퍼지는 순간.",
    en: "The night DDP shakes. Performances that own the feed.",
    image: "/images/zone_stage.jpg",
    fallback: "linear-gradient(135deg, #8220DC 0%, #1a0030 100%)",
    overlay: "linear-gradient(180deg, rgba(130,32,220,0.20) 0%, rgba(0,0,0,0.70) 100%)",
  },
  {
    icon: "🔬",
    title: "THE LAB",
    subtitle: "다음에 올 것을 먼저 보는 곳.",
    description:
      "파운더 토크, 크리에이터 워크숍, 핸즈온 실험실 — 문화를 만드는 사람들이 '다음'을 공유하는 공간.",
    en: "Where culture builders reveal what's next — before it trends.",
    image: "/images/zone_lab.jpg",
    fallback: "linear-gradient(135deg, #00C9A7 0%, #001a10 100%)",
    overlay: "linear-gradient(180deg, rgba(0,201,167,0.22) 0%, rgba(0,0,0,0.70) 100%)",
  },
  {
    icon: "🎨",
    title: "THE GALLERY",
    subtitle: "감각의 밀도가 다른 공간.",
    description:
      "설치 미술, 아트 액티베이션, 프리미엄 호스피탈리티 — 큐레이션된 시선으로 페스티벌을 경험하는 가장 깊은 방법.",
    en: "The most curated way to experience the festival. Art meets altitude.",
    image: "/images/zone_gallery.jpg",
    fallback: "linear-gradient(135deg, #F59E0B 0%, #1a1000 100%)",
    overlay: "linear-gradient(180deg, rgba(245,158,11,0.20) 0%, rgba(0,0,0,0.72) 100%)",
  },
];

const lineup = [
  {
    name: "HEADLINER",
    genre: "메인 스테이지 · Main Stage",
    status: "TBA — Coming Soon",
    image: "/images/lineup_artist1.jpg",
    fallback: "linear-gradient(135deg, #8220DC 0%, #1a0a2e 100%)",
  },
  {
    name: "K-CULTURE ICON",
    genre: "패션 쇼케이스 · Fashion Show",
    status: "Announcement Q1 2027",
    image: "/images/zone_stage.jpg",
    fallback: "linear-gradient(135deg, #DC1E5A 0%, #1a0008 100%)",
  },
  {
    name: "GLOBAL ARTIST",
    genre: "퍼포먼스 · Live Performance",
    status: "Announcement Q2 2027",
    image: "/images/business_brands.jpg",
    fallback: "linear-gradient(135deg, #00C9A7 0%, #001a10 100%)",
  },
  {
    name: "SPECIAL REVEAL",
    genre: "서프라이즈 · Surprise Act",
    status: "Stay Tuned",
    image: "/images/imagen_stage_show.jpg",
    fallback: "linear-gradient(135deg, #D4AF37 0%, #1a1000 100%)",
  },
];

function backgroundStyle(image: string, fallback: string, overlay?: string) {
  const style: React.CSSProperties = {
    position: "relative",
  };
  if (image) {
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
    <div className="bg-muk text-baekja">
      {/* ═══════ HERO ═══════ */}
      <section className="relative flex min-h-screen items-end overflow-hidden" style={{ backgroundColor: '#1A1A1F' }}>
        {/* Hero background: hero_main.jpg with video fallback */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/hero_main.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 0,
          }}
        />
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          style={{ zIndex: 0 }}
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, rgba(26,26,31,0.15) 0%, rgba(26,26,31,0.40) 55%, rgba(26,26,31,0.92) 100%)",
            zIndex: 1
          }}
        />
        <div className="container-shell relative z-10 flex min-h-screen flex-col justify-end pb-10 pt-28 md:pb-16 lg:pt-32">
          <div className="max-w-5xl">
            <p className="text-[10px] font-outfit tracking-[0.5em] uppercase text-[#D4AF37]">
              서울 DDP · 2027. 4 · SEOUL&apos;S CULTURE-COMMERCE CONVERGENCE
            </p>
            <h1 className="mt-4 font-display text-[clamp(6rem,22vw,13rem)] leading-[0.85] tracking-[0.03em] text-white drop-shadow-[0_12px_40px_rgba(0,0,0,0.45)]">
              KATALYZE
            </h1>
            <p className="mt-5 max-w-2xl text-lg font-outfit font-light leading-relaxed text-white/85 md:text-2xl">
              The world&apos;s brands. Seoul&apos;s energy.<br/>One weekend that changes everything.
            </p>
            <p className="mt-2 text-sm font-outfit tracking-[0.1em] text-[#4A7A6B]">
              세계의 브랜드, 서울의 에너지. 모든 것이 바뀌는 하나의 주말.
            </p>
            <div className="mt-8 flex flex-col gap-3 md:flex-row md:flex-wrap md:gap-4">
              <div className="flex">
                <PillButton href="/tickets">GET TICKETS</PillButton>
              </div>
              <div className="flex gap-3">
                <PillButton href="/partners" variant="secondary">PARTNER WITH US</PillButton>
                <PillButton href="/b2b" variant="secondary">B2B ACCESS</PillButton>
              </div>
            </div>
          </div>
          <div className="mt-8 flex flex-nowrap gap-x-4 overflow-x-auto md:mt-14 md:gap-x-10 md:overflow-visible">
            {stats.map((stat) => (
              <div key={stat.label} className="flex-shrink-0">
                <p className="font-display text-2xl tracking-[0.04em] text-white md:text-5xl">{stat.value}</p>
                <p className="mt-0.5 text-[9px] uppercase tracking-[0.25em] text-white/60 md:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ AUDIENCE SELECTOR ═══════ */}
      <section className="bg-muk py-20 md:py-28">
        <div className="container-shell">
          <div className="mb-10 max-w-3xl md:mb-14">
            <p className="text-xs uppercase tracking-[0.5em] text-[#D4AF37]">Audience Selector</p>
            <h2 className="mt-4 font-impact text-6xl tracking-[0.07em] text-white md:text-8xl">CHOOSE YOUR ENTRY POINT</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {audiences.map((card) => (
              <a
                key={card.title}
                href={card.href}
                className={`group relative min-h-[460px] overflow-hidden rounded-none ${card.ring}`}
                style={backgroundStyle(card.image, card.fallback, card.overlay)}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="relative z-10 flex h-full flex-col justify-end p-7 md:p-8">
                  <div className="flex items-center gap-3">
                    <p className="text-xs uppercase tracking-[0.34em] text-white/80">{card.eyebrow}</p>
                    <span className="rounded-none border border-white/20 px-2.5 py-0.5 text-[10px] text-white/60">{card.tag}</span>
                  </div>
                  <h3 className="mt-4 max-w-sm font-display text-4xl leading-[0.96] text-white md:text-5xl">{card.title}</h3>
                  <p className="mt-4 max-w-sm text-sm leading-7 text-white/82 md:text-base">{card.description}</p>
                  <div className="mt-6 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.24em] text-white">
                    <span>{card.cta}</span>
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-none border border-white/30 bg-white/10 transition group-hover:bg-white group-hover:text-black">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ QUOTE SECTION ═══════ */}
      <section className="relative py-20 md:py-28" style={{
        backgroundImage: "linear-gradient(180deg, rgba(26,26,31,0.85) 0%, rgba(26,26,31,0.92) 100%), url('/images/imagen_ddp_night.jpg')",
        backgroundSize: "100% 100%, cover",
        backgroundPosition: "center",
      }}>
        <div className="container-shell grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="py-4">
            <blockquote>
              <p className="font-playfair text-3xl font-bold italic leading-snug text-white md:text-5xl">
                &ldquo;Seoul doesn&apos;t follow trends.<br/>It catalyzes them.&rdquo;
              </p>
              <p className="mt-4 font-outfit text-lg font-light text-[#4A7A6B]">
                서울은 트렌드를 따르지 않는다. 촉발한다.
              </p>
            </blockquote>
            <p className="mt-8 max-w-3xl font-outfit text-base font-light leading-relaxed text-white/70">
              Born at DDP — the architectural icon Zaha Hadid designed to embody Seoul&apos;s restless creativity — KATALYZE compresses K-fashion, K-beauty, street culture, music, and global trade into 72 hours of cultural velocity. Not a convention. Not a concert. A convergence.
            </p>
          </div>
          <div
            className="relative min-h-[420px] overflow-hidden rounded-none border border-white/10"
            style={backgroundStyle(
              "/images/venue_ddp.jpg",
              "linear-gradient(135deg, #1B2A4A, #1A1A1F)",
              "linear-gradient(180deg, rgba(27,42,74,0.14) 0%, rgba(0,0,0,0.60) 100%)"
            )}
          />
        </div>
      </section>

      {/* ═══════ THE 4 ZONES ═══════ */}
      <section className="bg-muk py-20 md:py-28">
        <div className="container-shell">
          <div className="mb-10 max-w-3xl md:mb-14">
            <p className="text-xs uppercase tracking-[0.5em] text-[#D4AF37]">4 Zones</p>
            <h2 className="mt-4 font-impact text-6xl tracking-[0.07em] text-white md:text-8xl">THE WORLD OF KATALYZE</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {zones.map((zone) => (
              <div
                key={zone.title}
                className="group relative h-[440px] overflow-hidden rounded-none"
                style={backgroundStyle(zone.image, zone.fallback, zone.overlay)}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-black/24 to-transparent" />
                <div className="relative z-10 flex h-full flex-col justify-end p-7 md:p-8">
                  <div className="mb-4 text-5xl">{zone.icon}</div>
                  <h3 className="font-display text-4xl tracking-[0.06em] text-white md:text-5xl">{zone.title}</h3>
                  <p className="mt-2 text-sm font-outfit font-medium text-[#D4AF37]">{zone.subtitle}</p>
                  <p className="mt-3 max-w-md text-sm leading-7 text-white/85 md:text-base">{zone.description}</p>
                  <p className="mt-2 max-w-md text-xs font-outfit italic tracking-wide text-white/55">{zone.en}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ LINEUP ═══════ */}
      <section className="bg-[linear-gradient(135deg,#1a0a2e_0%,#1A1A1F_100%)] py-20 md:py-28">
        <div className="container-shell">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.5em] text-[#D4AF37]">LINEUP · 라인업</p>
              <h2 className="mt-4 font-impact text-6xl tracking-[0.07em] text-white md:text-8xl">NAMES THAT MOVE CULTURE</h2>
              <p className="mt-3 font-outfit text-base font-light text-white/60">공연, 토크, 쇼케이스 — 발표될 때마다 업데이트됩니다.</p>
            </div>
            <PillButton href="/program" variant="secondary">VIEW FULL PROGRAM</PillButton>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {lineup.map((artist) => (
              <div key={artist.name} className="overflow-hidden rounded-none border border-white/10 bg-white/5 backdrop-blur-sm">
                <div
                  className="relative h-[300px]"
                  style={backgroundStyle(
                    artist.image,
                    artist.fallback,
                    "linear-gradient(180deg, rgba(0,0,0,0.10) 0%, rgba(0,0,0,0.72) 100%)"
                  )}
                />
                <div className="p-6">
                  <h3 className="font-display text-3xl text-white">{artist.name}</h3>
                  <p className="mt-2 text-sm text-white/70">{artist.genre}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.15em] text-[#D4AF37]">{artist.status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ MARQUEE ═══════ */}
      <section className="overflow-hidden bg-baekja py-7 text-muk md:py-8">
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

      {/* ═══════ PARTNER / BUYER CARDS ═══════ */}
      <section className="bg-muk py-20 md:py-28">
        <div className="container-shell grid gap-6 lg:grid-cols-2">
          <div
            className="group relative min-h-[440px] overflow-hidden rounded-none border border-[#D4AF37]/35"
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
            className="group relative min-h-[440px] overflow-hidden rounded-none border border-[#00C9A7]/35"
            style={backgroundStyle(
              "/images/audience_buyers.jpg",
              "linear-gradient(135deg, #001a10, #001a1a)",
              "linear-gradient(180deg, rgba(0,201,167,0.18) 0%, rgba(0,0,0,0.78) 100%), linear-gradient(135deg, rgba(0,201,167,0.32), transparent 58%)"
            )}
          >
            <div className="relative z-10 flex h-full flex-col justify-end p-8 md:p-10">
              <BriefcaseBusiness className="h-8 w-8 text-[#00C9A7]" />
              <p className="mt-5 text-xs uppercase tracking-[0.34em] text-[#00C9A7]">For Buyers</p>
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
      </section>

      {/* ═══════ VENUE ═══════ */}
      <section className="bg-muk py-20 md:py-28">
        <div className="container-shell">
          <div
            className="group relative min-h-[520px] overflow-hidden rounded-none"
            style={backgroundStyle(
              "/images/venue_ddp.jpg",
              "linear-gradient(135deg, #1B2A4A, #1A1A1F)",
              "linear-gradient(180deg, rgba(27,42,74,0.12) 0%, rgba(0,0,0,0.76) 100%), radial-gradient(circle at top right, rgba(212,175,55,0.22), transparent 28%)"
            )}
          >
            <div className="relative z-10 flex min-h-[520px] flex-col justify-end p-8 md:p-12">
              <div className="inline-flex w-fit items-center gap-2 rounded-none border border-white/20 bg-black/20 px-4 py-2 text-xs uppercase tracking-[0.26em] text-white/85 backdrop-blur-sm">
                <MapPin className="h-3.5 w-3.5 text-[#D4AF37]" /> SEOUL · DDP · APRIL 2027
              </div>
              <h2 className="mt-6 max-w-4xl font-display text-5xl leading-[0.9] text-white md:text-7xl">THE CITY. THE ICON. THE MOMENT.</h2>
              <div className="mt-8">
                <PillButton href="/about">PLAN YOUR VISIT</PillButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ FINAL CTA ═══════ */}
      <section className="bg-[linear-gradient(135deg,#D4AF37_0%,#C8751E_100%)] py-20 md:py-24">
        <div className="container-shell text-center text-black">
          <div
            className="relative overflow-hidden rounded-none px-6 py-16 md:px-10 md:py-24"
            style={backgroundStyle(
              "/images/final_cta.jpg",
              "linear-gradient(135deg,#D4AF37_0%,#C8751E_100%)",
              "linear-gradient(180deg, rgba(212,175,55,0.18) 0%, rgba(0,0,0,0.28) 100%)"
            )}
          >
            <div className="absolute inset-0 bg-black/20" />
            <div className="relative z-10">
              <p className="text-xs uppercase tracking-[0.5em] text-white/80">APRIL 2027 · 서울 DDP</p>
              <h2 className="mt-4 font-impact text-7xl tracking-[0.08em] text-white md:text-9xl">THE WORLD SHOWS UP IN SEOUL.</h2>
              <p className="mx-auto mt-4 max-w-2xl font-outfit text-base leading-8 text-white/90 md:text-lg">
                4만 명의 관객, 200+ 브랜드, 하나의 주말. 당신의 자리를 지금 확보하세요.
              </p>
              <p className="mx-auto mt-2 max-w-2xl font-outfit text-sm leading-7 text-white/70">
                40,000 attendees. 200+ brands. One weekend. Secure your place now.
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
      </section>
    </div>
  );
}
