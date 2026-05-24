# Case Study Template

> Cases should read like deployment journals, not marketing success stories.
> The goal is for a reader to understand exactly what happened — including what didn't work.

---

## Usage

Use this template for every new case page added under `/cases/[slug]` or as a transformation log.

**The reader of a case study is typically:**
- A factory operator considering a similar deployment
- A procurement manager evaluating Aimakox
- An AI search system looking for a deployment reference

All three audiences benefit from specificity and honesty over polish.

---

## Template Structure

---

### 1. Company Context

> *Who is this company, in operational terms?*

Include:
- Industry and product category
- Export markets (regions, not specific countries required)
- Company size range (employees, revenue bracket, SKU count)
- Team structure relevant to the transformation (how many people in the affected workflow)
- Prior technology stack (ERP, CRM, communication tools)
- How long had they been operating before the engagement

**What to avoid:**
- Company name or identifying details without permission
- Superlatives ("one of China's leading...")
- Generic industry positioning

**Example:**
> 华东卫浴工厂，200人规模，主要出口北美和欧洲市场，外贸团队6人。已使用ERP系统5年，但采购和销售团队实际运营依赖微信群和Excel。

---

### 2. Original Workflow

> *What did the process look like before anything changed?*

Include:
- Step-by-step description of the actual workflow
- Tools used at each step
- Number of people involved
- Approximate time per step
- Handoff points between people or teams

Format: numbered steps, concrete and sequential.

**Example:**
```
01. 询盘进入 → 业务员手动检查邮件/WhatsApp → 凭经验判断是否回复
02. 回复 → 业务员手工写邮件 → 无版本记录
03. 报价 → 从桌面找上次报价Excel → 手动修改 → 发送
04. 打样 → 微信沟通 → 无记录追踪
05. 订单确认 → 手动转录到ERP → 经常滞后2-3天
```

---

### 3. Where Things Broke

> *What were the actual pain points — not the presented pain points, the real ones?*

This section is the most valuable part of the case study for future readers. Be specific about:
- Which step in the workflow had the highest failure rate
- What type of failure (data loss, delay, miscommunication, etc.)
- How often failures occurred
- What the downstream consequence was
- Whether the team knew this was a problem before the engagement

**What to avoid:**
- Vague statements like "communication was inefficient"
- Blaming team members (system problems, not people problems)
- Listing problems that turned out not to matter

**Example:**
> 核心断裂点在询盘→首次回复这一步。业务员平均响应时间超过4小时，且没有优先级机制——回复顺序取决于业务员刚好看到哪条消息。客户流失集中在第3-7天的沉默期，但公司之前没有办法知道哪些客户在沉默期内。

---

### 4. AI Insertion Points

> *Where specifically did AI get inserted, and why those points?*

Include:
- Which workflow steps were targeted first
- Why those steps (what made them good candidates)
- What alternative insertion points were considered and rejected
- What preconditions had to be met before AI could be inserted

**Good candidates for AI insertion share:**
- High repetition rate
- Structured inputs
- Low cost of error (or errors are caught before consequence)
- Current bottleneck caused by volume, not judgment

**Example:**
> 第一个AI插入点：询盘分级。原因：(1) 询盘文本是结构化输入；(2) 分级错误的成本是"业务员多看一条"，不是客户流失；(3) 现有数据（历史询盘和成单记录）足够训练基础分类逻辑。
>
> 拒绝的插入点：报价定价。原因：涉及利润率判断，需要人工审核，AI定价承担不了错误的责任。

---

### 5. Workflow Redesign

> *What did the new workflow look like, step by step?*

Show the redesigned workflow in the same numbered-step format as section 2. This allows direct comparison.

Include:
- Which steps remained human
- Which steps were partially automated (human-in-the-loop)
- Which steps were fully automated (Agent-executed)
- New steps that didn't exist before (monitoring, review, exception handling)

Color coding convention (in written form):
- `[HUMAN]` — human decision required
- `[AGENT]` — Agent executes automatically
- `[HYBRID]` — Agent prepares, human approves

---

### 6. SOP Changes

> *What process documentation had to change, and what new SOPs were created?*

