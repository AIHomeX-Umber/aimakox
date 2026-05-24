import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'AI-Native 操盘手培训 · Makox',
  description:
    '不是教你用ChatGPT的速成课。Makox培训的核心是操作转型——让企业团队真正理解AI-native工作方式、workflow重设计和Agent协作逻辑。',
  openGraph: {
    title: 'AI-Native 操盘手培训 · Makox',
    description:
      '企业AI培训不等于工具教学。Makox从操作逻辑、workflow设计和Agent协作三个维度，帮团队完成真正的能力迁移。',
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
      }}
    >
      <span
        style={{
          display: 'inline-block',
          width: 32,
          height: 1,
          background: '#f59e0b',
          flexShrink: 0,
        }}
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
      }}
    />
  )
}

const AUDIENCE = [
  {
    title: '制造业管理层',
    color: '#f59e0b',
    body: '需要理解AI在企业中真正能做什么、不能做什么，以及如何规划AI投入优先级的决策者。不是技术培训，是战略判断力培训。',
  },
  {
    title: '外贸运营团队',
    color: '#3b82f6',
    body: '需要把询盘、报价、跟单、内容生产流程重新设计为AI可协作的工作方式的操作者。包括外贸业务员、运营经理、内容团队。',
  },
  {
    title: '企业数字化负责人',
    color: '#22c55e',
    body: '需要推动数据治理、SOP标准化、工具栈选型的内部推动者。培训帮助他们建立可落地的治理框架，而不只是PPT方法论。',
  },
]

const TRACKS = [
  {
    title: 'AI 认知重塑',
    audience: '管理层',
    level: '战略层',
    duration: '1天工作坊',
    modules: [
      '什么是 AI-native，什么只是"加了AI的传统流程"',
      '如何判断一个AI项目的真实可行性',
      '企业 AI 投入的优先级模型：从 L0 到 L4',
      '案例拆解：为什么大多数 AI 项目在 90 天后停',
    ],
  },
  {
    title: 'Workflow 重设计',
    audience: '运营团队',
    level: '实操层',
    duration: '2天工作坊',
    modules: [
      '如何画一张"AI可接管"的流程地图',
      'SOP 标准化：从口头知识到可执行文档',
      '数据治理入门：让 AI 能读懂你的业务数据',
      '工具栈选型：飞书/Notion/CRM 的 AI-ready 配置',
    ],
  },
  {
    title: 'Agent 协作实战',
    audience: '数字化负责人',
    level: '系统层',
    duration: '3天工作坊',
    modules: [
      'Agent 任务定义：边界、触发规则、升级逻辑',
      '内容 Agent 部署：从 SKU 参数到多语言 listing',
      '销售 Agent 搭建：询盘分级、跟进序列、报价初稿',
      '监控与迭代：如何知道 Agent 在正常运转',
    ],
  },
]

const WORKSHOPS = [
  {
    n: '01',
    title: '出口工厂 AI 就绪度诊断',
    duration: '3小时实操工作坊',
    body: '从数据现状、SOP覆盖率、工具使用情况三个维度，诊断企业当前在哪个就绪度层级，输出一份可执行的优先级清单。',
  },
  {
    n: '02',
    title: '外贸跟单 Workflow 重构',
    duration: '半天工作坊',
    body: '针对询盘→报价→跟单→复购全链路，识别AI可介入的节点和不适合自动化的环节，设计重构方案。',
  },
  {
    n: '03',
    title: '内容团队 AI 协作转型',
    duration: '全天工作坊',
    body: '面向内容/营销团队，从内容生产流程重设计到AI工具实际使用，包含产品描述、多语言适配、SEO优化的AI协作实践。',
  },
  {
    n: '04',
    title: '管理层 AI 战略工作坊',
    duration: '半天闭门工作坊',
    body: '针对企业决策层，讨论AI投入优先级、预算分配、成功指标定义，不涉及技术细节。',
  },
  {
    n: '05',
    title: '数据治理与 SOP 标准化',
    duration: '2天深度工作坊',
    body: '帮助企业建立数据信任基础和可执行SOP体系——这是所有AI部署的前提条件。',
  },
  {
    n: '06',
    title: 'Agent 运营与持续迭代',
    duration: '半天工作坊',
    body: '面向已部署AI工具的团队，讲解如何监控Agent表现、识别退化信号、推动持续优化。',
  },
]

