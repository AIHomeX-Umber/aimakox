import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: '实施指南库 · Makox',
  description:
    '不是理论框架，是可以抄作业的实施路径。Makox 实施指南覆盖 AI workflow 搭建、飞书 AI-ready 配置、SOP 结构化、数据治理入门——出口制造企业的 AI 落地手册。',
  openGraph: {
    title: '制造业 AI 实施指南 · Makox',
    description:
      'AI workflow 怎么搭、哪个部门先上 Agent、数据为什么不能留在 WhatsApp——制造企业 AI 落地的具体路径，不是方法论。',
    type: 'website',
  },
}

// ─── helpers ───────────────────────────────────────────────────────────────

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        paddingLeft: '16px',
        borderLeft: '2px solid #f59e0b',
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: '11px',
        fontWeight: 500,
        letterSpacing: '3px',
        textTransform: 'uppercase' as const,
        color: '#f59e0b',
        lineHeight: 1,
      } as React.CSSProperties}
    >
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

// ─── data ───────────────────────────────────────────────────────────────────

const CATEGORIES = [
  {
    name: 'Workflow 设计',
    color: '#f59e0b',
    desc: '从流程诊断到 AI-native 重构的方法论与实操步骤。',
    guides: [
      '如何画一张 AI 可接管的流程地图',
      '外贸跟单 workflow 重构：7 步操作手册',
      '识别 workflow 断裂点的 5 个信号',
    ],
  },
  {
    name: '数据治理',
    color: '#3b82f6',
    desc: '让 AI 能读懂你的业务数据，从基础数据结构化开始。',
    guides: [
      '什么数据不能留在 WhatsApp 里',
      '如何建立外贸报价的版本控制系统',
      'ERP 数据不可信的六个症状',
    ],
  },
  {
    name: 'Agent 部署',
    color: '#22c55e',
    desc: '从 Agent 选型到上线监控，避开常见的部署陷阱。',
    guides: [
      '哪个部门应该最先引入 Agent',
      'Agent 边界设计：什么时候必须升级人工',
      'Agent 上线后的监控清单',
    ],
  },
  {
    name: '飞书 AI-Ready 配置',
    color: '#a78bfa',
    desc: '把飞书从 IM 工具变成 AI 可以读取和触发的业务中台。',
    guides: [
      '飞书 AI-ready 配置：从 IM 到数据中台',
      '飞书审批流 + Webhook：打通 ERP 的实操步骤',
      '飞书知识库 SOP 结构化最佳实践',
    ],
  },
  {
    name: '内容与出口',
    color: '#ef4444',
    desc: '出口工厂的内容 AI 实施：从产品参数库到多语言分发。',
    guides: [
      '产品参数库：AI 内容生产的数据基础',
      'Amazon Listing AI 优化：不只是写作，是结构化',
      '多语言内容分发：格式 vs 风格的区别',
    ],
  },
]

const FEATURED_GUIDES = [
  {
    category: 'Workflow',
    color: '#f59e0b',
    title: '如何搭建你的第一条工厂 AI Workflow',
    desc: '从诊断现有流程到识别 AI 接入点，再到设计触发规则和升级逻辑，这是一条外贸制造企业可以直接参照的 AI workflow 搭建路径。',
    time: '20 min',
    published: true,
  },
  {
    category: '飞书',
    color: '#a78bfa',
    title: '如何让飞书变成 AI-ready 的业务中台',
    desc: '飞书买了之后怎么用才能让 AI 读懂你的业务数据？从文档结构化到审批流 Webhook，一步步配置。',
    time: '15 min',
    published: true,
  },
  {
    category: 'Agent',
    color: '#22c55e',
    title: '哪个部门应该最先引入 Agent',
    desc: '不是看哪个部门最愿意，而是看哪个部门的任务重复度最高、数据结构化程度最好、出错成本最低。有一套可用的决策框架。',
    time: '10 min',
    published: true,
  },
  {
    category: '数据',
    color: '#3b82f6',
    title: '什么数据不能留在 WhatsApp 里',
    desc: '外贸跟单最危险的数据存储习惯列表，以及把非结构化沟通数据系统性迁移出来的实操步骤。',
    time: '12 min',
    published: true,
  },
  {
    category: 'Workflow',
    color: '#f59e0b',
    title: 'SOP 怎么写才能让 AI 真正能用',
    desc: 'SOP 不是写给人看的文档就够了，还需要满足 AI 可读取、可触发、可验证三个条件。这里有一个标准的 SOP 写作模板。',
    time: '18 min',
    published: false,
  },
  {
    category: '内容',
    color: '#ef4444',
    title: '产品参数库：AI 内容生产的数据基础',
    desc: '在让 AI 写产品描述之前，你需要一个结构化的产品参数库。这是从零搭建参数库的操作手册。',
    time: '15 min',
    published: false,
  },
  {
    category: 'Agent',
    color: '#22c55e',
    title: 'Agent 边界设计：什么时候必须升级人工',
    desc: 'Agent 边界设计是部署成功的关键。哪类决策不能让 Agent 自主完成，升级规则如何设计，出错时的降级机制。',
    time: '12 min',
    published: false,
  },
  {
    category: '数据',
    color: '#3b82f6',
    title: 'ERP 数据不可信的六个症状',
    desc: '如果你的 ERP 里的数据没有人相信，AI 只会把不可信放大。这六个症状帮你诊断 ERP 数据质量问题。',
    time: '8 min',
    published: false,
  },
]

