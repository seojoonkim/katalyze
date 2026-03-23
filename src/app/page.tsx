import React from "react";
import { IconArrowRight, IconTicket, IconMapPin, IconBuilding, IconBriefcase } from "@/components/icons";
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
    id: "drop",
    number: "01",
    title: "THE DROP",
    subtitle: "줄 서는 이유가 있는 공간.",
    description:
      "한정판 캡슐, 브랜드 첫 공개, 인플루언서 콜라보, 뷰티 디스커버리 — 카메라가 향하는 곳, 전환이 일어나는 곳.",
    en: "Where the queue forms. Where the camera points. Where the drop lands.",
    image: "/images/zone_drop.jpg",
    fallback: "linear-gradient(135deg, #DC1E5A 0%, #1a0008 100%)",
    color: "#DC1E5A",
  },
  {
    id: "stage",
    number: "02",
    title: "THE STAGE",
    subtitle: "DDP가 울리는 밤.",
    description:
      "음악, 댄스, 패션쇼, 헤드라인 퍼포먼스 — 소리가 건물을 타고 서울 전체에 퍼지는 순간.",
    en: "The night DDP shakes. Performances that own the feed.",
    image: "/images/zone_stage.jpg",
    fallback: "linear-gradient(135deg, #8220DC 0%, #1a0030 100%)",
    color: "#8220DC",
  },
  {
    id: "lab",
    number: "03",
    title: "THE LAB",
    subtitle: "다음에 올 것을 먼저 보는 곳.",
    description:
      "파운더 토크, 크리에이터 워크숍, 핸즈온 실험실 — 문화를 만드는 사람들이 '다음'을 공유하는 공간.",
    en: "Where culture builders reveal what's next — before it trends.",
    image: "/images/zone_lab.jpg",
    fallback: "linear-gradient(135deg, #00C9A7 0%, #001a10 100%)",
    color: "#00C9A7",
  },
  {
    id: "gallery",
    number: "04",
    title: "THE GALLERY",
    subtitle: "감각의 밀도가 다른 공간.",
    description:
      "설치 미술, 아트 액티베이션, 프리미엄 호스피탈리티 — 큐레이션된 시선으로 페스티벌을 경험하는 가장 깊은 방법.",
    en: "The most curated way to experience the festival. Art meets altitude.",
    image: "/images/zone_gallery.jpg",
    fallback: "linear-gradient(135deg, #F59E0B 0%, #1a1000 100%)",
    color: "#F59E0B",
  },
];

const lineup = [
  {
    name: "HEADLINER",
    genre: "메인 스테이지 · Main Stage",
    status: "TBA — Coming Soon",
  },
  {
    name: "K-CULTURE ICON",
    genre: "패션 쇼케이스 · Fashion Show",
    status: "Announcement Q1 2027",
  },
  {
    name: "GLOBAL ARTIST",
    genre: "퍼포먼스 · Live Performance",
    status: "Announcement Q2 2027",
  },
  {
    name: "SPECIAL REVEAL",
    genre: "서프라이즈 · Surprise Act",
    status: "Stay Tuned",
  },
];

function backgroundStyle(image: string, fallback: string, overlay?: string) {
  const style: React.CSSProperties = {
    position: "relative",
  };
  if (image) {
    if (overlay) {
      style.backgroundImage = `${overlay}, url('${image}')`;
      style.backgroundSize = "100% 100%, cover";
    } else {
      style.backgroundImage = `url('${image}')`;
      style.backgroundSize = "cover";
    }
    style.backgroundPosition = "center";
    style.backgroundRepeat = "no-repeat";
  } else {
    style.backgroundImage = overlay ? `${overlay}, ${fallback}` : fallback;
    style.backgroundSize = "100% 100%";
  }
  return style;
}

