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

const benefits = [
  { number: "01", title: "Find your people", description: "Reconnect with classmates and meet alumni across generations." },
  { number: "02", title: "Share a career connection", description: "Exchange experience, mentoring, and opportunities with fellow alumni." },
  { number: "03", title: "Build something together", description: "Discover business connections and support each other's ideas." },
  { number: "04", title: "Come back together", description: "Make room for reunions, familiar faces, and new memories." },
  { number: "05", title: "Stay part of the community", description: "Enjoy sports and social events that keep our connection alive." },
];

export default function Home() {
  return <>
    <Hero /><StatsBand />
    <section className="section container mission">
      <p className="eyebrow">Welcome home, Blue Bird</p><h2>Different journeys.<br />One shared community.</h2>
      <div><p>School is where many of our first friendships began. This alumni initiative aims to keep those connections growing — in Sylhet, across Bangladesh, and wherever life takes us.</p>
      <p>Our mission is simple: connect alumni, share opportunities, and give back with care and transparency.</p><Link className="text-link" href="/about">Get to know the initiative →</Link></div>
    </section>
    <section className="section section-white"><div className="container">
      <SectionHeading eyebrow="Why join" title="More than a name on a list." description="A network is useful when we show up for one another." />
      <div className="benefit-grid">{benefits.map((benefit) => <Card className="benefit-card" key={benefit.number}>
        <span className="benefit-number" aria-hidden="true">{benefit.number}</span><h3>{benefit.title}</h3><p>{benefit.description}</p>
      </Card>)}</div>
    </div></section>
    <section className="section container">
      <SectionHeading eyebrow="From the network" title="Stories & updates" href="/news" linkText="All news" />
      <div className="card-grid">{latestNews.slice(0, 3).map((item) => <NewsCard key={item.slug} item={item} />)}</div>
    </section>
    <section className="section section-white"><div className="container">
      <SectionHeading eyebrow="Make time for connection" title="On the horizon" description={upcomingEvents.some((event) => event.isExample) ? "Labelled sample activities are ideas for a future alumni calendar — not confirmed events." : "Find your next opportunity to reconnect with the Blue Bird community."} href="/events" linkText="All events" />
      <div className="card-grid">{upcomingEvents.slice(0, 3).map((event) => <EventCard key={event.id} event={event} />)}</div>
    </div></section>
    <section className="section container transparency-teaser">
      <div><p className="eyebrow">An open book</p><h2>Everyone should know where their money goes.</h2><p>A proposed ৳200 membership fee. A clear allocation. A published record of income, expenses, and the balance — with separate funds for larger events.</p><Link className="text-link" href="/transparency">Explore fund transparency →</Link></div>
      <FundBreakdown />
    </section>
    <CTABanner />
  </>;
}
