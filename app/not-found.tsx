import Link from "next/link";

export default function NotFound() {
  return <section className="section container narrow"><p className="eyebrow">Page not found</p><h1>Let&apos;s find your way back.</h1><p>This page may have moved, or the link may be incorrect.</p><Link className="button" href="/">Back to home →</Link></section>;
}
