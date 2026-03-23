import { AnimatedSection } from "@/components/animated-section";
import { PageHero } from "@/components/page-hero";
import { PillButton } from "@/components/ui";

const aboutStats = [
  { value: "50,000", suffix: "+", label: "Attendees", ko: "참석자" },
  { value: "72", suffix: "hrs", label: "Culture Velocity", ko: "문화의 속도" },
  { value: "1st", suffix: "", label: "Culture-Commerce Festival in Korea", ko: "한국 최초 컬처-커머스 페스티벌" },
]

const whySeoulPoints = [
  {
    title: "The Global K-Culture Capital",
    ko: "글로벌 K-컬처의 수도",
    desc: "서울은 이미 세계가 주목하는 문화 수출 파워하우스. K-팝, K-뷰티, K-패션 — 서울에서 시작된 트렌드가 글로벌 소비를 주도한다.",
  },
  {
    title: "The DDP Advantage",
    ko: "DDP의 힘",
    desc: "자하 하디드가 설계한 86,574㎡의 건축적 아이콘. 메시지 자체가 서울의 창의적 야망을 말한다. 공간이 브랜드가 되는 곳.",
  },
  {
    title: "The September Confluence",
    ko: "9월의 수렴",
    desc: "프리즈 서울 + 서울패션위크 + KATALYZE — 전 세계 컬처 산업 리더들이 같은 주에 서울에 모인다. 네트워킹 효율의 극대화.",
  },
]

export default function AboutPage() {
  return (
    <div>
      <PageHero
        title="WHERE CULTURE BECOMES COMMERCE"
        eyebrow="About · 소개"
        description="서울이 세계에게 자신을 보여주는 방식."
        image="/images/seoul_night.jpg"
      />

      {/* 매니페스토 인용 */}
      <AnimatedSection className="section-pad bg-muk">
        <div className="container-shell">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-6 text-sm uppercase tracking-[0.5em] text-[#FABF13]">Manifesto</p>
            <p className="mb-8 font-rubik text-[clamp(2.5rem,6vw,5rem)] font-bold leading-none text-white/10 select-none">
              SEOUL IS THE CATALYST.
            </p>
            <blockquote className="font-rubik text-4xl uppercase leading-tight text-white md:text-6xl lg:text-7xl">
              문화가<br />
              <span className="text-[#FABF13]">비즈니스가</span><br />
              되는 곳.
            </blockquote>
            <p className="mt-8 font-outfit text-lg leading-8 text-white/75 max-w-2xl mx-auto">
              KATALYZE는 서울 DDP에서 열리는 대한민국 최초의 컬처-커머스 융합 페스티벌입니다.
              K-패션, K-뷰티, 스트릿컬처, 음악, 그리고 글로벌 비즈니스가 72시간 안에 충돌하고 융합하는 공간.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* 숫자로 보는 규모 */}
      <AnimatedSection className="section-pad">
        <div className="container-shell">
          <div className="grid gap-10 md:grid-cols-3">
            {aboutStats.map((stat) => (
              <div key={stat.value} className="border-l-2 border-[#FABF13] pl-6">
                <p className="font-rubik text-6xl text-white md:text-8xl">
                  {stat.value}<span className="text-4xl text-[#FABF13] md:text-5xl">{stat.suffix}</span>
                </p>
                <p className="mt-3 font-outfit text-sm uppercase tracking-[0.3em] text-white/75">{stat.label}</p>
                <p className="mt-1 font-outfit text-base text-[#5CBFB0]">{stat.ko}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* DDP 소개 */}
      <AnimatedSection className="section-pad bg-muk">
        <div className="container-shell grid gap-12 lg:grid-cols-2 lg:items-center">
          <div
            className="h-[400px] w-full"
            style={{
              backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.6) 100%), url('/images/seoul_night.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.4em] text-[#FABF13]">The Venue</p>
            <h2 className="font-rubik text-4xl uppercase text-white md:text-5xl leading-tight">
              DDP<br />동대문디자인플라자
            </h2>
            <p className="mt-6 font-outfit text-base leading-8 text-white/85">
              자하 하디드가 설계한 86,574㎡의 건축적 아이콘. 서울의 창의적 야망을 형상화한 공간.
              메시지 자체가 브랜드가 되는 곳 — KATALYZE의 무대.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div>
                <p className="font-rubik text-3xl text-[#FABF13]">86,574㎡</p>
                <p className="font-outfit text-sm uppercase tracking-widest text-white/65">Total Floor Area</p>
              </div>
              <div>
                <p className="font-rubik text-3xl text-[#FABF13]">5</p>
                <p className="font-outfit text-sm uppercase tracking-widest text-white/65">Connected Buildings</p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Why Seoul */}
      <AnimatedSection 
        className="section-pad"
        style={{
          backgroundImage: "linear-gradient(rgba(26,26,31,0.90), rgba(26,26,31,0.90)), url('/images/seoul_night.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="container-shell">
          <p className="mb-3 text-sm uppercase tracking-[0.4em] text-[#FABF13]">Why Seoul</p>
          <h2 className="mb-12 font-rubik text-4xl uppercase text-white md:text-5xl">서울이어야 하는 이유</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {whySeoulPoints.map((point, i) => (
              <div key={i} className="border border-white/10 bg-white/[0.02] p-8">
                <p className="font-outfit text-sm uppercase tracking-[0.3em] text-[#FABF13]">0{i + 1}</p>
                <h3 className="mt-3 font-rubik text-xl uppercase text-white leading-tight">{point.title}</h3>
                <p className="mt-1 font-outfit text-base text-white/55">{point.ko}</p>
                <p className="mt-4 font-outfit text-base leading-7 text-white/85">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* 비전 스테이트먼트 */}
      <AnimatedSection className="section-pad bg-muk">
        <div className="container-shell">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm uppercase tracking-[0.5em] text-[#FABF13]">Vision</p>
            <p className="font-outfit text-xl leading-10 text-white/80">
              ComplexCon이 미국 스트릿컬처를 세계에 알린 것처럼,<br />
              KATALYZE는 K-컬처의 상업적 파워를 세계에 증명합니다.<br />
              <span className="text-[#FABF13]">서울에서 시작되는 다음 10년의 문화 지형도.</span>
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* 이중 CTA */}
      <AnimatedSection className="section-pad">
        <div className="container-shell">
          <div className="flex flex-col items-center gap-6 text-center">
            <h2 className="font-rubik text-4xl uppercase text-white md:text-5xl">함께 만들어가요</h2>
            <p className="max-w-xl font-outfit text-base text-white/75">
              관람객으로, 브랜드로, 파트너로 — KATALYZE와 함께할 방법을 선택하세요.
            </p>
            <div className="mt-4 flex flex-col gap-4 sm:flex-row">
              <PillButton href="/tickets" variant="primary">티켓 구매하기</PillButton>
              <PillButton href="/partners" variant="secondary">파트너 문의하기</PillButton>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
