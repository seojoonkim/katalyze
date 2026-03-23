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
    tagClass: "font-noto-kr",
    title: "Come for the drop. Stay for the obsession.",
    description:
      "5만 명이 동시에 발견하는 순간. 한정판 드롭, K-뷰티 월드 프리미어, 라이브 퍼포먼스, 서울만의 감각 — 하나의 주말에 압축.",
    href: "/tickets",
    cta: "Explore visitor passes",
    image: "/images/audience_visitors.jpg",
    fallback: "linear-gradient(135deg, #DC1E5A, #8220DC)",
    overlay: "linear-gradient(180deg, rgba(220,30,90,0.24) 0%, rgba(130,32,220,0.18) 42%, rgba(0,0,0,0.85) 100%)",
    ring: "shadow-[0_0_0_1px_rgba(220,30,90,0.45)]",
  },
  {
    eyebrow: "FOR BRANDS",
    tag: "브랜드",
    tagClass: "font-noto-kr",
    title: "50K people. 72h. Your Seoul chapter.",
    description:
      "한정판 드롭, 몰입형 부스, 파운더 토크, 실시간 전환 — 대한민국 최대 컬처 커머스 무대에서 브랜드의 다음 챕터를 여세요.",
    href: "/partners",
    cta: "Partner with us",
    image: "/images/audience_brands.jpg",
    fallback: "linear-gradient(135deg, #FABF13, #A67C00)",
    overlay: "linear-gradient(180deg, rgba(212,175,55,0.22) 0%, rgba(200,160,30,0.14) 40%, rgba(0,0,0,0.85) 100%)",
    ring: "shadow-[0_0_0_1px_rgba(212,175,55,0.45)]",
  },
  {
    eyebrow: "FOR BUYERS",
    tag: "바이어",
    tagClass: "font-noto-kr",
    title: "The next global brand is Korean. Find it first.",
    description:
      "프라이빗 네트워킹, 큐레이티드 1:1 미팅, VIP 라운지. 뷰티·패션·디자인·F&B·컬처 IP — 세계가 주목하기 전에, 먼저 선점하세요.",
    href: "/b2b",
    cta: "Request B2B access",
    image: "/images/audience_buyers.jpg",
    fallback: "linear-gradient(135deg, #00C9A7, #1B2A4A)",
    overlay: "linear-gradient(180deg, rgba(0,201,167,0.2) 0%, rgba(27,42,74,0.18) 42%, rgba(0,0,0,0.85) 100%)",
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
      "한정판 캡슐 드롭, 글로벌 브랜드 첫 공개, 인플루언서 콜라보, 뷰티 디스커버리 — 카메라가 향하는 곳에서 전환이 일어난다.",
    en: "The queue forms. The camera points. The drop lands. Commerce at the speed of culture.",
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
      "음악, 댄스, 런웨이, 헤드라인 퍼포먼스 — 사운드가 건물을 타고 서울 전체로 퍼지는 밤. 피드를 지배하는 순간.",
    en: "The night DDP shakes. Sound climbs the walls. Performances that own every feed.",
    image: "/images/zone_stage.jpg",
    fallback: "linear-gradient(135deg, #8220DC 0%, #1a0030 100%)",
    color: "#8220DC",
  },
  {
    id: "lab",
    number: "03",
    title: "THE LAB",
    subtitle: "트렌드가 되기 전에 만나는 곳.",
    description:
      "파운더 키노트, 크리에이터 워크숍, 핸즈온 실험실 — 문화를 설계하는 사람들이 '다음'을 먼저 꺼내는 공간.",
    en: "Founders keynote. Creators workshop. Hands build. What's next gets revealed — before it trends.",
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
      "설치 미술, 아트 액티베이션, 프리미엄 호스피탈리티 — 큐레이션된 시선으로 페스티벌을 경험하는 가장 깊은 레이어.",
    en: "Art installations. Premium hospitality. The deepest layer of KATALYZE — where art meets altitude.",
    image: "/images/zone_gallery.jpg",
    fallback: "linear-gradient(135deg, #F59E0B 0%, #1a1000 100%)",
    color: "#F59E0B",
  },
];

