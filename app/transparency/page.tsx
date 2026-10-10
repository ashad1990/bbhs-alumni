import type { Metadata } from "next";
import fund from "@/data/fund.json";
import { PageIntro } from "@/components/PageIntro";
import { SectionHeading } from "@/components/SectionHeading";
import { FundBreakdown } from "@/components/FundBreakdown";
import { LedgerTable } from "@/components/LedgerTable";
import { taka } from "@/lib/content";

export const metadata: Metadata = { title: "Fund transparency", description: "Everyone should know where their money goes. View the proposed fee allocation and example ledger." };

export default function Transparency() {
  return <>
    <PageIntro eyebrow="Fund transparency" title="Everyone should know where their money goes."><p>A simple fund. Clear records. Shared trust.</p></PageIntro>
    <section className="section container two-column">
      <div className="prose"><h2>A small fee with a clear purpose.</h2><p>Regular membership fees would cover the basic running costs of the alumni network. Here is our proposed allocation of each <strong>{taka(fund.membershipFee)}</strong> fee.</p><p>For example, 300 members × {taka(fund.membershipFee)} = <strong>{taka(300 * fund.membershipFee)}</strong>.</p><p className="notice">This allocation is a proposal, not an approved budget.{fund.isExample && " All ledger and sponsorship figures on this page are examples, not real financial activity."}</p></div>
      <FundBreakdown />
    </section>
    <section className="section section-white"><div className="container">
      <SectionHeading eyebrow="The membership fund" title="Income, expenses & balance" description={`Each entry contributes to the running balance, starting from an opening balance of ${taka(fund.openingBalance)}.`} />
      <LedgerTable />
    </div></section>
    <section className="section container">
      <SectionHeading eyebrow="Separate plans, separate records" title="Larger events & special programmes" description="Bigger events use separate fundraising or sponsorship based on actual costs. Their money is kept separate from the regular membership fund." />
      <div className="card-grid">{fund.separateFunds.map((item) => <article className="card card-body" key={item.name}><p className="eyebrow">Separate fund{fund.isExample && " · Example only"}</p><h3>{item.name}</h3><p>{item.description}</p><dl className="fund-totals"><div><dt>Income</dt><dd>{taka(item.income)}</dd></div><div><dt>Expense</dt><dd>{taka(item.expense)}</dd></div><div><dt>Balance</dt><dd>{taka(item.income - item.expense)}</dd></div></dl></article>)}</div>
      <div className="prose record-policy"><h2>Our commitment to publishing the record</h2><p>Membership fees, fundraising, sponsorships, and expenses should all be recorded and published here. Updates are made by volunteers through version-controlled local files — not a live banking feed.</p><p>When real financial activity begins, replace the sample rows, publish a dated update, and keep membership money and event money in separate records. No payment details or private member information belong on this public page.</p></div>
    </section>
  </>;
}
