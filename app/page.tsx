import type { Metadata } from 'next'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Makox · 帮制造业团队跑通第一条 AI Workflow',
  description:
    '从询盘、报价、客服到资料整理，把 AI 真正接进工厂每天运转的业务流程。进驻现场，2–4 周交付。',
}

/* ── Hero diagram ── */
function WorkflowDiagram() {
  const steps = ['询盘接入', '规格提取', '产品匹配', '报价草稿', '人工确认', '客户发送']
  const nH = 34
  const cH = 28
  const w = 180
  const h = steps.length * nH + (steps.length - 1) * cH

  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} aria-hidden="true">
      {steps.map((step, i) => {
        const y = i * (nH + cH)
        const mid = w / 2
        return (
          <g key={step}>
            <rect x="0" y={y} width={w} height={nH} rx="4"
              stroke="rgba(255,255,255,0.09)" strokeWidth="0.5"
              fill="rgba(255,255,255,0.02)" />
            <text x={mid} y={y + nH / 2 + 4} textAnchor="middle"
              fontFamily="monospace" fontSize="11" fill="rgba(255,255,255,0.28)">
              {step}
            </text>
            {i < steps.length - 1 && (
              <>
                <line x1={mid} y1={y + nH} x2={mid} y2={y + nH + cH - 8}
                  stroke="rgba(255,255,255,0.09)" strokeWidth="0.5" strokeDasharray="2 3" />
                <polygon
                  points={`${mid - 4},${y + nH + cH - 10} ${mid + 4},${y + nH + cH - 10} ${mid},${y + nH + cH - 2}`}
                  fill="rgba(255,255,255,0.1)" />
              </>
            )}
          </g>
        )
      })}
    </svg>
  )
}

/* ── Card icons ── */
function IconEnvelopeLightning() {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="rgba(0,0,0,0.6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="8" y="18" width="36" height="26" rx="3" />
      <polyline points="8,18 26,32 44,18" />
      <polyline points="40,8 36,20 42,20 38,34" />
    </svg>
  )
}

function IconDocPen() {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="rgba(0,0,0,0.6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="10" y="6" width="30" height="42" rx="3" />
      <line x1="17" y1="18" x2="33" y2="18" />
      <line x1="17" y1="26" x2="33" y2="26" />
      <line x1="17" y1="34" x2="27" y2="34" />
      <path d="M42 34 L52 24 L56 28 L46 38 L40 40 Z" />
    </svg>
  )
}

function IconChatDB() {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="rgba(0,0,0,0.6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 8 h24 a3 3 0 0 1 3 3 v13 a3 3 0 0 1-3 3 H17 l-7 6 v-6 H6 a3 3 0 0 1-3-3 V11 a3 3 0 0 1 3-3z" />
      <ellipse cx="47" cy="36" rx="11" ry="4" />
      <line x1="36" y1="36" x2="36" y2="50" />
      <line x1="58" y1="36" x2="58" y2="50" />
      <ellipse cx="47" cy="43" rx="11" ry="4" />
      <ellipse cx="47" cy="50" rx="11" ry="4" />
    </svg>
  )
}

function IconTableScale() {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="rgba(0,0,0,0.6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="8" width="30" height="28" rx="2" />
      <line x1="4" y1="18" x2="34" y2="18" />
      <line x1="4" y1="28" x2="34" y2="28" />
      <line x1="17" y1="8" x2="17" y2="36" />
      <line x1="47" y1="14" x2="47" y2="46" />
      <line x1="37" y1="20" x2="57" y2="20" />
      <path d="M37 20 c0 7 4.5 11 10 11 s10-4 10-11" />
      <line x1="42" y1="46" x2="52" y2="46" />
    </svg>
  )
}

function IconMagnifierList() {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="rgba(0,0,0,0.6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="26" cy="26" r="16" />
      <line x1="37" y1="37" x2="52" y2="52" />
      <line x1="19" y1="22" x2="33" y2="22" />
      <line x1="19" y1="28" x2="33" y2="28" />
      <polyline points="17,34 21,38 27,32" />
    </svg>
  )
}

function IconCalendarBot() {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="rgba(0,0,0,0.6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="12" width="28" height="26" rx="2" />
      <line x1="4" y1="22" x2="32" y2="22" />
      <line x1="12" y1="8" x2="12" y2="16" />
      <line x1="24" y1="8" x2="24" y2="16" />
      <line x1="10" y1="30" x2="16" y2="30" />
      <line x1="10" y1="36" x2="16" y2="36" />
      <rect x="38" y="26" width="20" height="16" rx="3" />
      <circle cx="44" cy="32" r="2" />
      <circle cx="52" cy="32" r="2" />
      <line x1="44" y1="37" x2="52" y2="37" />
      <line x1="44" y1="22" x2="48" y2="26" />
      <line x1="44" y1="42" x2="42" y2="50" />
      <line x1="54" y1="42" x2="56" y2="50" />
    </svg>
  )
}

