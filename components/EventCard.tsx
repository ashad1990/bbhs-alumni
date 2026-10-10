import Image from "next/image";
import { siteConfig } from "@/lib/config";
import { formatDate, type EventItem } from "@/lib/content";
import { Card } from "./Card";

export function EventCard({ event }: { event: EventItem }) {
  return <Card>
    <Image className="card-image" src={event.image} alt="" width={640} height={360} unoptimized />
    <div className="card-body">
      <p className="eyebrow">{event.isExample ? "Sample event · Unconfirmed" : event.status === "past" ? "Past event" : "Save the date"}</p>
      <h3>{event.title}</h3>
      <p className="event-date"><time dateTime={event.date}>{formatDate(event.date)}</time></p>
      <p className="small">{event.location}</p><p>{event.description}</p>
      {event.status === "upcoming" && <a className="text-link" href={siteConfig.registrationUrl}>Register via form <span className="sr-only">for {event.title}</span><span aria-hidden="true"> →</span></a>}
    </div>
  </Card>;
}
