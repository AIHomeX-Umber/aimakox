import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'

export const metadata: Metadata = {
  title: '多语言内容生产 · Makox',
  description:
    '一个人管不了5000个SKU。Makox 帮出口工厂把内容生产变成工业系统——产品描述、多语言、SEO/GEO、社媒内容，全部 Agent 驱动。',
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: '3px', textTransform: 'uppercase' as const, color: '#f59e0b', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 12 }}>
      <span style={{ display: 'inline-block', width: 32, height: 1, background: '#f59e0b', flexShrink: 0 }} />
      {children}
    </div>
  )
}

const readinessLevels = [
  { level: 'L0', color: '#ef4444', label: '内容真空', desc: '产品只有参数表，没有面向海外买家的内容。SKU 上了平台但没有描述，流量进来秒跳。' },
  { level: 'L1', color: '#f59e0b', label: '人工撰写', desc: '有内容，全靠人写。1 个 SKU 30 分钟，500 个 SKU 250 小时。多语言基本靠谷歌翻译。' },
  { level: 'L2', color: '#3b82f6', label: '模板驱动', desc: '建立了内容模板，品牌声音基本一致，但多平台同步仍靠复制粘贴，更新滞后。' },
  { level: 'L3', color: '#22c55e', label: 'AI辅助生产', desc: 'AI 工具介入内容初稿生成，人工负责审核和优化。多语言覆盖率显著提升，效率 3-5x。' },
  { level: 'L4', color: '#a78bfa', label: 'Agent内容工厂', desc: '产品数据入库即触发内容生产流水线：描述生成→多语言本地化→SEO优化→多平台同步发布，全程 Agent 执行。' },
]

const workflowSteps = [
  {
    step: '01',
    title: 'SKU 数据整理',
    sources: '规格表 / ERP / 工厂文档',
    ai: 'AI 可结构化非标准数据，把 Word/Excel 里的杂乱参数转成统一数据模型',
    limit: '参数准确性必须人工审核，AI 会"补全"它不知道的信息——这是风险',
    risk: '源数据不干净，后续所有内容都有错误基因，越自动化，错误扩散越快',
  },
  {
    step: '02',
    title: '产品描述生成',
    sources: 'SKU 结构化数据 / 品牌指南 / 竞品参考',
    ai: 'Agent 核心价值所在。功能→利益转化、场景化叙述、平台规则适配，效率 5-10x',
    limit: '初稿质量高，但需要有人定义"品牌声音"——这不是 AI 能自己发明的',
    risk: '没有品牌声音定义，10000 个 SKU 就有 10000 种风格，内容质量看起来很多，实际是噪音',
  },
  {
    step: '03',
    title: '多语言本地化',
    sources: '中文母本 / 目标市场语言包 / 文化参考库',
    ai: '高度胜任。不只是翻译语义，AI 能做文化语境适配——美国消费者和德国消费者看同一个产品，关注点完全不同',
    limit: '专业术语、法规表述、地区敏感内容需要人工审核，尤其是医疗、电气类产品',
    risk: '谷歌翻译是语义正确但文化错误。买家不是在测你的语法，是在判断你懂不懂他们的市场',
  },
  {
    step: '04',
    title: 'SEO/GEO 优化',
    sources: '关键词研究 / 竞品分析 / 结构化数据模板',
    ai: 'Agent 可持续优化，关键词密度、标题结构、Schema 标记全部可自动化，GEO 针对 AI 引擎的格式优化是新兴机会',
    limit: '初始关键词策略需要人工决策，不同市场的 SEO 逻辑差异很大，AI 不能做战略判断',
    risk: '有内容没流量。写了几千个 SKU 描述，但没有 SEO 结构，相当于在没人的地方建了个展厅',
  },
  {
    step: '05',
    title: '图片/视频文案',
    sources: '产品图 / 使用场景图 / 视频素材',
    ai: 'Alt text 批量生成、视频脚本初稿、图片描述——AI 可生成初稿，大幅降低创意生产成本',
    limit: '视觉内容的方向性判断需要人：哪张图用在哪个市场、什么调性适合什么买家',
    risk: 'Alt text 缺失导致无障碍合规问题，在部分市场有法律风险。图文不一致会直接影响转化',
  },
  {
    step: '06',
    title: '多平台发布同步',
    sources: 'Shopify / Amazon / 1688 / 独立站',
    ai: '高度可自动化。API 对接后，内容更新一次，多平台同步发布，不同平台格式规则自动适配',
    limit: 'Amazon 的 listing 规则、平台审核机制变化快，需要有人监控和更新规则库',
    risk: '三个平台三套内容各自维护，改一处要改三处，遗漏导致内容不一致，影响品牌信任',
  },
]

