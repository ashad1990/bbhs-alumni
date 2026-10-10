import fund from "@/data/fund.json";
import { taka } from "@/lib/content";

export function FundBreakdown() {
  const total = fund.allocations.reduce((sum, allocation) => sum + allocation.amount, 0);
  return <div className="fund-breakdown">
    <p className="small">Proposed allocation of each {taka(fund.membershipFee)} membership fee</p>
    <div className="fund-bar" aria-hidden="true">
      {fund.allocations.map((item) => <span key={item.label} style={{ width: `${(item.amount / total) * 100}%`, backgroundColor: item.color }} />)}
    </div>
    <ul className="fund-legend">{fund.allocations.map((item) => <li key={item.label}>
      <span className="legend-dot" style={{ backgroundColor: item.color }} aria-hidden="true" />
      <span>{item.label}</span><strong>{taka(item.amount)} <span className="small">({Math.round((item.amount / total) * 100)}%)</span></strong>
    </li>)}</ul>
    <p className="small">Total allocation: <strong>{taka(total)}</strong> · Proposal, subject to approval.</p>
  </div>;
}
