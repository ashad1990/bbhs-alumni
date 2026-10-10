export function PageIntro({ eyebrow, title, children }: { eyebrow: string; title: string; children: React.ReactNode }) {
  return <section className="page-intro"><div className="container">
    <p className="eyebrow">{eyebrow}</p><h1>{title}</h1><div className="intro-copy">{children}</div>
  </div></section>;
}
