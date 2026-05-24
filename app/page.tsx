"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

// ═══════════════════════════════════════════
// DATA
// ═══════════════════════════════════════════

const NAV_MENUS = {
  services: {
    label: "服务",
    groups: [
      { title: "核心服务", items: [
        { name: "企业Agent部署", href: "/services/agent", desc: "AI数字员工战队植入" },
        { name: "数字治理 & Workflow", href: "/services/governance", desc: "数据结构化+SOP标准化" },
        { name: "AI-Native DTC建站", href: "/dtc", desc: "工厂到全球消费者全链路" },
        { name: "AI实战培训", href: "/services/training", desc: "企业内训·工作坊·训练营" },
      ]},
      { title: "交付模式", items: [
        { name: "60min免费诊断", href: "/contact", desc: "找到第一个自动化环节" },
        { name: "2–4周快速交付", href: "/services/agent", desc: "Agent部署到位即可运转" },
        { name: "持续运营陪跑", href: "/dtc", desc: "季度复盘·数据驱动迭代" },
      ]},
    ]
  },
  solutions: {
    label: "方案",
    groups: [
      { title: "按场景", items: [
        { name: "外贸跟单自动化", href: "/solutions/trade" },
        { name: "多语言内容生产", href: "/solutions/content" },
        { name: "DTC品牌出海", href: "/dtc" },
        { name: "工厂数字化转型", href: "/solutions/factory" },
      ]},
      { title: "按企业类型", items: [
        { name: "出口型工厂", href: "/solutions/factory" },
        { name: "跨境贸易商", href: "/solutions/trader" },
        { name: "Small B 创业者", href: "/services/training" },
        { name: "Pro A 专业人士", href: "/services/training" },
      ]},
      { title: "AI-Ready Verticals", items: [
        { name: "智能硬件 · Smart Devices", href: "/industries/smart-devices", desc: "IoT · 消费电子 · AI硬件 · 智能家居" },
        { name: "空间生活 · Space & Living", href: "/industries/space-living", desc: "家具 · 壁床 · 储物系统 · 空间产品" },
        { name: "自动化设备 · Automation Systems", href: "/industries/automation-systems", desc: "工业设备 · 自动化模组 · B2B机械" },
        { name: "功能消费品 · Functional Goods", href: "/industries/functional-goods", desc: "厨卫 · 户外 · 五金 · 功能生活" },
      ]},
    ]
  },
  resources: {
    label: "资源",
    groups: [
      { title: "案例 & 洞察", items: [
        { name: "客户案例", href: "/cases" },
        { name: "AI转型框架", href: "/frameworks" },
        { name: "博客 / 观点", href: "/blog" },
      ]},
      { title: "学习", items: [
        { name: "AI实战课程", href: "/courses" },
        { name: "工具指南", href: "/guides" },
        { name: "Prompt Library", href: "/prompts" },
      ]},
      { title: "工具 & 生态", items: [
        { name: "OPCEO.ai ↗", href: "https://opceo.ai" },
      ]},
    ]
  },
} as const;

const PILLARS = [
  {
    id: "agent", num: "01", title: "企业Agent部署", en: "Enterprise Agent Deployment",
    tagline: "不是装工具，是给你一支能自己跑的AI团队",
    desc: "为外贸工厂和制造企业部署定制化AI Agent——内容Agent、销售Agent、客服Agent、跟单Agent。不是装个工具，是植入一套能自主运转的数字劳动力。",
    features: ["内容Agent · 多语言产品文案自动生成", "销售Agent · 询盘分类+自动跟进序列", "客服Agent · 7×24多语言智能应答", "跟单Agent · 从询盘到成单全链路自动化"],
    metric: "5×", metricLabel: "内容产出效率提升",
    cta: "预约Agent诊断", color: "#f59e0b",
  },
  {
    id: "governance", num: "02", title: "数字治理 & Workflow", en: "Digital Governance & Workflow",
    tagline: "AI跑不起来，99%是因为数据和流程没治好",
    desc: "大多数企业AI项目失败不是技术问题，是数据不可读、流程没标准化、SOP在人脑袋里。我们先治理后部署——帮你建起AI能真正跑起来的底座。",
    features: ["数据结构化 · 让你的业务数据变成AI可读格式", "SOP标准化 · 把经验变成可执行的流程文档", "Workflow设计 · 跨部门自动化流程搭建", "AI就绪评估 · 5维度工厂AI成熟度诊断"],
    metric: "L0→L3", metricLabel: "AI就绪度跃迁",
    cta: "获取就绪评估", color: "#3b82f6",
  },
  {
    id: "dtc", num: "03", title: "AI-Native DTC建站", en: "Factory-to-Global DTC Solutions",
    tagline: "从中国工厂到全球消费者，一步到位",
    desc: "帮制造企业搭建AI驱动的DTC独立站。不是找个外包建个模板，是从工厂诊断到品牌叙事到AI内容引擎的全链路交付。家具、卫浴、五金——我们只做自己懂的品类。",
    features: ["品牌叙事 · 把工厂故事翻译成消费者语言", "AI内容引擎 · 5个Agent持续产出GEO/SEO内容", "双站架构 · 2B批发+2C零售独立站并行", "全球化 · 多语言多市场本地化运营"],
    metric: "11+", metricLabel: "已交付DTC项目",
    cta: "查看DTC方案 →", link: "/dtc", color: "#22c55e",
  },
  {
    id: "training", num: "04", title: "AI实战培训", en: "AI Training for SMBs & Enterprises",
    tagline: "不讲概念，只教落地",
    desc: "面向Small B个体创业者、Pro A专业人士和传统企业管理者的AI实战培训。从Prompt Engineering到Agent搭建到Workflow自动化，每一课都带走一个可用的成果。支持企业内训定制。",
    features: ["企业内训 · 为你的团队定制AI技能提升方案", "Small B训练营 · 一人公司的AI武装升级", "Pro A工作坊 · 设计师/贸易商/运营的AI实战", "从0到1 · 传统企业管理者的AI认知重建"],
    metric: "2–4h", metricLabel: "即学即用",
    cta: "预约企业内训", color: "#a78bfa",
  },
];

