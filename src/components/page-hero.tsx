export function PageHero({ title, eyebrow, description, image }: { title: string; eyebrow: string; description: string; image: string }) {
  return (
    <section
      className="relative overflow-hidden min-h-[60vh] flex items-end pt-28"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(26,26,31,0.25) 0%, rgba(26,26,31,0.55) 50%, rgba(26,26,31,0.92) 100%), url('${image}')`,
        backgroundSize: "100% 100%, cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container-shell relative pb-16 pt-8">
        <p className="mb-4 text-xs uppercase tracking-[0.5em] text-[#d4af37]">{eyebrow}</p>
        <h1 className="max-w-4xl font-display text-6xl uppercase leading-[0.88] text-white md:text-9xl">{title}</h1>
        <p className="mt-6 max-w-2xl font-outfit text-lg font-light leading-8 text-white/80">{description}</p>
      </div>
    </section>
  );
}
