import Link from "next/link";
import BlogPostCard from "@/components/cards/BlogPostCard";
import SectionReveal from "@/components/ui/SectionReveal";

export default function BlogSection({ posts }) {
  return (
    <SectionReveal className="container-default py-20">
      <section id="blog">
        <h2 className="text-3xl font-bold md:text-4xl">Блог</h2>
        <p className="mt-3 max-w-2xl text-slate-300">
          Делюсь практикой по сайтам, AI-инструментам и росту digital-проектов.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post) => (
            <BlogPostCard key={post.slug} {...post} />
          ))}
        </div>

        <Link
          href="/blog"
          className="mt-8 inline-flex rounded-lg border border-slate-700 px-5 py-3 font-semibold transition hover:border-brand-500 hover:text-brand-500"
        >
          Читать все статьи
        </Link>
      </section>
    </SectionReveal>
  );
}
