import Image from "next/image";

export default function PortfolioCard({ item, onClick }) {
  return (
    <button
      onClick={() => onClick(item)}
      className="group w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] text-left transition hover:-translate-y-1 hover:border-[var(--accent-2)]/70"
    >
      <div className="relative h-52 w-full">
        <Image src={item.image} alt={item.title} fill className="object-cover" />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold">{item.title}</h3>
        <p className="mt-2 text-sm text-slate-300">{item.solution}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-white/10 bg-black/20 px-2 py-1 text-xs text-slate-200">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </button>
  );
}
