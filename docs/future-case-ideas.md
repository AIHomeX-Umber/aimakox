# Future Case Ideas

> These are deployment patterns worth documenting as full transformation logs.
> Each entry includes: the story, why it's worth a full case, and what the case would teach.

---

## Format

Each case idea below contains:
- **The story** — what happened in operational terms
- **Why it matters** — what a reader would learn
- **Key sections to develop** — what makes this case unique
- **Status** — research / outline / draft / published

---

## Case 1: Space Discoverer — AI-Native DTC Redesign

**Route:** `/cases/space-discoverer`
**Anchor:** `/cases#space-discoverer`
**Status:** Outline needed

### The Story
A murphy bed / space-saving furniture brand making the transition from wholesale-dependent to DTC-first. The core challenge: product story complexity (murphy beds require explaining the mechanism, the space benefit, the installation reality) combined with high consumer anxiety (large purchase, complex installation, "will this actually work in my apartment?").

The transformation: AI content pipeline to produce scene-specific content for different home configurations, AI-powered FAQ agent that handles the pre-purchase anxiety questions (measurements, compatibility, installation complexity), and a DTC site architecture designed around the long decision cycle.

### Why It Matters
- Murphy beds and space-saving furniture are a high-intent, long-decision-cycle category — the content model is different from impulse or commodity products
- Shows how AI content can handle complexity (not just volume)
- Shows FAQ agent deployment in a high-anxiety pre-purchase context
- Shows a DTC architecture designed around decision stages, not just conversion

### Key Sections to Develop
- The content complexity problem (why describing a murphy bed is harder than describing a lamp)
- How AI handles multi-stage purchase decisions
- FAQ Agent deployment for pre-purchase anxiety reduction
- What content the AI produced vs. what required human expertise
- How the DTC site structure was designed to match the 7-30 day decision cycle

---

## Case 2: Smart Hardware Brand — AI Support Workflow

**Route:** `/cases/smart-hardware-support`
**Anchor:** `/cases#smart-hardware`
**Status:** Research needed

### The Story
A consumer IoT / smart home device brand with a growing installed base hitting the classic smart hardware support wall: customer service costs scale linearly with installed base, but revenue doesn't. The core issue: technical support questions require product knowledge (firmware versions, app compatibility, installation scenarios) that human agents either don't have or take too long to look up.

The transformation: structured product knowledge base (mapping firmware versions to known issues and solutions), FAQ Agent deployment handling 80%+ of technical support volume, escalation design that gets human agents the right context before they touch the ticket.

### Why It Matters
- Smart hardware support is a solved problem at scale (Apple, Google, Amazon) but not at the 10k-100k unit range where Chinese hardware brands operate
- Shows knowledge base architecture as the pre-condition for support AI (the AI is only as good as the knowledge it has access to)
- Shows escalation design — the part most support AI deployments get wrong
- Shows the economics: support cost per unit before/after

### Key Sections to Develop
- The knowledge base structure that made the FAQ Agent work
- How firmware version management intersects with support content
- The escalation rules that made human agents more effective, not just less frequent
- What the FAQ Agent refused to answer and why

---

## Case 3: Bathroom Factory — Follow-Up Automation

**Route:** `/cases/bathroom-factory`
**Anchor:** `/cases#bathroom-factory`
**Status:** Partial data, needs structure

### The Story
A Zhejiang bathroom fixtures manufacturer (faucets, shower systems, accessories) doing primarily B2B export. The issue: 6-person external trade team managing 300+ active inquiries/month across WhatsApp, email, and B2B platforms. Inquiry quality varied wildly. Follow-up was inconsistent. The silence period (days 3-7 after quote) was where most deals were lost.

The transformation: inquiry triage Agent (intent classification + priority scoring), automated follow-up sequence in silence period, quote version management, lost deal tracking.

### Why It Matters
- The most common transformation pattern for Chinese export manufacturers
- Demonstrates the inquiry triage → priority queue → follow-up sequence stack
- Shows the specific failure mode of "silence period" and how Agent intervention changes it
- The before/after data is among the clearest we have: 3× follow-up efficiency, 30% conversion improvement

