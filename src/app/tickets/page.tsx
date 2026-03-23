"use client";

import { AnimatedSection } from "@/components/animated-section";
import { PageHero } from "@/components/page-hero";
import { SectionHeading, AccordionFAQ, PillButton } from "@/components/ui";

const ticketTiers = [
  {
    name: "GENERAL ADMISSION",
    ko: "일반 입장",
    price: "₩89,000",
    priceEn: "$65",
    highlight: false,
    color: "#F0EBE3",
    includes: ["2일 입장권", "전 존 기본 접근", "공식 굿즈백", "디지털 프로그램 가이드"],
    cta: "구매하기",
  },
  {
    name: "CULTURE PASS",
    ko: "컬처 패스",
    price: "₩189,000",
    priceEn: "$138",
    highlight: false,
    color: "#2DD4BF",
    includes: ["2일 우선 입장", "THE LAB & GALLERY 프리미엄 접근", "파운더 토크 좌석 예약", "공식 굿즈백 + 한정판 아이템", "디지털 콘텐츠 패키지"],
    cta: "구매하기",
  },
  {
    name: "BRAND PASS",
    ko: "브랜드 패스",
    price: "₩389,000",
    priceEn: "$285",
    highlight: true,
    badge: "MOST POPULAR",
    color: "#F0B429",
    includes: ["2일 VIP 입장", "KATALYZE CONNECT 네트워킹 액세스", "브랜드 라운지 접근", "큐레이티드 바이어 미팅 (최대 3건)", "프라이빗 런치 초대", "전용 굿즈 패키지"],
    cta: "구매하기",
  },
  {
    name: "VIP EXPERIENCE",
    ko: "VIP 익스피리언스",
    price: "₩890,000",
    priceEn: "$650",
    highlight: false,
    color: "#FF4D2E",
    includes: ["전 존 VIP 무제한 입장", "아티스트 미트앤그리트", "THE GALLERY VIP 전용 라운지", "큐레이티드 바이어 미팅 (최대 8건)", "헤드라이너 사이드스테이지 접근", "전용 컨시어지 서비스", "프라이빗 디너 초대"],
    cta: "문의하기",
  },
]

const venueFacts = [
  { icon: "📍", label: "장소", value: "DDP — 동대문디자인플라자", en: "Dongdaemun Design Plaza, Seoul" },
  { icon: "📅", label: "날짜", value: "2027년 4월 (정확한 날짜 추후 공지)", en: "April 2027 — Exact dates TBA" },
  { icon: "🚇", label: "교통", value: "동대문역사문화공원역 1번 출구", en: "Line 2/4/5, Exit 1" },
  { icon: "🌏", label: "규모", value: "연면적 86,574㎡ · 5개 건물", en: "86,574㎡ · 5 Buildings" },
]

const ticketFAQs = [
  { q: "티켓 환불 정책은?", a: "행사 30일 전까지 100% 환불. 14일 전까지 50% 환불. 이후 불가." },
  { q: "현장 구매 가능한가요?", a: "현장 구매 가능하나 사전 온라인 구매 시 10% 할인 적용." },
  { q: "그룹 할인이 있나요?", a: "10인 이상 그룹 구매 시 15% 할인. b2b@katalyze.live로 문의." },
  { q: "티켓 양도 가능한가요?", a: "행사 7일 전까지 공식 플랫폼을 통한 양도 가능." },
]

export default function TicketsPage() {
  return (
    <div className="pb-24">
      <PageHero
        title="SECURE YOUR PLACE AT KATALYZE"
        eyebrow="Tickets · 티켓"
        description="April 2027, DDP Seoul. 당신의 KATALYZE 경험을 선택하세요."
        image="/images/festival_entry.jpg"
      />

      {/* 티켓 비교 카드 */}
      <AnimatedSection className="section-pad">
        <div className="container-shell">
          <SectionHeading eyebrow="Access Tiers" title="티켓 선택" description="4개 티어 중 당신의 KATALYZE를 선택하세요." />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {ticketTiers.map((ticket) => (
              <div
                key={ticket.name}
                className={`relative flex flex-col border ${ticket.highlight ? 'border-[#F0B429]' : 'border-white/10'} bg-white/[0.03]`}
              >
                {ticket.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#F0B429] px-4 py-1 text-base font-bold uppercase tracking-widest text-black">
                    {ticket.badge}
                  </div>
                )}
                <div className="border-b p-6" style={{ borderColor: ticket.color + '33' }}>
                  <p style={{ color: ticket.color }} className="text-sm uppercase tracking-[0.35em]">{ticket.name}</p>
                  <p className="mt-1 font-outfit text-base text-white/65">{ticket.ko}</p>
                  <p className="mt-4 font-display text-4xl text-white">{ticket.price}</p>
                  <p className="font-outfit text-base text-white/55">{ticket.priceEn}</p>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <ul className="flex-1 space-y-3">
                    {ticket.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2 font-outfit text-base text-white/85">
                        <span style={{ color: ticket.color }} className="mt-0.5 text-base shrink-0">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <PillButton href="#" variant={ticket.highlight ? "primary" : "secondary"}>
                      {ticket.cta}
                    </PillButton>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* 날짜·장소·오시는 길 */}
      <AnimatedSection 
        className="section-pad bg-muk"
        style={{
          backgroundImage: "linear-gradient(rgba(26,26,31,0.88), rgba(26,26,31,0.88)), url('/images/venue_ddp.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="container-shell">
          <SectionHeading eyebrow="Venue" title="장소 안내" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {venueFacts.map((fact) => (
              <div key={fact.label} className="border border-white/10 bg-white/[0.02] p-6">
                <p className="text-2xl">{fact.icon}</p>
                <p className="mt-3 font-outfit text-sm uppercase tracking-[0.25em] text-[#F0B429]">{fact.label}</p>
                <p className="mt-2 font-outfit text-base font-medium text-white">{fact.value}</p>
                <p className="mt-1 font-outfit text-base text-white/55">{fact.en}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* FAQ */}
      <AnimatedSection className="section-pad">
        <div className="container-shell">
          <div className="mx-auto max-w-2xl">
            <SectionHeading eyebrow="FAQ" title="자주 묻는 질문" />
            <AccordionFAQ items={ticketFAQs} />
          </div>
        </div>
      </AnimatedSection>

      {/* 스티키 하단 CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-[#0D0D10]/95 backdrop-blur-sm">
        <div className="container-shell flex items-center justify-between py-4">
          <div>
            <p className="font-outfit text-sm uppercase tracking-[0.25em] text-[#F0B429]">KATALYZE 2027</p>
            <p className="font-outfit text-base text-white/85">April 2027 · DDP Seoul</p>
          </div>
          <div className="flex gap-3">
            <PillButton href="#" variant="secondary">
              ₩89,000부터
            </PillButton>
            <PillButton href="#" variant="primary">
              지금 구매
            </PillButton>
          </div>
        </div>
      </div>
    </div>
  );
}