const BLOCKERS = [
  {
    n: '01',
    title: '流程没有文档化就开始自动化',
    body: '自动化了一个没有人真正理解的流程，结果是快速、系统性地犯错。文档化是自动化的前提，不是可选项。',
  },
  {
    n: '02',
    title: '用错误的工具做正确的事',
    body: '飞书做库存管理，Excel 做 CRM，WhatsApp 做工单系统。工具错配的成本不只是效率损失，还有数据治理的噩梦。',
  },
  {
    n: '03',
    title: 'SOP 写了但没有人维护',
    body: '过时的 SOP 比没有 SOP 更危险，因为它是错的还有人相信它。SOP 需要版本控制和定期审查机制，而不只是一次性写完。',
  },
  {
    n: '04',
    title: '数据在 AI 接入前没有做信任度诊断',
    body: '把不可信的数据接入 AI 系统，会得到不可信的 AI 输出，而且这个问题更难发现。数据信任度诊断应该先于任何 AI 部署。',
  },
  {
    n: '05',
    title: '从最复杂的流程开始，而不是从最痛的问题开始',
    body: '最复杂的流程通常也是最难自动化的。应该从高频、重复、低错误成本的任务开始，积累信心和数据后再升级。',
  },
  {
    n: '06',
    title: 'Agent 上线后没有监控机制',
    body: 'AI 不是"部署好就完事了"的系统。没有监控的 Agent 会在无声无息中退化——输出质量下降，覆盖范围缩小，最终被团队放弃使用。',
  },
]

const LEVELS = [
  {
    code: 'L0',
    color: '#ef4444',
    label: '基础缺失',
    body: '流程完全在人脑里，无数字记录，数据不可读。首先要做的是数字化基础，而不是 AI。',
  },
  {
    code: 'L1',
    color: '#f59e0b',
    label: '工具有了，用不起来',
    body: '买了 ERP/CRM/飞书，但没有使用规范，数据不可信。先治理，再考虑 AI。',
  },
  {
    code: 'L2',
    color: '#3b82f6',
    label: '部分标准化',
    body: '关键流程有 SOP，核心数据可信。可以开始 AI 试点，但要选择最成熟的流程。',
  },
  {
    code: 'L3',
    color: '#22c55e',
    label: 'AI 辅助运转',
    body: 'Agent 已处理部分重复任务，团队开始习惯人机协作。可以扩展 Agent 覆盖范围。',
  },
  {
    code: 'L4',
    color: '#a78bfa',
    label: 'AI 默认工作方式',
    body: 'AI 是默认工具，人专注判断和创意。持续优化而非扩张。',
  },
]

