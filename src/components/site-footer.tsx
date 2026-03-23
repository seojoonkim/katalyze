import Link from "next/link";
import { navItems } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black/75 py-12">
      <div className="container-shell grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="text-2xl tracking-[0.04em] text-[#FABF13]" style={{fontFamily:"var(--font-rubik),sans-serif", fontWeight:700}}>KATALYZE</p>
          <p className="mt-4 max-w-md text-base leading-7 text-white/92">
            Where culture drops, deals close, and the world shows up. A Seoul-born festival platform for fans, brands, buyers, and builders.
          </p>
        </div>
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.24em] text-[#FABF13]">Navigate</p>
          <div className="grid gap-3 text-base text-white/92">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.24em] text-[#FABF13]">Newsletter</p>
          <div className="k-card rounded-none p-4">
            <input className="mb-3 w-full rounded-none border border-white/10 bg-white/5 px-4 py-3 text-base outline-none" placeholder="Email address" />
            <button className="w-full rounded-none bg-[#FABF13] px-4 py-3 text-base font-semibold text-black">Get festival updates</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
