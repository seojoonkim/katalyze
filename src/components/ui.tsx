import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import React from "react";
import clsx from "clsx";

export function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#C4913E]">{eyebrow}</p>
      <h2 className="text-4xl font-display uppercase leading-none text-white md:text-6xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-white/85 md:text-lg">{description}</p> : null}
    </div>
  );
}

export function PillButton({ href, children, variant = "primary" }: { href: string; children: ReactNode; variant?: "primary" | "secondary" | "ghost" }) {
  return (
    <Link
      href={href}
      className={clsx(
        "inline-flex items-center justify-center rounded-none px-5 py-3 text-base font-semibold uppercase tracking-[0.16em] transition",
        variant === "primary" && "bg-[#C4913E] text-black hover:bg-[#D4A84A]",
        variant === "secondary" && "border border-white/15 bg-white/5 text-white hover:border-[#C4913E] hover:text-[#C4913E]",
        variant === "ghost" && "text-white/85 hover:text-white",
      )}
    >
      {children}
    </Link>
  );
}

export function ImageCard({ image, title, subtitle, description, className = "" }: { image: string; title: string; subtitle?: string; description?: string; className?: string }) {
  return (
    <div className={clsx("k-card overflow-hidden rounded-none", className)}>
      <div className="relative h-64 bg-white/5">
        <Image src={image} alt={title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
      </div>
      <div className="p-6">
        {subtitle ? <p className="text-sm uppercase tracking-[0.24em] text-[#C4913E]">{subtitle}</p> : null}
        <h3 className="mt-2 text-2xl font-bold uppercase text-white">{title}</h3>
        {description ? <p className="mt-3 text-base leading-7 text-white/85">{description}</p> : null}
      </div>
    </div>
  );
}

// FAQ 아코디언
export function AccordionFAQ({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = React.useState<number | null>(null)
  return (
    <div className="divide-y divide-white/10">
      {items.map((item, i) => (
        <div key={i} className="py-5">
          <button
            className="flex w-full items-center justify-between text-left"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span className="font-outfit text-base font-medium text-white">{item.q}</span>
            <span className="ml-4 text-[#C4913E] text-xl">{open === i ? "−" : "+"}</span>
          </button>
          {open === i && (
            <p className="mt-3 font-outfit text-base leading-7 text-white/85">{item.a}</p>
          )}
        </div>
      ))}
    </div>
  )
}

// 수치 카드
export function StatCard({ value, suffix, label, ko }: { value: string; suffix?: string; label: string; ko?: string }) {
  return (
    <div className="border-l-2 border-[#C4913E] pl-6">
      <p className="font-display text-5xl text-white md:text-7xl">
        {value}<span className="text-3xl text-[#C4913E] md:text-5xl">{suffix}</span>
      </p>
      <p className="mt-2 font-outfit text-sm uppercase tracking-[0.3em] text-white/75">{label}</p>
      {ko && <p className="mt-1 font-outfit text-base text-[#2D6B7A]">{ko}</p>}
    </div>
  )
}

// 티어 카드
export function TierCard({ tier, ko, price, benefits, highlight, badge, color, cta }: {
  tier: string; ko: string; price: string; benefits: string[];
  highlight?: boolean; badge?: string; color: string; cta: string;
}) {
  return (
    <div className={`relative flex flex-col border ${highlight ? 'border-[#C4913E]' : 'border-white/10'} bg-white/[0.03]`}>
      {badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C4913E] px-4 py-1 text-base font-bold uppercase tracking-widest text-black">
          {badge}
        </div>
      )}
      <div className="border-b p-6" style={{ borderColor: color + '33' }}>
        <p style={{ color }} className="text-sm uppercase tracking-[0.4em]">{tier}</p>
        <p className="mt-1 font-outfit text-base text-white/65">{ko}</p>
        <p className="mt-4 font-display text-4xl text-white">{price}</p>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <ul className="flex-1 space-y-3">
          {benefits.map((b: string) => (
            <li key={b} className="flex items-start gap-2 font-outfit text-base text-white/85">
              <span style={{ color }} className="mt-0.5 text-base">✓</span>
              {b}
            </li>
          ))}
        </ul>
        <a href="/tickets" className="mt-6 block border py-3 text-center text-base font-semibold uppercase tracking-[0.3em] transition hover:bg-white hover:text-black"
          style={{ borderColor: color, color }}>
          {cta}
        </a>
      </div>
    </div>
  )
}
