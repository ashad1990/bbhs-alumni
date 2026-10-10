import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { Card } from "@/components/Card";
import { CTABanner } from "@/components/CTABanner";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = { title: "Contact", description: "Connect with the proposed BBHSC Alumni network and find the school's Sylhet address." };

export default function Contact() {
  return <>
    <PageIntro eyebrow="Start a conversation" title="We would love to hear from you."><p>Have a question, a memory, or an idea? Help shape the network.</p></PageIntro>
    <section className="section container">
      <p className="notice">Contact details are placeholders until the association confirms its email and Facebook group. Please do not send personal information to these sample destinations.</p>
      <div className="card-grid">
        <Card className="card-body"><p className="eyebrow">Email · Placeholder</p><h2>Write to us</h2><p>Membership questions, suggestions, and volunteer enquiries.</p><a className="text-link" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></Card>
        <Card className="card-body"><p className="eyebrow">Facebook · Placeholder</p><h2>Join the conversation</h2><p>The real alumni group link will be shared here once confirmed.</p><a className="text-link" href={siteConfig.facebookUrl}>Facebook groups (placeholder) ↗</a></Card>
        <Card className="card-body"><p className="eyebrow">School address</p><h2>Our shared starting point</h2><address>Blue Bird High School and College<br />{siteConfig.address}</address><p><a className="text-link" href={siteConfig.schoolUrl}>Official school website ↗</a></p><p className="small">This is the school&apos;s location, not a confirmed alumni association office.</p></Card>
      </div>
    </section><CTABanner />
  </>;
}