### Key Sections to Develop
- The silence period problem (why days 3-7 are where deals die)
- Priority scoring logic (what signals matter, what signals are noise)
- The follow-up sequence design (what to say at day 3, day 7, day 14)
- What the data looked like after 12 weeks
- What didn't improve (and why)

---

## Case 4: Export Workflow System — AI Content Pipeline

**Route:** `/cases/export-workflow`
**Anchor:** `/cases#export-workflow`
**Status:** Draft concept

### The Story
A furniture exporter with 500+ SKUs needing English content for Amazon, European distributors, and their own B2B website — simultaneously. The content problem: 500 SKUs × 3 platforms × 2 languages = a content gap that a human team can't fill in a reasonable timeframe at acceptable quality.

The transformation: product parameter database (structured), content generation pipeline (parameter → template → generation → human review → publish), multi-platform format adaptation.

### Why It Matters
- The math of SKU × platform × language makes human content production economically impossible above a certain scale
- Shows parameter database as the critical precondition (content quality = data quality)
- Shows the 3-tier review process that makes AI content safe to publish
- Shows the format adaptation layer (Amazon vs. distributor catalog vs. DTC site)

### Key Sections to Develop
- The parameter database structure that enabled generation
- The review process that caught errors before publication
- Platform format differences and how they were handled
- Content velocity before/after (the 5× metric)
- Quality comparison: human-written vs. AI-generated product descriptions

---

## Case 5: Feishu AI Transformation

**Route:** `/cases/feishu-ai-ready`
**Status:** Concept — needs real deployment data

### The Story
A manufacturing company where Feishu had been deployed as the IM / document platform but wasn't functioning as an AI-ready business platform. The issue: Feishu was being used like WeChat (conversations, voice notes) rather than as a structured data and process management layer.

The transformation: Feishu configuration overhaul (document structure, approval flow design, Webhook integrations), SOP migration into Feishu knowledge base, ERP ↔ Feishu data bridge via Webhook.

### Why It Matters
- Feishu is the platform of choice for many Chinese manufacturing companies
- Most companies massively underuse Feishu's API and automation capabilities
- Shows the configuration work that turns Feishu from a messaging app into an AI-ready business platform
- Highly replicable — any Feishu-using company could follow the same playbook

### Key Sections to Develop
- The gap between "having Feishu" and "having an AI-ready platform"
- Specific Webhook integrations that connected Feishu to ERP
- Approval flow design patterns for manufacturing companies
- Knowledge base SOP structure that enabled AI training

---

## Case 6: AI Content Factory System

**Route:** `/cases/content-factory`
**Status:** Concept

### The Story
Building a complete AI content production system: SKU parameter database → prompt templates → generation pipeline → human review workflow → multi-platform distribution. The goal: a system that produces 50+ pieces of product content per week with 2 hours of human review time.

The transformation: this is as much a systems design case as a deployment case. Shows the architecture of a content factory, not just the AI tools used.

### Why It Matters
- Shows that AI content production is an infrastructure problem, not a prompt problem
- Shows the full stack: data → generation → review → distribution
- Shows what humans are doing in a properly designed AI content system (curating, not writing)
- The architecture is transferable to any high-SKU product category

### Key Sections to Develop
- The parameter database as content foundation
- Prompt template design for consistency at scale
- The human review checkpoint design
- Distribution layer (different format for different platforms)
- Error handling: what happens when the generation is wrong

---

## Ideas Under Consideration

The following patterns have appeared in engagements but don't yet have enough data for a full case:

- **Procurement agent automation** — automating supplier quote comparison and initial negotiation preparation
- **Quality exception routing** — using AI to classify quality issues and route them to the right response workflow
- **Cross-border customer education content** — building AI systems to explain complex products to consumers in unfamiliar markets
- **B2B catalog localization** — adapting product catalogs for German, Japanese, and North American distributor requirements
- **Production scheduling signal extraction** — pulling production progress signals out of unstructured daily reports

---

*Add new case ideas here as they emerge from client conversations and deployment patterns.*
*When a case moves to "draft" or "published", update the status and add a route.*
