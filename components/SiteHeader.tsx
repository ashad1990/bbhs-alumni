"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { navigation, siteConfig } from "@/lib/config";
import { Logo } from "./Logo";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" aria-label="BBHSC Alumni home" onClick={() => setOpen(false)}><Logo /></Link>
        <button ref={menuButton} className="menu-toggle" aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen(!open)}>
          <span aria-hidden="true">{open ? "✕" : "☰"}</span> {open ? "Close" : "Menu"}
        </button>
        <nav id="primary-navigation" aria-label="Main navigation" className={open ? "navigation is-open" : "navigation"} onKeyDown={(event) => { if (event.key === "Escape" && open) { setOpen(false); menuButton.current?.focus(); } }}>
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} aria-current={pathname.startsWith(item.href) ? "page" : undefined} onClick={() => setOpen(false)}>{item.label}</Link>
          ))}
          <a className="button button-small" href={siteConfig.registrationUrl}>Join</a>
        </nav>
      </div>
    </header>
  );
}