const NO_TEACH = [
  {
    title: '不教工具速成',
    body: '我们不提供"10分钟学会ChatGPT"类型的内容。工具会变，操作逻辑不会变。我们培训的是可迁移的能力。',
  },
  {
    title: '不教与业务脱节的提示词技巧',
    body: '"写一篇关于X的文章"不是企业AI应用。我们只教能直接嵌入工作流的操作逻辑。',
  },
  {
    title: '不做标准化课程包',
    body: '所有工作坊都针对具体企业的业务场景定制，不销售可以批量交付的课程包。',
  },
  {
    title: '不承诺快速见效',
    body: 'AI转型没有快捷方式。如果你在找"一周内提升XX%效率"的培训，我们不是正确选择。',
  },
  {
    title: '不假设你已经准备好',
    body: '我们的第一步通常是诊断，而不是培训。如果基础条件不存在，任何培训都是浪费。',
  },
]

const FAQS = [
  {
    q: '培训和咨询有什么区别？',
    a: '培训聚焦于能力建设——你的团队学会一种新的工作方式。咨询聚焦于问题解决——我们帮你分析和规划。两者通常配合使用：先咨询做诊断，再培训做能力迁移，再部署做落地。很多项目三者都包含。',
  },
  {
    q: '工作坊是线上还是线下？',
    a: '我们优先线下，尤其是需要深度参与的实操工作坊。线上适合管理层战略工作坊（时间成本更低）。对于跨城市的团队，我们也做线上方案，但效果会有一定差距。',
  },
  {
    q: '一次培训能持续多久？',
    a: '单次工作坊的效果通常持续2-4周，然后开始衰减，除非有配套的工作流改造。这就是为什么我们不推荐"一次性培训"——培训必须和流程改造同步进行，才能真正产生持续效果。',
  },
  {
    q: '需要参与多少人？',
    a: '工作坊通常6-20人效果最好。太少（少于4人）缺乏讨论密度，太多（超过30人）变成讲座，失去实操性。管理层战略工作坊更小（3-8人）。',
  },
  {
    q: '有行业限制吗？',
    a: '我们主要服务制造业（尤其是出口制造）和B2B服务业。消费互联网、金融、医疗等行业不在我们的专业范围内——不是不能做，而是我们的案例积累和方法论主要来自制造业，做其他行业性价比不高。',
  },
  {
    q: '怎么判断培训是否有效？',
    a: '我们在工作坊结束前定义可观测的行为改变指标——不是"是否学到了知识"，而是"工作流里有哪些步骤在接下来4周内会发生变化"。这些指标是培训合同的一部分。',
  },
]

