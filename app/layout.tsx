import type { Metadata } from 'next'
import { Toaster } from 'react-hot-toast'
import './globals.css'

export const metadata: Metadata = {
  title: 'Zenix Web - Agence web minimaliste premium',
  description: 'Transformez vos visiteurs en clients avec Zenix Web. Experts en sites web rapides, SEO et conversion.',
  keywords: 'agence web, création site, SEO, conversion, PME, commerce local',
  openGraph: {
    title: 'Zenix Web - Agence web minimaliste premium',
    description: 'Transformez vos visiteurs en clients avec Zenix Web.',
    type: 'website',
    url: 'https://zenixweb.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="bg-white text-primary">
        {children}
        <Toaster
          position="bottom-center"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#0A0A0A',
              color: '#FFFFFF',
              border: '1px solid #EBEBEB',
            },
          }}
        />
      </body>
    </html>
  )
}
