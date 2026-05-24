import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from '@/components/Nav';

export const metadata: Metadata = {
  title: '数字治理 & Workflow · Makox',
  description: 'AI 跑不起来，99% 是 workflow 先坏了。Makox 帮制造企业完成数据治理、SOP 标准化和 Workflow 重构——AI 能真正跑起来的底座。',
  openGraph: {
    title: 'AI Workflow 治理：数据→SOP→Agent 的正确顺序 · Makox',
    description: '从资料收集到复盘迭代，8 步 Workflow 重构全拆解。为什么 70% 的 AI 项目在 workflow 层失败，以及如何从 L0 走到 L4 就绪度。',
    type: 'article',
  },
};

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: '3px', textTransform: 'uppercase' as const, color: '#f59e0b', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 12 }}>
      <span style={{ display: 'inline-block', width: 32, height: 1, background: '#f59e0b', flexShrink: 0 }} />
      {children}
    </div>
  );
}

const WORKFLOW_STEPS = [
  {
    step: '01',
    title: '资料收集',
    desc: '现有数据、工具、SOP 文档全面盘点',
    ai: 'AI 可以辅助整理文档目录、识别信息缺口，加速现状摸底',
    limit: '需要关键业务负责人亲自参与，AI 无法判断哪些数据是真正被业务信任的',
  },
  {
    step: '02',
    title: '数据清洗',
    desc: '识别可信数据 vs 废数据，建立数据信任地图',
    ai: '可以批量检测数据格式一致性、空值率、重复率，输出数据质量报告',
    limit: '"这个数据为什么没人用"这个问题只有业务人员能回答，技术审计看不出来',
  },
  {
    step: '03',
    title: 'SOP 标准化',
    desc: '关键流程文档化，达到可被他人执行的细度',
    ai: 'AI 可以辅助格式化 SOP 文档、提取关键决策点、生成流程图初稿',
    limit: 'SOP 内容必须由做这个工作的人来写，AI 无法从零生成准确的业务流程文档',
  },
  {
    step: '04',
    title: '权限设计',
    desc: '谁能看什么、谁能改什么、谁能触发什么',
    ai: 'AI 可以基于角色矩阵生成权限建议，识别常见权限设计风险',
    limit: '权限边界涉及组织政治和信任，必须由管理层决策，不能技术先行',
  },
  {
    step: '05',
    title: 'Agent 任务定义',
    desc: '哪些环节适合 Agent 执行，边界和升级规则在哪里',
    ai: '基于前四步的成果，AI 可以辅助生成 Agent 任务描述和 prompt 初稿',
    limit: 'Agent 边界（什么情况下必须转人工）必须由业务负责人拍板，出错的成本由业务承担',
  },
  {
    step: '06',
    title: '触发规则设置',
    desc: '什么条件触发什么动作，异常如何升级到人工',
    ai: 'AI 可以辅助生成触发规则清单，基于历史数据建议合理阈值',
    limit: '阈值设置需要人来验证：太敏感会有大量误报，太宽松会漏掉真正的异常',
  },
  {
    step: '07',
    title: '运行监控',
    desc: 'Agent 执行情况审计，错误预警，性能追踪',
    ai: '高度可自动化：执行日志分析、异常自动@责任人、周报自动汇总',
    limit: '监控指标的定义和告警阈值需要人来设计，监控的是人关心的事而不是技术指标',
  },
  {
    step: '08',
    title: '复盘迭代',
    desc: '定期审查效果，优化触发规则和 SOP，识别新的自动化机会',
    ai: 'AI 可以生成周期性效果报告，自动对比各期指标变化，提示异常趋势',
    limit: '治理是持续运营，不是一次性交付。停止迭代的系统会退化，必须有人持续负责',
  },
];