export default function CoursesPage() {
  return (
    <div
      style={{
        background: '#08080a',
        color: '#e4e2dc',
        minHeight: '100vh',
        fontFamily: "'Instrument Sans', 'Noto Sans SC', sans-serif",
      }}
    >
      <Nav />

      {/* ── Hero ── */}
      <section
        style={{ maxWidth: 960, margin: '0 auto', padding: '120px 32px 80px' }}
      >
        <Label>Operator Training · AI-Native 培训</Label>
        <h1
          style={{
            fontSize: 'clamp(32px, 5vw, 56px)',
            fontWeight: 700,
            lineHeight: 1.1,
            margin: '0 0 28px',
            letterSpacing: '-0.02em',
          }}
        >
          大多数 AI 培训教的是工具。<br />我们教的是转型。
        </h1>
        <p
          style={{
            fontSize: 17,
            color: '#888',
            maxWidth: 640,
            lineHeight: 1.8,
            margin: '0 0 20px',
          }}
        >
          培训一个员工用ChatGPT，一周后他会用，三个月后他不用了。真正的AI转型不是工具熟练度问题，而是操作思维和工作流重设计——这是Makox培训体系的核心。
        </p>
        <p
          style={{
            fontSize: 15,
            color: '#666',
            lineHeight: 1.85,
            maxWidth: 600,
            fontStyle: 'italic',
            borderLeft: '2px solid #f59e0b',
            paddingLeft: 16,
            margin: '0 0 48px',
          }}
        >
          "会用 ChatGPT 不等于 AI-native。AI-native 是一种工作方式：人负责判断，Agent 负责执行，数据流负责连接。"
        </p>

        {/* Stats bar */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: 1,
            background: '#141416',
          }}
        >
          {['3 个培训方向', '工作坊形式', '企业定制', '实战导向'].map((s) => (
            <div
              key={s}
              style={{ background: '#0c0c0e', padding: '28px 24px' }}
            >
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 13,
                  fontWeight: 700,
                  color: '#f59e0b',
                  marginBottom: 0,
                }}
              >
                {s}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* ── 适合谁 ── */}
      <section
        style={{ maxWidth: 960, margin: '0 auto', padding: '80px 32px' }}
      >
        <Label>适合谁</Label>
        <h2
          style={{
            fontSize: 'clamp(22px, 3.5vw, 36px)',
            fontWeight: 700,
            marginBottom: 8,
            letterSpacing: '-0.02em',
          }}
        >
          三类企业核心受众
        </h2>
        <p
          style={{
            fontSize: 14,
            color: '#888',
            marginBottom: 40,
            maxWidth: 520,
          }}
        >
          不同角色的痛点不同，培训方向也不同。我们不做一刀切的课程。
        </p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 2,
            background: '#141416',
          }}
        >
          {AUDIENCE.map((a) => (
            <div
              key={a.title}
              style={{
                background: '#0c0c0e',
                padding: '32px 28px',
                borderLeft: `3px solid ${a.color}`,
              }}
            >
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11,
                  color: a.color,
                  letterSpacing: '2px',
                  textTransform: 'uppercase' as const,
                  marginBottom: 14,
                }}
              >
                {a.title}
              </div>
              <p
                style={{
                  fontSize: 14,
                  color: '#888',
                  lineHeight: 1.75,
                  margin: 0,
                }}
              >
                {a.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* ── Training Tracks ── */}
      <section
        style={{ maxWidth: 960, margin: '0 auto', padding: '80px 32px' }}
      >
        <Label>培训方向</Label>
        <h2
          style={{
            fontSize: 'clamp(22px, 3.5vw, 36px)',
            fontWeight: 700,
            marginBottom: 8,
            letterSpacing: '-0.02em',
          }}
        >
          三条培训路径
        </h2>
        <p
          style={{
            fontSize: 14,
            color: '#888',
            marginBottom: 40,
            maxWidth: 520,
          }}
        >
          从战略认知到系统实战，每条路径针对不同角色和就绪度设计。
        </p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 2,
            background: '#141416',
          }}
        >
          {TRACKS.map((track, idx) => (
            <div
              key={track.title}
              style={{
                background: '#0c0c0e',
                padding: '32px 28px',
                display: 'flex',
                flexDirection: 'column' as const,
                gap: 0,
              }}
            >
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11,
                  color: '#444',
                  letterSpacing: '2px',
                  marginBottom: 12,
                }}
              >
                Track {String(idx + 1).padStart(2, '0')}
              </div>
              <div
                style={{
                  fontSize: 'clamp(16px, 2vw, 20px)',
                  fontWeight: 700,
                  color: '#e4e2dc',
                  marginBottom: 16,
                }}
              >
                {track.title}
              </div>
              <div
                style={{
                  display: 'flex',
                  gap: 8,
                  flexWrap: 'wrap' as const,
                  marginBottom: 24,
                }}
              >
                {[
                  { label: track.level, color: '#f59e0b' },
                  { label: track.duration, color: '#888' },
                  { label: `适合：${track.audience}`, color: '#555' },
                ].map((tag) => (
                  <span
                    key={tag.label}
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 10,
                      color: tag.color,
                      border: `1px solid ${tag.color}33`,
                      padding: '3px 8px',
                      letterSpacing: '1px',
                    }}
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column' as const,
                  gap: 10,
                }}
              >
                {track.modules.map((mod, i) => (
                  <div
                    key={i}
                    style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}
                  >
                    <span
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 10,
                        color: '#444',
                        paddingTop: 3,
                        flexShrink: 0,
                      }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span
                      style={{ fontSize: 13, color: '#888', lineHeight: 1.65 }}
                    >
                      {mod}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* ── Workshop Modules ── */}
      <section
        style={{ maxWidth: 960, margin: '0 auto', padding: '80px 32px' }}
      >
        <Label>工作坊模块</Label>
        <h2
          style={{
            fontSize: 'clamp(22px, 3.5vw, 36px)',
            fontWeight: 700,
            marginBottom: 8,
            letterSpacing: '-0.02em',
          }}
        >
          6 个具体工作坊
        </h2>
        <p
          style={{
            fontSize: 14,
            color: '#888',
            marginBottom: 40,
            maxWidth: 520,
          }}
        >
          每个工作坊都针对特定业务场景设计，可单独参与，也可组合定制。
        </p>
        <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 2 }}>
          {WORKSHOPS.map((ws) => (
            <div
              key={ws.n}
              style={{
                background: '#0c0c0e',
                border: '1px solid #141416',
                padding: '24px 28px',
                display: 'grid',
                gridTemplateColumns: '48px 1fr',
                gap: 20,
                alignItems: 'flex-start',
              }}
            >
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 13,
                  color: '#f59e0b',
                  paddingTop: 2,
                }}
              >
                {ws.n}
              </div>
              <div>
                <div
                  style={{
                    display: 'flex',
                    gap: 16,
                    alignItems: 'baseline',
                    flexWrap: 'wrap' as const,
                    marginBottom: 10,
                  }}
                >
                  <span
                    style={{
                      fontSize: 15,
                      fontWeight: 700,
                      color: '#e4e2dc',
                    }}
                  >
                    {ws.title}
                  </span>
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 10,
                      color: '#555',
                      letterSpacing: '1px',
                    }}
                  >
                    {ws.duration}
                  </span>
                </div>
                <p
                  style={{
                    fontSize: 14,
                    color: '#888',
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {ws.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* ── 我们不教什么 ── */}
      <section
        style={{ maxWidth: 960, margin: '0 auto', padding: '80px 32px' }}
      >
        <Label>我们不教什么</Label>
        <h2
          style={{
            fontSize: 'clamp(22px, 3.5vw, 36px)',
            fontWeight: 700,
            marginBottom: 8,
            letterSpacing: '-0.02em',
          }}
        >
          边界同样重要
        </h2>
        <p
          style={{
            fontSize: 14,
            color: '#888',
            marginBottom: 40,
            maxWidth: 520,
          }}
        >
          知道我们不做什么，帮你判断我们是不是正确的选择。
        </p>
        <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 2 }}>
          {NO_TEACH.map((item) => (
            <div
              key={item.title}
              style={{
                background: '#0c0c0e',
                border: '1px solid #141416',
                borderLeft: '3px solid #ef4444',
                padding: '24px 28px',
              }}
            >
              <div
                style={{
                  fontSize: 15,
                  fontWeight: 700,
                  color: '#e4e2dc',
                  marginBottom: 10,
                }}
              >
                {item.title}
              </div>
              <p
                style={{
                  fontSize: 14,
                  color: '#888',
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* ── FAQ ── */}
      <section
        style={{ maxWidth: 960, margin: '0 auto', padding: '80px 32px' }}
      >
        <Label>常见问题</Label>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column' as const,
            gap: 1,
            background: '#141416',
          }}
        >
          {FAQS.map((f) => (
            <div
              key={f.q}
              style={{ background: '#0c0c0e', padding: '28px 32px' }}
            >
              <div
                style={{
                  fontSize: 15,
                  fontWeight: 700,
                  color: '#e4e2dc',
                  marginBottom: 12,
                }}
              >
                {f.q}
              </div>
              <p
                style={{
                  fontSize: 14,
                  color: '#888',
                  lineHeight: 1.75,
                  margin: 0,
                }}
              >
                {f.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* ── CTA ── */}
      <section
        style={{ maxWidth: 960, margin: '0 auto', padding: '80px 32px 96px' }}
      >
        <div
          style={{
            background: '#0c0c0e',
            border: '1px solid #141416',
            padding: '64px 48px',
            textAlign: 'center' as const,
          }}
        >
          <Label>下一步</Label>
          <h2
            style={{
              fontSize: 'clamp(24px, 4vw, 40px)',
              fontWeight: 700,
              margin: '0 0 16px',
              letterSpacing: '-0.02em',
            }}
          >
            先诊断，再培训
          </h2>
          <p
            style={{
              fontSize: 16,
              color: '#888',
              maxWidth: 520,
              margin: '0 auto 40px',
              lineHeight: 1.75,
            }}
          >
            我们不直接销售培训课程。第一步通常是一次免费诊断，了解你的团队现状和培训需求，然后设计定制方案。
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
            }}
          >
            预约培训诊断 →
          </Link>
        </div>
      </section>

      {/* Footer nav links */}
      <div
        style={{
          borderTop: '1px solid #141416',
          padding: '28px 32px',
          maxWidth: 960,
          margin: '0 auto 48px',
        }}
      >
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' as const }}>
          {[
            { href: '/services/governance', label: '数字治理服务 →' },
            { href: '/solutions/workflow', label: 'Workflow 重设计 →' },
            { href: '/guides', label: '指南库 →' },
            { href: '/blog', label: '博客 →' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 12,
                color: '#444',
                textDecoration: 'none',
                letterSpacing: '1px',
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}
