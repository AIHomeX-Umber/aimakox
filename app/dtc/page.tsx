"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Nav from "@/components/Nav";

// ─── DATA ───

const LIFESTYLE_PILLARS = [
  { icon: "⬡", label: "空间重构", en: "Space Reimagined", color: "#f59e0b" },
  { icon: "◈", label: "品质居家", en: "Quality Living", color: "#3b82f6" },
  { icon: "△", label: "绿植美学", en: "Botanical Living", color: "#22c55e" },
  { icon: "○", label: "功能收纳", en: "Smart Storage", color: "#a78bfa" },
];

const PROJECTS = [
  { name: "Space Discoverer", cat: "墨菲床 · Wall Bed", pillar: "空间重构", market: "US", status: "LIVE", tags: ["Convertible Living", "Tiny Home", "RV/Studio"], story: "小空间生活效率革命——为都市公寓、Studio、RV用户打造可变形居住方案" },
  { name: "YikaHome", cat: "实木家具 · Solid Wood", pillar: "品质居家", market: "US/EU", status: "DELIVERED", tags: ["品质生活", "原木美学", "场景化展示"], story: "从工厂白牌到品质生活品牌，重新定义中国实木家具的海外叙事" },
  { name: "VanityLux", cat: "浴室柜 · Bathroom Vanity", pillar: "品质居家", market: "US", status: "DELIVERED", tags: ["高客单价", "3D配置器", "安装指南"], story: "卫浴工厂转型DTC，客单价$800+的高端浴室柜独立站" },
  { name: "ModuBoard", cat: "板式家具 · Panel Furniture", pillar: "功能收纳", market: "EU", status: "DELIVERED", tags: ["模块化设计", "自主组装", "收纳系统"], story: "板式家具的模块化叙事，将扁平包装变成空间解决方案" },
  { name: "SoftNest", cat: "软包家具 · Upholstered", pillar: "品质居家", market: "US/UK", status: "DELIVERED", tags: ["面料故事", "沙发定制", "色卡系统"], story: "沙发工厂的DTC升级，在线选布+AR预览+送货到家" },
  { name: "TileVogue", cat: "瓷砖 · Ceramic Tiles", pillar: "品质居家", market: "US", status: "DELIVERED", tags: ["场景渲染", "样品寄送", "设计师频道"], story: "佛山瓷砖出海，通过设计师社区建立品牌信任" },
  { name: "CompactKitchen", cat: "集成灶 · Integrated Stove", pillar: "空间重构", market: "SEA/EU", status: "DELIVERED", tags: ["厨房改造", "安装视频", "本地化"], story: "厨电品牌跨境突围，小厨房场景下的效率重构" },
  { name: "GreenShelf", cat: "花架置物架 · Plant Stands", pillar: "绿植美学", market: "US", status: "DELIVERED", tags: ["绿植搭配", "空间灵感", "UGC社区"], story: "铁艺花架 × 绿植生活方式，Instagram驱动的DTC增长" },
  { name: "FoldCraft", cat: "折叠家具 · Foldable", pillar: "空间重构", market: "JP/US", status: "DELIVERED", tags: ["Tiny Home", "折叠收纳", "多功能"], story: "面向日本和美国小户型市场，折叠家具的极致空间效率" },
  { name: "BathEssence", cat: "卫浴五金 · Bath Hardware", pillar: "品质居家", market: "US/AU", status: "LIVE", tags: ["极简五金", "套装销售", "安装教程"], story: "五金工厂的品牌化之路，从螺丝配件到浴室美学" },
  { name: "LoftBed Studio", cat: "高架床 · Loft Bed", pillar: "空间重构", market: "US", status: "DELIVERED", tags: ["学生公寓", "空间立体化", "模块组合"], story: "把6㎡变成12㎡的魔法——高架床品牌的Z世代叙事" },
];

