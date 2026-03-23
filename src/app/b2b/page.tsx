"use client";

import { useState } from "react";
import { AnimatedSection } from "@/components/animated-section";
import { PageHero } from "@/components/page-hero";
import { SectionHeading, AccordionFAQ, PillButton } from "@/components/ui";

const b2bServices = [
  {
    number: "01",
    title: "BUYER MATCHING",
    ko: "바이어 매칭",
    desc: "카테고리, 가격대, 지역을 기반으로 큐레이티드 한국 브랜드와 1:1 미팅 주선. AI 기반 매칭 시스템으로 ROI 극대화.",
    stats: "평균 매칭 브랜드 8개 / 참가 바이어당",
    color: "#D4AF37",
  },
  {
    number: "02",
    title: "PRIVATE LOUNGE",
    ko: "프라이빗 라운지",
    desc: "THE GALLERY 내 VIP 전용 비즈니스 라운지. 제품 프리뷰, 파운더 미팅, 계약 협상을 위한 프라이빗 공간.",
    stats: "VIP 라운지 정원 200명",
    color: "#8220DC",
  },
  {
    number: "03",
    title: "SHOWCASE ACCESS",
    ko: "쇼케이스 패스트트랙",
    desc: "론칭 이벤트, 파운더 토크, 미디어 브리핑 패스트트랙 접근. 글로벌 수요를 형성하는 문화 시그널을 가장 먼저.",
    stats: "패스트트랙 티켓 한정 100매",
    color: "#00C9A7",
  },
]

const faqs = [
  { q: "바이어 신청 자격은?", a: "연간 구매량 $500K 이상의 검증된 리테일러, 디스트리뷰터, 에이전트." },
  { q: "참가 비용은?", a: "BRAND PASS (₩389,000) 이상. VIP EXPERIENCE 보유 시 라운지 자동 포함." },
  { q: "매칭 미팅은 몇 개?", a: "신청서 기반 최소 5개, 최대 12개 큐레이티드 미팅 주선." },
  { q: "어떤 카테고리 브랜드가 참가?", a: "K-패션, K-뷰티, K-푸드, 디자인, 컬처 IP, 테크 스타트업." },
]

const categories = ["K-Fashion", "K-Beauty", "K-Food & Beverage", "Design & Art", "Culture IP", "Tech Startup", "Other"]

