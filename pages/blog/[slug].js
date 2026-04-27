import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import remarkGfm from "remark-gfm";
import Layout from "@/components/layout/Layout";
import { getAllPostSlugs, getPostData } from "@/lib/posts";

export default function PostPage({ post, mdxSource }) {
  if (!post) return null;

  return (
    <Layout title={`${post.title} | Vibe Coder Hub`} description={post.description} keywords={post.keywords}>
      <article className="container-default py-16">
        <p className="text-sm text-slate-400">{new Date(post.date).toLocaleDateString("ru-RU")}</p>
        <h1 className="mt-2 text-4xl font-bold">{post.title}</h1>
        <div className="mt-6 space-y-4 text-slate-200">
          <MDXRemote {...mdxSource} />
        </div>
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  return {
    paths: getAllPostSlugs(),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const post = getPostData(params.slug);
  const mdxSource = await serialize(post.content, { mdxOptions: { remarkPlugins: [remarkGfm] } });
  const { content, ...safePost } = post;

  return {
    props: {
      post: safePost,
      mdxSource
    }
  };
}