const WORKFLOW_STEPS = [
  { phase: "01", title: "工厂诊断 & 需求锚定", en: "Factory QA & Scoping", duration: "Week 1–2",
    details: ["实地/远程工厂考察，评估产品线与产能", "目标市场调研与竞品拆解", "核心SKU筛选（首批50–100个）", "品牌定位工作坊：找到你的生活方式故事", "项目范围确认 & 报价签约"],
    deliverable: "项目Brief + 竞品分析报告", color: "#f59e0b" },
  { phase: "02", title: "品牌叙事 & 视觉建设", en: "Brand Narrative & Identity", duration: "Week 3–5",
    details: ["品牌命名 & 域名注册", "Logo / VI 视觉体系设计", "品牌故事撰写（Origin × Craft × Living）", "产品摄影指导（白底+场景+生活方式）", "Tone of Voice & 内容风格指南"],
    deliverable: "品牌手册 + 摄影SOP + 域名", color: "#3b82f6" },
  { phase: "03", title: "站点架构 & 开发上线", en: "Site Build & Launch", duration: "Week 6–10",
    details: ["信息架构 & 线框图设计", "Shopify主题开发/定制", "产品上架（AI辅助描述生成）", "支付/物流/税务配置", "移动端优化 & 性能调优", "UAT测试 & 正式上线"],
    deliverable: "完整独立站 · 上线运行", color: "#22c55e" },
  { phase: "04", title: "AI Agent 部署", en: "AI Agent Deployment", duration: "Week 11–14",
    details: ["产品描述Agent — 自动生成SEO友好的产品页", "Blog写作Agent — 每周3–5篇GEO优化文章", "FAQ Agent — 抓取搜索意图，自动生成结构化FAQ", "Social Agent — 产品上架后自动生成社媒内容", "翻译Agent — 多语言内容自动同步"],
    deliverable: "5个AI Agent上线 · 内容自动产出", color: "#a78bfa" },
  { phase: "05", title: "社媒 & SEO/GEO 增长", en: "Social & SEO/GEO Growth", duration: "Week 15–20",
    details: ["Pinterest / Instagram 内容矩阵搭建", "Google SEO技术优化（Core Web Vitals）", "GEO结构化数据全站部署", "KOL / 设计师合作 & UGC体系", "Klaviyo邮件自动化流程", "首轮广告投放测试（可选）"],
    deliverable: "流量增长体系 · 月度数据报告", color: "#ef4444" },
  { phase: "06", title: "持续运营 & 规模化", en: "Ongoing Ops & Scale", duration: "Month 6+",
    details: ["A/B测试驱动的转化优化", "新品上架SOP（拍照→上架→内容→推广一体化）", "多语言 / 多市场扩展", "复购体系（订阅/会员/Bundle）", "季度策略复盘 & 迭代"],
    deliverable: "月度运营报告 · 季度策略升级", color: "#f59e0b" },
];

const SERVICES_GRID = [
  { icon: "⬡", title: "AI-Powered 建站", sub: "AI驱动的独立站架构，不是模板套壳", details: "Shopify / Headless 架构 · AI产品描述生成 · 智能搜索推荐 · AR产品预览" },
  { icon: "◇", title: "GEO × SEO 内容工厂", sub: "让AI搜索引擎主动引用你的品牌", details: "5大AI Agent内容矩阵 · Schema全站部署 · E-E-A-T权威信号 · 长尾关键词覆盖" },
  { icon: "△", title: "品牌叙事 & 视觉", sub: "把工厂故事翻译成消费者语言", details: "品牌命名 · VI设计 · 摄影指导 · Tone of Voice · 生活方式场景构建" },
  { icon: "○", title: "数据驱动增长", sub: "上线是起点，增长是日常", details: "GA4+Shopify双重分析 · Klaviyo自动化 · A/B测试体系 · 社媒内容矩阵" },
];

const PACKAGES = [
  { tier: "STARTER", label: "轻量验证", price: "$15K–25K", features: ["Shopify标准站", "50 SKU上架", "AI产品描述Agent", "基础SEO部署", "响应式设计", "4周核心交付"], accent: "#3b82f6" },
  { tier: "GROWTH", label: "增长加速", price: "$50K–80K", features: ["含Starter全部", "双站架构（2B+2C）", "5个AI Agent全套", "GEO内容工厂", "多语言（3种）", "Klaviyo邮件体系", "品牌VI设计"], accent: "#f59e0b", featured: true },
  { tier: "ENTERPRISE", label: "旗舰定制", price: "$100K+", features: ["含Growth全部", "Headless定制前端", "5+语言全球化", "AI客服+报价机器人", "全链路数据体系", "12个月运营陪跑", "季度策略复盘"], accent: "#ef4444" },
];

