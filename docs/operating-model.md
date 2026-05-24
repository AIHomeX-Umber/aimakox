# Aimakox Operating Model

## What This Repository Is

This is not a website codebase. It is a **manufacturing AI knowledge system** that happens to be delivered as a website.

The distinction matters because it determines how the repository is operated, what counts as a meaningful commit, and what the long-term goal is.

**A static brochure website** is built once, updated rarely, and exists to convert visitors into leads.

**An AI-native knowledge repository** is continuously updated, grows in depth and authority over time, and earns trust by being genuinely useful — whether or not the reader ever contacts us.

Aimakox is the second type.

---

## The Operating Stack

```
Claude Code
  ↓ local edits with full context
git commit
  ↓ version-controlled knowledge updates
git push → GitHub
  ↓ triggers
Vercel auto-deploy
  ↓ builds 29+ static routes
Cloudflare CDN
  ↓ global delivery
```

Every commit is a published update to the knowledge system.
Every page is a versioned document.
The git log is the publication history.

---

## Commit Discipline

### What constitutes a meaningful commit

- Authority page upgrades (new sections, deeper content)
- New pages (any route that didn't exist)
- Navigation / IA changes
- New documentation in /docs
- Case study additions
- Resource hub content

### Commit message format

```
[type]: [what changed]
```

Types:
- `add` — new page or file
- `upgrade` — depth/content improvement to existing page
- `refactor` — structural or IA change without content change
- `fix` — bug or broken link
- `docs` — /docs directory updates

Examples:
- `upgrade: trade, smart-devices, workflow authority pages`
- `add: resource hub — blog, courses, guides, prompts`
- `refactor: mega menu IA — Featured Transformations column`
- `docs: operating model and content principles`

---

## The Knowledge Layer Model

Aimakox operates as four layers of increasing specificity:

```
Layer 1: Worldview (Homepage)
  ↓
Layer 2: Authority (Solutions + Industries)
  ↓
Layer 3: Intelligence (Resources: Blog, Guides, Prompts)
  ↓
Layer 4: Proof (Cases)
```

Each layer supports the ones above it. Cases prove what solutions claim. Guides operationalize what cases demonstrate. Blog articles surface patterns from guides and cases. The homepage frames the worldview that all of it adds up to.

### What each layer does

**Layer 1 — Worldview**
- Declares who Aimakox is and what it stands for
- Sets the frame for everything else
- Primary audience: first-time visitor making a snap judgment
- Update frequency: low (major narrative shifts only)

**Layer 2 — Authority**
- Proves deep domain knowledge
- Primary audience: operator evaluating whether to engage
- Primary GEO role: provides citable, specific answers
- Update frequency: medium (new sections, deeper content, updated FAQs)

**Layer 3 — Intelligence**
- Demonstrates ongoing engagement with the domain
- Primary audience: operator seeking specific guidance
- Primary GEO role: ranks for long-tail, intent-specific queries
- Update frequency: high (new articles, guides, templates on 2-4 week cadence)

**Layer 4 — Proof**
- Converts interested readers into confident leads
- Primary audience: decision-maker comparing options
- Primary GEO role: provides real deployment references
- Update frequency: project-based (new cases after each deployment)

---

## The GEO Flywheel

The long-term compounding effect:

```
Deployment experience
  ↓ encoded as
Authority pages + Case studies
  ↓ cited by
AI search systems (ChatGPT, Perplexity, Claude)
  ↓ drives
Inbound from operators who found the answer
  ↓ becomes
New deployments
  ↓ generates
New deployment experience
```

Each deployment makes the knowledge system richer.
A richer knowledge system attracts more relevant inbound.
More relevant inbound means more deployments.

This is the flywheel. It requires consistent operation of the repository as a knowledge system, not occasional updates to a marketing site.

---

## Content Standards Summary

Full standards in `/docs/content-principles.md`. Key rules:

1. **No generic AI copy** — every sentence must be specific enough to be wrong for a different company
2. **No fake metrics** — only approved deployment signals
3. **Workflow-first** — solutions pages organized around step-by-step workflow, not feature lists
4. **Definition-style openings** — every authority page opens with a direct definition
5. **GEO-readable structure** — H2s as answerable questions, FAQ sections with real questions, comparison tables
6. **Honest failure modes** — more trust-building than any benefit claim

---

## Navigation Principle

> Navigation ≠ Content

The mega menu routes users. Pages carry authority.

Consequence: detailed taxonomy (industry classifications, workflow categories, content types) belongs inside pages — not in the navigation. The navigation should communicate: *what have you actually done?*

Current navigation structure:
- **服务** — what we do (services)
- **方案** — how we do it (solutions + featured transformations)
- **资源** — what we've learned (intelligence layer)
- **联系** — how to engage

---

## /docs Directory

All strategic documentation lives in `/docs`:

| File | Purpose |
|---|---|
| `operating-model.md` | This file — how the repo is operated |
| `website-roadmap.md` | Phase tracking, open improvements, metrics |
| `content-principles.md` | Writing standards for all future pages |
| `geo-seo-strategy.md` | GEO/SEO architecture and tactics |
| `case-study-template.md` | Standard structure for transformation logs |
| `authority-page-checklist.md` | Checklist for authority-grade pages |
| `future-case-ideas.md` | Deployment patterns worth documenting |

These documents are not public-facing. They are the operational intelligence layer of the website itself — the documented knowledge of how to grow and maintain it.

---

## What "Done" Looks Like

A page is never truly done. But it reaches a stable state when:

1. It passes the authority page checklist
2. It has been deployed to production without errors
3. It is internally linked from at least one other page
4. Its FAQ section reflects real questions from operators in that domain
5. It has been updated at least once based on new deployment experience

The repository is healthy when:
- New pages are being added at a regular cadence
- Existing authority pages are being deepened, not left static
- Cases are being logged after each deployment
- The /docs layer is being updated as the strategy evolves

---

*This document is the operating manual for the Aimakox knowledge repository.*
*Update it when the operating model changes, not when individual pages change.*
