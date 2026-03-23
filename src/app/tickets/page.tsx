import { AnimatedSection } from "@/components/animated-section";
import { PageHero } from "@/components/page-hero";
import { PillButton } from "@/components/ui";

const ticketTypes = [
  ["General", "$39", "Festival grounds, marketplace, and public programming"],
  ["Plus", "$89", "Priority entry, premium viewing areas, and curated welcome kit"],
  ["Trade", "$249", "Buyer lounge access, private meetings, and hospitality programming"],
];

export default function TicketsPage() {
  return (
    <div>
      <PageHero title="Reserve your place at Seoul’s next culture platform" eyebrow="Tickets" description="Secure public, premium, or trade access for September 2026 at DDP Seoul." image="/images/hero_bg_main.webp" />
      <AnimatedSection className="section-pad">
        <div className="container-shell grid gap-6 md:grid-cols-3">
          {ticketTypes.map(([name, price, desc]) => (
            <div key={name} className="k-card rounded-[30px] p-8">
              <p className="text-xs uppercase tracking-[0.3em] text-[#d4af37]">{name}</p>
              <h2 className="mt-4 text-5xl font-black uppercase text-white">{price}</h2>
              <p className="mt-4 text-sm leading-7 text-white/65">{desc}</p>
              <div className="mt-6"><PillButton href="#">Join waitlist</PillButton></div>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}
