"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, Ticket } from "lucide-react";
import { navItems } from "@/lib/site-data";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "border-b border-white/10 bg-[rgba(13,13,13,0.95)] backdrop-blur-xl" : "bg-transparent"}`}>
      <div className="container-shell flex h-20 items-center justify-between gap-4">
        <Link href="/" className="font-display text-3xl tracking-[0.18em] text-[#D4AF37] md:text-4xl">
          KATALYZE
        </Link>

        <nav className="hidden items-center gap-6 text-sm uppercase tracking-[0.18em] text-white/82 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-[#D4AF37]">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/tickets"
            className="inline-flex items-center gap-2 rounded-full bg-[#D4AF37] px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-black transition hover:bg-[#E8C84A]"
          >
            <Ticket className="h-4 w-4" />
            GET TICKETS
          </Link>
        </div>

        <button className="text-white md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <Menu size={22} />
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[rgba(13,13,13,0.97)] px-4 py-4 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-4 text-sm uppercase tracking-[0.18em] text-white/80">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
            <Link
              href="/tickets"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center rounded-full bg-[#D4AF37] px-5 py-3 text-sm font-semibold text-black"
            >
              GET TICKETS
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
