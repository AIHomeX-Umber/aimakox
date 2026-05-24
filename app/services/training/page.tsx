import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'AI 实战培训 · Makox',
  description: 'Makox AI 实战培训——企业内训、Small B 训练营、Pro A 工作坊。不讲概念，只教落地，每堂课都带走可用的成果。',
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

export default function TrainingPage() {
  return (
    <div style={S.page}>
      <Nav />

      {/* HERO */}
      <section style={S.hero}>
        <Label>Service · AI 实战培训</Label>
        <h1 style={S.h1}>不讲概念，只教落地</h1>
        <p style={S.sub}>
          市面上 AI 课程不少，但大多数都在讲"AI 改变世界"。我们的培训只有一个标准：上完课之后，你能用 AI 完成一件具体的工作任务。不能的话，这堂课就是失败的。
        </p>
        <div style={{ display: "flex", gap: 40, flexWrap: "wrap" as const, paddingTop: 32, borderTop: "1px solid #1a1a1a" }}>
          {[
            ["培训形式", "3 种"],
            ["即学即用周期", "2–4 小时"],
            ["培训后工具使用率", ">80%"],
            ["行业平均工具使用率", "<20%"],
          ].map(([label, val]) => (
            <div key={label}>
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 24, fontWeight: 700, color: "#f59e0b", marginBottom: 4 }}>{val}</div>
              <div style={{ fontSize: 11, color: "#444", letterSpacing: "0.5px", maxWidth: 160 }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      <div style={S.divider} />

      {/* THREE FORMATS */}
      <section style={S.section}>
        <Label>Training Formats · 三种形式</Label>
        <h2 style={S.h2}>三种培训形式，对应三类需求</h2>
        <p style={{ ...S.muted, marginBottom: 36, maxWidth: 580 }}>没有通用课程。每一种形式都针对不同的人群和目标设计。</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2 }}>
          {[
            {
              title: "企业内训", color: "#f59e0b", tag: "ENTERPRISE",
              desc: "针对你的行业和业务场景定制，不用通用课件。",
              items: [
                "按行业（五金/陶瓷/卫浴）定制课程内容",
                "管理层和执行层分开培训，目标不同",
                "培训后提供 30 天答疑支持",
                "最小团队规模：5 人",
              ],
            },
            {
              title: "Small B 训练营", color: "#3b82f6", tag: "SMALL B",
              desc: "面向个体创业者和一人公司，从零开始 AI 武装。",
              items: [
                "Prompt Engineering + Workflow + Agent 基础",
                "每期 8–12 人小班，保证互动质量",
                "带走至少 3 个可立刻投入使用的工作流",
                "适合：跨境贸易商、独立设计师、自媒体人",
              ],
            },
            {
              title: "Pro A 工作坊", color: "#22c55e", tag: "PRO A",
              desc: "针对有具体工作场景的专业人士，深度升级单一技能。",
              items: [
                "设计师 / 贸易商 / 运营 / 内容人专场",
                "聚焦一个具体工作场景，不求全，只求深",
                "半天完成一个完整工作流的 AI 改造",
                "适合：已有基础，想在专业场景里突破的人",
              ],
            },
          ].map((fmt) => (
            <div key={fmt.title} style={{ background: "#0c0c0e", padding: "28px 24px", borderTop: `2px solid ${fmt.color}` }}>
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: fmt.color, letterSpacing: 2, marginBottom: 12 }}>{fmt.tag}</div>
              <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 8, color: "#e4e2dc" }}>{fmt.title}</div>
              <div style={{ fontSize: 13, color: "#666", marginBottom: 20, lineHeight: 1.6, fontStyle: "italic" }}>{fmt.desc}</div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column" as const, gap: 8 }}>
                {fmt.items.map(t => (
                  <li key={t} style={{ fontSize: 13, color: "#888", display: "flex", gap: 8, alignItems: "flex-start" }}>
                    <span style={{ color: fmt.color, flexShrink: 0, marginTop: 2 }}>→</span>{t}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <div style={S.divider} />

      {/* BY ROLE */}
      <section style={S.section}>
        <Label>By Role · 按角色学什么</Label>
        <h2 style={S.h2}>不同角色学不同的东西</h2>
        <p style={{ ...S.muted, marginBottom: 36, maxWidth: 560 }}>AI 工具一样，但应用场景完全不同。培训必须从你的真实工作出发。</p>
        <div style={{ display: "flex", flexDirection: "column" as const, gap: 2 }}>
          {[
            {
              role: "外贸业务员",
              tag: "SALES",
              items: ["询盘 AI 分析——快速判断询盘质量和客户意图", "多语言内容生成——产品描述、报价邮件一键多语言", "自动跟进序列——设计客户跟进节奏，AI 帮你按时发送"],
            },
            {
              role: "内容运营",
              tag: "CONTENT",
              items: ["AI 内容工厂——建立批量内容生产 SOP", "SEO / GEO 优化——让 AI 搜索引擎和传统搜索引擎都能找到你", "多平台分发——一篇内容，自动适配 5 个平台格式"],
            },
            {
              role: "管理层",
              tag: "LEADERSHIP",
              items: ["AI 战略框架——如何制定适合自己公司的 AI 导入路径", "Readiness 评估——客观评估自己工厂的 AI 就绪等级", "ROI 计算模型——在投入 AI 前先算清楚回报预期"],
            },
          ].map((r) => (
            <div key={r.role} style={{ background: "#0c0c0e", padding: "24px 28px", display: "grid", gridTemplateColumns: "160px 1fr", gap: 32, borderBottom: "1px solid #111", alignItems: "start" }}>
              <div>
                <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 9, color: "#444", letterSpacing: 2, marginBottom: 6 }}>{r.tag}</div>
                <div style={{ fontSize: 15, fontWeight: 700, color: "#e4e2dc" }}>{r.role}</div>
              </div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column" as const, gap: 10 }}>
                {r.items.map(t => (
                  <li key={t} style={{ fontSize: 13, color: "#888", display: "flex", gap: 8, alignItems: "flex-start", lineHeight: 1.6 }}>
                    <span style={{ color: "#f59e0b", flexShrink: 0, marginTop: 2 }}>→</span>
                    <span><strong style={{ color: "#ccc" }}>{t.split('——')[0]}</strong>{t.includes('——') ? `——${t.split('——')[1]}` : ''}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <div style={S.divider} />

      {/* NOT FOR EVERYONE */}
      <section style={S.section}>
        <Label>Honest Limits · 培训不适合谁</Label>
        <h2 style={S.h2}>这三类人来了也是浪费时间</h2>
        <p style={{ ...S.muted, marginBottom: 36, maxWidth: 560 }}>说清楚不适合，是对大家时间的尊重。</p>
        <div style={{ display: "flex", flexDirection: "column" as const, gap: 2 }}>
          {[
            { title: "想用 AI 替代所有员工的管理者", reason: "这个预期会导致整个培训目标错位。AI 是增强工具，不是替代方案。带着错误预期来培训，学到的东西也会被错误地应用。" },
            { title: "没有具体业务问题，只是\"了解一下\"的", reason: "AI 工具培训需要从真实问题出发，\"了解一下\" 的学员很难有足够的代入感，培训结束后工具使用率接近零。如果你只是想了解 AI 趋势，可以看我们的博客，不需要花时间上课。" },
            { title: "没有时间练习的人", reason: "AI 工具的核心能力在于使用频率——用得越多越好用。如果培训后两周内不会再碰这个工具，学了也白学。我们的培训设计是基于你会持续使用的前提。" },
          ].map((item) => (
            <div key={item.title} style={{ background: "#0c0c0e", padding: "22px 28px", display: "grid", gridTemplateColumns: "240px 1fr", gap: 24, borderBottom: "1px solid #111", alignItems: "start" }}>
              <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: "#ef4444", flexShrink: 0, marginTop: 2 }}>✕</span>
                <span style={{ fontSize: 14, fontWeight: 600, color: "#ccc", lineHeight: 1.5 }}>{item.title}</span>
              </div>
              <div style={{ fontSize: 13, color: "#666", lineHeight: 1.7 }}>{item.reason}</div>
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
            { q: "培训结束后如何落地？", a: "每次培训结束时，每个学员都需要完成一个\"第一件任务\"——把今天学的应用到明天的一件具体工作上。我们还提供 30 天答疑群，学员遇到真实问题可以随时提问。没有作业，没有考核，只有实际使用。" },
            { q: "需要技术背景吗？", a: "完全不需要。我们的培训对象是业务人员，不是工程师。唯一的前置条件是：你有一台电脑，有一个真实的工作场景，愿意在培训中练习。" },
            { q: "企业内训多少人合适？", a: "10–30 人是最理想的规模。太少（5 人以下）互动质量低，太多（30 人以上）个体关注不够。如果团队超过 30 人，我们建议分组，管理层和执行层分开培训。" },
            { q: "和网上免费课程的区别是什么？", a: "免费课程讲的是\"ChatGPT 能做什么\"，我们讲的是\"你在五金出口行业的询盘回复用 AI 怎么做\"。行业语境、真实案例、自己动手操作——这三点在免费通用课程里基本不存在。" },
            { q: "有没有后续支持？", a: "企业内训包含 30 天答疑支持，Small B 训练营学员可以加入持续学习社群。我们不做长期订阅制的陪跑，但关键问题我们会回答。如果需要系统性的持续支持，应该讨论 Agent 部署，而不是培训。" },
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
            <Label>Book Training · 预约培训</Label>
            <h2 style={{ ...S.h2, marginBottom: 12 }}>告诉我们你的场景，我们设计课程</h2>
            <p style={{ fontSize: 15, color: "#666", lineHeight: 1.75, maxWidth: 480 }}>
              企业内训请说明团队规模和行业。训练营和工作坊下期开班时间，联系我们获取通知。
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: 12 }}>
            <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 12, padding: "16px 32px", background: "#f59e0b", color: "#08080a", fontSize: 14, fontWeight: 700, fontFamily: "'Instrument Sans',sans-serif", textDecoration: "none" }}>
              预约企业内训 →
            </Link>
            <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 12, padding: "14px 32px", background: "transparent", border: "1px solid #333", color: "#888", fontSize: 13, fontFamily: "'Instrument Sans',sans-serif", textDecoration: "none" }}>
              了解训练营 / 工作坊
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
