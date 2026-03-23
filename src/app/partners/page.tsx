import { AnimatedSection } from "@/components/animated-section";
import { PageHero } from "@/components/page-hero";
import { SectionHeading, TierCard, PillButton } from "@/components/ui";

const impactStats = [
  { value: "50,000+", label: "Expected Attendees", ko: "예상 참석자" },
  { value: "200+", label: "Brands & Creators", ko: "브랜드·크리에이터" },
  { value: "₩70B+", label: "Projected Revenue", ko: "예상 매출" },
  { value: "50%", label: "International Visitors", ko: "해외 방문객" },
]

const partnerTiers = [
  {
    tier: "FOUNDING PARTNER",
    ko: "파운딩 파트너",
    price: "₩1B+",
    color: "#FABF13",
    highlight: false,
    cta: "미팅 신청",
    benefits: [
      "전용 존 소유권 (최대 500㎡)",
      "메인 스테이지 브랜딩",
      "파운딩 파트너 전용 VIP 라운지",
      "출연진 미트앤그리트 우선 접근",
      "공식 미디어 전면 노출",
      "KATALYZE CONNECT 프리미엄 액세스",
      "독점 런치 이벤트 호스팅권",
    ],
  },
  {
    tier: "CULTURAL PARTNER",
    ko: "컬처럴 파트너",
    price: "₩300M–1B",
    color: "#C0C0C0",
    highlight: false,
    cta: "미팅 신청",
    benefits: [
      "브랜드 액티베이션 부스 (최대 200㎡)",
      "에디토리얼 콘텐츠 통합",
      "소셜 미디어 공동 캠페인",
      "VIP 라운지 접근권 (30석)",
      "공식 파트너 로고 노출",
      "KATALYZE CONNECT 액세스",
    ],
  },
  {
    tier: "SUPPORTING PARTNER",
    ko: "서포팅 파트너",
    price: "₩50M–300M",
    color: "#2DD4BF",
    highlight: false,
    cta: "문의하기",
    benefits: [
      "브랜드 노출 (현장 + 디지털)",
      "티켓 패키지 (50매)",
      "공식 파트너 리스팅",
      "소셜 미디어 멘션",
    ],
  },
]

const currentPartners = [
  "AMORE PACIFIC", "MUSINSA", "GENTLE MONSTER", "ADER ERROR",
  "STYLENANDA", "CASS", "KAKAO", "HYBE",
  "SM ENT", "YG PLUS", "OLIVE YOUNG", "LOTTE",
]

export default function PartnersPage() {
  return (
    <div>
      <PageHero
        title="PARTNER WITH CULTURE"
        eyebrow="Partners · 파트너"
        description="KATALYZE와 함께하면 브랜드가 문화가 됩니다. 50,000명의 관객, 글로벌 미디어, 한국 최초의 플랫폼."
        image="/images/festival_entry.jpg"
      />

      {/* 임팩트 수치 */}
      <AnimatedSection className="section-pad bg-muk">
        <div className="container-shell">
          <SectionHeading eyebrow="Impact" title="숫자로 보는 KATALYZE" />
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {impactStats.map((stat) => (
              <div key={stat.value} className="border-l-2 border-[#FABF13] pl-6">
                <p className="font-display text-4xl text-white md:text-5xl">{stat.value}</p>
                <p className="mt-2 font-outfit text-sm uppercase tracking-[0.25em] text-white/75">{stat.label}</p>
                <p className="mt-1 font-outfit text-base text-[#2DD4BF]">{stat.ko}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* 파트너십 티어 */}
      <AnimatedSection className="section-pad">
        <div className="container-shell">
          <SectionHeading eyebrow="Partnership Tiers" title="파트너십 옵션" description="3개 티어로 설계된 파트너십. 브랜드 목표에 맞게 선택하세요." />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {partnerTiers.map((t) => (
              <TierCard key={t.tier} {...t} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* 현재 파트너 로고 그리드 */}
      <AnimatedSection 
        className="section-pad bg-muk"
        style={{
          backgroundImage: "linear-gradient(rgba(26,26,31,0.92), rgba(26,26,31,0.92)), url('/images/business_brands.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="container-shell">
          <SectionHeading eyebrow="Current Partners" title="파트너사" description="KATALYZE와 함께하는 브랜드들." />
          <div className="grid grid-cols-3 gap-4 md:grid-cols-4 lg:grid-cols-6">
            {currentPartners.map((name) => (
              <div key={name} className="flex items-center justify-center border border-white/10 bg-white/[0.02] px-4 py-6">
                <p className="text-center font-display text-sm uppercase tracking-[0.2em] text-white/55">{name}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 font-outfit text-base text-white/70">* 파트너사 로고는 추후 업데이트 예정.</p>
        </div>
      </AnimatedSection>

      {/* 문의 CTA */}
      <AnimatedSection className="section-pad">
        <div className="container-shell">
          <div className="flex flex-col items-center text-center">
            <p className="mb-3 text-sm uppercase tracking-[0.4em] text-[#FABF13]">Get in Touch</p>
            <h2 className="font-display text-4xl uppercase text-white md:text-5xl">함께 만들어가요</h2>
            <p className="mt-4 max-w-xl font-outfit text-base text-white/75">
              파트너십 덱을 다운로드하거나 미팅을 신청하세요. 브랜드에 맞는 최적의 파트너십을 함께 설계합니다.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <PillButton href="/katalyze-partnership-deck.pdf" variant="secondary">
                Deck 다운로드
              </PillButton>
              <PillButton href="mailto:partners@katalyze.live" variant="primary">
                미팅 신청
              </PillButton>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
