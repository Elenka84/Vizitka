import ServiceCard from "@/components/cards/ServiceCard";
import SectionReveal from "@/components/ui/SectionReveal";

const services = [
  {
    title: "Сайты под ключ",
    icon: "🚀",
    features: ["Лендинги и многостраничники", "Адаптивная верстка", "SEO-база и аналитика"]
  },
  {
    title: "AI-боты и автоматизация",
    icon: "🤖",
    features: ["Telegram и web-боты", "Интеграции с CRM", "Сценарии продаж и поддержки"]
  }
];

export default function ServicesSection() {
  return (
    <SectionReveal className="container-default py-20" id="services">
      <section id="services">
        <h2 className="text-3xl font-bold md:text-4xl">Услуги</h2>
        <p className="mt-3 max-w-2xl text-slate-300">
          Закрываю полный цикл: от идеи и прототипа до запуска и первых заявок.
        </p>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>
    </SectionReveal>
  );
}
