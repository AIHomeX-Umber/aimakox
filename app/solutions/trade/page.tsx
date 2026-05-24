import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'

export const metadata: Metadata = {
  title: '外贸跟单自动化 · Makox',
  description:
    '外贸跟单自动化不是"自动回复客户"，而是让整个出口 workflow 可被 AI 接管。Makox 帮出口工厂重构询盘→报价→跟单→生产→物流全链路。',
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
  { level: 'L0', color: '#ef4444', label: '混沌期', desc: '跟单全靠微信/WhatsApp，无法沉淀数据，信息在聊天记录里消失。' },
  { level: 'L1', color: '#f59e0b', label: '工具期', desc: '有 CRM 但基本没人用，报价用 Excel，客户信息零散分布在各个地方。' },
  { level: 'L2', color: '#3b82f6', label: '流程期', desc: 'SOP 已建立，有初步的跟单流程，但依赖人力执行，仍有大量手工操作。' },
  { level: 'L3', color: '#22c55e', label: 'AI辅助期', desc: 'AI 工具已接入部分环节（如自动回复、报价生成），工作流基本稳定。' },
  { level: 'L4', color: '#a78bfa', label: 'Agent自治期', desc: '询盘→评分→报价→跟进→复购全链路有 Agent 执行，人负责判断和异常处理。' },
]

const workflowSteps = [
  {
    step: '01',
    title: '询盘收集',
    sources: '邮件 / WhatsApp / B2B平台',
    ai: 'AI 可分级，按意向度、预算信号、来源质量打优先级分',
    limit: '需要整合多渠道，单一入口才能真正自动化',
    risk: '渠道碎片化导致漏单，高意向询盘淹没在低质垃圾里',
  },
  {
    step: '02',
    title: '客户评分',
    sources: '历史订单 / 询盘内容 / 公司背景',
    ai: 'AI 做意向判断，与历史数据比对，输出跟进优先级',
    limit: '冷启动阶段需要足够的历史数据做训练基础',
    risk: '没有评分，业务员把 80% 精力花在 20% 低质客户上',
  },
  {
    step: '03',
    title: '报价生成',
    sources: '产品规格 / 价格表 / 历史报价',
    ai: 'Agent 自动生成规范化报价 PDF，含多版本产品组合',
    limit: '需要人工审核，AI 不能承担价格决策责任',
    risk: '报价版本混乱，客户改需求后不知道对应哪版，丢失商机',
  },
  {
    step: '04',
    title: '打样跟进',
    sources: '打样记录 / 客户反馈 / 修改历史',
    ai: 'Agent 可自动发送节点提醒，记录每轮修改的变更原因',
    limit: '判断是否接受客户改动要求、如何定价修改——这是人的工作',
    risk: '多轮打样没有记录，重复沟通浪费时间，客户失去耐心',
  },
  {
    step: '05',
    title: '生产协调',
    sources: '订单信息 / 工厂排期 / 物料状态',
    ai: 'AI 作用有限，可做进度可视化和异常预警',
    limit: '工厂内部协调本质是人际问题，不是信息问题',
    risk: '对客户的交期承诺和实际生产进度脱节，影响信任',
  },
  {
    step: '06',
    title: '物流跟踪',
    sources: '货代 / 物流平台 API / 港口数据',
    ai: '高度可自动化，API 对接后 Agent 自动推送状态更新给客户',
    limit: '物流异常处理仍需人工介入，尤其是清关问题',
    risk: '客户不知道货在哪——这是最容易被投诉的一个环节',
  },
  {
    step: '07',
    title: '售后与复购',
    sources: '订单历史 / 客户行为 / 沟通记录',
    ai: 'AI 可识别复购信号（如询盘频率上升），自动触发跟进序列',
    limit: '深度客情维护需要真实的人工投入',
    risk: '没有数据沉淀，每个客户都像第一次认识，复购率低',
  },
]

