import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import Nav from '@/components/Nav'

export const metadata: Metadata = {
  title: 'Contact · Makox',
  description: '预约免费 AI 落地诊断 / Book a discovery call with Makox.',
}

export default function ContactPage() {
  return (
    <>
      <Nav />
      {/* Header */}
      <section className="section" style={{ paddingTop: 72, paddingBottom: 0 }}>
        <div className="container">
          <div className="eyebrow">Get in Touch</div>
          <h1
            style={{
              fontFamily: 'var(--font-dm-serif), serif',
              fontSize: 'clamp(32px, 4.5vw, 52px)',
              lineHeight: 1.1,
              letterSpacing: '-0.5px',
              marginBottom: 16,
              maxWidth: 560,
            }}
          >
            预约一次对话，<br />
            <em style={{ fontStyle: 'italic', color: 'var(--accent2)' }}>找到你的起点。</em>
          </h1>
          <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.75, maxWidth: 520, marginBottom: 56 }}>
            不管你是制造业企业、跨境专业人士、还是投资人 — 我们只需要 30 分钟，
            帮你判断 AI 对你当前业务最有价值的切入点是什么。
          </p>
          <div style={{ height: '0.5px', background: 'var(--border)' }} />
        </div>
      </section>

      {/* Contact Cards */}
      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Chinese – WeChat */}
            <div className="contact-card">
              <div className="contact-method">中国企业 · WeChat</div>
              <h2 className="contact-title">扫码预约免费诊断</h2>
              <p className="contact-desc">
                微信扫码，直接加入我们的专属咨询通道。我们会在 24 小时内回复并安排深度访谈。
                <br /><br />
                首次诊断完全免费，60 分钟，覆盖你当前业务的 AI 可行性评估。
              </p>

              {/* WeChat QR Placeholder */}
              <div
                style={{
                  width: 140,
                  height: 140,
                  background: 'var(--surface2)',
                  border: '0.5px solid var(--border2)',
                  borderRadius: 10,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8,
                  marginBottom: 16,
                }}
              >
                <span style={{ fontSize: 36 }}>💬</span>
                <span
                  style={{
                    fontFamily: 'var(--font-dm-mono)',
                    fontSize: 10,
                    color: 'var(--muted)',
                    letterSpacing: '0.04em',
                    textAlign: 'center',
                  }}
                >
                  WeChat QR Code<br />
                  <span style={{ opacity: 0.6 }}>(即将更新)</span>
                </span>
              </div>

              <div
                style={{
                  fontFamily: 'var(--font-dm-mono)',
                  fontSize: 10,
                  color: 'var(--muted)',
                  letterSpacing: '0.04em',
                  lineHeight: 1.7,
                }}
              >
                通常 24 小时内回复 · 完全免费
              </div>

              <div style={{ marginTop: 24 }}>
                <a
                  href="mailto:MashiTeam@163.com"
                  className="btn-primary"
                  style={{ display: 'inline-flex' }}
                >
                  发邮件联系我们
                </a>
                <div style={{ fontSize: 11, color: 'var(--muted)', marginTop: 10 }}>
                  MashiTeam@163.com
                </div>
              </div>
            </div>

            {/* English – Calendly */}
            <div className="contact-card">
              <div className="contact-method">International · Calendly</div>
              <h2 className="contact-title">Book a Discovery Call</h2>
              <p className="contact-desc">
                30 minutes. No deck, no pitch. We want to understand your manufacturing
                operation, your current challenges, and where AI has the highest leverage.
                <br /><br />
                We&apos;ll tell you honestly whether Makox can help — and what the fastest
                path to ROI looks like for your specific situation.
              </p>

              {/* Calendly placeholder */}
              <div
                style={{
                  background: 'var(--surface2)',
                  border: '0.5px solid var(--border2)',
                  borderRadius: 10,
                  padding: 28,
                  textAlign: 'center',
                  marginBottom: 20,
                }}
              >
                <div style={{ fontSize: 32, marginBottom: 10 }}>📅</div>
                <div
                  style={{
                    fontFamily: 'var(--font-dm-mono)',
                    fontSize: 11,
                    color: 'var(--muted)',
                    letterSpacing: '0.04em',
                    lineHeight: 1.6,
                  }}
                >
                  Calendly scheduling coming soon.<br />
                  <span style={{ opacity: 0.7 }}>Use email below to book directly.</span>
                </div>
              </div>

              <a
                href="https://calendly.com/makox"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ display: 'inline-flex', marginBottom: 12 }}
              >
                Book a 30-min Discovery Call
              </a>
              <div style={{ fontSize: 11, color: 'var(--muted)' }}>
                Or email: MashiTeam@163.com
              </div>
            </div>
          </div>

          {/* Bottom note */}
          <div
            style={{
              marginTop: 40,
              padding: '24px 32px',
              background: 'var(--surface)',
              border: '0.5px solid var(--border)',
              borderRadius: 10,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: 16,
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-dm-mono)',
                  fontSize: 10,
                  color: 'var(--accent)',
                  letterSpacing: '0.1em',
                  marginBottom: 6,
                }}
              >
                NOT SURE WHERE TO START?
              </div>
              <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.65 }}>
                Read our frameworks to understand the 5-layer Manufacturing AI Stack,
                or browse real case studies from manufacturers we&apos;ve worked with.
              </p>
            </div>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link href="/frameworks" className="btn-ghost" style={{ fontSize: 13, padding: '10px 20px' }}>
                View Frameworks
              </Link>
              <Link href="/cases" className="btn-ghost" style={{ fontSize: 13, padding: '10px 20px' }}>
                Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
