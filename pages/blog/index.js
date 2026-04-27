import Link from "next/link";
import Layout from "@/components/layout/Layout";
import { getSortedPostsData } from "@/lib/posts";

export default function BlogPage({ posts }) {
  return (
    <Layout
      title="Блог | Vibe Coder Hub"
      description="Статьи о разработке сайтов, AI-автоматизации и росте digital-проектов."
      keywords="блог, web разработка, ai боты, автоматизация"
    >
      <section className="container-default py-16">
        <h1 className="text-4xl font-bold">Все статьи</h1>
        <div className="mt-8 space-y-4">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block rounded-xl border border-slate-800 bg-slate-900/50 p-5 transition hover:border-brand-500/50"
            >
              <p className="text-xs text-slate-400">{new Date(post.date).toLocaleDateString("ru-RU")}</p>
              <h2 className="mt-1 text-xl font-semibold">{post.title}</h2>
              <p className="mt-2 text-sm text-slate-300">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  return { props: { posts: getSortedPostsData() } };
}
