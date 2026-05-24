import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'

export const metadata: Metadata = {
  title: '功能消费品行业 AI 转型 · Makox',
  description: '厨卫、户外、五金、功能生活用品出口企业 AI 转型指南。高 SKU 场景化内容、Amazon 优化、多平台分发——功能消费品的 AI 实战切入点。',
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

export default function FunctionalGoodsPage() {
  return (
    <div style={S.page}>
      <Nav />

      {/* HERO */}
      <section style={{ ...S.section, paddingTop: "100px", paddingBottom: "72px" }}>
        <Label>Functional Consumer Goods · 功能消费品</Label>
        <h1 style={{ fontFamily: "'Instrument Sans','Noto Sans SC',sans-serif", fontSize: "clamp(32px,4.5vw,58px)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: 20, maxWidth: 760 }}>
          功能消费品出海：<br />SKU 多，内容就是护城河
        </h1>
        <p style={{ fontSize: 16, color: "#888", lineHeight: 1.8, maxWidth: 640, marginBottom: 48 }}>
          厨卫用品、户外装备、五金工具、功能生活用品——这个赛道的共同特征是 SKU 量大、产品同质化严重、价格竞争激烈。内容质量是唯一可以低成本构建的差异化壁垒，而 AI 是让这种差异化规模化的关键。
        </p>
        <div style={{ display: "flex", gap: 40, flexWrap: "wrap" as const, paddingTop: 32, borderTop: "1px solid #1a1a1a" }}>
          {[
            ["典型SKU数量", "500–10,000+"],
            ["Amazon 内容合规率", "<15%"],
            ["同质化竞品数量", "数百至数千"],
            ["内容差异化溢价空间", "20–60%"],
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
        <Label>Why AI-Ready · 为什么功能消费品 AI 就绪度高</Label>
        <h2 style={S.h2}>大 SKU 量 + 高重复结构 = AI 最擅长的场景</h2>
        <p style={{ ...S.muted, maxWidth: 620, marginBottom: 40 }}>功能消费品的内容需求有一个特点：结构高度相似，但需要规模化。这正是 AI 的核心优势区间。</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 2 }}>
          {[
            { title: "参数驱动，结构化程度高", desc: "功能类产品的规格（材质 / 尺寸 / 承重 / 使用场景）是结构化数据，AI 基于参数表可以快速生成准确的产品描述，不像风格类产品那样依赖主观判断。", color: "#f59e0b" },
            { title: "Amazon A9 关键词逻辑清晰", desc: "功能消费品的搜索词逻辑明确（\"outdoor folding chair lightweight\" \"kitchen knife set 7 piece\"），AI 可以系统化优化 Title / Bullets / Search Terms，命中率高。", color: "#3b82f6" },
            { title: "多 SKU 变体内容需求大", desc: "同一款产品有多种颜色 / 规格 / 套装组合，每个变体都需要差异化的内容。AI 批量生成是唯一合理的解法，人工逐一撰写从经济上不可行。", color: "#22c55e" },
            { title: "售后 FAQ 规律性强", desc: "\"怎么清洗\" \"兼容什么型号\" \"保修期多长\"——功能消费品的售后问题高度重复，AI FAQ Agent 应答准确率可以很高，大幅减少客服工单量。", color: "#a78bfa" },
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
        <h2 style={S.h2}>功能消费品出口，AI 最值得切入的五个环节</h2>
        <div style={{ display: "flex", flexDirection: "column" as const, gap: 2, marginTop: 32 }}>
          {[
            { n: "01", title: "全仓 SKU 内容批量生成", detail: "5000 个 SKU 的产品描述，人工团队需要数年才能写完。AI 内容工厂在结构化参数库的基础上，可以在数周内完成全量内容生成，人工只做抽检和优化。" },
            { n: "02", title: "Amazon Listing 系统化优化", detail: "Title 关键词密度、Bullet Point 的利益点表达、A+ 内容的场景图文配合——这套优化方法已经有清晰的规则可循。AI 可以对全仓 Listing 做系统化评分和优化建议，不再靠经验和感觉。" },
            { n: "03", title: "多语言市场内容适配", detail: "北美 / 欧洲 / 日本市场的消费者对同一类产品的表达偏好截然不同。AI 可以基于市场风格库，对同一产品生成多套本地化内容，不只是翻译，而是真正的本地化表达。" },
            { n: "04", title: "竞品评价分析 → 内容优化信号", detail: "批量分析竞品 Amazon 差评，提取\"消费者最频繁抱怨的问题\"，用于优化自己的产品描述和 FAQ。这是低成本、高价值的竞品情报来源，很少有工厂系统化在做。" },
            { n: "05", title: "库存预警 + 补货通知自动化", detail: "库存低于阈值 → 自动推送补货建议 → 触发采购审批流。这类结构化的库存管理自动化，是功能消费品出口企业降低断货风险最直接的 AI 应用。" },
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
        <h2 style={S.h2}>功能消费品 AI 项目最常见的四个失败点</h2>
        <div style={{ display: "flex", flexDirection: "column" as const, gap: 16, marginTop: 32 }}>
          {[
            { title: "从没有整理过产品参数库就上 AI", body: "AI 内容的质量上限等于输入数据的质量。如果参数库是\"每个产品 PDF 里各有一份但版本不一致\"的状态，AI 只会规模化地输出错误内容。参数库结构化是 AI 内容的前置条件，不是可以跳过的步骤。" },
            { title: "AI 生成内容直接上架，没有审核流程", body: "AI 内容必须有人工抽检机制——尤其是功能参数描述（尺寸、承重、材质）出错会直接导致差评和退货。建立\"AI 生成 → 规则校验 → 人工抽样审核\"的三层流程，才能安全地规模化。" },
            { title: "多平台内容不区分格式", body: "Amazon Listing、Wayfair 产品页、独立站产品页、Shopify 描述——这四种平台的格式要求、字数限制、关键词逻辑都不一样。用同一套内容糊弄所有平台，是功能消费品出口商最常见也最致命的内容策略错误。" },
            { title: "只做内容，不做评价管理", body: "Amazon 的算法权重里，评价质量和数量是关键变量。AI 内容提升转化率是一方面，但如果评价少、差评没有回复管理，内容再好也扛不住算法降权。内容 AI 和评价 Agent 需要配合部署。" },
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
        <h2 style={{ ...S.h2, marginBottom: 40 }}>功能消费品出海 AI 高频问题</h2>
        <div style={{ display: "flex", flexDirection: "column" as const }}>
          {[
            { q: "我的产品太普通，AI 内容能有差异化吗？", a: "可以，但前提是从\"使用场景\"和\"用户痛点\"切入，而不是参数堆砌。同样是一款厨房剪刀，\"左手用户友好设计\"\"剪鸡骨头不费力\"\"洗碗机可放\"——每个角度都是一个不同的买家心智。AI 可以系统化地生成多角度内容，覆盖不同搜索意图。" },
            { q: "功能消费品适合做独立站吗？", a: "部分品类适合，部分不适合。适合独立站的条件：客单价高于 $30、有可以讲述的品牌/产品故事、有高复购潜力（耗材/配件）。纯拼价格的标品类通常在 Amazon 上更有效率。建议先把 Amazon 做好，再考虑独立站作为品牌资产。" },
            { q: "户外 / 露营品类 AI 内容的机会在哪里？", a: "户外品类的内容机会在\"场景叙事\"——\"一个人的公路旅行\"\"家庭露营第一次\"\"城市通勤骑行\"——这些场景词的搜索量大，但有深度内容覆盖的品牌极少。AI 可以系统化生成覆盖这些场景的长内容，同时做 SEO 和 GEO 的双重布局。" },
            { q: "五金工具类做 Amazon 内容，AI 有哪些具体帮助？", a: "具体有三个方向：① 合规认证说明（CE/UL/ANSI）按市场自动生成；② 使用教程文字稿批量生产（配合视频上传可提升 Listing 权重）；③ 竞品差评分析 → 提炼买家最在意的5个问题 → 在自己的 Listing 里主动答复。这三个动作的 ROI 都很明确。" },
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
            <h2 style={{ ...S.h2, marginBottom: 12 }}>功能消费品出海 AI 布局，先聊30分钟</h2>
            <p style={{ fontSize: 15, color: "#666", lineHeight: 1.75, maxWidth: 480 }}>
              我们看你的产品线、SKU 结构、当前内容质量。告诉你哪几类 SKU 最值得先做，以及 AI 内容工厂怎么搭。
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