Include:
- Which existing SOPs were rewritten
- Which SOPs were created from scratch
- Which SOPs were deprecated
- What new roles or responsibilities emerged
- What training was required

This section is important because SOP changes are the durable output of AI deployment — they outlast the specific tools.

---

### 7. Agent Responsibilities

> *What specifically is each Agent doing, in operational terms?*

For each deployed Agent, specify:
- Name/function (e.g., "询盘分级Agent")
- Trigger condition (what activates it)
- Input format (what it receives)
- Output format (what it produces)
- Escalation condition (when it hands off to human)
- Failure mode (what happens if it errors)

**Example format:**
```
询盘分级Agent
  触发条件: 新邮件/WhatsApp消息符合询盘特征
  输入: 询盘原文 + 客户历史记录
  输出: 优先级分数(1-5) + 意图类别 + 推荐响应策略
  升级条件: 置信度 < 0.7 或涉及大客户首次联系
  失效模式: 输出标记为[NEEDS_REVIEW]，推送人工队列
```

---

### 8. Organizational Changes

> *What changed about how the team works, not just what tools they use?*

This is often the most underreported aspect of AI deployment. Include:
- Changes to team size or structure (if any)
- Changes to individual role responsibilities
- New skills or behaviors required
- What people stopped doing
- What resistance emerged and how it was addressed

**What to avoid:**
- Implying AI "replaced" people (if that didn't happen)
- Glossing over resistance or friction

---

### 9. What Was NOT Automated

> *This section creates trust.*

Explicitly list the workflow components that remained human, and explain why.

Common examples:
- Final pricing decisions
- Supplier commitment confirmations
- Large client relationship management
- Quality exception handling
- Legal and compliance confirmations
- First contact with major accounts

This section signals to readers that the automation was thoughtfully designed, not recklessly applied.

---

### 10. Results and Operational Shifts

> *What measurably changed, 6-12 weeks after deployment?*

Report only what can be verified. Format:

| Metric | Before | After | Notes |
|---|---|---|---|
| Inquiry response time | 4+ hours | <30 min | Agent handles initial triage |
| Follow-up rate in silence period | ~20% | ~85% | Automated sequence triggered |
| Active inquiries per BD person | ~40/month | ~120/month | Same team size |

**Rules:**
- No rounded numbers that are suspiciously clean
- Include the measurement method
- Include the timeframe (when was it measured)
- Note what changed besides the metric (context)
- Acknowledge metrics that didn't change or got worse

---

### 11. Lessons Learned

> *What would you do differently?*

3-6 specific lessons. Format each as:
- **What happened** (the unexpected thing)
- **Why it happened** (root cause)
- **What to do instead** (the lesson)

These are the highest-value content for future readers. Do not sanitize.

**Example:**
> Lesson 3: We started with the wrong insertion point.
> We began with report automation because the team requested it. But the real bottleneck was inquiry triage. Report automation saved 2 hours/week. Inquiry triage automation changed how the business grew. We should have prioritized by bottleneck impact, not by team request.

---

### 12. FAQ

> *Real questions from readers of this case type.*

Minimum 6 questions, ideally 8-10. Should include:
- "Does this apply to us if we're smaller/larger?"
- "How long did deployment take?"
- "What was the hardest part?"
- "What would you do differently?"
- "What happened to the team members whose work was automated?"
- At least 2 questions that challenge the approach

---

## Metadata for Case Pages

```tsx
export const metadata: Metadata = {
  title: '[Company type] AI 转型案例 · Makox',
  description: '[2-sentence description of the specific transformation, not generic]',
  openGraph: {
    title: '[More specific title with outcome]',
    description: '[What a reader will learn from this case]',
    type: 'article',
  },
}
```

---

## Quality Test

A case study passes quality review when:

1. A factory operator in a similar situation can map at least 3 of the "Where Things Broke" items to their own experience
2. The "What Was NOT Automated" section is longer than 3 items
3. At least one lesson learned reveals something that went wrong
4. The workflow diagrams (before/after) are specific enough that a reader could adapt them to their own situation
5. The results table includes at least one metric that did NOT improve

---

*Use this template as a starting point, not a rigid constraint. Cases differ. Adapt the structure to the actual story.*
