'use client'

import { useState } from 'react'

export default function WeChatQR() {
  const [errored, setErrored] = useState(false)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
      <div className="wechat-qr-wrap">
        {errored ? (
          <div style={{
            width: 180, height: 180,
            background: 'var(--surface2)',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            gap: 8, borderRadius: 4,
          }}>
            <span style={{ fontSize: 32 }}>💬</span>
            <span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: 10, color: 'var(--muted)', textAlign: 'center', padding: '0 12px' }}>
              WeChat QR
            </span>
          </div>
        ) : (
          <img
            src="/wechat-makox.jpg"
            alt="扫码添加 Makox 微信"
            className="wechat-qr-img"
            onError={() => setErrored(true)}
          />
        )}
      </div>
      <p className="wechat-qr-label">扫码添加 Makox</p>
      <p className="wechat-qr-sub">聊聊你的业务流程，看看 AI 先适合帮你跑哪一步。</p>
      <p className="wechat-qr-note">微信 · Makox / 广东 深圳</p>
    </div>
  )
}
