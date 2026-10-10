import Link from "next/link";
import { Hero } from "@/components/Hero";
import { StatsBand } from "@/components/StatsBand";
import { SectionHeading } from "@/components/SectionHeading";
import { Card } from "@/components/Card";
import { NewsCard } from "@/components/NewsCard";
import { EventCard } from "@/components/EventCard";
import { CTABanner } from "@/components/CTABanner";
import { FundBreakdown } from "@/components/FundBreakdown";
import { latestNews, upcomingEvents } from "@/lib/content";
import homepage from "@/data/homepage.json";
import spotlights from "@/data/spotlights.json";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";

export default function Home() {
  return <>
    <Hero /><StatsBand />
    <section className="section section-cream"><div className="container mission">
      <div><p className="eyebrow">{homepage.welcome.eyebrow}</p><h2>{homepage.welcome.title}</h2>
        {homepage.welcome.isExample && <p className="sample-label">Sample welcome letter · Proposed committee</p>}
      </div>
      <div>{homepage.welcome.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        <p className="letter-signature">{homepage.welcome.signature}<br /><strong>{homepage.welcome.author}</strong></p>
        <Link className="text-link" href="/about">Get to know the initiative →</Link>
      </div>
    </div></section>
    <section className="section section-white"><div className="container">
      <SectionHeading eyebrow="Why join" title="More than a name on a list." description="A network is useful when we show up for one another." />
      <div className="benefit-grid">{homepage.benefits.map((benefit) => <Card className="benefit-card" key={benefit.number}>
        <span className="benefit-number" aria-hidden="true">{benefit.number}</span><h3>{benefit.title}</h3><p>{benefit.description}</p>
      </Card>)}</div>
    </div></section>
    <section className="section section-navy"><div className="container">
      <SectionHeading eyebrow="The people in our story" title="Alumni spotlight" description="Different paths, shared beginnings. Meet the kinds of stories we hope to celebrate." />
      <div className="card-grid">{spotlights.map((alum) => <Card className="spotlight-card" key={alum.id}>
        <PhotoPlaceholder image={alum.image} alt={alum.imageAlt} className="card-photo" />
        <div className="card-body">
          {alum.isExample && <p className="sample-label">Sample profile · Fictional alum & quote</p>}
          <p className="eyebrow">Batch of {alum.batchYear}</p><h3>{alum.name}</h3>
          <p>{alum.whereNow}</p><blockquote><p>“{alum.quote}”</p></blockquote>
        </div>
      </Card>)}</div>
    </div></section>
    <section className="section section-cream"><div className="container">
      <SectionHeading eyebrow="From the network" title="Stories & updates" href="/news" linkText="All news" />
      <div className="card-grid">{latestNews.slice(0, 3).map((item) => <NewsCard key={item.slug} item={item} />)}</div>
    </div></section>
    <section className="image-band" aria-label={homepage.imageBand.title}>
      <PhotoPlaceholder image={homepage.imageBand.image} alt={homepage.imageBand.imageAlt} />
      <div className="image-band-copy"><p className="eyebrow">{homepage.imageBand.eyebrow}</p><h2>{homepage.imageBand.title}</h2></div>
    </section>
    <section className="section section-gold"><div className="container testimonial">
      <p className="eyebrow">In their words</p>
      <span className="quote-mark" aria-hidden="true">“</span>
      <blockquote><p>{homepage.testimonial.quote}</p></blockquote>
      <p className="quote-author">{homepage.testimonial.author} · Batch of {homepage.testimonial.batchYear}</p>
      {homepage.testimonial.isExample && <p className="sample-label">Sample testimonial · Illustrative quote, not a real endorsement</p>}
    </div></section>
    <section className="section section-white"><div className="container">
      <SectionHeading eyebrow="Make time for connection" title="On the horizon" description={upcomingEvents.some((event) => event.isExample) ? "Labelled sample activities are ideas for a future alumni calendar — not confirmed events." : "Find your next opportunity to reconnect with the Blue Bird community."} href="/events" linkText="All events" />
      <div className="card-grid">{upcomingEvents.slice(0, 3).map((event) => <EventCard key={event.id} event={event} />)}</div>
    </div></section>
    <section className="section section-cream"><div className="container transparency-teaser">
      <div><p className="eyebrow">An open book</p><h2>Everyone should know where their money goes.</h2><p>A proposed ৳200 membership fee. A clear allocation. A published record of income, expenses, and the balance — with separate funds for larger events.</p><Link className="text-link" href="/transparency">Explore fund transparency →</Link></div>
      <FundBreakdown />
    </div></section>
    <CTABanner />
  </>;
}
