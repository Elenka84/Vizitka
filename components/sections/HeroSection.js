import Button from "@/components/ui/Button";

export default function HeroSection({ title, subtitle }) {
  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-20"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/hero-poster.svg"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/70 to-[#07070b]" />
      <div className="pointer-events-none absolute -left-16 top-20 h-40 w-40 rounded-full bg-[var(--accent)]/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-16 h-40 w-40 rounded-full bg-[var(--accent-2)]/20 blur-3xl" />
      <div className="container-default relative z-10 py-20">
        <span className="inline-block rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
          crafting web identity
        </span>
        <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-tight md:text-6xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-200 md:text-xl">{subtitle}</p>
        <a href="#contact" className="mt-8 inline-block">
          <Button>Обсудить проект</Button>
        </a>
      </div>
    </section>
  );
}
