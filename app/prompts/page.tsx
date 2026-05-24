import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Workflow Prompt 库 · Makox',
  description:
    '不是随机ChatGPT提示词合集。Makox Prompt库收录的是出口制造业可直接嵌入workflow的操作级提示词——询盘提取、多语言Listing、报价分析、AI客服SOP、复购触发序列。',
  openGraph: {
    title: '制造业 AI Workflow Prompt 库 · Makox',
    description:
      '出口制造业的操作级提示词：询盘意图提取、多语言产品内容、报价结构化、客服SOP——提示词是系统的一部分，不是孤立的技巧。',
    type: 'website',
  },
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 11,
        letterSpacing: '3px',
        textTransform: 'uppercase' as const,
        color: '#f59e0b',
        marginBottom: 20,
        display: 'flex',
        alignItems: 'center',
        gap: 12,
      } as React.CSSProperties}
    >
      <span
        style={{
          display: 'inline-block',
          width: 32,
          height: 1,
          background: '#f59e0b',
          flexShrink: 0,
        } as React.CSSProperties}
      />
      {children}
    </div>
  )
}

function Divider() {
  return (
    <div
      style={{
        height: 1,
        background: 'linear-gradient(90deg, transparent, #1e1e1e, transparent)',
        margin: '0 40px',
      } as React.CSSProperties}
    />
  )
}

const CATEGORIES = [
  {
    name: '外贸跟单',
    color: '#f59e0b',
    positioning: '覆盖询盘到复购全链路的提示词模板，每个都标注了在跟单 workflow 里的触发点。',
    templates: ['询盘意图与优先级提取提示词', '多版本报价初稿生成模板', '客户沉默期跟进序列生成器'],
  },
  {
    name: '产品内容生产',
    color: '#3b82f6',
    positioning: '从结构化参数到多平台多语言内容的自动化内容生产模板。',
    templates: [
      'SKU 参数 → Amazon Listing 转化模板',
      '技术文档 → 消费者语言转化提示词',
      '多语言产品描述本地化（非翻译）模板',
    ],
  },
  {
    name: 'AI 客服 & FAQ',
    color: '#22c55e',
    positioning: '构建高准确率 AI 客服系统的提示词架构，包括问题分类和升级逻辑。',
    templates: ['售后问题分类与路由提示词', 'FAQ 知识库结构化提取模板', '客诉处理标准回复生成器'],
  },
  {
    name: '竞品与市场分析',
    color: '#a78bfa',
    positioning: '从竞品评价和搜索数据中提取可操作的市场信号。',
    templates: [
      'Amazon 差评分析与改进信号提取',
      '竞品参数对比文案生成模板',
      '买家关键词意图分析提示词',
    ],
  },
  {
    name: '内容运营',
    color: '#ef4444',
    positioning:
      'DTC 独立站和社媒内容的系统化生产模板，包含品牌叙事和 SEO 逻辑。',
    templates: [
      '产品场景故事生成框架',
      'SEO Blog 文章结构化生成模板',
      '社媒内容多平台适配提示词',
    ],
  },
]

