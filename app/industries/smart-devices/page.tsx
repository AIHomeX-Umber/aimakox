import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'

export const metadata: Metadata = {
  title: '智能硬件行业 AI 转型 · Makox',
  description: '智能硬件、消费电子、IoT 设备出口企业 AI 转型指南。从内容自动化到销售 Agent，AI 在智能硬件垂直赛道的真实切入点。',
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: "3px", textTransform: "uppercase" as const, color: "#f59e0b", marginBottom: 20, display: "flex", alignItems: "center", gap: 12 }}>
      <span style={{ display: "inline-block", width: 32, height: 1, background: "#f59e0b", flexShrink: 0 }} />
      {children}
    </div>
  )
}

function Divider() {
  return <div style={{ height: 1, background: "linear-gradient(90deg, transparent, #1e1e1e, transparent)", margin: "0 40px" }} />
}

const S = {
  page: { background: "#08080a", color: "#e4e2dc", minHeight: "100vh", fontFamily: "'Instrument Sans', 'Noto Sans SC', sans-serif" } as React.CSSProperties,
  section: { padding: "72px 40px", maxWidth: 1100, margin: "0 auto" } as React.CSSProperties,
  h2: { fontFamily: "'Instrument Sans', 'Noto Sans SC', sans-serif", fontSize: "clamp(22px,3vw,34px)", fontWeight: 700, letterSpacing: "-0.025em", marginBottom: 8, lineHeight: 1.2 } as React.CSSProperties,
  muted: { fontSize: 14, color: "#666", lineHeight: 1.75 } as React.CSSProperties,
}