/* ── Workflow card data ── */
const workflowCards = [
  {
    color: '#C4956A',
    Icon: IconEnvelopeLightning,
    title: '外贸询盘自动回复',
    desc: '客户邮件进来，AI 提取规格需求，匹配产品库，生成报价草稿，业务员确认后发送。',
    pipeline: '客户邮件 → 规格提取 → 产品匹配 → 报价草稿 → 人工发送',
    category: '外贸业务',
    status: 'deployed' as const,
  },
  {
    color: '#7A9E7E',
    Icon: IconDocPen,
    title: '跨境产品 Listing 生成',
    desc: '工厂提供产品参数和图片，AI 生成多平台标准化 Listing，支持 Amazon / Wayfair / TikTok Shop。',
    pipeline: '产品参数 → 多语言生成 → 平台格式化 → 审核上架',
    category: '跨境电商',
    status: 'deployed' as const,
  },
  {
    color: '#7B8FA3',
    Icon: IconChatDB,
    title: '客服 FAQ 自动应答',
    desc: '整理产品 FAQ、售后政策、物流规则，搭建结构化知识库，常见问题自动应答。',
    pipeline: '客户问题 → 知识库检索 → 答案匹配 → 自动回复',
    category: '客户服务',
    status: 'building' as const,
  },
  {
    color: '#9E8BA6',
    Icon: IconTableScale,
    title: '供应商报价对比',
    desc: '多家供应商报价单格式各异，AI 统一提取关键参数，自动生成横向对比表，标注差异和建议。',
    pipeline: '报价单上传 → 参数提取 → 横向对比 → 差异标注',
    category: '供应链',
    status: 'planned' as const,
  },
  {
    color: '#B07D6A',
    Icon: IconMagnifierList,
    title: '验货报告自动生成',
    desc: '验货员现场拍照加语音记录，AI 结构化整理，生成标准验货报告，自动发送给客户。',
    pipeline: '现场拍照 → 语音记录 → 结构整理 → 报告发送',
    category: '品控',
    status: 'planned' as const,
  },
  {
    color: '#8A9BA8',
    Icon: IconCalendarBot,
    title: '团队日报自动整理',
    desc: '团队成员每日语音或文字输入工作内容，AI 汇总，自动生成结构化日报，推送管理层。',
    pipeline: '成员输入 → 内容汇总 → 日报生成 → 管理层推送',
    category: '团队管理',
    status: 'building' as const,
  },
]

const statusLabel: Record<string, string> = {
  deployed: '已部署',
  building: '搭建中',
  planned: '规划中',
}

