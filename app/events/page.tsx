import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { SectionHeading } from "@/components/SectionHeading";
import { EventCard } from "@/components/EventCard";
import { upcomingEvents, pastEvents } from "@/lib/content";
import { CTABanner } from "@/components/CTABanner";

export const metadata: Metadata = { title: "Events", description: "Explore alumni reunions, career conversations, sports, and social activities." };

export default function Events() {
  return <>
    <PageIntro eyebrow="Together again" title="Make time for your community."><p>Reunions, conversations, a day on the field — there are many ways to reconnect.</p></PageIntro>
    <section className="section container"><p className="notice">All events currently listed are examples. Dates and venues are illustrative; no activities have been confirmed.</p>
      <SectionHeading eyebrow="Looking ahead" title="Upcoming events" />
      <div className="card-grid">{upcomingEvents.map((event) => <EventCard key={event.id} event={event} />)}</div>{upcomingEvents.length === 0 && <p>No upcoming events yet. Check back for updates.</p>}
    </section>
    <section className="section section-white"><div className="container"><SectionHeading eyebrow="Looking back" title="Past events" /><div className="card-grid">{pastEvents.map((event) => <EventCard key={event.id} event={event} />)}</div>{pastEvents.length === 0 && <p>Our event archive will grow here.</p>}</div></section>
    <CTABanner />
  </>;
}
