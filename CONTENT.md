# Content editing cheat-sheet

1. Open the file in GitHub, click the pencil, and copy an existing entry.
2. Change text inside double quotes; keep commas/brackets in place.
3. Commit to a branch, review the Vercel preview, then merge. The production site rebuilds automatically.

| To change… | Edit… |
| --- | --- |
| Batches and 1–2 representatives per year | `data/batchReps.json`: `year`, `isExample`, `representatives[].name`, optional `contact` (`https://` or `mailto:`). Publish contact details only with consent. |
| Committee | `data/committee.json`: `name`, `role`, `description`, `isExample`. |
| Events | `data/events.json`: unique `id`, `title`, `date`, `location`, `status`, `image`, `description`, `isExample`. Set `status` to `past` to archive. |
| News cards | `data/news.json`: unique hyphenated lowercase `slug`, `title`, `date`, `category`, `excerpt`, `image`, `isExample`. |
| News story | Create/edit `content/news/<same-slug>.md`. Plain paragraphs, `## Headings`, `**bold**`, Markdown links; no frontmatter or HTML. Every news entry needs a matching file. |
| Fee allocation | `data/fund.json`: `membershipFee` and `allocations` (`label`, `amount`, `color`). Allocations must add up to the fee. |
| Membership ledger | `data/fund.json`: `openingBalance`, chronological `ledger` rows (`date`, `description`, `income`, `expense`). Balances are automatic. Use non-negative numbers, not currency strings. |
| Event/sponsorship funds | `data/fund.json`: `separateFunds` (`name`, `description`, `income`, `expense`). These remain separate from membership money. |
| Frequently asked questions | `data/faq.json`: `question`, `answer`. |
| Google Form, domain, email, Facebook | `lib/config.ts`: replace the TODO placeholders. One registration URL powers every Join/Register/Volunteer link. |
| Local images | Upload to `public/images/`, then reference `/images/filename.svg` or `.jpg`/`.png`. Use authorized assets and appropriate alt text. |

**Dates:** `YYYY-MM-DD`. **Numbers:** `200`, not `"৳200"`. **Flags:** `true`/`false`. No trailing commas or comments in JSON.

**Before launch:** replace all sample people/events/news/transactions; confirm membership policy. Set `isExample: false` only for genuine records; sample notices follow these flags automatically. Free membership for the last three batches is a **proposal**, not an adopted rule.

Never publish Google Form responses, private alumni lists, payment details, or credentials. See [README.md](README.md) for full examples, local commands, and deployment/DNS instructions.
