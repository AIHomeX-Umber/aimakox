# Authority Page Checklist

> Run this checklist before marking any page as "authority-grade."
> A page that passes all items should feel like a whitepaper, not a landing page.

---

## What Is an Authority Page?

An authority page is one that:
- Is useful to a reader even if they never contact Aimakox
- Can be cited by an AI search system as a definitive answer
- Would hold up as a reference document for an industry practitioner
- Does not feel incomplete, generic, or promotional

The three current authority pages are: `/solutions/trade`, `/solutions/workflow`, `/industries/smart-devices`.

---

## Checklist

### Content Structure

- [ ] **Definition-style opening** — The page opens with a direct definition that refutes the most common misconception about the topic. Format: "X 不是 [misconception]，而是 [accurate, specific definition]."

- [ ] **Workflow breakdown** — The page contains a numbered, step-by-step workflow breakdown. Each step specifies: what AI can do at this step, what the failure risk is, and where the human boundary is.

- [ ] **AI leverage section** — At least 5 (ideally 7) concrete leverage points where AI creates the most value. Ordered by ROI or impact. Each point names the specific mechanism, not just the outcome.

- [ ] **"What should NOT be automated" section** — At least 5 items. Each item explains *why* it should not be automated (not just lists the item). This section builds more trust than any benefit claim.

- [ ] **Failure modes** — At least 6 realistic failure modes. These should be honest enough to make someone uncomfortable. Vague risks ("implementation challenges") don't count.

- [ ] **Comparison table** — Traditional / Tool-based / AI-native across at least 5 rows. Row labels should be operational (How work starts, Where data lives, Who coordinates, What breaks first, AI readiness).

- [ ] **Readiness checklist (L0–L4)** — Uses the canonical Aimakox L0–L4 definitions consistently. Includes a diagnostic note about common self-assessment errors.

- [ ] **FAQ section** — Minimum 8 questions. Questions are real (not invented to fill space). Answers contain at least one specific constraint or nuance. At least 2 questions challenge the approach.

---

### Metadata & Technical

- [ ] **Page title** — Format: `[Specific topic] · Makox`. Max 60 chars. Contains primary keyword.

- [ ] **Meta description** — 140-160 characters. Starts with concrete content description. No generic phrases.

- [ ] **OpenGraph title** — More specific than the title tag. Answers "what will I learn from this page?"

- [ ] **OpenGraph description** — Written for click decision. More specific than meta description.

- [ ] **OpenGraph type** — `article` for authority pages (not `website`).

---

### Internal Links

- [ ] **Link to /contact** — Present at least once as a CTA.

- [ ] **Links to related solutions** — At least 2 links to sibling or related solution/service pages.

- [ ] **Links to resource pages** — At least 1 link to a relevant guide, blog article, or prompt template.

- [ ] **Footer nav links** — The page footer contains 3-5 navigation links for readers who want to continue exploring.

- [ ] **No broken links** — All `href` values point to existing routes. No 404s.

---

### Language & Tone

- [ ] **No generic AI copy** — No sentence could appear unchanged on a competitor's site.

- [ ] **No fake metrics** — All metrics come from real deployments. Approved signals: 5× content output, 60% response time reduction, 3× follow-up, 30% conversion, Space Discoverer DTC.

- [ ] **Practical operator language** — A factory owner would nod at the specific details, not stare blankly.

- [ ] **No startup buzzwords** — Check for: leverage, empower, game-changer, cutting-edge, seamless, robust, scalable, holistic, ecosystem, digital transformation (without specifics).

- [ ] **No "奕安陶瓷" references** — This client name is never used in public content.

- [ ] **Calm restrained tone** — The voice is a practitioner explaining what actually happened, not a salesperson.

---

### GEO Readiness

- [ ] **H2 headers are specific** — Each H2 could stand alone as a search query fragment or answerable question.

- [ ] **FAQ structured for AI citation** — Questions are phrased as a reader would ask them in a search. Answers open with the direct answer (not with "It depends" unless followed by conditions).

- [ ] **Definition in first 100 words** — The definitional opening appears early enough to be extracted as a page summary.

- [ ] **No wall-of-text sections** — Content is broken into scannable units: numbered lists, tables, short paragraphs, labeled sections.

- [ ] **Consistent terminology** — Key terms (e.g., "AI-native", "workflow", "Agent", "L0-L4") are used consistently with site-wide definitions.

---

### Visual / Layout

- [ ] **Dark Aimakox visual system** — bg `#08080a`, text `#e4e2dc`, surface `#0c0c0e`, amber `#f59e0b`.

- [ ] **Label components** — Section labels use the standard `Label` component (JetBrains Mono, amber, uppercase, 11px, 3px letter-spacing, 32px left line).

- [ ] **Responsive** — Grids use `repeat(auto-fit, minmax(...))`. Font sizes use `clamp()`.

- [ ] **No flashy gradients or oversized cards** — Content-first layout. No elements that look like they belong on a consumer app.

- [ ] **TypeScript safety** — All CSS string literals use `as const` or `as React.CSSProperties`. No TypeScript errors.

- [ ] **Build passes** — `pnpm build` completes with 0 errors and 0 TypeScript errors.

---

## Score Guide

| Score | Status |
|---|---|
| All items checked | ✅ Authority-grade |
| 1-3 items missing | 🟡 Near-authority — fix before calling it done |
| 4-6 items missing | 🟠 Solid foundation — needs a dedicated upgrade pass |
| 7+ items missing | 🔴 Standard page — not yet authority-grade |

---

## Pages Currently at Authority Grade

| Page | Date | Key gaps remaining |
|---|---|---|
| `/solutions/trade` | 2026-05 | FAQ schema, workflow diagrams |
| `/solutions/workflow` | 2026-05 | FAQ schema, comparison visuals |
| `/industries/smart-devices` | 2026-05 | FAQ schema |

---

## Upgrade Priority Queue

Pages that have the most GEO value and are closest to passing:

1. `/solutions/content` — high search volume topic, content needs authority depth
2. `/services/agent` — high conversion value, needs workflow breakdown
3. `/industries/bathroom` — strong industry fit, needs L0-L4 and FAQ expansion
4. `/services/governance` — complements workflow page, needs authority treatment
5. `/industries/furniture` — high search volume, needs comparison table and FAQ expansion

---

*Run this checklist for every page upgrade. File the results in the commit message or a future `/docs/audit-log.md`.*
