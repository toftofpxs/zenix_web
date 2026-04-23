import type { Metadata } from 'next'
import { Syne, DM_Mono } from 'next/font/google'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  weight: ['400', '700', '800'],
})

const mono = DM_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  title: 'Zenix Studio',
  description: 'Studio web premium: design, performance et experiences digitales immersives.',
  openGraph: {
    title: 'Zenix Studio',
    description: 'Landing studio moderne avec animations fluides et interface premium.',
    type: 'website',
    url: 'https://zenix.studio',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${syne.variable} ${mono.variable} bg-paper text-ink`}>
        {children}
      </body>
    </html>
  )
}
