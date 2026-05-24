import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'

export const metadata: Metadata = {
  title: '智能硬件行业 AI 转型 · Makox',
  description: '智能硬件、消费电子、IoT 设备出口企业 AI 转型指南。从内容自动化到销售 Agent，AI 在智能硬件垂直赛道的真实切入点。',
  openGraph: {
    title: '智能硬件出海 AI 实战：内容、FAQ、渠道分发全拆解 · Makox',
    description: '技术参数→消费者语言、认证说明自动化、多语言渠道适配——智能硬件出海的 7 步内容 workflow 和 AI 就绪度模型，实操可落地。',
    type: 'article',
  },
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: '3px', textTransform: 'uppercase' as const, color: '#f59e0b', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 12 }}>
      <span style={{ display: 'inline-block', width: 32, height: 1, background: '#f59e0b', flexShrink: 0 }} />
      {children}
    </div>
  )
}

function Divider() {
  return <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, #1e1e1e, transparent)', margin: '0 40px' }} />
}

const S = {
  page: { background: '#08080a', color: '#e4e2dc', minHeight: '100vh', fontFamily: "'Instrument Sans', 'Noto Sans SC', sans-serif" } as React.CSSProperties,
  section: { padding: '72px 40px', maxWidth: 1100, margin: '0 auto' } as React.CSSProperties,
  h2: { fontFamily: "'Instrument Sans', 'Noto Sans SC', sans-serif", fontSize: 'clamp(22px,3vw,34px)', fontWeight: 700, letterSpacing: '-0.025em', marginBottom: 8, lineHeight: 1.2 } as React.CSSProperties,
  muted: { fontSize: 14, color: '#666', lineHeight: 1.75 } as React.CSSProperties,
}

const workflowSteps = [
  {
    step: '01',
    title: '产品资料整理',
    sources: 'Spec sheet / BOM / 认证文件 / 工程文档',
    ai: 'AI 可从非结构化 PDF 中提取参数字段，归入标准化参数库',
    limit: '需要工程团队确认关键参数的准确性，AI 不做参数决策',
    risk: '参数分散在不同版本文档里——AI 生成的内容质量上限等于输入数据质量',
  },
  {
    step: '02',
    title: '技术参数标准化',
    sources: '统一字段格式 / SKU 参数库建设',
    ai: '基于参数模板，批量将各 SKU 数据标准化入库，支持多版本对比',
    limit: '字段定义和分类标准必须由懂产品的人设计，AI 执行而非设计',
    risk: '字段不统一导致多语言内容生成时参数对不上，产生合规风险',
  },
  {
    step: '03',
    title: '多语言内容生成',
    sources: '参数库 / 市场风格模板 / 竞品分析',
    ai: 'AI 基于同一产品参数，生成北美/欧洲/日本各市场的本地化内容，不只是翻译',
    limit: '品牌调性和核心卖点排序需要人工定义，AI 执行既定策略',
    risk: '直接机器翻译会保留中文逻辑结构，在海外市场显得生硬，转化率低',
  },
  {
    step: '04',
    title: '渠道格式适配',
    sources: 'Amazon / 独立站 / Kickstarter / 线下零售商要求',
    ai: 'AI 按各平台规则自动输出对应格式：字数限制/图文比例/关键词策略各不同',
    limit: '平台规则变更需要人工更新模板，AI 执行规则而非追踪规则变化',
    risk: '用同一套内容糊弄所有平台是最常见的内容策略错误——格式错不只是难看，是直接影响排名',
  },
  {
    step: '05',
    title: '客户咨询自动应答',
    sources: 'FAQ 知识库 / 认证数据库 / 兼容性列表',
    ai: 'FAQ Agent 处理 80% 以上重复技术问题，复杂问题自动转人工并附上上下文摘要',
    limit: '应答边界设计和升级规则必须人工定义，防止 AI 过度承诺或给出错误技术建议',
    risk: '没有 FAQ Agent：客服团队 60%+ 时间处理重复问题，高价值咨询被淹没在噪音里',
  },
  {
    step: '06',
    title: '售后支持知识库',
    sources: '维修指南 / 固件更新说明 / 兼容性矩阵',
    ai: 'AI 基于工程文档自动生成用户友好的售后 FAQ，固件更新后自动触发相关内容更新',
    limit: '涉及安全建议的内容（如电气安全、过热处理）必须工程师审核后才能发布',
    risk: '售后文档过时或不准确会直接导致差评堆积和退货率上升',
  },
  {
    step: '07',
    title: '迭代信号反馈',
    sources: 'Amazon 评价 / 退货原因 / 客服工单',
    ai: 'AI 批量分析差评，提取最高频的产品问题和内容误导点，形成改进优先级建议',
    limit: '产品改进决策需要工程团队评估可行性，AI 只提供信号不做产品决策',
    risk: '没有这个闭环，同样的差评会持续积累，内容和产品都不会迭代',
  },
]

