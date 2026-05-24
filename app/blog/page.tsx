import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import type React from 'react'

export const metadata: Metadata = {
  title: '制造业 AI 情报 · Makox',
  description:
    '不是内容营销，不是行业新闻。Makox 记录的是 AI-native 制造的真实运作方式——workflow 设计、agent 部署逻辑、出口 AI 转型的实战信号。',
  openGraph: {
    title: '制造业 AI 情报 · Makox',
    description:
      'AI-native 制造的操作者视角：workflow 撕裂点、Agent 部署失败原因、出口工厂真实的数字化路径。',
    type: 'website',
  },
}

// ─── Helper Components ────────────────────────────────────────────────────────

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        marginBottom: '24px',
      }}
    >
      <div
        style={{
          width: '32px',
          height: '1px',
          background: '#f59e0b',
          flexShrink: 0,
        }}
      />
      <span
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '11px',
          color: '#f59e0b',
          textTransform: 'uppercase' as const,
          letterSpacing: '3px',
          whiteSpace: 'nowrap' as const,
        }}
      >
        {children}
      </span>
    </div>
  )
}

function Divider() {
  return (
    <div
      style={{
        height: '1px',
        background: 'linear-gradient(90deg, transparent, #1e1e1e, transparent)',
        margin: '0 40px',
      }}
    />
  )
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const topics = [
  {
    color: '#f59e0b',
    title: 'Workflow 撕裂点',
    body: '当AI项目在第90天停掉，通常不是因为模型不够好，而是因为workflow在某个地方断了。我们记录这些断裂点。',
  },
  {
    color: '#3b82f6',
    title: 'Agent 部署逻辑',
    body: '哪类任务适合Agent执行，哪类不适合。边界在哪里，升级规则怎么设计。真实部署案例而非理论框架。',
  },
  {
    color: '#22c55e',
    title: '出口工厂数字化',
    body: '外贸跟单、产品内容、多语言运营——中国出口企业在AI转型路上遇到的真实问题和真实路径。',
  },
  {
    color: '#a855f7',
    title: 'DTC 品牌运营',
    body: '独立站的AI运营逻辑：内容生产、转化路径、客户维系。不谈流量，谈留存和品牌资产积累。',
  },
  {
    color: '#ef4444',
    title: 'AI 就绪度诊断',
    body: '数据治理、SOP标准化、工具选型——在Agent能跑起来之前，企业需要做的底层准备工作。',
  },
]

const articles = [
  {
    tag: 'Workflow',
    title: '为什么大多数工厂 AI 项目在 90 天后停掉',
    desc: '不是预算问题，不是技术问题。是 workflow 没有为 AI 接管准备好。六个最常见的失败模式和如何提前识别。',
    status: '即将发布',
  },
  {
    tag: 'Agent',
    title: 'AI-native Workflow 和数字化的混沌：本质区别',
    desc: '买了工具 ≠ 数字化。数字化 ≠ AI-native。这三个阶段的差异在哪里，判断标准是什么。',
    status: '即将发布',
  },
  {
    tag: '出口',
    title: '制造企业对 Agent 最常见的三个误解',
    desc: '"Agent就是聊天机器人" "Agent会抢走工作" "我们还没准备好"——逐一拆解。',
    status: '即将发布',
  },
  {
    tag: 'DTC',
    title: '没有叙事的 DTC 品牌为什么会崩塌',
    desc: '流量可以买，但品牌资产不能买。AI时代的内容叙事不是写作，是系统设计。',
    status: '即将发布',
  },
  {
    tag: 'Workflow',
    title: '什么数据不能留在 WhatsApp 里',
    desc: '外贸跟单最危险的数据存储习惯，以及如何系统性地从非结构化沟通里救回数据。',
    status: '即将发布',
  },
  {
    tag: 'Agent',
    title: '智能硬件公司的内容 AI 该怎么搭',
    desc: '从 spec sheet 到多语言 listing，从认证说明到 FAQ Agent，一套内容自动化的实施路径。',
    status: '即将发布',
  },
  {
    tag: '出口',
    title: '外贸报价 AI 的边界：什么可以自动，什么必须人工',
    desc: '不是所有报价环节都适合自动化。识别正确的自动化边界是项目成功的关键。',
    status: '即将发布',
  },
  {
    tag: 'DTC',
    title: 'AI 运营的复利效应：为什么越早开始越好',
    desc: '数据沉淀、内容积累、客户洞察——AI运营的价值是随时间指数增长的，而不是线性的。',
    status: '即将发布',
  },
]

const stats = ['7 个核心主题', '操作者视角', '无广告内容', '持续更新']

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function BlogPage() {
  const page: React.CSSProperties = {
    background: '#08080a',
    color: '#e4e2dc',
    fontFamily: "'Instrument Sans', 'Noto Sans SC', sans-serif",
    minHeight: '100vh',
  }

  return (
    <div style={page}>
      <Nav />

      {/* ── 1. Hero ──────────────────────────────────────────────────────── */}
      <section
        style={{
          padding: 'clamp(80px, 12vw, 140px) clamp(20px, 6vw, 80px) clamp(60px, 8vw, 100px)',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <Label>Manufacturing AI Signals · 制造业 AI 情报</Label>

        <h1
          style={{
            fontSize: 'clamp(28px, 5vw, 54px)',
            fontWeight: 600,
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
            color: '#e4e2dc',
            margin: '0 0 28px',
            maxWidth: '780px',
          }}
        >
          不是新闻，是操作者视角的 AI 现场
        </h1>

        <p
          style={{
            fontSize: 'clamp(15px, 1.6vw, 18px)',
            color: '#888',
            lineHeight: 1.75,
            maxWidth: '640px',
            margin: '0 0 36px',
          }}
        >
          这里是 Makox 记录制造业 AI 转型真实规律的地方——不是厂商案例研究，不是趋势报告，而是真正决定 AI 能否落地的 workflow 决策、失败模式与运营逻辑。
          这里的内容来自具体项目，面向需要做判断的操作者。
        </p>

        <blockquote
          style={{
            borderLeft: '2px solid #f59e0b',
            margin: '0 0 48px',
            padding: '16px 24px',
            background: '#0c0c0e',
            borderRadius: '0 4px 4px 0',
            maxWidth: '620px',
          }}
        >
          <p
            style={{
              fontStyle: 'italic',
              color: '#888',
              fontSize: 'clamp(13px, 1.3vw, 15px)',
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            "我们写的不是'AI赋能制造业'的宏观叙事，而是'这个工厂的询盘流程在第几步断裂'的微观记录。"
          </p>
        </blockquote>

        {/* Stat bar */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap' as const,
            gap: '0',
            borderTop: '1px solid #141416',
            borderBottom: '1px solid #141416',
          }}
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              style={{
                padding: '20px 36px 20px 0',
                marginRight: '36px',
                borderRight: i < stats.length - 1 ? '1px solid #141416' : 'none',
                paddingRight: i < stats.length - 1 ? '36px' : '0',
              }}
            >
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '13px',
                  color: '#e4e2dc',
                  letterSpacing: '0.02em',
                }}
              >
                {stat}
              </span>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* ── 2. Topic Categories ───────────────────────────────────────────── */}
      <section
        style={{
          padding: 'clamp(60px, 8vw, 100px) clamp(20px, 6vw, 80px)',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <Label>我们写什么</Label>

        <h2
          style={{
            fontSize: 'clamp(22px, 3vw, 34px)',
            fontWeight: 600,
            color: '#e4e2dc',
            margin: '0 0 48px',
            letterSpacing: '-0.01em',
          }}
        >
          五个核心观察维度
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '16px',
          }}
        >
          {topics.map((topic, i) => (
            <div
              key={i}
              style={{
                background: '#0c0c0e',
                border: '1px solid #141416',
                borderLeft: `3px solid ${topic.color}`,
                padding: '28px 28px 28px 24px',
                borderRadius: '0 4px 4px 0',
              }}
            >
              <h3
                style={{
                  fontSize: 'clamp(14px, 1.4vw, 16px)',
                  fontWeight: 600,
                  color: '#e4e2dc',
                  margin: '0 0 12px',
                  letterSpacing: '-0.01em',
                }}
              >
                {topic.title}
              </h3>
              <p
                style={{
                  fontSize: 'clamp(12px, 1.2vw, 14px)',
                  color: '#666',
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {topic.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* ── 3. Featured Articles ──────────────────────────────────────────── */}
      <section
        style={{
          padding: 'clamp(60px, 8vw, 100px) clamp(20px, 6vw, 80px)',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <Label>内容索引</Label>

        <h2
          style={{
            fontSize: 'clamp(22px, 3vw, 34px)',
            fontWeight: 600,
            color: '#e4e2dc',
            margin: '0 0 48px',
            letterSpacing: '-0.01em',
          }}
        >
          近期文章
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '16px',
          }}
        >
          {articles.map((article, i) => (
            <div
              key={i}
              style={{
                background: '#0c0c0e',
                border: '1px solid #141416',
                padding: '28px',
                borderRadius: '4px',
              }}
            >
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '11px',
                  color: '#f59e0b',
                  textTransform: 'uppercase' as const,
                  letterSpacing: '2px',
                  marginBottom: '14px',
                }}
              >
                [{article.tag}]
              </div>
              <h3
                style={{
                  fontSize: 'clamp(14px, 1.4vw, 16px)',
                  fontWeight: 600,
                  color: '#e4e2dc',
                  margin: '0 0 12px',
                  lineHeight: 1.4,
                  letterSpacing: '-0.01em',
                }}
              >
                {article.title}
              </h3>
              <p
                style={{
                  fontSize: '13px',
                  color: '#666',
                  lineHeight: 1.65,
                  margin: '0 0 20px',
                }}
              >
                {article.desc}
              </p>
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '11px',
                  color: '#444',
                  letterSpacing: '1px',
                }}
              >
                → {article.status}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* ── 4. Editorial: Why most content is noise ───────────────────────── */}
      <section
        style={{
          padding: 'clamp(60px, 8vw, 100px) clamp(20px, 6vw, 80px)',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <div style={{ maxWidth: '720px' }}>
          <Label>编辑立场</Label>

          <h2
            style={{
              fontSize: 'clamp(20px, 2.6vw, 30px)',
              fontWeight: 600,
              color: '#e4e2dc',
              margin: '0 0 36px',
              letterSpacing: '-0.01em',
            }}
          >
            为什么大多数制造业 AI 内容是噪音
          </h2>

          <p
            style={{
              fontSize: 'clamp(14px, 1.4vw, 16px)',
              color: '#888',
              lineHeight: 1.8,
              margin: '0 0 24px',
            }}
          >
            大多数关于"制造业AI"的内容，要么是厂商软文（"我们的产品帮助某工厂提升效率30%"），要么是行业报告（大量百分比，没有一个操作建议）。两种内容都对操作者没有价值。前者的目标是销售，后者的目标是融资故事。没有人在写那个需要真正做判断的人需要看的东西。
          </p>

          <p
            style={{
              fontSize: 'clamp(14px, 1.4vw, 16px)',
              color: '#888',
              lineHeight: 1.8,
              margin: '0 0 24px',
            }}
          >
            Makox 的内容从具体问题出发。不是"AI如何改变制造业"这种宏观命题，而是"一个月询盘300条的外贸工厂，应该先自动化哪个环节，理由是什么"。具体到可以反驳，具体到可以抄作业。我们认为，一篇真正有用的内容，应该让读者在读完后有一个可以立刻执行的判断，而不是一个更宏大的愿景。
          </p>

          <p
            style={{
              fontSize: 'clamp(14px, 1.4vw, 16px)',
              color: '#888',
              lineHeight: 1.8,
              margin: 0,
            }}
          >
            我们不追热点，不做内容营销，不用AI批量生成文章。每篇内容背后都是真实的项目经验或深度的操作者访谈。更新频率慢，但每次更新都有信息密度。如果你已经读到这里，你大概明白我们在说什么。
          </p>
        </div>
      </section>

      <Divider />

      {/* ── 5. Subscribe / Notify ─────────────────────────────────────────── */}
      <section
        style={{
          padding: 'clamp(60px, 8vw, 100px) clamp(20px, 6vw, 80px)',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <div
          style={{
            background: '#0c0c0e',
            border: '1px solid #141416',
            padding: 'clamp(32px, 5vw, 56px)',
            borderRadius: '4px',
            maxWidth: '640px',
          }}
        >
          <Label>保持关注</Label>

          <h2
            style={{
              fontSize: 'clamp(20px, 2.6vw, 28px)',
              fontWeight: 600,
              color: '#e4e2dc',
              margin: '0 0 16px',
              letterSpacing: '-0.01em',
            }}
          >
            新内容发布时收到通知
          </h2>

          <p
            style={{
              fontSize: 'clamp(13px, 1.3vw, 15px)',
              color: '#666',
              lineHeight: 1.7,
              margin: '0 0 28px',
            }}
          >
            我们不发营销邮件，只发真正值得读的内容。更新间隔通常是 2–4 周。
          </p>

          <Link
            href="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '13px',
              color: '#f59e0b',
              textDecoration: 'none',
              letterSpacing: '0.5px',
              borderBottom: '1px solid #f59e0b33',
              paddingBottom: '2px',
            }}
          >
            联系我们 → 加入通知名单
          </Link>
        </div>
      </section>

      <Divider />

      {/* ── 6. CTA ────────────────────────────────────────────────────────── */}
      <section
        style={{
          padding: 'clamp(60px, 8vw, 100px) clamp(20px, 6vw, 80px)',
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        <h2
          style={{
            fontSize: 'clamp(20px, 2.6vw, 30px)',
            fontWeight: 600,
            color: '#e4e2dc',
            margin: '0 0 16px',
            letterSpacing: '-0.01em',
          }}
        >
          不需要先读完所有内容
        </h2>

        <p
          style={{
            fontSize: 'clamp(13px, 1.3vw, 15px)',
            color: '#666',
            lineHeight: 1.7,
            margin: '0 0 36px',
            maxWidth: '480px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          如果你在寻找具体的制造业 AI 实施建议，可以直接预约诊断，不需要先读完所有内容。
        </p>

        <Link
          href="/contact"
          style={{
            display: 'inline-block',
            background: '#f59e0b',
            color: '#08080a',
            fontFamily: "'Instrument Sans', 'Noto Sans SC', sans-serif",
            fontSize: 'clamp(13px, 1.3vw, 15px)',
            fontWeight: 600,
            padding: '14px 32px',
            borderRadius: '4px',
            textDecoration: 'none',
            letterSpacing: '0.02em',
          }}
        >
          预约内容诊断 →
        </Link>
      </section>

      <Divider />

      {/* ── Footer links ──────────────────────────────────────────────────── */}
      <section
        style={{
          padding: 'clamp(40px, 5vw, 60px) clamp(20px, 6vw, 80px)',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap' as const,
            gap: '24px 40px',
            alignItems: 'center',
          }}
        >
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '11px',
              color: '#444',
              textTransform: 'uppercase' as const,
              letterSpacing: '2px',
            }}
          >
            相关页面
          </span>
          {[
            { href: '/solutions/workflow', label: 'Workflow 方案' },
            { href: '/solutions/trade', label: '外贸跟单' },
            { href: '/guides', label: '实施指南' },
            { href: '/prompts', label: 'Prompt 库' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '12px',
                color: '#666',
                textDecoration: 'none',
                letterSpacing: '0.5px',
                transition: 'color 0.2s',
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
