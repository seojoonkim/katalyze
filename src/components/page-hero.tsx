import Image from "next/image";

export function PageHero({ title, eyebrow, description, image }: { title: string; eyebrow: string; description: string; image: string }) {
  return (
    <section className="relative overflow-hidden pt-28">
      <div className="absolute inset-0">
        <Image src={image} alt={title} fill className="object-cover opacity-35" />
        <div className="hero-overlay absolute inset-0" />
      </div>
      <div className="container-shell relative py-24">
        <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#d4af37]">{eyebrow}</p>
        <h1 className="max-w-4xl text-5xl font-black uppercase leading-none text-white md:text-8xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">{description}</p>
      </div>
    </section>
  );
}
