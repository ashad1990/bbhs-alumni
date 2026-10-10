import Link from "next/link";
import { navigation, siteConfig } from "@/lib/config";
import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link href="/" aria-label="BBHSC Alumni home"><Logo /></Link>
          <p>A shared beginning.<br />A lifelong connection.</p>
          <p className="small">An alumni community initiative, not the school&apos;s official website or mark.</p>
        </div>
        <div><h2>Explore</h2><ul>{navigation.map((item) => <li key={item.href}><Link href={item.href}>{item.label}</Link></li>)}</ul></div>
        <div><h2>Stay connected</h2><ul>
          <li><a href={siteConfig.registrationUrl}>Join the Alumni Network</a></li>
          <li><a href={`mailto:${siteConfig.email}`}>Email us (placeholder)</a></li>
          <li><a href={siteConfig.facebookUrl}>Facebook group (placeholder)</a></li>
          <li><a href={siteConfig.schoolUrl}>Official school website ↗</a></li>
        </ul></div>
        <div><h2>Our shared roots</h2><p>Blue Bird High School and College</p><p>{siteConfig.address}</p><p className="small">Founded 6 January 1961<br />EIIN: 130401</p></div>
      </div>
      <div className="container footer-bottom">BBHSC Alumni · Built for connection, with transparency at heart. <span>Preview site: sample content and registration/contact placeholders.</span></div>
    </footer>
  );
}
