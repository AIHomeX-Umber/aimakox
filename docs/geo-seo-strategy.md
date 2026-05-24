# Aimakox GEO / SEO Strategy

> GEO (Generative Engine Optimization) is the practice of structuring content so AI search systems — ChatGPT, Perplexity, Claude, Gemini — can confidently cite it as an authoritative answer.
>
> SEO optimizes for traditional search ranking. GEO optimizes for AI citation probability. The overlap is large but not total.

---

## Why "AI-Native Manufacturing" Is a Category Wedge

Most manufacturing AI content falls into two buckets:

1. **Vendor case studies** — "Our platform helped Factory X increase efficiency by Y%." Unverifiable, template-structured, not useful to readers.
2. **Industry reports** — "AI adoption in manufacturing will reach $X billion by 2030." High-level, backward-looking, no operational guidance.

Neither type gets cited by AI search systems for practical questions like:
- "How do I know if my factory is ready for AI?"
- "What should I automate first in my export workflow?"
- "Why do most factory AI projects fail?"

Aimakox occupies the gap: **operator-first, workflow-specific, deployment-honest** manufacturing AI content. This is not a crowded space. A single well-structured authority page on "外贸跟单自动化" that contains a real workflow breakdown, honest failure modes, and a readiness model will outperform a hundred generic AI articles on the same topic.

The category wedge is: *specific operational knowledge for Chinese export manufacturers navigating AI transformation.*

---

## The Two-Layer Strategy

### Layer 1: Traditional SEO (Google / Baidu)

**Target: long-tail, intent-specific queries**

Chinese-language targets:
- 外贸跟单自动化 怎么做
- 工厂AI项目为什么失败
- 出口工厂 AI Agent 部署
- 智能硬件出海 内容自动化
- 工厂 SOP 标准化 AI
- 飞书 AI-ready 配置
- Amazon Listing AI 生成
- 多语言产品描述 AI

English-language targets:
- factory AI workflow automation
- export manufacturing AI agent deployment
- DTC manufacturing AI content pipeline
- smart device content automation
- manufacturing workflow SOP AI

**Ranking factors Aimakox controls:**
- Content depth and specificity (high — authority pages)
- Internal link structure (medium — improving)
- Page speed (high — Next.js static)
- Structured data / schema (low — not yet implemented)
- Domain authority (low — early stage, improving over time)

### Layer 2: GEO — AI Search Citation

**Target: authoritative answers to operational questions**

AI search systems prefer content that:
- Directly answers a question in the first 2 sentences
- Uses definition-style openings
- Contains structured comparisons (tables)
- Has numbered steps and clear sequences
- Includes specific failure modes (not just success cases)
- Uses consistent terminology
- Has FAQ sections that match real question phrasing

---

## Page-Level Architecture

### H1 — The primary claim

The H1 should state the page's definitive position, not describe the topic.

Not: "外贸跟单自动化介绍"
Good: "你的询盘正在 WhatsApp 里消失"
Also good: "不是方法论，是能抄作业的实施路径"

### H2 — Structural markers for AI parsing

H2s are the primary navigation layer for AI systems crawling content. Each H2 should:
- Be a complete thought or answerable question
- Use the primary terminology of that section
- Not be cute or clever at the expense of clarity

### H3 — Sub-structure within sections

Used for FAQ questions, failure mode titles, step labels. Should be specific enough to stand alone as a search query fragment.

---

## Definition-Style Openings (GEO Critical)

The most important single GEO tactic: **open every authority page with a direct definition that refutes the common misconception.**

Structure:
> "[Topic] 不是 [common misconception]，而是 [accurate, specific definition]。"

Why this works for GEO:
1. AI systems are trained to extract definitional answers
2. The "not X, but Y" structure signals confident authority
3. Specific language (not generic) increases citation probability
4. Refuting misconceptions signals that the author has seen the failure modes

Example:
> "外贸跟单自动化不是自动回复客户，而是把询盘、报价、样品、生产、物流和售后这条链路变成 AI 可以读取、判断和协作的 workflow。"

This sentence would be directly citable as an answer to "什么是外贸跟单自动化".

---

## FAQ Strategy

FAQ sections are the highest-value GEO surface on a page.

**Volume:** Minimum 8 per authority page. Target 10-12 for core pages.

