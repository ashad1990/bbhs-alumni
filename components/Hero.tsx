import { siteConfig } from "@/lib/config";
import homepage from "@/data/homepage.json";
import { PhotoPlaceholder } from "./PhotoPlaceholder";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <PhotoPlaceholder image={homepage.hero.image} alt={homepage.hero.imageAlt} className="hero-photo" priority />
      <div className="container hero-inner">
        <p className="eyebrow">{homepage.hero.eyebrow}</p>
        <h1 id="hero-title">{homepage.hero.title}<br /><em>{homepage.hero.accent}</em></h1>
        <p>{homepage.hero.description}</p>
        <a className="button button-gold" href={siteConfig.registrationUrl}>Join the Alumni Network <span aria-hidden="true">→</span></a>
        <p className="hero-note">Registration form coming soon</p>
      </div>
    </section>
  );
}