const FEATURED_PROMPTS = [
  {
    category: '外贸跟单',
    categoryColor: '#f59e0b',
    name: '询盘意图提取与优先级评分',
    trigger: '新询盘进入系统',
    input: '询盘原文 + 客户来源 + 历史记录',
    output: '意图分类 / 优先级分数 / 推荐响应策略',
    complexity: '系统级',
    complexityColor: '#a78bfa',
    available: true,
  },
  {
    category: '产品内容',
    categoryColor: '#3b82f6',
    name: 'SKU 参数 → Amazon Listing 生成',
    trigger: '新 SKU 入库',
    input: '产品参数表字段',
    output: 'Title / Bullets / Description / Search Terms',
    complexity: '中级',
    complexityColor: '#f59e0b',
    available: true,
  },
  {
    category: 'AI 客服',
    categoryColor: '#22c55e',
    name: '售后问题分类与智能路由',
    trigger: '客户发送售后咨询',
    input: '客户消息原文 + 产品型号',
    output: '问题类别 / 建议回复 / 是否升级人工',
    complexity: '中级',
    complexityColor: '#f59e0b',
    available: true,
  },
  {
    category: '竞品分析',
    categoryColor: '#a78bfa',
    name: 'Amazon 差评主题聚类分析',
    trigger: '月度 / 季度竞品分析',
    input: '竞品差评列表',
    output: '问题主题分类 / 频次 / 对应改进建议',
    complexity: '系统级',
    complexityColor: '#a78bfa',
    available: true,
  },
  {
    category: '外贸跟单',
    categoryColor: '#f59e0b',
    name: '客户沉默期跟进邮件序列',
    trigger: '报价发出后 72 小时无回应',
    input: '报价版本 / 产品类别 / 客户地区',
    output: '3 封差异化跟进邮件草稿',
    complexity: '基础',
    complexityColor: '#22c55e',
    available: true,
  },
  {
    category: '产品内容',
    categoryColor: '#3b82f6',
    name: '技术文档 → 消费者语言转化',
    trigger: '工程 spec sheet 更新',
    input: '原始技术文档段落',
    output: '三个目标市场的消费者版本',
    complexity: '中级',
    complexityColor: '#f59e0b',
    available: true,
  },
  {
    category: '内容运营',
    categoryColor: '#ef4444',
    name: '产品场景故事生成框架',
    trigger: '新产品上市内容需求',
    input: '产品功能 / 目标用户 / 竞品弱点',
    output: '5 个场景化故事角度',
    complexity: '基础',
    complexityColor: '#22c55e',
    available: false,
  },
  {
    category: 'AI 客服',
    categoryColor: '#22c55e',
    name: 'FAQ 知识库结构化提取',
    trigger: '知识库初始化 / 季度更新',
    input: '历史客服工单 / 产品文档',
    output: '标准化 Q&A 对列表',
    complexity: '系统级',
    complexityColor: '#a78bfa',
    available: false,
  },
]

const FAQS = [
  {
    q: '这些提示词可以直接复制使用吗？',
    a: '可以，但效果会因你的业务场景而不同。提示词模板里有需要替换的占位符（用[方括号]标注），以及针对不同产品类别的调整建议。建议先按照自己的业务信息填充占位符，手动测试3-5次，再考虑接入自动化。',
  },
  {
    q: '这些提示词基于哪个模型？',
    a: '模板设计时优先考虑主流模型的通用性（GPT-4系列、Claude系列）。我们会标注某些提示词对特定模型效果更好的情况。提示词工程本身的可迁移性比模型锁定更重要——你应该能在换模型后以较小的成本迁移。',
  },
  {
    q: '提示词里的输出格式要求有多重要？',
    a: '非常重要，尤其是当你计划把输出接入自动化流程时。不规范的输出格式会破坏自动化链条。我们的模板里都包含明确的输出格式要求（通常是JSON结构或特定的列表格式），这是为了让输出可被程序处理，而不只是供人阅读。',
  },
  {
    q: '我们可以提交自己的提示词模板吗？',
    a: '可以。我们正在建立一个操作者贡献机制——如果你有在实际业务中验证过的提示词模板，可以通过联系我们提交。经过验证和格式化后，我们会收录到库里，并标注贡献者。',
  },
  {
    q: '提示词库里的内容和咨询服务有什么关系？',
    a: '提示词库提供的是可以自己用的通用模板。咨询服务提供的是针对你的业务流程定制的提示词系统设计——包括触发机制、数据接口、人工审核节点、监控方案。两者是互补关系，不是替代关系。',
  },
  {
    q: '多少个提示词算够用？',
    a: '对大多数出口工厂来说，5-8个核心提示词嵌入workflow，比拥有100个临时使用的提示词要有价值得多。质量和嵌入深度比数量更重要。我们建议从最高频的3个任务开始，深度优化这3个，再扩展。',
  },
]