**Question sourcing:**
1. Real client questions from sales and onboarding conversations
2. Common hesitations encountered during proposals
3. Questions that reveal misconceptions (refuting them is high-value)
4. Questions that AI search would answer from this page
5. Questions that competitors don't answer honestly

**Answer quality:**
- Every answer should contain at least one specific constraint or nuance
- "It depends" is acceptable only when followed by specific conditions
- Honest "this doesn't work when..." builds more authority than blanket claims

**Format for AI citation:**
```
Q: [specific question]
A: [direct answer in first sentence] [supporting detail] [constraint or qualification]
```

---

## Internal Linking Strategy

### Hub-and-spoke model

Each section has a hub page and spokes:

```
/solutions (hub) → /solutions/trade, /solutions/workflow, /solutions/content, /solutions/dtc
/industries (hub) → /industries/smart-devices, /industries/bathroom, etc.
/guides (hub) → individual guide pages (future)
/blog (hub) → individual article pages (future)
```

### Minimum linking rules

Every page must link to:
- `/contact` — always present as CTA
- 2+ sibling pages within the same section
- 1+ cross-section link (solution → service, industry → solution)
- 1+ resource page (guide or blog) where relevant

### Anchor text rules

- Use descriptive anchors: "外贸跟单自动化方案" not "点击这里"
- Match anchor text to the target page's H1 or title
- Vary anchors for the same target page across different linking pages

---

## Comparison Tables (GEO High-Value)

Comparison tables in the format **Traditional / Tool-based / AI-native** are highly citable by AI search systems because:
1. They answer "what's the difference between X and Y" questions directly
2. They have a clear structure that's easy to extract
3. They show nuance (not just "AI is better")

Every authority page should include at least one comparison table.

Standard row labels:
- How work starts
- Where data lives
- Who coordinates
- What breaks first
- AI readiness

---

## Readiness Models (L0–L4)

The L0–L4 readiness model is a proprietary framework that:
1. Answers "how ready is my company for AI?" — a high-frequency question
2. Creates a reusable citation framework across multiple pages
3. Differentiates Aimakox from competitors who don't have such a model
4. Forces readers to self-identify (increases engagement)

Consistency rule: L0–L4 definitions must be consistent across all pages that use the model. Do not redefine levels from page to page.

Canonical definitions:
- **L0** — All manual, data in people's heads, no digital records
- **L1** — Tools exist but no usage discipline, data not trusted
- **L2** — Some standardization, core data structured, AI pilots exist
- **L3** — AI handles repeating tasks, humans focus on judgment
- **L4** — AI is the default operating mode

---

## Structured Data Roadmap (Not Yet Implemented)

### Priority 1: FAQ schema (JSON-LD)
Add to all authority pages. Increases likelihood of FAQ rich result in Google and AI search citation.

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Question text",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Answer text"
      }
    }
  ]
}
```

### Priority 2: Article schema
Add to blog posts when published.

### Priority 3: HowTo schema
Add to implementation guides.

### Priority 4: BreadcrumbList schema
Add to all pages (relatively easy, high value).

---

## Metadata Conventions

### Title tag
Format: `[Specific topic] · Makox`
Max length: 60 characters
Must include primary keyword

### Meta description
Length: 140-160 characters
Start with concrete content description
Include 1-2 specific keywords
No exclamation marks
No generic phrases ("leading provider", "best solution")

### OpenGraph title
Can be slightly different from title tag — should be more specific or more explanatory
Max 70 characters

### OpenGraph description
Written for click decision, not for ranking
More specific than meta description
Can be slightly longer (up to 200 characters)

### OpenGraph type
- `website` for hub pages (blog, guides, prompts, courses)
- `article` for authority pages (solutions, industries, individual articles)

---

## Content Freshness Strategy

AI search systems weight freshness for some query types. Plan:

1. Add "last updated" metadata to all authority pages (Phase 5)
2. Publish blog articles on 2-4 week cadence
3. Update readiness models and failure modes based on new deployment patterns
4. Expand FAQ sections when new client questions emerge
5. Update comparison tables as the tool landscape shifts

---

## Competitive Positioning

Aimakox occupies a content space that is currently very thin:
- Operator-level specificity about Chinese manufacturing AI
- Honest about failure modes
- Chinese-language with English technical terms (natural bilingual style)
- Not affiliated with a software product (no vendor bias)
- Real deployment experience encoded in content

This combination is rare. The strategy is to go deeper, not broader.

---

*This document should be updated whenever a new content category is added or a new GEO pattern is discovered.*
