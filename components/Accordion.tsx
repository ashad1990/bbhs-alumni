import faq from "@/data/faq.json";

export function Accordion() {
  return <div className="accordion">{faq.map((item) => <details key={item.question}>
    <summary>{item.question}</summary><p>{item.answer}</p>
  </details>)}</div>;
}
