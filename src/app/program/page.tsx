"use client";

import { useState } from "react";
import { AnimatedSection } from "@/components/animated-section";
import { PageHero } from "@/components/page-hero";
import { SectionHeading, PillButton } from "@/components/ui";

const programZones = [
  {
    id: "drop", title: "THE DROP", subtitle: "Retail & Beauty",
    desc: "한정판 캡슐, 브랜드 첫 공개, 뷰티 디스커버리 — 전환이 일어나는 곳.",
    en: "Limited drops, K-beauty launches, brand firsts.",
    image: "/images/zone_drop.jpg",
    color: "#DC1E5A", stat: "40%", statLabel: "of floor space"
  },
  {
    id: "stage", title: "THE STAGE", subtitle: "Music & Performance",
    desc: "헤드라인 퍼포먼스, 패션 인플렉티드 쇼 — 피드를 장악하는 무대.",
    en: "Headline sets, fashion shows, spectacle built for reach.",
    image: "/images/zone_stage.jpg",
    color: "#8220DC", stat: "25%", statLabel: "of floor space"
  },
  {
    id: "lab", title: "THE LAB", subtitle: "Workshops & Co-Creation",
    desc: "파운더 토크, 크리에이터 워크숍 — 다음을 먼저 보는 공간.",
    en: "Founder talks, hands-on sessions, culture experiments.",
    image: "/images/zone_lab.jpg",
    color: "#00C9A7", stat: "20%", statLabel: "of floor space"
  },
  {
    id: "gallery", title: "THE GALLERY", subtitle: "VIP & Art & Hospitality",
    desc: "설치 미술, 브랜드 디너, 프리미엄 호스피탈리티 — 가장 깊은 경험.",
    en: "Art installations, brand dinners, premium hospitality.",
    image: "/images/zone_gallery.jpg",
    color: "#F59E0B", stat: "15%", statLabel: "of floor space"
  },
]

const schedule = {
  day1: [
    { time: "12:00", title: "Opening Ceremony", zone: "THE STAGE", desc: "DDP 광장 오프닝 퍼포먼스" },
    { time: "14:00", title: "THE DROP Opens", zone: "THE DROP", desc: "한정판 드롭 & K-뷰티 론칭" },
    { time: "16:00", title: "Founder Talks", zone: "THE LAB", desc: "K-컬처 파운더 토크 세션" },
    { time: "18:30", title: "Golden Hour Drops", zone: "THE DROP", desc: "스페셜 한정판 릴리즈" },
    { time: "21:00", title: "Headline Performance", zone: "THE STAGE", desc: "Day 1 헤드라인 퍼포먼스" },
  ],
  day2: [
    { time: "11:00", title: "Doors Open", zone: "ALL ZONES", desc: "전 존 오픈" },
    { time: "13:00", title: "Brand Masterclass", zone: "THE LAB", desc: "글로벌 브랜드 마스터클래스" },
    { time: "16:00", title: "Gallery Opening", zone: "THE GALLERY", desc: "VIP 갤러리 오프닝" },
    { time: "19:00", title: "Closing Night", zone: "THE STAGE", desc: "클로징 나이트 퍼포먼스" },
    { time: "22:00", title: "After Party", zone: "THE GALLERY", desc: "VIP 애프터파티" },
  ],
}

const zoneColorMap: Record<string, string> = {
  "THE DROP": "#DC1E5A",
  "THE STAGE": "#8220DC",
  "THE LAB": "#00C9A7",
  "THE GALLERY": "#F59E0B",
  "ALL ZONES": "#FABF13",
}

