import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: '数字治理 & Workflow · Makox',
  description: 'AI 部署前的必要底座。Makox 数字治理服务——数据结构化、SOP 标准化、Workflow 重构，让 AI 真正能跑起来。',
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: "3px", textTransform: "uppercase" as const, color: "#f59e0b", marginBottom: 20, display: "flex", alignItems: "center", gap: 12 }}>
      <span style={{ display: "inline-block", width: 32, height: 1, background: "#f59e0b", flexShrink: 0 }} />
      {children}
    </div>
  )
}

const S = {
  page: { background: "#08080a", color: "#e4e2dc", minHeight: "100vh" } as React.CSSProperties,
  hero: { padding: "100px 40px 72px", maxWidth: 1100, margin: "0 auto" } as React.CSSProperties,
  h1: { fontFamily: "'Instrument Sans','Noto Sans SC',sans-serif", fontSize: "clamp(32px,4.5vw,58px)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: 20, maxWidth: 760 } as React.CSSProperties,
  sub: { fontSize: 16, color: "#888", lineHeight: 1.8, maxWidth: 640, marginBottom: 48 } as React.CSSProperties,
  section: { padding: "72px 40px", maxWidth: 1100, margin: "0 auto" } as React.CSSProperties,
  h2: { fontFamily: "'Instrument Sans','Noto Sans SC',sans-serif", fontSize: "clamp(22px,3vw,34px)", fontWeight: 700, letterSpacing: "-0.025em", marginBottom: 8, lineHeight: 1.2 } as React.CSSProperties,
  divider: { height: 1, background: "linear-gradient(90deg, transparent, #1e1e1e, transparent)", margin: "0 40px" } as React.CSSProperties,
  muted: { fontSize: 14, color: "#666", lineHeight: 1.75 } as React.CSSProperties,
}

export default function GovernancePage() {
  return (
    <div style={S.page}>
      <Nav />

      {/* HERO */}
      <section style={S.hero}>
        <Label>Service · 数字治理</Label>
        <h1 style={S.h1}>先把地基打好，再谈盖楼</h1>
        <p style={S.sub}>
          大多数 AI 项目失败不是模型的问题。是业务数据不可读，SOP 不存在，workflow 碎掉了。我们的数字治理服务是 Agent 部署的前置条件——也是很多工厂独立做完就已经获益的阶段。
        </p>
        <div style={{ display: "flex", gap: 40, flexWrap: "wrap" as const, paddingTop: 32, borderTop: "1px solid #1a1a1a" }}>
          {[
            ["AI项目因数据/流程失败", "70%"],
            ["平均SOP文档化周期", "2–4 周"],
            ["治理后Agent效率提升", "3–5×"],
            ["工厂平均信息孤岛数", "6–10 个"],
          ].map(([label, val]) => (
            <div key={label}>
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 24, fontWeight: 700, color: "#f59e0b", marginBottom: 4 }}>{val}</div>
              <div style={{ fontSize: 11, color: "#444", letterSpacing: "0.5px", maxWidth: 160 }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      <div style={S.divider} />

      {/* WHAT IS GOVERNANCE */}
      <section style={S.section}>
        <Label>Definition · 什么是数字治理</Label>
        <h2 style={S.h2}>数字治理是什么</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, marginTop: 32, alignItems: "start" }}>
          <div>
            <p style={{ fontSize: 15, color: "#ccc", lineHeight: 1.8, marginBottom: 24 }}>
              把企业知识从人脑袋里取出来，变成 AI 可读的结构化资产。
            </p>
            <p style={S.muted}>
              这不是安装一套系统，也不是招一个 IT 顾问。是把你企业里真正在用的流程、规则、经验，变成可以被软件、AI、新员工读懂并执行的文档和数据。
            </p>
            <p style={{ ...S.muted, marginTop: 16 }}>
              做完之后，哪怕不部署任何 AI，工厂的运转效率也会有明显提升——因为知识不再只住在老员工的脑袋里了。
            </p>
          </div>
          <div style={{ background: "#0c0c0e", padding: "28px 24px" }}>
            <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: "#444", letterSpacing: 2, marginBottom: 16 }}>BEFORE vs AFTER</div>
            {[
              ["询盘规则 → 业务员经验", "询盘规则 → 结构化决策树"],
              ["SOP → 老员工口口相传", "SOP → 可执行的标准文档"],
              ["客户数据 → 散在多个 Excel", "客户数据 → 统一的结构化数据库"],
              ["跨部门沟通 → 微信群", "跨部门沟通 → 有记录的工作流节点"],
            ].map(([before, after]) => (
              <div key={before} style={{ display: "grid", gridTemplateColumns: "1fr 24px 1fr", gap: 8, alignItems: "center", padding: "10px 0", borderBottom: "1px solid #111", fontSize: 12 }}>
                <div style={{ color: "#444" }}>{before}</div>
                <div style={{ color: "#333", textAlign: "center" as const, fontFamily: "'JetBrains Mono',monospace" }}>→</div>
                <div style={{ color: "#888" }}>{after}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={S.divider} />

      {/* 5 DELIVERABLES */}
      <section style={S.section}>
        <Label>Deliverables · 交付物</Label>
        <h2 style={S.h2}>五个核心交付物</h2>
        <p style={{ ...S.muted, marginBottom: 36, maxWidth: 560 }}>不是报告，是真正可以被立刻使用的资产。</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 2 }}>
          {[
            { no: "01", title: "业务流程图谱", desc: "用可视化方式把企业核心流程（询盘→成单→跟单→售后）完整绘制出来，标注人工节点和可自动化节点。" },
            { no: "02", title: "SOP 标准化文档库", desc: "把散落在人脑袋里的操作规范整理成结构化文档，格式统一、版本可控、AI 可读。" },
            { no: "03", title: "数据结构化方案", desc: "针对你现有的数据（CRM/ERP/Excel）给出清洗和结构化方案，让 AI 可以真正读懂你的业务数据。" },
            { no: "04", title: "工具栈架构建议", desc: "你现在用的工具够不够、对不对、有没有更好的选择——基于你的实际业务规模给出不带销售动机的建议。" },
            { no: "05", title: "AI 就绪度评估报告", desc: "5 个维度的 AI 就绪度评分，以及从当前等级到 L3 的具体行动路径。" },
          ].map((item) => (
            <div key={item.no} style={{ background: "#0c0c0e", padding: "28px 24px" }}>
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: "#f59e0b", marginBottom: 12 }}>{item.no}</div>
              <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 10, color: "#e4e2dc" }}>{item.title}</div>
              <div style={S.muted}>{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <div style={S.divider} />

      {/* COMMON SCENARIOS */}
      <section style={S.section}>
        <Label>Common Scenarios · 常见场景</Label>
        <h2 style={S.h2}>这四个场景说的是你吗</h2>
        <div style={{ display: "flex", flexDirection: "column" as const, gap: 2, marginTop: 32 }}>
          {[
            { icon: "→", title: "业务全靠经验传承，老员工走了就断了", detail: "产品知识、客户关系、谈判技巧全在老业务员脑袋里。他一离职，这些就不见了。数字治理把这些知识外化成可继承的资产。" },
            { icon: "→", title: "ERP 买了没人维护，变成了摆设", detail: "系统买了，数据不干净，流程没跑通，最后大家还是用 Excel 和微信。治理先于系统——流程不清楚，上什么系统都是白费。" },
            { icon: "→", title: "跨部门信息全在微信群里", detail: "订单状态要找人问，生产进度靠催，客户反馈找不到记录。这不是沟通问题，是信息没有结构化的问题，软件解决不了，需要流程重构。" },
            { icon: "→", title: "客户历史数据无法统计分析", detail: "成交了几百个客户，但说不清楚哪类客户复购率高、哪个品类利润最好、哪个市场值得加大投入。数据在，但没有结构，就等于没有。" },
          ].map((item) => (
            <div key={item.title} style={{ background: "#0c0c0e", padding: "22px 28px", display: "grid", gridTemplateColumns: "280px 1fr", gap: 24, borderBottom: "1px solid #111" }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: "#ccc" }}>{item.title}</div>
              <div style={{ fontSize: 13, color: "#666", lineHeight: 1.7 }}>{item.detail}</div>
            </div>
          ))}
        </div>
      </section>

      <div style={S.divider} />

      {/* WHAT WE DON'T DO */}
      <section style={S.section}>
        <Label>Honest Limits · 我们不做的事</Label>
        <h2 style={S.h2}>三件我们不做的事</h2>
        <div style={{ display: "flex", flexDirection: "column" as const, gap: 2, marginTop: 32 }}>
          {[
            { no: "不卖 ERP 系统", why: "我们不代理也不推销任何 ERP 或 SaaS 产品。建议工具栈的时候没有销售动机，只有你是否需要的判断。" },
            { no: "不做 IT 咨询", why: "我们不做服务器搭建、网络安全、IT 运维。我们只关注业务流程和数据结构，IT 基础设施不是我们的领域。" },
            { no: "不适合不打算改变工作方式的工厂", why: "数字治理需要内部配合——流程访谈、文档整理、习惯改变。如果管理层只想要一份报告、不打算推行执行，做了也白做。我们不浪费彼此的时间。" },
          ].map((item) => (
            <div key={item.no} style={{ background: "#0c0c0e", padding: "22px 28px", display: "grid", gridTemplateColumns: "200px 1fr", gap: 24, borderBottom: "1px solid #111" }}>
              <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: "#ef4444", flexShrink: 0, marginTop: 2 }}>✕</span>
                <span style={{ fontSize: 14, fontWeight: 600, color: "#ccc" }}>{item.no}</span>
              </div>
              <div style={{ fontSize: 13, color: "#666", lineHeight: 1.7 }}>{item.why}</div>
            </div>
          ))}
        </div>
      </section>

      <div style={S.divider} />

      {/* TIMELINE */}
      <section style={S.section}>
        <Label>Timeline · 项目周期</Label>
        <h2 style={S.h2}>标准项目 4–6 周</h2>
        <p style={{ ...S.muted, marginBottom: 40, maxWidth: 560 }}>输出物是可执行的 SOP 和 Workflow 架构，不是一份建议报告。</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2 }}>
          {[
            { week: "第 1–2 周", title: "流程诊断与访谈", items: ["深度访谈关键业务负责人（销售/跟单/运营）", "现有工具栈和数据资产盘点", "核心流程可视化初稿"] },
            { week: "第 3–4 周", title: "文档化与结构化", items: ["SOP 标准化编写", "数据字段和结构设计", "Workflow 重构方案"] },
            { week: "第 5–6 周", title: "交付与培训", items: ["全套文档交付与审核", "团队 Walkthrough 培训", "AI 就绪度评估报告"] },
          ].map((p) => (
            <div key={p.week} style={{ background: "#0c0c0e", padding: "28px 24px" }}>
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: "#444", letterSpacing: 2, marginBottom: 12 }}>{p.week}</div>
              <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 16, color: "#e4e2dc" }}>{p.title}</div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column" as const, gap: 8 }}>
                {p.items.map(t => (
                  <li key={t} style={{ fontSize: 13, color: "#888", display: "flex", gap: 8 }}>
                    <span style={{ color: "#3b82f6", flexShrink: 0 }}>→</span>{t}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <div style={S.divider} />

      {/* FAQ */}
      <section style={S.section}>
        <Label>FAQ · 常见问题</Label>
        <h2 style={{ ...S.h2, marginBottom: 40 }}>五个高频问题</h2>
        <div style={{ display: "flex", flexDirection: "column" as const, gap: 0 }}>
          {[
            { q: "数字治理和 IT 部门有什么区别？", a: "IT 部门负责系统的搭建和运维——服务器、网络、软件权限。数字治理负责的是业务层面的事：流程是什么、数据放在哪、SOP 怎么写。两者互补，但职责完全不同。很多工厂有 IT，但从来没有人做过业务流程标准化。" },
            { q: "需要买新的软件吗？", a: "通常不需要。我们的原则是：先治理，再选工具。80% 的情况下，你现有的工具已经够用——问题是数据没有结构化、流程没有标准化。买新软件不解决这个问题，只是把旧问题搬到新系统里。" },
            { q: "小工厂需要做治理吗？", a: "年营收低于 1000 万、团队少于 10 人的工厂，可以先做最简版治理：把核心 SOP 文档化，建立基础客户数据库。不需要完整的 4–6 周项目，但这个底座必须有——否则任何 AI 工具都会在你的工厂里失效。" },
            { q: "治理完之后怎么维护？", a: "我们交付时包含一套维护 SOP，说明如何在流程变化时更新文档。通常每季度一次复盘，由你的内部负责人主导。文档是活的，不是交付完就归档的死资产。" },
            { q: "数字治理和 Agent 部署是什么关系？", a: "治理是 Agent 的前置条件。一个没有数据基础、没有 SOP 的工厂部署 Agent，Agent 会因为没有可读的数据和规则而工作不稳定。治理做好之后，Agent 部署的成功率会高出 3–5 倍，周期也会明显缩短。" },
          ].map((item, i) => (
            <div key={i} style={{ padding: "28px 0", borderBottom: "1px solid #111" }}>
              <div style={{ fontSize: 15, fontWeight: 600, color: "#e4e2dc", marginBottom: 12, display: "flex", gap: 12 }}>
                <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: "#f59e0b", flexShrink: 0, marginTop: 3 }}>Q{i + 1}</span>
                {item.q}
              </div>
              <div style={{ fontSize: 14, color: "#666", lineHeight: 1.8, paddingLeft: 28 }}>{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <div style={S.divider} />

      {/* CTA */}
      <section style={{ padding: "80px 40px", maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ background: "#0c0c0e", border: "1px solid #1a1a1c", padding: "56px 48px", display: "grid", gridTemplateColumns: "1fr auto", gap: 48, alignItems: "center" }}>
          <div>
            <Label>Start Here · 从这里开始</Label>
            <h2 style={{ ...S.h2, marginBottom: 12 }}>先做免费的 AI 就绪评估，再决定下一步</h2>
            <p style={{ fontSize: 15, color: "#666", lineHeight: 1.75, maxWidth: 480 }}>
              60 分钟，我们看你现在在哪个就绪等级，缺的是什么，修复的优先级是什么。不需要承诺任何项目就可以拿到这份评估。
            </p>
          </div>
          <div>
            <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 12, padding: "16px 32px", background: "#f59e0b", color: "#08080a", fontSize: 14, fontWeight: 700, fontFamily: "'Instrument Sans',sans-serif", textDecoration: "none" }}>
              获取 AI 就绪评估 →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
