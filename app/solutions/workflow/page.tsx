import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from '@/components/Nav';

export const metadata: Metadata = {
  title: '数字治理 & Workflow · Makox',
  description: 'AI 跑不起来，99% 是 workflow 先坏了。Makox 帮制造企业完成数据治理、SOP 标准化和 Workflow 重构——AI 能真正跑起来的底座。',
};

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: "3px", textTransform: "uppercase" as const, color: "#f59e0b", marginBottom: 20, display: "flex", alignItems: "center", gap: 12 }}>
      <span style={{ display: "inline-block", width: 32, height: 1, background: "#f59e0b", flexShrink: 0 }} />
      {children}
    </div>
  );
}

const LAYERS = [
  {
    n: "Layer 1",
    title: "数据治理",
    sub: "数据可读",
    detail: "结构化 · 清洗 · 打通孤岛",
    breaks: "数据不可读 → Agent无法感知业务现状，一切自动化都是空谈",
    color: "#ef4444",
  },
  {
    n: "Layer 2",
    title: "SOP 标准化",
    sub: "流程可复制",
    detail: "文档化 · 版本化 · 可执行",
    breaks: "流程在人脑里 → 员工离职即知识清零，AI无法学习非结构化的隐性知识",
    color: "#f59e0b",
  },
  {
    n: "Layer 3",
    title: "工具栈选型",
    sub: "工具可联动",
    detail: "CRM / ERP / 飞书 / Notion 合理配置",
    breaks: "工具各自为政 → 数据分散在多个系统，自动化触发链无法建立",
    color: "#3b82f6",
  },
  {
    n: "Layer 4",
    title: "流程自动化",
    sub: "重复环节可自动",
    detail: "Zapier / Make / 自建 webhook",
    breaks: "人工重复操作 → 效率低且容易出错，Agent没有可以托管的环节",
    color: "#22c55e",
  },
  {
    n: "Layer 5",
    title: "Agent 部署",
    sub: "AI 可自主运转",
    detail: "在以上4层就绪后才有效",
    breaks: "底层未就绪就上Agent → AI抓不到数据，判断无依据，半年后必然放弃",
    color: "#a78bfa",
  },
];

const MISTAKES = [
  { n: "01", title: "跳过底层直接上Agent", body: "最常见也最致命的错误。Agent需要数据输入和流程挂载点。如果数据不可读、SOP不存在、工具不联通，Agent只是一个昂贵的聊天机器人。我们见过太多工厂6个月后放弃，原因都是这个。" },
  { n: "02", title: "买了工具但没有使用规范", body: "飞书买了，企业微信也在用，还有钉钉。三套工具，数据分散在三个地方，没有任何使用规范。工具在，数据不在。治理要先于工具投入，而不是买完工具再治理。" },
  { n: "03", title: "SOP只存在于某个人脑子里", body: "\"这个只有李总知道\"——这是最危险的状态。那个人离职、生病或忘记，知识清零。AI学不了非结构化的人脑知识，SOP文档化是AI能力释放的前提条件，不是可选项。" },
  { n: "04", title: "ERP数据和实际业务脱节", body: "ERP里的数据没有人相信，没有人维护，只用来应付审计。业务实际运行靠微信群、Excel和口头确认。在这种情况下接入AI，AI学到的是错误的业务逻辑。" },
  { n: "05", title: "IT部门在做数字化，业务部门在用Excel", body: "数字治理项目和实际业务两条线运行。IT交付了系统，业务不用。这是组织问题，不是技术问题。有效的治理必须从业务流程出发，由业务负责人驱动，IT提供支持，而不是相反。" },
];

const READINESS = [
  { level: "L0", color: "#ef4444", title: "全靠人工", desc: "流程完全在个人脑袋里，无任何数字记录。业务状态只有当事人知道。每次交接都是信息损耗。" },
  { level: "L1", color: "#f59e0b", title: "有工具无规范", desc: "有Excel、ERP或IM工具，但没有使用规范，数据不可信。工具买了，但数据分散、格式不一、无法复用。" },
  { level: "L2", color: "#3b82f6", title: "部分标准化", desc: "关键流程有SOP文档，核心数据有结构。AI工具有试点，但未规模化，依赖个别人推动。" },
  { level: "L3", color: "#22c55e", title: "可信数据基础", desc: "核心流程标准化，数据可信可读。AI Agent已处理重复环节，人工专注判断和异常处理。" },
  { level: "L4", color: "#a78bfa", title: "AI默认工作方式", desc: "AI是业务默认工具，不是额外负担。人工专注创意、判断和关系——真正高价值的工作。" },
];