const mistakes = [
  {
    no: '01',
    title: '把 WhatsApp 当 CRM 用',
    body: '信息无法沉淀，离职即失联。一个跟单离职，带走的不只是经验，是全部客户关系记录。这不是员工忠诚度问题，是系统问题。',
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
        <p style={{ fontSize: 18, color: '#888', lineHeight: 1.8, maxWidth: 620, marginBottom: 40 }}>
          大多数出口工厂不缺客户，缺的是一套能撑住增长的系统。跟单靠微信，报价靠 Excel，复盘靠记忆——这套工作流每天都在漏单，只是你不知道漏了多少。
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

      {/* ── WORKFLOW ── */}
      <section style={{ background: '#0c0c0e', padding: '80px 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>
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
        </div>
      </section>

      {/* ── MISTAKES ── */}
      <section style={{ maxWidth: 900, margin: '0 auto', padding: '80px 24px' }}>
        <Label>常见错误</Label>
        <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 48 }}>工厂在外贸跟单上最常犯的 5 个错</h2>
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
          <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 16 }}>你的工厂在哪个阶段？</h2>
          <p style={{ color: '#888', marginBottom: 48, fontSize: 15 }}>跟单自动化不是一步到位的。L0 到 L4，每个阶段有不同的优先级。跨级跳往往失败。</p>
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
            诊断建议：大多数工厂自评 L2，实际在 L1。先做诊断，再做规划。
          </p>
        </div>
      </section>

      {/* ── CASE SIGNALS ── */}
      <section style={{ maxWidth: 900, margin: '0 auto', padding: '80px 24px' }}>
        <Label>案例信号</Label>
        <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 48 }}>真实发生了什么</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          <div style={{ padding: '36px', border: '1px solid #141416', background: '#0c0c0e' }}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: '#f59e0b', letterSpacing: '2px', marginBottom: 20 }}>SANITARY WARE FACTORY · 卫浴工厂</div>
            <p style={{ fontSize: 15, color: '#888', lineHeight: 1.8, marginBottom: 24 }}>
              某卫浴工厂外贸跟单全程人工，从询盘到成单平均 21 天，客户流失集中在第 3-7 天的沉默期。部署跟单 Agent 全链路后，沉默期有自动触发跟进，询盘优先级实时队列化。
            </p>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              {['跟单效率 3×↑', '成单周期 30%↓', 'Agent 全链路'].map((tag) => (
                <span key={tag} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: '#22c55e', border: '1px solid #22c55e', padding: '4px 10px' }}>{tag}</span>
              ))}
            </div>
          </div>
          <div style={{ padding: '36px', border: '1px solid #141416', background: '#0c0c0e' }}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: '#f59e0b', letterSpacing: '2px', marginBottom: 20 }}>FURNITURE EXPORTER · 家具出口</div>
            <p style={{ fontSize: 15, color: '#888', lineHeight: 1.8, marginBottom: 24 }}>
              某家具出口企业内容生产和外贸跟单同时人工操作，外贸团队将大量时间用于写邮件和重复跟进。内容 + 跟单双线 Agent 部署后，同样人力支撑了更大的询盘量。
            </p>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              {['内容产出 5×↑', '响应时间 60%↓', '跟单人力 50%↓'].map((tag) => (
                <span key={tag} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: '#3b82f6', border: '1px solid #3b82f6', padding: '4px 10px' }}>{tag}</span>
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
          60 分钟免费诊断。我们会一起看你的询盘流程，找到第一个值得自动化的环节。不推销，不画饼，只聊你的具体问题。
        </p>
        <Link href="/contact" style={{ display: 'inline-block', background: '#f59e0b', color: '#08080a', padding: '16px 40px', fontWeight: 700, fontSize: 15, textDecoration: 'none', letterSpacing: '0.5px' }}>
          预约诊断 →
        </Link>
      </section>

      {/* ── FOOTER NOTE ── */}
      <div style={{ borderTop: '1px solid #141416', padding: '28px 24px', maxWidth: 900, margin: '0 auto' }}>
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          <Link href="/solutions" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: '#444', textDecoration: 'none', letterSpacing: '1px' }}>← 所有方案</Link>
          <Link href="/solutions/content" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: '#444', textDecoration: 'none', letterSpacing: '1px' }}>多语言内容生产 →</Link>
          <Link href="/cases" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: '#444', textDecoration: 'none', letterSpacing: '1px' }}>查看案例 →</Link>
        </div>
      </div>
    </div>
  )
}