const CASES_BRIEF = [
  { name: "家具出口企业", result: "内容5×↑ · 响应60%↓", tags: ["Content Agent", "多语言"] },
  { name: "卫浴工厂", result: "跟单3×↑ · 成单30%↑ · Agent全链路", tags: ["Sales Agent", "Content Agent", "询盘分类", "AI客服"] },
  { name: "Space Discoverer", result: "墨菲床DTC改版 · 转化提升", tags: ["DTC建站", "AI客服"] },
];

const READINESS = [
  { level: "L0", label: "纯人工", desc: "流程靠经验，数据在脑袋里", color: "#ef4444" },
  { level: "L1", label: "工具辅助", desc: "有ERP/CRM但AI不可读", color: "#f59e0b" },
  { level: "L2", label: "局部自动化", desc: "部分流程自动化，AI试点", color: "#3b82f6" },
  { level: "L3", label: "Agent驱动", desc: "AI Agent自主运转关键流程", color: "#22c55e" },
  { level: "L4", label: "AI-Native", desc: "AI是默认运转方式", color: "#a78bfa" },
];

// ═══════════════════════════════════════════
// UTILITIES
// ═══════════════════════════════════════════

function Counter({ end, suffix = "", duration = 1800 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const t0 = performance.now();
        const step = (now: number) => {
          const p = Math.min((now - t0) / duration, 1);
          setCount(Math.floor((1 - Math.pow(1 - p, 3)) * end));
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      }
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [end, duration]);
  return <span ref={ref}>{count}{suffix}</span>;
}

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true); }, { threshold: 0.08 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className={className} style={{
      opacity: v ? 1 : 0, transform: v ? "translateY(0)" : "translateY(24px)",
      transition: `opacity 0.65s cubic-bezier(.16,1,.3,1) ${delay}s, transform 0.65s cubic-bezier(.16,1,.3,1) ${delay}s`,
    }}>{children}</div>
  );
}

// ═══════════════════════════════════════════
// MEGA MENU COMPONENT
// ═══════════════════════════════════════════

type MenuGroup = { title: string; items: ReadonlyArray<{ name: string; href: string; desc?: string }> };
type MenuData = { label: string; groups: ReadonlyArray<MenuGroup> };

