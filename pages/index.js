import dynamic from "next/dynamic";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import { getLatestPosts } from "@/lib/posts";

const ServicesSection = dynamic(() => import("@/components/sections/ServicesSection"));
const PortfolioSection = dynamic(() => import("@/components/sections/PortfolioSection"));
const BlogSection = dynamic(() => import("@/components/sections/BlogSection"));
const AboutSection = dynamic(() => import("@/components/sections/AboutSection"));
const ContactSection = dynamic(() => import("@/components/sections/ContactSection"));

export default function Home({ latestPosts }) {
  return (
    <Layout>
      <HeroSection
        title="Сайты и AI-боты, которые выделяют ваш бренд"
        subtitle="Vibe Coder Hub — разработка под ключ: современный дизайн, продуманная структура и рост конверсии."
      />
      <ServicesSection />
      <PortfolioSection />
      <BlogSection posts={latestPosts} />
      <AboutSection />
      <ContactSection />
    </Layout>
  );
}

export async function getStaticProps() {
  const latestPosts = getLatestPosts(3);
  return {
    props: {
      latestPosts
    }
  };
}
