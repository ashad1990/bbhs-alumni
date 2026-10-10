import { PhotoPlaceholder } from "./PhotoPlaceholder";
import Link from "next/link";
import { formatDate, type NewsItem } from "@/lib/content";
import { Card } from "./Card";

export function NewsCard({ item }: { item: NewsItem }) {
  return <Card>
    <PhotoPlaceholder className="card-photo" image={item.image} alt={item.imageAlt} />
    <div className="card-body">
      <p className="eyebrow">{item.category}</p>
      <h3><Link href={`/news/${item.slug}`}>{item.title}</Link></h3>
      <p>{item.excerpt}</p>
      <p className="small"><time dateTime={item.date}>{formatDate(item.date)}</time>{item.isExample && " · Sample update"}</p>
      <Link className="text-link" href={`/news/${item.slug}`}>Read the story <span className="sr-only">: {item.title}</span><span aria-hidden="true"> →</span></Link>
    </div>
  </Card>;
}
