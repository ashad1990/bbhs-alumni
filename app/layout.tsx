import type { Metadata } from "next";
import localFont from "next/font/local";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { siteConfig } from "@/lib/config";
import "./globals.css";

const display = localFont({ src: "../public/fonts/source-serif.ttf", variable: "--font-display", display: "swap", weight: "200 900" });
const body = localFont({ src: "../public/fonts/inter.ttf", variable: "--font-body", display: "swap", weight: "100 900" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: "BBHSC Alumni | A lifelong connection", template: "%s | BBHSC Alumni" },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: siteConfig.name,
    title: "BBHSC Alumni | A lifelong connection",
    description: siteConfig.description,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "BBHSC Alumni — A shared beginning. A lifelong connection." }],
  },
  twitter: { card: "summary_large_image", images: ["/og-image.png"] },
  icons: { icon: "/icon.svg" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable}`}>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