const mistakes = [
  {
    no: '01',
    title: '用谷歌翻译做多语言',
    body: '语义准确但文化错误。一个描述床垫"软硬适中"的文案，直译成德语是通的，但德国消费者买床垫时的核心关注点是腰椎支撑，不是舒适感。正确的多语言是重写，不是翻译。',
  },
  {
    no: '02',
    title: 'Amazon、Shopify、官网三套内容各自维护',
    body: '改一处要改三处，实际操作是三处都不同步。产品规格更新了，但三个平台的内容版本不一致，买家比价时看到不同的描述——这是信任杀手，不只是运营效率问题。',
  },
  {
    no: '03',
    title: '产品描述只写参数不写场景',
    body: '海外消费者买的是解决方案，不是规格表。"材质：304不锈钢，尺寸：120×60×80cm"——这些数据在买家眼里没有意义。"厨房空间有限但需要专业级料理台面"——这才是他们搜索的语言。',
  },
  {
    no: '04',
    title: '内容没有品牌声音定义',
    body: '10000 个 SKU，10000 种风格。这不是多样性，是内容噪音。品牌声音是：我们对买家说话的方式是什么，哪些词我们不用，哪些场景我们强调。没有这个定义，AI 生成的内容会很多，但不会形成品牌印象。',
  },
  {
    no: '05',
    title: '不做 SEO/GEO 优化',
    body: '有内容，没流量。写了几千条 SKU 描述，但页面没有关键词结构、没有内链、没有 Schema 标记——对搜索引擎和 AI 引擎都是隐形的。2025 年后，GEO（针对 AI 引擎的可引用性优化）和 SEO 同样重要。',
  },
]

const faqs = [
  {
    q: '小工厂适合做多语言内容 AI 吗？',
    a: 'SKU 数量少于 200、主要靠平台自然流量的小工厂，现在做全套 AI 内容系统性价比不高。但如果你在用独立站或想打开新市场，内容质量是核心竞争力，AI 能让你用小团队做大体量的内容覆盖——这是值得投的。',
  },
  {
    q: 'AI 生成的内容会不会被平台判定为低质内容？',
    a: 'Amazon、Google 等平台判断内容质量看的是相关性、准确性和用户体验，不是生成方式。AI 生成的低质内容和人工写的低质内容一样会被降权，优质内容一样会被收录。关键是内容有没有真正服务买家，而不是谁写的。',
  },
  {
    q: 'AI 项目为什么半年后内容质量又降回去了？',
    a: '最常见原因是：没有建立内容数据反馈闭环。AI 生成内容之后，没有人看转化数据、没有人更新品牌声音文档、没有人迭代提示词。内容系统不是装一次就能永远跑的，需要有人持续喂数据、调规则。这是运营工作，不是技术工作。',
  },
  {
    q: '多语言内容需要母语者审核吗？',
    a: '对于大多数出口工厂，英语市场可以不做母语审核（AI 英文水平已经很高），但德语、法语、日语等市场，如果是高客单价产品，母语审核仍然必要。规则是：客单越高、专业术语越多、法规风险越大，越需要人工介入。',
  },
  {
    q: '我们已经有内容团队，为什么还需要 AI？',
    a: '内容团队的价值在于判断、策略和品质把关，不在于重复生产。如果你的内容团队把 70% 时间用在写第 N 个 SKU 的第 N 版描述上，他们的价值被严重浪费了。AI 接管重复生产，人的精力用在真正需要创意和判断的地方。',
  },
  {
    q: '内容系统上线后，多久能看到流量和转化变化？',
    a: 'SEO 效果通常需要 3-6 个月才能在搜索排名上有明显变化。但平台内搜索（Amazon、1688）的内容质量分提升可以在 4-8 周内看到。转化率的变化取决于你的流量基础——流量本来就少，转化率改善也难判断。建议先做内容覆盖，再跑流量，再优化转化。',
  },
]