const leveragePoints = [
  { n: '01', title: '技术文档 → 消费者语言自动转化', detail: '把工程师写的 spec sheet 自动转化为亚马逊买家、独立站消费者、众筹支持者各自需要的语言风格。同一产品，三套内容，一次生成。ROI 最高的单点 AI 应用。' },
  { n: '02', title: '多语言认证说明批量生成', detail: 'CE / FCC / RoHS / UL 认证说明在不同国家市场的表述格式不同。AI 可以基于认证数据库，按市场自动生成合规的产品页认证描述，避免人工逐市场整理的错漏。' },
  { n: '03', title: '售后 FAQ 智能应答', detail: '智能硬件的售后咨询 80% 是重复性技术问题。部署 FAQ Agent 后，客服团队只处理真正的异常情况，其余全部自动应答，应答质量高于人工（数据库有而非凭记忆）。' },
  { n: '04', title: '竞品参数对比内容自动化', detail: '消费者在购买决策前会比较 3-5 款产品。AI 可以基于竞品参数表，自动生成有说服力的对比文案——突出优势，不夸大，不回避劣势。这类内容人工写通常被跳过，AI 让它可量产。' },
  { n: '05', title: '用户评价挖掘 → 产品迭代信号', detail: '批量分析亚马逊差评，提取"最频繁被提到的问题"，形成产品改进优先级建议。这是很多工厂还没开始做的高价值 AI 应用，边际成本低但信息价值极高。' },
  { n: '06', title: 'SKU 变体内容批量生成', detail: '同一款产品有多个颜色/规格/套装组合，每个变体都需要差异化的内容。AI 基于参数差异自动生成变体内容，避免完全相同的描述被亚马逊降权。' },
  { n: '07', title: '固件迭代触发内容自动更新', detail: '每次固件更新都可能带来功能变化，相关 FAQ 和产品描述需要同步更新。AI 可以在固件 changelog 录入后自动识别需要更新的内容段落，大幅缩短内容更新周期。' },
]

const noAutomate = [
  { title: '产品定位决策', body: '高端定位 vs 性价比路线、细分市场选择、是否进入某个国家市场——这些涉及长期战略的判断需要管理层做，AI 可以提供数据支持但不能做决策。定位错了，再好的内容也无济于事。' },
  { title: '核心技术卖点排序', body: '你的产品有十个特性，哪个是消费者最在乎的、哪个是竞品无法复制的——这个优先级判断需要同时理解技术、市场和竞争格局的人来做。AI 可以生成选项，但不能替你做这个判断。' },
  { title: '认证合规最终确认', body: '产品页上展示的认证信息如果有误，涉及法律责任。AI 生成认证说明文字后，合规负责人必须核对认证编号、适用范围、有效期。这个步骤不能跳过，不能让 AI 自行发布。' },
  { title: '大买手和渠道商谈判', body: 'B2B 大客户的关系建立、条款谈判、账期安排——这类长期高价值的商业关系必须由人推进。AI 可以准备材料和背景研究，但出现在谈判桌上的必须是人。' },
  { title: '危机公关与产品安全回应', body: '产品召回通知、安全事故公告、重大客诉公开回应——这类内容的措辞会直接影响品牌声誉和法律风险。必须由有授权的人审批后发出，AI 不能自主发布此类内容。' },
]