const FAQS = [
  {
    q: "需要ERP才能做AI吗？",
    a: "不是必须，但有ERP会快很多。没有ERP不是障碍，但你需要有某种形式的数据结构——哪怕是规范的Excel也行。关键不是工具，是数据是否有结构、是否可信、是否可以被程序读取。我们服务过没有ERP的工厂，也服务过有完整SAP的企业，后者不一定状态更好。"
  },
  {
    q: "数字治理要多长时间？",
    a: "这是一个没有终点的过程，但有可以快速达到的里程碑。第一个可用里程碑（关键流程有SOP、核心数据可读）：通常6-12周。能够支撑Agent运行的基础：3-6个月。不要期望一次性\"治好\"——治理是持续维护，不是一次性交付的项目。"
  },
  {
    q: "飞书、企业微信、Notion，怎么选？",
    a: "优先看你的团队实际在哪里协作，而不是哪个工具更强大。飞书适合文档+IM一体化需求、有较复杂审批流程的企业；企业微信适合对接微信生态（销售/客服）的场景；Notion适合知识库和项目管理，但不适合作为主要IM工具。最坏的选择是同时用三个，数据分散是治理的天敌。"
  },
  {
    q: "数据治理一定要找专业公司吗？",
    a: "核心工作必须由内部人推动，外部顾问只能辅助。没有业务负责人的驱动，任何外部项目交付后都会烂尾。我们的工作是帮你建立方法论、识别关键阻塞点、加速实施——但不能替代你的内部ownership。治理失败的项目里，80%是因为内部没有人真正负责。"
  },
  {
    q: "SOP要写多细才够？",
    a: "够用就好，不要追求完美。一个新员工能看着SOP独立完成这个任务，就是合格的细度。过度细化的SOP没有人维护，会比没有SOP更危险——因为它是错的还有人相信它。重点流程先写，边缘场景后补，定期审查比一次写完更重要。"
  },
  {
    q: "治理完之后AI真的会更好用吗？",
    a: "是的，且差距远比你想象的大。同样的AI模型，在有治理基础的企业里能完成80%的重复性任务；在没有治理的企业里可能只能完成20%。这不是因为AI变强了，而是因为AI终于能读到真实可信的数据、终于有可以挂载的流程节点。治理是AI投资回报率的倍增器。"
  },
];