const LEVERAGE_POINTS = [
  { n: '01', title: '状态变更通知自动化', detail: '订单确认、生产节点到达、物流状态更新——这些状态变更现在靠人主动告知。Agent 可以监听数据变化，自动推送给相关人员，消除"忘了通知"导致的沟通断层。' },
  { n: '02', title: '数据录入自动化', detail: '从邮件正文、表单提交、ERP 导出文件中自动提取结构化数据，录入到正确的系统字段。这类重复性录入工作是数据质量问题的主要来源，自动化后错误率大幅下降。' },
  { n: '03', title: '审批流自动触发', detail: '达到预定条件（如采购金额超阈值、新供应商首单、库存低于安全线）自动发起审批，并附上所有决策所需的上下文信息。不再靠人记住什么时候要提审批。' },
  { n: '04', title: '异常预警自动升级', detail: '超过阈值时自动@责任人并附上问题摘要，不需要人工监控看板。关键是"有用的预警"——只在真正需要人介入时提醒，避免预警疲劳。' },
  { n: '05', title: '报表自动生成', detail: '日报/周报/月报从手工汇总 Excel 改为 Agent 自动生成，管理层打开飞书/邮件就能看到准确的业务快照。这件事做好后，管理层的决策信息质量通常会显著提升。' },
  { n: '06', title: 'SOP 版本推送与确认', detail: 'SOP 有修改时，自动通知所有相关人员，要求阅读确认，留下记录。告别"SOP 更新了但大家不知道"的经典问题，合规审计时也有完整的记录可查。' },
  { n: '07', title: '跨系统数据同步', detail: 'ERP 订单状态 → CRM 自动更新 → 飞书工作台同步显示，消除人工在多个系统之间复制数据的操作。每个手工录入步骤都是一个潜在的错误点和时间浪费。' },
];

const NO_AUTOMATE = [
  { title: '人事决策', body: '招聘录用、晋升评定、绩效打分——这些涉及人的判断必须由人做。AI 可以辅助筛选和整理信息，但最终决定必须由有权限和责任的人做出。把人事决策自动化是在制造法律和道德风险。' },
  { title: '重大供应商变更', body: '涉及战略利益的供应商关系调整（更换主力供应商、长期合同条款谈判）需要高层决策。这类决定的后果往往要数年才能完全显现，不适合让 Agent 基于短期数据自动执行。' },
  { title: '业务方向调整', body: '进入新市场、增减产品线、调整定价策略——这类战略决策需要同时考虑市场、竞争、资源、风险等多个维度，超出了规则驱动的 Agent 的判断边界。' },
  { title: '危机处理', body: '质量事故应对、重大合同纠纷、供应链中断处置——危机情境下的决策高度依赖上下文判断和利益权衡，需要有经验的人介入，不能靠预设规则执行。' },
  { title: '创意内容策略定义', body: '品牌调性确定、营销主题方向、内容风格设计——这类创意策略工作需要人对市场情感和品牌价值有深刻理解。AI 可以生成执行层的内容，但策略框架必须由人来定义。' },
];

const COMPARE_ROWS = [
  { dim: '业务信息在哪里', trad: '人脑、微信聊天记录、各版本 Excel', tool: '工具里但孤岛化，各系统数据不互通', ai: '统一可信数据库，可查询、可分析、可触发' },
  { dim: '流程如何执行', trad: '靠人脑记忆和手动提醒', tool: '部分工具辅助，人工仍是主力', ai: 'Agent 自动执行重复环节，人专注判断' },
  { dim: '异常如何被发现', trad: '出了问题才知道，靠人汇报', tool: '系统告警但滞后，容易漏', ai: '实时预警 + 自动升级，问题浮出前有信号' },
  { dim: '新人如何上手', trad: '老员工手把手带，靠口传', tool: '有文档但不完整，靠追问同事', ai: 'SOP + AI 辅助，新人天级独立上手' },
  { dim: 'AI 就绪度', trad: '完全不就绪，数据不可读', tool: '局部就绪，可点状试点', ai: '全面就绪，Agent 可全流程挂载' },
];

