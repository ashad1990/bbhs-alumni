import news from "@/data/news.json";
import events from "@/data/events.json";

export type NewsItem = (typeof news)[number];
export type EventItem = (typeof events)[number];

export const latestNews = [...news].sort((a, b) => b.date.localeCompare(a.date));
export const upcomingEvents = events
  .filter((event) => event.status === "upcoming")
  .sort((a, b) => a.date.localeCompare(b.date));
export const pastEvents = events
  .filter((event) => event.status === "past")
  .sort((a, b) => b.date.localeCompare(a.date));

export function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}

export function taka(amount: number) {
  return `৳${amount.toLocaleString("en-BD")}`;
}
