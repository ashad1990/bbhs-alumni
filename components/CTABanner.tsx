import { siteConfig } from "@/lib/config";

export function CTABanner({ title = "Your next chapter starts with connection.", description = "Reconnect with your batch. Meet the wider Blue Bird family. Help build a network that belongs to all of us.", buttonText = "Join the Alumni Network" }: { title?: string; description?: string; buttonText?: string }) {
  return <section className="cta-banner"><div className="container cta-inner">
    <div><p className="eyebrow">There is a place for you here</p><h2>{title}</h2><p>{description}</p><p className="small">Preview: replace the placeholder Google Form link before collecting registrations.</p></div>
    <a className="button button-gold" href={siteConfig.registrationUrl}>{buttonText} <span aria-hidden="true">→</span></a>
  </div></section>;
}
