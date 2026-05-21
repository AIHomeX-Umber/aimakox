import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'AI Transformation Frameworks · Makox',
  description:
    'Makox defines the industry frameworks for manufacturing AI transformation. Manufacturing AI Stack, AI Adoption Roadmap, Factory AI Readiness Model.',
}

export default function FrameworksPage() {
  return (
    <>
      {/* Header */}
      <section className="section" style={{ paddingTop: 72, paddingBottom: 0 }}>
        <div className="container">
          <div className="eyebrow">Industry Frameworks · Manufacturing AI</div>
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
            The Frameworks That Define<br />
            <em style={{ fontStyle: 'italic', color: 'var(--accent2)' }}>Manufacturing AI.</em>
          </h1>
          <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.75, maxWidth: 540, marginBottom: 56 }}>
            Makox doesn&apos;t just serve the transformation — we define its language.
            These frameworks are the intellectual foundation for how manufacturing enterprises
            adopt AI systematically.
          </p>
          <div style={{ height: '0.5px', background: 'var(--border)' }} />
        </div>
      </section>

      {/* Framework 01 – Manufacturing AI Stack */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
            <div>
              <div className="eyebrow">Framework 01</div>
              <h2
                style={{
                  fontFamily: 'var(--font-dm-serif), serif',
                  fontSize: 'clamp(26px, 3vw, 36px)',
                  lineHeight: 1.15,
                  letterSpacing: '-0.3px',
                  marginBottom: 16,
                }}
              >
                Manufacturing AI Stack
              </h2>
              <div className="orange-divider" />
              <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.8, marginBottom: 24 }}>
                Every manufacturing AI system is built on five interdependent layers.
                Skipping layers — or building them in the wrong order — leads to AI projects
                that never actually run in production.
              </p>
              <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.8, marginBottom: 24 }}>
                Makox builds from the bottom up: Content first, then Sales, then Workflow
                automation, then Data governance, and finally a full AI Workforce operating
                across all layers.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                <span className="tag">5-Layer Architecture</span>
                <span className="tag">Bottom-up Deployment</span>
                <span className="tag">Manufacturing-Specific</span>
              </div>
            </div>

            <div>
              {[
                { icon: '⚡', label: 'AI Workforce Layer', desc: 'Autonomous agents operating across all layers', highlight: true },
                { icon: '📊', label: 'Data Layer', desc: 'Structured, AI-readable enterprise data' },
                { icon: '⚙️', label: 'Workflow Layer', desc: 'Standardized SOPs and automation pipelines' },
                { icon: '💼', label: 'Sales Layer', desc: 'AI-driven inquiry handling and follow-up' },
                { icon: '📝', label: 'Content Layer', desc: 'Multilingual content generation and distribution' },
              ].map((layer, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 14,
                    padding: '14px 18px',
                    borderLeft: `2px solid ${layer.highlight ? 'var(--accent2)' : 'var(--accent)'}`,
                    background: layer.highlight ? 'rgba(196,168,130,0.05)' : 'var(--surface2)',
                    borderRadius: '0 8px 8px 0',
                    marginBottom: 6,
                  }}
                >
                  <span style={{ fontSize: 18, flexShrink: 0 }}>{layer.icon}</span>
                  <div>
                    <div
                      style={{
                        fontFamily: 'var(--font-dm-mono)',
                        fontSize: 11,
                        color: layer.highlight ? 'var(--accent2)' : 'var(--text)',
                        fontWeight: 500,
                        letterSpacing: '0.04em',
                        marginBottom: 2,
                      }}
                    >
                      {layer.label}
                    </div>
                    <div style={{ fontSize: 11, color: 'var(--muted)' }}>{layer.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="container"><hr className="divider" /></div>

      {/* Framework 02 – AI Adoption Roadmap */}
      <section className="section">
        <div className="container">
          <div className="eyebrow">Framework 02</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
            <div>
              <h2
                style={{
                  fontFamily: 'var(--font-dm-serif), serif',
                  fontSize: 'clamp(26px, 3vw, 36px)',
                  lineHeight: 1.15,
                  letterSpacing: '-0.3px',
                  marginBottom: 16,
                }}
              >
                AI Adoption Roadmap
              </h2>
              <div className="orange-divider" />
              <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.8, marginBottom: 24 }}>
                Manufacturers don&apos;t transform overnight. The roadmap shows the four
                sequential phases of AI adoption — each one building the foundation for the next.
              </p>
              <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.8 }}>
                Most factories get stuck at Phase 1 or 2 because they try to skip Workflow AI
                before having AI-readable data. Makox&apos;s deployment methodology enforces
                the correct sequence.
              </p>
            </div>

            <div>
              {[
                { n: '01', title: 'Content AI', desc: 'Automate multilingual product content, marketing copy, and buyer communications. The fastest ROI, lowest risk entry point.' },
                { n: '02', title: 'Sales AI', desc: 'AI-driven inquiry classification, follow-up sequences, and deal pipeline management. Human-in-the-loop for high-value decisions.' },
                { n: '03', title: 'Workflow AI', desc: 'Standardize and automate cross-department processes. SOPs become machine-executable. Teams multiply their output.' },
                { n: '04', title: 'AI Workforce', desc: 'Full AI digital worker deployment. Agents operate autonomously across content, sales, and workflow layers simultaneously.' },
              ].map((phase, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    gap: 16,
                    padding: '20px 0',
                    borderBottom: i < 3 ? '0.5px solid var(--border)' : 'none',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-dm-mono)',
                      fontSize: 11,
                      color: 'var(--accent)',
                      letterSpacing: '0.08em',
                      flexShrink: 0,
                      paddingTop: 2,
                    }}
                  >
                    {phase.n}
                  </div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--text)', marginBottom: 6 }}>
                      {phase.title}
                    </div>
                    <p style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.7 }}>{phase.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="container"><hr className="divider" /></div>

      {/* Framework 03 – Factory AI Readiness Model */}
      <section className="section">
        <div className="container">
          <div className="eyebrow">Framework 03</div>
          <h2
            style={{
              fontFamily: 'var(--font-dm-serif), serif',
              fontSize: 'clamp(26px, 3vw, 36px)',
              lineHeight: 1.15,
              letterSpacing: '-0.3px',
              marginBottom: 16,
              maxWidth: 540,
            }}
          >
            Factory AI Readiness Model
          </h2>
          <div className="orange-divider" />
          <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.8, maxWidth: 580, marginBottom: 48 }}>
            Before deploying AI, you need to know where you are. The Readiness Model
            assesses five dimensions of operational maturity — data structure, workflow
            standardization, team AI literacy, tool integration, and decision automation.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 12 }}>
            {[
              { level: 'L0', name: 'Manual', desc: 'All processes are human-operated. No digital workflow layer. Data lives in people\'s heads or paper.', color: 'var(--muted)' },
              { level: 'L1', name: 'Tool-assisted', desc: 'Basic digital tools in use (ERP, CRM, spreadsheets). Data is digital but not AI-readable. Workflows still manual.', color: 'var(--muted)' },
              { level: 'L2', name: 'Partially automated', desc: 'Some workflows automated via RPA or basic integrations. Data begins to be structured. AI pilots attempted.', color: 'var(--text)' },
              { level: 'L3', name: 'Agent-driven', desc: 'AI agents operate specific workflows autonomously. Data governance in place. Human oversight at key decision points.', color: 'var(--text)' },
              { level: 'L4', name: 'AI-native', desc: 'AI is the default operating mode. Full AI workforce deployed. Continuous learning and self-optimization across all layers.', color: 'var(--accent2)' },
            ].map((l, i) => (
              <div
                key={i}
                style={{
                  background: 'var(--surface)',
                  border: `0.5px solid ${i === 4 ? 'var(--accent2)' : 'var(--border)'}`,
                  borderRadius: 10,
                  padding: 20,
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-dm-mono)',
                    fontSize: 10,
                    color: 'var(--accent)',
                    letterSpacing: '0.1em',
                    marginBottom: 6,
                  }}
                >
                  {l.level}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-dm-serif)',
                    fontSize: 16,
                    color: l.color,
                    marginBottom: 10,
                  }}
                >
                  {l.name}
                </div>
                <p style={{ fontSize: 11, color: 'var(--muted)', lineHeight: 1.65 }}>{l.desc}</p>
                {i === 4 && (
                  <div
                    style={{
                      marginTop: 12,
                      fontFamily: 'var(--font-dm-mono)',
                      fontSize: 10,
                      color: 'var(--accent2)',
                      letterSpacing: '0.06em',
                    }}
                  >
                    Target state
                  </div>
                )}
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: 32,
              padding: '20px 24px',
              background: 'var(--surface)',
              border: '0.5px solid var(--border)',
              borderRadius: 8,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 16,
            }}
          >
            <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.7, maxWidth: 500 }}>
              Most Chinese export manufacturers are at Level 0–1. Makox&apos;s free diagnostic
              assesses your current readiness level and identifies the fastest path to Level 3.
            </p>
            <Link href="/contact" className="btn-primary">
              Get Your Readiness Assessment
            </Link>
          </div>
        </div>
      </section>

      {/* Mobile responsive */}
      <style>{`
        @media (max-width: 768px) {
          .fw-two-col { grid-template-columns: 1fr !important; gap: 40px !important; }
          .fw-five-col { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>

      <Footer />
    </>
  )
}
