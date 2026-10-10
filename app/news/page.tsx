import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { NewsCard } from "@/components/NewsCard";
import { latestNews } from "@/lib/content";

export const metadata: Metadata = { title: "News & updates", description: "Stories, opportunities, and updates from the Blue Bird alumni initiative." };

export default function News() {
  return <>
    <PageIntro eyebrow="From the network" title="Stories that keep us connected."><p>Community updates, opportunities, and ideas for our next chapter.</p></PageIntro>
    <section className="section container"><p className="notice">Sample editorial content for the proposed alumni initiative. Replace these stories with confirmed updates before launch.</p><div className="card-grid">{latestNews.map((item) => <NewsCard key={item.slug} item={item} />)}</div>{latestNews.length === 0 && <p>Our first updates will appear here.</p>}</section>
  </>;
}
