# Content editing cheat-sheet

1. Open the file in GitHub, click the pencil, and copy an existing entry.
2. Change text inside double quotes; keep commas/brackets in place.
3. Commit to a branch, review the Vercel preview, then merge. The production site rebuilds automatically.

| To change… | Edit… |
| --- | --- |
| Batches and 1–2 representatives per year | `data/batchReps.json`: `year`, `isExample`, `representatives[].name`, optional `contact` (`https://` or `mailto:`). Publish contact details only with consent. |
| Committee | `data/committee.json`: `name`, `role`, `description`, `isExample`. |
| Alumni spotlights | `data/spotlights.json`: unique `id`, `name`, `batchYear`, `whereNow`, `quote`, `image`, `imageAlt`, `isExample`. Initial profiles/quotes are fictional samples, not actual alumni. |
| Homepage copy and photos | `data/homepage.json`: `hero`, signed `welcome` letter, `benefits`, full-width `imageBand`, and static `testimonial`. Welcome and testimonial keep their own `isExample` labels until approved/genuine. |
| Events | `data/events.json`: unique `id`, `title`, `date`, `location`, `status`, `image`, `description`, `isExample`. Set `status` to `past` to archive. |
| News cards | `data/news.json`: unique hyphenated lowercase `slug`, `title`, `date`, `category`, `excerpt`, `image`, `isExample`. |
| News story | Create/edit `content/news/<same-slug>.md`. Plain paragraphs, `## Headings`, `**bold**`, Markdown links; no frontmatter or HTML. Every news entry needs a matching file. |
| Fee allocation | `data/fund.json`: `membershipFee` and `allocations` (`label`, `amount`, `color`). Allocations must add up to the fee. |
| Membership ledger | `data/fund.json`: `openingBalance`, chronological `ledger` rows (`date`, `description`, `income`, `expense`). Balances are automatic. Use non-negative numbers, not currency strings. |
| Event/sponsorship funds | `data/fund.json`: `separateFunds` (`name`, `description`, `income`, `expense`). These remain separate from membership money. |
| Frequently asked questions | `data/faq.json`: `question`, `answer`. |
| Google Form, domain, email, Facebook | `lib/config.ts`: replace the TODO placeholders. One registration URL powers every Join/Register/Volunteer link. |
| Local images | Upload a licensed/consented `.jpg` to `public/images/`, then change the JSON `image` field to `/images/filename.jpg`. No code changes needed. Optional `imageAlt` describes meaningful photos; `""` means decorative. |

**Dates:** `YYYY-MM-DD`. **Numbers:** `200`, not `"৳200"`. **Flags:** `true`/`false`. No trailing commas or comments in JSON.

**Before launch:** replace all sample people/events/news/transactions; confirm membership policy. Set `isExample: false` only for genuine records; sample notices follow these flags automatically. Free membership for the last three batches is a **proposal**, not an adopted rule.

## Swap illustrations for real photos

Scenes use `illustration:reunion`, `illustration:graduation`, `illustration:conversation`, or `illustration:classroom`. Existing SVG image paths also select human scenes. Upload an authorized photograph such as `public/images/reunion.jpg`, then replace `"image": "illustration:reunion"` (or the old SVG path) with `"image": "/images/reunion.jpg"` in news, events, spotlights, or the homepage hero/image band.

Add `"imageAlt": "Alumni catching up at a reunion"` if useful, or `""` if decorative. Commit and rebuild: the image swaps automatically and its illustration caption disappears. No component edits, database, or image service required. Keep faces central because images crop to fit; preview at 375px, 768px, and 1440px.

A photo swap does **not** remove sample labels: leave `isExample: true` until the story, person, event, quote, or committee signature is verified and approved. Only publish photographs and personal stories with permission.

Never publish Google Form responses, private alumni lists, payment details, or credentials. See [README.md](README.md) for full examples, local commands, and deployment/DNS instructions.
