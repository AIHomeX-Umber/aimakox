import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from '@/components/Nav';

export const metadata: Metadata = {
  title: '卫浴出口行业 AI 转型 · Makox',
  description: '卫浴出口行业 AI 转型指南。跟单自动化、多语言内容、DTC建站——卫浴行业特有的 AI 切入点、Agent 全链路案例。',
};

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: "3px", textTransform: "uppercase" as const, color: "#f59e0b", marginBottom: 20, display: "flex", alignItems: "center", gap: 12 }}>
      <span style={{ display: "inline-block", width: 32, height: 1, background: "#f59e0b", flexShrink: 0 }} />
      {children}
    </div>
  );
}

function Divider() {
  return <div style={{ height: 1, background: "linear-gradient(90deg, transparent, #1e1e1e, transparent)" }} />;
}

export default function BathroomPage() {
  return (
    <div style={{ background: "#08080a", color: "#e4e2dc", fontFamily: "'Instrument Sans', 'Noto Sans SC', sans-serif", minHeight: "100vh" }}>
      <Nav />

      {/* ── 1. HERO ── */}
      <section style={{ padding: "120px 40px 80px", maxWidth: 900, margin: "0 auto" }}>
        <Label>BATHROOM · 卫浴出口</Label>
        <h1 style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 700, lineHeight: 1.15, marginBottom: 24, letterSpacing: "-1px" }}>
          卫浴跟单的问题不是速度，是链路断裂
        </h1>
        <p style={{ fontSize: "clamp(16px, 2vw, 20px)", color: "#888", lineHeight: 1.8, maxWidth: 680, marginBottom: 56 }}>
          卫浴产品的跟单复杂度远超大多数品类——规格多、安装复杂、客诉多、认证要求严苛。这些复杂度让销售团队陷在低价值事务里，而 AI Agent 正好擅长处理这种结构化但繁琐的链路。
        </p>
        <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 24 }}>
          {[
            { label: "平均跟单周期", value: "4–12周" },
            { label: "规格变体数", value: ">1000/品牌" },
            { label: "安装相关客诉占比", value: "35%+" },
            { label: "认证文件类型", value: "15+ 种" },
          ].map((s) => (
            <div key={s.label} style={{ background: "#0c0c0e", border: "1px solid #141416", borderRadius: 8, padding: "20px 28px" }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 22, fontWeight: 700, color: "#f59e0b" }}>{s.value}</div>
              <div style={{ fontSize: 13, color: "#888", marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* ── 2. AI ENTRY POINTS ── */}
      <section style={{ padding: "80px 40px", maxWidth: 900, margin: "0 auto" }}>
        <Label>AI 切入点</Label>
        <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, marginBottom: 12 }}>卫浴行业 AI 最有效的6个位置</h2>
        <p style={{ color: "#888", marginBottom: 40, lineHeight: 1.7 }}>卫浴 SKU 复杂度是电商内容的噩梦。这是能真正跑通的切入路径。</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
          {[
            {
              num: "01",
              title: "询盘自动分级",
              desc: "价格询问 / 规格咨询 / 经销商洽谈 / 工程项目——四类询盘处理方式完全不同。AI 分级后路由，销售只处理高意向线索。",
            },
            {
              num: "02",
              title: "报价单自动生成",
              desc: "含规格/认证/包装/物流的结构化报价单。卫浴产品报价组合复杂，人工出错率高，AI 从产品数据库自动组装，格式标准，减少来回确认。",
            },
            {
              num: "03",
              title: "跟单序列自动化",
              desc: "定金 → 打样 → 生产 → QC → 出货 → 到港。每个节点自动触发通知给对应责任人，断点清晰，责任可追溯。",
            },
            {
              num: "04",
              title: "安装指南多语言生成",
              desc: "卫浴安装文档是客诉重灾区。基于产品规格自动生成英/德/法/西/日语版安装说明，降低安装失败率和售后成本。",
            },
            {
              num: "05",
              title: "认证文件管理与提醒",
              desc: "CE/CUPC/WELS/SANS 等认证文件有效期追踪，出货前自动核查认证完整性，避免到港被扣货的被动局面。",
            },
            {
              num: "06",
              title: "客诉自动分类与路由",
              desc: "安装问题 / 质量问题 / 物流损坏 / 配件缺失——自动分类后路由给对应处理团队，同时生成结构化记录用于质量改进。",
            },
          ].map((item) => (
            <div key={item.num} style={{ background: "#0c0c0e", border: "1px solid #141416", borderRadius: 8, padding: "28px 24px" }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "#f59e0b", marginBottom: 12 }}>{item.num}</div>
              <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 10 }}>{item.title}</div>
              <div style={{ fontSize: 14, color: "#888", lineHeight: 1.7 }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* ── 3. CONTENT CHALLENGES ── */}
      <section style={{ padding: "80px 40px", maxWidth: 900, margin: "0 auto" }}>
        <Label>内容挑战</Label>
        <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, marginBottom: 12 }}>为什么卫浴内容特别难做</h2>
        <p style={{ color: "#888", marginBottom: 40, lineHeight: 1.7 }}>卫浴不是靠创意出位的品类，是靠准确性和可信度赢得客户的。</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
          {[
            {
              title: "规格参数必须精确",
              color: "#ef4444",
              desc: "水压/流量/安装尺寸/排水管径——卫浴买家决策高度依赖参数准确性。一个错误的规格标注会导致退货，错误的认证标注可能导致法律风险。",
            },
            {
              title: "市场认证差异大",
              color: "#f59e0b",
              desc: "CE（欧盟）/ CUPC（北美）/ WELS（澳大利亚）/ SANS（南非）——每个市场要单独处理，内容要体现对应认证，不能用同一版本打天下。",
            },
            {
              title: "安装信息是核心内容",
              color: "#3b82f6",
              desc: "缺少好的安装指南是卫浴品牌最大的差评来源。消费者不会因为产品好看给五星，但会因为安装指南看不懂给一星。",
            },
            {
              title: "产品寿命内容被忽视",
              color: "#a78bfa",
              desc: "卫浴消费者会搜索\"X品牌水龙头漏水怎么修\"——这是 SEO 内容的金矿，也是品牌信任建立的入口。大多数工厂完全没有这类内容。",
            },
          ].map((item) => (
            <div key={item.title} style={{ background: "#0c0c0e", border: `1px solid ${item.color}22`, borderRadius: 8, padding: "28px 24px" }}>
              <div style={{ width: 32, height: 3, background: item.color, borderRadius: 2, marginBottom: 16 }} />
              <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 10 }}>{item.title}</div>
              <div style={{ fontSize: 14, color: "#888", lineHeight: 1.7 }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* ── 4. DTC OPPORTUNITIES & BARRIERS ── */}
      <section style={{ padding: "80px 40px", maxWidth: 900, margin: "0 auto" }}>
        <Label>DTC 机会与障碍</Label>
        <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, marginBottom: 12 }}>卫浴 DTC：有路径，但需要选对入口</h2>
        <p style={{ color: "#888", marginBottom: 8, lineHeight: 1.7 }}>
          整体卫浴/浴室柜的 DTC 比水龙头/花洒更可行——客单价更高，可叙事空间更大。不要从低价单品切入 DTC。
        </p>
        <p style={{ color: "#444", fontSize: 13, fontFamily: "'JetBrains Mono', monospace", marginBottom: 40 }}>建议先从高客单（&gt;$500）、设计感强的品类切入，验证内容和物流模型</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          <div style={{ background: "#0c0c0e", border: "1px solid #22c55e22", borderRadius: 8, padding: "28px 24px" }}>
            <div style={{ color: "#22c55e", fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: "2px", marginBottom: 16 }}>OPPORTUNITY · 机会</div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column" as const, gap: 12 }}>
              {[
                "高客单价浴室柜/整体淋浴房 DTC 路径可行，毛利支撑获客成本",
                "安装视频内容可建立品牌技术权威，差评转口碑的可能性大",
                "设计师渠道可通过内容营销建立：这是家装行业的关键KOL",
                "维修/配件内容是长尾 SEO 的持续流量来源",
              ].map((t) => (
                <li key={t} style={{ display: "flex", gap: 10, fontSize: 14, lineHeight: 1.7 }}>
                  <span style={{ color: "#22c55e", flexShrink: 0, marginTop: 3 }}>→</span>
                  <span style={{ color: "#888" }}>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div style={{ background: "#0c0c0e", border: "1px solid #ef444422", borderRadius: 8, padding: "28px 24px" }}>
            <div style={{ color: "#ef4444", fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: "2px", marginBottom: 16 }}>BARRIER · 障碍</div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column" as const, gap: 12 }}>
              {[
                "安装需要专业水工，非消费者可自行完成，限制直接 B2C 转化",
                "重货物流成本高，浴缸/浴室柜的末端配送是硬成本",
                "退换货处理极其复杂，一次破损退货成本可达产品价格的50%",
                "认证前置成本高：进入北美/欧盟市场需要认证，小批量不划算",
              ].map((t) => (
                <li key={t} style={{ display: "flex", gap: 10, fontSize: 14, lineHeight: 1.7 }}>
                  <span style={{ color: "#ef4444", flexShrink: 0, marginTop: 3 }}>×</span>
                  <span style={{ color: "#888" }}>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Divider />

      {/* ── 5. WORKFLOW PAIN POINTS ── */}
      <section style={{ padding: "80px 40px", maxWidth: 900, margin: "0 auto" }}>
        <Label>运营痛点</Label>
        <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, marginBottom: 40 }}>卫浴出口的5个链路断裂点</h2>
        <div style={{ display: "flex", flexDirection: "column" as const, gap: 16 }}>
          {[
            {
              n: "01",
              title: "工程项目跟单：复杂度超出人工管理上限",
              desc: "工程项目通常是几十个 SKU、几个月周期、客户/设计师/承包商/工厂多方确认。纯用 WhatsApp 和 Excel 跟进，遗漏和版本错误是常态，不是偶发。",
            },
            {
              n: "02",
              title: "认证文件管理：版本混乱，被动应付",
              desc: "不同市场要求不同认证，同一认证有效期不同，工厂通常没有系统追踪。最常见的场景是：货到港口才发现认证文件版本不对，滞港费比项目利润还高。",
            },
            {
              n: "03",
              title: "QC报告和出货文件三方不同步",
              desc: "工厂出 QC 报告、货代要求出货文件、客户需要合规文件——三方信息不同步，销售在中间做传话筒。这是卫浴出口最典型的低价值时间消耗。",
            },
            {
              n: "04",
              title: "安装问题售后：跨语言技术支持成本高",
              desc: "安装问题通常在产品到货后1–4周集中爆发。客服需要理解技术细节、跨语言沟通、判断是安装问题还是产品质量问题——这对人工客服要求极高，也是差评的重灾区。",
            },
            {
              n: "05",
              title: "经销商管理：价格/库存/促销信息不同步",
              desc: "多个区域经销商的价格保护、库存状态、促销配合很难用人工维护。经销商不满意时，最先影响的是复购率和口碑——而这往往是品牌花了最多时间建立的资产。",
            },
          ].map((item) => (
            <div key={item.n} style={{ background: "#0c0c0e", border: "1px solid #141416", borderRadius: 8, padding: "24px 28px", display: "flex", gap: 24, alignItems: "flex-start" }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 24, color: "#444", flexShrink: 0, lineHeight: 1 }}>{item.n}</div>
              <div>
                <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 8 }}>{item.title}</div>
                <div style={{ fontSize: 14, color: "#888", lineHeight: 1.7 }}>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* ── 6. AI CAN / CANNOT ── */}
      <section style={{ padding: "80px 40px", maxWidth: 900, margin: "0 auto" }}>
        <Label>能力边界</Label>
        <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, marginBottom: 12 }}>AI 能做什么，不能做什么</h2>
        <p style={{ color: "#888", marginBottom: 40, lineHeight: 1.7 }}>卫浴行业的 AI 价值区在流程执行层，不在判断层。</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          <div style={{ background: "#0c0c0e", border: "1px solid #22c55e22", borderRadius: 8, padding: "28px 24px" }}>
            <div style={{ color: "#22c55e", fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: "2px", marginBottom: 20 }}>AI CAN REPLACE · 可替代</div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column" as const, gap: 10 }}>
              {[
                "询盘自动分级与路由",
                "标准报价单自动生成",
                "跟单节点提醒与推进",
                "认证文件有效期追踪",
                "安装 FAQ 自动回答",
                "多语言内容生成（参数类）",
                "投诉自动分类与记录",
                "经销商价格表同步通知",
              ].map((t) => (
                <li key={t} style={{ display: "flex", gap: 10, fontSize: 14, color: "#888" }}>
                  <span style={{ color: "#22c55e" }}>✓</span>{t}
                </li>
              ))}
            </ul>
          </div>
          <div style={{ background: "#0c0c0e", border: "1px solid #ef444422", borderRadius: 8, padding: "28px 24px" }}>
            <div style={{ color: "#ef4444", fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: "2px", marginBottom: 20 }}>AI CANNOT REPLACE · 不可替代</div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column" as const, gap: 10 }}>
              {[
                "工程项目方案合理性判断",
                "QC 现场质量把控",
                "经销商关系建立与维护",
                "复杂客诉的情绪处理",
                "认证申请过程与合规决策",
                "定制规格可行性评估",
              ].map((t) => (
                <li key={t} style={{ display: "flex", gap: 10, fontSize: 14, color: "#888" }}>
                  <span style={{ color: "#ef4444" }}>×</span>{t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Divider />

      {/* ── 7. CASE SIGNAL ── */}
      <section style={{ padding: "80px 40px", maxWidth: 900, margin: "0 auto" }}>
        <Label>案例参考</Label>
        <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, marginBottom: 40 }}>卫浴工厂 Agent 全链路案例</h2>
        <div style={{ background: "#0c0c0e", border: "1px solid #f59e0b22", borderRadius: 12, padding: "40px 36px" }}>
          <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 32, marginBottom: 32 }}>
            {[
              { value: "3×↑", label: "跟单处理效率" },
              { value: "30%↑", label: "询盘成单率" },
              { value: "4→1", label: "跟单人员配比" },
            ].map((s) => (
              <div key={s.label}>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 32, fontWeight: 700, color: "#f59e0b" }}>{s.value}</div>
                <div style={{ fontSize: 13, color: "#888", marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
          <div style={{ fontWeight: 600, fontSize: 17, marginBottom: 16 }}>华东卫浴工厂 · Sales Agent + Content Agent + AI 客服全链路</div>
          <p style={{ fontSize: 14, color: "#888", lineHeight: 1.8, marginBottom: 16 }}>
            该工厂原有4名跟单人员，处理来自B2B平台、展会、老客户渠道的混合询盘。询盘日均50–80条，大量时间花在分类、确认规格、生成报价单上，真正用于推进意向客户的时间不足30%。
          </p>
          <p style={{ fontSize: 14, color: "#888", lineHeight: 1.8, marginBottom: 16 }}>
            部署 Agent 后的工作流变化：
          </p>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: 10, marginBottom: 16 }}>
            {[
              "询盘进入 → AI 自动识别意图类型 → 分级路由（价格/规格/工程/经销商）",
              "规格确认类询盘 → AI 直接回复标准规格表 + 认证信息，无需人工介入",
              "报价意向 → AI 从产品数据库拉取规格，生成结构化报价单，人工审核后发出",
              "成交后 → 跟单序列自动启动：每个节点提醒对应负责人，延误自动升级",
              "到货后 → 安装指南自动推送，客诉进入 AI 分类系统，安装类问题 AI 优先处理",
            ].map((t, i) => (
              <div key={i} style={{ display: "flex", gap: 12, fontSize: 14, lineHeight: 1.7 }}>
                <span style={{ color: "#f59e0b", flexShrink: 0, fontFamily: "'JetBrains Mono', monospace" }}>→</span>
                <span style={{ color: "#888" }}>{t}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 14, color: "#888", lineHeight: 1.8 }}>
            关键前提：工厂在部署前做了2周的产品数据结构化和询盘分类标注。没有这个基础，Agent 的分级准确率无法达到实用水平。
          </p>
        </div>
      </section>

      <Divider />

      {/* ── 8. FAQ ── */}
      <section style={{ padding: "80px 40px", maxWidth: 900, margin: "0 auto" }}>
        <Label>常见问题</Label>
        <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, marginBottom: 40 }}>卫浴行业 AI 常见问题</h2>
        <div style={{ display: "flex", flexDirection: "column" as const, gap: 24 }}>
          {[
            {
              q: "卫浴的询盘量不大，值得做自动化吗？",
              a: "值不值得取决于单笔成交价值，而不是询盘量。卫浴客单价通常在$500–$50,000不等（工程项目可更高），哪怕每月只有20条询盘，如果自动化能把成单率从8%提升到12%，一年多出的利润完全可以覆盖自动化成本。另外，自动化的价值不只是量的处理，更是响应速度和链路规范——这两点对复购率影响显著。",
            },
            {
              q: "工程类项目能用 AI 跟单吗？",
              a: "工程项目的过程管理可以自动化，判断层不能。AI 可以做的：每个里程碑节点的提醒和推进、多方文件的版本同步、付款节点的提醒、认证文件的完整性核查。AI 不能做的：工程方案合理性评估、现场变更处理、多方协调中的关系维护。建议把 AI 定位为工程跟单的「不会遗漏的秘书」，核心决策仍由人负责。",
            },
            {
              q: "认证文件 AI 能帮忙管理吗？",
              a: "可以管理，不能申请。AI 能做的是：建立认证文件数据库（文件名/有效期/适用市场）、在有效期临近时提醒、出货前自动核查目标市场所需认证是否完整、生成给买家的认证清单。AI 不能做的是：判断产品是否符合认证要求、代替工厂完成认证测试流程。基础的证书管理自动化通常是卫浴工厂 AI 改造中 ROI 最快的部分之一。",
            },
            {
              q: "卫浴品牌出海第一步该做什么？",
              a: "取决于你的起点。如果你已经在B2B平台有稳定询盘但成单率低：第一步是规范产品数据和询盘处理流程，再部署自动化。如果你从零开始想做品牌：第一步是选定目标市场和产品线（不要全线铺开），然后针对该市场的认证和内容要求做准备。共同的前置步骤是：整理一份可以支撑 AI 运作的结构化产品数据库——没有这个，什么工具都是空的。",
            },
            {
              q: "卫浴 DTC vs 经销商，怎么选？",
              a: "短期：经销商仍是主路径，尤其是需要安装服务的市场（北美、欧洲）。经销商提供本地仓储、安装网络和售后支持，这些是卫浴品牌无法绕过的基础设施。中长期：DTC 适合客单价高、设计感强、有内容资产积累的品类（浴室柜、整体淋浴房）。两者不互斥，建议先通过经销商验证产品市场适配，再用 DTC 建立品牌溢价和直接用户关系。",
            },
            {
              q: "AI 客服能处理安装技术问题吗？",
              a: "能处理标准问题，无法处理异常情况。卫浴安装问题中，60–70% 是常见问题（找不到某型号的安装视频、某配件的连接方式、标准尺寸确认）——这些 AI 可以高效处理，并附上图文/视频。复杂问题（安装后漏水的原因排查、非标安装环境的解决方案、需要判断是否是质量问题）仍需人工跟进，但 AI 可以先收集信息，让技术支持人员接手时有充分的上下文，减少来回确认的时间。",
            },
          ].map((item, i) => (
            <div key={i} style={{ background: "#0c0c0e", border: "1px solid #141416", borderRadius: 8, padding: "28px 28px" }}>
              <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 14, lineHeight: 1.5 }}>Q: {item.q}</div>
              <div style={{ fontSize: 14, color: "#888", lineHeight: 1.8 }}>{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* ── 9. CTA ── */}
      <section style={{ padding: "80px 40px", maxWidth: 900, margin: "0 auto", textAlign: "center" as const }}>
        <Label>下一步</Label>
        <h2 style={{ fontSize: "clamp(24px, 3.5vw, 40px)", fontWeight: 700, marginBottom: 16 }}>
          诊断你的跟单链路断在哪里
        </h2>
        <p style={{ color: "#888", fontSize: 16, lineHeight: 1.7, maxWidth: 520, margin: "0 auto 40px" }}>
          60分钟免费诊断，针对卫浴出口的具体场景。先找断点，再谈方案。
        </p>
        <Link
          href="/contact"
          style={{
            display: "inline-block",
            background: "#f59e0b",
            color: "#08080a",
            fontWeight: 700,
            fontSize: 15,
            padding: "14px 36px",
            borderRadius: 6,
            textDecoration: "none",
            letterSpacing: "0.5px",
          }}
        >
          预约免费诊断
        </Link>
        <div style={{ marginTop: 20, fontSize: 13, color: "#444" }}>
          也可直接发邮件至 hello@makox.ai
        </div>
      </section>
    </div>
  );
}
