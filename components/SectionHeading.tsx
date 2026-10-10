import Link from "next/link";

export function SectionHeading({ eyebrow, title, description, href, linkText }: {
  eyebrow?: string; title: string; description?: string; href?: string; linkText?: string;
}) {
  return (
    <div className="section-heading">
      <div>{eyebrow && <p className="eyebrow">{eyebrow}</p>}<h2>{title}</h2>{description && <p>{description}</p>}</div>
      {href && <Link className="text-link" href={href}>{linkText || "Explore more"} <span aria-hidden="true">→</span></Link>}
    </div>
  );
}