const compareRows = [
  { dim: '内容如何产生', trad: '工程师写规格，营销翻译改写', tool: '外包给 freelancer 或本地化公司', ai: 'AI 从参数库直接生成，人工抽检审核' },
  { dim: '多语言覆盖', trad: '只有英文，其他市场靠机翻', tool: '机器翻译 + 人工润色', ai: 'AI 本地化（非翻译），按市场消费者习惯生成' },
  { dim: '平台格式适配', trad: '手工改格式，各平台版本混乱', tool: '半手工调整，费时', ai: '按平台规则自动输出，字数/关键词/结构全部适配' },
  { dim: 'FAQ 管理', trad: '客服手工逐条回复，靠记忆', tool: 'FAQ 文档 + 人工查询回复', ai: 'Agent 自动应答 80%+ 问题，复杂问题转人工' },
  { dim: '内容更新速度', trad: '产品迭代后数周才更新内容', tool: '一周内，靠人协调各部门', ai: '固件/产品更新自动触发内容更新，24小时内' },
]

const readinessLevels = [
  { level: 'L0', color: '#ef4444', label: '参数混沌', desc: '产品参数全在 PDF、邮件和工程师脑子里，没有统一结构化数据库。AI 内容生成的前提不存在。' },
  { level: 'L1', color: '#f59e0b', label: '表格整理', desc: '有 Excel 参数表，但版本混乱，不同 SKU 字段不统一，认证和产品的对应关系没人维护。' },
  { level: 'L2', color: '#3b82f6', label: '结构初成', desc: '参数库已部分结构化，有英文内容，但多语言靠外包，内容更新周期 2 周以上，FAQ 靠人工回复。' },
  { level: 'L3', color: '#22c55e', label: 'AI 辅助', desc: 'AI 已生成多语言内容，FAQ Agent 已部署，内容更新部分自动化。团队精力转向审核和优化。' },
  { level: 'L4', color: '#a78bfa', label: '内容工厂', desc: '全渠道内容自动生成，评价分析闭环已建立，产品迭代与内容更新联动，人负责策略而非执行。' },
]

const breakdowns = [
  { title: '产品参数库没有结构化', body: '所有产品参数还在各种版本的 spec sheet PDF 里，没有统一的结构化数据库。AI 无法可靠读取非结构化 PDF——这必须先做，没有商量余地。' },
  { title: '认证数据与市场要求对不上', body: '认证是有的，但哪款产品有哪些认证、对应哪些市场，这个映射关系没有人维护。出海内容里标错认证，是真实的法律风险，不只是内容问题。' },
  { title: '工程语言和营销语言各说各话', body: '工程团队维护产品文档，营销团队写内容，两边对不上。AI 需要一个统一的"产品知识库"作为信源——两套矛盾的文档只会生成错误内容。' },
  { title: '早期过度依赖众筹平台内容', body: 'Kickstarter / Indiegogo 的内容风格（感性、戏剧化、"改变世界"）搬到常规电商会严重掉转化率。内容策略必须按渠道差异化，不能复用。' },
  { title: '认证数据和实际产品版本对不上', body: '同一 SKU 经过多次硬件迭代，认证是针对旧版本的，新版本还没更新认证文件。这个对应关系如果没人维护，AI 生成的认证说明就是错的——比没有还危险。' },
  { title: '内容没有版本管理和下架机制', body: '产品停产或大改版后，旧内容还挂在亚马逊和独立站上，用户按旧内容期望购买，实物不符导致投诉。没有内容版本管理是很多智能硬件品牌差评的真实来源。' },
]