const LAYERS = [
  {
    n: 'Layer 1',
    title: '数据治理',
    sub: '数据可读',
    detail: '结构化 · 清洗 · 打通孤岛',
    breaks: '数据不可读 → Agent无法感知业务现状，一切自动化都是空谈',
    color: '#ef4444',
  },
  {
    n: 'Layer 2',
    title: 'SOP 标准化',
    sub: '流程可复制',
    detail: '文档化 · 版本化 · 可执行',
    breaks: '流程在人脑里 → 员工离职即知识清零，AI无法学习非结构化的隐性知识',
    color: '#f59e0b',
  },
  {
    n: 'Layer 3',
    title: '工具栈选型',
    sub: '工具可联动',
    detail: 'CRM / ERP / 飞书 / Notion 合理配置',
    breaks: '工具各自为政 → 数据分散在多个系统，自动化触发链无法建立',
    color: '#3b82f6',
  },
  {
    n: 'Layer 4',
    title: '流程自动化',
    sub: '重复环节可自动',
    detail: 'Zapier / Make / 自建 webhook',
    breaks: '人工重复操作 → 效率低且容易出错，Agent没有可以托管的环节',
    color: '#22c55e',
  },
  {
    n: 'Layer 5',
    title: 'Agent 部署',
    sub: 'AI 可自主运转',
    detail: '在以上4层就绪后才有效',
    breaks: '底层未就绪就上Agent → AI抓不到数据，判断无依据，半年后必然放弃',
    color: '#a78bfa',
  },
];

const MISTAKES = [
  { n: '01', title: '跳过底层直接上Agent', body: '最常见也最致命的错误。Agent需要数据输入和流程挂载点。如果数据不可读、SOP不存在、工具不联通，Agent只是一个昂贵的聊天机器人。我们见过太多工厂6个月后放弃，原因都是这个。' },
  { n: '02', title: '买了工具但没有使用规范', body: '飞书买了，企业微信也在用，还有钉钉。三套工具，数据分散在三个地方，没有任何使用规范。工具在，数据不在。治理要先于工具投入，而不是买完工具再治理。' },
  { n: '03', title: 'SOP只存在于某个人脑子里', body: '"这个只有李总知道"——这是最危险的状态。那个人离职、生病或忘记，知识清零。AI学不了非结构化的人脑知识，SOP文档化是AI能力释放的前提条件，不是可选项。' },
  { n: '04', title: 'ERP数据和实际业务脱节', body: 'ERP里的数据没有人相信，没有人维护，只用来应付审计。业务实际运行靠微信群、Excel和口头确认。在这种情况下接入AI，AI学到的是错误的业务逻辑。' },
  { n: '05', title: 'IT部门在做数字化，业务部门在用Excel', body: '数字治理项目和实际业务两条线运行。IT交付了系统，业务不用。这是组织问题，不是技术问题。有效的治理必须从业务流程出发，由业务负责人驱动，IT提供支持，而不是相反。' },
  { n: '06', title: '把治理当一次性项目', body: '数字治理不是交付一次就完成的项目，而是持续运营。SOP 会过时，数据会退化，新工具会引入新孤岛。没有人持续负责维护的治理成果，12-18 个月后通常会退回原点。治理是组织能力，不是项目交付物。' },
];

const READINESS = [
  { level: 'L0', color: '#ef4444', title: '全靠人工', desc: '流程完全在个人脑袋里，无任何数字记录。业务状态只有当事人知道。每次交接都是信息损耗。' },
  { level: 'L1', color: '#f59e0b', title: '有工具无规范', desc: '有Excel、ERP或IM工具，但没有使用规范，数据不可信。工具买了，但数据分散、格式不一、无法复用。' },
  { level: 'L2', color: '#3b82f6', title: '部分标准化', desc: '关键流程有SOP文档，核心数据有结构。AI工具有试点，但未规模化，依赖个别人推动。' },
  { level: 'L3', color: '#22c55e', title: '可信数据基础', desc: '核心流程标准化，数据可信可读。AI Agent已处理重复环节，人工专注判断和异常处理。' },
  { level: 'L4', color: '#a78bfa', title: 'AI默认工作方式', desc: 'AI是业务默认工具，不是额外负担。人工专注创意、判断和关系——真正高价值的工作。' },
];

