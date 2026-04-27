import Image from "next/image";
import SectionReveal from "@/components/ui/SectionReveal";

export default function AboutSection() {
  return (
    <SectionReveal className="container-default py-20">
      <section id="about" className="grid items-center gap-8 lg:grid-cols-2">
        <div className="relative mx-auto h-80 w-full max-w-md overflow-hidden rounded-2xl border border-slate-800">
          <Image src="/images/about-photo.svg" alt="Фото автора" fill className="object-cover" />
        </div>
        <div>
          <h2 className="text-3xl font-bold md:text-4xl">Обо мне</h2>
          <p className="mt-4 text-slate-300">
            Я веб-разработчик, который объединяет дизайн, маркетинг и AI, чтобы ваш продукт выглядел
            современно и приносил реальный результат.
          </p>
          <p className="mt-3 text-slate-300">
            Работаю быстро, прозрачно и с фокусом на бизнес-цели: заявки, продажи, узнаваемость.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm">
            <a className="transition hover:text-brand-500" href="https://t.me" target="_blank" rel="noreferrer">
              Telegram
            </a>
            <a className="transition hover:text-brand-500" href="https://github.com" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="transition hover:text-brand-500" href="https://linkedin.com" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </SectionReveal>
  );
}