export default function ProgramPage() {
  const [activeDay, setActiveDay] = useState<"day1" | "day2">("day1")
  const items = schedule[activeDay]

  return (
    <div>
      <PageHero
        title="72 HOURS OF CULTURE VELOCITY"
        eyebrow="Program · 프로그램"
        description="4개의 존, 72시간. 모든 순간이 발견이고 전환이다."
        image="/images/concert_stage.jpg"
      />

      {/* Zone 카드 그리드 */}
      <AnimatedSection className="section-pad bg-muk">
        <div className="container-shell">
          <SectionHeading eyebrow="The Zones" title="4개의 세계" description="KATALYZE의 4개 존은 독립된 경험 레이어. 하나의 공간 안에서 서로 다른 문화가 충돌한다." />
          <div className="grid grid-cols-1 gap-0 md:grid-cols-2">
            {programZones.map((zone) => (
              <div
                key={zone.id}
                className="group relative h-[400px] overflow-hidden"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.75) 100%), url('${zone.image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <div className="mb-2 flex items-center gap-3">
                    <span className="h-px w-8" style={{ backgroundColor: zone.color }} />
                    <p className="text-sm uppercase tracking-[0.4em]" style={{ color: zone.color }}>{zone.subtitle}</p>
                  </div>
                  <h3 className="font-display text-4xl uppercase text-white">{zone.title}</h3>
                  <p className="mt-2 font-outfit text-base leading-6 text-white/85 max-w-sm">{zone.desc}</p>
                  <p className="mt-1 font-outfit text-base text-white/55 italic">{zone.en}</p>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="font-display text-3xl" style={{ color: zone.color }}>{zone.stat}</span>
                    <span className="font-outfit text-sm uppercase tracking-widest text-white/55">{zone.statLabel}</span>
                  </div>
                </div>
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: zone.color + '18' }}
                />
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* 타임테이블 */}
      <AnimatedSection 
        className="section-pad"
        style={{
          backgroundImage: "linear-gradient(rgba(26,26,31,0.95), rgba(26,26,31,0.95)), url('/images/concert_stage.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      >
        <div className="container-shell">
          <SectionHeading eyebrow="Schedule" title="타임테이블" />
          {/* Day 탭 */}
          <div className="mb-8 flex gap-0 border-b border-white/10">
            {(["day1", "day2"] as const).map((d) => (
              <button
                key={d}
                onClick={() => setActiveDay(d)}
                className={`px-8 py-3 text-sm uppercase tracking-[0.3em] font-semibold transition border-b-2 -mb-px ${
                  activeDay === d
                    ? "border-[#FABF13] text-[#FABF13]"
                    : "border-transparent text-white/55 hover:text-white/85"
                }`}
              >
                {d === "day1" ? "DAY 1" : "DAY 2"}
              </button>
            ))}
          </div>
          <div className="divide-y divide-white/10">
            {items.map((item) => (
              <div key={item.time + item.title} className="flex flex-col gap-2 py-5 md:flex-row md:items-center md:gap-8">
                <div className="w-16 shrink-0">
                  <p className="font-display text-xl text-[#FABF13]">{item.time}</p>
                </div>
                <div className="flex-1">
                  <p className="font-outfit text-base font-semibold text-white">{item.title}</p>
                  <p className="font-outfit text-base text-white/65">{item.desc}</p>
                </div>
                <div>
                  <span
                    className="inline-block px-3 py-1 text-sm uppercase tracking-[0.25em] font-semibold"
                    style={{
                      color: zoneColorMap[item.zone] ?? "#FABF13",
                      backgroundColor: (zoneColorMap[item.zone] ?? "#FABF13") + "22",
                    }}
                  >
                    {item.zone}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* 라인업 예고 */}
      <AnimatedSection className="section-pad bg-muk">
        <div className="container-shell">
          <SectionHeading eyebrow="Lineup" title="라인업 예고" description="헤드라이너 발표 예정. 곧 공개됩니다." />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex flex-col items-center justify-center border border-white/10 bg-white/[0.02] py-16 px-8">
                <div className="mb-4 h-20 w-20 rounded-full bg-white/10 blur-sm" />
                <p className="font-outfit text-sm uppercase tracking-[0.4em] text-white/70">Coming Soon</p>
                <p className="mt-2 font-display text-2xl uppercase text-white/20">TBA</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection className="section-pad">
        <div className="container-shell flex flex-col items-center text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-[#FABF13]">Get Your Ticket</p>
          <h2 className="font-display text-4xl uppercase text-white md:text-6xl">지금 티켓 구매</h2>
          <p className="mt-4 max-w-xl font-outfit text-base text-white/75">April 2027, DDP Seoul. 72시간의 문화 속도를 직접 경험하세요.</p>
          <div className="mt-8">
            <PillButton href="/tickets">티켓 구매하기</PillButton>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
