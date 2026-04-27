export default function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white shadow-[0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur transition duration-300 hover:scale-[1.03] hover:border-[var(--accent)] hover:bg-[rgba(139,255,176,0.08)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 active:scale-[0.98] ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
