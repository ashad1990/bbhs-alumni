# BBHSC Alumni

A welcoming, editorial alumni website for **Blue Bird High School and College, Sylhet, Bangladesh**. Built with Next.js App Router, TypeScript, and Tailwind CSS.

**No database, API handlers, payment processing, or paid integrations.** All pages are generated at build time from local JSON and Markdown. The only interactive features are the mobile menu, batch search, and native FAQ accordions. Registration links to a free Google Form; responses stay outside this public repository.

This is an independent alumni initiative, not the school's official website. Committee positions, directory entries, news, events, and financial records are clearly labelled samples. Membership policies and the ৳200 fee remain proposals.

## Run locally

Use **Node.js 22 LTS** and npm.

```bash
npm install
npm run dev
```

Open http://localhost:3000. To validate and generate the production site:

```bash
npm run lint
npm run build
```

The complete static site is written to `out/`. There is no production Node server, so `next start` is not used. To preview the actual export locally, use an existing static file server, for example:

```bash
python3 -m http.server 3000 --directory out
```

`npm ci` uses the committed lockfile for reproducible installs. There is no existing test framework; use lint, build, and browser checks (search, menu, FAQ, news links, ledger, and small-screen layout).

## First-launch checklist

- Edit `lib/config.ts`: set `url` to the full production HTTPS origin (no trailing slash), replace `registrationUrl` with the real Google Form URL, and replace the email and Facebook group placeholders. Every registration/join/volunteer CTA uses this one form URL.
- Create a free Google Form with only necessary fields. Keep responses private; do not publish a response spreadsheet or add member personal data to git. The placeholder currently opens the Google Forms homepage.
- Confirm membership policies, fee period, and committee appointments before presenting them as adopted policies.
- Replace sample content with approved news, events, committee members, and consented representatives. Set each replaced entry's `isExample` to `false`; sample notices follow the JSON flags automatically.
- Replace the example ledger with verified entries; set `fund.json`'s `isExample` to `false` only when every fund record is real.
- Replace the original SVG campus illustration with an authorized local school photo if available. The current hero is a photo-band-style **illustration placeholder**, not a photo of the school. Use local assets, not hotlinks, and update captions and alt text.
- The inline bluebird mark and palette are original alumni placeholders, not official school branding. Replace the mark with an authorized asset only after permission is granted.
- Check the generated `sitemap.xml`, `robots.txt`, and social preview after updating the production domain.

## Content editing for non-developers

You can edit files directly in GitHub: open the file, select the pencil icon, make a small change, and select **Commit changes**. Prefer a branch/pull request so another volunteer can review it. Once changes reach the production branch, Vercel rebuilds the site automatically. No dashboard or database is needed.

JSON rules: keep the surrounding `[` / `]` or `{` / `}`, use **double quotes** around text and keys, separate entries with commas, and do not put a comma after the last entry. Numbers and `true`/`false` do not need quotes. Dates use `YYYY-MM-DD`. Copy a neighbouring entry as a template. Do not paste passwords or private member details into any file.

| File | What to edit |
| --- | --- |
| `data/batchReps.json` | Add a graduation `year`, `isExample` flag, and 1–2 `representatives`, each with a `name`. Optional `contact` accepts `https://` or `mailto:` links. Obtain permission before publishing. The directory sorts newest first and searches years/names in the browser. |
| `data/committee.json` | Change `name`, `role`, `description`, and `isExample` for each confirmed committee member. Add/remove an object to add/remove a member. |
| `data/events.json` | Each event needs a unique `id`, `title`, ISO `date`, `location`, `status` (`upcoming` or `past`), local `image`, `description`, and `isExample` flag. Change `status` after an event happens; dates do not automatically archive it. |
| `data/news.json` | Add `slug`, `title`, `date`, `category`, `excerpt`, local `image`, and `isExample`. News sorts by date, newest first. For every slug, also create the matching Markdown file below. |
| `content/news/<slug>.md` | Write the news story as plain text/Markdown. Its filename must exactly match the JSON slug, e.g. `building-our-network.md`. Use `## Heading`, paragraphs, `**bold**`, and `[link text](https://...)`. No frontmatter, HTML, or MDX is needed; raw HTML is ignored. Use lowercase, hyphen-separated slugs; changing one changes the URL. |
| `data/fund.json` | Update `membershipFee`, `allocations` (amount, label, hex color), `openingBalance`, and chronological `ledger` rows (`date`, `description`, numeric `income`, numeric `expense`). The code calculates running balances; do not enter a balance for each row. Allocation amounts should sum to the fee. `separateFunds` contains distinct event/sponsorship summaries and is never added to the membership balance. |
| `data/faq.json` | Add/edit `question` and `answer` text. Each entry becomes an accessible native accordion. |

