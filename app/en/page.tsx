import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Makox · AI-Native Manufacturing Operations',
  description:
    'Makox works with export-driven manufacturers to integrate AI into sales, operations, workflows, and global growth. The AI transformation of China manufacturing is already happening.',
}

export default function EnglishHomePage() {
  return (
    <>
      {/* ── SECTION 1: HERO ── */}
      <section className="section" style={{ paddingTop: 72 }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: 60, alignItems: 'center' }}>
            {/* Left */}
            <div>
              <div className="eyebrow anim-1">Manufacturing × AI</div>
              <h1
                className="anim-2"
                style={{
                  fontFamily: 'var(--font-dm-serif), serif',
                  fontSize: 'clamp(34px, 4.5vw, 54px)',
                  lineHeight: 1.1,
                  letterSpacing: '-1px',
                  marginBottom: 20,
                }}
              >
                The AI Transformation of China&apos;s Manufacturing{' '}
                <em style={{ fontStyle: 'italic', color: 'var(--accent2)' }}>
                  Is Already Happening.
                </em>
              </h1>
              <p
                className="anim-3"
                style={{ fontSize: 16, color: 'var(--muted)', lineHeight: 1.75, maxWidth: 460, marginBottom: 36 }}
              >
                Makox works with export-driven manufacturers to integrate AI into sales,
                operations, workflows, and global growth.
              </p>
              <div className="anim-4" style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <Link href="/contact" className="btn-primary">Book a Discovery Call</Link>
                <Link href="/cases" className="btn-ghost">See Case Studies →</Link>
              </div>
            </div>

            {/* Right – stat cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div className="stat-card slide-1">
                <div className="stat-icon">🤖</div>
                <div>
                  <div className="stat-label">Deployed</div>
                  <div className="stat-value">AI agent systems for 6 enterprises</div>
                </div>
              </div>
              <div className="stat-card slide-2">
                <div className="stat-icon">⚙️</div>
                <div>
                  <div className="stat-label">Delivery</div>
                  <div className="stat-value">2–4 weeks to full deployment</div>
                </div>
              </div>
              <div className="stat-card slide-3">
                <div className="stat-icon">🏭</div>
                <div>
                  <div className="stat-label">Focus</div>
                  <div className="stat-value">Manufacturing · Cross-border · OPC</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: WHY NOW ── */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-header">
            <div>
              <div className="eyebrow">Why Now</div>
              <h2 className="section-title">
                Why Manufacturing Is the<br />
                <em>Next AI Frontier</em>
              </h2>
            </div>
          </div>

          <div className="why-grid">
            <div className="why-card">
              <div className="why-stat"><span>35</span>%+</div>
              <div className="why-label">
                <strong style={{ color: 'var(--text)' }}>Strongest supply chains.</strong>{' '}
                China manufactures over a third of global goods.
              </div>
            </div>
            <div className="why-card">
              <div className="why-stat">&lt;<span>5</span>%</div>
              <div className="why-label">
                <strong style={{ color: 'var(--text)' }}>Weakest AI adoption.</strong>{' '}
                Fewer than 5% of factories use AI systematically.
              </div>
            </div>
            <div className="why-card">
              <div className="why-stat" style={{ fontSize: 22 }}>AI-native</div>
              <div className="why-label">
                <strong style={{ color: 'var(--text)' }}>New operations model.</strong>{' '}
                AI-native factories will redefine global manufacturing.
              </div>
            </div>
            <div className="why-card">
              <div className="why-stat" style={{ fontSize: 22 }}>OPC era</div>
              <div className="why-label">
                <strong style={{ color: 'var(--text)' }}>One-Person Company.</strong>{' '}
                Small teams will operate like global enterprises.
              </div>
            </div>
          </div>

          <div className="why-insight">
            &ldquo;The gap between supply chain strength and AI adoption is the largest arbitrage
            in global trade.&rdquo;
          </div>
        </div>
      </section>

      {/* ── SECTION 3: SERVICES ── */}
      <section className="section" style={{ paddingTop: 0 }} id="services">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What Makox Does</h2>
            <p className="section-note">
              Three focused services for<br />export-driven manufacturers.
            </p>
          </div>

          <div className="service-grid">
            <div className="service-card">
              <span className="service-arrow">↗</span>
              <div className="service-num">01</div>
              <div className="service-icon">🤖</div>
              <div className="service-name">AI Agent Deployment</div>
              <p className="service-desc">
                Custom AI agent teams for content, sales, support, and data operations.
                End-to-end deployment replacing repetitive manual work across your
                export operations.
              </p>
              <div className="service-tags">
                <span className="tag">Multi-agent systems</span>
                <span className="tag">Private deployment</span>
                <span className="tag">Export-ready</span>
              </div>
            </div>

            <div className="service-card">
              <span className="service-arrow">↗</span>
              <div className="service-num">02</div>
              <div className="service-icon">👤</div>
              <div className="service-name">AI Workforce Building</div>
              <p className="service-desc">
                From role analysis to AI digital worker deployment. Covering trade
                follow-ups, multilingual content, customer response — one person doing
                the work of five.
              </p>
              <div className="service-tags">
                <span className="tag">Role-level AI</span>
                <span className="tag">Multilingual</span>
                <span className="tag">2–4 week delivery</span>
              </div>
            </div>

            <div className="service-card">
              <span className="service-arrow">↗</span>
              <div className="service-num">03</div>
              <div className="service-icon">🗂️</div>
              <div className="service-name">Data Governance & Workflow Structuring</div>
              <p className="service-desc">
                Mapping existing workflows, building AI-ready data structures, designing
                standardized SOPs so agents can actually run — not just be installed.
              </p>
              <div className="service-tags">
                <span className="tag">SOP design</span>
                <span className="tag">Data structuring</span>
                <span className="tag">AI readiness</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: CASE STUDIES ── */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Case Studies</h2>
            <Link href="/cases" className="view-all">View all cases →</Link>
          </div>

          <div className="case-grid">
            <div className="case-card">
              <div className="case-industry">Furniture Export</div>
              <div className="case-company">Furniture Exporter</div>
              <div className="case-row">
                <span className="case-row-label">Challenge</span>
                <span className="case-row-text">Manual content production, low cross-language efficiency, delayed overseas buyer response</span>
              </div>
              <div className="case-row">
                <span className="case-row-label">Solution</span>
                <span className="case-row-text">Content Agent + multilingual AI digital workers automating product copy and buyer follow-ups</span>
              </div>
              <div className="case-row" style={{ marginTop: 16 }}>
                <span className="case-row-label" style={{ color: 'var(--accent)', fontFamily: 'var(--font-dm-mono)', fontSize: 10 }}>Results</span>
                <span className="case-result">5x content output · 60% reduction in response time</span>
              </div>
            </div>

            <div className="case-card">
              <div className="case-industry">Bathroom Fixtures</div>
              <div className="case-company">Sanitary Ware Manufacturer</div>
              <div className="case-row">
                <span className="case-row-label">Challenge</span>
                <span className="case-row-text">Labor-intensive trade follow-ups, delayed customer response, low conversion from inquiries</span>
              </div>
              <div className="case-row">
                <span className="case-row-label">Solution</span>
                <span className="case-row-text">Sales Agent + trade follow-up AI worker handling full pipeline from inquiry to close</span>
              </div>
              <div className="case-row" style={{ marginTop: 16 }}>
                <span className="case-row-label" style={{ color: 'var(--accent)', fontFamily: 'var(--font-dm-mono)', fontSize: 10 }}>Results</span>
                <span className="case-result">3x follow-up efficiency · 40% improvement in customer response rate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: FRAMEWORKS ── */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">AI Transformation Frameworks</h2>
            <Link href="/frameworks" className="view-all">View full frameworks →</Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {/* Manufacturing AI Stack */}
            <div className="framework-card">
              <div className="framework-label">Framework 01</div>
              <div className="framework-title">Manufacturing AI Stack</div>
              <div className="layer-bar top">⚡ AI Workforce Layer</div>
              <div className="layer-bar">📊 Data Layer</div>
              <div className="layer-bar">⚙️ Workflow Layer</div>
              <div className="layer-bar">💼 Sales Layer</div>
              <div className="layer-bar">📝 Content Layer</div>
            </div>

            {/* AI Adoption Roadmap */}
            <div className="framework-card">
              <div className="framework-label">Framework 02</div>
              <div className="framework-title">AI Adoption Roadmap</div>
              <div className="roadmap-steps">
                <div className="roadmap-step">
                  <div className="roadmap-n">01</div>
                  <div className="roadmap-name">Content AI</div>
                </div>
                <div className="roadmap-step">
                  <div className="roadmap-n">02</div>
                  <div className="roadmap-name">Sales AI</div>
                </div>
                <div className="roadmap-step">
                  <div className="roadmap-n">03</div>
                  <div className="roadmap-name">Workflow AI</div>
                </div>
                <div className="roadmap-step">
                  <div className="roadmap-n">04</div>
                  <div className="roadmap-name">AI Workforce</div>
                </div>
              </div>
            </div>

            {/* Factory AI Readiness Model */}
            <div className="framework-card">
              <div className="framework-label">Framework 03</div>
              <div className="framework-title">Factory AI Readiness Model</div>
              <div className="readiness-grid" style={{ gridTemplateColumns: 'repeat(5,1fr)' }}>
                <div className="readiness-level">
                  <div className="readiness-n">L0</div>
                  <div className="readiness-name">Manual</div>
                </div>
                <div className="readiness-level">
                  <div className="readiness-n">L1</div>
                  <div className="readiness-name">Tool-assisted</div>
                </div>
                <div className="readiness-level">
                  <div className="readiness-n">L2</div>
                  <div className="readiness-name">Partially auto.</div>
                </div>
                <div className="readiness-level">
                  <div className="readiness-n">L3</div>
                  <div className="readiness-name">Agent-driven</div>
                </div>
                <div className="readiness-level active">
                  <div className="readiness-n">L4</div>
                  <div className="readiness-name">AI-native</div>
                </div>
              </div>
              <p style={{ fontSize: 11, color: 'var(--muted)', marginTop: 14, lineHeight: 1.6, fontFamily: 'var(--font-dm-mono)' }}>
                Makox helps factories move from Level 0 → Level 4.
              </p>
            </div>
          </div>

          <style>{`
            @media (max-width: 768px) {
              .en-framework-grid { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </div>
      </section>

      {/* ── SECTION 6: CTA – THREE PATHS ── */}
      <section className="section-sm">
        <div className="container">
          <div className="section-header">
            <div>
              <div className="eyebrow">Work with us</div>
              <h2 className="section-title">Three ways to<br /><em>work with Makox</em></h2>
            </div>
          </div>

          <div className="path-grid">
            <div className="path-card">
              <div className="path-type">Channel Partner</div>
              <div className="path-title">You source from China.</div>
              <p className="path-desc">
                We make your suppliers AI-native. Help your manufacturing partners
                operate at a higher level — and differentiate your sourcing relationships.
              </p>
            </div>
            <div className="path-card">
              <div className="path-type">Strategic Client</div>
              <div className="path-title">You run a factory.</div>
              <p className="path-desc">
                We build your AI operations team. From content and sales to workflow
                and data — end-to-end AI integration in 2–4 weeks.
              </p>
            </div>
            <div className="path-card">
              <div className="path-type">Investor</div>
              <div className="path-title">You invest in AI infrastructure.</div>
              <p className="path-desc">
                This is the last untouched market. 35% of global manufacturing,
                &lt;5% AI adoption. Makox is building the operating system for this
                transition.
              </p>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: 8 }}>
            <Link href="/contact" className="btn-primary">
              Book a 30-min Discovery Call
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