const FAQS = [
  {
    q: '需要ERP才能做AI吗？',
    a: '不是必须，但有ERP会快很多。没有ERP不是障碍，但你需要有某种形式的数据结构——哪怕是规范的Excel也行。关键不是工具，是数据是否有结构、是否可信、是否可以被程序读取。我们服务过没有ERP的工厂，也服务过有完整SAP的企业，后者不一定状态更好。',
  },
  {
    q: '数字治理要多长时间？',
    a: '这是一个没有终点的过程，但有可以快速达到的里程碑。第一个可用里程碑（关键流程有SOP、核心数据可读）：通常6-12周。能够支撑Agent运行的基础：3-6个月。不要期望一次性"治好"——治理是持续维护，不是一次性交付的项目。',
  },
  {
    q: '飞书、企业微信、Notion，怎么选？',
    a: '优先看你的团队实际在哪里协作，而不是哪个工具更强大。飞书适合文档+IM一体化需求、有较复杂审批流程的企业；企业微信适合对接微信生态（销售/客服）的场景；Notion适合知识库和项目管理，但不适合作为主要IM工具。最坏的选择是同时用三个，数据分散是治理的天敌。',
  },
  {
    q: '数据治理一定要找专业公司吗？',
    a: '核心工作必须由内部人推动，外部顾问只能辅助。没有业务负责人的驱动，任何外部项目交付后都会烂尾。我们的工作是帮你建立方法论、识别关键阻塞点、加速实施——但不能替代你的内部ownership。治理失败的项目里，80%是因为内部没有人真正负责。',
  },
  {
    q: 'SOP要写多细才够？',
    a: '够用就好，不要追求完美。一个新员工能看着SOP独立完成这个任务，就是合格的细度。过度细化的SOP没有人维护，会比没有SOP更危险——因为它是错的还有人相信它。重点流程先写，边缘场景后补，定期审查比一次写完更重要。',
  },
  {
    q: '治理完之后AI真的会更好用吗？',
    a: '是的，且差距远比你想象的大。同样的AI模型，在有治理基础的企业里能完成80%的重复性任务；在没有治理的企业里可能只能完成20%。这不是因为AI变强了，而是因为AI终于能读到真实可信的数据、终于有可以挂载的流程节点。治理是AI投资回报率的倍增器。',
  },
  {
    q: '数字治理和 ERP 实施有什么区别？',
    a: 'ERP 实施是部署一套系统。数字治理是让业务流程和数据变得可信、可用、可自动化。两者不互斥——ERP 可以是治理的工具之一，但 ERP 上线不等于治理完成。我们见过很多企业 ERP 用了 5 年，数据仍然不可信，因为没有配套的使用规范和数据维护机制。治理是行为改变，不只是系统部署。',
  },
  {
    q: '中小企业做治理，需要几个人专职负责？',
    a: '通常不需要专职人员，但需要一个有真实决策权的业务负责人（不一定是 IT）担任 Workflow Owner，每周投入 4-8 小时。核心问题不是人力投入多少，而是这个人有没有权限推动业务部门配合。我们的经验是：治理成功的企业，都有一个愿意推动改变的内部 Champion，而不只是配合 IT 项目的协调员。',
  },
];