// ─── UTILITIES ───

function Counter({ end, suffix = "", duration = 2000 }: { end: number; suffix?: string; duration?: number }) {
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
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className={className} style={{
      opacity: v ? 1 : 0, transform: v ? "translateY(0)" : "translateY(28px)",
      transition: `opacity 0.7s cubic-bezier(.16,1,.3,1) ${delay}s, transform 0.7s cubic-bezier(.16,1,.3,1) ${delay}s`,
    }}>{children}</div>
  );
}

// ─── MAIN ───

export default function AimakoxDTC() {
  const router = useRouter();
  const [activePkg, setActivePkg] = useState(1);
  const [expandedStep, setExpandedStep] = useState<number | null>(null);
  const [filterPillar, setFilterPillar] = useState<string | null>(null);

  const filteredProjects = filterPillar ? PROJECTS.filter(p => p.pillar === filterPillar) : PROJECTS;

  return (
    <div style={{ background: "#0a0a0a", color: "#e8e6e1", minHeight: "100vh", fontFamily: "'Instrument Sans', 'Noto Sans SC', system-ui, sans-serif" }}>
      <Nav />
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::selection { background: #f59e0b; color: #0a0a0a; }

        .dtc-hero { position: relative; padding: 100px 40px 80px; overflow: hidden; border-bottom: 1px solid #1a1a1a; }
        .dtc-hero::before { content: ''; position: absolute; top: -300px; right: -200px; width: 700px; height: 700px; background: radial-gradient(circle, rgba(245,158,11,0.05) 0%, transparent 70%); pointer-events: none; }

        .dtc-label { font-family: 'JetBrains Mono', 'Space Mono', monospace; font-size: 11px; letter-spacing: 3px; text-transform: uppercase; color: #f59e0b; margin-bottom: 24px; display: flex; align-items: center; gap: 12px; }
        .dtc-label::before { content: ''; width: 40px; height: 1px; background: #f59e0b; }

        .dtc-h1 { font-size: clamp(34px, 5vw, 68px); font-weight: 700; line-height: 1.1; letter-spacing: -0.03em; margin-bottom: 28px; max-width: 850px; }
        .dtc-h1 em { font-style: normal; background: linear-gradient(135deg, #f59e0b, #fbbf24); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }

        .dtc-sub-hero { font-size: 17px; color: #777; line-height: 1.8; max-width: 620px; font-weight: 300; }

        .lifestyle-bar { display: flex; gap: 0; margin-top: 48px; border: 1px solid #1a1a1a; overflow: hidden; }
        .lifestyle-pill { flex: 1; padding: 20px 16px; text-align: center; background: #0f0f0f; border-right: 1px solid #1a1a1a; cursor: default; transition: background 0.3s; }
        .lifestyle-pill:last-child { border-right: none; }
        .lifestyle-pill:hover { background: #141414; }
        .lifestyle-pill-icon { font-size: 20px; margin-bottom: 6px; }
        .lifestyle-pill-label { font-size: 14px; font-weight: 600; margin-bottom: 2px; }
        .lifestyle-pill-en { font-family: 'JetBrains Mono', 'Space Mono', monospace; font-size: 10px; color: #555; letter-spacing: 1px; }

        .dtc-stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 1px; background: #1a1a1a; border: 1px solid #1a1a1a; }
        .dtc-stat { background: #0a0a0a; padding: 34px 20px; text-align: center; }
        .dtc-stat-num { font-family: 'JetBrains Mono', 'Space Mono', monospace; font-size: 36px; font-weight: 700; color: #f59e0b; line-height: 1; margin-bottom: 6px; }
        .dtc-stat-label { font-size: 11px; color: #555; letter-spacing: 1px; text-transform: uppercase; }

        .dtc-section { padding: 100px 40px; max-width: 1200px; margin: 0 auto; }
        .dtc-section-header { margin-bottom: 48px; }
        .dtc-h2 { font-size: clamp(26px, 3.5vw, 42px); font-weight: 700; letter-spacing: -0.02em; margin-bottom: 12px; }
        .dtc-h2-sub { font-size: 15px; color: #666; max-width: 500px; line-height: 1.6; }
        .dtc-divider { height: 1px; background: linear-gradient(90deg, transparent, #282828, transparent); }

        .svc-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(270px, 1fr)); gap: 1px; background: #1e1e1e; border: 1px solid #1e1e1e; }
        .svc-card { background: #0f0f0f; padding: 36px 28px; transition: background 0.3s; }
        .svc-card:hover { background: #131313; }
        .svc-icon { font-size: 24px; color: #f59e0b; margin-bottom: 16px; opacity: 0.8; }
        .svc-title { font-size: 18px; font-weight: 600; margin-bottom: 6px; }
        .svc-sub { font-size: 13px; color: #888; margin-bottom: 14px; line-height: 1.5; }
        .svc-detail { font-size: 12px; color: #555; line-height: 1.6; padding-top: 14px; border-top: 1px solid #1a1a1a; }

        .wf-timeline { position: relative; padding-left: 60px; }
        .wf-timeline::before { content: ''; position: absolute; left: 24px; top: 0; bottom: 0; width: 1px; background: linear-gradient(to bottom, #f59e0b, #3b82f6, #22c55e, #a78bfa, #ef4444, #f59e0b); opacity: 0.3; }
        .wf-step { position: relative; margin-bottom: 4px; background: #0f0f0f; border: 1px solid #1a1a1a; transition: all 0.3s; cursor: pointer; }
        .wf-step:hover, .wf-step.active { background: #111; border-color: #252525; }
        .wf-step-dot { position: absolute; left: -48px; top: 24px; width: 12px; height: 12px; border-radius: 50%; border: 2px solid; background: #0a0a0a; }
        .wf-step-header { display: flex; align-items: center; gap: 16px; padding: 20px 24px; }
        .wf-step-phase { font-family: 'JetBrains Mono', 'Space Mono', monospace; font-size: 24px; font-weight: 700; min-width: 44px; }
        .wf-step-info { flex: 1; }
        .wf-step-title { font-size: 18px; font-weight: 600; }
        .wf-step-en { font-family: 'JetBrains Mono', 'Space Mono', monospace; font-size: 11px; color: #555; letter-spacing: 0.5px; }
        .wf-step-dur { font-family: 'JetBrains Mono', 'Space Mono', monospace; font-size: 12px; color: #555; white-space: nowrap; }
        .wf-step-toggle { font-family: 'JetBrains Mono', 'Space Mono', monospace; font-size: 18px; color: #444; transition: transform 0.3s; min-width: 24px; text-align: center; }
        .wf-step.active .wf-step-toggle { transform: rotate(45deg); }
        .wf-step-body { max-height: 0; overflow: hidden; transition: max-height 0.4s cubic-bezier(.16,1,.3,1), padding 0.3s; padding: 0 24px; }
        .wf-step.active .wf-step-body { max-height: 400px; padding: 0 24px 24px; }
        .wf-step-details { list-style: none; margin-bottom: 16px; }
        .wf-step-details li { font-size: 13px; color: #888; padding: 5px 0; display: flex; gap: 8px; align-items: flex-start; }
        .wf-step-details li::before { content: '—'; color: #333; flex-shrink: 0; }
        .wf-step-deliverable { font-family: 'JetBrains Mono', 'Space Mono', monospace; font-size: 11px; letter-spacing: 1px; padding: 8px 14px; background: #141414; border: 1px solid #1e1e1e; display: inline-block; }
        .wf-step-deliverable span { color: #f59e0b; }

        .proj-filters { display: flex; gap: 8px; margin-bottom: 24px; flex-wrap: wrap; }
        .proj-filter-btn { font-family: 'JetBrains Mono', 'Space Mono', monospace; font-size: 11px; letter-spacing: 1px; padding: 8px 16px; background: transparent; border: 1px solid #252525; color: #666; cursor: pointer; transition: all 0.2s; }
        .proj-filter-btn:hover { border-color: #444; color: #aaa; }
        .proj-filter-btn.active { border-color: #f59e0b; color: #f59e0b; background: rgba(245,158,11,0.05); }
        .proj-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(340px, 1fr)); gap: 2px; }
        .proj-card { background: #0f0f0f; padding: 28px 24px; border-left: 2px solid transparent; transition: all 0.3s; cursor: default; }
        .proj-card:hover { background: #111; border-left-color: var(--pc); }
        .proj-card-top { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 10px; }
        .proj-name { font-size: 17px; font-weight: 600; }
        .proj-status { font-family: 'JetBrains Mono', 'Space Mono', monospace; font-size: 9px; letter-spacing: 1.5px; padding: 3px 10px; border: 1px solid; white-space: nowrap; }
        .st-d { color: #4ade80; border-color: #1a3a2a; }
        .st-l { color: #f59e0b; border-color: #3a2a0a; }
        .st-p { color: #60a5fa; border-color: #1a2a4a; }
        .proj-cat { font-family: 'JetBrains Mono', 'Space Mono', monospace; font-size: 10px; color: #555; letter-spacing: 1px; margin-bottom: 10px; }
        .proj-story { font-size: 13px; color: #777; line-height: 1.6; margin-bottom: 12px; }
        .proj-tags { display: flex; flex-wrap: wrap; gap: 5px; }
        .proj-tag { font-family: 'JetBrains Mono', 'Space Mono', monospace; font-size: 9px; padding: 3px 8px; background: #151515; border: 1px solid #202020; color: #666; letter-spacing: 0.5px; }
        .proj-mkt { font-family: 'JetBrains Mono', 'Space Mono', monospace; font-size: 10px; color: #444; margin-top: 10px; display: flex; align-items: center; gap: 6px; }
        .proj-mkt::before { content: '◉'; font-size: 6px; }

        .pkg-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2px; }
        .pkg-card { background: #0f0f0f; padding: 40px 32px; position: relative; transition: all 0.3s; cursor: pointer; border: 1px solid transparent; }
        .pkg-card:hover, .pkg-card.act { background: #111; }
        .pkg-card.act { border-color: var(--ac); }
        .pkg-badge { position: absolute; top: 0; right: 0; font-family: 'JetBrains Mono', 'Space Mono', monospace; font-size: 9px; letter-spacing: 2px; padding: 5px 12px; background: var(--ac); color: #0a0a0a; font-weight: 700; }
        .pkg-tier { font-family: 'JetBrains Mono', 'Space Mono', monospace; font-size: 11px; letter-spacing: 3px; color: var(--ac); margin-bottom: 4px; }
        .pkg-label { font-size: 22px; font-weight: 600; margin-bottom: 16px; }
        .pkg-price { font-family: 'JetBrains Mono', 'Space Mono', monospace; font-size: 30px; font-weight: 700; color: #fff; margin-bottom: 24px; }
        .pkg-feat { list-style: none; }
        .pkg-feat li { font-size: 13px; color: #777; padding: 7px 0; border-bottom: 1px solid #1a1a1a; display: flex; align-items: center; gap: 8px; }
        .pkg-feat li::before { content: '→'; font-family: 'JetBrains Mono', 'Space Mono', monospace; color: var(--ac); font-size: 11px; }

        .faq-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2px; }
        .faq-card { background: #0f0f0f; padding: 32px 24px; }
        .faq-q { font-size: 16px; font-weight: 600; margin-bottom: 12px; }
        .faq-a { font-size: 13px; color: #777; line-height: 1.7; }

        .dtc-cta { padding: 100px 40px; text-align: center; position: relative; overflow: hidden; border-top: 1px solid #1a1a1a; }
        .dtc-cta::before { content: ''; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 500px; height: 500px; background: radial-gradient(circle, rgba(245,158,11,0.04) 0%, transparent 70%); }
        .cta-title { font-size: clamp(26px, 4vw, 44px); font-weight: 700; letter-spacing: -0.02em; margin-bottom: 14px; position: relative; }
        .cta-sub { font-size: 15px; color: #666; margin-bottom: 36px; position: relative; }
        .cta-btn { display: inline-flex; align-items: center; gap: 12px; padding: 16px 36px; background: #f59e0b; color: #0a0a0a; font-size: 15px; font-weight: 600; border: none; cursor: pointer; transition: all 0.3s; position: relative; }
        .cta-btn:hover { background: #fbbf24; transform: translateY(-2px); box-shadow: 0 8px 30px rgba(245,158,11,0.2); }
        .cta-btn span { font-family: 'JetBrains Mono', 'Space Mono', monospace; transition: transform 0.3s; }
        .cta-btn:hover span { transform: translateX(4px); }

        @media (max-width: 768px) {
          .dtc-hero { padding: 60px 20px 48px; }
          .dtc-section { padding: 60px 20px; }
          .lifestyle-bar { flex-wrap: wrap; }
          .lifestyle-pill { min-width: 48%; }
          .wf-timeline { padding-left: 0; }
          .wf-timeline::before { display: none; }
          .wf-step-dot { display: none; }
          .proj-grid { grid-template-columns: 1fr; }
          .pkg-grid { grid-template-columns: 1fr; }
          .dtc-cta { padding: 60px 20px; }
        }
      `}</style>

      {/* ═══ HERO ═══ */}
      <div className="dtc-hero">
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <FadeIn><div className="dtc-label">DTC SERVICE LINE</div></FadeIn>
          <FadeIn delay={0.1}><h1 className="dtc-h1">AI驱动的<br /><em>生活方式品牌</em>出海</h1></FadeIn>
          <FadeIn delay={0.2}><p className="dtc-sub-hero">我们帮中国制造企业建设DTC独立站——不是搭一个网页，而是围绕「生活方式」叙事，从工厂诊断到品牌建设到AI内容引擎，打造一套会自己生长的全球化增长系统。</p></FadeIn>
          <FadeIn delay={0.3}><div className="lifestyle-bar">
            {LIFESTYLE_PILLARS.map((p, i) => (
              <div key={i} className="lifestyle-pill">
                <div className="lifestyle-pill-icon" style={{ color: p.color }}>{p.icon}</div>
                <div className="lifestyle-pill-label">{p.label}</div>
                <div className="lifestyle-pill-en">{p.en}</div>
              </div>
            ))}
          </div></FadeIn>
        </div>
      </div>

      {/* ═══ STATS ═══ */}
      <div className="dtc-stats">
        <div className="dtc-stat"><div className="dtc-stat-num"><Counter end={11} suffix="+" /></div><div className="dtc-stat-label">已交付项目</div></div>
        <div className="dtc-stat"><div className="dtc-stat-num"><Counter end={3} suffix="年" /></div><div className="dtc-stat-label">DTC实战</div></div>
        <div className="dtc-stat"><div className="dtc-stat-num"><Counter end={8} suffix="+" /></div><div className="dtc-stat-label">覆盖品类</div></div>
        <div className="dtc-stat"><div className="dtc-stat-num"><Counter end={5} /></div><div className="dtc-stat-label">AI Agent</div></div>
        <div className="dtc-stat"><div className="dtc-stat-num"><Counter end={4} /></div><div className="dtc-stat-label">生活方式赛道</div></div>
      </div>

      <div className="dtc-divider" />

      {/* ═══ SERVICES ═══ */}
      <div className="dtc-section">
        <FadeIn><div className="dtc-section-header">
          <div className="dtc-label">WHAT WE BUILD</div>
          <h2 className="dtc-h2">不止建站<br />是搭建品牌增长引擎</h2>
          <p className="dtc-h2-sub">传统建站公司给你一个模板。我们给你一套围绕生活方式叙事的AI驱动系统。</p>
        </div></FadeIn>
        <FadeIn delay={0.1}><div className="svc-grid">
          {SERVICES_GRID.map((s, i) => (
            <div key={i} className="svc-card">
              <div className="svc-icon">{s.icon}</div>
              <div className="svc-title">{s.title}</div>
              <div className="svc-sub">{s.sub}</div>
              <div className="svc-detail">{s.details}</div>
            </div>
          ))}
        </div></FadeIn>
      </div>

      <div className="dtc-divider" />

      {/* ═══ WORKFLOW ═══ */}
      <div className="dtc-section">
        <FadeIn><div className="dtc-section-header">
          <div className="dtc-label">DTC WORKFLOW</div>
          <h2 className="dtc-h2">从工厂到全球消费者<br />完整交付流程</h2>
          <p className="dtc-h2-sub">6个阶段，20周核心交付，持续运营陪跑。点击展开查看每个阶段的详细内容。</p>
        </div></FadeIn>
        <FadeIn delay={0.1}><div className="wf-timeline">
          {WORKFLOW_STEPS.map((s, i) => (
            <div key={i} className={`wf-step ${expandedStep === i ? "active" : ""}`} onClick={() => setExpandedStep(expandedStep === i ? null : i)}>
              <div className="wf-step-dot" style={{ borderColor: s.color }} />
              <div className="wf-step-header">
                <div className="wf-step-phase" style={{ color: s.color + "44" }}>{s.phase}</div>
                <div className="wf-step-info">
                  <div className="wf-step-title">{s.title}</div>
                  <div className="wf-step-en">{s.en}</div>
                </div>
                <div className="wf-step-dur">{s.duration}</div>
                <div className="wf-step-toggle">+</div>
              </div>
              <div className="wf-step-body">
                <ul className="wf-step-details">{s.details.map((d, j) => <li key={j}>{d}</li>)}</ul>
                <div className="wf-step-deliverable"><span>DELIVERABLE →</span> {s.deliverable}</div>
              </div>
            </div>
          ))}
        </div></FadeIn>
      </div>

      <div className="dtc-divider" />

      {/* ═══ PROJECTS ═══ */}
      <div className="dtc-section">
        <FadeIn><div className="dtc-section-header">
          <div className="dtc-label">PORTFOLIO</div>
          <h2 className="dtc-h2">11+项目，4条生活方式赛道</h2>
          <p className="dtc-h2-sub">从家具到卫浴到绿植，每个项目都是「中国制造 → 全球生活方式品牌」的实战。</p>
        </div></FadeIn>
        <FadeIn delay={0.05}><div className="proj-filters">
          <button className={`proj-filter-btn ${!filterPillar ? "active" : ""}`} onClick={() => setFilterPillar(null)}>ALL · {PROJECTS.length}</button>
          {LIFESTYLE_PILLARS.map(p => (
            <button key={p.label} className={`proj-filter-btn ${filterPillar === p.label ? "active" : ""}`} onClick={() => setFilterPillar(filterPillar === p.label ? null : p.label)}>
              {p.icon} {p.label} · {PROJECTS.filter(pr => pr.pillar === p.label).length}
            </button>
          ))}
        </div></FadeIn>
        <FadeIn delay={0.1}><div className="proj-grid">
          {filteredProjects.map((p, i) => {
            const pc = LIFESTYLE_PILLARS.find(lp => lp.label === p.pillar)?.color || "#f59e0b";
            return (
              <div key={i} className="proj-card" style={{ "--pc": pc } as React.CSSProperties}>
                <div className="proj-card-top">
                  <div className="proj-name">{p.name}</div>
                  <div className={`proj-status ${p.status === "DELIVERED" ? "st-d" : p.status === "LIVE" ? "st-l" : "st-p"}`}>{p.status}</div>
                </div>
                <div className="proj-cat">{p.cat}</div>
                <div className="proj-story">{p.story}</div>
                <div className="proj-tags">{p.tags.map(t => <span key={t} className="proj-tag">{t}</span>)}</div>
                <div className="proj-mkt">Market: {p.market}</div>
              </div>
            );
          })}
        </div></FadeIn>
      </div>

      <div className="dtc-divider" />

      {/* ═══ PACKAGES ═══ */}
      <div className="dtc-section">
        <FadeIn><div className="dtc-section-header">
          <div className="dtc-label">PACKAGES</div>
          <h2 className="dtc-h2">三档服务，按需选择</h2>
          <p className="dtc-h2-sub">从轻量验证到全球化旗舰，匹配不同阶段的出海需求。</p>
        </div></FadeIn>
        <FadeIn delay={0.1}><div className="pkg-grid">
          {PACKAGES.map((pkg, i) => (
            <div key={i} className={`pkg-card ${activePkg === i ? "act" : ""}`} style={{ "--ac": pkg.accent } as React.CSSProperties} onClick={() => setActivePkg(i)}>
              {"featured" in pkg && pkg.featured && <div className="pkg-badge">POPULAR</div>}
              <div className="pkg-tier">{pkg.tier}</div>
              <div className="pkg-label">{pkg.label}</div>
              <div className="pkg-price">{pkg.price}</div>
              <ul className="pkg-feat">{pkg.features.map(f => <li key={f}>{f}</li>)}</ul>
            </div>
          ))}
        </div></FadeIn>
      </div>

      <div className="dtc-divider" />

      {/* ═══ FAQ ═══ */}
      <div className="dtc-section">
        <FadeIn><div className="dtc-section-header">
          <div className="dtc-label">WHY AIMAKOX</div>
          <h2 className="dtc-h2">为什么找我们做DTC</h2>
        </div></FadeIn>
        <FadeIn delay={0.1}><div className="faq-grid">
          {[
            { q: "和普通建站公司有什么区别？", a: "他们交付一个网站。我们交付一套AI增长系统——产品描述自动生成、GEO内容持续产出、智能客服7×24在线。这些是架构层面的原生能力，不是后期加的插件。" },
            { q: "为什么聚焦「生活方式」？", a: "因为海外消费者买的不是一个花盆或一张床，是一种生活方式的解决方案。我们帮工厂老板把产品思维转化为场景思维——卖的不是墨菲床，是Tiny Home的无限可能。" },
            { q: "适合什么阶段的企业？", a: "年营收3000万以上、有成熟产品线、想从OEM/ODM转型自有品牌出海的工厂或贸易商。你需要的不是一个便宜的站，是一套能打的品牌基础设施。" },
            { q: "和Aimakox其他服务的关系？", a: "DTC建站是我们AI Agent和Workflow能力的最佳落地场景。企业Agent部署是底座，DTC独立站是最能让客户直观看到ROI的应用层。" },
            { q: "交付周期和合作方式？", a: "核心建站20周交付，后续持续运营陪跑。我们不做一锤子买卖——AI内容引擎会持续产出，按季度做策略复盘和迭代。" },
            { q: "能看到实际案例吗？", a: "11+个已交付项目覆盖家具、卫浴、五金等品类。部分案例因客户保密协议无法公开展示，但可以在策略诊断会上详细沟通。" },
          ].map((item, i) => <div key={i} className="faq-card"><div className="faq-q">{item.q}</div><div className="faq-a">{item.a}</div></div>)}
        </div></FadeIn>
      </div>

      {/* ═══ CTA ═══ */}
      <div className="dtc-cta">
        <FadeIn>
          <div className="cta-title">准备好让你的品牌<br />走向全球了吗？</div>
          <div className="cta-sub">预约一次免费的DTC策略诊断，我们会针对你的品类给出具体方案建议</div>
          <button className="cta-btn" onClick={() => router.push("/contact")}>预约策略诊断 <span>→</span></button>
        </FadeIn>
      </div>

      <div style={{ padding: "28px 40px", borderTop: "1px solid #1a1a1a", textAlign: "center" }}>
        <div style={{ fontFamily: "'JetBrains Mono', 'Space Mono', monospace", fontSize: 10, color: "#2a2a2a", letterSpacing: 2 }}>AIMAKOX · AI-POWERED LIFESTYLE DTC · EST. 2023</div>
      </div>
    </div>
  );
}
