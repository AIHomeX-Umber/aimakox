import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'

export const metadata: Metadata = {
  title: '自动化设备行业 AI 转型 · Makox',
  description: '工业设备、自动化模组、B2B 机械出口企业 AI 转型指南。技术销售内容、询盘处理、文档自动化——制造设备出口的 AI 实战切入点。',
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

export default function AutomationSystemsPage() {
  return (
    <div style={S.page}>
      <Nav />

      {/* HERO */}
      <section style={{ ...S.section, paddingTop: "100px", paddingBottom: "72px" }}>
        <Label>Automation Systems · 自动化设备</Label>
        <h1 style={{ fontFamily: "'Instrument Sans','Noto Sans SC',sans-serif", fontSize: "clamp(32px,4.5vw,58px)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: 20, maxWidth: 760 }}>
          B2B 机械出口：<br />技术销售最难的是被找到
        </h1>
        <p style={{ fontSize: 16, color: "#888", lineHeight: 1.8, maxWidth: 640, marginBottom: 48 }}>
          工业设备、自动化模组、专用机械——这个赛道的买家决策周期长、技术门槛高、信任建立慢。AI 在这里的价值不是替代销售，而是让技术内容规模化触达正确的买家。
        </p>
        <div style={{ display: "flex", gap: 40, flexWrap: "wrap" as const, paddingTop: 32, borderTop: "1px solid #1a1a1a" }}>
          {[
            ["B2B机械平均决策周期", "3–18个月"],
            ["技术文档语言覆盖率", "<20%"],
            ["询盘到成单转化率", "典型2–8%"],
            ["展会询盘跟进率", "<40%"],
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
        <Label>Why AI-Ready · 为什么自动化设备 AI 就绪度高</Label>
        <h2 style={S.h2}>B2B 机械出口有独特的 AI 适配优势</h2>
        <p style={{ ...S.muted, maxWidth: 620, marginBottom: 40 }}>不是因为产品数字化程度高，而是因为销售流程中有大量高重复性、可结构化的工作。</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 2 }}>
          {[
            { title: "技术规格文档结构化程度高", desc: "机械设备的参数表、技术规格书、合规文档是天然结构化的数据——AI 可以直接读取、生成、翻译，准确率远高于消费品内容生成。", color: "#f59e0b" },
            { title: "询盘处理有清晰的规则逻辑", desc: "\"需要处理量 X / 工件尺寸 Y / 精度要求 Z\"——这类询盘的初步评估有规则可循，AI 可以做第一层筛选和参数匹配，减少工程师时间消耗。", color: "#3b82f6" },
            { title: "展会后跟进体量大", desc: "展会结束后通常积累几百个名片/询盘，90%因人力不足没有被认真跟进。AI 跟单序列可以让每个询盘都收到专业的后续接触，不再靠运气。", color: "#22c55e" },
            { title: "案例文档价值极高", desc: "一个经过 AI 结构化处理的行业应用案例，比十个通用产品页更有说服力。机械设备行业的案例内容严重不足，做好了是明显的竞争优势。", color: "#a78bfa" },
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
        <h2 style={S.h2}>自动化设备出口企业，AI 最值得切入的五个环节</h2>
        <div style={{ display: "flex", flexDirection: "column" as const, gap: 2, marginTop: 32 }}>
          {[
            { n: "01", title: "技术文档多语言自动化", detail: "设备操作手册、维护指南、安装说明——每一份文档翻译成英/德/西/法/日语的成本极高。AI 翻译 + 技术人员校对 的组合可以将成本压缩 70%，质量不低于传统翻译。" },
            { n: "02", title: "询盘初步技术评估 Agent", detail: "收到询盘 → AI 解析关键参数（产量要求 / 材质 / 精度 / 预算范围）→ 与产品库匹配 → 生成初步方案建议 → 推送给对应工程师。把工程师从低质量询盘里解放出来。" },
            { n: "03", title: "展会 / 展位后跟进序列", detail: "展会结束后的7天是黄金跟进窗口。AI 跟单 Agent 可以在24小时内给所有扫码 / 留名片的潜客发出个性化的第一封跟进邮件，后续按时间轴自动发送后续接触内容。" },
            { n: "04", title: "行业应用案例内容工厂", detail: "\"食品加工行业的自动化包装解决方案\"\"新能源电池模组检测设备应用案例\"——这类垂直行业案例是 B2B 买家决策的核心参考内容，AI 可以基于项目数据快速生成结构化案例页面。" },
            { n: "05", title: "备件 / 耗材订单自动处理", detail: "老客户的备件复购订单通常很标准化。AI 可以处理备件型号匹配、价格查询、交期确认的全流程，让销售团队专注于新客户开拓而不是处理重复性内部事务。" },
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
        <h2 style={S.h2}>B2B 机械出口企业的四个常见 AI 误区</h2>
        <div style={{ display: "flex", flexDirection: "column" as const, gap: 16, marginTop: 32 }}>
          {[
            { title: "用 B2C 内容逻辑做 B2B 营销", body: "机械设备买家是工程师和采购总监，不是消费者。故事化叙事、情绪化 slogan 在这里不管用。B2B 内容的核心是技术可信度和应用场景证明——AI 生成的内容必须在这个框架下调校。" },
            { title: "产品手册数字化程度太低", body: "很多机械厂商的产品文档还是十年前的 Word 文件，参数不准确、版本混乱、格式不统一。在这种基础上直接上 AI，输出只会放大错误。文档数字化治理是 AI 的先决条件。" },
            { title: "高估 AI 在技术决策环节的作用", body: "AI 不能替代工程师和客户之间的技术方案对话。AI 的价值在\"之前\"（让正确的买家找到你）和\"之后\"（跟进、文档、售后支持），不在核心销售对话本身。" },
            { title: "没有客户成功案例积累", body: "机械设备的案例是最有说服力的销售工具，但大多数厂商没有结构化记录客户应用案例的习惯。从现在开始建立案例数据库，是 AI 内容工厂最重要的原材料积累。" },
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
        <h2 style={{ ...S.h2, marginBottom: 40 }}>B2B 机械出口 AI 高频问题</h2>
        <div style={{ display: "flex", flexDirection: "column" as const }}>
          {[
            { q: "机械设备产品线少，做 AI 内容值得吗？", a: "SKU 少不代表内容需求少。一台设备的完整内容资产包括：多语言产品页、技术规格书、行业应用案例（至少3–5个行业）、FAQ、操作视频文字稿、备件目录……这些内容如果靠人工做，每台设备需要数十小时。AI 可以把这个时间压缩到2–3小时。" },
            { q: "我们的客户不通过网络找供应商，AI 有用吗？", a: "这个情况在 2020 年前成立，现在正在快速改变。即使你的大客户来自展会或老关系，他们的技术评估团队仍然会在网上搜索你公司的背景、产品文档、案例。AI 内容的作用是\"在被考察时通过考察\"，不只是\"主动获客\"。" },
            { q: "设备定制化程度高，AI 能处理定制需求的询盘吗？", a: "部分可以。AI 可以处理参数在已知范围内的定制询盘（尺寸变化 / 配置选项 / 产量调整），生成初步的方案框架和报价范围。超出范围的真正定制需求，仍然需要工程师介入。这个组合可以让你的工程师只看真正需要他们的案子。" },
            { q: "如何开始？先做什么？", a: "第一步：产品文档数字化和结构化（通常2–4周）。第二步：优先处理量最大的3类询盘，建立分类和响应 SOP。第三步：从最成功的2–3个客户案例开始，AI 辅助生成结构化案例内容。这三步做完，AI 才真正有\"料\"可以跑。" },
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
            <h2 style={{ ...S.h2, marginBottom: 12 }}>B2B机械出口 AI 布局，先聊30分钟</h2>
            <p style={{ fontSize: 15, color: "#666", lineHeight: 1.75, maxWidth: 480 }}>
              我们看你的产品文档现状、询盘量级、展会跟进情况。告诉你第一个值得 AI 化的销售环节，以及怎么建立内容护城河。
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
