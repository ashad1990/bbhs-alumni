import type { Metadata } from "next";
import Image from "next/image";
import committee from "@/data/committee.json";
import { PageIntro } from "@/components/PageIntro";
import { SectionHeading } from "@/components/SectionHeading";
import { Card } from "@/components/Card";
import { CTABanner } from "@/components/CTABanner";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = { title: "About", description: "Our school heritage and the proposed Blue Bird alumni community." };

export default function About() {
  return <>
    <PageIntro eyebrow="Our shared roots" title="Blue Bird, then and always."><p>Honouring a school that brought us together — and building a community that keeps us connected.</p></PageIntro>
    <section className="section container two-column">
      <div className="prose"><h2>A beginning in Sylhet</h2><p><strong>Blue Bird High School and College</strong> was founded on <strong>6 January 1961</strong>, beginning as a primary school. The college section was added in <strong>2006</strong>.</p><p>Located in <strong>Mirar Maidan, Sylhet, Bangladesh</strong>, it is a non-government, co-educational institution with Bangla as its medium of instruction. Its EIIN is <strong>130401</strong>.</p><p><a href={siteConfig.schoolUrl}>Visit the official school website ↗</a></p><h2>Our mission as alumni</h2><p>This proposed alumni association is about connection: welcoming former students, supporting career and business connections, bringing batches together, and contributing to the school and wider community.</p><p>We want a simple, welcoming network with clear records and a place for recent graduates. This site is an independent alumni initiative, not an official school website.</p></div>
      <figure><Image src="/images/campus.svg" alt="Original illustration of a campus courtyard with trees, used as a placeholder" width={1000} height={700} unoptimized /><figcaption>Illustrated placeholder — not a depiction of the actual campus.</figcaption><div className="heritage-note"><p className="eyebrow">A shared timeline</p><p><strong>1961</strong> · Founded as a primary school</p><p><strong>2006</strong> · College section added</p><p><strong>Today</strong> · An alumni network in the making</p></div></figure>
    </section>
    <section className="section section-white"><div className="container">
      <SectionHeading eyebrow="People behind the idea" title="The committee" description={committee.some((member) => member.isExample) ? "Some roles below are proposed placeholders, not appointed members. Names are published only after confirmation and consent." : "Meet the volunteers helping our alumni community stay connected."} />
      <div className="committee-grid">{committee.map((member) => <Card className="card-body" key={member.role}><p className="eyebrow">{member.role}{member.isExample && " · Proposed role"}</p><h3>{member.name}</h3><p>{member.description}</p></Card>)}</div>
    </div></section><CTABanner />
  </>;
}
