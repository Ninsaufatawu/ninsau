import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ninsau',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/ninsau-logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/ninsau-logo.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/ninsau-logo.png',
  },
  description: 'Created by Ninsau',
  generator: 'ninsau.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className={GeistSans.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
