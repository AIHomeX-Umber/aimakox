"use client";

import { useEffect, useState } from "react";
import "./digital-employees.css";

type FilterTab = "全部员工" | "已上线" | "即将部署" | "规划中";
const filterTabs: FilterTab[] = ["全部员工", "已上线", "即将部署", "规划中"];

const terminalMessages = [
  "Harbor 在线 · 美国海关 5H 查验急诊分析已就绪",
  "Spec 即将部署 · 产品资料结构化模块准备中",
  "Hunter 即将部署 · 市场与客户开发模块准备中",
  "Hype 即将部署 · 客户沟通内容生成模块准备中",
  "制造业出海前端闭环 · Spec → Hunter → Hype",
  "V2 Guard & Odd 规划中 · 风险合规与创意差异化",
];

const activities = [
  {
    tag: "Harbor",
    tagBg: "rgba(15, 110, 86, 0.25)",
    tagColor: "#0FC97A",
    main: "帮助某家具出口企业整理 5H 查验补充资料，生成英文邮件模板和 72 小时行动清单",
    meta: "海运合规 · 5H Hold · Action Report",
    result: "✓ 报告已交付",
    resultColor: "#5eefb0",
  },
  {
    tag: "Spec",
    tagBg: "rgba(99, 91, 255, 0.15)",
    tagColor: "#a89dff",
    main: "完成卫浴工厂 120+ SKU 数据结构化，输出英文产品卡和参数对比表",
    meta: "产品资料 · B2B 出海 · Product Data",
    result: "✓ 可发布",
    resultColor: "#5eefb0",
  },
  {
    tag: "Hunter",
    tagBg: "rgba(255, 209, 102, 0.15)",
    tagColor: "#ffd166",
    main: "完成欧洲花园家具市场竞品拆解，识别 3 个未被满足的价格区间",
    meta: "市场分析 · Export Strategy",
    result: "☐ 待客户确认",
    resultColor: "#ffd166",
  },
  {
    tag: "Hype",
    tagBg: "rgba(255, 107, 157, 0.15)",
    tagColor: "#ff6b9d",
    main: "重写了某五金工厂全线产品英文卖点，输出 Amazon A+ Content 和独立站产品页文案",
    meta: "内容与沟通 · Product Positioning",
    result: "✓ 可发布",
    resultColor: "#5eefb0",
  },
];

