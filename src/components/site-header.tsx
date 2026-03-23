"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { IconMenu, IconTicket, IconChevronDown } from "@/components/icons";
import { navItems } from "@/lib/site-data";

const navItemsWithImages = [
  { label: "Program", href: "/program", image: "/images/zone_stage.jpg" },
  { label: "Marketplace", href: "/marketplace", image: "/images/zone_drop.jpg" },
  { label: "Partners", href: "/partners", image: "/images/b2b_lounge.jpg" },
  { label: "B2B", href: "/b2b", image: "/images/b2b_lounge.jpg" },
  { label: "About", href: "/about", image: "/images/about_hero.jpg" },
  { label: "Tickets", href: "/tickets", image: "/images/hero_main.jpg" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "border-b border-white/10 bg-[rgba(13,13,13,0.95)] backdrop-blur-xl" : "bg-transparent"}`} style={{ paddingTop: 'env(safe-area-inset-top)' }}>
      <div className="container-shell flex h-16 items-center justify-between gap-4 px-4 py-2 md:h-20 md:py-4">
        <Link href="/" className="font-display text-base tracking-[0.35em] text-[#D4AF37] font-normal md:text-2xl">
          KATALYZE
        </Link>

        <nav className="hidden items-center gap-1 text-sm uppercase tracking-[0.18em] text-white/80 md:flex relative">
          {navItemsWithImages.map((item) => (
            <div
              key={item.href}
              className="relative group"
              onMouseEnter={() => setHoveredItem(item.href)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <Link
                href={item.href}
                className="px-3 py-2 transition hover:text-[#D4AF37] flex items-center gap-1"
              >
                {item.label}
                {item.href !== "/tickets" && (
                  <span className="h-3 w-3 inline-flex transition-transform group-hover:rotate-180"><IconChevronDown /></span>
                )}
              </Link>

              {/* Dropdown Menu */}
              {item.href !== "/tickets" && (
                <div className="absolute left-0 top-full hidden group-hover:block pt-2 z-50">
                  <div className="bg-[rgba(13,13,13,0.98)] border border-white/10 backdrop-blur-xl rounded-none overflow-hidden shadow-2xl w-56">
                    {/* Preview Image */}
                    <div className="relative h-32 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.label}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Link */}
                    <div className="p-4">
                      <Link
                        href={item.href}
                        className="block text-center font-semibold text-[#D4AF37] hover:text-white transition text-sm uppercase tracking-wider"
                      >
                        Explore {item.label}
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/tickets"
            className="inline-flex items-center gap-2 rounded-none bg-[#D4AF37] px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-black transition hover:bg-[#E8C84A]"
          >
            <span className="h-4 w-4 inline-flex"><IconTicket /></span>
            GET TICKETS
          </Link>
        </div>

        <button className="text-white md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <IconMenu />
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[rgba(13,13,13,0.97)] px-4 py-4 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-4 text-sm uppercase tracking-[0.18em] text-white/80">
            {navItemsWithImages.map((item) => (
              <div key={item.href}>
                <Link 
                  href={item.href} 
                  onClick={() => setOpen(false)}
                  className="block pb-3"
                >
                  {item.label}
                </Link>
                {item.href !== "/tickets" && (
                  <div className="relative h-20 overflow-hidden rounded-none mb-3">
                    <img
                      src={item.image}
                      alt={item.label}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/tickets"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center rounded-none bg-[#D4AF37] px-5 py-3 text-sm font-semibold text-black"
            >
              GET TICKETS
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
