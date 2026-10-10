"use client";

import { useState } from "react";
import batchReps from "@/data/batchReps.json";

type Batch = { year: number; representatives: { name: string; contact?: string }[] };

export function BatchList() {
  const [query, setQuery] = useState("");
  const batches: Batch[] = batchReps;
  const filtered = [...batches].sort((a, b) => b.year - a.year).filter((batch) =>
    `${batch.year} ${batch.representatives.map((rep) => rep.name).join(" ")}`.toLowerCase().includes(query.trim().toLowerCase()),
  );
  return <div>
    <div className="batch-search"><label htmlFor="batch-search">Find your batch or representative</label>
      <input id="batch-search" type="search" placeholder="Try 2026 or a name" value={query} onChange={(event) => setQuery(event.target.value)} />
    </div>
    <p className="small" role="status">{filtered.length} {filtered.length === 1 ? "batch" : "batches"} found</p>
    <div className="batch-grid">{filtered.map((batch) => <article className="batch-card" key={batch.year}>
      <h2>Batch of {batch.year}</h2><ul>{batch.representatives.map((rep, index) => <li key={`${rep.name}-${index}`}>
        <span>{rep.name}</span>{rep.contact && /^(https:\/\/|mailto:)/i.test(rep.contact) && <a className="text-link" href={rep.contact}>Contact <span className="sr-only">{rep.name}</span> →</a>}
      </li>)}</ul>
    </article>)}</div>
    {filtered.length === 0 && <p className="notice">No matching batch yet. Try another year or volunteer to represent yours.</p>}
  </div>;
}
