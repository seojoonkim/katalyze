import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import clsx from "clsx";

export function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="mb-3 text-xs uppercase tracking-[0.35em] text-[#d4af37]">{eyebrow}</p>
      <h2 className="text-4xl font-black uppercase leading-none text-white md:text-6xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-white/65 md:text-lg">{description}</p> : null}
    </div>
  );
}

export function PillButton({ href, children, variant = "primary" }: { href: string; children: ReactNode; variant?: "primary" | "secondary" | "ghost" }) {
  return (
    <Link
      href={href}
      className={clsx(
        "inline-flex items-center justify-center rounded-none px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] transition",
        variant === "primary" && "bg-[#d4af37] text-black hover:bg-[#e8c84a]",
        variant === "secondary" && "border border-white/15 bg-white/5 text-white hover:border-[#d4af37] hover:text-[#d4af37]",
        variant === "ghost" && "text-white/70 hover:text-white",
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
        {subtitle ? <p className="text-xs uppercase tracking-[0.24em] text-[#d4af37]">{subtitle}</p> : null}
        <h3 className="mt-2 text-2xl font-bold uppercase text-white">{title}</h3>
        {description ? <p className="mt-3 text-sm leading-7 text-white/65">{description}</p> : null}
      </div>
    </div>
  );
}