export default function PromptsPage() {
  return (
    <div
      style={{
        background: '#08080a',
        color: '#e4e2dc',
        minHeight: '100vh',
        fontFamily: "'Instrument Sans', 'Noto Sans SC', sans-serif",
      } as React.CSSProperties}
    >
      <Nav />

      {/* ── 1. Hero ── */}
      <section
        style={{
          maxWidth: 960,
          margin: '0 auto',
          padding: '120px 32px 80px',
        } as React.CSSProperties}
      >
        <Label>Workflow Prompt Library · 操作级提示词库</Label>
        <h1
          style={{
            fontSize: 'clamp(32px, 5vw, 56px)',
            fontWeight: 700,
            lineHeight: 1.1,
            margin: '0 0 24px',
            letterSpacing: '-0.02em',
          } as React.CSSProperties}
        >
          提示词不是技巧，<br />是 workflow 的一部分
        </h1>
        <p
          style={{
            fontSize: 18,
            color: '#888',
            maxWidth: 640,
            lineHeight: 1.8,
            margin: '0 0 24px',
          } as React.CSSProperties}
        >
          一个单独的提示词能让你临时完成一件事。嵌入 workflow 的提示词能让你系统性地完成一类事。Makox
          的 Prompt 库不是技巧合集，而是可以直接插入业务流程的操作模板——每个提示词都标注了在
          workflow 里的触发点、输入格式和预期输出结构。
        </p>
        <p
          style={{
            fontSize: 15,
            color: '#555',
            lineHeight: 1.8,
            maxWidth: 620,
            fontStyle: 'italic',
            borderLeft: '2px solid #f59e0b',
            paddingLeft: 16,
            margin: '0 0 48px',
          } as React.CSSProperties}
        >
          "会写提示词是起点，懂得把提示词接入触发规则、定义输入输出格式、设计回退逻辑，才是
          AI-native 运营。"
        </p>

        {/* 4-stat bar */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: 1,
            background: '#141416',
          } as React.CSSProperties}
        >
          {[
            { v: '5 个', l: '业务方向' },
            { v: '直接嵌入', l: '可直接嵌入 Workflow' },
            { v: '全标注', l: '标注触发条件' },
            { v: '持续更新', l: '持续更新' },
          ].map((s) => (
            <div
              key={s.v}
              style={{
                background: '#0c0c0e',
                padding: '28px 24px',
              } as React.CSSProperties}
            >
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 26,
                  fontWeight: 700,
                  color: '#f59e0b',
                  marginBottom: 8,
                } as React.CSSProperties}
              >
                {s.v}
              </div>
              <div style={{ fontSize: 12, color: '#888', lineHeight: 1.4 } as React.CSSProperties}>
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* ── 2. Prompt categories ── */}
      <section
        style={{
          maxWidth: 960,
          margin: '0 auto',
          padding: '80px 32px',
        } as React.CSSProperties}
      >
        <Label>五大业务方向</Label>
        <h2
          style={{
            fontSize: 'clamp(22px, 3vw, 34px)',
            fontWeight: 700,
            marginBottom: 8,
            letterSpacing: '-0.02em',
          } as React.CSSProperties}
        >
          覆盖出口制造业全流程的提示词分类
        </h2>
        <p style={{ fontSize: 14, color: '#888', marginBottom: 40, maxWidth: 560 } as React.CSSProperties}>
          每个分类下的模板都有对应的 workflow 触发场景。提示词是系统的一部分，不是孤立的技巧。
        </p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 2,
          } as React.CSSProperties}
        >
          {CATEGORIES.map((cat) => (
            <div
              key={cat.name}
              style={{
                background: '#0c0c0e',
                border: '1px solid #141416',
                borderLeft: `3px solid ${cat.color}`,
                padding: '28px 24px',
              } as React.CSSProperties}
            >
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11,
                  color: cat.color,
                  letterSpacing: '2px',
                  textTransform: 'uppercase' as const,
                  marginBottom: 10,
                } as React.CSSProperties}
              >
                {cat.name}
              </div>
              <p
                style={{
                  fontSize: 13,
                  color: '#888',
                  lineHeight: 1.7,
                  margin: '0 0 20px',
                } as React.CSSProperties}
              >
                {cat.positioning}
              </p>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none' } as React.CSSProperties}>
                {cat.templates.map((t) => (
                  <li
                    key={t}
                    style={{
                      fontSize: 13,
                      color: '#e4e2dc',
                      lineHeight: 1.6,
                      paddingLeft: 14,
                      position: 'relative',
                      marginBottom: 6,
                    } as React.CSSProperties}
                  >
                    <span
                      style={{
                        position: 'absolute',
                        left: 0,
                        top: '0.5em',
                        width: 5,
                        height: 5,
                        borderRadius: '50%',
                        background: cat.color,
                        opacity: 0.6,
                      } as React.CSSProperties}
                    />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* ── 3. Featured prompts ── */}
      <section
        style={{
          maxWidth: 960,
          margin: '0 auto',
          padding: '80px 32px',
        } as React.CSSProperties}
      >
        <Label>精选模板 · Featured Prompts</Label>
        <h2
          style={{
            fontSize: 'clamp(22px, 3vw, 34px)',
            fontWeight: 700,
            marginBottom: 8,
            letterSpacing: '-0.02em',
          } as React.CSSProperties}
        >
          8 个可直接用于业务的提示词模板
        </h2>
        <p style={{ fontSize: 14, color: '#888', marginBottom: 40, maxWidth: 580 } as React.CSSProperties}>
          每个模板都标注了触发条件、输入格式和预期输出结构。设计假设有真实的 workflow 在调用它。
        </p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: 2,
          } as React.CSSProperties}
        >
          {FEATURED_PROMPTS.map((p) => (
            <div
              key={p.name}
              style={{
                background: '#0c0c0e',
                border: '1px solid #141416',
                padding: '28px',
              } as React.CSSProperties}
            >
              {/* Category + complexity */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 14,
                  flexWrap: 'wrap' as const,
                  gap: 8,
                } as React.CSSProperties}
              >
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 10,
                    color: p.categoryColor,
                    letterSpacing: '2px',
                    textTransform: 'uppercase' as const,
                    background: `${p.categoryColor}14`,
                    padding: '3px 8px',
                    border: `1px solid ${p.categoryColor}30`,
                  } as React.CSSProperties}
                >
                  {p.category}
                </span>
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 10,
                    color: p.complexityColor,
                    letterSpacing: '1px',
                  } as React.CSSProperties}
                >
                  {p.complexity}
                </span>
              </div>

              {/* Template name */}
              <div
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  color: '#e4e2dc',
                  marginBottom: 18,
                  lineHeight: 1.4,
                } as React.CSSProperties}
              >
                {p.name}
              </div>

              {/* Trigger / Input / Output */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 10,
                  marginBottom: 22,
                } as React.CSSProperties}
              >
                <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: 10 } as React.CSSProperties}>
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 10,
                      color: '#444',
                      letterSpacing: '1px',
                      textTransform: 'uppercase' as const,
                      paddingTop: 2,
                    } as React.CSSProperties}
                  >
                    触发条件
                  </span>
                  <span style={{ fontSize: 13, color: '#888', lineHeight: 1.5 } as React.CSSProperties}>
                    {p.trigger}
                  </span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: 10 } as React.CSSProperties}>
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 10,
                      color: '#444',
                      letterSpacing: '1px',
                      textTransform: 'uppercase' as const,
                      paddingTop: 2,
                    } as React.CSSProperties}
                  >
                    输入格式
                  </span>
                  <span style={{ fontSize: 13, color: '#888', lineHeight: 1.5 } as React.CSSProperties}>
                    {p.input}
                  </span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: 10 } as React.CSSProperties}>
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 10,
                      color: '#444',
                      letterSpacing: '1px',
                      textTransform: 'uppercase' as const,
                      paddingTop: 2,
                    } as React.CSSProperties}
                  >
                    输出结构
                  </span>
                  <span style={{ fontSize: 13, color: '#888', lineHeight: 1.5 } as React.CSSProperties}>
                    {p.output}
                  </span>
                </div>
              </div>

              {/* CTA */}
              {p.available ? (
                <Link
                  href="/contact"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 11,
                    color: '#f59e0b',
                    textDecoration: 'none',
                    letterSpacing: '1px',
                    borderBottom: '1px solid #f59e0b30',
                    paddingBottom: 2,
                  } as React.CSSProperties}
                >
                  → 查看模板
                </Link>
              ) : (
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 11,
                    color: '#444',
                    letterSpacing: '1px',
                  } as React.CSSProperties}
                >
                  → 即将发布
                </span>
              )}
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* ── 4. Editorial: 提示词工程 vs 运营设计 ── */}
      <section
        style={{
          maxWidth: 720,
          margin: '0 auto',
          padding: '80px 32px',
        } as React.CSSProperties}
      >
        <Label>提示词工程 vs 运营设计</Label>
        <h2
          style={{
            fontSize: 'clamp(24px, 3.5vw, 38px)',
            fontWeight: 700,
            marginBottom: 48,
            letterSpacing: '-0.02em',
          } as React.CSSProperties}
        >
          两件不同的事
        </h2>

        {/* Para 1 */}
        <div style={{ marginBottom: 40 } as React.CSSProperties}>
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11,
              color: '#f59e0b',
              letterSpacing: '3px',
              textTransform: 'uppercase' as const,
              marginBottom: 14,
            } as React.CSSProperties}
          >
            提示词工程是技术能力
          </div>
          <p style={{ fontSize: 16, color: '#888', lineHeight: 1.9, margin: 0 } as React.CSSProperties}>
            提示词工程关注的是如何让模型产生更准确的输出：如何构建 system prompt、如何做 few-shot
            示例、如何控制输出格式。这是一种可以被学习和优化的技术技能，在 AI 工程师和技术产品经理里越来越普遍。
          </p>
        </div>

        <div
          style={{
            height: 1,
            background: '#141416',
            margin: '0 0 40px',
          } as React.CSSProperties}
        />

        {/* Para 2 */}
        <div style={{ marginBottom: 40 } as React.CSSProperties}>
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11,
              color: '#f59e0b',
              letterSpacing: '3px',
              textTransform: 'uppercase' as const,
              marginBottom: 14,
            } as React.CSSProperties}
          >
            运营设计是业务能力
          </div>
          <p style={{ fontSize: 16, color: '#888', lineHeight: 1.9, margin: 0 } as React.CSSProperties}>
            运营设计关注的是：这个提示词在什么时候被触发、由什么输入激活、产出什么格式、下一步交给谁处理、出错时怎么降级。运营设计不需要懂模型原理，但需要深度理解业务流程——这是工厂运营经理比
            AI 工程师更懂的部分。
          </p>
        </div>

        <div
          style={{
            height: 1,
            background: '#141416',
            margin: '0 0 40px',
          } as React.CSSProperties}
        />

        {/* Para 3 */}
        <div>
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11,
              color: '#f59e0b',
              letterSpacing: '3px',
              textTransform: 'uppercase' as const,
              marginBottom: 14,
            } as React.CSSProperties}
          >
            两者结合，才是可运转的 AI 系统
          </div>
          <p style={{ fontSize: 16, color: '#888', lineHeight: 1.9, margin: 0 } as React.CSSProperties}>
            Makox 的 Prompt 库不只是提示词集合，而是"提示词 + 触发条件 + 输入格式 + 输出结构 +
            回退逻辑"的完整运营模板。每一个模板的设计都假设有一个真实的 workflow 在调用它，而不是一个人在聊天窗口里手动复制粘贴。
          </p>
        </div>
      </section>

      <Divider />

      {/* ── 5. Recommended workflow stack ── */}
      <section
        style={{
          maxWidth: 960,
          margin: '0 auto',
          padding: '80px 32px',
        } as React.CSSProperties}
      >
        <Label>使用方式</Label>
        <h2
          style={{
            fontSize: 'clamp(22px, 3vw, 34px)',
            fontWeight: 700,
            marginBottom: 8,
            letterSpacing: '-0.02em',
          } as React.CSSProperties}
        >
          Prompt 库的推荐使用方式
        </h2>
        <p style={{ fontSize: 14, color: '#888', marginBottom: 40 } as React.CSSProperties}>
          按就绪度分阶段使用，不要一次全上
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 } as React.CSSProperties}>
          {/* Tier 1 */}
          <div
            style={{
              background: '#0c0c0e',
              border: '1px solid #141416',
              borderLeft: '3px solid #f59e0b',
              padding: '32px 36px',
            } as React.CSSProperties}
          >
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 14, flexWrap: 'wrap' as const } as React.CSSProperties}>
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11,
                  color: '#f59e0b',
                  letterSpacing: '2px',
                  textTransform: 'uppercase' as const,
                } as React.CSSProperties}
              >
                第一阶段
              </span>
              <span style={{ fontSize: 17, fontWeight: 700, color: '#e4e2dc' } as React.CSSProperties}>
                单点试用
              </span>
            </div>
            <p style={{ fontSize: 15, color: '#888', lineHeight: 1.8, margin: 0, maxWidth: 680 } as React.CSSProperties}>
              选一个高频重复的任务（如询盘回复、产品描述翻译），用单个提示词替代人工。验证质量是否可接受，收集失败案例。不要接入自动化，手动运行。
            </p>
          </div>

          {/* Tier 2 */}
          <div
            style={{
              background: '#0c0c0e',
              border: '1px solid #141416',
              borderLeft: '3px solid #3b82f6',
              padding: '32px 36px',
            } as React.CSSProperties}
          >
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 14, flexWrap: 'wrap' as const } as React.CSSProperties}>
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11,
                  color: '#3b82f6',
                  letterSpacing: '2px',
                  textTransform: 'uppercase' as const,
                } as React.CSSProperties}
              >
                第二阶段
              </span>
              <span style={{ fontSize: 17, fontWeight: 700, color: '#e4e2dc' } as React.CSSProperties}>
                流程嵌入
              </span>
            </div>
            <p style={{ fontSize: 15, color: '#888', lineHeight: 1.8, margin: 0, maxWidth: 680 } as React.CSSProperties}>
              把验证过的提示词嵌入触发机制（飞书机器人 / Zapier / Make）。定义输入来源和输出去向。建立人工审核节点。开始积累真实运行数据。
            </p>
          </div>

          {/* Tier 3 */}
          <div
            style={{
              background: '#0c0c0e',
              border: '1px solid #141416',
              borderLeft: '3px solid #22c55e',
              padding: '32px 36px',
            } as React.CSSProperties}
          >
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 14, flexWrap: 'wrap' as const } as React.CSSProperties}>
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11,
                  color: '#22c55e',
                  letterSpacing: '2px',
                  textTransform: 'uppercase' as const,
                } as React.CSSProperties}
              >
                第三阶段
              </span>
              <span style={{ fontSize: 17, fontWeight: 700, color: '#e4e2dc' } as React.CSSProperties}>
                系统联动
              </span>
            </div>
            <p style={{ fontSize: 15, color: '#888', lineHeight: 1.8, margin: 0, maxWidth: 680 } as React.CSSProperties}>
              多个提示词形成链式工作流。输出作为下一个提示词的输入。建立监控和回退机制。这个阶段需要有清晰的 workflow 设计文档支撑。
            </p>
          </div>
        </div>

        <p
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 12,
            color: '#444',
            marginTop: 20,
            lineHeight: 1.6,
          } as React.CSSProperties}
        >
          跳过第一阶段直接做第三阶段，是 AI 项目失败的最常见路径之一。
        </p>
      </section>

      <Divider />

      {/* ── 6. FAQ ── */}
      <section
        style={{
          maxWidth: 960,
          margin: '0 auto',
          padding: '80px 32px',
        } as React.CSSProperties}
      >
        <Label>常见问题</Label>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            background: '#141416',
          } as React.CSSProperties}
        >
          {FAQS.map((f) => (
            <div
              key={f.q}
              style={{
                background: '#0c0c0e',
                padding: '28px 32px',
              } as React.CSSProperties}
            >
              <div
                style={{
                  fontSize: 15,
                  fontWeight: 700,
                  color: '#e4e2dc',
                  marginBottom: 12,
                } as React.CSSProperties}
              >
                {f.q}
              </div>
              <p style={{ fontSize: 14, color: '#888', lineHeight: 1.75, margin: 0 } as React.CSSProperties}>
                {f.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* ── 7. CTA ── */}
      <section
        style={{
          maxWidth: 960,
          margin: '0 auto',
          padding: '80px 32px 100px',
        } as React.CSSProperties}
      >
        <div
          style={{
            background: '#0c0c0e',
            border: '1px solid #141416',
            padding: '64px 48px',
            textAlign: 'center' as const,
          } as React.CSSProperties}
        >
          <Label>下一步</Label>
          <h2
            style={{
              fontSize: 'clamp(24px, 4vw, 40px)',
              fontWeight: 700,
              margin: '0 0 16px',
              letterSpacing: '-0.02em',
            } as React.CSSProperties}
          >
            想把提示词嵌入你的 workflow？
          </h2>
          <p
            style={{
              fontSize: 16,
              color: '#888',
              maxWidth: 540,
              margin: '0 auto 40px',
              lineHeight: 1.8,
            } as React.CSSProperties}
          >
            提示词本身不难，难的是 workflow 设计和自动化接入。我们提供从提示词设计到 Agent
            部署的完整服务，也可以只做诊断，告诉你从哪里开始。
          </p>
          <Link
            href="/contact"
            style={{
              display: 'inline-block',
              background: '#f59e0b',
              color: '#08080a',
              padding: '16px 40px',
              fontWeight: 700,
              fontSize: 14,
              letterSpacing: '1px',
              textDecoration: 'none',
              fontFamily: "'JetBrains Mono', monospace",
            } as React.CSSProperties}
          >
            预约咨询 →
          </Link>
        </div>
      </section>

      {/* Footer links */}
      <div
        style={{
          borderTop: '1px solid #141416',
          padding: '28px 32px',
          maxWidth: 960,
          margin: '0 auto 48px',
        } as React.CSSProperties}
      >
        <div
          style={{
            display: 'flex',
            gap: 24,
            flexWrap: 'wrap' as const,
          } as React.CSSProperties}
        >
          <Link
            href="/solutions/workflow"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 12,
              color: '#444',
              textDecoration: 'none',
              letterSpacing: '1px',
            } as React.CSSProperties}
          >
            Workflow 治理 →
          </Link>
          <Link
            href="/solutions/trade"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 12,
              color: '#444',
              textDecoration: 'none',
              letterSpacing: '1px',
            } as React.CSSProperties}
          >
            外贸跟单自动化 →
          </Link>
          <Link
            href="/guides"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 12,
              color: '#444',
              textDecoration: 'none',
              letterSpacing: '1px',
            } as React.CSSProperties}
          >
            操作指南 →
          </Link>
          <Link
            href="/blog"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 12,
              color: '#444',
              textDecoration: 'none',
              letterSpacing: '1px',
            } as React.CSSProperties}
          >
            博客 →
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  )
}
