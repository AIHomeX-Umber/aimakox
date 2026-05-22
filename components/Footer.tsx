export default function Footer() {
  return (
    <footer className="footer-v2">
      <div className="container">
        <div className="footer-cols">
          {/* Left: brand */}
          <div>
            <div className="footer-logo-text">
              Ma<span className="logo-k">k</span>ox.AI
            </div>
            <div className="footer-tagline">马时科技 · 苏州 × 香港</div>
          </div>

          {/* Middle: contact */}
          <div>
            <div className="footer-col-label">联系</div>
            <a href="mailto:MashiTeam@163.com" className="footer-email-link">
              MashiTeam@163.com
            </a>
            <div className="footer-wechat-hint">微信：扫码 · 首页底部</div>
          </div>

          {/* Right: legal */}
          <div>
            <a
              href="https://opceo.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-opceo-link"
            >
              OPCEO.ai ↗
            </a>
            <div className="footer-copy">© 2026 Mashi Technology</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