export default function WorkflowSolutionsPage() {
  return (
    <div style={{ background: "#08080a", color: "#e4e2dc", minHeight: "100vh", fontFamily: "'Instrument Sans', 'Noto Sans SC', sans-serif" }}>
      <Nav />

      {/* Hero */}
      <section style={{ maxWidth: 960, margin: "0 auto", padding: "120px 32px 80px" }}>
        <Label>Digital Governance</Label>
        <h1 style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 700, lineHeight: 1.1, margin: "0 0 24px", letterSpacing: "-0.02em" }}>
          AI 跑不起来，<br />99% 是 workflow 先坏了
        </h1>
        <p style={{ fontSize: 18, color: "#888", maxWidth: 620, lineHeight: 1.8, margin: "0 0 40px" }}>
          我们见过太多工厂花钱买了 AI 工具，然后发现没法用。不是模型不够强，是数据读不出来、SOP 不存在、业务流程全在人脑袋里。在部署 Agent 之前，workflow 必须先治好。
        </p>
        <Link href="/contact" style={{ display: "inline-block", background: "#f59e0b", color: "#08080a", padding: "14px 32px", fontWeight: 700, fontSize: 14, letterSpacing: "1px", textDecoration: "none", fontFamily: "'JetBrains Mono', monospace" }}>
          诊断你的Workflow状态 →
        </Link>

        {/* Stats bar */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 1, marginTop: 64, background: "#141416" }}>
          {[
            { v: ">70%", l: "制造业AI项目失败率" },
            { v: "58%", l: "主因：数据质量问题" },
            { v: "<30%", l: "平均SOP文档覆盖率" },
            { v: "5–12个", l: "典型企业信息孤岛数量" },
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
        <Label>为什么AI在你的工厂跑不起来</Label>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 1, background: "#141416" }}>
          {[
            { t: "数据问题", b: "AI的本质是对数据的推理。如果数据分散在微信群、口头沟通和人脑记忆里，AI根本无法读取。结构化、可信、可访问的数据是一切的前提。" },
            { t: "流程问题", b: "没有文档化SOP的流程，AI无法学习和执行。人脑的隐性知识不可被复制，业务流程必须先被显式化，才能被自动化。" },
            { t: "工具问题", b: "工具买了不用，或者用了但孤岛化。飞书、企业微信、ERP各自为政，没有联通，自动化触发链无法建立。" },
            { t: "正确路径", b: "先治数据，再标准化流程，再选工具，再自动化，最后才是Agent。跳过任何一层，上面的层都会崩塌。这是一个不能压缩的顺序。" },
          ].map((d) => (
            <div key={d.t} style={{ background: "#0c0c0e", padding: "32px 28px" }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "#f59e0b", letterSpacing: "2px", textTransform: "uppercase", marginBottom: 12 }}>{d.t}</div>
              <p style={{ fontSize: 15, color: "#888", lineHeight: 1.7, margin: 0 }}>{d.b}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5-layer framework */}
      <section style={{ maxWidth: 960, margin: "0 auto", padding: "0 32px 80px" }}>
        <Label>五层治理架构</Label>
        <p style={{ fontSize: 14, color: "#444", fontFamily: "'JetBrains Mono', monospace", marginBottom: 32 }}>从底层开始构建。每一层都是上一层的前提。</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 1, background: "#141416" }}>
          {LAYERS.map((l, i) => (
            <div key={l.n} style={{ background: "#0c0c0e", padding: "28px 32px", display: "grid", gridTemplateColumns: "80px 1fr 1fr", gap: 24, alignItems: "start", borderLeft: `3px solid ${l.color}` }}>
              <div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: l.color, letterSpacing: "2px", textTransform: "uppercase", marginBottom: 4 }}>{l.n}</div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "#444" }}>第{['一','二','三','四','五'][i]}层</div>
              </div>
              <div>
                <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 4 }}>{l.title}</div>
                <div style={{ fontSize: 12, color: l.color, fontFamily: "'JetBrains Mono', monospace", marginBottom: 8 }}>{l.sub}</div>
                <div style={{ fontSize: 13, color: "#888" }}>{l.detail}</div>
              </div>
              <div style={{ background: "#141416", padding: "14px 16px", borderLeft: "2px solid #ef4444" }}>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "#ef4444", letterSpacing: "1px", textTransform: "uppercase", marginBottom: 6 }}>缺失会怎样</div>
                <p style={{ fontSize: 13, color: "#888", lineHeight: 1.6, margin: 0 }}>{l.breaks}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Common mistakes */}
      <section style={{ maxWidth: 960, margin: "0 auto", padding: "0 32px 80px" }}>
        <Label>我们见过最多的五个错误</Label>
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
        <Label>Workflow就绪度模型</Label>
        <div style={{ display: "flex", flexDirection: "column", gap: 1, background: "#141416" }}>
          {READINESS.map((r) => (
            <div key={r.level} style={{ background: "#0c0c0e", padding: "24px 28px", display: "grid", gridTemplateColumns: "64px 180px 1fr", gap: 24, alignItems: "start" }}>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 14, fontWeight: 700, color: r.color }}>{r.level}</span>
              <span style={{ fontSize: 14, fontWeight: 700 }}>{r.title}</span>
              <p style={{ fontSize: 14, color: "#888", lineHeight: 1.6, margin: 0 }}>{r.desc}</p>
            </div>
          ))}
        </div>
        <p style={{ fontSize: 13, color: "#444", marginTop: 16, fontFamily: "'JetBrains Mono', monospace" }}>找我们诊断的企业中，70%在L1。我们的目标是帮你到L3，让Agent真正有地方跑。</p>
      </section>

      {/* Case signal */}
      <section style={{ maxWidth: 960, margin: "0 auto", padding: "0 32px 80px" }}>
        <Label>案例信号</Label>
        <div style={{ background: "#0c0c0e", border: "1px solid #141416", borderLeft: "3px solid #f59e0b", padding: "40px 40px" }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "#f59e0b", letterSpacing: "2px", textTransform: "uppercase", marginBottom: 20 }}>华东卫浴工厂 · Workflow重构</div>
          <p style={{ fontSize: 16, lineHeight: 1.9, color: "#888", margin: "0 0 20px" }}>
            这家卫浴工厂员工200人，ERP已用5年。问题是：ERP里的数据没有任何人相信——采购用Excel管库存，销售用微信群确认交期，生产进度靠车间主任每天口头汇报。花了钱，有系统，但信息孤岛比没有系统时更多。
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.9, color: "#888", margin: "0 0 20px" }}>
            我们从数据信任度诊断开始。不是修ERP，而是先搞清楚哪些数据是可信的、哪些是没人维护的废数据、业务决策实际上在哪里发生。然后从最高频、最痛的三个流程（订单确认→生产排期→物流跟踪）入手，重建SOP，接入飞书，用Webhook打通ERP和飞书审批流。
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.9, color: "#888", margin: "0 0 32px" }}>
            三个月后，这三个流程里的重复性操作被Agent全部接管：订单进来自动触发排期建议，物流状态自动同步到客服飞书，异常自动@相关责任人。不是因为AI变强了，而是因为AI终于有可信的数据可以读取了。
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 1, background: "#141416" }}>
            {[
              { v: "3个月", l: "核心流程重构周期" },
              { v: "80%", l: "重复操作自动化覆盖率" },
              { v: "数据可信", l: "ERP数据被业务重新采用" },
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
          <p style={{ fontSize: 16, color: "#888", maxWidth: 520, margin: "0 auto 40px", lineHeight: 1.7 }}>
            60分钟Workflow诊断。我们会帮你识别当前最大的数据/流程瓶颈，告诉你现在在哪个就绪度层级，以及让AI真正跑起来需要优先解决的一件事。
          </p>
          <Link href="/contact" style={{ display: "inline-block", background: "#f59e0b", color: "#08080a", padding: "16px 40px", fontWeight: 700, fontSize: 14, letterSpacing: "1px", textDecoration: "none", fontFamily: "'JetBrains Mono', monospace" }}>
            预约诊断 →
          </Link>
          <p style={{ fontSize: 12, color: "#444", marginTop: 20, fontFamily: "'JetBrains Mono', monospace" }}>先把workflow治好，再谈agent。</p>
        </div>
      </section>
    </div>
  );
}