export default function DigitalEmployeesPage() {
  const [activeFilter, setActiveFilter] = useState<FilterTab>("全部员工");
  const [messageIndex, setMessageIndex] = useState(0);
  const [terminalVisible, setTerminalVisible] = useState(true);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTerminalVisible(false);
      window.setTimeout(() => {
        setMessageIndex((i) => (i + 1) % terminalMessages.length);
        setTerminalVisible(true);
      }, 320);
    }, 4000);
    return () => window.clearInterval(interval);
  }, []);

  const showLive = activeFilter === "全部员工" || activeFilter === "已上线";
  const showComing = activeFilter === "全部员工" || activeFilter === "即将部署";
  const showPlanned = activeFilter === "全部员工" || activeFilter === "规划中";

  return (
    <div className="digital-employees-page">
      <div className="grid-bg" />
      <div className="scanline" />

      <div className="container">
        {/* NAV */}
        <nav>
          <a className="logo" href="/">
            MAK<span className="accent">OX</span>
            <span className="logo-sep">|</span>
            <span className="logo-version">v0.5</span>
          </a>
          <div className="nav-right">
            <a href="/" className="nav-link">返回首页</a>
            <a href="/digital-employees" className="nav-link">数字员工</a>
            <a href="https://makox.ai/harbor/emergency" className="nav-link nav-link-harbor" target="_blank" rel="noopener noreferrer">Harbor 急诊</a>
            <a href="https://opceo.ai" className="nav-link" target="_blank" rel="noopener noreferrer">OPCEO.AI</a>
            <div className="nav-status">
              <div className="pulse-dot" />
              HARBOR ONLINE
            </div>
          </div>
        </nav>

        {/* HERO */}
        <div className="hero-new">
          <div className="eyebrow">// Makox 数字员工系统 · Manufacturing Export AI Workforce</div>
          <h1 className="hero-title-new">
            为制造业出海<br />
            部署 AI 员工团队。
          </h1>
          <p className="hero-sub-new">
            不是助手，不是聊天机器人。<br />
            是你出海业务线上的执行层 ——<br />
            从海运合规、产品资料到客户沟通，<br />
            每一位数字员工围绕一个可交付结果工作。
          </p>
          <div className="hero-btns">
            <button className="btn-primary" type="button">预约 AI 工作流诊断</button>
            <a className="btn-teal" href="https://makox.ai/harbor/emergency" target="_blank" rel="noopener noreferrer">了解 Harbor →</a>
          </div>
        </div>

        {/* STATS BAR */}
        <div className="stats-bar">
          <div className="stat-item">
            <div className="stat-val sv-green">¥100万+</div>
            <div className="stat-label">早期收入</div>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <div className="stat-val sv-pink">3+</div>
            <div className="stat-label">深度合作客户</div>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <div className="stat-val sv-yellow">20年</div>
            <div className="stat-label">制造业背景</div>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <div className="stat-val sv-purple">苏州 × 香港</div>
            <div className="stat-label">双实体架构</div>
          </div>
        </div>

        {/* FILTER TABS */}
        <div className="tabs">
          {filterTabs.map((tab) => (
            <button
              className={`tab ${activeFilter === tab ? "active" : ""}`}
              key={tab}
              onClick={() => setActiveFilter(tab)}
              type="button"
            >
              {tab}
            </button>
          ))}
        </div>

        {/* EMPLOYEES */}
        <div id="employees">

          {/* ── LIVE ── */}
          {showLive && (
            <>
              <div className="section-label">
                <span className="section-label-dot dot-green" />
                <span className="section-label-text">已上线</span>
                <span className="section-label-badge">LIVE</span>
              </div>

              <div className="harbor-card">
                <div className="harbor-card-inner">
                  <div className="harbor-card-left">
                    <div className="harbor-header">
                      <div className="harbor-avatar">H</div>
                      <div className="harbor-title-block">
                        <div className="harbor-name">Harbor</div>
                        <div className="harbor-role">Shipping Compliance Coordinator</div>
                      </div>
                      <span className="badge b-live">
                        <span className="b-dot" />
                        LIVE
                      </span>
                    </div>
                    <div className="harbor-tagline">"你的柜子被查了？我来协调。"</div>
                    <p className="harbor-desc">
                      当美国海关查验发生时，Harbor 帮工厂老板和跟单员看懂局面、整理文件、推进多方沟通。
                      不代替报关行，而是成为你和货代、报关行、美国端之间的 AI 协调层。
                    </p>
                    <div className="skills">
                      {["邮件解读", "文件清单", "风险识别", "英文模板", "行动时间线"].map((s) => (
                        <span className="skill skill-teal" key={s}>{s}</span>
                      ))}
                    </div>
                  </div>

                  <div className="harbor-card-right">
                    <div className="value-line">
                      <div className="value-line-zh">把查验混乱变成可执行行动报告。</div>
                      <div className="value-line-en">Turns customs chaos into actionable reports.</div>
                    </div>
                    <div className="scenarios-block">
                      <div className="scenarios-label">适用场景</div>
                      <div className="scenarios-tags">
                        {["5H Hold", "Document Exam", "Intensive Exam", "VACIS", "PGA Hold"].map((s) => (
                          <span className="scenario-tag" key={s}>{s}</span>
                        ))}
                      </div>
                    </div>
                    <div className="harbor-ctas">
                      <a className="btn-harbor-primary" href="https://makox.ai/harbor/emergency" target="_blank" rel="noopener noreferrer">
                        开始急诊分析 →
                      </a>
                      <button className="btn-ghost" type="button">了解 Harbor</button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* ── V1 COMING ── */}
          {showComing && (
            <>
              <div className="section-label">
                <span className="section-label-dot dot-yellow" />
                <span className="section-label-text">即将部署</span>
                <span className="section-label-badge badge-coming">V1</span>
              </div>

              <div className="agent-grid">
                {/* Spec */}
                <div className="agent-card c-coming">
                  <div className="card-top">
                    <div className="avatar av-coming">S</div>
                    <span className="badge b-coming"><span className="b-dot" />COMING</span>
                  </div>
                  <div className="agent-name">Spec</div>
                  <div className="agent-role">Product Data Employee / 产品资料官</div>
                  <div className="agent-tagline">"工厂有什么，我帮你讲清楚。"</div>
                  <p className="agent-desc">
                    收集、清洗、整理工厂散乱的产品图片、参数表、检测报告、报价单和销售素材，
                    生成结构化的可复用产品数据资产。
                  </p>
                  <div className="skills">
                    {["SKU 数据库", "产品参数表", "英文产品卡", "FAQ 知识库", "认证资料库"].map((s) => (
                      <span className="skill" key={s}>{s}</span>
                    ))}
                  </div>
                  <div className="value-mini">把混乱的工厂资料整理成可销售的产品资产。</div>
                  <div className="card-foot">
                    <span className="why-text">Spec 是所有员工的地基</span>
                    <button className="cta" type="button">加入等候名单</button>
                  </div>
                </div>

                {/* Hunter */}
                <div className="agent-card c-coming">
                  <div className="card-top">
                    <div className="avatar av-coming">Hu</div>
                    <span className="badge b-coming"><span className="b-dot" />COMING</span>
                  </div>
                  <div className="agent-name">Hunter</div>
                  <div className="agent-role">Market & Sales Employee / 市场销售官</div>
                  <div className="agent-tagline">"有没有客户？能不能卖？怎么卖？"</div>
                  <p className="agent-desc">
                    分析目标市场、拆解竞品策略、构建买家画像、搜索潜在客户，
                    帮团队判断卖到哪里、卖给谁、怎么切入。
                  </p>
                  <div className="skills">
                    {["目标市场报告", "竞品拆解", "客户画像", "潜在客户名单", "开发信生成"].map((s) => (
                      <span className="skill" key={s}>{s}</span>
                    ))}
                  </div>
                  <div className="value-mini">找到合适的市场、客户和切入角度。</div>
                  <div className="card-foot">
                    <span className="why-text">直接回答三个核心问题</span>
                    <button className="cta" type="button">加入等候名单</button>
                  </div>
                </div>

                {/* Hype */}
                <div className="agent-card c-coming">
                  <div className="card-top">
                    <div className="avatar av-coming">Hy</div>
                    <span className="badge b-coming"><span className="b-dot" />COMING</span>
                  </div>
                  <div className="agent-name">Hype</div>
                  <div className="agent-role">Customer Communication Employee / 客户沟通官</div>
                  <div className="agent-tagline">"让每一次客户沟通都更专业、更快、更稳定。"</div>
                  <p className="agent-desc">
                    围绕客户全生命周期生成沟通内容 —— 售前产品页、询盘回复、报价解释、
                    样品沟通、售后 FAQ、投诉处理、复购跟进。
                  </p>
                  <div className="skills">
                    {["售前内容", "询盘回复", "报价说明", "售后支持", "案例沉淀"].map((s) => (
                      <span className="skill" key={s}>{s}</span>
                    ))}
                  </div>
                  <div className="value-mini">把产品知识转化成客户愿意继续沟通的表达。</div>
                  <div className="card-foot">
                    <span className="why-text">覆盖售前售中售后</span>
                    <button className="cta" type="button">加入等候名单</button>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* ── V2 PLANNED ── */}
          {showPlanned && (
            <>
              <div className="section-label">
                <span className="section-label-dot dot-dim" />
                <span className="section-label-text">规划中</span>
                <span className="section-label-badge badge-planned">V2</span>
              </div>

              <div className="v2-grid">
                {/* Guard */}
                <div className="agent-card c-planned">
                  <div className="card-top">
                    <div className="avatar av-planned">G</div>
                    <span className="badge b-planned"><span className="b-dot" />PLANNED</span>
                  </div>
                  <div className="agent-name">Guard</div>
                  <div className="agent-role">Risk & Compliance Employee / 风险合规官</div>
                  <div className="agent-tagline">"在风险变成损失之前发现它。"</div>
                  <div className="skills">
                    {["认证合规", "平台规则", "知识产权", "合同风险", "客户信用"].map((s) => (
                      <span className="skill" key={s}>{s}</span>
                    ))}
                  </div>
                  <div className="value-mini-en">Guard detects risks before they become losses.</div>
                  <div className="card-foot">
                    <button className="cta cta-dim" type="button">了解更多</button>
                  </div>
                </div>

                {/* Odd */}
                <div className="agent-card c-planned">
                  <div className="card-top">
                    <div className="avatar av-planned">O</div>
                    <span className="badge b-planned"><span className="b-dot" />PLANNED</span>
                  </div>
                  <div className="agent-name">Odd</div>
                  <div className="agent-role">Taste Employee / 品味官</div>
                  <div className="agent-tagline">"我只做有品味的事。"</div>
                  <div className="skills">
                    {["命名", "视觉方向", "包装概念", "差异化卖点", "高级表达"].map((s) => (
                      <span className="skill" key={s}>{s}</span>
                    ))}
                  </div>
                  <div className="value-mini-en">Odd finds the angle no one else sees.</div>
                  <div className="card-foot">
                    <button className="cta cta-dim" type="button">了解更多</button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        <div className="divider" />

        {/* V1 LOOP */}
        <div className="loop-section">
          <div className="loop-title">// V1 的核心逻辑</div>
          <div className="loop-steps">
            <div className="loop-step">
              <div className="loop-step-tag">第一步</div>
              <div className="loop-step-name">Spec 整理产品资料</div>
              <div className="loop-step-sub">先把工厂有什么讲清楚</div>
            </div>
            <div className="loop-arrow">↓</div>
            <div className="loop-step">
              <div className="loop-step-tag">第二步</div>
              <div className="loop-step-name">Hunter 找市场和客户</div>
              <div className="loop-step-sub">再找到谁可能买</div>
            </div>
            <div className="loop-arrow">↓</div>
            <div className="loop-step">
              <div className="loop-step-tag">第三步</div>
              <div className="loop-step-name">Hype 完成客户沟通</div>
              <div className="loop-step-sub">最后把客户说动、服务好</div>
            </div>
          </div>
          <p className="loop-note">
            这是制造业出海的前端闭环。<br />
            产品资料 → 市场机会 → 客户沟通 → 询盘转化。<br />
            三位数字员工各自负责一个环节，协同完成整个链路。
          </p>
        </div>

        <div className="divider" />

        {/* HARBOR SPOTLIGHT */}
        <div className="harbor-spotlight">
          <div className="spotlight-label">// 现在最紧急的一位数字员工</div>
          <h2 className="spotlight-title">2026 年美国海关 5H 查验全面爆发</h2>
          <p className="spotlight-desc">
            数千个中国货柜在洛杉矶、长滩等港口被扣留或退运。<br />
            每天 $230–350 滞港费，30 天法定上限一过就是强制退运。
          </p>
          <div className="spotlight-what">
            <div className="spotlight-what-title">Harbor 做一件事：</div>
            <div className="spotlight-what-main">把一团混乱的查验信息，变成一份可执行行动报告。</div>
          </div>
          <div className="spotlight-features">
            <div className="spotlight-feature">邮件看不懂？<span className="spotlight-feature-ans">Harbor 翻译。</span></div>
            <div className="spotlight-feature">不知道补什么文件？<span className="spotlight-feature-ans">Harbor 列清单。</span></div>
            <div className="spotlight-feature">不知道怎么催货代？<span className="spotlight-feature-ans">Harbor 生成英文邮件。</span></div>
            <div className="spotlight-feature">不知道接下来该做什么？<span className="spotlight-feature-ans">Harbor 给你 72 小时行动计划。</span></div>
          </div>
          <a className="btn-harbor-spotlight" href="https://makox.ai/harbor/emergency" target="_blank" rel="noopener noreferrer">
            我的柜子被查了，开始急诊分析 →
          </a>
        </div>

        <div className="divider" />

        {/* ACTIVITY FEED */}
        <div className="sec-header">
          <span className="sec-title">// 真实业务动态</span>
          <span className="sec-badge">AI 员工不是演示界面，是业务流程里的执行层</span>
        </div>

        {activities.map((activity) => (
          <div className="activity" key={activity.main}>
            <div className="act-icon" style={{ background: activity.tagBg, color: activity.tagColor }}>
              {activity.tag.charAt(0)}
            </div>
            <div className="act-body">
              <div className="act-main">
                <strong style={{ color: activity.tagColor }}>[{activity.tag}]</strong>{" "}
                {activity.main}
              </div>
              <div className="act-meta">{activity.meta}</div>
            </div>
            <div className="act-result" style={{ color: activity.resultColor }}>
              {activity.result}
            </div>
          </div>
        ))}

        <div className="divider" />

        {/* BOTTOM CTA */}
        <div className="bottom-cta">
          <div className="bottom-cta-title">准备把 AI 员工放进你的出海流程了吗？</div>
          <p className="bottom-cta-desc">
            预约一次 AI 工作流诊断，我们会帮你判断：最值得先部署哪一位数字员工。<br />
            当前推荐：如果你的柜子在美国港口遇到了查验问题，直接使用 Harbor。
          </p>
          <div className="hero-btns bottom-cta-btns">
            <button className="btn-primary" type="button">预约 AI 工作流诊断</button>
            <a className="btn-teal" href="https://makox.ai/harbor/emergency" target="_blank" rel="noopener noreferrer">
              开始 Harbor 急诊分析 →
            </a>
          </div>
          <div className="bottom-cta-sub">通常 24 小时内回复 · 首次 AI 诊断免费</div>
        </div>

        {/* DISCLAIMER */}
        <div className="disclaimer">
          ⚠️ Harbor AI 报告仅用于协助整理信息和辅助沟通，不构成法律建议。最终清关判断应由持牌报关行、货代或专业贸易律师确认。Makox 数字员工为 AI 辅助工具，输出结果需人工复核。
        </div>

        {/* TERMINAL */}
        <div className="terminal">
          <span className="t-prompt">system@makox:~$</span>
          <span className="t-text" style={{ opacity: terminalVisible ? 1 : 0 }}>
            {terminalMessages[messageIndex]}
          </span>
          <span className="cursor" />
        </div>
      </div>
    </div>
  );
}
