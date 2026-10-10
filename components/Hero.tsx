import { siteConfig } from "@/lib/config";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero-inner">
        <p className="eyebrow">Blue Bird High School and College · Sylhet</p>
        <h1 id="hero-title">A shared beginning.<br /><em>A lifelong connection.</em></h1>
        <p>From Mirar Maidan to wherever life takes us. Reconnect with classmates, share opportunities, and help the next generation soar.</p>
        <a className="button button-gold" href={siteConfig.registrationUrl}>Join the Alumni Network <span aria-hidden="true">→</span></a>
        <p className="hero-note">Registration form coming soon · Illustrated campus placeholder, not a photograph of the school.</p>
      </div>
    </section>
  );
}
