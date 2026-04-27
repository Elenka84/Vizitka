export default function ServiceCard({ icon, title, features }) {
  return (
    <article className="rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-6 transition duration-300 hover:scale-[1.02] hover:border-[var(--accent)]/70">
      <div className="mb-4 text-2xl text-[var(--accent)]">{icon}</div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-300">
        {features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
    </article>
  );
}
