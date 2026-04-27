import ContactForm from "@/components/forms/ContactForm";
import SectionReveal from "@/components/ui/SectionReveal";

export default function ContactSection() {
  return (
    <SectionReveal className="container-default py-20">
      <section id="contact" className="grid gap-8 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold md:text-4xl">Обратная связь</h2>
          <p className="mt-4 text-slate-300">
            Напишите задачу в свободной форме. Я отвечу с вариантами решения и сроками.
          </p>
        </div>
        <ContactForm />
      </section>
    </SectionReveal>
  );
}