const FAQS = [
  {
    q: '这些指南是免费的吗？',
    a: '所有发布的指南内容都是公开免费阅读的。我们不做付费知识墙——如果内容有价值，它本身就是最好的展示。付费的部分是定制化的咨询和培训服务，而不是内容访问权限。',
  },
  {
    q: '指南里的建议适合我们行业吗？',
    a: '这些指南主要针对出口制造业（外贸、卫浴、家具、智能硬件等）和 B2B 服务企业。如果你的业务和这两类有明显的重叠，大部分建议可以直接参照。如果差距较大，可以把指南当作思路参考，但具体执行需要结合你的行业特点调整。',
  },
  {
    q: '可以直接按照指南自己实施，不需要 Makox 吗？',
    a: '完全可以，这也是我们希望的。指南里的内容应该足够具体，让一个有足够推动力的内部负责人可以独立执行。如果执行过程中卡住，或者需要更快的实施速度，再来找我们咨询。',
  },
  {
    q: '指南多久更新一次？',
    a: '没有固定周期，但我们会在有新的实施经验或发现之前的建议存在问题时更新。每个指南都有"最后更新"标记。我们不做"保持新鲜感"的更新，只做"有新信息要补充"的更新。',
  },
  {
    q: '可以在内部分享这些指南吗？',
    a: '可以，内部传阅不受限制。如果要公开引用或转载，需要注明来源。',
  },
  {
    q: '我们想要一份针对自己公司情况的定制指南，可以吗？',
    a: '可以，这是我们咨询服务的一部分。标准指南覆盖的是普遍情况，定制指南针对的是你的具体流程、具体数据现状、具体团队结构。预约诊断后，我们会评估是否需要定制化建议，以及工作量。',
  },
]

// ─── page ───────────────────────────────────────────────────────────────────

