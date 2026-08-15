# uktaxes.co.uk — Project Spec v1

## 1. Goal
A fast, modern UK tax calculator website built to rank for high-intent search queries ("UK salary calculator", "dividend tax calculator UK", etc.) and convert that traffic into repeat/referral visits through genuinely useful, accurate tools.

## 2. Tech Stack
- **Framework:** Next.js (App Router), statically generated where possible for speed and SEO.
- **Hosting:** Vercel or Cloudflare Pages — both give near-instant global load times, which is a direct ranking factor for Core Web Vitals.
- **Styling:** Tailwind CSS — fast to build with, no bloat, easy to keep the design consistent across many calculator pages.
- **Calculator logic:** Plain TypeScript functions, unit-testable, fed by a single config file of HMRC rates (see §4).
- **No CMS needed** for v1 — content pages can be MDX files in the repo, versioned alongside the code.

## 3. Site Architecture (one URL per calculator = one SEO target)

| URL | Calculator | Primary keyword target |
|---|---|---|
| `/` | Homepage — calculator hub | "UK tax calculator" |
| `/salary-calculator` | Take-home pay from gross salary | "salary calculator UK" |
| `/income-tax-calculator` | Income tax by band | "income tax calculator UK" |
| `/national-insurance-calculator` | NI contributions | "national insurance calculator" |
| `/dividend-tax-calculator` | Dividend tax for shareholders/directors | "dividend tax calculator UK" |
| `/self-employed-tax-calculator` | Tax + NI for sole traders | "self employed tax calculator UK" |
| `/capital-gains-tax-calculator` | CGT on shares/property | "capital gains tax calculator UK" |
| `/take-home-pay-calculator` | Redundant-but-searched variant of salary calc (can canonical to `/salary-calculator` or be its own page with different framing) | "take home pay calculator" |
| `/blog/[slug]` | Supporting content (e.g. "How UK tax bands work 2026/27") | long-tail informational queries |

Each calculator page should include: the interactive tool, a short explainer of the calculation method, an FAQ block (also used for FAQ schema), and internal links to 2–3 related calculators.

## 4. Tax Data — accuracy & maintainability
- Centralise all rates/thresholds/allowances in one config file (e.g. `data/tax-rates-2026-27.ts`), sourced directly from HMRC's published rates — never estimated or remembered from training data.
- Version by tax year (`tax-rates-2025-26.ts`, `tax-rates-2026-27.ts`) so historical calculators stay accurate and switching years is a config swap, not a logic rewrite.
- Add a visible "rates last verified [date]" note on each calculator for trust/credibility — matters for a finance tool.

## 5. SEO Plan
- **On-page:** unique title/meta description per calculator, H1 matching the target query, FAQ schema + Calculator/SoftwareApplication schema markup.
- **Technical:** static generation, sitemap.xml, robots.txt, sub-second load times.
- **Content layer:** a small number of genuinely useful blog/explainer posts per calculator (not thin content) to capture informational long-tail queries and build topical authority.
- **Internal linking:** every calculator links to related calculators and its explainer post.
- **Backlinks (later phase):** not a build task, but worth planning — e.g. outreach to UK personal finance sites once the tool is live and accurate.

## 6. Build Phases (for Claude Code)
1. **Scaffold:** Next.js + Tailwind project, routing for all pages above, shared layout/header/footer, base design system.
2. **Core calculators (batch 1):** salary, income tax, National Insurance — these share most of the same underlying logic.
3. **Core calculators (batch 2):** dividend tax, self-employed, capital gains.
4. **SEO layer:** metadata, schema markup, sitemap, robots.txt — applied across all pages in one pass.
5. **Content:** explainer/FAQ content per calculator, 2–3 supporting blog posts.
6. **QA pass:** verify every calculation against HMRC's own examples/worked cases before launch.

## 7. Design Direction
Modern, clean, minimal — the calculator itself should be the visual focus on each page (large inputs, instant results, no clutter). Avoid looking like a generic template; this is a credibility play as much as a utility.