const faqs = [
  { q: '产品本身就是 AI 硬件，还需要 Makox 这类服务吗？', a: '是的。产品本身是 AI 和你的销售/内容/运营用 AI 是两件事。很多 AI 硬件公司的营销内容还是人工写、买家询盘还是人工分类、技术文档翻译还是找外包。我们解决的是后者。' },
  { q: '智能硬件 SKU 迭代快，AI 内容能跟上吗？', a: '可以，而且 AI 比人工更适合处理高频迭代的内容更新。关键是建立一个"内容更新触发机制"——产品数据库更新 → 自动触发相关页面内容重新生成 → 人工审核后发布。这个流程建好后，新产品上线内容时间可以从一周压到一天。' },
  { q: '众筹结束后转电商，内容策略怎么调？', a: '众筹 vs 常规电商是两种完全不同的购买决策场景。众筹买家购买的是"参与感"和"早期优势"，电商买家购买的是"解决问题"。内容框架需要从情绪驱动切换到功能驱动。AI 可以基于同一产品知识库，分别生成两套风格的内容。' },
  { q: '工程师团队能自己搭 AI 工具链吗？', a: '可能，但不建议这么做。工程师擅长构建，不擅长用户视角的内容生产和销售流程。自搭工具链的机会成本很高——工程资源花在这里，不如花在产品本身。外包内容/销售的 AI 运营，工程团队专注产品，是更合理的分工。' },
  { q: '固件更新后，产品内容如何跟着更新？', a: '建立触发机制：固件 changelog 录入产品知识库 → AI 识别涉及内容变更的功能点 → 自动生成更新建议 → 人工审核后推送到各渠道。这个流程比手动通知各渠道负责人"有更新了"可靠得多，也快得多。' },
  { q: '智能硬件的 Amazon 内容怎么做 A9 优化？', a: 'A9 的核心逻辑是：相关性（关键词覆盖）× 转化率（内容质量）× 销售速度。AI 可以做关键词覆盖的系统化优化——Title/Bullets/Search Terms 的关键词密度、长尾词布局、竞品词分析。转化率提升靠内容质量，这是 AI 和人工协作的地方。' },
  { q: '我们在多个平台销售，内容管理怎么统一？', a: '建立"产品知识库 → 渠道分发"的单向架构：所有产品信息维护在一个地方，AI 按各渠道格式要求生成对应版本。每次产品更新只改知识库，渠道内容自动同步。避免"在亚马逊改一下，独立站忘了改"的经典失误。' },
  { q: '小品牌如何用 AI 内容和大品牌竞争？', a: '大品牌的优势是认知度，不是内容质量——很多大品牌的亚马逊内容其实很差。小品牌的机会是用 AI 做到大品牌手工无法做到的内容覆盖深度：每个 SKU 都有完整的多语言内容、完整的 FAQ、完整的场景内容。用数量和质量的组合填满大品牌懒得填的内容缝隙。' },
]