export default function GuidesPage() {
  return (
    <div
      style={{
        background: '#08080a',
        color: '#e4e2dc',
        fontFamily: "'Instrument Sans', 'Noto Sans SC', sans-serif",
        minHeight: '100vh',
      } as React.CSSProperties}
    >
      <Nav />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          padding: 'clamp(64px, 10vw, 120px) 24px clamp(48px, 6vw, 80px)',
        } as React.CSSProperties}
      >
        <Label>Implementation Guides · 实施指南</Label>

        <h1
          style={{
            marginTop: 28,
            fontSize: 'clamp(28px, 4.5vw, 52px)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            lineHeight: 1.15,
            color: '#e4e2dc',
          } as React.CSSProperties}
        >
          不是方法论，是能抄作业的实施路径
        </h1>

        <p
          style={{
            marginTop: 20,
            maxWidth: 680,
            fontSize: 'clamp(15px, 1.8vw, 18px)',
            lineHeight: 1.75,
            color: '#888',
          } as React.CSSProperties}
        >
          大多数 AI 实施建议都在正确但无用的抽象层面——"企业需要数据治理""AI
          要从小处切入"。Makox 的指南从具体问题出发：这个工厂的询盘流程在第几步断裂，这个团队的
          SOP 应该先从哪里写起。
        </p>

        <blockquote
          style={{
            marginTop: 28,
            paddingLeft: 20,
            borderLeft: '2px solid #f59e0b',
            fontStyle: 'italic',
            color: '#888',
            fontSize: 'clamp(14px, 1.5vw, 16px)',
            lineHeight: 1.7,
          } as React.CSSProperties}
        >
          "一个好的实施指南应该让读者能说'这说的就是我们'，而不是'这说的是所有人'。"
        </blockquote>

        {/* stat bar */}
        <div
          style={{
            marginTop: 48,
            display: 'flex',
            flexWrap: 'wrap' as const,
            gap: 0,
            borderTop: '1px solid #141416',
            borderBottom: '1px solid #141416',
          } as React.CSSProperties}
        >
          {['6 个指南方向', '操作者视角', '持续更新', '可直接落地'].map((s, i) => (
            <div
              key={i}
              style={{
                flex: '1 1 140px',
                padding: '20px 24px',
                borderRight: i < 3 ? '1px solid #141416' : 'none',
              } as React.CSSProperties}
            >
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 13,
                  color: '#f59e0b',
                  fontWeight: 600,
                } as React.CSSProperties}
              >
                {s}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* ── CATEGORIES ───────────────────────────────────────────────────── */}
      <section
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          padding: 'clamp(48px, 6vw, 80px) 24px',
        } as React.CSSProperties}
      >
        <Label>Guide Categories · 指南分类</Label>
        <h2
          style={{
            marginTop: 20,
            fontSize: 'clamp(20px, 2.8vw, 30px)',
            fontWeight: 700,
            letterSpacing: '-0.01em',
            color: '#e4e2dc',
          } as React.CSSProperties}
        >
          6 个实施方向，从哪个痛点进入都有路径
        </h2>

        <div
          style={{
            marginTop: 36,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 16,
          } as React.CSSProperties}
        >
          {CATEGORIES.map((cat) => (
            <div
              key={cat.name}
              style={{
                background: '#0c0c0e',
                border: '1px solid #141416',
                borderLeft: `3px solid ${cat.color}`,
                padding: '24px 24px 24px 22px',
                borderRadius: 4,
              } as React.CSSProperties}
            >
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: '2px',
                  textTransform: 'uppercase' as const,
                  color: cat.color,
                  marginBottom: 10,
                } as React.CSSProperties}
              >
                {cat.name}
              </div>
              <p
                style={{
                  fontSize: 13,
                  color: '#888',
                  lineHeight: 1.6,
                  marginBottom: 20,
                } as React.CSSProperties}
              >
                {cat.desc}
              </p>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column' as const,
                  gap: 8,
                } as React.CSSProperties}
              >
                {cat.guides.map((g) => (
                  <li
                    key={g}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 8,
                      fontSize: 13,
                      color: '#666',
                      lineHeight: 1.5,
                    } as React.CSSProperties}
                  >
                    <span
                      style={{ color: cat.color, flexShrink: 0, marginTop: 1 } as React.CSSProperties}
                    >
                      →
                    </span>
                    {g}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* ── FEATURED GUIDES ──────────────────────────────────────────────── */}
      <section
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          padding: 'clamp(48px, 6vw, 80px) 24px',
        } as React.CSSProperties}
      >
        <Label>Featured Guides · 精选指南</Label>
        <h2
          style={{
            marginTop: 20,
            fontSize: 'clamp(20px, 2.8vw, 30px)',
            fontWeight: 700,
            letterSpacing: '-0.01em',
            color: '#e4e2dc',
            marginBottom: 36,
          } as React.CSSProperties}
        >
          8 篇具体指南，每一篇都指向一个实际的操作问题
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))',
            gap: 16,
          } as React.CSSProperties}
        >
          {FEATURED_GUIDES.map((g, i) => (
            <div
              key={i}
              style={{
                background: '#0c0c0e',
                border: '1px solid #141416',
                padding: 28,
                borderRadius: 4,
                display: 'flex',
                flexDirection: 'column' as const,
                gap: 12,
              } as React.CSSProperties}
            >
              {/* top row */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap' as const,
                  gap: 8,
                } as React.CSSProperties}
              >
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 10,
                    fontWeight: 600,
                    letterSpacing: '2px',
                    textTransform: 'uppercase' as const,
                    color: g.color,
                    background: `${g.color}18`,
                    padding: '3px 8px',
                    borderRadius: 2,
                  } as React.CSSProperties}
                >
                  {g.category}
                </span>
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 11,
                    color: '#444',
                  } as React.CSSProperties}
                >
                  {g.time}
                </span>
              </div>

              {/* title */}
              <h3
                style={{
                  fontSize: 'clamp(15px, 1.6vw, 17px)',
                  fontWeight: 600,
                  color: '#e4e2dc',
                  lineHeight: 1.45,
                  letterSpacing: '-0.01em',
                } as React.CSSProperties}
              >
                {g.title}
              </h3>

              {/* desc */}
              <p
                style={{
                  fontSize: 13,
                  color: '#666',
                  lineHeight: 1.65,
                  flexGrow: 1,
                } as React.CSSProperties}
              >
                {g.desc}
              </p>

              {/* cta */}
              <div style={{ marginTop: 4 } as React.CSSProperties}>
                {g.published ? (
                  <span
                    style={{
                      fontSize: 13,
                      color: '#f59e0b',
                      fontWeight: 500,
                      cursor: 'default',
                    } as React.CSSProperties}
                  >
                    → 查看指南
                  </span>
                ) : (
                  <span
                    style={{
                      fontSize: 13,
                      color: '#444',
                      fontFamily: "'JetBrains Mono', monospace",
                    } as React.CSSProperties}
                  >
                    → 即将发布
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* ── BLOCKERS ─────────────────────────────────────────────────────── */}
      <section
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          padding: 'clamp(48px, 6vw, 80px) 24px',
        } as React.CSSProperties}
      >
        <Label>Common Blockers · 常见卡点</Label>
        <h2
          style={{
            marginTop: 20,
            fontSize: 'clamp(20px, 2.8vw, 30px)',
            fontWeight: 700,
            letterSpacing: '-0.01em',
            color: '#e4e2dc',
            marginBottom: 8,
          } as React.CSSProperties}
        >
          工厂通常在哪里卡住
        </h2>
        <p
          style={{
            fontSize: 15,
            color: '#666',
            marginBottom: 40,
            lineHeight: 1.6,
          } as React.CSSProperties}
        >
          不是因为缺少技术，是因为在错误的时机做了正确的事。
        </p>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column' as const,
            gap: 0,
            border: '1px solid #141416',
            borderRadius: 4,
            overflow: 'hidden',
          } as React.CSSProperties}
        >
          {BLOCKERS.map((b, i) => (
            <div
              key={b.n}
              style={{
                display: 'grid',
                gridTemplateColumns: '64px 1fr',
                borderBottom: i < BLOCKERS.length - 1 ? '1px solid #141416' : 'none',
                background: '#0c0c0e',
              } as React.CSSProperties}
            >
              <div
                style={{
                  padding: '24px 0 24px 24px',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 22,
                  fontWeight: 700,
                  color: '#1e1e1e',
                  letterSpacing: '-0.02em',
                  lineHeight: 1,
                  paddingTop: 28,
                } as React.CSSProperties}
              >
                {b.n}
              </div>
              <div style={{ padding: '24px 28px 24px 8px' } as React.CSSProperties}>
                <div
                  style={{
                    fontSize: 'clamp(14px, 1.5vw, 16px)',
                    fontWeight: 600,
                    color: '#e4e2dc',
                    marginBottom: 8,
                    lineHeight: 1.4,
                  } as React.CSSProperties}
                >
                  {b.title}
                </div>
                <p
                  style={{
                    fontSize: 13,
                    color: '#666',
                    lineHeight: 1.65,
                    margin: 0,
                  } as React.CSSProperties}
                >
                  {b.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* ── READINESS CHECKLIST ──────────────────────────────────────────── */}
      <section
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          padding: 'clamp(48px, 6vw, 80px) 24px',
        } as React.CSSProperties}
      >
        <Label>Readiness Assessment · 就绪度评估</Label>
        <h2
          style={{
            marginTop: 20,
            fontSize: 'clamp(20px, 2.8vw, 30px)',
            fontWeight: 700,
            letterSpacing: '-0.01em',
            color: '#e4e2dc',
            marginBottom: 8,
          } as React.CSSProperties}
        >
          开始实施前：你在哪个就绪度层级？
        </h2>
        <p
          style={{
            fontSize: 15,
            color: '#666',
            marginBottom: 40,
            lineHeight: 1.6,
            maxWidth: 600,
          } as React.CSSProperties}
        >
          实施的起点决定实施的路径。跳级会导致返工。
        </p>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column' as const,
            gap: 12,
          } as React.CSSProperties}
        >
          {LEVELS.map((lvl) => (
            <div
              key={lvl.code}
              style={{
                display: 'grid',
                gridTemplateColumns: '80px 1fr',
                background: '#0c0c0e',
                border: '1px solid #141416',
                borderLeft: `3px solid ${lvl.color}`,
                borderRadius: 4,
                overflow: 'hidden',
              } as React.CSSProperties}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: `${lvl.color}10`,
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 18,
                  fontWeight: 700,
                  color: lvl.color,
                  letterSpacing: '-0.01em',
                } as React.CSSProperties}
              >
                {lvl.code}
              </div>
              <div style={{ padding: '20px 24px' } as React.CSSProperties}>
                <div
                  style={{
                    fontSize: 15,
                    fontWeight: 600,
                    color: '#e4e2dc',
                    marginBottom: 6,
                  } as React.CSSProperties}
                >
                  {lvl.label}
                </div>
                <p
                  style={{
                    fontSize: 13,
                    color: '#666',
                    lineHeight: 1.65,
                    margin: 0,
                  } as React.CSSProperties}
                >
                  {lvl.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: 24,
            padding: '14px 20px',
            background: '#0c0c0e',
            border: '1px solid #141416',
            borderRadius: 4,
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 12,
            color: '#444',
            lineHeight: 1.6,
          } as React.CSSProperties}
        >
          诊断建议：大多数工厂自评 L2，实际在 L1。错误判断就绪度会导致项目失败。
        </div>
      </section>

      <Divider />

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          padding: 'clamp(48px, 6vw, 80px) 24px',
        } as React.CSSProperties}
      >
        <Label>FAQ · 常见问题</Label>
        <h2
          style={{
            marginTop: 20,
            fontSize: 'clamp(20px, 2.8vw, 30px)',
            fontWeight: 700,
            letterSpacing: '-0.01em',
            color: '#e4e2dc',
            marginBottom: 40,
          } as React.CSSProperties}
        >
          关于这些指南
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(440px, 1fr))',
            gap: 16,
          } as React.CSSProperties}
        >
          {FAQS.map((faq, i) => (
            <div
              key={i}
              style={{
                background: '#0c0c0e',
                border: '1px solid #141416',
                borderRadius: 4,
                padding: '24px 28px',
              } as React.CSSProperties}
            >
              <div
                style={{
                  fontSize: 'clamp(14px, 1.5vw, 15px)',
                  fontWeight: 600,
                  color: '#e4e2dc',
                  marginBottom: 12,
                  lineHeight: 1.4,
                } as React.CSSProperties}
              >
                {faq.q}
              </div>
              <p
                style={{
                  fontSize: 13,
                  color: '#666',
                  lineHeight: 1.7,
                  margin: 0,
                } as React.CSSProperties}
              >
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          padding: 'clamp(48px, 6vw, 80px) 24px clamp(64px, 8vw, 100px)',
        } as React.CSSProperties}
      >
        <div
          style={{
            background: '#0c0c0e',
            border: '1px solid #141416',
            borderRadius: 4,
            padding: 'clamp(36px, 5vw, 60px) clamp(28px, 4vw, 56px)',
            display: 'flex',
            flexDirection: 'column' as const,
            gap: 20,
          } as React.CSSProperties}
        >
          <Label>下一步</Label>

          <h2
            style={{
              fontSize: 'clamp(24px, 3.5vw, 38px)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              color: '#e4e2dc',
              lineHeight: 1.2,
              margin: 0,
            } as React.CSSProperties}
          >
            不知道从哪里开始？
          </h2>

          <p
            style={{
              fontSize: 'clamp(14px, 1.6vw, 17px)',
              color: '#888',
              lineHeight: 1.7,
              maxWidth: 560,
              margin: 0,
            } as React.CSSProperties}
          >
            60 分钟免费诊断。告诉我们你的业务规模、当前工具栈和最大的 workflow
            痛点，我们会给你一个具体的实施起点建议。
          </p>

          <div style={{ marginTop: 8 } as React.CSSProperties}>
            <Link
              href="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: '#f59e0b',
                color: '#08080a',
                fontWeight: 700,
                fontSize: 15,
                letterSpacing: '-0.01em',
                padding: '14px 28px',
                borderRadius: 3,
                textDecoration: 'none',
              } as React.CSSProperties}
            >
              预约诊断 →
            </Link>
          </div>

          {/* footer nav links */}
          <div
            style={{
              marginTop: 24,
              paddingTop: 24,
              borderTop: '1px solid #141416',
              display: 'flex',
              flexWrap: 'wrap' as const,
              gap: '8px 24px',
            } as React.CSSProperties}
          >
            {[
              { href: '/solutions/workflow', label: 'Workflow 方案' },
              { href: '/solutions/trade', label: '外贸跟单自动化' },
              { href: '/blog', label: '博客' },
              { href: '/prompts', label: 'Prompt 库' },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                style={{
                  fontSize: 13,
                  color: '#444',
                  textDecoration: 'none',
                  fontFamily: "'JetBrains Mono', monospace",
                  letterSpacing: '0.5px',
                } as React.CSSProperties}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