const lineup = [
  {
    name: "██████████",
    genre: "메인 스테이지 · Main Stage",
    status: "DROPPING SOON",
  },
  {
    name: "██████ ████",
    genre: "패션 쇼케이스 · Fashion Showcase",
    status: "Q1 2027 REVEAL",
  },
  {
    name: "████ ██████",
    genre: "라이브 퍼포먼스 · Live Performance",
    status: "Q2 2027 REVEAL",
  },
  {
    name: "?????????",
    genre: "서프라이즈 · You're Not Ready",
    status: "IF WE TOLD YOU…",
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
        <div className="container-shell relative z-10 flex min-h-screen flex-col justify-end pb-10 pt-24 md:pb-16 lg:pt-32">
          <div className="w-full">
            <p className="text-sm font-rubik tracking-[0.3em] uppercase text-[#FABF13] pl-[0.04em] font-bold">
              SEOUL DDP · APRIL 2027 · CULTURE×COMMERCE
            </p>
            <h1 className="mt-4 font-rubik text-[clamp(2rem,10.5vw,8.4rem)] leading-[0.85] tracking-[0.01em] text-white drop-shadow-[0_12px_40px_rgba(0,0,0,0.65)]" style={{fontFamily: "var(--font-rubik), sans-serif", fontWeight: 700}}>
              KATALYZE
            </h1>
            <p className="mt-5 max-w-2xl text-lg font-outfit font-light leading-relaxed text-white/92 md:text-2xl">
              Global brands. Seoul&apos;s energy.<br/>72 hours that <em>change</em> everything.
            </p>
            <p className="mt-2 text-base font-noto-kr tracking-[0.1em] text-[#00D4B8]">
              세계의 브랜드, 서울의 에너지. 하나의 주말.
            </p>
            <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center">
              <PillButton href="/tickets">CLAIM YOUR SPOT</PillButton>
              <div className="flex gap-4 text-sm font-outfit text-white/88">
                <a href="/partners" className="hover:text-white transition-colors">Partner with us →</a>
                <a href="/b2b" className="hover:text-white transition-colors">B2B access →</a>
              </div>
            </div>
          </div>
          <div className="mt-8 flex flex-nowrap gap-x-4 overflow-x-auto md:mt-14 md:gap-x-10 md:overflow-visible">
            {stats.map((stat) => (
              <div key={stat.label} className="flex-shrink-0">
                <p className="font-rubik text-3xl tracking-[0.04em] text-white md:text-5xl" style={{fontWeight:700}}>{stat.value}</p>
                <p className="mt-0.5 text-sm font-rubik uppercase tracking-[0.25em] text-white/90 md:text-base font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ CULTURE MARQUEE — 풀블리드 선언문 ═══════ */}
      <section className="py-16 md:py-24 overflow-hidden bg-muk">
        <div className="overflow-x-hidden">
          <div
            className="whitespace-nowrap font-rubik text-[clamp(4rem,12vw,9rem)] leading-none text-white/[0.08] select-none"
            style={{ animation: 'marquee 30s linear infinite' }}
          >
            ARRIVE AS A BRAND × LEAVE AS A LEGEND × NOT A FESTIVAL — A FORCE × DDP SEOUL × APRIL 2027 × KATALYZE EVERYTHING × ARRIVE AS A BRAND × LEAVE AS A LEGEND × NOT A FESTIVAL — A FORCE × DDP SEOUL × APRIL 2027 × KATALYZE EVERYTHING ×&nbsp;
          </div>
        </div>
      </section>

      {/* ═══════ QUOTE / ABOUT — 에디토리얼 풀블리드 ═══════ */}
      <section className="py-32 md:py-44 bg-muk">
        <div className="container-shell">
          <p className="font-rubik text-[clamp(1.8rem,3.8vw,3.8rem)] leading-[1.15] text-white max-w-5xl" style={{fontWeight:800}}>
            &ldquo;Seoul doesn&apos;t follow trends.<br/><span className="text-[#FABF13]">It ignites them.&rdquo;</span>
          </p>
          <p className="mt-6 font-noto-kr text-lg font-light text-[#00D4B8] max-w-xl">
            서울은 트렌드를 따르지 않는다. 점화한다.
          </p>
          <p className="mt-16 font-rubik text-[clamp(3rem,7vw,6rem)] font-bold leading-none text-white/10 select-none">
            CULTURE.<br/>COMMERCE.<br/>CONVERGENCE.
          </p>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-white/15 pt-12">
            <p className="font-outfit text-lg font-light leading-relaxed text-white/90 max-w-xl">
              Born at DDP — the architectural icon Zaha Hadid designed to embody Seoul&apos;s restless creativity — KATALYZE compresses K-fashion, K-beauty, street culture, music, and global trade into 72 hours of cultural velocity. Not a convention. Not a concert. A convergence.
            </p>
            <div className="space-y-6">
              <div className="flex items-baseline gap-4">
                <span className="font-rubik text-6xl text-[#FABF13]" style={{fontWeight:800}}>72</span>
                <span className="font-rubik text-sm uppercase tracking-[0.3em] text-white/90 font-semibold">Hours of culture velocity</span>
              </div>
              <div className="flex items-baseline gap-4">
                <span className="font-rubik text-6xl text-[#FABF13]" style={{fontWeight:800}}>50K+</span>
                <span className="font-rubik text-sm uppercase tracking-[0.3em] text-white/90 font-semibold">Global attendees</span>
              </div>
              <div className="flex items-baseline gap-4">
                <span className="font-rubik text-6xl text-[#FABF13]" style={{fontWeight:800}}>₩1T+</span>
                <span className="font-rubik text-sm uppercase tracking-[0.3em] text-white/90 font-semibold">Projected economic impact</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ NUMBERS — 임팩트 카운터 ═══════ */}
      <section className="py-20 border-y border-white/10 bg-muk">
        <div className="container-shell">
          <p className="mb-6 font-rubik text-[clamp(1.5rem,3vw,2.8rem)] tracking-tight text-white" style={{fontWeight:900}}>
            THE NUMBERS <span className="text-[#FABF13]">DON&apos;T LIE.</span>
          </p>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div>
              <p className="font-rubik text-7xl text-white md:text-9xl" style={{fontWeight:900}}>50K</p>
              <p className="mt-2 font-rubik text-sm uppercase tracking-[0.3em] text-white/88 font-semibold">Attendees</p>
              <p className="mt-1 font-noto-kr text-base text-[#00D4B8]">참석자</p>
            </div>
            <div>
              <p className="font-rubik text-7xl text-white md:text-9xl" style={{fontWeight:900}}>72h</p>
              <p className="mt-2 font-rubik text-sm uppercase tracking-[0.3em] text-white/88 font-semibold">Duration</p>
              <p className="mt-1 font-noto-kr text-base text-[#00D4B8]">페스티벌 시간</p>
            </div>
            <div>
              <p className="font-rubik text-7xl text-white md:text-9xl" style={{fontWeight:900}}>200+</p>
              <p className="mt-2 font-rubik text-sm uppercase tracking-[0.3em] text-white/88 font-semibold">Brands</p>
              <p className="mt-1 font-noto-kr text-base text-[#00D4B8]">참가 브랜드</p>
            </div>
            <div>
              <p className="font-rubik text-7xl text-[#FABF13] md:text-9xl" style={{fontWeight:900}}>₩1조</p>
              <p className="mt-2 font-rubik text-sm uppercase tracking-[0.3em] text-white/88 font-semibold">Est. Value</p>
              <p className="mt-1 font-noto-kr text-base text-[#00D4B8]">경제 효과</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ PARTNER TRUST BADGE ═══════ */}
      <section className="bg-muk border-t border-white/10 py-10 md:py-12">
        <div className="container-shell text-center">
          <p className="text-sm font-rubik uppercase tracking-[0.35em] text-white/90 mb-6 font-bold">Backed by</p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 font-rubik text-2xl tracking-[0.14em] text-white/90 md:text-3xl font-bold">
            <span>HASHED</span>
            <span>SAMSUNG</span>
            <span>CJ</span>
            <span>MUSINSA</span>
            <span>HYBE</span>
            <span>KOREAN AIR</span>
            <span>KLOOK</span>
          </div>
        </div>
      </section>

      {/* ═══════ AUDIENCE SELECTOR — 비대칭 그리드 ═══════ */}
      <section className="bg-muk py-20 md:py-28">
        <div className="container-shell">
          <div className="mb-10 max-w-3xl md:mb-14">
            <p className="text-sm font-rubik uppercase tracking-[0.35em] text-[#FABF13] font-bold">Audience Selector</p>
            <h2 className="mt-4 font-rubik text-3xl tracking-[0.01em] text-white md:text-4xl lg:text-[2.8rem]" style={{fontWeight:800}}>HOW WILL YOU SHOW UP?</h2>
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
                  <p className="text-sm uppercase tracking-[0.34em] text-white/90">{audiences[0].eyebrow}</p>
                  <span className="border border-white/20 px-2.5 py-0.5 text-base text-white/88">{audiences[0].tag}</span>
                </div>
                <h3 className="mt-4 max-w-lg font-rubik text-5xl leading-[0.96] text-white md:text-6xl" style={{textShadow:"0 2px 20px rgba(0,0,0,0.9)"}} style={{fontWeight:800}}>{audiences[0].title}</h3>
                <p className="mt-4 max-w-lg text-base leading-7 text-white/90">{audiences[0].description}</p>
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
                      <p className="text-sm uppercase tracking-[0.34em] text-white/90">{card.eyebrow}</p>
                      <span className="border border-white/20 px-2 py-0.5 text-base text-white/88">{card.tag}</span>
                    </div>
                    <h3 className="mt-3 max-w-sm font-rubik text-3xl leading-[0.96] text-white md:text-4xl" style={{fontWeight:800}}>{card.title}</h3>
                    <p className="mt-3 max-w-sm text-base leading-6 text-white/88 line-clamp-2">{card.description}</p>
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
            <p className="text-sm font-rubik uppercase tracking-[0.35em] text-[#FABF13] font-bold">4 Zones</p>
            <h2 className="mt-4 font-rubik text-4xl tracking-[0.02em] text-white md:text-5xl lg:text-[3.6rem]" style={{fontWeight:800}}>FOUR WORLDS. ONE WEEKEND.</h2>
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
                <div className="absolute inset-0 bg-black/45" />
              </div>
              {/* 텍스트: 40% */}
              <div className="relative w-full md:w-2/5 flex flex-col justify-center px-8 py-12 md:px-12 md:py-16 bg-muk overflow-hidden">
                <p className="font-rubik text-[clamp(4rem,6vw,7rem)] font-black leading-none text-white/5 absolute bottom-4 right-4 select-none">
                  {zone.title.split(' ')[0]}
                </p>
                <span className="font-rubik text-7xl md:text-8xl" style={{ color: zone.color, fontWeight: 900 }}>{zone.number}</span>
                <h3 className="mt-4 font-rubik text-4xl tracking-[0.05em] text-white md:text-5xl" style={{textShadow:"0 2px 16px rgba(0,0,0,0.9)"}} style={{fontWeight:800}}>{zone.title}</h3>
                <p className="mt-3 font-noto-kr text-sm uppercase tracking-[0.3em]" style={{ color: zone.color }}>{zone.subtitle}</p>
                <p className="mt-6 font-noto-kr text-base font-light leading-relaxed text-white/90">{zone.description}</p>
                <p className="mt-4 font-outfit text-base italic text-white/92">{zone.en}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════ LINEUP — 에디토리얼 텍스트 리스트 ═══════ */}
      <section className="py-20 md:py-28 bg-muk">
        <div className="container-shell">
          <div className="mb-16">
            <p className="font-rubik text-sm uppercase tracking-[0.35em] text-[#FABF13] font-bold">LINEUP · <span className="font-noto-kr">라인업</span></p>
            <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <h2 className="font-rubik text-5xl tracking-[0.05em] text-white md:text-8xl" style={{fontWeight:900}}>NAMES THAT<br/>MOVE CULTURE</h2>
              <p className="mt-6 font-rubik text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-white/92">
                APRIL 2027 · DDP SEOUL
              </p>
              <div className="flex flex-col items-start gap-3 md:items-end">
                <p className="font-noto-kr text-base text-white/92 md:text-right md:max-w-xs">이름이 공개될 때마다,<br/>이 페이지가 바뀝니다.</p>
                <PillButton href="/program" variant="secondary">VIEW FULL PROGRAM</PillButton>
              </div>
            </div>
          </div>
          {/* 라인업 아이템: 구분선 스타일 */}
          <div className="divide-y divide-white/10 border-t border-white/10">
            {lineup.map((artist, idx) => (
              <div key={artist.name} className="group flex flex-col gap-4 py-8 transition-colors hover:bg-white/[0.02] sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-6 sm:gap-8">
                  <span className="font-rubik text-2xl text-white/88 min-w-[2.5rem]">{String(idx + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 className="font-rubik text-4xl tracking-[0.04em] text-white md:text-6xl" style={{fontWeight:700}}>{artist.name}</h3>
                    <p className="mt-1 font-outfit text-base text-white/88">{artist.genre}</p>
                  </div>
                </div>
                <div className="pl-[calc(2.5rem+1.5rem)] sm:pl-0 sm:text-right">
                  <span className="inline-block border border-white/20 px-4 py-2 font-outfit text-sm uppercase tracking-[0.3em] text-[#FABF13]">{artist.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ MARQUEE ═══════ */}
      <section className="overflow-hidden bg-baekja py-7 text-muk md:py-8">
        <div className="marquee-track font-rubik text-3xl tracking-[0.18em] md:text-4xl">
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
            className="group relative min-h-[440px] overflow-hidden rounded-none border border-[#FABF13]/35"
            style={backgroundStyle(
              "/images/business_brands.jpg",
              "linear-gradient(135deg, #1a1000, #2a1800)",
              "linear-gradient(180deg, rgba(212,175,55,0.18) 0%, rgba(0,0,0,0.85) 100%), linear-gradient(135deg, rgba(212,175,55,0.40), transparent 55%)"
            )}
          >
            <div className="relative z-10 flex h-full flex-col justify-end p-8 md:p-10">
              <div className="h-8 w-8 text-[#FABF13]"><IconBuilding /></div>
              <p className="mt-5 text-sm font-rubik uppercase tracking-[0.3em] text-[#F0D980] font-bold">For Partners & Brands</p>
              <h3 className="mt-4 font-rubik text-4xl leading-[0.96] text-white md:text-5xl" style={{fontWeight:800}}>Build the most photographed booth in Seoul.</h3>
              <p className="mt-4 max-w-lg text-base leading-7 text-white/90 md:text-base">
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
              "linear-gradient(180deg, rgba(0,201,167,0.18) 0%, rgba(0,0,0,0.85) 100%), linear-gradient(135deg, rgba(0,201,167,0.32), transparent 58%)"
            )}
          >
            <div className="relative z-10 flex h-full flex-col justify-end p-8 md:p-10">
              <div className="h-8 w-8 text-[#00C9A7]"><IconBriefcase /></div>
              <p className="mt-5 text-sm font-rubik uppercase tracking-[0.3em] text-[#00C9A7] font-bold">For Buyers</p>
              <h3 className="mt-4 font-rubik text-4xl leading-[0.96] text-white md:text-5xl" style={{fontWeight:800}}>Source the next breakout Korean brand before everyone else does.</h3>
              <p className="mt-4 max-w-lg text-base leading-7 text-white/90 md:text-base">
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
              "linear-gradient(135deg, #1B2A4A, #0D0D10)",
              "linear-gradient(180deg, rgba(27,42,74,0.12) 0%, rgba(0,0,0,0.85) 100%), radial-gradient(circle at top right, rgba(212,175,55,0.22), transparent 28%)"
            )}
          >
            <div className="relative z-10 flex min-h-[520px] flex-col justify-end p-8 md:p-12">
              <div className="inline-flex w-fit items-center gap-2 rounded-none border border-white/20 bg-black/35 px-4 py-2 text-sm uppercase tracking-[0.26em] text-white/92 backdrop-blur-sm">
                <span className="h-3.5 w-3.5 text-[#FABF13] inline-flex"><IconMapPin /></span> SEOUL · DDP · APRIL 2027
              </div>
              <h2 className="mt-6 max-w-4xl font-rubik text-5xl leading-[0.9] text-white md:text-7xl" style={{fontWeight:900}}>THE CITY. THE ICON.<br className="hidden md:block"/> THE MOMENT.</h2>
              <p className="mt-4 font-noto-kr text-base text-white/92">자하 하디드가 설계한 서울의 아이콘, DDP. 여기서 시작된다.</p>
              <div className="mt-8">
                <PillButton href="/about">PLAN YOUR VISIT</PillButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ FINAL CTA ═══════ */}
      <section className="bg-[linear-gradient(135deg,#FF0A73_0%,#B80050_100%)] py-20 md:py-24">
        <div className="container-shell text-center text-white">
          <div
            className="relative overflow-hidden rounded-none px-6 py-16 md:px-10 md:py-24"
            style={backgroundStyle(
              "/images/final_cta.jpg",
              "linear-gradient(135deg,#FF0A73_0%,#B80050_100%)",
              "linear-gradient(180deg, rgba(212,175,55,0.18) 0%, rgba(0,0,0,0.48) 100%)"
            )}
          >
            <div className="absolute inset-0 bg-black/35" />
            <div className="relative z-10">
              <p className="text-sm font-rubik uppercase tracking-[0.35em] text-white/90 font-bold">APRIL 2027 · <span className="font-noto-kr">서울 DDP</span></p>
              <h2 className="mt-4 font-rubik text-5xl tracking-tight text-white md:text-7xl leading-[0.9]" style={{fontFamily:"var(--font-rubik),sans-serif", fontWeight:900}}>THE WORLD IS COMING TO SEOUL.<br/><span className="text-[#FABF13]">ARE YOU?</span></h2>
              <p className="mx-auto mt-4 max-w-2xl font-noto-kr text-base leading-8 text-white/90 md:text-lg">
                5만 명의 관객. 200+ 브랜드. 하나의 주말. 당신의 자리는 지금 이 순간 사라지고 있습니다.
              </p>
              <p className="mx-auto mt-2 max-w-2xl font-outfit text-base leading-7 text-white/92">
                50,000 attendees. 200+ brands. One weekend. Your spot won&apos;t wait.
              </p>
              <div className="mt-8 flex flex-col items-center gap-4">
                <PillButton href="/tickets">
                  <span className="mr-2 h-4 w-4 inline-flex"><IconTicket /></span> CLAIM YOUR SPOT
                </PillButton>
                <div className="flex gap-4 text-sm font-outfit text-white/88">
                  <a href="/partners" className="hover:text-white transition-colors">Partner with us →</a>
                  <a href="/b2b" className="hover:text-white transition-colors">B2B access →</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
