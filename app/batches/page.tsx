import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { BatchList } from "@/components/BatchList";
import { CTABanner } from "@/components/CTABanner";
import batches from "@/data/batchReps.json";

export const metadata: Metadata = { title: "Batch directory", description: "Find your graduation batch and help classmates reconnect through batch representatives." };

export default function Batches() {
  return <>
    <PageIntro eyebrow="Find familiar faces" title="Every batch, one community."><p>One or two representatives from each batch can help old classmates find their way back to the network.</p></PageIntro>
    <section className="section container">{batches.some((batch) => batch.isExample) && <p className="notice">The directory includes labelled sample batches and placeholder representative positions. Publish real names and contact links only with the person&apos;s consent. Sample graduation years are illustrative.</p>}<BatchList /></section>
    <CTABanner title="Help your batch reconnect." description="Know how to reach your classmates? Volunteer to be one of your batch's representatives and help us build the network, one connection at a time." buttonText="Volunteer to be your batch rep" />
  </>;
}
