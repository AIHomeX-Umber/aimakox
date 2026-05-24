import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: '陶瓷出口行业 AI 转型 · Makox',
  description: '陶瓷出口行业 AI 转型指南。场景化内容、设计师渠道、DTC路径——陶瓷品类特有的 AI 切入点和出海策略。',
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

export default function CeramicsPage() {
  return (
    <div style={S.page}>
      <Nav />

      {/* HERO */}
      <section style={S.hero}>
        <Label>Ceramics · 陶瓷出口</Label>
        <h1 style={S.h1}>陶瓷的销售不是卖瓷砖，是卖空间感</h1>
        <p style={S.sub}>
          陶瓷品类的购买决策高度情感化——消费者选的不是产品参数，是他们想要的家的样子。这让内容质量成为核心竞争力。而 AI 恰好能把设计师的空间叙事变成可规模化的内容生产系统。
        </p>
        <div style={{ display: "flex", gap: 40, flexWrap: "wrap" as const, paddingTop: 32, borderTop: "1px solid #1a1a1a" }}>
          {[
            ["陶瓷DTC行业渗透率", "<5%"],
            ["场景图对转化率影响", "3–5×"],
            ["设计师渠道占专业采购", "40%+"],
            ["内容生产成本占小品牌销售额", "15%+"],
          ].map(([label, val]) => (
            <div key={label}>
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 24, fontWeight: 700, color: "#f59e0b", marginBottom: 4 }}>{val}</div>
              <div style={{ fontSize: 11, color: "#444", letterSpacing: "0.5px", maxWidth: 160 }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      <div style={S.divider} />

      {/* AI ENTRY POINTS */}
      <section style={S.section}>
        <Label>AI Entry Points · 陶瓷专项</Label>
        <h2 style={S.h2}>陶瓷品类的 AI 切入点</h2>
        <p style={{ ...S.muted, marginBottom: 36, maxWidth: 580 }}>陶瓷的 AI 应用不是参数填充，是风格叙事的规模化——这是它与五金、卫浴最本质的区别。</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 2 }}>
          {[
            { title: "场景化描述生成", desc: "同一款瓷砖，北欧风、工业风、侘寂风三套叙事逻辑完全不同。AI 可以基于风格标签批量生成差异化文案。", color: "#f59e0b" },
            { title: "多风格叙事系统", desc: "建立品牌自己的风格词汇库（Nordic / Wabi-Sabi / Industrial），AI 在库内生成，保证调性一致。", color: "#3b82f6" },
            { title: "设计师内容包自动化", desc: "产品规格书、铺贴方案建议、场景搭配参考——设计师需要的这套素材可以 AI 驱动按品类批量产出。", color: "#22c55e" },
            { title: "样品跟进自动化", desc: "寄样后的跟进是转化关键节点，也是最容易被遗忘的。跟单 Agent 可以按时间轴自动发送跟进内容。", color: "#a78bfa" },
            { title: "竞品空间风格监控", desc: "Pinterest / Houzz / Instagram 上的流行空间风格，AI 可以持续监控趋势，帮助内容策略调整方向。", color: "#f59e0b" },
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
        <h2 style={S.h2}>为什么陶瓷内容比其他品类更难做</h2>
        <p style={{ ...S.muted, marginBottom: 36, maxWidth: 580 }}>陶瓷不缺参数，缺的是"让人想买"的那个理由。这四个结构性障碍，是大多数陶瓷品牌内容停滞的真实原因。</p>
        <div style={{ display: "flex", flexDirection: "column" as const, gap: 2 }}>
          {[
            { no: "01", prob: "高度依赖视觉——没有好图，文字无意义", detail: "再好的场景文案，配上手机随手拍的白底图，转化率是零。陶瓷内容的瓶颈不是写作，是摄影。AI 不能替代场景摄影，但可以让有限的好图产出更多内容变体。" },
            { no: "02", prob: "风格语言需要品味，不只是词汇", detail: "\"简约\" 和 \"侘寂\" 的区别，不是多加几个形容词就能解决的。AI 需要在经过品牌审核的语料库基础上输出，否则生成的内容会有明显的同质化气息。" },
            { no: "03", prob: "消费者需要看到完成效果，而非单品", detail: "没有人买一块瓷砖——他们买的是铺完之后的厨房、卫生间、客厅。场景图是转化的核心，但大多数工厂只有产品图。这是内容投入的优先级判断，不是 AI 能解决的问题。" },
            { no: "04", prob: "设计语言的文化翻译难度高", detail: "\"淡雅\" 在英文里找不到直接对应词。把中文审美语言准确翻译成目标市场的设计词汇，需要既懂设计又懂语言的人来训练 AI，不是直接用通用翻译工具。" },
          ].map((item) => (
            <div key={item.no} style={{ background: "#0c0c0e", padding: "24px 28px", display: "grid", gridTemplateColumns: "40px 240px 1fr", gap: "0 24px", alignItems: "start" }}>
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
        <h2 style={S.h2}>陶瓷 DTC：高溢价，高门槛</h2>
        <p style={{ ...S.muted, marginBottom: 36, maxWidth: 600 }}>陶瓷是所有制造品类里 DTC 品牌溢价空间最大的之一，但进入门槛同样高——重货、易碎、退换货复杂是绕不过去的现实。</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
          <div style={{ background: "#0c0c0e", padding: "28px 24px" }}>
            <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: "#22c55e", letterSpacing: 2, marginBottom: 16 }}>OPPORTUNITY</div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column" as const, gap: 10 }}>
              {["设计品牌溢价空间巨大——同等质量的瓷砖，有品牌叙事的售价可以高出 3–8 倍", "设计师 B2B 渠道天然存在，项目采购量大、复购稳定，是最值得优先开拓的渠道", "高客单价 + 低退货率（安装后不退）= 单位经济较好"].map(t => (
                <li key={t} style={{ fontSize: 13, color: "#888", display: "flex", gap: 8, alignItems: "flex-start" }}><span style={{ color: "#22c55e", flexShrink: 0, marginTop: 2 }}>→</span>{t}</li>
              ))}
            </ul>
          </div>
          <div style={{ background: "#0c0c0e", padding: "28px 24px" }}>
            <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: "#ef4444", letterSpacing: 2, marginBottom: 16 }}>BARRIER</div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column" as const, gap: 10 }}>
              {["重货运费高，小批量直发不经济，需要海外仓配合", "易碎品的运输破损率和售后成本必须在定价里提前算进去", "场景摄影成本高，没有好图就没有好转化，投入无法避免"].map(t => (
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
        <h2 style={S.h2}>陶瓷工厂每天在浪费时间的四件事</h2>
        <div style={{ display: "flex", flexDirection: "column" as const, gap: 2, marginTop: 32 }}>
          {[
            { p: "样品管理混乱", s: "哪批样品寄给谁、反馈是什么、是否跟进——这些信息散在邮件和微信里，没有结构化。一个样品跟单 Agent 可以把全流程变成可查询的状态数据。" },
            { p: "工程项目大批量跟单", s: "工程项目涉及多个批次、多个验收节点。跟单 Agent 可以自动提醒生产节点、推送检验报告、记录沟通历史，把项目经理从微信群里解放出来。" },
            { p: "设计师合作资料制作耗时", s: "设计师需要规格书 PDF、铺贴效果图、尺寸说明——每次都要从头整理。建立结构化的设计师内容资产库，AI 按需组装，出一份资料从 2 小时压到 15 分钟。" },
            { p: "色差和批次一致性沟通", s: "陶瓷的色差是所有渠道客诉的第一来源。标准化的批次色差说明模板 + 主动告知的跟单流程，可以把 80% 的售后沟通前置到交货前。" },
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
        <h2 style={S.h2}>AI 能做什么，不能做什么</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, marginTop: 32 }}>
          <div style={{ background: "#0c0c0e", padding: "28px 24px" }}>
            <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: "#22c55e", letterSpacing: 2, marginBottom: 20 }}>AI CAN REPLACE / AUGMENT</div>
            {["多风格场景文案批量生成", "样品跟进邮件自动发送", "设计师资料包自动组装", "色差说明标准模板生成", "社媒内容多平台分发", "询盘初步分类与回复"].map(t => (
              <div key={t} style={{ fontSize: 13, color: "#888", padding: "8px 0", borderBottom: "1px solid #111", display: "flex", gap: 8 }}>
                <span style={{ color: "#22c55e" }}>→</span>{t}
              </div>
            ))}
          </div>
          <div style={{ background: "#0c0c0e", padding: "28px 24px" }}>
            <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: "#ef4444", letterSpacing: 2, marginBottom: 20 }}>AI CANNOT REPLACE</div>
            {["场景摄影和空间造型（需要真实的好图）", "品牌调性的最终审核（品味判断不能外包给 AI）", "设计师关系建立（B2B 信任需要人来维护）", "色差的视觉判断（需要专业检验人员）", "新系列的风格方向决策"].map(t => (
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
            { q: "陶瓷做 DTC 需要什么条件？", a: "至少需要：有一个清晰的风格定位（不能是\"什么都做\"）、有场景摄影预算（最低 3 万人民币）、有海外仓或能接受较高运费率。三者缺一，DTC 难以为继。" },
            { q: "场景图怎么解决？", a: "场景图是陶瓷 DTC 的核心壁垒，没有捷径。可以从低成本方案开始：找国内有设计感的样板间合作拍摄、用 AI 图像生成工具生成场景图（作为辅助，不能替代真实摄影）、与室内设计师合作置换资源。" },
            { q: "设计师渠道怎么开拓？", a: "设计师渠道不是靠广告，是靠内容和资源。做高质量的设计师内容包（规格书、效果图、铺贴方案），在 Houzz / Pinterest 上建立品牌存在感，再通过项目案例积累口碑。急不来，但是最稳固的 B2B 渠道。" },
            { q: "陶瓷品牌如何建立调性？", a: "调性不是 slogan，是每一次内容输出的风格一致性积累。建立一本品牌风格手册（色调、词汇、禁用词），AI 在手册范围内生成内容，确保调性一致。这个手册本身需要人来制定，通常 1–2 周完成。" },
            { q: "怎么和佛山大品牌竞争？", a: "正面竞争是死路。出路在于细分——选一个大品牌没有认真做的风格细分市场（比如侘寂风、粗犷工业风），把这个细分做透。客单价低于大品牌 30%、内容深度超过大品牌 10 倍，这是小品牌的生存空间。" },
            { q: "小批量定制能用 AI 做内容吗？", a: "可以，但前提是有结构化的定制参数库。颜色 / 尺寸 / 花色代码 / 表面工艺这些变量全部结构化之后，AI 才能基于参数批量生成准确的定制产品描述。没有这个基础，AI 生成的内容大概率有参数错误。" },
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
            <h2 style={{ ...S.h2, marginBottom: 12 }}>陶瓷品牌出海，先做一次真实的评估</h2>
            <p style={{ fontSize: 15, color: "#666", lineHeight: 1.75, maxWidth: 480 }}>
              60 分钟，我们看你的品类定位、内容现状、目标市场。告诉你 DTC 路径是否可行，以及第一步应该投入什么。
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
