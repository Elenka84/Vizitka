import { useState } from "react";
import PortfolioCard from "@/components/cards/PortfolioCard";
import SectionReveal from "@/components/ui/SectionReveal";
import { portfolioItems } from "@/data/portfolio";

export default function PortfolioSection() {
  const [activeCase, setActiveCase] = useState(null);

  return (
    <SectionReveal className="container-default py-20">
      <section id="portfolio">
        <h2 className="text-3xl font-bold md:text-4xl">Кейсы</h2>
        <p className="mt-3 max-w-2xl text-slate-300">Проекты, где дизайн и логика работают на конверсию.</p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {portfolioItems.map((item) => (
            <PortfolioCard key={item.id} item={item} onClick={setActiveCase} />
          ))}
        </div>

        {activeCase && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
            onClick={() => setActiveCase(null)}
          >
            <div
              className="w-full max-w-2xl rounded-2xl border border-slate-700 bg-slate-900 p-6"
              onClick={(event) => event.stopPropagation()}
            >
              <h3 className="text-2xl font-bold">{activeCase.title}</h3>
              <p className="mt-4 text-sm text-slate-300">
                <span className="font-semibold text-white">Задача:</span> {activeCase.task}
              </p>
              <p className="mt-3 text-sm text-slate-300">
                <span className="font-semibold text-white">Решение:</span> {activeCase.solution}
              </p>
              <button
                className="mt-6 rounded-lg bg-brand-500 px-4 py-2 text-sm font-semibold transition hover:bg-brand-600"
                onClick={() => setActiveCase(null)}
              >
                Закрыть
              </button>
            </div>
          </div>
        )}
      </section>
    </SectionReveal>
  );
}