export default function Home() {
  return (
    <div className="bg-muk text-baekja">
      {/* ═══════ HERO ═══════ */}
      <section className="relative flex min-h-screen items-end overflow-hidden" style={{ backgroundColor: '#030015' }}>
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
          <div className="w-full">
            <p className="text-base font-outfit tracking-[0.5em] uppercase text-[#D4AF37]">
              서울 DDP · 2027. 4 · SEOUL&apos;S CULTURE-COMMERCE CONVERGENCE
            </p>
            <h1 className="mt-4 font-display text-[clamp(6rem,22vw,13rem)] leading-[0.85] tracking-[0.03em] text-white drop-shadow-[0_12px_40px_rgba(0,0,0,0.45)]">
              KATALYZE
            </h1>
            <p className="mt-5 max-w-2xl text-lg font-outfit font-light leading-relaxed text-white/85 md:text-2xl">
              KATALYZE — The world&apos;s brands. Seoul&apos;s energy.<br/>One weekend that changes everything.
            </p>
            <p className="mt-2 text-base font-outfit tracking-[0.1em] text-[#4A7A6B]">
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
                <p className="mt-0.5 text-sm uppercase tracking-[0.25em] text-white/75 md:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ CULTURE MARQUEE — 풀블리드 선언문 ═══════ */}
      <section className="py-16 md:py-24 overflow-hidden bg-muk">
        <div className="overflow-x-hidden">
          <div
            className="whitespace-nowrap font-display text-[clamp(4rem,12vw,9rem)] leading-none text-white/[0.06] select-none"
            style={{ animation: 'marquee 30s linear infinite' }}
          >
            CULTURE × COMMERCE × COMMUNITY × SEOUL × DDP × KATALYZE × CULTURE × COMMERCE × COMMUNITY × SEOUL × DDP × KATALYZE ×&nbsp;
          </div>
        </div>
      </section>

      {/* ═══════ QUOTE / ABOUT — 에디토리얼 풀블리드 ═══════ */}
      <section className="py-32 md:py-44 bg-muk">
        <div className="container-shell">
          <p className="font-display text-[clamp(2.2rem,6vw,5.5rem)] leading-tight text-white max-w-4xl">
            &ldquo;Seoul doesn&apos;t follow trends. <span className="text-[#D4AF37]">It catalyzes them.</span>&rdquo;
          </p>
          <p className="mt-6 font-outfit text-lg font-light text-[#4A7A6B] max-w-xl">
            서울은 트렌드를 따르지 않는다. 촉발한다.
          </p>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-white/15 pt-12">
            <p className="font-outfit text-lg font-light leading-relaxed text-white/80 max-w-xl">
              Born at DDP — the architectural icon Zaha Hadid designed to embody Seoul&apos;s restless creativity — KATALYZE compresses K-fashion, K-beauty, street culture, music, and global trade into 72 hours of cultural velocity. Not a convention. Not a concert. A convergence.
            </p>
            <div className="space-y-6">
              <div className="flex items-baseline gap-4">
                <span className="font-display text-5xl text-[#D4AF37]">72</span>
                <span className="font-outfit text-sm uppercase tracking-[0.3em] text-white/60">Hours of culture velocity</span>
              </div>
              <div className="flex items-baseline gap-4">
                <span className="font-display text-5xl text-[#D4AF37]">50K+</span>
                <span className="font-outfit text-sm uppercase tracking-[0.3em] text-white/60">Global attendees</span>
              </div>
              <div className="flex items-baseline gap-4">
                <span className="font-display text-5xl text-[#D4AF37]">₩70B+</span>
                <span className="font-outfit text-sm uppercase tracking-[0.3em] text-white/60">Projected economic impact</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ NUMBERS — 임팩트 카운터 ═══════ */}
      <section className="py-20 border-y border-white/10 bg-muk">
        <div className="container-shell">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div>
              <p className="font-display text-6xl text-white md:text-8xl">50K</p>
              <p className="mt-2 font-outfit text-sm uppercase tracking-[0.3em] text-white/50">Attendees</p>
              <p className="mt-1 font-outfit text-base text-[#4A7A6B]">참석자</p>
            </div>
            <div>
              <p className="font-display text-6xl text-white md:text-8xl">72h</p>
              <p className="mt-2 font-outfit text-sm uppercase tracking-[0.3em] text-white/50">Duration</p>
              <p className="mt-1 font-outfit text-base text-[#4A7A6B]">페스티벌 시간</p>
            </div>
            <div>
              <p className="font-display text-6xl text-white md:text-8xl">200+</p>
              <p className="mt-2 font-outfit text-sm uppercase tracking-[0.3em] text-white/50">Brands</p>
              <p className="mt-1 font-outfit text-base text-[#4A7A6B]">참가 브랜드</p>
            </div>
            <div>
              <p className="font-display text-6xl text-[#D4AF37] md:text-8xl">₩1</p>
              <p className="mt-2 font-outfit text-sm uppercase tracking-[0.3em] text-white/50">Est. Value</p>
              <p className="mt-1 font-outfit text-base text-[#4A7A6B]">조 원 경제 효과</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ AUDIENCE SELECTOR — 비대칭 그리드 ═══════ */}
      <section className="bg-muk py-20 md:py-28">
        <div className="container-shell">
          <div className="mb-10 max-w-3xl md:mb-14">
            <p className="text-sm uppercase tracking-[0.5em] text-[#D4AF37]">Audience Selector</p>
            <h2 className="mt-4 font-impact text-6xl tracking-[0.07em] text-white md:text-8xl">CHOOSE YOUR<br/>ENTRY POINT</h2>
          </div>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1.6fr_1fr]">
            {/* 첫 번째 카드: 크게 */}
            <a
              href={audiences[0].href}
              className={`group relative min-h-[560px] overflow-hidden rounded-none ${audiences[0].ring}`}
              style={backgroundStyle(audiences[0].image, audiences[0].fallback, audiences[0].overlay)}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="relative z-10 flex h-full flex-col justify-end p-8 md:p-10">
                <div className="flex items-center gap-3">
                  <p className="text-sm uppercase tracking-[0.34em] text-white/80">{audiences[0].eyebrow}</p>
                  <span className="border border-white/20 px-2.5 py-0.5 text-base text-white/75">{audiences[0].tag}</span>
                </div>
                <h3 className="mt-4 max-w-lg font-display text-5xl leading-[0.96] text-white md:text-6xl">{audiences[0].title}</h3>
                <p className="mt-4 max-w-lg text-base leading-7 text-white/80">{audiences[0].description}</p>
                <div className="mt-6 flex items-center gap-3 text-base font-semibold uppercase tracking-[0.24em] text-white">
                  <span>{audiences[0].cta}</span>
                  <span className="inline-flex h-11 w-11 items-center justify-center border border-white/30 bg-white/10 transition group-hover:bg-white group-hover:text-black">
                    <IconArrowRight />
                  </span>
                </div>
              </div>
            </a>
            {/* 나머지 2개: 세로 스택 */}
            <div className="grid grid-rows-2 gap-4">
              {audiences.slice(1).map((card) => (
                <a
                  key={card.title}
                  href={card.href}
                  className={`group relative min-h-[270px] overflow-hidden rounded-none ${card.ring}`}
                  style={backgroundStyle(card.image, card.fallback, card.overlay)}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  <div className="relative z-10 flex h-full flex-col justify-end p-7">
                    <div className="flex items-center gap-3">
                      <p className="text-sm uppercase tracking-[0.34em] text-white/80">{card.eyebrow}</p>
                      <span className="border border-white/20 px-2 py-0.5 text-base text-white/75">{card.tag}</span>
                    </div>
                    <h3 className="mt-3 max-w-sm font-display text-3xl leading-[0.96] text-white md:text-4xl">{card.title}</h3>
                    <p className="mt-3 max-w-sm text-base leading-6 text-white/75 line-clamp-2">{card.description}</p>
                    <div className="mt-4 flex items-center gap-3 text-base font-semibold uppercase tracking-[0.24em] text-white">
                      <span>{card.cta}</span>
                      <span className="inline-flex h-9 w-9 items-center justify-center border border-white/30 bg-white/10 transition group-hover:bg-white group-hover:text-black">
                        <IconArrowRight />
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ THE 4 ZONES — Alternating Full-Width ═══════ */}
      <section className="bg-muk">
        <div className="container-shell py-20 md:py-28">
          <div className="mb-10 max-w-3xl md:mb-14">
            <p className="text-sm uppercase tracking-[0.5em] text-[#D4AF37]">4 Zones</p>
            <h2 className="mt-4 font-impact text-6xl tracking-[0.07em] text-white md:text-8xl">THE WORLD OF<br/>KATALYZE</h2>
          </div>
        </div>
        <div className="space-y-0">
          {zones.map((zone, idx) => (
            <div
              key={zone.id}
              className={`relative flex flex-col min-h-[50vh] overflow-hidden md:flex-row ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* 이미지: 60% */}
              <div className="relative w-full md:w-3/5 min-h-[280px] md:min-h-0">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url('${zone.image}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
                <div className="absolute inset-0 bg-black/30" />
              </div>
              {/* 텍스트: 40% */}
              <div className="w-full md:w-2/5 flex flex-col justify-center px-8 py-12 md:px-12 md:py-16 bg-muk">
                <span className="font-display text-6xl md:text-7xl" style={{ color: zone.color }}>{zone.number}</span>
                <h3 className="mt-4 font-display text-4xl tracking-[0.05em] text-white md:text-5xl">{zone.title}</h3>
                <p className="mt-3 font-outfit text-sm uppercase tracking-[0.3em]" style={{ color: zone.color }}>{zone.subtitle}</p>
                <p className="mt-6 font-outfit text-base font-light leading-relaxed text-white/80">{zone.description}</p>
                <p className="mt-4 font-outfit text-base italic text-white/50">{zone.en}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════ LINEUP — 에디토리얼 텍스트 리스트 ═══════ */}
      <section className="py-20 md:py-28 bg-muk">
        <div className="container-shell">
          <div className="mb-16">
            <p className="font-outfit text-sm uppercase tracking-[0.5em] text-[#D4AF37]">LINEUP · 라인업</p>
            <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <h2 className="font-display text-5xl tracking-[0.07em] text-white md:text-8xl">NAMES THAT<br/>MOVE CULTURE</h2>
              <div className="flex flex-col items-start gap-3 md:items-end">
                <p className="font-outfit text-base text-white/50 md:text-right md:max-w-xs">공연, 토크, 쇼케이스 —<br/>발표될 때마다 업데이트됩니다.</p>
                <PillButton href="/program" variant="secondary">VIEW FULL PROGRAM</PillButton>
              </div>
            </div>
          </div>
          {/* 라인업 아이템: 구분선 스타일 */}
          <div className="divide-y divide-white/10 border-t border-white/10">
            {lineup.map((artist, idx) => (
              <div key={artist.name} className="group flex flex-col gap-4 py-8 transition-colors hover:bg-white/[0.02] sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-6 sm:gap-8">
                  <span className="font-display text-2xl text-white/20 min-w-[2.5rem]">{String(idx + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 className="font-display text-3xl tracking-[0.04em] text-white md:text-5xl">{artist.name}</h3>
                    <p className="mt-1 font-outfit text-base text-white/60">{artist.genre}</p>
                  </div>
                </div>
                <div className="pl-[calc(2.5rem+1.5rem)] sm:pl-0 sm:text-right">
                  <span className="inline-block border border-white/20 px-4 py-2 font-outfit text-sm uppercase tracking-[0.3em] text-[#D4AF37]">{artist.status}</span>
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
              <div className="h-8 w-8 text-[#D4AF37]"><IconBuilding /></div>
              <p className="mt-5 text-sm uppercase tracking-[0.34em] text-[#F0D980]">For Partners & Brands</p>
              <h3 className="mt-4 font-display text-4xl leading-[0.96] text-white md:text-5xl">Build the most photographed booth in Seoul.</h3>
              <p className="mt-4 max-w-lg text-base leading-7 text-white/80 md:text-base">
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
              <div className="h-8 w-8 text-[#00C9A7]"><IconBriefcase /></div>
              <p className="mt-5 text-sm uppercase tracking-[0.34em] text-[#00C9A7]">For Buyers</p>
              <h3 className="mt-4 font-display text-4xl leading-[0.96] text-white md:text-5xl">Source the next breakout Korean brand before everyone else does.</h3>
              <p className="mt-4 max-w-lg text-base leading-7 text-white/80 md:text-base">
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
              <div className="inline-flex w-fit items-center gap-2 rounded-none border border-white/20 bg-black/20 px-4 py-2 text-sm uppercase tracking-[0.26em] text-white/85 backdrop-blur-sm">
                <span className="h-3.5 w-3.5 text-[#D4AF37] inline-flex"><IconMapPin /></span> SEOUL · DDP · APRIL 2027
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
              <p className="text-sm uppercase tracking-[0.5em] text-white/80">APRIL 2027 · 서울 DDP</p>
              <h2 className="mt-4 font-impact text-7xl tracking-[0.08em] text-white md:text-9xl">THE WORLD SHOWS UP IN SEOUL.</h2>
              <p className="mx-auto mt-4 max-w-2xl font-outfit text-base leading-8 text-white/90 md:text-lg">
                4만 명의 관객, 200+ 브랜드, 하나의 주말. 당신의 자리를 지금 확보하세요.
              </p>
              <p className="mx-auto mt-2 max-w-2xl font-outfit text-base leading-7 text-white/85">
                40,000 attendees. 200+ brands. One weekend. Secure your place now.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3 md:gap-4">
                <PillButton href="/tickets">
                  <span className="mr-2 h-4 w-4 inline-flex"><IconTicket /></span> GET TICKETS
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