export default function ContentPage() {
  return (
    <div style={{ background: '#08080a', color: '#e4e2dc', minHeight: '100vh', fontFamily: "'Instrument Sans', 'Noto Sans SC', sans-serif" }}>
      <Nav />

      {/* ── HERO ── */}
      <section style={{ maxWidth: 900, margin: '0 auto', padding: '120px 24px 80px' }}>
        <Label>Multilingual Content System</Label>
        <h1 style={{ fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: 700, lineHeight: 1.1, marginBottom: 24, letterSpacing: '-1px' }}>
          一个人管不了<br />5000 个 SKU
        </h1>
        <p style={{ fontSize: 18, color: '#888', lineHeight: 1.8, maxWidth: 620, marginBottom: 40 }}>
          内容不是写几篇文章。对于出口工厂，内容是销售基础设施。每个 SKU、每个市场、每种语言——这是工业级的问题，不是创意问题。AI 最大的价值不是写一篇文章，而是把内容生产变成工业系统。
        </p>
        <Link href="/contact" style={{ display: 'inline-block', background: '#f59e0b', color: '#08080a', padding: '14px 32px', fontWeight: 700, fontSize: 15, textDecoration: 'none', letterSpacing: '0.5px' }}>
          预约免费诊断 →
        </Link>

        {/* Stats bar */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 1, marginTop: 64, border: '1px solid #141416', background: '#141416' }}>
          {[
            { val: '>30 分钟', label: '人工产出单条 SKU 内容' },
            { val: '<20%', label: '平均多语言覆盖率' },
            { val: '35%+', label: '内容一致性错误率' },
            { val: '脱节', label: '人工内容与销售结果的关系' },
          ].map((s) => (
            <div key={s.label} style={{ background: '#08080a', padding: '28px 24px' }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 28, fontWeight: 700, color: '#f59e0b', marginBottom: 6 }}>{s.val}</div>
              <div style={{ fontSize: 12, color: '#888', letterSpacing: '0.5px' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── DEFINITION ── */}
      <section style={{ maxWidth: 900, margin: '0 auto', padding: '80px 24px' }}>
        <Label>什么是内容工业化</Label>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }}>
          <div>
            <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 16, lineHeight: 1.3 }}>内容是销售基础设施</h2>
            <p style={{ color: '#888', lineHeight: 1.8, fontSize: 15 }}>
              工厂通常把内容看作营销工作——偶尔做，遇到展会前突击。这是错的框架。内容决定了一个买家在 Google / Amazon / ChatGPT 里能不能找到你、信不信任你、愿不愿意下单。没有内容基础设施，你的产品对海外市场来说是隐形的。
            </p>
          </div>
          <div>
            <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 16, lineHeight: 1.3 }}>为什么人工无法扩展</h2>
            <p style={{ color: '#888', lineHeight: 1.8, fontSize: 15 }}>
              一个内容专员每天能写 15-20 条 SKU 描述。1000 个 SKU，需要 2 个月全职专注。但 SKU 在更新，市场在变，多语言要覆盖，不同平台规则不同——人工内容生产的天花板很低，且难以保证一致性。
            </p>
          </div>
          <div>
            <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 16, lineHeight: 1.3 }}>AI 改变了什么</h2>
            <p style={{ color: '#888', lineHeight: 1.8, fontSize: 15 }}>
              LLM 在内容生产上的能力已经超过大多数非母语内容写手。关键突破是：它可以在保持品牌声音一致的前提下批量生产，同时做多语言版本，同时适配不同平台规则。这不是替代创意，是替代重复执行。
            </p>
          </div>
          <div>
            <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 16, lineHeight: 1.3 }}>AI-native 内容系统是什么样的</h2>
            <p style={{ color: '#888', lineHeight: 1.8, fontSize: 15 }}>
              不是装一个 AI 写作工具让员工用。是建立一条流水线：产品数据进去，多语言多平台内容出来，人工只做策略定义和质检。这条流水线一旦搭好，SKU 从 500 扩展到 5000 不需要增加内容人员。
            </p>
          </div>
        </div>
      </section>

      {/* ── WORKFLOW ── */}
      <section style={{ background: '#0c0c0e', padding: '80px 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>
          <Label>内容生产流程拆解</Label>
          <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 48 }}>6 个节点，从产品数据到发布上线</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {workflowSteps.map((s) => (
              <div key={s.step} style={{ display: 'grid', gridTemplateColumns: '64px 1fr', gap: 24, padding: '28px 0', borderBottom: '1px solid #141416' }}>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, color: '#444', paddingTop: 4 }}>{s.step}</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 8 }}>{s.title}</div>
                  <div style={{ fontSize: 13, color: '#888', marginBottom: 12, fontFamily: "'JetBrains Mono', monospace" }}>{s.sources}</div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    <div>
                      <div style={{ fontSize: 11, color: '#f59e0b', letterSpacing: '2px', marginBottom: 6, fontFamily: "'JetBrains Mono', monospace" }}>AI 可做</div>
                      <div style={{ fontSize: 14, color: '#e4e2dc', lineHeight: 1.6 }}>{s.ai}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: 11, color: '#444', letterSpacing: '2px', marginBottom: 6, fontFamily: "'JetBrains Mono', monospace" }}>失效风险</div>
                      <div style={{ fontSize: 14, color: '#888', lineHeight: 1.6 }}>{s.risk}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MISTAKES ── */}
      <section style={{ maxWidth: 900, margin: '0 auto', padding: '80px 24px' }}>
        <Label>常见错误</Label>
        <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 48 }}>出口工厂在内容上最常犯的 5 个错</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {mistakes.map((m, i) => (
            <div key={m.no} style={{ display: 'grid', gridTemplateColumns: '56px 1fr', gap: 24, padding: '32px 0', borderBottom: i < mistakes.length - 1 ? '1px solid #141416' : 'none' }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 20, fontWeight: 700, color: '#ef4444', paddingTop: 4 }}>{m.no}</div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 10 }}>{m.title}</div>
                <div style={{ fontSize: 15, color: '#888', lineHeight: 1.7 }}>{m.body}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── READINESS ── */}
      <section style={{ background: '#0c0c0e', padding: '80px 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>
          <Label>成熟度模型</Label>
          <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 16 }}>你的内容体系在哪个阶段？</h2>
          <p style={{ color: '#888', marginBottom: 48, fontSize: 15 }}>内容工业化是一个渐进过程。跳级部署通常失败——先把数据治好，再建生产流水线。</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {readinessLevels.map((r) => (
              <div key={r.level} style={{ display: 'grid', gridTemplateColumns: '80px 120px 1fr', gap: 24, alignItems: 'center', padding: '24px 28px', background: '#08080a', border: '1px solid #141416' }}>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 20, fontWeight: 700, color: r.color }}>{r.level}</div>
                <div style={{ fontWeight: 700, fontSize: 15, color: r.color }}>{r.label}</div>
                <div style={{ fontSize: 14, color: '#888', lineHeight: 1.6 }}>{r.desc}</div>
              </div>
            ))}
          </div>
          <p style={{ marginTop: 28, fontSize: 13, color: '#444', fontFamily: "'JetBrains Mono', monospace" }}>
            诊断建议：先清点你有多少 SKU 没有完整的多语言描述，这个数字决定了从哪里开始。
          </p>
        </div>
      </section>

      {/* ── CASE SIGNALS ── */}
      <section style={{ maxWidth: 900, margin: '0 auto', padding: '80px 24px' }}>
        <Label>案例信号</Label>
        <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 48 }}>真实发生了什么</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          <div style={{ padding: '36px', border: '1px solid #141416', background: '#0c0c0e' }}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: '#f59e0b', letterSpacing: '2px', marginBottom: 20 }}>FURNITURE EXPORTER · 家具出口</div>
            <p style={{ fontSize: 15, color: '#888', lineHeight: 1.8, marginBottom: 24 }}>
              某家具出口企业内容生产完全依赖人工，几百个 SKU 的多语言描述由 2 人负责，更新频率低，英文内容质量不稳定。部署内容 Agent 后，SKU 数据标准化入库，英德法三语自动生成，人工只负责最终审核。
            </p>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              {['内容产出 5×↑', '多语言全面覆盖', '响应时间 60%↓'].map((tag) => (
                <span key={tag} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: '#22c55e', border: '1px solid #22c55e', padding: '4px 10px' }}>{tag}</span>
              ))}
            </div>
          </div>
          <div style={{ padding: '36px', border: '1px solid #141416', background: '#0c0c0e' }}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: '#f59e0b', letterSpacing: '2px', marginBottom: 20 }}>DTC BRAND · Space Discoverer</div>
            <p style={{ fontSize: 15, color: '#888', lineHeight: 1.8, marginBottom: 24 }}>
              墨菲床 DTC 品牌，产品配置组合多，每个 SKU 变体都需要独立内容。内容 Agent 接入 Shopify，按产品规格模板自动生成变体描述，同步 SEO 优化，独立站自然流量和转化率同步提升。
            </p>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              {['DTC 转化提升', 'SKU 变体全覆盖', 'SEO 自动优化'].map((tag) => (
                <span key={tag} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: '#a78bfa', border: '1px solid #a78bfa', padding: '4px 10px' }}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ background: '#0c0c0e', padding: '80px 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>
          <Label>常见问题</Label>
          <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 48 }}>真实的问题，直接的答案</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {faqs.map((f, i) => (
              <div key={i} style={{ padding: '32px 0', borderBottom: i < faqs.length - 1 ? '1px solid #141416' : 'none' }}>
                <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 12, color: '#e4e2dc' }}>{f.q}</div>
                <div style={{ fontSize: 15, color: '#888', lineHeight: 1.8 }}>{f.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ maxWidth: 900, margin: '0 auto', padding: '100px 24px' }}>
        <Label>下一步</Label>
        <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, marginBottom: 20, lineHeight: 1.2 }}>
          如果你是认真的，我们聊聊
        </h2>
        <p style={{ fontSize: 16, color: '#888', lineHeight: 1.8, maxWidth: 540, marginBottom: 40 }}>
          60 分钟免费诊断。我们会一起看你现在有多少 SKU、覆盖了哪些语言、哪个环节是第一个自动化的起点。不推销，不画饼，只聊你的具体问题。
        </p>
        <Link href="/contact" style={{ display: 'inline-block', background: '#f59e0b', color: '#08080a', padding: '16px 40px', fontWeight: 700, fontSize: 15, textDecoration: 'none', letterSpacing: '0.5px' }}>
          预约诊断 →
        </Link>
      </section>

      {/* ── FOOTER NOTE ── */}
      <div style={{ borderTop: '1px solid #141416', padding: '28px 24px', maxWidth: 900, margin: '0 auto' }}>
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          <Link href="/solutions" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: '#444', textDecoration: 'none', letterSpacing: '1px' }}>← 所有方案</Link>
          <Link href="/solutions/trade" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: '#444', textDecoration: 'none', letterSpacing: '1px' }}>外贸跟单自动化 →</Link>
          <Link href="/cases" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: '#444', textDecoration: 'none', letterSpacing: '1px' }}>查看案例 →</Link>
        </div>
      </div>
    </div>
  )
}