/* ── Page ── */
export default function HomePage() {
  return (
    <>
      {/* ── SECTION 1: HERO ── */}
      <section className="section" style={{ paddingTop: 72 }}>
        <div className="container">
          <div className="hero-inner">
            {/* Left */}
            <div>
              <div className="anim-1 eyebrow">AI Workflow 服务</div>
              <h1
                className="anim-2"
                style={{
                  fontFamily: 'var(--font-dm-serif), serif',
                  fontSize: 'clamp(38px, 5vw, 58px)',
                  lineHeight: 1.08,
                  letterSpacing: '-1px',
                  marginBottom: 20,
                  maxWidth: 620,
                }}
              >
                帮制造业团队，<br />
                跑通第一条 AI Workflow。
              </h1>
              <p
                className="anim-3"
                style={{
                  fontSize: 16,
                  color: 'var(--muted)',
                  lineHeight: 1.85,
                  maxWidth: 480,
                  marginBottom: 36,
                }}
              >
                从询盘、报价、客服到资料整理，<br />
                把 AI 真正接进工厂每天运转的业务流程。
              </p>
              <div className="anim-4" style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <a href="mailto:MashiTeam@163.com" className="btn-primary">聊聊你的业务流程</a>
                <a href="#workflow-cases" className="btn-ghost">查看案例 ↓</a>
              </div>
            </div>

            {/* Right – minimal workflow diagram */}
            <div className="hero-diagram" aria-hidden="true">
              <WorkflowDiagram />
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: WORKFLOW CASES ── */}
      <section className="section" id="workflow-cases" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-header" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
            <h2 className="section-title">Workflow 案例</h2>
            <p className="section-note" style={{ maxWidth: 440 }}>
              真实企业场景。不是 Demo，是已经在运行的工作流。
            </p>
          </div>

          <div className="wf-grid">
            {workflowCards.map((card) => (
              <div key={card.title} className="wf-card">
                <div className="wf-card-header" style={{ background: card.color }}>
                  <card.Icon />
                </div>
                <div className="wf-card-body">
                  <div className="wf-card-title">{card.title}</div>
                  <div className="wf-card-desc">{card.desc}</div>
                  <div className="wf-pipeline">{card.pipeline}</div>
                  <div className="wf-card-tags">
                    <span className="tag">{card.category}</span>
                    <span className={`wf-badge wf-badge-${card.status}`}>
                      {statusLabel[card.status]}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: THREE CAPABILITIES ── */}
      <section className="section" id="services" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              三层能力，<em>一个目标</em>
            </h2>
            <p className="section-note">
              让 AI 真正在你的业务里跑起来，<br />
              不是装一个 ChatGPT 就结束。
            </p>
          </div>

          <div className="service-grid">
            <div className="service-card">
              <span className="service-arrow">↗</span>
              <div className="service-num">01</div>
              <div className="service-icon">🔍</div>
              <div className="service-name">流程诊断</div>
              <p className="service-desc">
                进厂看你的团队每天怎么干活。<br />
                找到最值得先用 AI 跑通的那个动作。
              </p>
              <div className="service-tags">
                <span className="tag">60 分钟 · 免费</span>
              </div>
            </div>

            <div className="service-card">
              <span className="service-arrow">↗</span>
              <div className="service-num">02</div>
              <div className="service-icon">⚙️</div>
              <div className="service-name">Workflow 搭建</div>
              <p className="service-desc">
                把诊断结果落地成可运行的工作流。<br />
                接入 AI 模型，跑通数据，测试验证。
              </p>
              <div className="service-tags">
                <span className="tag">2–4 周交付</span>
              </div>
            </div>

            <div className="service-card">
              <span className="service-arrow">↗</span>
              <div className="service-num">03</div>
              <div className="service-icon">🔄</div>
              <div className="service-name">持续迭代</div>
              <p className="service-desc">
                上线不是终点。<br />
                我们陪跑优化，按业务变化调整 Workflow。
              </p>
              <div className="service-tags">
                <span className="tag">按月服务</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: MANIFESTO ── */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="manifesto-box">
            <p className="manifesto-headline">我们不会一上来就卖你 AI。</p>
            <div className="manifesto-cols">
              <div>
                <div className="manifesto-col-label">我们不会</div>
                <ul className="manifesto-list manifesto-list--no">
                  <li>卖通用 AI 课程</li>
                  <li>装一堆没人用的软件</li>
                  <li>承诺"全自动 AI 公司"</li>
                  <li>用 Demo 替代真实业务</li>
                </ul>
              </div>
              <div>
                <div className="manifesto-col-label">我们会</div>
                <ul className="manifesto-list manifesto-list--yes">
                  <li>先看真实流程</li>
                  <li>找最值得 AI 化的一步</li>
                  <li>跑通第一个 Workflow</li>
                  <li>再逐步扩展</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: HOW IT WORKS ── */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">怎么合作</h2>
            <p className="section-note">从诊断到上线，全程陪跑。</p>
          </div>
          <div className="steps-grid">
            <div className="step">
              <div className="step-n">STEP 01</div>
              <div className="step-title">免费诊断</div>
              <p className="step-desc">
                到你的企业现场，看真实业务怎么跑。60 分钟，找到最值得先跑通的那件事。
              </p>
            </div>
            <div className="step">
              <div className="step-n">STEP 02</div>
              <div className="step-title">方案设计</div>
              <p className="step-desc">
                定制 Workflow 方案，明确能做什么、不能做什么、多久能看到效果。
              </p>
            </div>
            <div className="step">
              <div className="step-n">STEP 03</div>
              <div className="step-title">搭建交付</div>
              <p className="step-desc">
                2–4 周完成 Workflow 搭建，接入真实数据，在真实场景里验证。
              </p>
            </div>
            <div className="step">
              <div className="step-n">STEP 04</div>
              <div className="step-title">陪跑优化</div>
              <p className="step-desc">
                上线后持续迭代。业务变了，Workflow 跟着变。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: CTA ── */}
      <section className="section-sm">
        <div className="container">
          <div className="cta-box">
            <div>
              <h2 className="cta-title">
                想知道你的业务里，<br />
                哪个动作最适合先用 AI 跑？
              </h2>
              <p className="cta-sub">
                不是卖软件。<br />
                先看看 AI 最适合帮你做哪一步。
              </p>
              <div style={{ marginTop: 28, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <a href="mailto:MashiTeam@163.com" className="btn-primary">
                  聊聊你的业务流程
                </a>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
              <div className="wechat-qr">
                <span style={{ fontSize: 28 }}>💬</span>
                <span>WeChat QR</span>
              </div>
              <p style={{ fontFamily: 'var(--font-dm-mono)', fontSize: 10, color: 'var(--muted)', textAlign: 'center', letterSpacing: '0.04em', lineHeight: 1.6 }}>
                扫码预约免费现场诊断<br />
                <span style={{ opacity: 0.7 }}>通常 24 小时内回复 · 首次诊断免费</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
