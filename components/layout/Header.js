import Link from "next/link";

const navItems = [
  { label: "Услуги", href: "#services" },
  { label: "Кейсы", href: "#portfolio" },
  { label: "Блог", href: "#blog" },
  { label: "Обо мне", href: "#about" },
  { label: "Контакты", href: "#contact" }
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#07070b]/85 backdrop-blur-xl">
      <div className="container-default flex h-16 items-center justify-between">
        <Link href="/" className="font-bold tracking-wide text-[var(--accent)]">
          Vibe Coder Hub
        </Link>
        <nav className="hidden gap-5 text-sm text-slate-300 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-[var(--accent)]">
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