export default function WorkflowSolutionsPage() {
  return (
    <div style={{ background: '#08080a', color: '#e4e2dc', minHeight: '100vh', fontFamily: "'Instrument Sans', 'Noto Sans SC', sans-serif" }}>
      <Nav />

      {/* Hero */}
      <section style={{ maxWidth: 960, margin: '0 auto', padding: '120px 32px 80px' }}>
        <Label>Digital Governance</Label>
        <h1 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 700, lineHeight: 1.1, margin: '0 0 24px', letterSpacing: '-0.02em' }}>
          AI 跑不起来，<br />99% 是 workflow 先坏了
        </h1>
        <p style={{ fontSize: 18, color: '#888', maxWidth: 620, lineHeight: 1.8, margin: '0 0 20px' }}>
          我们见过太多工厂花钱买了 AI 工具，然后发现没法用。不是模型不够强，是数据读不出来、SOP 不存在、业务流程全在人脑袋里。在部署 Agent 之前，workflow 必须先治好。
        </p>
        <p style={{ fontSize: 15, color: '#555', lineHeight: 1.8, maxWidth: 620, fontStyle: 'italic', borderLeft: '2px solid #f59e0b', paddingLeft: 16, margin: '0 0 40px' }}>
          Workflow 治理不是部署一套新工具，而是让业务数据从不可信变成可信、让隐性流程从人脑变成文档、让重复操作从手工变成自动——这三件事做到，AI 才有地方跑。
        </p>
        <Link href="/contact" style={{ display: 'inline-block', background: '#f59e0b', color: '#08080a', padding: '14px 32px', fontWeight: 700, fontSize: 14, letterSpacing: '1px', textDecoration: 'none', fontFamily: "'JetBrains Mono', monospace" }}>
          诊断你的Workflow状态 →
        </Link>

        {/* Stats bar */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 1, marginTop: 64, background: '#141416' }}>
          {[
            { v: '>70%', l: '制造业AI项目失败率' },
            { v: '58%', l: '主因：数据质量问题' },
            { v: '<30%', l: '平均SOP文档覆盖率' },
            { v: '5–12个', l: '典型企业信息孤岛数量' },
          ].map((s) => (
            <div key={s.v} style={{ background: '#0c0c0e', padding: '28px 24px' }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 28, fontWeight: 700, color: '#f59e0b', marginBottom: 8 }}>{s.v}</div>
              <div style={{ fontSize: 12, color: '#888', lineHeight: 1.4 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Definition */}
      <section style={{ maxWidth: 960, margin: '0 auto', padding: '80px 32px' }}>
        <Label>为什么AI在你的工厂跑不起来</Label>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 1, background: '#141416' }}>
          {[
            { t: '数据问题', b: 'AI的本质是对数据的推理。如果数据分散在微信群、口头沟通和人脑记忆里，AI根本无法读取。结构化、可信、可访问的数据是一切的前提。' },
            { t: '流程问题', b: '没有文档化SOP的流程，AI无法学习和执行。人脑的隐性知识不可被复制，业务流程必须先被显式化，才能被自动化。' },
            { t: '工具问题', b: '工具买了不用，或者用了但孤岛化。飞书、企业微信、ERP各自为政，没有联通，自动化触发链无法建立。' },
            { t: '正确路径', b: '先治数据，再标准化流程，再选工具，再自动化，最后才是Agent。跳过任何一层，上面的层都会崩塌。这是一个不能压缩的顺序。' },
          ].map((d) => (
            <div key={d.t} style={{ background: '#0c0c0e', padding: '32px 28px' }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: '#f59e0b', letterSpacing: '2px', textTransform: 'uppercase' as const, marginBottom: 12 }}>{d.t}</div>
              <p style={{ fontSize: 15, color: '#888', lineHeight: 1.7, margin: 0 }}>{d.b}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8-step workflow */}
      <section style={{ maxWidth: 960, margin: '0 auto', padding: '0 32px 80px' }}>
        <Label>Workflow 重构八步</Label>
        <h2 style={{ fontSize: 'clamp(20px,3vw,32px)', fontWeight: 700, marginBottom: 8, letterSpacing: '-0.02em' }}>从资料收集到复盘迭代：完整路径</h2>
        <p style={{ fontSize: 14, color: '#888', marginBottom: 36, maxWidth: 560 }}>每一步都有 AI 可以介入的地方，也有必须人工判断的边界。</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {WORKFLOW_STEPS.map((s) => (
            <div key={s.step} style={{ background: '#0c0c0e', padding: '22px 28px', display: 'grid', gridTemplateColumns: '52px 1fr', gap: 20, border: '1px solid #141416' }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, color: '#444', paddingTop: 4 }}>{s.step}</div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 15, color: '#e4e2dc', marginBottom: 4 }}>{s.title}</div>
                <div style={{ fontSize: 12, color: '#888', fontFamily: "'JetBrains Mono', monospace", marginBottom: 10 }}>{s.desc}</div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div>
                    <div style={{ fontSize: 11, color: '#f59e0b', letterSpacing: '2px', marginBottom: 6, fontFamily: "'JetBrains Mono', monospace" }}>AI 可做</div>
                    <div style={{ fontSize: 13, color: '#e4e2dc', lineHeight: 1.6 }}>{s.ai}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: 11, color: '#444', letterSpacing: '2px', marginBottom: 6, fontFamily: "'JetBrains Mono', monospace" }}>人工边界</div>
                    <div style={{ fontSize: 13, color: '#666', lineHeight: 1.6 }}>{s.limit}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5-layer framework */}
      <section style={{ maxWidth: 960, margin: '0 auto', padding: '0 32px 80px' }}>
        <Label>五层治理架构</Label>
        <p style={{ fontSize: 14, color: '#444', fontFamily: "'JetBrains Mono', monospace", marginBottom: 32 }}>从底层开始构建。每一层都是上一层的前提。</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 1, background: '#141416' }}>
          {LAYERS.map((l, i) => (
            <div key={l.n} style={{ background: '#0c0c0e', padding: '28px 32px', display: 'grid', gridTemplateColumns: '80px 1fr 1fr', gap: 24, alignItems: 'start', borderLeft: `3px solid ${l.color}` }}>
              <div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: l.color, letterSpacing: '2px', textTransform: 'uppercase' as const, marginBottom: 4 }}>{l.n}</div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: '#444' }}>第{['一', '二', '三', '四', '五'][i]}层</div>
              </div>
              <div>
                <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 4 }}>{l.title}</div>
                <div style={{ fontSize: 12, color: l.color, fontFamily: "'JetBrains Mono', monospace", marginBottom: 8 }}>{l.sub}</div>
                <div style={{ fontSize: 13, color: '#888' }}>{l.detail}</div>
              </div>
              <div style={{ background: '#141416', padding: '14px 16px', borderLeft: '2px solid #ef4444' }}>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: '#ef4444', letterSpacing: '1px', textTransform: 'uppercase' as const, marginBottom: 6 }}>缺失会怎样</div>
                <p style={{ fontSize: 13, color: '#888', lineHeight: 1.6, margin: 0 }}>{l.breaks}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AI Leverage Points */}
      <section style={{ maxWidth: 960, margin: '0 auto', padding: '0 32px 80px' }}>
        <Label>AI 价值杠杆</Label>
        <h2 style={{ fontSize: 'clamp(20px,3vw,32px)', fontWeight: 700, marginBottom: 8, letterSpacing: '-0.02em' }}>Workflow 就绪后，AI 最能发力的 7 个环节</h2>
        <p style={{ fontSize: 14, color: '#888', marginBottom: 36 }}>这些是底层治理完成后，ROI 最高的自动化切入点。</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {LEVERAGE_POINTS.map(item => (
            <div key={item.n} style={{ background: '#0c0c0e', padding: '22px 28px', display: 'grid', gridTemplateColumns: '48px 1fr', gap: 20, border: '1px solid #141416' }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: '#f59e0b', paddingTop: 2 }}>{item.n}</div>
              <div>
                <div style={{ fontSize: 15, fontWeight: 600, color: '#e4e2dc', marginBottom: 8 }}>{item.title}</div>
                <div style={{ fontSize: 14, color: '#888', lineHeight: 1.7 }}>{item.detail}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What NOT to automate */}
      <section style={{ maxWidth: 960, margin: '0 auto', padding: '0 32px 80px' }}>
        <Label>Do Not Automate · 不该自动化的事</Label>
        <h2 style={{ fontSize: 'clamp(20px,3vw,32px)', fontWeight: 700, marginBottom: 8, letterSpacing: '-0.02em' }}>这 5 件事必须留给人来做</h2>
        <p style={{ fontSize: 14, color: '#888', marginBottom: 36 }}>知道 AI 的边界，和知道 AI 能做什么同样重要。越过这些边界会产生真实的业务和法律风险。</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {NO_AUTOMATE.map((item, i) => (
            <div key={i} style={{ background: '#0c0c0e', padding: '24px 28px', display: 'grid', gridTemplateColumns: '12px 1fr', gap: 20, alignItems: 'start', border: '1px solid #141416' }}>
              <div style={{ width: 8, height: 8, background: '#3b82f6', marginTop: 6, flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: 15, fontWeight: 700, color: '#e4e2dc', marginBottom: 8 }}>{item.title}</div>
                <div style={{ fontSize: 14, color: '#888', lineHeight: 1.7 }}>{item.body}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison table */}
      <section style={{ maxWidth: 960, margin: '0 auto', padding: '0 32px 80px' }}>
        <Label>对比视角</Label>
        <h2 style={{ fontSize: 'clamp(20px,3vw,32px)', fontWeight: 700, marginBottom: 36, letterSpacing: '-0.02em' }}>传统 / 工具化 / AI-native：三种企业运作方式</h2>
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
              {COMPARE_ROWS.map((row, i) => (
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

      {/* Common mistakes */}
      <section style={{ maxWidth: 960, margin: '0 auto', padding: '0 32px 80px' }}>
        <Label>我们见过最多的六个错误</Label>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {MISTAKES.map((m) => (
            <div key={m.n} style={{ background: '#0c0c0e', border: '1px solid #141416', borderLeft: '3px solid #ef4444', padding: '24px 28px', display: 'grid', gridTemplateColumns: '48px 1fr', gap: 20 }}>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: '#444', paddingTop: 4 }}>{m.n}</span>
              <div>
                <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 8 }}>{m.title}</div>
                <p style={{ fontSize: 14, color: '#888', lineHeight: 1.6, margin: 0 }}>{m.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Readiness model */}
      <section style={{ maxWidth: 960, margin: '0 auto', padding: '0 32px 80px' }}>
        <Label>Workflow就绪度模型</Label>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 1, background: '#141416' }}>
          {READINESS.map((r) => (
            <div key={r.level} style={{ background: '#0c0c0e', padding: '24px 28px', display: 'grid', gridTemplateColumns: '64px 180px 1fr', gap: 24, alignItems: 'start' }}>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 14, fontWeight: 700, color: r.color }}>{r.level}</span>
              <span style={{ fontSize: 14, fontWeight: 700 }}>{r.title}</span>
              <p style={{ fontSize: 14, color: '#888', lineHeight: 1.6, margin: 0 }}>{r.desc}</p>
            </div>
          ))}
        </div>
        <p style={{ fontSize: 13, color: '#444', marginTop: 16, fontFamily: "'JetBrains Mono', monospace" }}>找我们诊断的企业中，70%在L1。我们的目标是帮你到L3，让Agent真正有地方跑。</p>
      </section>

      {/* Case signal */}
      <section style={{ maxWidth: 960, margin: '0 auto', padding: '0 32px 80px' }}>
        <Label>案例信号</Label>
        <div style={{ background: '#0c0c0e', border: '1px solid #141416', borderLeft: '3px solid #f59e0b', padding: '40px 40px' }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: '#f59e0b', letterSpacing: '2px', textTransform: 'uppercase' as const, marginBottom: 20 }}>华东卫浴工厂 · Workflow重构</div>
          <p style={{ fontSize: 16, lineHeight: 1.9, color: '#888', margin: '0 0 20px' }}>
            这家卫浴工厂员工200人，ERP已用5年。问题是：ERP里的数据没有任何人相信——采购用Excel管库存，销售用微信群确认交期，生产进度靠车间主任每天口头汇报。花了钱，有系统，但信息孤岛比没有系统时更多。
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.9, color: '#888', margin: '0 0 20px' }}>
            我们从数据信任度诊断开始。不是修ERP，而是先搞清楚哪些数据是可信的、哪些是没人维护的废数据、业务决策实际上在哪里发生。然后从最高频、最痛的三个流程（订单确认→生产排期→物流跟踪）入手，重建SOP，接入飞书，用Webhook打通ERP和飞书审批流。
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.9, color: '#888', margin: '0 0 32px' }}>
            三个月后，这三个流程里的重复性操作被Agent全部接管：订单进来自动触发排期建议，物流状态自动同步到客服飞书，异常自动@相关责任人。不是因为AI变强了，而是因为AI终于有可信的数据可以读取了。
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 1, background: '#141416' }}>
            {[
              { v: '3个月', l: '核心流程重构周期' },
              { v: '80%', l: '重复操作自动化覆盖率' },
              { v: '数据可信', l: 'ERP数据被业务重新采用' },
            ].map((s) => (
              <div key={s.v} style={{ background: '#0c0c0e', padding: '20px 20px' }}>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 22, fontWeight: 700, color: '#f59e0b', marginBottom: 6 }}>{s.v}</div>
                <div style={{ fontSize: 12, color: '#888' }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ maxWidth: 960, margin: '0 auto', padding: '0 32px 80px' }}>
        <Label>常见问题</Label>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 1, background: '#141416' }}>
          {FAQS.map((f) => (
            <div key={f.q} style={{ background: '#0c0c0e', padding: '28px 32px' }}>
              <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 12, color: '#e4e2dc' }}>{f.q}</div>
              <p style={{ fontSize: 14, color: '#888', lineHeight: 1.75, margin: 0 }}>{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ maxWidth: 960, margin: '0 auto', padding: '0 32px 80px' }}>
        <div style={{ background: '#0c0c0e', border: '1px solid #141416', padding: '64px 48px', textAlign: 'center' as const }}>
          <Label>如果你是认真的</Label>
          <h2 style={{ fontSize: 'clamp(24px, 4vw, 40px)', fontWeight: 700, margin: '0 0 16px', letterSpacing: '-0.02em' }}>
            我们聊聊
          </h2>
          <p style={{ fontSize: 16, color: '#888', maxWidth: 520, margin: '0 auto 40px', lineHeight: 1.7 }}>
            60分钟Workflow诊断。我们会帮你识别当前最大的数据/流程瓶颈，告诉你现在在哪个就绪度层级，以及让AI真正跑起来需要优先解决的一件事。
          </p>
          <Link href="/contact" style={{ display: 'inline-block', background: '#f59e0b', color: '#08080a', padding: '16px 40px', fontWeight: 700, fontSize: 14, letterSpacing: '1px', textDecoration: 'none', fontFamily: "'JetBrains Mono', monospace" }}>
            预约诊断 →
          </Link>
          <p style={{ fontSize: 12, color: '#444', marginTop: 20, fontFamily: "'JetBrains Mono', monospace" }}>先把workflow治好，再谈agent。</p>
        </div>
      </section>

      {/* Footer links */}
      <div style={{ borderTop: '1px solid #141416', padding: '28px 32px', maxWidth: 960, margin: '0 auto 48px' }}>
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' as const }}>
          <Link href="/solutions" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: '#444', textDecoration: 'none', letterSpacing: '1px' }}>← 所有方案</Link>
          <Link href="/services/governance" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: '#444', textDecoration: 'none', letterSpacing: '1px' }}>数字治理服务 →</Link>
          <Link href="/services/agent" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: '#444', textDecoration: 'none', letterSpacing: '1px' }}>Agent 部署服务 →</Link>
          <Link href="/solutions/trade" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: '#444', textDecoration: 'none', letterSpacing: '1px' }}>外贸跟单自动化 →</Link>
          <Link href="/solutions/content" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: '#444', textDecoration: 'none', letterSpacing: '1px' }}>多语言内容生产 →</Link>
        </div>
      </div>
    </div>
  );
}
