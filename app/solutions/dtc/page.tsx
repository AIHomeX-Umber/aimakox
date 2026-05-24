import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from '@/components/Nav';

export const metadata: Metadata = {
  title: 'AI-Native DTC 出海 · Makox',
  description: '很多工厂有产品，但没有 narrative。Makox 帮中国制造企业搭建 AI 驱动的 DTC 独立站——从工厂诊断到品牌叙事到 AI 内容引擎，只做家具、卫浴、五金。',
};

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: "3px", textTransform: "uppercase" as const, color: "#f59e0b", marginBottom: 20, display: "flex", alignItems: "center", gap: 12 }}>
      <span style={{ display: "inline-block", width: 32, height: 1, background: "#f59e0b", flexShrink: 0 }} />
      {children}
    </div>
  );
}

const WORKFLOW_STEPS = [
  { n: "01", title: "品类筛选", sub: "不是所有品类都适合DTC", detail: "生活方式属性 / 客单价 ≥$150 / 复购或配件潜力 / 视觉表达空间" },
  { n: "02", title: "工厂诊断", sub: "你的产品能讲什么故事", detail: "核心差异化梳理 / 竞品定位分析 / 现有客户声音收集" },
  { n: "03", title: "品牌建设", sub: "命名 / 视觉 / 叙事体系", detail: "AI辅助生成候选方案，人工决策。不外包品牌灵魂。" },
  { n: "04", title: "站点搭建", sub: "Shopify + AI内容架构", detail: "Agent批量产出产品描述/FAQ/Blog，结构化数据嵌入" },
  { n: "05", title: "SEO/GEO基础设施", sub: "被AI引用的底层结构", detail: "E-E-A-T建立 / 长尾关键词覆盖 / 结构化数据 / 可被AI摘录的内容格式" },
  { n: "06", title: "持续运营", sub: "内容Engine + 转化优化", detail: "Agent日常内容产出，人工做策略和A/B决策，Klaviyo邮件自动化" },
];

const MISTAKES = [
  { n: "01", title: "找便宜建站公司做模板站", body: "有网站，没流量，没转化。一个$500的模板站和一个$0的站点在Google眼里差不多。建站是最便宜的那部分，流量和内容才是钱。" },
  { n: "02", title: "把DTC当OEM的补充", body: "心态没切换，资源不投入。DTC要求完全不同的组织能力——内容、客服、物流、品牌——用OEM思维跑DTC必然失败。" },
  { n: "03", title: "复制1688/淘宝产品描述", body: "海外消费者买的是生活方式，不是参数。'304不锈钢'对他们没意义，'在出租屋也能有五星级浴室体验'才有。" },
  { n: "04", title: "忽略GEO和结构化数据", body: "AI搜索时代，ChatGPT和Perplexity不抓没有结构的页面。没有schema markup、没有FAQ结构、没有E-E-A-T信号，就是在AI搜索里隐形。" },
  { n: "05", title: "没有内容引擎，上线即停滞", body: "建站后从不更新。Google的新鲜度信号会让静止的站点排名持续下滑。AI内容引擎不是奢侈品，是DTC的标配基础设施。" },
];

const READINESS = [
  { level: "L0", color: "#ef4444", title: "无品牌认知", desc: "只有工厂，只有OEM订单，完全不了解目标市场消费者。DTC是遥远的词。" },
  { level: "L1", color: "#f59e0b", title: "有产品无叙事", desc: "产品质量OK，但不知道怎么讲故事。有建站冲动，但不知道从哪里开始。" },
  { level: "L2", color: "#3b82f6", title: "有网站无流量", desc: "已建独立站，但月访客<1000，没有SEO策略，内容靠偶发更新维持。" },
  { level: "L3", color: "#22c55e", title: "有流量有转化", desc: "月访客5000+，转化率1.5%+，AI内容引擎运转，GEO结构已建立。" },
  { level: "L4", color: "#a78bfa", title: "品牌资产成型", desc: "AI搜索中被引用，忠实客群建立，DTC收入占比>30%，品牌溢价可见。" },
];