function MegaMenu({ menuKey, data, isOpen, onToggle }: { menuKey: string; data: MenuData; isOpen: boolean; onToggle: (key: string | null) => void }) {
  return (
    <div className="mm-wrap" onMouseEnter={() => onToggle(menuKey)} onMouseLeave={() => onToggle(null)}>
      <button className={`mx-nav-link ${isOpen ? "active" : ""}`} onClick={() => onToggle(isOpen ? null : menuKey)}>
        {data.label}
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ marginLeft: 4, transition: "transform 0.2s", transform: isOpen ? "rotate(180deg)" : "rotate(0)" }}>
          <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.2" />
        </svg>
      </button>
      <div className={`mm-dropdown ${isOpen ? "open" : ""}`}>
        <div className="mm-inner">
          {data.groups.map((g, i) => (
            <div key={i} className="mm-group">
              <div className="mm-group-title">{g.title}</div>
              {g.items.map((item, j) => (
                <a key={j} href={item.href} className="mm-item">
                  <div className="mm-item-name">{item.name}</div>
                  {item.desc && <div className="mm-item-desc">{item.desc}</div>}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════

export default function AimakoxHome() {
  const router = useRouter();
  const [expandedPillar, setExpandedPillar] = useState<number | null>(null);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <div style={{ background: "#08080a", color: "#e4e2dc", minHeight: "100vh" }}>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::selection { background: #f59e0b; color: #08080a; }

        /* ── NAV ── */
        .mx-nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          padding: 0 40px; height: 56px;
          display: flex; align-items: center; justify-content: space-between;
          background: rgba(8,8,10,0.88); backdrop-filter: blur(20px) saturate(1.2);
          border-bottom: 1px solid rgba(255,255,255,0.04);
          font-family: 'Instrument Sans', sans-serif;
        }
        .mx-logo { font-size: 18px; font-weight: 700; letter-spacing: -0.5px; color: #e4e2dc; text-decoration: none; }
        .mx-logo span { color: #f59e0b; }
        .mx-nav-center { display: flex; gap: 0; align-items: center; }
        .mx-nav-right { display: flex; gap: 12px; align-items: center; }
        .mx-nav-link {
          font-size: 13px; color: #777; background: none; border: none;
          padding: 16px 16px; cursor: pointer; transition: color 0.2s;
          display: flex; align-items: center; gap: 2px;
          font-family: 'Instrument Sans', sans-serif;
        }
        .mx-nav-link:hover, .mx-nav-link.active { color: #e4e2dc; }
        .mx-nav-contact { font-size: 13px; color: #888; text-decoration: none; padding: 7px 16px; border: 1px solid #222; transition: all 0.2s; cursor: pointer; }
        .mx-nav-contact:hover { border-color: #444; color: #ccc; }
        .mx-nav-cta {
          font-size: 12px; padding: 8px 20px;
          background: #f59e0b; border: none; color: #08080a;
          font-weight: 600; cursor: pointer; transition: all 0.2s;
          font-family: 'Instrument Sans', sans-serif;
        }
        .mx-nav-cta:hover { background: #fbbf24; }

        /* ── MEGA MENU ── */
        .mm-wrap { position: relative; }
        .mm-dropdown {
          position: absolute; top: 100%; left: 50%; transform: translateX(-50%);
          opacity: 0; visibility: hidden; pointer-events: none;
          transition: opacity 0.2s, visibility 0.2s;
          padding-top: 4px;
        }
        .mm-dropdown.open { opacity: 1; visibility: visible; pointer-events: auto; }
        .mm-inner {
          display: flex; gap: 0;
          background: #111113; border: 1px solid #1c1c1e;
          box-shadow: 0 16px 48px rgba(0,0,0,0.4);
          min-width: 480px;
        }
        .mm-group {
          padding: 20px 24px; min-width: 160px;
          border-right: 1px solid #1a1a1c;
        }
        .mm-group:last-child { border-right: none; }
        .mm-group-title {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px; letter-spacing: 2px; text-transform: uppercase;
          color: #444; margin-bottom: 14px;
        }
        .mm-item {
          display: block; padding: 8px 0; text-decoration: none;
          transition: padding-left 0.2s;
        }
        .mm-item:hover { padding-left: 6px; }
        .mm-item-name { font-size: 13px; color: #ccc; font-weight: 500; margin-bottom: 1px; }
        .mm-item:hover .mm-item-name { color: #f59e0b; }
        .mm-item-desc { font-size: 11px; color: #444; }

        /* ── HERO ── */
        .mx-hero { padding: 140px 40px 100px; position: relative; overflow: hidden; }
        .mx-hero::before { content:''; position:absolute; top:-100px; right:-100px; width:600px; height:600px; background:radial-gradient(circle, rgba(245,158,11,0.03) 0%, transparent 65%); pointer-events:none; }
        .mx-hero-inner { max-width: 1200px; margin: 0 auto; position: relative; }
        .mx-tagline { font-family:'JetBrains Mono',monospace; font-size:11px; letter-spacing:3px; text-transform:uppercase; color:#f59e0b; margin-bottom:28px; display:flex; align-items:center; gap:12px; }
        .mx-tagline::before { content:''; width:32px; height:1px; background:#f59e0b; }
        .mx-h1 { font-family:'Instrument Sans',sans-serif; font-size:clamp(38px,5.5vw,72px); font-weight:700; line-height:1.08; letter-spacing:-0.035em; margin-bottom:24px; max-width:900px; }
        .mx-h1 em { font-style:italic; font-weight:700; background:linear-gradient(135deg,#f59e0b,#fbbf24 60%,#f59e0b); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
        .mx-hero-sub { font-size:17px; color:#666; line-height:1.8; max-width:580px; font-weight:400; }
        .mx-hero-metrics { display:flex; gap:48px; margin-top:52px; padding-top:36px; border-top:1px solid #1a1a1a; }
        .mx-hm-num { font-family:'JetBrains Mono',monospace; font-size:32px; font-weight:700; color:#f59e0b; }
        .mx-hm-label { font-size:12px; color:#444; margin-top:4px; letter-spacing:0.5px; }

        /* ── SECTIONS ── */
        .mx-section { padding:100px 40px; max-width:1200px; margin:0 auto; }
        .mx-section-head { margin-bottom:48px; }
        .mx-section-label { font-family:'JetBrains Mono',monospace; font-size:11px; letter-spacing:3px; text-transform:uppercase; color:#f59e0b; margin-bottom:20px; display:flex; align-items:center; gap:12px; }
        .mx-section-label::before { content:''; width:32px; height:1px; background:#f59e0b; }
        .mx-h2 { font-family:'Instrument Sans',sans-serif; font-size:clamp(28px,3.5vw,44px); font-weight:700; letter-spacing:-0.025em; margin-bottom:12px; line-height:1.15; }
        .mx-h2-sub { font-size:15px; color:#555; max-width:500px; line-height:1.6; }
        .mx-divider { height:1px; background:linear-gradient(90deg,transparent,#1e1e1e,transparent); }

        /* ── PILLAR CARDS ── */
        .mx-pillars { display:flex; flex-direction:column; gap:3px; }
        .mx-pillar { background:#0c0c0e; border:1px solid #141416; transition:all 0.35s cubic-bezier(.16,1,.3,1); cursor:pointer; overflow:hidden; }
        .mx-pillar:hover { background:#0e0e10; border-color:#1c1c1e; }
        .mx-pillar.open { border-color:var(--pc); background:#0e0e10; }
        .mx-pillar-header { display:grid; grid-template-columns:64px 1fr auto auto; align-items:center; gap:20px; padding:28px 32px; }
        .mx-pillar-num { font-family:'JetBrains Mono',monospace; font-size:36px; font-weight:700; opacity:0.08; line-height:1; }
        .mx-pillar.open .mx-pillar-num { opacity:0.15; color:var(--pc); }
        .mx-pillar-title { font-size:22px; font-weight:600; margin-bottom:2px; }
        .mx-pillar-en { font-family:'JetBrains Mono',monospace; font-size:10px; color:#444; letter-spacing:0.5px; }
        .mx-pillar-tagline { font-size:13px; color:#555; max-width:360px; }
        .mx-pillar-toggle { font-family:'JetBrains Mono',monospace; font-size:20px; color:#333; transition:transform 0.3s; min-width:28px; text-align:center; }
        .mx-pillar.open .mx-pillar-toggle { transform:rotate(45deg); color:var(--pc); }
        .mx-pillar-body { max-height:0; overflow:hidden; transition:max-height 0.45s cubic-bezier(.16,1,.3,1); }
        .mx-pillar.open .mx-pillar-body { max-height:600px; }
        .mx-pillar-content { padding:0 32px 32px; padding-left:116px; display:grid; grid-template-columns:1fr 200px; gap:32px; }
        .mx-pillar-desc { font-size:14px; color:#777; line-height:1.7; margin-bottom:20px; }
        .mx-pillar-features { list-style:none; }
        .mx-pillar-features li { font-size:13px; color:#888; padding:6px 0; border-bottom:1px solid #141416; display:flex; align-items:center; gap:8px; }
        .mx-pillar-features li::before { content:'→'; font-family:'JetBrains Mono',monospace; color:var(--pc); font-size:11px; }
        .mx-pillar-metric-box { display:flex; flex-direction:column; justify-content:center; align-items:center; background:#0a0a0c; border:1px solid #161618; padding:24px; text-align:center; }
        .mx-pillar-metric { font-family:'JetBrains Mono',monospace; font-size:42px; font-weight:700; color:var(--pc); line-height:1; }
        .mx-pillar-metric-label { font-size:11px; color:#555; margin-top:8px; letter-spacing:0.5px; }
        .mx-pillar-cta { display:inline-flex; align-items:center; gap:8px; margin-top:20px; padding:10px 22px; font-size:13px; font-weight:500; background:transparent; border:1px solid var(--pc); color:var(--pc); cursor:pointer; transition:all 0.2s; font-family:'Instrument Sans',sans-serif; }
        .mx-pillar-cta:hover { background:var(--pc); color:#08080a; }
        .mx-pillar-cta span { font-family:'JetBrains Mono',monospace; font-size:12px; transition:transform 0.2s; }
        .mx-pillar-cta:hover span { transform:translateX(3px); }

        /* ── READINESS ── */
        .mx-readiness { display:flex; gap:0; border:1px solid #141416; overflow:hidden; }
        .mx-readiness-step { flex:1; padding:28px 20px; text-align:center; border-right:1px solid #141416; background:#0c0c0e; transition:background 0.3s; position:relative; }
        .mx-readiness-step:last-child { border-right:none; }
        .mx-readiness-step:hover { background:#0e0e10; }
        .mx-readiness-level { font-family:'JetBrains Mono',monospace; font-size:24px; font-weight:700; margin-bottom:6px; }
        .mx-readiness-label { font-size:14px; font-weight:600; margin-bottom:4px; }
        .mx-readiness-desc { font-size:11px; color:#555; line-height:1.4; }
        .mx-readiness-arrow { position:absolute; right:-10px; top:50%; transform:translateY(-50%); font-family:'JetBrains Mono',monospace; font-size:14px; color:#333; z-index:1; }

        /* ── CASES ── */
        .mx-cases-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(260px,1fr)); gap:2px; }
        .mx-case { background:#0c0c0e; padding:28px 24px; border-left:2px solid transparent; transition:all 0.3s; cursor:default; }
        .mx-case:hover { background:#0e0e10; border-left-color:#f59e0b; }
        .mx-case-name { font-size:16px; font-weight:600; margin-bottom:6px; }
        .mx-case-result { font-family:'JetBrains Mono',monospace; font-size:13px; color:#f59e0b; margin-bottom:12px; }
        .mx-case-tags { display:flex; gap:5px; flex-wrap:wrap; }
        .mx-case-tag { font-family:'JetBrains Mono',monospace; font-size:9px; padding:3px 8px; background:#111113; border:1px solid #1a1a1c; color:#555; letter-spacing:0.5px; }

        /* ── PAIN ── */
        .mx-pain-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(260px,1fr)); gap:2px; }
        .mx-pain { background:#0c0c0e; padding:28px 24px; transition:background 0.3s; }
        .mx-pain:hover { background:#0e0e10; }
        .mx-pain-x { font-family:'JetBrains Mono',monospace; font-size:16px; color:#ef4444; margin-bottom:6px; }
        .mx-pain-old { font-size:14px; color:#777; margin-bottom:14px; line-height:1.5; }
        .mx-pain-arrow { font-family:'JetBrains Mono',monospace; font-size:11px; color:#333; margin-bottom:10px; }
        .mx-pain-new { font-size:13px; color:#22c55e; line-height:1.5; }

        /* ── CTA ── */
        .mx-cta { padding:100px 40px; text-align:center; position:relative; overflow:hidden; border-top:1px solid #141416; }
        .mx-cta::before { content:''; position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); width:500px; height:500px; background:radial-gradient(circle, rgba(245,158,11,0.03) 0%, transparent 65%); }
        .mx-cta-title { font-family:'Instrument Sans',sans-serif; font-size:clamp(26px,3.5vw,42px); font-weight:700; letter-spacing:-0.02em; margin-bottom:12px; position:relative; }
        .mx-cta-sub { font-size:15px; color:#555; margin-bottom:36px; position:relative; }
        .mx-cta-btn { display:inline-flex; align-items:center; gap:12px; padding:16px 40px; background:#f59e0b; color:#08080a; font-size:15px; font-weight:600; font-family:'Instrument Sans',sans-serif; border:none; cursor:pointer; transition:all 0.3s; position:relative; }
        .mx-cta-btn:hover { background:#fbbf24; transform:translateY(-2px); box-shadow:0 8px 30px rgba(245,158,11,0.15); }
        .mx-cta-btn span { font-family:'JetBrains Mono',monospace; transition:transform 0.3s; }
        .mx-cta-btn:hover span { transform:translateX(4px); }

        /* ── FOOTER ── */
        .mx-footer { padding:48px 40px; border-top:1px solid #141416; max-width:1200px; margin:0 auto; display:grid; grid-template-columns:1.2fr 1fr 1fr 1fr; gap:32px; }
        .mx-footer-brand { font-size:18px; font-weight:700; margin-bottom:8px; letter-spacing:-0.5px; }
        .mx-footer-brand span { color:#f59e0b; }
        .mx-footer-sub { font-size:12px; color:#333; }
        .mx-footer-col-title { font-family:'JetBrains Mono',monospace; font-size:10px; letter-spacing:2px; color:#444; text-transform:uppercase; margin-bottom:12px; }
        .mx-footer-link { display:block; font-size:13px; color:#555; text-decoration:none; padding:4px 0; transition:color 0.2s; cursor:pointer; }
        .mx-footer-link:hover { color:#999; }
        .mx-footer-copy { grid-column:1/-1; padding-top:24px; border-top:1px solid #0e0e10; font-family:'JetBrains Mono',monospace; font-size:10px; color:#222; letter-spacing:1.5px; text-align:center; }

        /* ── HAMBURGER BUTTON ── */
        .mx-hamburger {
          display: none;
          flex-direction: column;
          justify-content: center;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
          z-index: 210;
          flex-shrink: 0;
        }
        .mx-hamburger span {
          display: block;
          width: 22px;
          height: 1.5px;
          background: #e4e2dc;
          transition: transform 0.3s cubic-bezier(.16,1,.3,1), opacity 0.2s;
          transform-origin: center;
        }
        .mx-hamburger.open span:nth-child(1) { transform: rotate(45deg) translate(4.7px, 4.7px); }
        .mx-hamburger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .mx-hamburger.open span:nth-child(3) { transform: rotate(-45deg) translate(4.7px, -4.7px); }

        /* ── MOBILE OVERLAY ── */
        .mx-mobile-overlay {
          position: fixed; top: 0; left: 0; right: 0; bottom: 0;
          z-index: 200;
          background: rgba(8,8,10,0.97);
          backdrop-filter: blur(24px) saturate(1.4);
          display: flex; flex-direction: column;
          transform: translateY(-100%);
          transition: transform 0.38s cubic-bezier(.16,1,.3,1);
          overflow-y: auto;
          overscroll-behavior: contain;
        }
        .mx-mobile-overlay.open { transform: translateY(0); }

        .mx-mob-header {
          display: flex; align-items: center; justify-content: space-between;
          padding: 0 20px; height: 56px;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          flex-shrink: 0;
        }
        .mx-mob-close {
          background: none; border: none; cursor: pointer;
          padding: 8px; color: #666; transition: color 0.2s;
          display: flex; align-items: center;
        }
        .mx-mob-close:hover { color: #e4e2dc; }

        .mx-mob-nav {
          flex: 1;
          padding: 12px 0;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }

        /* Top-level accordion button */
        .mx-mob-section-btn {
          width: 100%;
          display: flex; align-items: center; justify-content: space-between;
          padding: 16px 24px;
          background: none; border: none; cursor: pointer;
          font-family: 'Instrument Sans', sans-serif;
          font-size: 18px; font-weight: 600; color: #e4e2dc;
          letter-spacing: -0.02em;
          transition: color 0.2s;
        }
        .mx-mob-section-btn:hover,
        .mx-mob-section-btn.active { color: #f59e0b; }
        .mx-mob-section-btn svg { flex-shrink: 0; color: #444; }
        .mx-mob-section-btn.active svg { color: #f59e0b; }

        /* Accordion body */
        .mx-mob-items {
          max-height: 0; overflow: hidden;
          transition: max-height 0.4s cubic-bezier(.16,1,.3,1);
        }
        .mx-mob-items.open { max-height: 800px; }

        .mx-mob-group { padding: 8px 24px 4px 32px; }
        .mx-mob-group-title {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px; letter-spacing: 2px; text-transform: uppercase;
          color: #333; margin-bottom: 8px; margin-top: 12px;
        }
        .mx-mob-item {
          display: block;
          font-size: 14px; color: #888; text-decoration: none;
          padding: 7px 0;
          border-bottom: 1px solid rgba(255,255,255,0.03);
          transition: color 0.2s, padding-left 0.2s;
        }
        .mx-mob-item:hover { color: #e4e2dc; padding-left: 6px; }
        .mx-mob-item:last-child { border-bottom: none; }

        /* Direct link (联系) */
        .mx-mob-direct {
          display: block;
          padding: 16px 24px;
          font-family: 'Instrument Sans', sans-serif;
          font-size: 18px; font-weight: 600; color: #e4e2dc;
          text-decoration: none; letter-spacing: -0.02em;
          transition: color 0.2s;
        }
        .mx-mob-direct:hover { color: #f59e0b; }

        /* CTA row at bottom */
        .mx-mob-cta-row {
          display: flex; flex-direction: column; gap: 10px;
          padding: 24px 20px;
          flex-shrink: 0;
        }
        .mx-mob-cta-outline {
          display: block; text-align: center; text-decoration: none;
          padding: 13px 20px;
          font-family: 'Instrument Sans', sans-serif;
          font-size: 14px; font-weight: 500; color: #888;
          border: 1px solid #2a2a2a;
          transition: all 0.2s;
        }
        .mx-mob-cta-outline:hover { border-color: #444; color: #ccc; }
        .mx-mob-cta-filled {
          display: block; text-align: center; text-decoration: none;
          padding: 14px 20px;
          font-family: 'Instrument Sans', sans-serif;
          font-size: 14px; font-weight: 700; color: #08080a;
          background: #f59e0b;
          transition: background 0.2s;
        }
        .mx-mob-cta-filled:hover { background: #fbbf24; }

        @media (max-width: 768px) {
          .mx-nav { padding:0 16px; }
          .mx-nav-center { display:none; }
          .mx-nav-right { display:none; }
          .mx-hamburger { display:flex; }
          .mx-hero { padding:100px 20px 60px; }
          .mx-hero-metrics { flex-wrap:wrap; gap:24px; }
          .mx-section { padding:60px 20px; }
          .mx-pillar-header { grid-template-columns:1fr; gap:8px; }
          .mx-pillar-num { display:none; }
          .mx-pillar-content { padding-left:24px; grid-template-columns:1fr; }
          .mx-readiness { flex-direction:column; }
          .mx-readiness-arrow { display:none; }
          .mx-footer { grid-template-columns:1fr; }
          .mx-cta { padding:60px 20px; }
        }
      `}</style>

      {/* ═══ NAV with MEGA MENU ═══ */}
      <nav className="mx-nav">
        <a className="mx-logo" href="/">M<span>a</span>kox</a>
        <div className="mx-nav-center">
          {Object.entries(NAV_MENUS).map(([key, menu]) => (
            <MegaMenu key={key} menuKey={key} data={menu as MenuData} isOpen={openMenu === key} onToggle={setOpenMenu} />
          ))}
          <a className="mx-nav-link" href="/contact" style={{ cursor: "pointer" }}>联系</a>
        </div>
        <div className="mx-nav-right">
          <a className="mx-nav-contact" href="/contact">Contact Sales</a>
          <button className="mx-nav-cta" onClick={() => router.push("/contact")}>预约诊断</button>
        </div>

        {/* Hamburger — mobile only */}
        <button
          className={`mx-hamburger ${mobileOpen ? "open" : ""}`}
          onClick={() => setMobileOpen(v => !v)}
          aria-label={mobileOpen ? "关闭菜单" : "打开菜单"}
          aria-expanded={mobileOpen}
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* ═══ MOBILE MENU OVERLAY ═══ */}
      <div
        className={`mx-mobile-overlay ${mobileOpen ? "open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="导航菜单"
      >
        {/* Header bar */}
        <div className="mx-mob-header">
          <a className="mx-logo" href="/" onClick={() => setMobileOpen(false)}>
            M<span>a</span>kox
          </a>
          <button
            className="mx-mob-close"
            onClick={() => setMobileOpen(false)}
            aria-label="关闭菜单"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M2 2L18 18M18 2L2 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Accordion nav */}
        <nav className="mx-mob-nav">
          {Object.entries(NAV_MENUS).map(([key, menu]) => {
            const m = menu as MenuData;
            const isExpanded = mobileSection === key;
            return (
              <div key={key} className="mx-mob-section">
                <button
                  className={`mx-mob-section-btn ${isExpanded ? "active" : ""}`}
                  onClick={() => setMobileSection(isExpanded ? null : key)}
                  aria-expanded={isExpanded}
                >
                  <span>{m.label}</span>
                  <svg
                    width="12" height="8" viewBox="0 0 12 8" fill="none"
                    style={{ transition: "transform 0.25s", transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)" }}
                  >
                    <path d="M1 1L6 7L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>
                <div className={`mx-mob-items ${isExpanded ? "open" : ""}`}>
                  {m.groups.map((g, gi) => (
                    <div key={gi} className="mx-mob-group">
                      <div className="mx-mob-group-title">{g.title}</div>
                      {g.items.map((item, ii) => (
                        <a
                          key={ii}
                          href={item.href}
                          className="mx-mob-item"
                          onClick={() => { setMobileOpen(false); setMobileSection(null); }}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}

          {/* Direct link */}
          <a
            href="/contact"
            className="mx-mob-direct"
            onClick={() => setMobileOpen(false)}
          >
            联系
          </a>
        </nav>

        {/* CTA buttons */}
        <div className="mx-mob-cta-row">
          <a
            href="/contact"
            className="mx-mob-cta-outline"
            onClick={() => setMobileOpen(false)}
          >
            Contact Sales
          </a>
          <a
            href="/contact"
            className="mx-mob-cta-filled"
            onClick={() => setMobileOpen(false)}
          >
            预约诊断
          </a>
        </div>
      </div>

      {/* ═══ HERO ═══ */}
      <section className="mx-hero">
        <div className="mx-hero-inner">
          <FadeIn><div className="mx-tagline">FOR THE BEST FACTORIES IN CHINA</div></FadeIn>
          <FadeIn delay={0.08}>
            <h1 className="mx-h1">跟中国最好的工厂，<br />一起进入 <em>AI-Native</em> 时代。</h1>
          </FadeIn>
          <FadeIn delay={0.16}>
            <p className="mx-hero-sub">
              我们只跟认真对待AI的制造企业合作。Agent部署、数据治理、DTC建站、实战培训——不卖概念，只交付能跑的系统。
            </p>
          </FadeIn>
          <FadeIn delay={0.24}>
            <div className="mx-hero-metrics">
              <div><div className="mx-hm-num"><Counter end={6} suffix="+" /></div><div className="mx-hm-label">企业客户</div></div>
              <div><div className="mx-hm-num"><Counter end={11} suffix="+" /></div><div className="mx-hm-label">DTC项目交付</div></div>
              <div><div className="mx-hm-num">2–4<span style={{ fontSize: 18 }}>wk</span></div><div className="mx-hm-label">Agent部署周期</div></div>
              <div><div className="mx-hm-num">&lt;5%</div><div className="mx-hm-label">工厂AI渗透率</div></div>
            </div>
          </FadeIn>
        </div>
      </section>

      <div className="mx-divider" />

      {/* ═══ FOUR PILLARS ═══ */}
      <section className="mx-section">
        <FadeIn>
          <div className="mx-section-head">
            <div className="mx-section-label">WHAT WE DO</div>
            <h2 className="mx-h2">四件事，做透</h2>
            <p className="mx-h2-sub">不铺摊子。每条线都是我们在真实工厂里打磨出来的。</p>
          </div>
        </FadeIn>
        <div className="mx-pillars">
          {PILLARS.map((p, i) => (
            <FadeIn key={p.id} delay={i * 0.06}>
              <div
                className={`mx-pillar ${expandedPillar === i ? "open" : ""}`}
                style={{ "--pc": p.color } as React.CSSProperties}
                onClick={() => setExpandedPillar(expandedPillar === i ? null : i)}
              >
                <div className="mx-pillar-header">
                  <div className="mx-pillar-num">{p.num}</div>
                  <div><div className="mx-pillar-title">{p.title}</div><div className="mx-pillar-en">{p.en}</div></div>
                  <div className="mx-pillar-tagline">{p.tagline}</div>
                  <div className="mx-pillar-toggle">+</div>
                </div>
                <div className="mx-pillar-body">
                  <div className="mx-pillar-content">
                    <div>
                      <div className="mx-pillar-desc">{p.desc}</div>
                      <ul className="mx-pillar-features">{p.features.map(f => <li key={f}>{f}</li>)}</ul>
                      <button
                        className="mx-pillar-cta"
                        onClick={(e) => { e.stopPropagation(); "link" in p ? router.push(p.link) : router.push("/contact"); }}
                      >
                        {p.cta} <span>→</span>
                      </button>
                    </div>
                    <div className="mx-pillar-metric-box">
                      <div className="mx-pillar-metric">{p.metric}</div>
                      <div className="mx-pillar-metric-label">{p.metricLabel}</div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <div className="mx-divider" />

      {/* ═══ PAIN POINTS ═══ */}
      <section className="mx-section">
        <FadeIn><div className="mx-section-head">
          <div className="mx-section-label">HONEST TALK</div>
          <h2 className="mx-h2">如果这些听着耳熟<br />说明我们该聊聊</h2>
        </div></FadeIn>
        <FadeIn delay={0.1}><div className="mx-pain-grid">
          {[
            { old: "买了一堆AI工具，但团队没人用", solution: "我们从真实工作流出发，找到值得自动化的那一个环节" },
            { old: "供应商装了系统，数据打不通", solution: "先治理数据结构，再接AI——顺序反了什么都白搭" },
            { old: "听了很多AI课，还是不知道从哪开始", solution: "60分钟免费诊断，告诉你第一步该做什么" },
            { old: "想做独立站，但找的建站公司不懂AI", solution: "我们把AI Agent直接built-in到站点架构里" },
          ].map((item, idx) => (
            <div key={idx} className="mx-pain">
              <div className="mx-pain-x">✕</div>
              <div className="mx-pain-old">{item.old}</div>
              <div className="mx-pain-arrow">↓ MAKOX</div>
              <div className="mx-pain-new">{item.solution}</div>
            </div>
          ))}
        </div></FadeIn>
      </section>

      <div className="mx-divider" />

      {/* ═══ READINESS ═══ */}
      <section className="mx-section">
        <FadeIn><div className="mx-section-head">
          <div className="mx-section-label">READINESS MODEL</div>
          <h2 className="mx-h2">先搞清楚你在哪</h2>
          <p className="mx-h2-sub">我们只接L1以上、真正想动的工厂。不在正确起点的项目，做了也白做。</p>
        </div></FadeIn>
        <FadeIn delay={0.1}><div className="mx-readiness">
          {READINESS.map((r, i) => (
            <div key={i} className="mx-readiness-step">
              <div className="mx-readiness-level" style={{ color: r.color }}>{r.level}</div>
              <div className="mx-readiness-label">{r.label}</div>
              <div className="mx-readiness-desc">{r.desc}</div>
              {i < READINESS.length - 1 && <div className="mx-readiness-arrow">→</div>}
            </div>
          ))}
        </div></FadeIn>
      </section>

      <div className="mx-divider" />

      {/* ═══ CASES ═══ */}
      <section className="mx-section">
        <FadeIn><div className="mx-section-head" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div><div className="mx-section-label">PROOF OF WORK</div><h2 className="mx-h2">不说虚的，看结果</h2></div>
          <a href="/cases" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: "#444", textDecoration: "none", paddingBottom: 4, borderBottom: "1px solid #222", cursor: "pointer" }}>VIEW ALL →</a>
        </div></FadeIn>
        <FadeIn delay={0.1}><div className="mx-cases-grid">
          {CASES_BRIEF.map((c, i) => (
            <div key={i} className="mx-case">
              <div className="mx-case-name">{c.name}</div>
              <div className="mx-case-result">{c.result}</div>
              <div className="mx-case-tags">{c.tags.map(t => <span key={t} className="mx-case-tag">{t}</span>)}</div>
            </div>
          ))}
        </div></FadeIn>
      </section>

      <div className="mx-divider" />

      {/* ═══ WORK WITH US ═══ */}
      <section className="mx-section">
        <FadeIn><div className="mx-section-head">
          <div className="mx-section-label">WHO WE WORK WITH</div>
          <h2 className="mx-h2">我们选客户，客户也选我们</h2>
        </div></FadeIn>
        <FadeIn delay={0.1}><div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 2 }}>
          {[
            { role: "工厂老板 / 贸易商", en: "Strategic Client", desc: "年营收3000万以上，有成熟产品线，认真想做AI和品牌出海的人。我们拒绝过不少「先做个便宜的试试」的询盘。", hl: "我们的核心客户", c: "#f59e0b" },
            { role: "渠道合作伙伴", en: "Channel Partner", desc: "你从中国采购，想让你的供应商变得更聪明。我们帮他们AI-Native化，你的供应链响应速度直接翻倍。", hl: "让你的供应链领先一代", c: "#3b82f6" },
            { role: "投资人 / 产业方", en: "Investor & Ecosystem", desc: "全球35%的制造产能，<5%的AI渗透率。不是风口，是事实。", hl: "最大的确定性机会", c: "#22c55e" },
          ].map((item, i) => (
            <div key={i} style={{ background: "#0c0c0e", padding: "32px 24px", borderTop: `2px solid ${item.c}` }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "#444", letterSpacing: 1.5, marginBottom: 8 }}>{item.en}</div>
              <div style={{ fontSize: 20, fontWeight: 600, marginBottom: 12 }}>{item.role}</div>
              <div style={{ fontSize: 13, color: "#666", lineHeight: 1.7, marginBottom: 16 }}>{item.desc}</div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "#f59e0b", opacity: 0.7 }}>{item.hl}</div>
            </div>
          ))}
        </div></FadeIn>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="mx-cta">
        <FadeIn>
          <div className="mx-cta-title">如果你是认真的<br />我们聊聊</div>
          <div className="mx-cta-sub">60分钟，免费诊断。我们看你的真实工作流，告诉你第一步该做什么——以及值不值得做。</div>
          <button className="mx-cta-btn" onClick={() => router.push("/contact")}>预约 Discovery Call <span>→</span></button>
        </FadeIn>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer style={{ borderTop: "1px solid #111113", padding: "0 40px" }}>
        <div className="mx-footer">
          <div>
            <div className="mx-footer-brand">M<span>a</span>kox</div>
            <div className="mx-footer-sub">马时科技 · 苏州 × 香港</div>
            <div style={{ marginTop: 12, fontSize: 12, color: "#333" }}>MashiTeam@163.com</div>
          </div>
          <div>
            <div className="mx-footer-col-title">SERVICES</div>
            <a className="mx-footer-link" href="/services/agent">企业Agent部署</a>
            <a className="mx-footer-link" href="/services/governance">数字治理 & Workflow</a>
            <a className="mx-footer-link" href="/dtc">AI-Native DTC建站</a>
            <a className="mx-footer-link" href="/services/training">AI实战培训</a>
          </div>
          <div>
            <div className="mx-footer-col-title">SOLUTIONS</div>
            <a className="mx-footer-link" href="/solutions/trade">外贸跟单自动化</a>
            <a className="mx-footer-link" href="/solutions/content">多语言内容生产</a>
            <a className="mx-footer-link" href="/dtc">DTC品牌出海</a>
            <a className="mx-footer-link" href="/solutions/factory">工厂数字化转型</a>
          </div>
          <div>
            <div className="mx-footer-col-title">RESOURCES</div>
            <a className="mx-footer-link" href="/cases">客户案例</a>
            <a className="mx-footer-link" href="/frameworks">AI转型框架</a>
            <a className="mx-footer-link" href="/courses">AI实战课程</a>
            <a className="mx-footer-link" href="https://opceo.ai" target="_blank" rel="noopener noreferrer">OPCEO.ai ↗</a>
          </div>
          <div className="mx-footer-copy">© 2026 MASHI TECHNOLOGY · AI-NATIVE MANUFACTURING OPERATIONS</div>
        </div>
      </footer>
    </div>
  );
}
