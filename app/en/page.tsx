import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import Nav from '@/components/Nav'

/* ── Service icons (SVG, brand gold stroke) ── */
function ServiceIconSearch() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#d4a853" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="17" cy="17" r="10" />
      <line x1="25" y1="25" x2="35" y2="35" />
      <line x1="12" y1="17" x2="22" y2="17" />
      <line x1="17" y1="12" x2="17" y2="22" />
    </svg>
  )
}

function ServiceIconWorkflow() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#d4a853" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="7" cy="20" r="3" />
      <circle cx="20" cy="8" r="3" />
      <circle cx="20" cy="32" r="3" />
      <circle cx="33" cy="20" r="3" />
      <line x1="10" y1="19" x2="17" y2="10" />
      <line x1="10" y1="21" x2="17" y2="30" />
      <line x1="23" y1="9" x2="30" y2="18" />
      <line x1="23" y1="31" x2="30" y2="22" />
    </svg>
  )
}

function ServiceIconData() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#d4a853" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <ellipse cx="20" cy="10" rx="12" ry="4" />
      <line x1="8" y1="10" x2="8" y2="30" />
      <line x1="32" y1="10" x2="32" y2="30" />
      <ellipse cx="20" cy="20" rx="12" ry="4" />
      <ellipse cx="20" cy="30" rx="12" ry="4" />
    </svg>
  )
}

function ServiceIconPackage() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#d4a853" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 4 L36 13 L36 27 L20 36 L4 27 L4 13 Z" />
      <line x1="4" y1="13" x2="20" y2="22" />
      <line x1="36" y1="13" x2="20" y2="22" />
      <line x1="20" y1="22" x2="20" y2="36" />
      <line x1="12" y1="8.5" x2="28" y2="17.5" />
    </svg>
  )
}

const enPainItems = [
  {
    pain: "Bought tools, but no one on the team uses them",
    response: "We start by watching your real workflow — and find the one step worth automating first",
  },
  {
    pain: "Vendors installed systems, but the data doesn't connect",
    response: "We structure your data first, then connect AI — not the other way around",
  },
  {
    pain: "Attended AI workshops, still don't know where to start",
    response: "60-minute free diagnosis — we tell you exactly which one thing to do first",
  },
  {
    pain: "Worried about high cost, long timelines, no visible results",
    response: "We deliver a working Workflow in 2–4 weeks — prove it first, then scale",
  },
]

export const metadata: Metadata = {
  title: 'Makox · AI-Native Manufacturing Operations',
  description:
    'Makox works with export-driven manufacturers to integrate AI into sales, operations, workflows, and global growth. The AI transformation of China manufacturing is already happening.',
}

export default function EnglishHomePage() {
  return (
    <>
      <Nav />
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
                style={{ fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.75, maxWidth: 460, marginBottom: 36 }}
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
                  <div className="stat-value">6 enterprise clients · 2 full deployments</div>
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

          <div className="service-grid service-grid-2x2">
            <div className="service-card">
              <span className="service-arrow">↗</span>
              <div className="service-num">01</div>
              <div className="service-icon"><ServiceIconSearch /></div>
              <div className="service-name">Workflow Diagnosis</div>
              <p className="service-desc">
                We come on-site and watch how your team actually works. Find the one
                operation worth automating first — before spending a dollar.
              </p>
              <div className="service-tags">
                <span className="tag">60 min · Free</span>
              </div>
            </div>

            <div className="service-card">
              <span className="service-arrow">↗</span>
              <div className="service-num">02</div>
              <div className="service-icon"><ServiceIconWorkflow /></div>
              <div className="service-name">Workflow Build</div>
              <p className="service-desc">
                Turn the diagnosis into a live, running workflow. Connect AI models,
                wire up your real data, test and validate in your actual environment.
              </p>
              <div className="service-tags">
                <span className="tag">2–4 week delivery</span>
              </div>
            </div>

            <div className="service-card">
              <span className="service-arrow">↗</span>
              <div className="service-num">03</div>
              <div className="service-icon"><ServiceIconData /></div>
              <div className="service-name">Data & SOP Structuring</div>
              <p className="service-desc">
                Map existing workflows, build AI-ready data structures, design
                standardized SOPs so automation can actually run — not just be installed.
              </p>
              <div className="service-tags">
                <span className="tag">SOP design</span>
                <span className="tag">AI readiness</span>
              </div>
            </div>

            <div className="service-card">
              <span className="service-arrow">↗</span>
              <div className="service-num">04</div>
              <div className="service-icon"><ServiceIconPackage /></div>
              <div className="service-name">Agent Starter Kit</div>
              <p className="service-desc">
                Start running on your own after diagnosis. Includes 1 pre-configured
                template + data integration guide + Workflow SOP + 2 hours of setup coaching.
              </p>
              <div className="service-tags">
                <span className="tag">Standardized</span>
                <span className="tag">Upgrade anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3B: PAIN-POINT ── */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <h2 className="pain-headline">You&apos;ve probably tried AI — and it didn&apos;t stick.</h2>
          <div className="pain-list">
            {enPainItems.map((item, i) => (
              <div key={i} className="pain-item">
                <div className="pain-item-left">
                  <span className="pain-x">✕</span>
                  <span className="pain-text">{item.pain}</span>
                </div>
                <div className="pain-item-sep">→</div>
                <div className="pain-item-right">
                  <span className="pain-arrow-sym">→</span>
                  <span className="pain-response">{item.response}</span>
                </div>
              </div>
            ))}
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
              Book a Free Discovery Call
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