const FAQS = [
  {
    q: "工厂做DTC会和现有经销商冲突吗？",
    a: "几乎一定会有摩擦，但这是可以管理的。常见策略是地理隔离（DTC只做现有经销商未覆盖的市场）或品牌隔离（DTC用新品牌名，不直接竞争主线OEM渠道）。更根本的答案是：依赖单一渠道本身才是风险，DTC是分散风险而非制造冲突。"
  },
  {
    q: "多少预算才适合做DTC？",
    a: "务实的最低线：年投入≥$30,000，覆盖建站、内容、广告测试和运营工时。这个数字以下，你做的是实验，不是业务。$50,000-$100,000的年度预算可以认真跑起来。注意：建站费用通常只占总预算的10-15%，流量获取才是大头。"
  },
  {
    q: "AI生成的内容SEO效果好吗？",
    a: "AI内容本身不是问题，没有策略才是问题。Google评估的是内容质量和用户体验，不是内容来源。AI内容配合人工编辑、真实产品知识、结构化数据，效果和纯人工写作相当甚至更好。关键是要给AI投喂真实的工厂知识，而不是生成通用的营销文案。"
  },
  {
    q: "哪些品类不适合做DTC？",
    a: "客单价<$50的标品（价格竞争激烈，广告成本回收困难）；纯工业品/B2B品类（消费者没有购买场景）；高度依赖线下体验的品类（比如定制家具，除非有强大的AR/配置器）；竞品已形成强烈品牌认知的成熟类目（进入成本极高）。"
  },
  {
    q: "建站多久能有ROI？",
    a: "诚实的答案：12-18个月是有机增长的基准时间。SEO需要6-12个月积累权重，内容需要时间被索引和引用。如果想更快，需要配合付费流量，但要确保单位经济成立（ROAS>3x）再扩量。任何承诺3个月盈利的方案都在卖你一个谎言。"
  },
  {
    q: "DTC和亚马逊应该先做哪个？",
    a: "对大多数工厂，亚马逊优先——因为它有现成流量，验证产品需求更快。DTC和亚马逊不是非此即彼，而是不同阶段的工具。建议路径：亚马逊验证产品→积累评价→用评价数据优化品牌叙事→建DTC。已经有亚马逊成绩的工厂，DTC建设会顺利很多。"
  },
];

