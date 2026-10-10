import type { Metadata } from "next";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { latestNews, formatDate } from "@/lib/content";
import { siteConfig } from "@/lib/config";

export const dynamicParams = false;

export function generateStaticParams() {
  return latestNews.map((item) => ({ slug: item.slug }));
}

function findArticle(slug: string) {
  return latestNews.find((item) => item.slug === slug && /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = findArticle(slug);
  if (!item) notFound();
  return { title: item.title, description: item.excerpt, openGraph: {
    title: item.title, description: item.excerpt, type: "article", publishedTime: item.date,
    url: `${siteConfig.url}/news/${item.slug}/`,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "BBHSC Alumni" }],
  } };
}

export default async function Article({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = findArticle(slug);
  if (!item) notFound();
  const markdown = await readFile(path.join(process.cwd(), "content", "news", `${item.slug}.md`), "utf8");
  return <article className="section container narrow article">
    <Link className="text-link" href="/news">← All news & updates</Link>
    <p className="eyebrow">{item.category}</p><h1>{item.title}</h1>
    <p className="small"><time dateTime={item.date}>{formatDate(item.date)}</time>{item.isExample && " · Sample update"}</p>
    <PhotoPlaceholder className="article-image" image={item.image} alt={item.imageAlt} />
    <div className="prose"><ReactMarkdown skipHtml>{markdown}</ReactMarkdown></div>
  </article>;
}