export default function B2BPage() {
  const [form, setForm] = useState({ name: "", company: "", email: "", category: "" })
  const [submitted, setSubmitted] = useState(false)

  return (
    <div>
      <PageHero
        title="KATALYZE CONNECT"
        eyebrow="B2B · 비즈니스"
        description="한국 최고의 브랜드와 글로벌 바이어를 연결하는 큐레이티드 B2B 플랫폼."
        image="/images/business_meet.jpg"
      />

      {/* CONNECT 소개 분할 화면 */}
      <AnimatedSection className="section-pad">
        <div className="container-shell grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.4em] text-[#D4AF37]">KATALYZE CONNECT</p>
            <h2 className="font-display text-4xl uppercase text-white md:text-5xl leading-tight">비즈니스가<br />일어나는 공간</h2>
            <p className="mt-6 font-outfit text-base leading-8 text-white/85">
              KATALYZE CONNECT는 K-컬처 브랜드와 글로벌 바이어를 연결하는 B2B 플랫폼입니다.
              페스티벌의 열기 속에서, 진짜 비즈니스가 만들어지는 곳.
            </p>
            <p className="mt-4 font-outfit text-base leading-8 text-white/85">
              AI 기반 매칭부터 프라이빗 라운지까지 — 한국 문화산업의 게이트웨이를 열어드립니다.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="border-l-2 border-[#D4AF37] pl-4">
                <p className="font-display text-3xl text-white">200+</p>
                <p className="font-outfit text-sm uppercase tracking-widest text-white/65">Participating Brands</p>
              </div>
              <div className="border-l-2 border-[#D4AF37] pl-4">
                <p className="font-display text-3xl text-white">50+</p>
                <p className="font-outfit text-sm uppercase tracking-widest text-white/65">Global Buyers</p>
              </div>
            </div>
          </div>
          <div className="border border-white/10 bg-white/[0.02] p-8">
            <p className="font-outfit text-sm uppercase tracking-[0.3em] text-[#D4AF37] mb-6">Why CONNECT?</p>
            <ul className="space-y-5">
              {["단 2일 안에 한국 최고 브랜드와 직접 미팅", "검증된 바이어만 참가 — 퀄리티 보장", "AI 큐레이션으로 적합한 브랜드만 매칭", "팔로우업 지원 및 계약 협상 공간 제공"].map((item, i) => (
                <li key={i} className="flex items-start gap-3 font-outfit text-base leading-6 text-white/85">
                  <span className="mt-0.5 text-[#D4AF37] text-base">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </AnimatedSection>

      {/* 서비스 카드 */}
      <AnimatedSection className="section-pad bg-muk">
        <div className="container-shell">
          <SectionHeading eyebrow="Services" title="3가지 서비스" />
          <div className="grid gap-6 md:grid-cols-3">
            {b2bServices.map((svc) => (
              <div key={svc.number} className="border border-white/10 bg-white/[0.02] p-8">
                <p className="font-display text-5xl" style={{ color: svc.color + "55" }}>{svc.number}</p>
                <p className="mt-4 font-outfit text-sm uppercase tracking-[0.3em]" style={{ color: svc.color }}>{svc.ko}</p>
                <h3 className="mt-1 font-display text-xl uppercase text-white">{svc.title}</h3>
                <p className="mt-4 font-outfit text-base leading-7 text-white/85">{svc.desc}</p>
                <div className="mt-6 border-t border-white/10 pt-4">
                  <p className="font-outfit text-base text-white/55">{svc.stats}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* 신청 폼 */}
      <AnimatedSection className="section-pad">
        <div className="container-shell">
          <div className="mx-auto max-w-2xl">
            <SectionHeading eyebrow="Apply" title="바이어 신청" description="아래 폼을 작성하면 검토 후 연락드립니다." />
            {!submitted ? (
              <div className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block font-outfit text-sm uppercase tracking-[0.25em] text-white/65">이름 *</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full border border-white/20 bg-white/5 px-4 py-3 font-outfit text-base text-white placeholder-white/30 focus:border-[#D4AF37] focus:outline-none"
                      placeholder="Name"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block font-outfit text-sm uppercase tracking-[0.25em] text-white/65">회사 *</label>
                    <input
                      type="text"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className="w-full border border-white/20 bg-white/5 px-4 py-3 font-outfit text-base text-white placeholder-white/30 focus:border-[#D4AF37] focus:outline-none"
                      placeholder="Company"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-2 block font-outfit text-sm uppercase tracking-[0.25em] text-white/65">이메일 *</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full border border-white/20 bg-white/5 px-4 py-3 font-outfit text-base text-white placeholder-white/30 focus:border-[#D4AF37] focus:outline-none"
                    placeholder="email@company.com"
                  />
                </div>
                <div>
                  <label className="mb-2 block font-outfit text-sm uppercase tracking-[0.25em] text-white/65">관심 카테고리</label>
                  <select
                    value={form.category}
                    onChange={(e) => setForm({ ...form, category: e.target.value })}
                    className="w-full border border-white/20 bg-[#1a1a1f] px-4 py-3 font-outfit text-base text-white focus:border-[#D4AF37] focus:outline-none"
                  >
                    <option value="">선택하세요</option>
                    {categories.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <button
                  onClick={() => setSubmitted(true)}
                  className="w-full bg-[#D4AF37] py-4 text-base font-bold uppercase tracking-[0.4em] text-black transition hover:bg-[#e8c84a]"
                >
                  신청하기
                </button>
              </div>
            ) : (
              <div className="border border-[#D4AF37]/30 bg-[#D4AF37]/5 p-8 text-center">
                <p className="font-display text-2xl text-white">신청이 접수되었습니다</p>
                <p className="mt-2 font-outfit text-base text-white/75">검토 후 3영업일 내 이메일로 연락드립니다.</p>
              </div>
            )}
          </div>
        </div>
      </AnimatedSection>

      {/* FAQ */}
      <AnimatedSection className="section-pad bg-muk">
        <div className="container-shell">
          <div className="mx-auto max-w-2xl">
            <SectionHeading eyebrow="FAQ" title="자주 묻는 질문" />
            <AccordionFAQ items={faqs} />
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
