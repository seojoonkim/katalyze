import { AnimatedSection } from "@/components/animated-section";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/ui";

export default function AboutPage() {
  return (
    <div>
      <PageHero
        title="WHERE CULTURE BECOMES COMMERCE"
        eyebrow="ABOUT · 소개"
        description="서울이 세계에게 자신을 보여주는 방식."
        image="/images/hero_main.jpg"
      />
      <AnimatedSection className="section-pad">
        <div className="container-shell grid gap-16 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeading eyebrow="Manifesto" title="문화가 비즈니스가 되는 곳." />
            <p className="text-lg font-outfit font-light leading-8 text-white/70">
              KATALYZE는 서울 DDP에서 열리는 대한민국 최초의 컬처-커머스 융합 페스티벌입니다.
              K-패션, K-뷰티, 스트릿컬처, 음악, 그리고 글로벌 비즈니스가 72시간 안에 충돌하고 융합하는 공간.
            </p>
            <p className="mt-4 text-lg font-outfit font-light leading-8 text-white/70">
              단순한 행사가 아닙니다. 서울의 창의적 에너지가 실제 비즈니스로 전환되는 플랫폼입니다.
              ComplexCon, Art Basel, Seoul Fashion Week의 교차점 — 여기서만 가능한 경험.
            </p>
          </div>
          <div className="border-l border-white/10 pl-8 lg:pl-12">
            <p className="text-xs uppercase tracking-[0.25em] text-[#d4af37] mb-4">DDP — The Icon</p>
            <p className="text-sm font-outfit font-light leading-7 text-white/70 mb-6">
              DDP — 자하 하디드가 &lsquo;서울의 끊임없는 창의성&rsquo;을 형상화하기 위해 설계한 건축적 아이콘 —
              은 그 자체로 KATALYZE의 선언입니다: 전통과 혁신이 충돌하는 곳.
            </p>
            <p className="text-xs uppercase tracking-[0.25em] text-[#d4af37] mb-4">Why it matters</p>
            <ul className="space-y-6 text-sm leading-7 text-white/70">
              <li>• 서울을 문화, 디자인, 커머스의 라이브 인터페이스로</li>
              <li>• 소비자 열광과 B2B 효율을 동시에 충족하는 프리미엄 포맷</li>
              <li>• 아시아 전역으로 확장 가능한 데스티네이션 브랜드</li>
            </ul>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
