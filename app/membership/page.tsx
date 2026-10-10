import type { Metadata } from "next";
import Link from "next/link";
import fund from "@/data/fund.json";
import { PageIntro } from "@/components/PageIntro";
import { Card } from "@/components/Card";
import { Accordion } from "@/components/Accordion";
import { CTABanner } from "@/components/CTABanner";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/lib/config";
import { taka } from "@/lib/content";

export const metadata: Metadata = { title: "Membership", description: "Explore the proposed membership fee, recent-graduate free membership, benefits, and registration." };

export default function Membership() {
  return <>
    <PageIntro eyebrow="Belong to the network" title="There is a place for every batch."><p>A simple way to reconnect, share opportunities, and keep our community active.</p></PageIntro>
    <section className="section container">
      <p className="notice"><strong>Membership proposal:</strong> fees, eligibility, and the free-membership policy are subject to approval. Fee period and payment arrangements are not yet set. No payment is being collected here.</p>
      <div className="two-column membership-tiers">
        <Card className="card-body"><p className="eyebrow">General membership · Proposal</p><h2>{taka(fund.membershipFee)}</h2><p>For former students who want to be part of the network. Regular fees would support basic running costs.</p><ul className="check-list"><li>Connect across batches</li><li>Share career and business opportunities</li><li>Hear about reunions, sports, and social activities</li><li>Follow transparent fund records</li></ul><Link className="text-link" href="/transparency">See the proposed allocation →</Link></Card>
        <Card className="card-body free-tier"><p className="eyebrow">Recent graduates · Proposal, not adopted</p><h2>Free to get started</h2><p>We propose free membership for graduates of the <strong>last three batches</strong> so cost is not a barrier to joining.</p><p>The final number of batches — or an alternative age threshold — must be approved by the committee. This is an idea for discussion, not a confirmed policy.</p><p>Recent graduates would be part of the same welcoming community.</p></Card>
      </div>
      <div className="registration-panel"><h2>One simple registration form.</h2><p>We will use a free Google Form, not a custom registration system. Please share only necessary details; individual responses will not be published on this website.</p><a className="button" href={siteConfig.registrationUrl}>Register via form →</a><p className="small">The current Google Forms link is a placeholder. Live registration is not open yet.</p></div>
    </section>
    <section className="section section-white"><div className="container narrow"><SectionHeading eyebrow="A few helpful answers" title="Membership questions" /><Accordion /></div></section>
    <CTABanner />
  </>;
}
