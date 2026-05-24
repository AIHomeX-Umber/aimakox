import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from '@/components/Nav';

export const metadata: Metadata = {
  title: '家具出口行业 AI 转型 · Makox',
  description: '中国家具出口行业 AI 转型指南。内容生产、多语言、DTC建站、跟单自动化——家具行业特有的 AI 切入点和误区。',
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

export default function FurniturePage() {
  return (
    <div style={{ background: "#08080a", color: "#e4e2dc", fontFamily: "'Instrument Sans', 'Noto Sans SC', sans-serif", minHeight: "100vh" }}>
      <Nav />

      {/* ── 1. HERO ── */}
      <section style={{ padding: "120px 40px 80px", maxWidth: 900, margin: "0 auto" }}>
        <Label>FURNITURE · 家具出口</Label>
        <h1 style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 700, lineHeight: 1.15, marginBottom: 24, letterSpacing: "-1px" }}>
          家具内容的问题不是量，是一致性
        </h1>
        <p style={{ fontSize: "clamp(16px, 2vw, 20px)", color: "#888", lineHeight: 1.8, maxWidth: 680, marginBottom: 56 }}>
          家具出口企业通常有几百到几千个 SKU，每个产品有多种规格、多种面料、多种尺寸。这个复杂度让传统内容团队无法规模化——而这正是 AI 最擅长处理的结构性问题。
        </p>
        <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 24 }}>
          {[
            { label: "平均 SKU 数", value: "500–3000个" },
            { label: "多语言覆盖率", value: "<15%" },
            { label: "产品图片合规率", value: "普遍不达标" },
            { label: "询盘响应时间", value: ">6 小时" },
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
        <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, marginBottom: 12 }}>AI 在家具行业最有效的6个位置</h2>
        <p style={{ color: "#888", marginBottom: 40, lineHeight: 1.7 }}>不是所有环节都值得自动化。这是家具品类中 ROI 最高的切入顺序。</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
          {[
            {
              num: "01",
              title: "产品描述工厂",
              desc: "规格 → 用途 → 场景的自动转化。一个沙发的150个变体，AI 可以在结构模板下批量生成，人工只做最终审核。",
            },
            {
              num: "02",
              title: "多语言矩阵",
              desc: "英语/德语/法语/日语产品页同步输出。翻译不是关键，本地化场景表达才是——AI 可以基于目标市场调整用词风格。",
            },
            {
              num: "03",
              title: "图片 Alt 文本批量生成",
              desc: "家具图片库往往有几千张无 SEO 标注的图片。批量生成 Alt 文本是低成本、高 SEO 回报的快赢动作。",
            },
            {
              num: "04",
              title: "询盘自动分级",
              desc: "面料/尺寸咨询 vs 报价请求 vs 经销商洽谈——分级后路由给不同响应模板，响应速度可从6小时降至15分钟。",
            },
            {
              num: "05",
              title: "报价单 PDF 自动生成",
              desc: "含规格、面料选项、包装方式、交期的结构化报价单，基于产品数据库自动组装，减少人工核价错误。",
            },
            {
              num: "06",
              title: "竞品监控与定价参考",
              desc: "监控主要平台同类产品的价格变动和内容策略，为选品和定价决策提供数据支撑。",
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
        <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, marginBottom: 12 }}>为什么家具内容特别难做</h2>
        <p style={{ color: "#888", marginBottom: 40, lineHeight: 1.7 }}>不是执行力的问题，是结构性的困境。</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
          {[
            {
              title: "SKU 变体爆炸",
              color: "#ef4444",
              desc: "1款沙发 = 50种面料 × 3种尺寸 = 150个内容变体。传统内容团队根本不可能逐一撰写，结果是大量产品页面内容相同或为空。",
            },
            {
              title: "场景化表达困难",
              color: "#f59e0b",
              desc: "工厂习惯说参数（尺寸、承重、材质），消费者想看生活场景（这个沙发适合几口之家的客厅？）。翻译这个gap需要系统化的内容策略。",
            },
            {
              title: "图片依赖重",
              color: "#3b82f6",
              desc: "家具高度依赖场景图，纯白底产品图转化率极低。但场景摄影成本高，大多数工厂的图库都达不到B2C要求。",
            },
            {
              title: "内容高度同质化",
              color: "#a78bfa",
              desc: "1688上的产品描述被复制粘贴了无数次。独立站或亚马逊用同样的描述，不仅SEO惩罚，也无法建立任何品牌差异。",
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
        <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, marginBottom: 12 }}>家具 DTC：高潜力，高门槛</h2>
        <p style={{ color: "#888", marginBottom: 8, lineHeight: 1.7 }}>
          家具品类 DTC 转化率极低，不要幻想3个月回本。但中长期来看，高客单价 + 生活方式叙事是出海品牌建设中最有想象空间的赛道之一。
        </p>
        <p style={{ color: "#444", fontSize: 13, fontFamily: "'JetBrains Mono', monospace", marginBottom: 40 }}>典型投资回收期：12–36个月</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          <div style={{ background: "#0c0c0e", border: "1px solid #22c55e22", borderRadius: 8, padding: "28px 24px" }}>
            <div style={{ color: "#22c55e", fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: "2px", marginBottom: 16 }}>OPPORTUNITY · 机会</div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column" as const, gap: 12 }}>
              {[
                "家具是生活方式品类，叙事空间大，品牌溢价有基础",
                "高客单价（$300–$3000+），利润空间可以支撑 DTC 获客成本",
                "消费者购买决策周期长（2–6个月），内容培育有效",
                "墨菲床/壁床等细分品类在北美增速明显，竞争格局未定",
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
                "体积大，物流复杂，最后一公里成本高昂，侵蚀毛利",
                "退货率影响大：一次退货可能抹掉多单利润",
                "场景摄影必不可少，前期内容制作成本高",
                "消费者信任建立慢，新品牌冷启动期转化率普遍<1%",
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
        <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, marginBottom: 40 }}>家具出口的5个系统性断裂点</h2>
        <div style={{ display: "flex", flexDirection: "column" as const, gap: 16 }}>
          {[
            {
              n: "01",
              title: "报价核算依赖人工",
              desc: "面料/工艺/包装组合动辄几百种，每次报价都要人工核算。出错率高，响应慢，是大客户流失的主要原因之一。",
            },
            {
              n: "02",
              title: "样品跟进靠 WhatsApp，无系统记录",
              desc: "从打样确认到客户反馈，全程在聊天工具里。信息无结构化存储，换人就断线，成交无法复盘。",
            },
            {
              n: "03",
              title: "生产排期和客户承诺脱节",
              desc: "销售对客户承诺交期，工厂内部排期信息不透明。结果是交期延误、客户投诉、关系损耗——而这完全可以通过系统对接避免。",
            },
            {
              n: "04",
              title: "海关文件和认证管理混乱",
              desc: "欧盟/北美/澳洲/中东市场认证要求不同（FSC/CARB/EN71…），文件版本混乱，临近出货才发现缺文件是家具出口的常态痛点。",
            },
            {
              n: "05",
              title: "售后维修/配件支持跨语言处理难",
              desc: "家具到海外客户手中后，配件损坏/维修咨询的技术支持需要多语言处理，当前多靠谷歌翻译勉强应付，客户体验差。",
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
        <p style={{ color: "#888", marginBottom: 40, lineHeight: 1.7 }}>对 AI 能力保持清醒认知，比盲目投入更重要。</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          <div style={{ background: "#0c0c0e", border: "1px solid #22c55e22", borderRadius: 8, padding: "28px 24px" }}>
            <div style={{ color: "#22c55e", fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: "2px", marginBottom: 20 }}>AI CAN REPLACE · 可替代</div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column" as const, gap: 10 }}>
              {[
                "产品描述批量生成（有模板时）",
                "多语言内容转化",
                "询盘自动分级与路由",
                "物流状态通知与催单",
                "标准 FAQ 自动回答",
                "竞品价格监控与报告",
                "报价单 PDF 自动组装",
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
                "工艺判断和质量把控",
                "定制化需求的深度沟通",
                "工厂关系与供应链维护",
                "新市场进入策略决策",
                "面料/材质最终选型判断",
                "大客户谈判与关系维护",
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
        <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, marginBottom: 40 }}>家具出口 AI 改造案例</h2>
        <div style={{ background: "#0c0c0e", border: "1px solid #f59e0b22", borderRadius: 12, padding: "40px 36px" }}>
          <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 32, marginBottom: 32 }}>
            {[
              { value: "5×", label: "内容产出提升" },
              { value: "60%↓", label: "询盘响应时间" },
              { value: "3语言", label: "同步上线" },
            ].map((s) => (
              <div key={s.label}>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 32, fontWeight: 700, color: "#f59e0b" }}>{s.value}</div>
                <div style={{ fontSize: 13, color: "#888", marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
          <div style={{ fontWeight: 600, fontSize: 17, marginBottom: 16 }}>华南家具出口企业 · Content Agent + 多语言部署</div>
          <p style={{ fontSize: 14, color: "#888", lineHeight: 1.8, marginBottom: 16 }}>
            该企业有2000+家居 SKU，此前内容团队6人，每月只能更新约200个产品描述，英语以外语言基本空白。
          </p>
          <p style={{ fontSize: 14, color: "#888", lineHeight: 1.8, marginBottom: 16 }}>
            部署 Content Agent 后：产品描述生成效率提升5倍，英/德/法三语版本同步输出；询盘自动分级后，销售只处理报价意向客户，响应时间从平均7小时降至70分钟。
          </p>
          <p style={{ fontSize: 14, color: "#888", lineHeight: 1.8 }}>
            关键前提：企业已有结构化产品数据库（规格/材质/尺寸），AI 输出质量与数据质量直接挂钩。数据不结构化的企业需要先做治理，再部署 Agent。
          </p>
        </div>
      </section>

      <Divider />

      {/* ── 8. FAQ ── */}
      <section style={{ padding: "80px 40px", maxWidth: 900, margin: "0 auto" }}>
        <Label>常见问题</Label>
        <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, marginBottom: 40 }}>家具行业 AI 常见问题</h2>
        <div style={{ display: "flex", flexDirection: "column" as const, gap: 24 }}>
          {[
            {
              q: "家具 SKU 那么多，AI 内容质量能保证吗？",
              a: "AI 内容质量取决于输入数据的结构化程度。如果你的产品数据库规范（规格/材质/场景标签明确），AI 输出质量可以稳定在可用水准，再加人工抽检即可。如果产品数据本身混乱，AI 只会放大混乱。建议先花1–2周整理数据，再上 Agent。",
            },
            {
              q: "家具 DTC 物流怎么解决？",
              a: "家具 DTC 物流没有完美方案，只有取舍选择。主流路径：①拼团海运到目的地仓+本地3PL（成本最低，时效差）；②专线卡车（北美/欧洲适用，时效较好，成本中等）；③本地备货仓（现金流压力大，时效最好）。建议先从客单价>$500、体积相对小的品类切入，验证运营模型后再扩品类。",
            },
            {
              q: "家具适合做亚马逊还是独立站？",
              a: "两者逻辑不同。亚马逊适合标品、搜索需求明确的单品（如办公椅、床架），流量成本可控但价格战激烈；独立站适合有设计语言的品牌，需要内容投入，回报期更长但壁垒更高。建议先亚马逊验证产品，再用独立站建品牌。不要一开始就两线并进——资源会被分散。",
            },
            {
              q: "定制家具能做 AI 自动化吗？",
              a: "定制家具的可自动化部分：初步报价计算（根据尺寸/材质/工艺的规则引擎）、定制确认单生成、生产工单下发通知、交期提醒。不可自动化的部分：复杂工艺可行性判断、客户设计意图理解、现场测量确认。定制化程度越高，AI 边界越靠前，不能替代核心沟通环节。",
            },
            {
              q: "家具品牌出海最大的坑是什么？",
              a: "最大的坑是低估内容和信任建立的时间成本。很多工厂建了站、上了产品，发现没有流量，就认为 DTC 不行——实际上是内容策略和 SEO 没做。家具是高决策成本品类，消费者需要多次触达、多维度的内容（场景图/视频/用户评价/安装指南）才会下单。短期押注 DTC 的成功率极低，需要18个月以上的内容耕耘期。",
            },
            {
              q: "家具行业做 AI 的 ROI 怎么算？",
              a: "建议用三个维度测算：①内容效率：原来6人内容团队的产出，AI 辅助后2人能完成，节省人力成本；②转化提升：多语言+结构化内容让询盘转化率提升，以平均客单价和毛利率测算增量；③响应速度：响应时间从小时级到分钟级，行业数据显示可提升询盘成单率15–30%。通常家具企业 AI 项目投资回收期为6–18个月，内容 Agent 比 Sales Agent 更容易算清 ROI。",
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
          找到你的第一个 AI 切入点
        </h2>
        <p style={{ color: "#888", fontSize: 16, lineHeight: 1.7, maxWidth: 520, margin: "0 auto 40px" }}>
          60分钟免费诊断，聚焦家具出口的具体场景。不卖方案，先看问题值不值得解。
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
