export default function Footer() {
  return (
    <footer className="border-t border-slate-800 py-10">
      <div className="container-default grid gap-8 md:grid-cols-2">
        <div>
          <h3 className="text-lg font-semibold">Vibe Coder Hub</h3>
          <p className="mt-2 text-sm text-slate-400">
            Создаю сайты и AI-ботов, которые приносят заявки и укрепляют бренд.
          </p>
          <p className="mt-4 text-sm text-slate-400">Telegram: @vibecoderhub | Email: hello@vibecoderhub.dev</p>
        </div>

        <div>
          <h4 className="font-semibold">Подписка на полезные материалы</h4>
          <form
            action="https://formspree.io/f/xqkrnqrv"
            method="POST"
            className="mt-4 flex flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              name="email"
              required
              placeholder="Ваш Email"
              className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-sm outline-none transition focus:border-brand-500"
            />
            <button className="rounded-lg bg-brand-500 px-4 py-2 text-sm font-semibold transition hover:bg-brand-600">
              Подписаться
            </button>
          </form>
        </div>
      </div>
      <div className="container-default mt-8 text-xs text-slate-500">
        © {new Date().getFullYear()} Vibe Coder Hub. Все права защищены.
      </div>
    </footer>
  );
}
