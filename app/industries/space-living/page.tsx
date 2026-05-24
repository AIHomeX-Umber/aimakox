import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'

export const metadata: Metadata = {
  title: '空间生活行业 AI 转型 · Makox',
  description: '家具、壁床、储物系统、空间产品出口企业 AI 转型指南。从场景化内容到 DTC 建站，AI 在空间生活品类的真实切入点。',
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

export default function SpaceLivingPage() {
  return (
    <div style={S.page}>
      <Nav />

      {/* HERO */}
      <section style={{ ...S.section, paddingTop: "100px", paddingBottom: "72px" }}>
        <Label>Space & Living · 空间生活</Label>
        <h1 style={{ fontFamily: "'Instrument Sans','Noto Sans SC',sans-serif", fontSize: "clamp(32px,4.5vw,58px)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: 20, maxWidth: 760 }}>
          卖空间产品，<br />你在卖的其实是一种生活方式
        </h1>
        <p style={{ fontSize: 16, color: "#888", lineHeight: 1.8, maxWidth: 640, marginBottom: 48 }}>
          家具、壁床、储物系统——消费者购买的不是产品参数，是他们想象中的那个家。AI 能让小工厂以品牌成本生产这种"生活方式叙事"，并通过 GEO/SEO 在 AI 搜索时代被找到。
        </p>
        <div style={{ display: "flex", gap: 40, flexWrap: "wrap" as const, paddingTop: 32, borderTop: "1px solid #1a1a1a" }}>
          {[
            ["消费者决策周期", "2–6个月"],
            ["场景图 vs 白底图转化差异", "3–5×"],
            ["DTC 平均投资回收期", "12–36个月"],
            ["壁床北美市场年增速", ">20%"],
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
        <Label>Why AI-Ready · 为什么空间品类 AI 就绪度高</Label>
        <h2 style={S.h2}>高客单价 + 长决策周期 = AI 内容的完美战场</h2>
        <p style={{ ...S.muted, maxWidth: 620, marginBottom: 40 }}>消费者在购买前会反复搜索、对比、研究。在这个研究过程中出现的品牌，才有机会成交。AI 让你持续出现在这个过程里。</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 2 }}>
          {[
            { title: "SKU 变体可批量内容化", desc: "一张沙发 × 50种面料 × 3种尺寸 = 150个内容变体。AI 基于结构化产品数据批量生成，人工只做最终审核，效率提升 5–10 倍。", color: "#f59e0b" },
            { title: "长尾词内容需求庞大", desc: "\"small apartment murphy bed\" \"wall bed with desk space\" \"minimalist storage sofa\"——这些长尾搜索词的内容需求 AI 可以系统化覆盖，SEO/GEO 双赢。", color: "#3b82f6" },
            { title: "生活场景叙事可模板化", desc: "\"适合 30㎡ 一居室\"\"孩子上学前的早晨\"——生活场景模板建好后，AI 可以批量生成差异化的场景故事，不再靠一两个文案手工写。", color: "#22c55e" },
            { title: "DTC 内容护城河深", desc: "空间生活品类的内容壁垒是竞品最难复制的资产。持续的 AI 内容输出，6–12 个月后在细分词库里建立难以超越的先发优势。", color: "#a78bfa" },
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
        <h2 style={S.h2}>空间生活品类里，AI 最能发力的五个环节</h2>
        <div style={{ display: "flex", flexDirection: "column" as const, gap: 2, marginTop: 32 }}>
          {[
            { n: "01", title: "场景化内容批量生成", detail: "基于风格标签（北欧极简 / 工业风 / 日式侘寂）和房型标签（一居室 / Loft / 家庭房），AI 批量生成差异化的产品场景描述，覆盖不同消费者心智。" },
            { n: "02", title: "多平台 SKU 内容分发", detail: "Amazon / Wayfair / 独立站 / Pinterest 各有不同的内容格式要求。AI 基于同一产品知识库，按平台规范自动生成对应格式，减少重复劳动。" },
            { n: "03", title: "询盘自动分级 + 销售序列", detail: "\"问尺寸\"的潜客 vs \"问交期\"的意向客户 vs \"要独家代理\"的大客户——AI 自动分级，触发不同的跟进序列，高价值询盘不再因响应慢而流失。" },
            { n: "04", title: "GEO 结构化数据输出", detail: "让 ChatGPT / Perplexity 在回答\"小公寓壁床推荐\"时引用你的内容页。这需要 FAQ 结构化、产品定义清晰、语义标记正确——AI 可以系统化完成这套工作。" },
            { n: "05", title: "安装指南多语言自动化", detail: "空间产品的安装说明是客服工单和差评的重灾区。结构化的多语言安装指南 + FAQ Agent，可以解决 60%+ 的售后咨询，同时降低差评率。" },
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
        <h2 style={S.h2}>空间生活品类最常见的四个失败模式</h2>
        <div style={{ display: "flex", flexDirection: "column" as const, gap: 16, marginTop: 32 }}>
          {[
            { title: "没有场景图，AI 内容没有意义", body: "空间产品高度依赖场景视觉。如果产品图库只有白底图，再好的文案也无法建立消费者的购买想象。内容 AI 的上限受限于图片质量——先投图，再上 AI。" },
            { title: "SKU 数据没有结构化", body: "产品参数散落在各版 PDF / 邮件附件 / 供应商微信里，没有统一数据库。AI 内容生成的质量直接取决于输入数据的质量——数据治理必须先行。" },
            { title: "DTC 投入回收期预期不现实", body: "很多工厂以为建站后3个月能回本——这个预期会让你在真正回本之前放弃。空间生活品类的 DTC 投资回收期通常是 12–36 个月，需要长期内容耕耘，不是短期投机。" },
            { title: "物流模型没有算清楚", body: "大件家具的最后一公里物流成本可以吃掉 20–40% 的毛利。在 DTC 投入内容之前，先把运费结构、退货率、仓储成本算明白——这些是 DTC 成立的前提条件。" },
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
        <h2 style={{ ...S.h2, marginBottom: 40 }}>空间生活品类出海 AI 高频问题</h2>
        <div style={{ display: "flex", flexDirection: "column" as const }}>
          {[
            { q: "壁床 / 墨菲床 DTC 可行吗？", a: "可行，但需要满足几个条件：客单价在 $800 以上、有本地配送合作伙伴（或海外仓）、有安装服务方案或清晰的 DIY 安装内容。Space Discoverer 是我们已交付的案例，可以预约诊断后了解完整细节。" },
            { q: "家具 SKU 太多，从哪里开始做 AI 内容？", a: "从你利润最高的 100 个 SKU 开始，不是销量最高的。高利润 SKU 的内容质量提升带来的 ROI 更直接。先建 SOP，跑通一个品类，再批量扩展，不要一开始就全量铺开。" },
            { q: "储物系统 / 定制衣柜这类高定制产品适合做 AI 吗？", a: "定制产品的 AI 价值在\"标准化可自动化的部分\"：初步报价逻辑（基于尺寸/材质/配件的规则引擎）、定制确认单生成、生产进度通知、多语言安装说明。真正的定制沟通环节仍需人工，但支持工作可以大幅 AI 化。" },
            { q: "空间产品做 GEO 有没有搜索量？", a: "有，且是蓝海。\"murphy bed for small apartment\" \"storage solutions studio apartment\" \"wall bed with home office\" 这类场景词在 ChatGPT / Perplexity 里被大量搜索，但有结构化内容覆盖的品牌极少。现在做 GEO 的窗口期是 2024–2026 年。" },
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
            <h2 style={{ ...S.h2, marginBottom: 12 }}>空间生活品类出海 AI 布局，先聊30分钟</h2>
            <p style={{ fontSize: 15, color: "#666", lineHeight: 1.75, maxWidth: 480 }}>
              60分钟，看你的品类、SKU结构、目标市场。告诉你 DTC 路径是否可行，以及第一步最值得做的 AI 动作是什么。
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
