import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Case Studies · Makox',
  description:
    'Real manufacturing AI transformation cases. How Makox helps export manufacturers integrate AI into their operations.',
}

const cases = [
  {
    id: 1,
    industry: '家具出口 / Furniture Export',
    company: '某家具出口企业',
    companyEN: 'Furniture Exporter',
    problem: '内容生产依赖人工，跨语言效率低，海外买家响应慢，外贸跟单人力消耗大。',
    problemEN:
      'Manual content production, low cross-language efficiency, delayed overseas buyer response, labor-intensive trade follow-ups.',
    solution: '部署内容 Agent + 多语言数字员工，自动化产品文案生成、买家跟进与客服响应全链路。',
    solutionEN:
      'Content Agent + multilingual AI digital workers. Automated product copy generation, buyer follow-up, and customer response pipeline.',
    result: '内容产出效率 ↑5x · 客服响应时间 ↓60% · 跟单人力需求 ↓50%',
    resultEN: '5x content output · 60% reduction in response time · 50% reduction in follow-up headcount',
    tools: ['Content Agent', 'Multilingual Digital Worker', 'CRM Workflow Integration'],
    workflow: ['人工写产品文案 → AI 自动生成多语言内容', '手动跟进买家 → Agent 自动触发跟进序列'],
  },
  {
    id: 2,
    industry: '卫浴制造 / Sanitary Ware',
    company: '某卫浴工厂',
    companyEN: 'Sanitary Ware Manufacturer',
    problem: '外贸跟单人力密集，从询盘到成单全程人工跟进，客户流失率高，响应不及时。',
    problemEN:
      'Labor-intensive trade follow-ups, fully manual pipeline from inquiry to close, high customer churn, delayed response.',
    solution: '部署销售 Agent + 外贸跟单数字员工，自动处理询盘分类、跟进序列与客户分层管理。',
    solutionEN:
      'Sales Agent + trade follow-up AI worker handling inquiry classification, follow-up sequences, and customer segmentation automatically.',
    result: '跟单效率 ↑3x · 客户响应率 ↑40% · 询盘成单周期 ↓30%',
    resultEN: '3x follow-up efficiency · 40% improvement in customer response rate · 30% shorter sales cycle',
    tools: ['Sales Agent', 'Trade Follow-up Digital Worker', 'Inquiry Classification Pipeline'],
    workflow: ['人工分类询盘 → Agent 自动分层', '手动跟进客户 → 自动化跟进序列 + 人工介入节点'],
  },
]

export default function CasesPage() {
  return (
    <>
      {/* Header */}
      <section className="section" style={{ paddingTop: 72, paddingBottom: 0 }}>
        <div className="container">
          <div className="eyebrow">Manufacturing AI · Case Library</div>
          <h1
            style={{
              fontFamily: 'var(--font-dm-serif), serif',
              fontSize: 'clamp(32px, 4.5vw, 52px)',
              lineHeight: 1.1,
              letterSpacing: '-0.5px',
              marginBottom: 16,
              maxWidth: 640,
            }}
          >
            Real Transformations.<br />
            <em style={{ fontStyle: 'italic', color: 'var(--accent2)' }}>Real Numbers.</em>
          </h1>
          <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.75, maxWidth: 520, marginBottom: 56 }}>
            每个案例都包含完整的 Workflow 前后对比、Agent 架构、工具栈与团队结构变化。
            <br />
            <span style={{ fontSize: 13 }}>Each case includes Workflow before/after, Agent architecture, tool stack, and team structure changes.</span>
          </p>
          <div
            style={{
              height: '0.5px',
              background: 'var(--border)',
            }}
          />
        </div>
      </section>

      {/* Cases */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            {cases.map((c) => (
              <article
                key={c.id}
                style={{
                  background: 'var(--surface)',
                  border: '0.5px solid var(--border)',
                  borderRadius: 14,
                  padding: 40,
                }}
              >
                {/* Top row */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 16, marginBottom: 28 }}>
                  <div>
                    <div className="case-industry">{c.industry}</div>
                    <h2
                      style={{
                        fontFamily: 'var(--font-dm-serif), serif',
                        fontSize: 26,
                        color: 'var(--text)',
                        letterSpacing: '-0.3px',
                        marginTop: 8,
                      }}
                    >
                      {c.company}
                      <span style={{ fontSize: 15, color: 'var(--muted)', marginLeft: 12, fontFamily: 'var(--font-syne)' }}>
                        / {c.companyEN}
                      </span>
                    </h2>
                  </div>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    {c.tools.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                </div>

                {/* Body grid */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 24 }}>
                  <div>
                    <div style={{ fontFamily: 'var(--font-dm-mono)', fontSize: 10, color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 10 }}>
                      问题 / Challenge
                    </div>
                    <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.75 }}>{c.problem}</p>
                    <p style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.7, marginTop: 8, opacity: 0.7 }}>{c.problemEN}</p>
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-dm-mono)', fontSize: 10, color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 10 }}>
                      方案 / Solution
                    </div>
                    <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.75 }}>{c.solution}</p>
                    <p style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.7, marginTop: 8, opacity: 0.7 }}>{c.solutionEN}</p>
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-dm-mono)', fontSize: 10, color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 10 }}>
                      结果 / Results
                    </div>
                    <p style={{ fontSize: 14, color: 'var(--text)', lineHeight: 1.75, fontWeight: 600 }}>{c.result}</p>
                    <p style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.7, marginTop: 8 }}>{c.resultEN}</p>
                  </div>
                </div>

                {/* Workflow */}
                <div
                  style={{
                    marginTop: 28,
                    paddingTop: 24,
                    borderTop: '0.5px solid var(--border)',
                  }}
                >
                  <div style={{ fontFamily: 'var(--font-dm-mono)', fontSize: 10, color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12 }}>
                    Workflow Before → After
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    {c.workflow.map((w, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: 10, color: 'var(--accent)', minWidth: 16 }}>
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.6 }}>{w}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* CTA */}
          <div style={{ marginTop: 48, textAlign: 'center' }}>
            <p style={{ fontFamily: 'var(--font-dm-mono)', fontSize: 11, color: 'var(--muted)', marginBottom: 16, letterSpacing: '0.06em' }}>
              Your case could be next.
            </p>
            <Link href="/contact" className="btn-primary">
              预约免费诊断 / Book a Discovery Call
            </Link>
          </div>
        </div>
      </section>

      {/* Mobile grid override */}
      <style>{`
        @media (max-width: 768px) {
          article > div:nth-child(2) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      <Footer />
    </>
  )
}
