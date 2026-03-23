import { AnimatedSection } from "@/components/animated-section";
import { PageHero } from "@/components/page-hero";
import { SectionHeading, PillButton } from "@/components/ui";

const ticketTypes = [
  {
    name: "GENERAL ADMISSION",
    price: "₩89,000",
    desc: "2일 입장, 모든 존 기본 접근",
    color: "#F0EDE5",
  },
  {
    name: "CULTURE PASS",
    price: "₩189,000",
    desc: "우선 입장 + THE LAB & GALLERY 프리미엄 접근",
    color: "#4A7A6B",
  },
  {
    name: "BRAND PASS",
    price: "₩389,000",
    desc: "브랜드 라운지 접근 + KATALYZE CONNECT 네트워킹",
    color: "#D4AF37",
  },
  {
    name: "VIP EXPERIENCE",
    price: "₩890,000",
    desc: "전 존 VIP, 아티스트 미트앤그리트, 전용 라운지, 하이라이트 큐레이션",
    color: "#C73B3B",
  },
];

export default function TicketsPage() {
  return (
    <div>
      <PageHero
        title="SECURE YOUR PLACE AT KATALYZE"
        eyebrow="Tickets · 티켓"
        description="April 2027, DDP Seoul. 당신의 KATALYZE 경험을 선택하세요."
        image="/images/hero_main.jpg"
      />
      <AnimatedSection className="section-pad">
        <div className="container-shell">
          <SectionHeading eyebrow="Access tiers" title="Choose your KATALYZE experience" />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {ticketTypes.map((ticket) => (
              <div key={ticket.name} className="border-l-2 pl-8" style={{ borderColor: ticket.color }}>
                <p className="text-xs uppercase tracking-[0.3em]" style={{ color: ticket.color }}>{ticket.name}</p>
                <h2 className="mt-4 text-4xl font-black text-white md:text-5xl">{ticket.price}</h2>
                <p className="mt-6 text-sm font-outfit font-light leading-7 text-white/65">{ticket.desc}</p>
                <div className="mt-8"><PillButton href="#">Join waitlist</PillButton></div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
