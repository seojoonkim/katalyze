"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
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
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "bg-[#0d0d0d]/90 backdrop-blur-xl border-b border-white/10" : "bg-transparent"}`}>
      <div className="container-shell flex h-20 items-center justify-between">
        <Link href="/" className="text-2xl font-black tracking-[0.35em] text-white">KATALYZE</Link>
        <nav className="hidden items-center gap-6 text-sm uppercase tracking-[0.18em] text-white/80 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-[#d4af37]">{item.label}</Link>
          ))}
        </nav>
        <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu"><Menu size={22} /></button>
      </div>
      {open && (
        <div className="border-t border-white/10 bg-[#0d0d0d]/95 px-4 py-4 md:hidden">
          <div className="flex flex-col gap-4 text-sm uppercase tracking-[0.18em] text-white/80">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
