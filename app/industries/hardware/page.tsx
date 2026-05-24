import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: '五金出口行业 AI 转型 · Makox',
  description: '五金出口行业 AI 转型指南。SKU管理、多语言内容、跟单自动化——五金行业特有的 AI 切入点和实战案例。',
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

export default function HardwarePage() {
  return (
    <div style={S.page}>
      <Nav />

      {/* HERO */}
      <section style={S.hero}>
        <Label>Hardware · 五金出口</Label>
        <h1 style={S.h1}>五金的问题是 SKU 太多，内容太少</h1>
        <p style={S.sub}>
          五金出口企业通常有数千到数万个 SKU，但 90% 的产品没有合格的英文描述，更别说场景化内容。这是 AI 内容工厂最典型的应用场景——规模大，结构化，可复制。
        </p>
        <div style={{ display: "flex", gap: 40, flexWrap: "wrap" as const, paddingTop: 32, borderTop: "1px solid #1a1a1a" }}>
          {[
            ["平均SKU数", "3,000–50,000"],
            ["英文内容覆盖率", "<10%"],
            ["Amazon合规描述率", "<5%"],
            ["主要竞争维度", "价格"],
          ].map(([label, val]) => (
            <div key={label}>
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 24, fontWeight: 700, color: "#f59e0b", marginBottom: 4 }}>{val}</div>
              <div style={{ fontSize: 11, color: "#444", letterSpacing: "0.5px" }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      <div style={S.divider} />

      {/* AI ENTRY POINTS */}
      <section style={S.section}>
        <Label>AI Entry Points · 五金专项</Label>
        <h2 style={S.h2}>五金品类的 AI 切入点</h2>
        <p style={{ ...S.muted, marginBottom: 36, maxWidth: 580 }}>结构化程度高、批量可操作——五金是 AI 内容工厂落地最快的品类之一。</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 2 }}>
          {[
            { title: "SKU 批量内容生成", desc: "基于规格参数表，自动生成多语言产品标题、描述、卖点列表。一次训练，全仓覆盖。", color: "#f59e0b" },
            { title: "Amazon Listing 优化", desc: "A9算法关键词密度、Bullet Point 结构、Search Term 填充——全部可模板化自动输出。", color: "#3b82f6" },
            { title: "规格参数结构化", desc: "把散落在 Excel / PDF 的参数表整理成 AI 可读的结构化数据库，一劳永逸。", color: "#22c55e" },
            { title: "配件关系映射", desc: "螺丝/钻头/配件的兼容性说明是买家最频繁的询问。AI 可以自动建立 SKU 兼容关系图谱。", color: "#a78bfa" },
            { title: "询盘智能分类", desc: "OEM定制询盘 / 零售采购询盘 / 工程项目询盘，三类截然不同，分类错了直接浪费成本。", color: "#f59e0b" },
          ].map((item) => (
            <div key={item.title} style={{ background: "#0c0c0e", padding: "28px 24px", borderLeft: `2px solid ${item.color}` }}>
              <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 8, color: "#e4e2dc" }}>{item.title}</div>
              <div style={S.muted}>{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <div style={S.divider} />

      {/* CONTENT CHALLENGES */}
      <section style={S.section}>
        <Label>Content Challenges · 内容难点</Label>
        <h2 style={S.h2}>五金内容为什么难做</h2>
        <p style={{ ...S.muted, marginBottom: 36, maxWidth: 580 }}>不是"没内容"，是内容生产的四个结构性障碍让大多数五金工厂的内容质量停在了十年前。</p>
        <div style={{ display: "flex", flexDirection: "column" as const, gap: 2 }}>
          {[
            { no: "01", prob: "SKU 量大但产品差异小", detail: "同一类螺丝可能有200个规格。参数不同，内容逻辑几乎相同。人工写200次是浪费，不写就是空白。AI 批量生成是唯一合理解法。" },
            { no: "02", prob: "技术参数的精准表达", detail: "扭矩值、材质等级、公差范围——这些在工程采购场景里是核心卖点，翻译错了可能导致退货或索赔。AI 需要在垂类知识库的基础上使用。" },
            { no: "03", prob: "英制 / 公制双标准", detail: "欧洲市场用公制，北美市场用英制。同一个产品，两套参数体系，两套 listing。对人工来说是灾难，对 AI 模板来说是一次配置的事。" },
            { no: "04", prob: "配件兼容性说明", detail: "\"这个螺母配哪款螺栓\" 是五金买家最常见的问题，也是退货的主要原因。大多数工厂没有系统化的兼容性数据，AI 也无法凭空生成——这是数据治理先行的典型场景。" },
          ].map((item) => (
            <div key={item.no} style={{ background: "#0c0c0e", padding: "24px 28px", display: "grid", gridTemplateColumns: "40px 200px 1fr", gap: "0 24px", alignItems: "start" }}>
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: "#333", paddingTop: 2 }}>{item.no}</div>
              <div style={{ fontSize: 14, fontWeight: 600, color: "#ccc" }}>{item.prob}</div>
              <div style={S.muted}>{item.detail}</div>
            </div>
          ))}
        </div>
      </section>

      <div style={S.divider} />

      {/* DTC OPPORTUNITIES */}
      <section style={S.section}>
        <Label>DTC Opportunity · 出海路径</Label>
        <h2 style={S.h2}>五金 DTC：可以做，但有条件</h2>
        <p style={{ ...S.muted, marginBottom: 36, maxWidth: 600 }}>并不是所有五金品类都适合 DTC。高客单价子品类和有设计属性的建材五金是可行路径，螺丝螺母类基本不适合。</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
          <div style={{ background: "#0c0c0e", padding: "28px 24px" }}>
            <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: "#22c55e", letterSpacing: 2, marginBottom: 16 }}>OPPORTUNITY</div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column" as const, gap: 10 }}>
              {["工具类五金（电钻/扳手）可做 Lifestyle 叙事，溢价空间真实存在", "建材五金（门把手/铰链）可以进入室内设计师采购渠道", "专业工具类在 YouTube 内容生态里有天然流量入口"].map(t => (
                <li key={t} style={{ fontSize: 13, color: "#888", display: "flex", gap: 8, alignItems: "flex-start" }}><span style={{ color: "#22c55e", flexShrink: 0, marginTop: 2 }}>→</span>{t}</li>
              ))}
            </ul>
          </div>
          <div style={{ background: "#0c0c0e", padding: "28px 24px" }}>
            <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: "#ef4444", letterSpacing: 2, marginBottom: 16 }}>BARRIER</div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column" as const, gap: 10 }}>
              {["极低客单价品类（螺丝/螺母）物流成本比无解，DTC 没有经济逻辑", "品牌认知几乎为零，从零建立信任成本极高", "平台依赖深，Amazon 分流严重，独立站初期流量成本难回收"].map(t => (
                <li key={t} style={{ fontSize: 13, color: "#888", display: "flex", gap: 8, alignItems: "flex-start" }}><span style={{ color: "#ef4444", flexShrink: 0, marginTop: 2 }}>✕</span>{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div style={S.divider} />

      {/* WORKFLOW PAIN POINTS */}
      <section style={S.section}>
        <Label>Workflow Pain Points · 工作流痛点</Label>
        <h2 style={S.h2}>每天在浪费时间的四个环节</h2>
        <div style={{ display: "flex", flexDirection: "column" as const, gap: 2, marginTop: 32 }}>
          {[
            { p: "报价依赖人工查表", s: "业务员翻 Excel 报价，一个询盘 30 分钟。AI 接收询盘参数、自动匹配 SKU、生成报价单，响应时间压缩到 2 分钟以内。" },
            { p: "OEM 定制跟单全靠微信", s: "定制需求、打样进度、确认节点散落在微信群。一个跟单 Agent 可以把所有节点结构化，并自动发送状态更新给客户。" },
            { p: "多平台库存不同步", s: "Amazon / 独立站 / 1688 三个平台库存各管各的，超卖是家常便饭。没有统一数据源就没有 AI 可以解的问题。" },
            { p: "合规文件手工整理", s: "CE / ROHS / UL 证书到期提醒、文件版本管理——这些都是结构化的重复劳动，完全可以 Agent 化。" },
          ].map((item, i) => (
            <div key={i} style={{ background: "#0c0c0e", padding: "22px 28px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, borderBottom: "1px solid #111" }}>
              <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: "#ef4444", flexShrink: 0, marginTop: 2 }}>✕</span>
                <span style={{ fontSize: 14, color: "#888" }}>{item.p}</span>
              </div>
              <div style={{ fontSize: 13, color: "#666", lineHeight: 1.7 }}>{item.s}</div>
            </div>
          ))}
        </div>
      </section>

      <div style={S.divider} />

      {/* CAN / CANNOT REPLACE */}
      <section style={S.section}>
        <Label>AI Can / Cannot · 能力边界</Label>
        <h2 style={S.h2}>AI 能替代什么，不能替代什么</h2>
        <p style={{ ...S.muted, marginBottom: 36, maxWidth: 560 }}>任何宣称 AI 可以替代一切的人都在卖概念。以下是五金行业的真实边界。</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
          <div style={{ background: "#0c0c0e", padding: "28px 24px" }}>
            <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: "#22c55e", letterSpacing: 2, marginBottom: 20 }}>AI CAN REPLACE / AUGMENT</div>
            {["批量 SKU 内容生成与翻译", "标准询盘的分类与初步回复", "报价单生成（基于结构化库存）", "合规证书到期提醒与归档", "多平台 listing 同步更新", "客户跟进邮件序列自动发送"].map(t => (
              <div key={t} style={{ fontSize: 13, color: "#888", padding: "8px 0", borderBottom: "1px solid #111", display: "flex", gap: 8 }}>
                <span style={{ color: "#22c55e" }}>→</span>{t}
              </div>
            ))}
          </div>
          <div style={{ background: "#0c0c0e", padding: "28px 24px" }}>
            <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: "#ef4444", letterSpacing: 2, marginBottom: 20 }}>AI CANNOT REPLACE</div>
            {["OEM 工艺可行性判断（需要工厂工程师）", "质量纠纷的最终处理（关系和信任不可自动化）", "新品开发决策（市场感知需要人）", "大客户关系维护（高价值关系不依赖速度）", "材质 / 工艺的专业建议"].map(t => (
              <div key={t} style={{ fontSize: 13, color: "#888", padding: "8px 0", borderBottom: "1px solid #111", display: "flex", gap: 8 }}>
                <span style={{ color: "#ef4444" }}>✕</span>{t}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={S.divider} />

      {/* FAQ */}
      <section style={S.section}>
        <Label>FAQ · 常见问题</Label>
        <h2 style={{ ...S.h2, marginBottom: 40 }}>六个高频问题</h2>
        <div style={{ display: "flex", flexDirection: "column" as const, gap: 0 }}>
          {[
            { q: "五金适合做 DTC 吗？", a: "取决于品类。工具类、建材装饰五金有机会，标准件/紧固件几乎没有。客单价低于 $15 的品类，DTC 的物流成本比会让你亏钱。先算账，再决策。" },
            { q: "SKU 那么多，从哪里开始？", a: "从你最高利润的 100 个 SKU 开始，不是最大销量的。先做好高利润品类的内容质量，建立内容生产 SOP，再批量扩展到全仓。全量铺开的项目几乎都以失败告终。" },
            { q: "如何避免纯价格战？", a: "内容是唯一出路。同样的产品，有详细安装说明 / 应用场景图 / 专业规格对比的 listing，转化率比空白 listing 高出 3 倍以上。价格战是内容竞争力缺失的症状，不是原因。" },
            { q: "OEM 和自有品牌怎么选？", a: "两条路都可以，但不要同时走。OEM 要求交付能力和快速响应，自有品牌要求内容和营销投入。资源有限的工厂同时做两条线，两条都做不好。" },
            { q: "五金内容 AI 准确率如何保证？", a: "纯靠 AI 生成的技术参数内容不可信赖，必须有人工审核流程。正确的方式是：AI 生成初稿 → 技术人员审核关键参数 → 建立错误反馈机制 → 持续优化提示词。把 AI 当助手，不当专家。" },
            { q: "小工厂值得投入 AI 吗？", a: "如果年营收低于 500 万人民币且 SKU 少于 500 个，AI 部署的固定成本回收周期太长，不建议现在做。先把数据清理干净，先建 SOP，这两件事做完了再谈 AI。" },
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
            <Label>Free Consultation · 免费诊断</Label>
            <h2 style={{ ...S.h2, marginBottom: 12 }}>五金行业 AI 落地，先做一次免费诊断</h2>
            <p style={{ fontSize: 15, color: "#666", lineHeight: 1.75, maxWidth: 480 }}>
              60 分钟，我们看你的真实 SKU 库、内容现状、工作流。告诉你第一步该做什么，值不值得做。
            </p>
          </div>
          <div>
            <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 12, padding: "16px 32px", background: "#f59e0b", color: "#08080a", fontSize: 14, fontWeight: 700, fontFamily: "'Instrument Sans',sans-serif", textDecoration: "none" }}>
              预约免费诊断 →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
