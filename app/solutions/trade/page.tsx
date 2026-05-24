import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'

export const metadata: Metadata = {
  title: '外贸跟单自动化 · Makox',
  description:
    '外贸跟单自动化不是"自动回复客户"，而是让整个出口 workflow 可被 AI 接管。Makox 帮出口工厂重构询盘→报价→跟单→生产→物流全链路。',
  openGraph: {
    title: '外贸跟单自动化：从询盘到复购的 AI 重构 · Makox',
    description: '询盘分级、报价自动化、生产跟进、物流推送——外贸跟单的 7 个环节，哪些 AI 可以执行，哪些必须人工决策。实战拆解，不是营销话术。',
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

const readinessLevels = [
  { level: 'L0', color: '#ef4444', label: '混沌期', desc: '跟单全靠微信/WhatsApp，无法沉淀数据，信息在聊天记录里消失。询盘量一旦上来，系统立刻崩溃。' },
  { level: 'L1', color: '#f59e0b', label: '工具期', desc: '有 CRM 但基本没人用，报价用 Excel，客户信息零散分布在各个地方。工具存在，但没有执行纪律。' },
  { level: 'L2', color: '#3b82f6', label: '流程期', desc: 'SOP 已建立，有初步的跟单流程，但依赖人力执行，仍有大量手工操作。流程可复制但不自动。' },
  { level: 'L3', color: '#22c55e', label: 'AI辅助期', desc: 'AI 工具已接入部分环节（如自动分级、报价生成），工作流基本稳定。人工专注判断和关系维护。' },
  { level: 'L4', color: '#a78bfa', label: 'Agent自治期', desc: '询盘→评分→报价→跟进→复购全链路有 Agent 执行，人负责判断、异常处理和高价值客户维系。' },
]

const workflowSteps = [
  {
    step: '01',
    title: '询盘收集',
    sources: '邮件 / WhatsApp / B2B平台',
    ai: 'AI 可分级，按意向度、预算信号、来源质量打优先级分，自动合并多渠道入口',
    limit: '需要整合多渠道，单一入口才能真正自动化',
    risk: '渠道碎片化导致漏单，高意向询盘淹没在低质垃圾里',
  },
  {
    step: '02',
    title: '客户评分',
    sources: '历史订单 / 询盘内容 / 公司背景',
    ai: 'AI 做意向判断，与历史数据比对，输出跟进优先级和推荐响应策略',
    limit: '冷启动阶段需要足够的历史数据做训练基础',
    risk: '没有评分，业务员把 80% 精力花在 20% 低质客户上',
  },
  {
    step: '03',
    title: '报价生成',
    sources: '产品规格 / 价格表 / 历史报价',
    ai: 'Agent 自动生成规范化报价 PDF，含多版本产品组合，多语言自动转换',
    limit: '需要人工审核定价，AI 不能承担价格决策责任',
    risk: '报价版本混乱，客户改需求后不知道对应哪版，丢失商机',
  },
  {
    step: '04',
    title: '打样跟进',
    sources: '打样记录 / 客户反馈 / 修改历史',
    ai: 'Agent 可自动发送节点提醒，记录每轮修改的变更原因和版本对应关系',
    limit: '判断是否接受客户改动要求、如何定价修改——这是人的工作',
    risk: '多轮打样没有记录，重复沟通浪费时间，客户失去耐心',
  },
  {
    step: '05',
    title: '生产协调',
    sources: '订单信息 / 工厂排期 / 物料状态',
    ai: 'AI 可做进度可视化、交期风险预警和物料缺口提示',
    limit: '工厂内部协调本质是人际问题，不是信息问题，AI介入有限',
    risk: '对客户的交期承诺和实际生产进度脱节，影响信任',
  },
  {
    step: '06',
    title: '物流跟踪',
    sources: '货代 / 物流平台 API / 港口数据',
    ai: '高度可自动化：API 对接后 Agent 自动推送状态更新给客户，清关预警自动通知',
    limit: '物流异常处理仍需人工介入，尤其是清关争议和货损理赔',
    risk: '客户不知道货在哪——这是最容易被投诉的一个环节',
  },
  {
    step: '07',
    title: '售后与复购',
    sources: '订单历史 / 客户行为 / 沟通记录',
    ai: 'AI 可识别复购信号（询盘频率上升、季节性规律），自动触发跟进序列',
    limit: '深度客情维护需要真实的人工投入，AI 无法替代关系',
    risk: '没有数据沉淀，每个客户都像第一次认识，复购率低',
  },
]

const mistakes = [
  {
    no: '01',
    title: '把 WhatsApp 当 CRM 用',
    body: '信息无法沉淀，离职即失联。一个跟单离职，带走的不只是经验，是全部客户关系记录。这不是员工忠诚度问题，是系统问题。系统问题只能用系统解决。',
  },
  {
    no: '02',
    title: '报价单没有版本控制',
    body: '客户改了三次需求，你手里有四版 Excel——哪版是最新的？客户签的是哪版？发生争议时没有证据链。版本混乱直接影响成单信任。',
  },
  {
    no: '03',
    title: '客户分级靠感觉',
    body: '高意向客户和低质量询盘享受同等响应速度，甚至更差——因为业务员刚好在处理另一个"感觉不错"的客户。没有数据驱动的分级，就是系统性漏单。',
  },
  {
    no: '04',
    title: '跟单全依赖一个人',
    body: '那个人生病你就停摆，出差你就响应慢，离职你就从头开始。这不是人的问题，是流程问题。如果你的跟单流程不能被另一个人接管，说明这不是流程，是个人技能。',
  },
  {
    no: '05',
    title: '没有 lost deal 分析',
    body: '不知道哪个环节在流失客户。是报价太慢？打样不满意？还是物流报价高？没有数据就没有改进方向，只能靠"感觉下次做好"。感觉不是策略。',
  },
  {
    no: '06',
    title: '复盘只看成单，不看丢单',
    body: '月会上只讨论成了哪几单，从不系统分析丢了哪些客户、在哪个环节丢的。成单数据会让你觉得现状可以接受。丢单数据才会告诉你真正的问题在哪里。',
  },
]

const faqs = [
  {
    q: '小工厂适合现在做外贸跟单自动化吗？',
    a: '取决于你的询盘量和流失痛点。月询盘量低于 50 条、跟单靠 1-2 人能撑住的，现在做自动化性价比不高。但如果你在丢单，先搞清楚在哪里丢——这个分析本身比任何工具都值钱。',
  },
  {
    q: '我们已经用了 CRM，还需要做什么？',
    a: 'CRM 只是数据容器。有 CRM 但没有录入纪律、没有跟进规则、没有数据分析——等于没有 CRM。AI 能做的是在 CRM 基础上加上自动执行层，但前提是数据是干净的。',
  },
  {
    q: 'AI 项目为什么半年后就停了？',
    a: '最常见原因是：一开始用了试用期激情，没有融入日常 workflow。AI 工具不会主动要求被使用，没有强制触发点，就会被遗忘。好的部署是把 AI 嵌入已有流程，而不是新建一套流程。',
  },
  {
    q: '部署 Agent 需要我们有 IT 团队吗？',
    a: '不需要内部 IT 团队，但需要一个能做决策的业务负责人。技术部分我们来，但需要工厂侧有人能说清楚业务逻辑——"一个好的询盘长什么样"这个问题 AI 回答不了，你们回答。',
  },
  {
    q: '多久能看到效果？',
    a: '最快的效果是询盘响应时间——2-4 周内可以做到自动分类 + 优先级队列。跟单效率提升通常需要 6-8 周，等新流程运行稳定。成单率改变需要更长周期，因为这和产品、价格、市场都有关系，不只是流程。',
  },
  {
    q: '如果我们的客户不喜欢和 AI 交互怎么办？',
    a: '大多数客户不知道也不在乎背后是不是 AI——他们在乎的是响应速度和专业度。Agent 做的是信息收集、跟进提醒、状态更新，真正的谈判和关系维护始终是人做的。自动化的是流程，不是关系。',
  },
  {
    q: '我们产品品类复杂，AI 报价能准确吗？',
    a: '准确度取决于你的产品参数库和历史报价数据的质量，而不是 AI 本身的能力。品类越复杂，参数库就越重要。AI 报价的正确用法是：生成初稿 + 人工审核定价——不是替代业务员，是把 80% 的格式化工作交给 AI，业务员专注于最后的定价判断。',
  },
  {
    q: '如何评估外贸跟单 AI 项目的 ROI？',
    a: '三个维度：① 响应速度提升（询盘到首次回复的时间）——这个最直接，也最容易量化；② 跟单人效（每个跟单人员可以管理的活跃询盘数量）——这决定你的人力扩张节奏；③ 复购率变化（有了系统后客户数据沉淀，复购触发能否改善）。建议先定好基线数据，再做 12 周的对比。',
  },
]

const leveragePoints = [
  { n: '01', title: '询盘意图分级', detail: '按预算信号（RFQ 规格详细度）、采购阶段（询价 vs 比价 vs 准备下单）、来源质量（直询 vs 平台 vs 展会）三个维度自动打分，实时排优先级队列。告别"感觉这个客户不错"的主观判断。' },
  { n: '02', title: '报价生成自动化', detail: '从产品规格库调取参数 → 匹配历史报价 → 生成规范 PDF，含产品图、参数表、交期说明、付款条款。原来半天的工作，30 分钟内完成初稿，业务员只做定价最终审核。' },
  { n: '03', title: '沉默期自动跟进序列', detail: '报价发出后第 3 天无回应自动发跟进邮件，第 7 天无回应发替代方案，第 14 天打标"冷线索"并触发季度复盘提醒。客户流失最多的沉默期，从被动等待变成主动接触。' },
  { n: '04', title: '物流状态自动推送', detail: '对接货代 API，货物离港/到港/清关/派送各节点自动推送给客户。客户主动收到更新，不再需要每天追问"货到哪了"。这是减少客服投诉最直接的自动化。' },
  { n: '05', title: '复购信号识别', detail: '分析客户历史订单规律（季节性、订单间隔、量级变化），在客户即将进入复购窗口时提前推送跟进提醒。数据驱动的复购触发，比靠业务员记忆准确得多。' },
  { n: '06', title: 'Lost deal 分析', detail: '系统性统计哪个环节流失客户最多：是报价响应慢？打样轮次过多？物流报价高？哪类客户流失率高？这些数据每周自动汇总，让改进方向从"感觉"变成"数据"。' },
  { n: '07', title: '多语言报价自动转换', detail: '按客户来源地区，自动将报价文档转换为对应语言版本（英语/德语/西班牙语/法语）。不只是翻译——货币单位、计量单位、合规说明按市场自动适配。' },
]

const noAutomate = [
  { title: '最终定价决策', body: '利润率调整、战略性低价进入新市场、大客户优惠幅度——这些涉及公司利益和长期战略的定价判断，必须由有决策权限的人做，AI 只能提供参考和历史对比，不能做最终承诺。' },
  { title: '大客户首次关系建立', body: '第一次接触大客户的方式和内容会决定整个关系的基调。这个窗口期的投入质量直接影响长期合作概率。自动化在这里会降低而不是提升效果——人工投入的密度本身就是信号。' },
  { title: '供应商承诺确认', body: '不能让 AI 代表工厂对供应商做承诺——无论是交期、价格还是质量要求。这类沟通出了问题，法律责任归属会很复杂。供应商侧的重要确认始终需要有名有姓的人做。' },
  { title: '质量例外处理', body: '有争议的质量问题、客户投诉的退换货判断、批次质量问题的追责——这些涉及事实判断和商业关系维护的决策，AI 没有足够的上下文，也没有承担后果的能力。' },
  { title: '法律和合规条款确认', body: '任何涉及合同条款的确认（付款条件变更、违约责任、不可抗力条款）不能自动化。这里的错误成本极高，需要有权限的人审阅后才能确认发出。' },
]

const compareRows = [
  { dim: '业务如何启动', trad: '手工刷微信/邮件收件箱', tool: '规则提醒触发，靠人响应', ai: 'AI 主动推送优先级队列，按意向度排序' },
  { dim: '数据在哪里', trad: '聊天记录、人脑记忆、各版 Excel', tool: '散落多个工具，各自为政', ai: '统一结构化数据库，可查询、可分析、可触发' },
  { dim: '谁来协调', trad: '跟单人员全程人工跟进', tool: '提醒工具辅助，仍靠人执行', ai: 'Agent 执行重复步骤，人专注判断和异常' },
  { dim: '最先崩溃的', trad: '跟单离职，客户关系清零', tool: '工具没人用，数据空壳', ai: '数据质量下降时 AI 输出漂移（可监控）' },
  { dim: 'AI 就绪度', trad: '完全不就绪，无法接 AI', tool: '局部就绪，需先治理', ai: '原生就绪，Agent 随时可挂载' },
]

export default function TradePage() {
  return (
    <div style={{ background: '#08080a', color: '#e4e2dc', minHeight: '100vh', fontFamily: "'Instrument Sans', 'Noto Sans SC', sans-serif" }}>
      <Nav />

      {/* ── HERO ── */}
      <section style={{ maxWidth: 900, margin: '0 auto', padding: '120px 24px 80px' }}>
        <Label>Trade Workflow Automation</Label>
        <h1 style={{ fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: 700, lineHeight: 1.1, marginBottom: 24, letterSpacing: '-1px' }}>
          你的询盘正在<br />WhatsApp 里消失
        </h1>
        <p style={{ fontSize: 18, color: '#888', lineHeight: 1.8, maxWidth: 620, marginBottom: 24 }}>
          大多数出口工厂不缺客户，缺的是一套能撑住增长的系统。跟单靠微信，报价靠 Excel，复盘靠记忆——这套工作流每天都在漏单，只是你不知道漏了多少。
        </p>
        <p style={{ fontSize: 15, color: '#555', lineHeight: 1.8, maxWidth: 620, fontStyle: 'italic', borderLeft: '2px solid #f59e0b', paddingLeft: 16, marginBottom: 40 }}>
          外贸跟单自动化不是"自动回复客户"，而是把询盘、报价、样品、生产、物流和售后这条链路变成 AI 可以读取、判断和协作的 workflow——从询盘进来的那一刻到复购触发，每个节点都有数据记录、有触发规则、有人工介入点。
        </p>
        <Link href="/contact" style={{ display: 'inline-block', background: '#f59e0b', color: '#08080a', padding: '14px 32px', fontWeight: 700, fontSize: 15, textDecoration: 'none', letterSpacing: '0.5px' }}>
          预约免费诊断 →
        </Link>

        {/* Stats bar */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 1, marginTop: 64, border: '1px solid #141416', background: '#141416' }}>
          {[
            { val: '>4小时', label: '平均询盘响应时间' },
            { val: '7+ 步骤', label: '跟单链路平均长度' },
            { val: '60%', label: '信息丢失率' },
            { val: '1 人', label: '单客户跟进依赖人数' },
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
        <Label>什么是外贸跟单自动化</Label>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }}>
          <div>
            <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 16, lineHeight: 1.3 }}>不是"自动回复客户"</h2>
            <p style={{ color: '#888', lineHeight: 1.8, fontSize: 15 }}>
              很多工厂理解的自动化是：装一个聊天机器人，24小时回消息。这是表面。真正的外贸跟单自动化是让整个出口 workflow 可被 AI 接管——从询盘进来的那一刻，到复购触发，每个节点都有数据记录、有触发规则、有人工介入点。
            </p>
          </div>
          <div>
            <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 16, lineHeight: 1.3 }}>为什么传统方式失效</h2>
            <p style={{ color: '#888', lineHeight: 1.8, fontSize: 15 }}>
              WhatsApp + 微信 + 邮件三线并发，每条线都需要人主动去看。人不主动就漏。问题不是员工不努力，是系统没有设计主动性。没有主动推送、没有优先级队列、没有 lost deal 记录——这套架构在月询盘 20 条时勉强能用，月询盘 200 条时就全面崩溃。
            </p>
          </div>
          <div>
            <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 16, lineHeight: 1.3 }}>为什么现在是时候</h2>
            <p style={{ color: '#888', lineHeight: 1.8, fontSize: 15 }}>
              LLM 在 2023 年后已经能读懂询盘意图、做初步分类、生成规范化报价初稿。Agent 框架让多步骤自动执行成为可能。但工具不是障碍——障碍是工厂还没有干净的数据和稳定的 SOP。先把 workflow 治好，再谈 Agent。
            </p>
          </div>
          <div>
            <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 16, lineHeight: 1.3 }}>AI-native 方法的不同</h2>
            <p style={{ color: '#888', lineHeight: 1.8, fontSize: 15 }}>
              不是在旧流程上加工具。是重新设计询盘到复购的每个触发点，哪些环节 AI 执行效率更高，哪些环节必须人工决策。设计原则是：人负责判断，Agent 负责执行。结果是一个人能管 3 个人的客户量。
            </p>
          </div>
        </div>
      </section>

      {/* ── AI LEVERAGE POINTS ── */}
      <section style={{ background: '#0c0c0e', padding: '80px 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>
          <Label>AI 价值杠杆</Label>
          <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 16 }}>外贸跟单里 AI 最能发力的 7 个环节</h2>
          <p style={{ fontSize: 15, color: '#888', marginBottom: 40, maxWidth: 580 }}>按 ROI 从高到低排列。不需要全做——先把前三个做好，效果已经很明显。</p>
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 2 }}>
            {leveragePoints.map(item => (
              <div key={item.n} style={{ background: '#08080a', padding: '22px 28px', display: 'grid', gridTemplateColumns: '48px 1fr', gap: 20, border: '1px solid #141416' }}>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: '#f59e0b', paddingTop: 2 }}>{item.n}</div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 600, color: '#e4e2dc', marginBottom: 8 }}>{item.title}</div>
                  <div style={{ fontSize: 14, color: '#888', lineHeight: 1.7 }}>{item.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WORKFLOW ── */}
      <section style={{ maxWidth: 900, margin: '0 auto', padding: '80px 24px' }}>
        <Label>跟单流程全拆解</Label>
        <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 48 }}>7 个节点，哪里可以自动化，哪里不行</h2>
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
      </section>

      {/* ── WHAT NOT TO AUTOMATE ── */}
      <section style={{ background: '#0c0c0e', padding: '80px 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>
          <Label>不应该自动化的环节</Label>
          <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 16 }}>AI 边界：这 5 件事必须人工做</h2>
          <p style={{ fontSize: 15, color: '#888', marginBottom: 40, maxWidth: 560 }}>知道不自动化什么，和知道自动化什么同样重要。越界会损害信任和合规。</p>
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 2 }}>
            {noAutomate.map((item, i) => (
              <div key={i} style={{ background: '#08080a', padding: '24px 28px', display: 'grid', gridTemplateColumns: '8px 1fr', gap: 20, alignItems: 'start', border: '1px solid #141416' }}>
                <div style={{ width: 8, height: 8, background: '#3b82f6', borderRadius: 0, marginTop: 6, flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: '#e4e2dc', marginBottom: 8 }}>{item.title}</div>
                  <div style={{ fontSize: 14, color: '#888', lineHeight: 1.7 }}>{item.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ── */}
      <section style={{ maxWidth: 900, margin: '0 auto', padding: '80px 24px' }}>
        <Label>对比视角</Label>
        <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 48 }}>传统 / 工具化 / AI-native：三种运作方式的差异</h2>
        <div style={{ overflowX: 'auto' as const }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' as const, fontSize: 14 }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #1a1a1a' }}>
                <th style={{ textAlign: 'left' as const, padding: '12px 16px', fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: '#444', letterSpacing: '2px', width: '20%' }}>维度</th>
                <th style={{ textAlign: 'left' as const, padding: '12px 16px', fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: '#ef4444', letterSpacing: '2px', width: '26%' }}>传统人工</th>
                <th style={{ textAlign: 'left' as const, padding: '12px 16px', fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: '#f59e0b', letterSpacing: '2px', width: '26%' }}>工具化</th>
                <th style={{ textAlign: 'left' as const, padding: '12px 16px', fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: '#22c55e', letterSpacing: '2px', width: '28%' }}>AI-native</th>
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

      {/* ── MISTAKES ── */}
      <section style={{ background: '#0c0c0e', padding: '80px 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>
          <Label>常见错误</Label>
          <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 48 }}>工厂在外贸跟单上最常犯的 6 个错</h2>
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
        </div>
      </section>

      {/* ── READINESS ── */}
      <section style={{ maxWidth: 900, margin: '0 auto', padding: '80px 24px' }}>
        <Label>成熟度模型</Label>
        <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 16 }}>你的工厂在哪个阶段？</h2>
        <p style={{ color: '#888', marginBottom: 48, fontSize: 15 }}>跟单自动化不是一步到位的。L0 到 L4，每个阶段有不同的优先级。跨级跳往往失败。</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {readinessLevels.map((r) => (
            <div key={r.level} style={{ display: 'grid', gridTemplateColumns: '80px 120px 1fr', gap: 24, alignItems: 'center', padding: '24px 28px', background: '#0c0c0e', border: '1px solid #141416' }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 20, fontWeight: 700, color: r.color }}>{r.level}</div>
              <div style={{ fontWeight: 700, fontSize: 15, color: r.color }}>{r.label}</div>
              <div style={{ fontSize: 14, color: '#888', lineHeight: 1.6 }}>{r.desc}</div>
            </div>
          ))}
        </div>
        <p style={{ marginTop: 28, fontSize: 13, color: '#444', fontFamily: "'JetBrains Mono', monospace" }}>
          诊断建议：大多数工厂自评 L2，实际在 L1。先做诊断，再做规划。
        </p>
      </section>

      {/* ── CASE SIGNALS ── */}
      <section style={{ background: '#0c0c0e', padding: '80px 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>
          <Label>案例信号</Label>
          <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 48 }}>真实发生了什么</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            <div style={{ padding: '36px', border: '1px solid #141416', background: '#08080a' }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: '#f59e0b', letterSpacing: '2px', marginBottom: 20 }}>SANITARY WARE FACTORY · 卫浴工厂</div>
              <p style={{ fontSize: 15, color: '#888', lineHeight: 1.8, marginBottom: 24 }}>
                某卫浴工厂外贸跟单全程人工，从询盘到成单平均 21 天，客户流失集中在第 3-7 天的沉默期。部署跟单 Agent 全链路后，沉默期有自动触发跟进，询盘优先级实时队列化。
              </p>
              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' as const }}>
                {['跟单效率 3×↑', '成单周期 30%↓', 'Agent 全链路'].map((tag) => (
                  <span key={tag} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: '#22c55e', border: '1px solid #22c55e', padding: '4px 10px' }}>{tag}</span>
                ))}
              </div>
            </div>
            <div style={{ padding: '36px', border: '1px solid #141416', background: '#08080a' }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: '#f59e0b', letterSpacing: '2px', marginBottom: 20 }}>FURNITURE EXPORTER · 家具出口</div>
              <p style={{ fontSize: 15, color: '#888', lineHeight: 1.8, marginBottom: 24 }}>
                某家具出口企业内容生产和外贸跟单同时人工操作，外贸团队将大量时间用于写邮件和重复跟进。内容 + 跟单双线 Agent 部署后，同样人力支撑了更大的询盘量。
              </p>
              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' as const }}>
                {['内容产出 5×↑', '响应时间 60%↓', '跟单人力 50%↓'].map((tag) => (
                  <span key={tag} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: '#3b82f6', border: '1px solid #3b82f6', padding: '4px 10px' }}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ maxWidth: 900, margin: '0 auto', padding: '80px 24px' }}>
        <Label>常见问题</Label>
        <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 48 }}>真实的问题，直接的答案</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {faqs.map((f, i) => (
            <div key={i} style={{ padding: '32px 0', borderBottom: i < faqs.length - 1 ? '1px solid #141416' : 'none' }}>
              <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 12, color: '#e4e2dc', display: 'flex', gap: 12 }}>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: '#f59e0b', flexShrink: 0, marginTop: 3 }}>Q{i + 1}</span>
                {f.q}
              </div>
              <div style={{ fontSize: 15, color: '#888', lineHeight: 1.8, paddingLeft: 28 }}>{f.a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: '#0c0c0e', padding: '80px 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>
          <Label>下一步</Label>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, marginBottom: 20, lineHeight: 1.2 }}>
            如果你是认真的，我们聊聊
          </h2>
          <p style={{ fontSize: 16, color: '#888', lineHeight: 1.8, maxWidth: 540, marginBottom: 40 }}>
            60 分钟免费诊断。我们会一起看你的询盘流程，找到第一个值得自动化的环节。不推销，不画饼，只聊你的具体问题。
          </p>
          <Link href="/contact" style={{ display: 'inline-block', background: '#f59e0b', color: '#08080a', padding: '16px 40px', fontWeight: 700, fontSize: 15, textDecoration: 'none', letterSpacing: '0.5px' }}>
            预约诊断 →
          </Link>
        </div>
      </section>

      {/* ── FOOTER NOTE ── */}
      <div style={{ borderTop: '1px solid #141416', padding: '28px 24px', maxWidth: 900, margin: '0 auto' }}>
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' as const }}>
          <Link href="/solutions" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: '#444', textDecoration: 'none', letterSpacing: '1px' }}>← 所有方案</Link>
          <Link href="/solutions/content" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: '#444', textDecoration: 'none', letterSpacing: '1px' }}>多语言内容生产 →</Link>
          <Link href="/services/agent" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: '#444', textDecoration: 'none', letterSpacing: '1px' }}>Agent 部署服务 →</Link>
          <Link href="/services/governance" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: '#444', textDecoration: 'none', letterSpacing: '1px' }}>数字治理服务 →</Link>
          <Link href="/cases" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: '#444', textDecoration: 'none', letterSpacing: '1px' }}>查看案例 →</Link>
        </div>
      </div>
    </div>
  )
}
