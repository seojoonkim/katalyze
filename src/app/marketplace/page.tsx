"use client";

import { useState } from "react";
import { AnimatedSection } from "@/components/animated-section";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/ui";

const categories = [
  { title: "Fashion Drops", ko: "패션 드롭", count: "40+", image: "/images/zone_drop.jpg", color: "#DC1E5A" },
  { title: "K-Beauty", ko: "K-뷰티", count: "35+", image: "/images/beauty_drop.jpg", color: "#8220DC" },
  { title: "Design & Art", ko: "디자인·아트", count: "20+", image: "/images/zone_gallery.jpg", color: "#F59E0B" },
  { title: "Food & Beverage", ko: "F&B", count: "15+", image: "/images/crowd_energy.jpg", color: "#00C9A7" },
  { title: "Tech & Innovation", ko: "테크·이노베이션", count: "10+", image: "/images/zone_lab.jpg", color: "#4A7A6B" },
  { title: "Collectibles", ko: "컬렉터블", count: "20+", image: "/images/lineup_artist1.jpg", color: "#C73B3B" },
]

const brandLogos = ["AMORE PACIFIC", "MUSINSA", "GENTLE MONSTER", "ADER ERROR", "STYLENANDA", "CASS", "KAKAO", "HYBE", "SM ENTERTAINMENT", "YG PLUS", "OLIVE YOUNG", "LOTTE"]

const dropCalendar = [
  { date: "Day 1 · 14:00", brand: "BRAND TBA", category: "Fashion", type: "CAPSULE DROP" },
  { date: "Day 1 · 18:30", brand: "BRAND TBA", category: "K-Beauty", type: "EXCLUSIVE LAUNCH" },
  { date: "Day 2 · 12:00", brand: "BRAND TBA", category: "Collectibles", type: "LIMITED EDITION" },
  { date: "Day 2 · 16:00", brand: "BRAND TBA", category: "Design", type: "COLLABORATION DROP" },
]

export default function MarketplacePage() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  return (
    <div>
      <PageHero
        title="120+ BRANDS. ONE WEEKEND."
        eyebrow="Marketplace · 마켓플레이스"
        description="K-컬처를 이끄는 브랜드들이 한 공간에 모인다. 한정판, 첫 공개, 독점 협업."
        image="/images/zone_drop.jpg"
      />

      {/* 카테고리 그리드 */}
      <AnimatedSection className="section-pad">
        <div className="container-shell">
          <SectionHeading eyebrow="Categories" title="카테고리" description="패션부터 테크까지 — 6개 카테고리, 140개 이상의 브랜드." />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {categories.map((cat) => (
              <div
                key={cat.title}
                className="group relative h-[240px] overflow-hidden cursor-pointer"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.8) 100%), url('${cat.image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: cat.color + "33" }}
                />
                <div className="absolute inset-0 flex flex-col justify-end p-5">
                  <p className="font-outfit text-sm uppercase tracking-[0.3em]" style={{ color: cat.color }}>{cat.ko}</p>
                  <h3 className="font-display text-xl uppercase text-white leading-tight">{cat.title}</h3>
                  <p className="mt-1 font-display text-3xl" style={{ color: cat.color }}>{cat.count}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* 브랜드 마르키 */}
      <AnimatedSection className="overflow-hidden border-y border-white/10 py-6 bg-muk">
        <div className="flex">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...brandLogos, ...brandLogos].map((logo, i) => (
              <span key={i} className="mx-8 font-display text-sm uppercase tracking-[0.4em] text-white/50">
                {logo} <span className="text-[#D4AF37]">·</span>
              </span>
            ))}
          </div>
        </div>
        <style jsx>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 25s linear infinite;
          }
        `}</style>
      </AnimatedSection>

      {/* 드롭 캘린더 */}
      <AnimatedSection className="section-pad">
        <div className="container-shell">
          <SectionHeading eyebrow="Drop Calendar" title="드롭 캘린더" description="행사 기간 한정 독점 드롭. 사전 예고 없이 오픈됩니다." />
          <div className="divide-y divide-white/10">
            {dropCalendar.map((drop, i) => (
              <div key={i} className="flex flex-col gap-2 py-5 md:flex-row md:items-center md:gap-8">
                <div className="w-36 shrink-0">
                  <p className="font-outfit text-sm uppercase tracking-[0.2em] text-[#D4AF37]">{drop.date}</p>
                </div>
                <div className="flex-1">
                  <p className="font-outfit text-base font-semibold text-white/50 italic">{drop.brand}</p>
                  <p className="font-outfit text-base text-white/55">{drop.category}</p>
                </div>
                <div>
                  <span className="inline-block border border-[#D4AF37]/40 px-3 py-1 text-sm uppercase tracking-[0.25em] text-[#D4AF37]">
                    {drop.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 font-outfit text-base text-white/50">* 브랜드 및 드롭 정보는 추후 발표 예정. 사전 알림을 신청하세요.</p>
        </div>
      </AnimatedSection>

      {/* 브랜드 신청 CTA */}
      <AnimatedSection className="section-pad bg-muk">
        <div className="container-shell">
          <div className="flex flex-col items-center text-center">
            <p className="mb-3 text-sm uppercase tracking-[0.4em] text-[#D4AF37]">Brand Application</p>
            <h2 className="font-display text-4xl uppercase text-white md:text-5xl">브랜드로 참가하기</h2>
            <p className="mt-4 max-w-xl font-outfit text-base text-white/75">
              KATALYZE 마켓플레이스에 참가할 브랜드를 모집합니다. 이메일을 등록하고 신청서를 받아보세요.
            </p>
            {!submitted ? (
              <div className="mt-8 flex w-full max-w-md gap-0">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="brand@yourbrand.com"
                  className="flex-1 border border-white/20 bg-white/5 px-4 py-3 font-outfit text-base text-white placeholder-white/30 focus:border-[#D4AF37] focus:outline-none"
                />
                <button
                  onClick={() => setSubmitted(true)}
                  className="border border-[#D4AF37] bg-[#D4AF37] px-6 py-3 text-base font-bold uppercase tracking-[0.3em] text-black transition hover:bg-[#e8c84a]"
                >
                  신청
                </button>
              </div>
            ) : (
              <p className="mt-8 font-outfit text-base text-[#D4AF37]">✓ 신청이 접수되었습니다. 곧 연락드리겠습니다.</p>
            )}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