export default function DTCSolutionsPage() {
  return (
    <div style={{ background: "#08080a", color: "#e4e2dc", minHeight: "100vh", fontFamily: "'Instrument Sans', 'Noto Sans SC', sans-serif" }}>
      <Nav />

      {/* Hero */}
      <section style={{ maxWidth: 960, margin: "0 auto", padding: "120px 32px 80px" }}>
        <Label>Factory-to-Consumer</Label>
        <h1 style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 700, lineHeight: 1.1, margin: "0 0 24px", letterSpacing: "-0.02em" }}>
          你有工厂，<br />但你没有 narrative
        </h1>
        <p style={{ fontSize: 18, color: "#888", maxWidth: 620, lineHeight: 1.8, margin: "0 0 40px" }}>
          海外消费者不买工厂，他们买生活方式。DTC 不是建一个网站，而是从工厂思维切换到品牌思维——这个切换，大多数工厂还没有完成。不是所有工厂都适合做 DTC，但错过这个窗口期的代价会越来越大。
        </p>
        <Link href="/contact" style={{ display: "inline-block", background: "#f59e0b", color: "#08080a", padding: "14px 32px", fontWeight: 700, fontSize: 14, letterSpacing: "1px", textDecoration: "none", fontFamily: "'JetBrains Mono', monospace" }}>
          免费诊断你的DTC适配度 →
        </Link>

        {/* Stats bar */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 1, marginTop: 64, background: "#141416" }}>
          {[
            { v: "<8%", l: "中国制造商DTC渗透率" },
            { v: "1.2–3.5%", l: "独立站平均转化率" },
            { v: "70%+", l: "AI内容成本降幅" },
            { v: "12–18mo", l: "建站到盈利平均周期" },
          ].map((s) => (
            <div key={s.v} style={{ background: "#0c0c0e", padding: "28px 24px" }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 28, fontWeight: 700, color: "#f59e0b", marginBottom: 8 }}>{s.v}</div>
              <div style={{ fontSize: 12, color: "#888", lineHeight: 1.4 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Definition */}
      <section style={{ maxWidth: 960, margin: "0 auto", padding: "80px 32px" }}>
        <Label>什么是真正的DTC</Label>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 1, background: "#141416" }}>
          {[
            { t: "什么是DTC", b: "Direct-to-Consumer：跳过中间商，直接触达终端消费者。不只是建网站，而是掌控品牌叙事、客户数据、定价权和消费者关系——这些在OEM模式下全都属于买家。" },
            { t: "为什么重要", b: "OEM利润率正在被压缩到极限。DTC不是利润更高，而是议价权更强。掌握消费者数据的工厂，能够做产品迭代；没有数据的工厂，只能继续接订单。" },
            { t: "传统方式为什么失效", b: "复制国内电商打法出海行不通。1688逻辑、淘宝标题、纯参数堆砌——海外消费者的决策模型完全不同。他们在买身份认同，不是在买规格表。" },
            { t: "AI-Native方法", b: "AI让小工厂能以品牌成本运营内容引擎。Agent持续产出本地化内容、结构化数据让AI搜索可引用、GEO让品牌在ChatGPT/Perplexity里出现——这是当前窗口期。" },
          ].map((d) => (
            <div key={d.t} style={{ background: "#0c0c0e", padding: "32px 28px" }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "#f59e0b", letterSpacing: "2px", textTransform: "uppercase", marginBottom: 12 }}>{d.t}</div>
              <p style={{ fontSize: 15, color: "#888", lineHeight: 1.7, margin: 0 }}>{d.b}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Core framework: 3 pillars */}
      <section style={{ maxWidth: 960, margin: "0 auto", padding: "0 32px 80px" }}>
        <Label>DTC成功三要素</Label>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
          {[
            { t: "Narrative（叙事）", icon: "◈", b: "把工厂故事翻译成消费者语言。不是\"我们有20年历史\"，而是\"我们知道你的小公寓需要什么\"。这个翻译工作，大多数工厂从来没有认真做过。" },
            { t: "Infrastructure（基础设施）", icon: "◉", b: "Shopify架构 + AI内容引擎 + SEO/GEO覆盖 + 支付物流打通。每一层都有坑，每一层都需要真实的实施经验，不只是产品demo。" },
            { t: "Growth Engine（增长引擎）", icon: "◎", b: "内容Agent持续产出 + 社媒矩阵运营 + GEO结构化数据 + Klaviyo邮件自动化。品牌不是建出来的，是持续产出积累的。" },
          ].map((p) => (
            <div key={p.t} style={{ background: "#0c0c0e", border: "1px solid #141416", padding: "36px 28px" }}>
              <div style={{ fontSize: 28, color: "#f59e0b", marginBottom: 16 }}>{p.icon}</div>
              <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 12 }}>{p.t}</div>
              <p style={{ fontSize: 14, color: "#888", lineHeight: 1.7, margin: 0 }}>{p.b}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Workflow */}
      <section style={{ maxWidth: 960, margin: "0 auto", padding: "0 32px 80px" }}>
        <Label>工厂→DTC品牌路径</Label>
        <div style={{ display: "flex", flexDirection: "column", gap: 1, background: "#141416" }}>
          {WORKFLOW_STEPS.map((s) => (
            <div key={s.n} style={{ background: "#0c0c0e", padding: "24px 28px", display: "grid", gridTemplateColumns: "48px 1fr 2fr", gap: 24, alignItems: "start" }}>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: "#444", paddingTop: 2 }}>{s.n}</span>
              <div>
                <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 4 }}>{s.title}</div>
                <div style={{ fontSize: 12, color: "#f59e0b", fontFamily: "'JetBrains Mono', monospace" }}>{s.sub}</div>
              </div>
              <p style={{ fontSize: 14, color: "#888", lineHeight: 1.6, margin: 0 }}>{s.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Common mistakes */}
      <section style={{ maxWidth: 960, margin: "0 auto", padding: "0 32px 80px" }}>
        <Label>常见的五个错误</Label>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {MISTAKES.map((m) => (
            <div key={m.n} style={{ background: "#0c0c0e", border: "1px solid #141416", borderLeft: "3px solid #ef4444", padding: "24px 28px", display: "grid", gridTemplateColumns: "48px 1fr", gap: 20 }}>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "#444", paddingTop: 4 }}>{m.n}</span>
              <div>
                <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 8 }}>{m.title}</div>
                <p style={{ fontSize: 14, color: "#888", lineHeight: 1.6, margin: 0 }}>{m.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Readiness model */}
      <section style={{ maxWidth: 960, margin: "0 auto", padding: "0 32px 80px" }}>
        <Label>DTC就绪度模型</Label>
        <div style={{ display: "flex", flexDirection: "column", gap: 1, background: "#141416" }}>
          {READINESS.map((r) => (
            <div key={r.level} style={{ background: "#0c0c0e", padding: "24px 28px", display: "grid", gridTemplateColumns: "64px 160px 1fr", gap: 24, alignItems: "start" }}>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 14, fontWeight: 700, color: r.color }}>{r.level}</span>
              <span style={{ fontSize: 14, fontWeight: 700 }}>{r.title}</span>
              <p style={{ fontSize: 14, color: "#888", lineHeight: 1.6, margin: 0 }}>{r.desc}</p>
            </div>
          ))}
        </div>
        <p style={{ fontSize: 13, color: "#444", marginTop: 16, fontFamily: "'JetBrains Mono', monospace" }}>大多数找到我们的工厂在 L1–L2。我们的工作是帮你到达 L3。</p>
      </section>

      {/* Case signal */}
      <section style={{ maxWidth: 960, margin: "0 auto", padding: "0 32px 80px" }}>
        <Label>案例信号</Label>
        <div style={{ background: "#0c0c0e", border: "1px solid #141416", borderLeft: "3px solid #f59e0b", padding: "40px 40px" }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "#f59e0b", letterSpacing: "2px", textTransform: "uppercase", marginBottom: 20 }}>Space Discoverer · 墨菲床DTC</div>
          <p style={{ fontSize: 16, lineHeight: 1.9, color: "#888", margin: "0 0 24px" }}>
            这家工厂生产墨菲壁床十余年，OEM客户集中在欧洲经销商。转型DTC的核心挑战不是产品——产品质量过硬——而是叙事：如何向一个住30平米公寓的纽约租客解释，为什么他需要一张会消失的床。
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.9, color: "#888", margin: "0 0 24px" }}>
            我们从"空间焦虑"这个情感锚点重构了整个内容体系。产品描述从参数切换到场景；博客内容覆盖"small apartment living"长尾词群；结构化FAQ数据让ChatGPT在回答"小公寓家具推荐"时会引用Space Discoverer的内容页。
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 1, background: "#141416", marginTop: 32 }}>
            {[
              { v: "6个月", l: "从白牌到品牌叙事建立" },
              { v: "3.2×", l: "内容产出效率提升" },
              { v: "AI引用", l: "进入ChatGPT推荐结果" },
            ].map((s) => (
              <div key={s.v} style={{ background: "#0c0c0e", padding: "20px 20px" }}>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 22, fontWeight: 700, color: "#f59e0b", marginBottom: 6 }}>{s.v}</div>
                <div style={{ fontSize: 12, color: "#888" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ maxWidth: 960, margin: "0 auto", padding: "0 32px 80px" }}>
        <Label>常见问题</Label>
        <div style={{ display: "flex", flexDirection: "column", gap: 1, background: "#141416" }}>
          {FAQS.map((f) => (
            <div key={f.q} style={{ background: "#0c0c0e", padding: "28px 32px" }}>
              <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 12, color: "#e4e2dc" }}>{f.q}</div>
              <p style={{ fontSize: 14, color: "#888", lineHeight: 1.75, margin: 0 }}>{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ maxWidth: 960, margin: "0 auto", padding: "0 32px 120px" }}>
        <div style={{ background: "#0c0c0e", border: "1px solid #141416", padding: "64px 48px", textAlign: "center" }}>
          <Label>如果你是认真的</Label>
          <h2 style={{ fontSize: "clamp(24px, 4vw, 40px)", fontWeight: 700, margin: "0 0 16px", letterSpacing: "-0.02em" }}>
            我们聊聊
          </h2>
          <p style={{ fontSize: 16, color: "#888", maxWidth: 480, margin: "0 auto 40px", lineHeight: 1.7 }}>
            60分钟免费诊断。我们会告诉你你的品类是否适合DTC、你现在在哪个就绪度层级、以及下一步最重要的一件事是什么。
          </p>
          <Link href="/contact" style={{ display: "inline-block", background: "#f59e0b", color: "#08080a", padding: "16px 40px", fontWeight: 700, fontSize: 14, letterSpacing: "1px", textDecoration: "none", fontFamily: "'JetBrains Mono', monospace" }}>
            预约诊断 →
          </Link>
          <p style={{ fontSize: 12, color: "#444", marginTop: 20, fontFamily: "'JetBrains Mono', monospace" }}>不推销，不废话。只聊真实情况。</p>
        </div>
      </section>
    </div>
  );
}