Example of a representative entry (replace the illustrative name and obtain consent):

```json
{
  "year": 2026,
  "isExample": false,
  "representatives": [
    { "name": "Representative name", "contact": "mailto:representative@example.com" }
  ]
}
```

Example of a ledger row:

```json
{ "date": "2026-10-10", "description": "Membership fees received", "income": 200, "expense": 0 }
```

Keep ledger rows in chronological order. Use either income or expense per row, non-negative amounts, and a clear description. The sample membership balance is ৳58,000 (৳60,000 income minus ৳2,000 expenses); the separate sample event balance is ৳4,000 and does not affect it.

For images, upload an owned/authorized file to `public/images/` and reference it as `/images/filename.svg` (or `.jpg`/`.png`). Keep assets small. Existing card images are decorative; if a photo carries meaningful information, update the component's alt text appropriately.

See [CONTENT.md](CONTENT.md) for the quick editing cheat-sheet. Mission text and policy explanations live in their page files; coordinate policy changes with both the membership page and FAQ.

## Deploy to Vercel

1. In Vercel, import this GitHub repository as a new project.
2. Choose the **Next.js** framework preset and Node.js 22. Use `npm run build` as the build command. Vercel detects the static-export configuration; if an output-directory override is needed, set it to `out`.
3. No environment variables or secrets are required. Deploy and test the generated `.vercel.app` URL.
4. Push approved content updates to the production branch to redeploy. Pull requests can get preview deployments.
5. Use Vercel's free plan only where its current eligibility/usage terms permit. There are no paid features in this project; hosting limits and terms still apply. A custom domain may have a separate annual registration cost; the free Vercel subdomain needs no purchased domain.

## Connect a Cloudflare domain

1. Add the domain to **Vercel → Project → Settings → Domains**, including `www` if desired. Choose a canonical domain and redirect the other in Vercel.
2. In **Cloudflare → DNS**, add the exact A/CNAME (and verification TXT, if requested) values shown by Vercel. Use Vercel's current project-specific instructions rather than copying a hardcoded IP or another project's CNAME.
3. Start with **DNS only** (grey cloud) so Vercel can verify the domain and issue its HTTPS certificate. Remove conflicting records for the same host, but preserve unrelated mail/TXT records.
4. Wait for Vercel to show valid configuration and HTTPS. Keeping Cloudflare DNS-only is the simplest setup; Vercel already supplies the site's CDN and TLS.
5. If enabling Cloudflare proxying later, use **Full (strict)** TLS, never Flexible, and avoid caching HTML in a way that hides content updates. Proxying is not required.
6. Set `siteConfig.url` to the canonical HTTPS domain and redeploy so metadata and the sitemap use the real address.

## Design and maintenance

- CSS variables and Tailwind theme tokens live in `app/globals.css`: navy `#0B3C6B`, sky `#2E8BC0`, gold `#C9A227`, paper `#F7F6F2`, and charcoal `#1F2933`.
- Inter and Source Serif 4 are locally hosted through `next/font/local`; the fonts and their SIL Open Font License notices are in `public/fonts/`. Builds do not fetch Google Fonts.
- All illustrations and the alumni bluebird mark are original placeholders. `public/og-image.png` is the social-compatible PNG version of `public/og-image.svg`. After editing the SVG, regenerate the PNG with the installed `sharp` package: `node -e 'require("sharp")("public/og-image.svg").png().toFile("public/og-image.png")'`.
- Static export is enforced in `next.config.ts`; do not add server actions, API routes, external runtime fetching, or persistent storage.
- Run `npm audit` when maintaining dependencies. At initial implementation, npm reports an unpatched `braces` stack-exhaustion advisory (`GHSA-vfj7-8cjw-p6xm`) through Next's **development-only ESLint dependency chain**. No user-supplied glob patterns reach the linter, and it is not shipped in the static site. The suggested downgrade to Next 14 lint configuration is not compatible maintenance for this Next 16 scaffold; monitor upstream for a fix.