export default function SmartDevicesPage() {
  return (
    <div style={S.page}>
      <Nav />

      {/* HERO */}
      <section style={{ ...S.section, paddingTop: '100px', paddingBottom: '72px' }}>
        <Label>Smart Devices · 智能硬件</Label>
        <h1 style={{ fontFamily: "'Instrument Sans','Noto Sans SC',sans-serif", fontSize: 'clamp(32px,4.5vw,58px)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: 20, maxWidth: 760 }}>
          智能硬件出海：技术够好，<br />但 AI 会讲故事吗？
        </h1>
        <p style={{ fontSize: 16, color: '#888', lineHeight: 1.8, maxWidth: 640, marginBottom: 24 }}>
          IoT、消费电子、AI 硬件——这个赛道的工厂通常有一流的工程师，却缺乏把技术参数转化为消费者语言的能力。AI 恰好可以填补这个缺口，而且是系统性地填补。
        </p>
        <p style={{ fontSize: 15, color: '#555', lineHeight: 1.8, maxWidth: 640, fontStyle: 'italic', borderLeft: '2px solid #f59e0b', paddingLeft: 16, marginBottom: 48 }}>
          智能硬件内容自动化不是找个翻译工具，而是把技术参数表、认证数据、用户评价、渠道要求这四类数据，通过 AI 转化为不同市场、不同平台、不同购买阶段消费者真正看得懂的内容——系统性地，而不是逐条手工的。
        </p>
        <div style={{ display: 'flex', gap: 40, flexWrap: 'wrap' as const, paddingTop: 32, borderTop: '1px solid #1a1a1a' }}>
          {[
            ['典型SKU复杂度', '高（软硬件组合）'],
            ['竞品内容同质化', '极严重'],
            ['海外消费者决策周期', '7–30天'],
            ['产品FAQ询问量', '占客服60%+'],
          ].map(([label, val]) => (
            <div key={label}>
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 22, fontWeight: 700, color: '#f59e0b', marginBottom: 4 }}>{val}</div>
              <div style={{ fontSize: 11, color: '#444', letterSpacing: '0.5px', maxWidth: 160 }}>{label}</div>
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
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 2 }}>
          {[
            { title: '参数高度结构化', desc: '芯片型号、连接协议、功耗参数、认证列表——这些都是结构化数据，AI 可以直接读取并生成精准的多语言内容。比风格类产品更容易标准化。', color: '#f59e0b' },
            { title: 'FAQ 规律性强', desc: '"支持哪些 APP？""兼容 Amazon Echo 吗？""防水等级是多少？"这些问题高度重复，AI Agent 应答准确率可达 90%+，大幅释放客服资源。', color: '#3b82f6' },
            { title: '多平台分发需求大', desc: 'Amazon / 独立站 / Kickstarter / 线下零售——同一产品需要不同格式的内容，AI 批量生成的效率优势在这里最明显，人工逐平台适配不可持续。', color: '#22c55e' },
            { title: '用户评价数据丰富', desc: '智能硬件品类的用户评价量大且结构化，AI 可以持续分析差评、提取改进信号、自动更新 FAQ。这个反馈闭环是低成本的产品改进情报来源。', color: '#a78bfa' },
          ].map(item => (
            <div key={item.title} style={{ background: '#0c0c0e', padding: '28px 24px', borderLeft: `2px solid ${item.color}` }}>
              <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 8, color: '#e4e2dc' }}>{item.title}</div>
              <div style={S.muted}>{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* 7-STEP WORKFLOW */}
      <section style={S.section}>
        <Label>Workflow Breakdown · 流程全拆解</Label>
        <h2 style={S.h2}>智能硬件内容 Workflow：7 个节点，逐步拆解</h2>
        <p style={{ ...S.muted, maxWidth: 600, marginBottom: 40 }}>从产品资料到迭代信号反馈，每个节点 AI 能做什么、边界在哪里。</p>
        <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 2 }}>
          {workflowSteps.map((s) => (
            <div key={s.step} style={{ background: '#0c0c0e', padding: '24px 28px', display: 'grid', gridTemplateColumns: '52px 1fr', gap: 20, border: '1px solid #141416' }}>
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 13, color: '#444', paddingTop: 4 }}>{s.step}</div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 16, color: '#e4e2dc', marginBottom: 6 }}>{s.title}</div>
                <div style={{ fontSize: 12, color: '#888', fontFamily: "'JetBrains Mono',monospace", marginBottom: 12 }}>{s.sources}</div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div>
                    <div style={{ fontSize: 11, color: '#f59e0b', letterSpacing: '2px', marginBottom: 6, fontFamily: "'JetBrains Mono',monospace" }}>AI 可做</div>
                    <div style={{ fontSize: 13, color: '#e4e2dc', lineHeight: 1.6 }}>{s.ai}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: 11, color: '#444', letterSpacing: '2px', marginBottom: 6, fontFamily: "'JetBrains Mono',monospace" }}>失效风险</div>
                    <div style={{ fontSize: 13, color: '#666', lineHeight: 1.6 }}>{s.risk}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* WHERE AI CREATES LEVERAGE */}
      <section style={S.section}>
        <Label>AI Leverage Points · AI 价值杠杆</Label>
        <h2 style={S.h2}>AI Agent 在智能硬件里最能发力的 7 个环节</h2>
        <p style={{ ...S.muted, maxWidth: 580, marginBottom: 36 }}>按 ROI 从高到低排序——先做前三个，回本最快。</p>
        <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 2 }}>
          {leveragePoints.map(item => (
            <div key={item.n} style={{ background: '#0c0c0e', padding: '22px 28px', display: 'grid', gridTemplateColumns: '48px 1fr', gap: 20 }}>
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: '#f59e0b', paddingTop: 2 }}>{item.n}</div>
              <div>
                <div style={{ fontSize: 15, fontWeight: 600, color: '#e4e2dc', marginBottom: 8 }}>{item.title}</div>
                <div style={S.muted}>{item.detail}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* WHAT NOT TO AUTOMATE */}
      <section style={S.section}>
        <Label>Do Not Automate · 不该自动化的事</Label>
        <h2 style={S.h2}>这 5 件事必须人工做</h2>
        <p style={{ ...S.muted, maxWidth: 560, marginBottom: 36 }}>知道不自动化什么，和知道自动化什么同样重要。越界会损害信任和合规。</p>
        <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 2 }}>
          {noAutomate.map((item, i) => (
            <div key={i} style={{ background: '#0c0c0e', padding: '24px 28px', display: 'grid', gridTemplateColumns: '12px 1fr', gap: 20, alignItems: 'start', border: '1px solid #141416' }}>
              <div style={{ width: 8, height: 8, background: '#3b82f6', marginTop: 6, flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: 15, fontWeight: 700, color: '#e4e2dc', marginBottom: 8 }}>{item.title}</div>
                <div style={S.muted}>{item.body}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* COMPARISON TABLE */}
      <section style={S.section}>
        <Label>Comparison · 对比视角</Label>
        <h2 style={S.h2}>传统 / 工具化 / AI-native：三种内容运作方式</h2>
        <div style={{ overflowX: 'auto' as const, marginTop: 32 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' as const, fontSize: 14 }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #1a1a1a' }}>
                <th style={{ textAlign: 'left' as const, padding: '12px 16px', fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: '#444', letterSpacing: '2px', width: '20%' }}>维度</th>
                <th style={{ textAlign: 'left' as const, padding: '12px 16px', fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: '#ef4444', letterSpacing: '2px', width: '26%' }}>传统人工</th>
                <th style={{ textAlign: 'left' as const, padding: '12px 16px', fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: '#f59e0b', letterSpacing: '2px', width: '26%' }}>工具化</th>
                <th style={{ textAlign: 'left' as const, padding: '12px 16px', fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: '#22c55e', letterSpacing: '2px', width: '28%' }}>AI-native</th>
              </tr>
            </thead>
            <tbody>
              {compareRows.map((row, i) => (
                <tr key={i} style={{ borderBottom: '1px solid #141416', background: i % 2 === 0 ? '#0c0c0e' : '#08080a' }}>
                  <td style={{ padding: '16px', fontSize: 13, color: '#aaa', fontWeight: 600 }}>{row.dim}</td>
                  <td style={{ padding: '16px', color: '#888', lineHeight: 1.6 }}>{row.trad}</td>
                  <td style={{ padding: '16px', color: '#888', lineHeight: 1.6 }}>{row.tool}</td>
                  <td style={{ padding: '16px', color: '#e4e2dc', lineHeight: 1.6 }}>{row.ai}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <Divider />

      {/* WHAT BREAKS FIRST */}
      <section style={S.section}>
        <Label>What Breaks First · 最先断裂的环节</Label>
        <h2 style={S.h2}>智能硬件团队最常踩的 6 个坑</h2>
        <p style={{ ...S.muted, maxWidth: 580, marginBottom: 36 }}>不是 AI 的问题，是准备工作没做好。</p>
        <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 16 }}>
          {breakdowns.map((item, i) => (
            <div key={i} style={{ background: '#0c0c0e', border: '1px solid #141416', borderLeft: '3px solid #ef4444', padding: '24px 28px' }}>
              <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 8, color: '#e4e2dc' }}>{item.title}</div>
              <p style={{ ...S.muted, margin: 0 }}>{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* READINESS MODEL */}
      <section style={S.section}>
        <Label>AI Readiness · 就绪度模型</Label>
        <h2 style={{ ...S.h2, marginBottom: 8 }}>你的团队在哪个阶段？</h2>
        <p style={{ ...S.muted, maxWidth: 560, marginBottom: 36 }}>AI 内容能力不是一步到位的。L0 到 L4，每个阶段有不同的优先行动。</p>
        <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 2 }}>
          {readinessLevels.map((r) => (
            <div key={r.level} style={{ background: '#0c0c0e', padding: '22px 28px', display: 'grid', gridTemplateColumns: '64px 180px 1fr', gap: 24, alignItems: 'start', border: '1px solid #141416' }}>
              <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 14, fontWeight: 700, color: r.color }}>{r.level}</span>
              <span style={{ fontSize: 14, fontWeight: 700, color: r.color }}>{r.label}</span>
              <p style={{ fontSize: 14, color: '#888', lineHeight: 1.6, margin: 0 }}>{r.desc}</p>
            </div>
          ))}
        </div>
        <p style={{ fontSize: 13, color: '#444', marginTop: 16, fontFamily: "'JetBrains Mono',monospace" }}>
          大多数智能硬件团队自评 L2，实际在 L1。先做参数库治理，再谈 AI 内容生产。
        </p>
      </section>

      <Divider />

      {/* FAQ */}
      <section style={S.section}>
        <Label>FAQ · 常见问题</Label>
        <h2 style={{ ...S.h2, marginBottom: 40 }}>智能硬件出海 AI 转型高频问题</h2>
        <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 0 }}>
          {faqs.map((item, i) => (
            <div key={i} style={{ padding: '28px 0', borderBottom: '1px solid #111' }}>
              <div style={{ fontSize: 15, fontWeight: 600, color: '#e4e2dc', marginBottom: 12, display: 'flex', gap: 12 }}>
                <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: '#f59e0b', flexShrink: 0, marginTop: 3 }}>Q{i + 1}</span>
                {item.q}
              </div>
              <div style={{ fontSize: 14, color: '#666', lineHeight: 1.8, paddingLeft: 28 }}>{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* CTA */}
      <section style={{ ...S.section, paddingBottom: '100px' }}>
        <div style={{ background: '#0c0c0e', border: '1px solid #1a1a1c', padding: '56px 48px', display: 'grid', gridTemplateColumns: '1fr auto', gap: 48, alignItems: 'center' }}>
          <div>
            <Label>Free Consultation · 免费诊断</Label>
            <h2 style={{ ...S.h2, marginBottom: 12 }}>智能硬件出海 AI 布局，先聊30分钟</h2>
            <p style={{ fontSize: 15, color: '#666', lineHeight: 1.75, maxWidth: 480 }}>
              我们看你的产品线、内容现状、销售渠道。告诉你第一个值得自动化的环节是什么，以及投入产出比如何估算。
            </p>
          </div>
          <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 12, padding: '16px 32px', background: '#f59e0b', color: '#08080a', fontSize: 14, fontWeight: 700, textDecoration: 'none', whiteSpace: 'nowrap' as const }}>
            预约免费诊断 →
          </Link>
        </div>
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' as const, marginTop: 32 }}>
          <Link href="/solutions/content" style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, color: '#444', textDecoration: 'none', letterSpacing: '1px' }}>多语言内容生产 →</Link>
          <Link href="/services/agent" style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, color: '#444', textDecoration: 'none', letterSpacing: '1px' }}>Agent 部署服务 →</Link>
          <Link href="/services/governance" style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, color: '#444', textDecoration: 'none', letterSpacing: '1px' }}>数字治理服务 →</Link>
          <Link href="/solutions/workflow" style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, color: '#444', textDecoration: 'none', letterSpacing: '1px' }}>Workflow 重构 →</Link>
        </div>
      </section>
    </div>
  )
}
