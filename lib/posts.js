import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

function stripMarkdown(markdown = "") {
  return markdown
    .replace(/[#>*_`~\-\[\]\(\)]/g, "")
    .replace(/\n+/g, " ")
    .trim();
}

export function getSortedPostsData() {
  if (!fs.existsSync(postsDirectory)) return [];

  const fileNames = fs.readdirSync(postsDirectory).filter((file) => file.endsWith(".mdx"));
  const allPosts = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    const excerpt = data.excerpt || `${stripMarkdown(content).slice(0, 160)}...`;

    return {
      slug,
      title: data.title || slug,
      date: data.date || "2026-01-01",
      coverImage: data.coverImage || "/images/blog/default-cover.svg",
      keywords: data.keywords || "создание сайтов, AI-боты, автоматизация",
      description: data.description || excerpt,
      excerpt,
      content
    };
  });

  return allPosts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getLatestPosts(count = 3) {
  return getSortedPostsData().slice(0, count);
}

export function getAllPostSlugs() {
  return getSortedPostsData().map((post) => ({ params: { slug: post.slug } }));
}

export function getPostData(slug) {
  return getSortedPostsData().find((post) => post.slug === slug) || null;
}
