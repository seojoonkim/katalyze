export function PageHero({ title, eyebrow, description, image }: { title: string; eyebrow: string; description: string; image: string }) {
  return (
    <section
      className="relative overflow-hidden min-h-[65vh] md:min-h-[70vh] flex items-end pt-28"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.78) 50%, rgba(0,0,0,0.96) 100%), url('${image}')`,
        backgroundSize: "100% 100%, cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container-shell relative pb-20 md:pb-24 pt-8">
        <p className="mb-4 text-sm uppercase tracking-[0.5em] text-[#FABF13]" style={{textShadow:"0 2px 8px rgba(0,0,0,0.8)"}}>{eyebrow}</p>
        <h1 className="max-w-5xl font-rubik text-5xl uppercase leading-[0.9] text-white md:text-7xl lg:text-8xl" style={{textShadow:"0 4px 24px rgba(0,0,0,0.7)"}}>{title}</h1>
        <p className="mt-6 max-w-2xl font-outfit text-lg font-light leading-8 text-white" style={{textShadow:"0 2px 12px rgba(0,0,0,0.8)"}}>{description}</p>
      </div>
    </section>
  );
}