export default function SmartDevicesPage() {
  return (
    <div style={S.page}>
      <Nav />

      {/* HERO */}
      <section style={{ ...S.section, paddingTop: "100px", paddingBottom: "72px" }}>
        <Label>Smart Devices · 智能硬件</Label>
        <h1 style={{ fontFamily: "'Instrument Sans','Noto Sans SC',sans-serif", fontSize: "clamp(32px,4.5vw,58px)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: 20, maxWidth: 760 }}>
          智能硬件出海：技术够好，<br />但 AI 会讲故事吗？
        </h1>
        <p style={{ fontSize: 16, color: "#888", lineHeight: 1.8, maxWidth: 640, marginBottom: 48 }}>
          IoT、消费电子、AI 硬件——这个赛道的工厂通常有一流的工程师，却缺乏把技术参数转化为消费者语言的能力。AI 恰好可以填补这个缺口，而且是系统性地填补。
        </p>
        <div style={{ display: "flex", gap: 40, flexWrap: "wrap" as const, paddingTop: 32, borderTop: "1px solid #1a1a1a" }}>
          {[
            ["典型SKU复杂度", "高（软硬件组合）"],
            ["竞品内容同质化", "极严重"],
            ["海外消费者决策周期", "7–30天"],
            ["产品FAQ询问量", "占客服60%+"],
          ].map(([label, val]) => (
            <div key={label}>
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 22, fontWeight: 700, color: "#f59e0b", marginBottom: 4 }}>{val}</div>
              <div style={{ fontSize: 11, color: "#444", letterSpacing: "0.5px", maxWidth: 160 }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* WHY AI-READY */}
      <section style={S.section}>
        <Label>Why AI-Ready · 为什么这个赛道 AI 就绪度高</Label>
        <h2 style={S.h2}>智能硬件是 AI 转型最快的制造品类</h2>
        <p style={{ ...S.muted, maxWidth: 620, marginBottom: 40 }}>不是因为产品本身是 AI，而是因为这个品类的信息结构天然适合 AI 处理。</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 2 }}>
          {[
            { title: "参数高度结构化", desc: "芯片型号、连接协议、功耗参数、认证列表——这些都是结构化数据，AI 可以直接读取并生成精准的多语言内容。", color: "#f59e0b" },
            { title: "FAQ 规律性强", desc: "\"支持哪些 APP？\" \"兼容 Amazon Echo 吗？\" \"防水等级是多少？\" 这些问题高度重复，AI Agent 应答准确率可达 90%+。", color: "#3b82f6" },
            { title: "多平台分发需求大", desc: "Amazon / 独立站 / Kickstarter / 线下零售——同一产品需要不同格式的内容，AI 批量生成的效率优势在这里最明显。", color: "#22c55e" },
            { title: "用户评价数据丰富", desc: "智能硬件品类的用户评价量大且结构化，AI 可以持续分析差评、提取改进信号、自动更新 FAQ。", color: "#a78bfa" },
          ].map(item => (
            <div key={item.title} style={{ background: "#0c0c0e", padding: "28px 24px", borderLeft: `2px solid ${item.color}` }}>
              <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 8, color: "#e4e2dc" }}>{item.title}</div>
              <div style={S.muted}>{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* WHERE AI CREATES LEVERAGE */}
      <section style={S.section}>
        <Label>AI Leverage Points · AI 价值杠杆</Label>
        <h2 style={S.h2}>AI Agent 在智能硬件里最能发力的环节</h2>
        <p style={{ ...S.muted, maxWidth: 580, marginBottom: 36 }}>按 ROI 从高到低排序——先做前三个，回本最快。</p>
        <div style={{ display: "flex", flexDirection: "column" as const, gap: 2 }}>
          {[
            { n: "01", title: "技术文档 → 消费者语言自动转化", detail: "把工程师写的 spec sheet 自动转化为亚马逊买家、独立站消费者、众筹支持者各自需要的语言风格。同一产品，三套内容，一次生成。" },
            { n: "02", title: "多语言认证说明批量生成", detail: "CE / FCC / RoHS / UL 认证说明在不同国家市场的表述格式不同。AI 可以基于认证数据库，按市场自动生成合规的产品页认证描述。" },
            { n: "03", title: "售后 FAQ 智能应答", detail: "智能硬件的售后咨询80%是重复性技术问题。部署 FAQ Agent 后，客服团队可以只处理真正的异常情况，其余全部自动应答。" },
            { n: "04", title: "竞品参数对比内容自动化", detail: "消费者在购买决策前会比较3–5款产品。AI 可以基于竞品参数表，自动生成有说服力的对比文案——突出优势，不夸大，不回避劣势。" },
            { n: "05", title: "用户评价挖掘 → 产品迭代信号", detail: "批量分析亚马逊差评，提取\"最频繁被提到的问题\"，形成产品改进优先级建议。这是一个很多工厂还没开始做的高价值 AI 应用。" },
          ].map(item => (
            <div key={item.n} style={{ background: "#0c0c0e", padding: "22px 28px", display: "grid", gridTemplateColumns: "48px 1fr", gap: 20 }}>
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: "#f59e0b", paddingTop: 2 }}>{item.n}</div>
              <div>
                <div style={{ fontSize: 15, fontWeight: 600, color: "#e4e2dc", marginBottom: 8 }}>{item.title}</div>
                <div style={S.muted}>{item.detail}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* WHAT BREAKS FIRST */}
      <section style={S.section}>
        <Label>What Breaks First · 最先断裂的环节</Label>
        <h2 style={S.h2}>智能硬件团队最常踩的坑</h2>
        <p style={{ ...S.muted, maxWidth: 580, marginBottom: 36 }}>不是 AI 的问题，是准备工作没做好。</p>
        <div style={{ display: "flex", flexDirection: "column" as const, gap: 16 }}>
          {[
            { title: "产品参数库没有结构化", body: "所有产品参数还在各种版本的 spec sheet PDF 里，没有统一的结构化数据库。AI 无法读取 PDF 里的非结构化数据——这必须先治理。" },
            { title: "认证数据与市场要求对不上", body: "认证是有的，但哪款产品有哪些认证、对应哪些市场，这个映射关系没有人维护。出海内容里标错认证，是真实的法律风险。" },
            { title: "工程语言和营销语言各说各话", body: "工程团队维护产品文档，营销团队写内容，两边对不上。AI 需要一个统一的\"产品知识库\"作为信源，而不是两套矛盾的文档。" },
            { title: "早期过度依赖众筹平台内容", body: "Kickstarter / Indiegogo 的内容风格（感性、戏剧化、\"改变世界\"）搬到常规电商会严重掉转化率。内容策略必须按渠道差异化。" },
          ].map((item, i) => (
            <div key={i} style={{ background: "#0c0c0e", border: "1px solid #141416", borderLeft: "3px solid #ef4444", padding: "24px 28px" }}>
              <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 8, color: "#e4e2dc" }}>{item.title}</div>
              <p style={{ ...S.muted, margin: 0 }}>{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* FAQ */}
      <section style={S.section}>
        <Label>FAQ · 常见问题</Label>
        <h2 style={{ ...S.h2, marginBottom: 40 }}>智能硬件出海 AI 转型高频问题</h2>
        <div style={{ display: "flex", flexDirection: "column" as const, gap: 0 }}>
          {[
            { q: "产品本身就是 AI 硬件，还需要 Makox 这类服务吗？", a: "是的。产品本身是 AI 和你的销售/内容/运营用 AI 是两件事。很多 AI 硬件公司的营销内容还是人工写、买家询盘还是人工分类、技术文档翻译还是找外包。我们解决的是后者。" },
            { q: "智能硬件 SKU 迭代快，AI 内容能跟上吗？", a: "可以，而且 AI 比人工更适合处理高频迭代的内容更新。关键是建立一个\"内容更新触发机制\"——产品数据库更新 → 自动触发相关页面内容重新生成 → 人工审核后发布。这个流程建好后，新产品上线内容时间可以从一周压到一天。" },
            { q: "众筹结束后转电商，内容策略怎么调？", a: "众筹 vs 常规电商是两种完全不同的购买决策场景。众筹买家购买的是\"参与感\"和\"早期优势\"，电商买家购买的是\"解决问题\"。内容框架需要从情绪驱动切换到功能驱动。AI 可以基于同一产品知识库，分别生成两套风格的内容。" },
            { q: "工程师团队能自己搭 AI 工具链吗？", a: "可能，但不建议这么做。工程师擅长构建，不擅长用户视角的内容生产和销售流程。自搭工具链的机会成本很高——工程资源花在这里，不如花在产品本身。外包内容/销售的 AI 运营，工程团队专注产品，是更合理的分工。" },
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

      <Divider />

      {/* CTA */}
      <section style={{ ...S.section, paddingBottom: "100px" }}>
        <div style={{ background: "#0c0c0e", border: "1px solid #1a1a1c", padding: "56px 48px", display: "grid", gridTemplateColumns: "1fr auto", gap: 48, alignItems: "center" }}>
          <div>
            <Label>Free Consultation · 免费诊断</Label>
            <h2 style={{ ...S.h2, marginBottom: 12 }}>智能硬件出海 AI 布局，先聊30分钟</h2>
            <p style={{ fontSize: 15, color: "#666", lineHeight: 1.75, maxWidth: 480 }}>
              我们看你的产品线、内容现状、销售渠道。告诉你第一个值得自动化的环节是什么，以及投入产出比如何估算。
            </p>
          </div>
          <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 12, padding: "16px 32px", background: "#f59e0b", color: "#08080a", fontSize: 14, fontWeight: 700, textDecoration: "none", whiteSpace: "nowrap" as const }}>
            预约免费诊断 →
          </Link>
        </div>
      </section>
    </div>
  )
}
