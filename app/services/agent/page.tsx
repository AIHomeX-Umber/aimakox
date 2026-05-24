import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: '企业 Agent 部署 · Makox',
  description: 'Makox 企业 Agent 部署服务——内容Agent、销售Agent、客服Agent、跟单Agent。2-4周交付，不是工具，是能自主运转的AI团队。',
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

export default function AgentPage() {
  return (
    <div style={S.page}>
      <Nav />

      {/* HERO */}
      <section style={S.hero}>
        <Label>Service · 企业 Agent 部署</Label>
        <h1 style={S.h1}>不是装工具，是给你一支能自己跑的 AI 团队</h1>
        <p style={S.sub}>
          Agent 部署不是选一个 SaaS 工具开个账号。是针对你的业务流程，设计、训练、部署一套能自主运转的 AI 数字劳动力——并且在上线后持续优化。
        </p>
        <div style={{ display: "flex", gap: 40, flexWrap: "wrap" as const, paddingTop: 32, borderTop: "1px solid #1a1a1a" }}>
          {[
            ["平均部署周期", "2–4 周"],
            ["Agent 类型", "4 种"],
            ["运转模式", "7×24"],
            ["ROI 见效周期", "6–8 周"],
          ].map(([label, val]) => (
            <div key={label}>
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 24, fontWeight: 700, color: "#f59e0b", marginBottom: 4 }}>{val}</div>
              <div style={{ fontSize: 11, color: "#444", letterSpacing: "0.5px" }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      <div style={S.divider} />

      {/* FOUR AGENT TYPES */}
      <section style={S.section}>
        <Label>Agent Types · 四种 Agent</Label>
        <h2 style={S.h2}>四种 Agent，覆盖核心业务场景</h2>
        <p style={{ ...S.muted, marginBottom: 36, maxWidth: 580 }}>这四类不是全部可能性，是我们在外贸制造企业里验证过的、ROI 最清晰的切入点。</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 2 }}>
          {[
            {
              title: "内容 Agent", color: "#f59e0b", tag: "CONTENT",
              desc: "多语言产品描述 / Blog / 社媒内容 → 每日自动产出",
              items: ["基于 SKU 参数库自动生成多语言 listing", "Blog 文章 / GEO 内容按计划发布", "社媒内容多平台分发", "内容质量评分与 A/B 测试建议"],
            },
            {
              title: "销售 Agent", color: "#3b82f6", tag: "SALES",
              desc: "询盘分级 / 客户跟进序列 / 报价触发 → 响应时间 <5 分钟",
              items: ["询盘 AI 分级（OEM/零售/工程）", "自动匹配 SKU 生成初步报价", "客户跟进序列自动发送", "高意向客户标记并推送给业务员"],
            },
            {
              title: "客服 Agent", color: "#22c55e", tag: "SUPPORT",
              desc: "7×24 多语言 FAQ / 安装指南 / 投诉分类 → 处理 80% 标准问题",
              items: ["7×24 多语言自动回复", "安装问题 / 规格咨询标准化回复", "投诉分类并推送给对应负责人", "无法处理的问题自动升级人工"],
            },
            {
              title: "跟单 Agent", color: "#a78bfa", tag: "TRACKING",
              desc: "订单节点提醒 / 生产协调 / 物流更新 → 全链路自动化",
              items: ["生产节点状态自动更新", "延期风险提前预警", "物流轨迹自动推送给客户", "批次文件（发票/装箱单）自动生成"],
            },
          ].map((agent) => (
            <div key={agent.title} style={{ background: "#0c0c0e", padding: "28px 24px", borderTop: `2px solid ${agent.color}` }}>
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: agent.color, letterSpacing: 2, marginBottom: 12 }}>{agent.tag}</div>
              <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 8, color: "#e4e2dc" }}>{agent.title}</div>
              <div style={{ fontSize: 13, color: "#666", marginBottom: 20, lineHeight: 1.6, fontStyle: "italic" }}>{agent.desc}</div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column" as const, gap: 6 }}>
                {agent.items.map(t => (
                  <li key={t} style={{ fontSize: 13, color: "#888", display: "flex", gap: 8 }}>
                    <span style={{ color: agent.color, flexShrink: 0 }}>→</span>{t}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <div style={S.divider} />

      {/* DELIVERY MODEL */}
      <section style={S.section}>
        <Label>Delivery Model · 交付模型</Label>
        <h2 style={S.h2}>三个阶段，2–4 周交付</h2>
        <p style={{ ...S.muted, marginBottom: 40, maxWidth: 560 }}>我们不做发现了问题再回来谈的模式。第一周就明确什么值得做，第三周末 Agent 上线运转。</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2 }}>
          {[
            { phase: "Phase 1", week: "第 1 周", title: "工作流诊断", desc: "深入你的真实业务流程，识别最值得自动化的 3 个环节。输出：优先级报告 + Agent 设计方案。" },
            { phase: "Phase 2", week: "第 2–3 周", title: "Agent 设计与训练", desc: "基于你的真实数据、SOP、历史对话训练 Agent。不用通用模板，用你自己的业务语料。" },
            { phase: "Phase 3", week: "第 4 周起", title: "部署与迭代", desc: "上线监控，持续优化。前 6 周每周复盘，之后按月。效果数据每周同步。" },
          ].map((p, i) => (
            <div key={p.phase} style={{ background: "#0c0c0e", padding: "28px 24px", position: "relative" as const }}>
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: "#444", letterSpacing: 2, marginBottom: 8 }}>{p.phase} · {p.week}</div>
              <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: "#e4e2dc" }}>{p.title}</div>
              <div style={S.muted}>{p.desc}</div>
              {i < 2 && <div style={{ position: "absolute" as const, right: -1, top: "50%", transform: "translateY(-50%)", fontFamily: "'JetBrains Mono',monospace", fontSize: 14, color: "#222", zIndex: 1 }}>→</div>}
            </div>
          ))}
        </div>
      </section>

      <div style={S.divider} />

      {/* WHAT WE DON'T DO */}
      <section style={S.section}>
        <Label>Honest Limits · 我们不做的事</Label>
        <h2 style={S.h2}>我们不做这四件事</h2>
        <p style={{ ...S.muted, marginBottom: 36, maxWidth: 560 }}>不是谦虚，是这些项目从经验来看成功率极低，我们选择不浪费彼此的时间。</p>
        <div style={{ display: "flex", flexDirection: "column" as const, gap: 2 }}>
          {[
            { no: "不销售 SaaS 订阅", why: "订阅工具和 Agent 部署是完全不同的事。我们交付的是针对你业务定制的系统，不是开通账号给你用。" },
            { no: "不做通用 AI 工具培训", why: "\"怎么用 ChatGPT\" 不是我们的服务。如果你需要实战培训，我们有专门的培训服务，但不与 Agent 部署混在一起。" },
            { no: "不接 \"先做个便宜的试试\" 的项目", why: "Agent 部署需要真实数据、完整流程、持续迭代。压缩预算做半截的项目，结果都是失败告终，然后双方都失望。" },
            { no: "不适合 L0 工厂", why: "如果你的数据全在脑袋里、没有任何 SOP、流程完全不标准——先来做数字治理，把底座打好再谈 Agent。L0 进场，Agent 上线也跑不起来。" },
          ].map((item) => (
            <div key={item.no} style={{ background: "#0c0c0e", padding: "22px 28px", display: "grid", gridTemplateColumns: "240px 1fr", gap: 24, borderBottom: "1px solid #111" }}>
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

      {/* READINESS CHECK */}
      <section style={S.section}>
        <Label>Readiness Check · 准备度评估</Label>
        <h2 style={S.h2}>你在哪个就绪等级？</h2>
        <p style={{ ...S.muted, marginBottom: 32, maxWidth: 560 }}>我们接 L1 以上的项目。不在正确起点的合作，结果对双方都不公平。</p>
        <div style={{ display: "flex", gap: 2, flexWrap: "wrap" as const }}>
          {[
            { level: "L0", label: "纯人工", desc: "流程靠经验，数据在人脑袋里", color: "#ef4444", accept: false },
            { level: "L1", label: "工具辅助", desc: "有基础工具但数据尚未结构化", color: "#f59e0b", accept: true },
            { level: "L2", label: "局部自动化", desc: "部分流程可自动化，有数据基础", color: "#3b82f6", accept: true },
            { level: "L3", label: "Agent 驱动", desc: "AI Agent 自主运转关键流程", color: "#22c55e", accept: true },
            { level: "L4", label: "AI-Native", desc: "AI 是默认运转方式", color: "#a78bfa", accept: true },
          ].map((r) => (
            <div key={r.level} style={{ background: "#0c0c0e", padding: "24px 20px", flex: 1, minWidth: 150, textAlign: "center" as const, opacity: r.accept ? 1 : 0.4, borderTop: `2px solid ${r.color}` }}>
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 22, fontWeight: 700, color: r.color, marginBottom: 6 }}>{r.level}</div>
              <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 4 }}>{r.label}</div>
              <div style={{ fontSize: 11, color: "#555", lineHeight: 1.5 }}>{r.desc}</div>
              {!r.accept && <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 9, color: "#ef4444", marginTop: 10, letterSpacing: 1 }}>先做治理</div>}
              {r.accept && <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 9, color: "#22c55e", marginTop: 10, letterSpacing: 1 }}>可以合作</div>}
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
            { q: "Agent 能完全替代员工吗？", a: "不能，也不该是目标。Agent 处理高重复、有规律的工作环节——标准询盘回复、报价生成、状态跟进。判断、关系、决策仍然需要人。合理预期是：让现有人力专注于真正需要人做的工作，而不是省掉所有人。" },
            { q: "我们数据很乱，能部署 Agent 吗？", a: "数据不整洁是常态，不是直接排除的标准。我们会在诊断阶段评估数据现状。如果乱到 Agent 完全无法有效运转，我们会建议先做数字治理。如果乱但有可用的核心部分，可以分阶段进行。" },
            { q: "费用怎么计算？", a: "根据 Agent 类型和部署复杂度定价。单个 Agent 部署通常在 3–8 万人民币区间，含诊断、设计、训练、部署和 3 个月的监控迭代。组合部署有折扣。具体费用在诊断完成后给出，不提前报价。" },
            { q: "上线后如果效果不好怎么办？", a: "前 6 周内，如果核心指标（响应时间/处理量/内容产出量）达不到目标的 70%，我们继续迭代不加收费用。效果数据是双向透明的，没有达标就继续做。" },
            { q: "需要多少配合成本？", a: "主要集中在第 1–2 周。需要提供：历史询盘样本（至少 200 条）、现有 SOP 文档（或配合我们帮你整理）、2–3 次深度访谈（每次 2 小时）。上线后团队培训通常半天内完成。" },
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
            <h2 style={{ ...S.h2, marginBottom: 12 }}>先做 60 分钟诊断，再谈是否适合部署</h2>
            <p style={{ fontSize: 15, color: "#666", lineHeight: 1.75, maxWidth: 480 }}>
              我们看你的真实业务流程、数据现状、团队配合能力。告诉你哪种 Agent 最先值得做，以及大概的 ROI 预期。不符合的我们直说。
            </p>
          </div>
          <div>
            <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 12, padding: "16px 32px", background: "#f59e0b", color: "#08080a", fontSize: 14, fontWeight: 700, fontFamily: "'Instrument Sans',sans-serif", textDecoration: "none" }}>
              预约 Agent 诊断 →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
