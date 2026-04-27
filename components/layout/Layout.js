import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({
  children,
  title = "Vibe Coder Hub — Сайты и AI-боты под ключ",
  description = "Создаю стильные сайты и AI-ботов для бизнеса. Лендинги, автоматизация, экспертный блог.",
  keywords = "создание сайтов, AI боты, лендинг, web разработка, автоматизация",
  ogImage = "/images/og-cover.svg"
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={ogImage} />
      </Head>
      <div className="min-h-screen bg-slate-950 text-slate-100">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
