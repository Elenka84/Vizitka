import Image from "next/image";
import Link from "next/link";

export default function BlogPostCard({ title, excerpt, coverImage, date, slug }) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="group block overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 transition hover:border-brand-500/50"
    >
      <div className="relative h-44 w-full">
        <Image src={coverImage} alt={title} fill className="object-cover transition duration-300 group-hover:scale-105" />
      </div>
      <div className="p-5">
        <p className="text-xs text-slate-400">{new Date(date).toLocaleDateString("ru-RU")}</p>
        <h3 className="mt-2 text-lg font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-slate-300">{excerpt}</p>
      </div>
    </Link>
  );
}
