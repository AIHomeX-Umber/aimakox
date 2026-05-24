import type { Metadata } from 'next'
import { DM_Serif_Display, DM_Mono, Syne } from 'next/font/google'
import './globals.css'

const dmSerif = DM_Serif_Display({
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-dm-serif',
  display: 'swap',
})

const dmMono = DM_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-dm-mono',
  display: 'swap',
})

const syne = Syne({
  weight: ['400', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Makox · AI-Native Manufacturing Operations',
  description:
    '帮制造业企业搭建真实可用的 AI 工作流。进驻现场，梳理流程，2–4 周交付可运行的 Workflow。',
  openGraph: {
    title: 'Makox · AI-Native Manufacturing Operations',
    description:
      'Makox works with export-driven manufacturers to integrate AI into sales, operations, workflows, and global growth.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="zh"
      className={`${dmSerif.variable} ${dmMono.variable} ${syne.variable}`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Noto+Sans+SC:wght@300;400;500;700&family=JetBrains+Mono:wght@400;500;700&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
