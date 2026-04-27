import { useState } from "react";
import Button from "@/components/ui/Button";

const initialState = { name: "", contact: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    if (!form.name.trim() || !form.contact.trim() || !form.message.trim()) {
      setError("Пожалуйста, заполните все поля.");
      return;
    }

    try {
      setStatus("loading");
      const response = await fetch("https://formspree.io/f/xqkrnqrv", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      if (!response.ok) throw new Error("Ошибка отправки");

      setStatus("success");
      setForm(initialState);
    } catch (submitError) {
      setStatus("error");
      setError("Не удалось отправить форму. Попробуйте еще раз.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
      <input
        name="name"
        required
        value={form.name}
        onChange={handleChange}
        placeholder="Имя"
        className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 outline-none transition focus:border-brand-500"
      />
      <input
        name="contact"
        required
        value={form.contact}
        onChange={handleChange}
        placeholder="Email или Telegram"
        className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 outline-none transition focus:border-brand-500"
      />
      <textarea
        name="message"
        required
        value={form.message}
        onChange={handleChange}
        placeholder="Коротко опишите задачу"
        rows={5}
        className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 outline-none transition focus:border-brand-500"
      />

      <Button type="submit" disabled={status === "loading"} className="w-full disabled:opacity-70">
        {status === "loading" ? "Отправка..." : "Отправить"}
      </Button>

      {status === "success" && (
        <p className="text-sm text-emerald-400">Спасибо, я скоро свяжусь с вами!</p>
      )}
      {error && <p className="text-sm text-red-400">{error}</p>}
    </form>
  );
}
