import fund from "@/data/fund.json";
import { formatDate, taka } from "@/lib/content";

export function LedgerTable() {
  const entries = fund.ledger.map((entry, index) => ({
    ...entry,
    balance: fund.openingBalance + fund.ledger.slice(0, index + 1).reduce((sum, row) => sum + row.income - row.expense, 0),
  }));
  const income = fund.ledger.reduce((sum, row) => sum + row.income, 0);
  const expense = fund.ledger.reduce((sum, row) => sum + row.expense, 0);
  return <div>
    <div className="ledger-summary">
      <div><span>Total income</span><strong>{taka(income)}</strong></div>
      <div><span>Total expenses</span><strong>{taka(expense)}</strong></div>
      <div><span>Current balance</span><strong>{taka(fund.openingBalance + income - expense)}</strong></div>
    </div>
    <div className="table-scroll" tabIndex={0} role="region" aria-label="Membership fund ledger, scroll horizontally on small screens">
      <table><caption>{fund.isExample ? "Illustrative ledger only — not real receipts or spending." : "Membership fund ledger"} Opening balance: {taka(fund.openingBalance)}.</caption>
        <thead><tr><th scope="col">Date</th><th scope="col">Description</th><th scope="col">Income</th><th scope="col">Expense</th><th scope="col">Balance</th></tr></thead>
        <tbody>{entries.map((entry, index) => <tr key={`${entry.date}-${index}`}>
          <td><time dateTime={entry.date}>{formatDate(entry.date)}</time></td><th scope="row">{entry.description}</th><td>{taka(entry.income)}</td><td>{taka(entry.expense)}</td><td>{taka(entry.balance)}</td>
        </tr>)}</tbody>
      </table>
    </div>
  </div>;
}
