import type { Metadata, Viewport } from 'next'
import { DM_Sans, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { WhatsAppChat } from '@/components/whatsapp-chat'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
})

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: 'Beyond the Step | Scuola di Danza - Linda Franzoso',
  description: 'Scomponi il movimento, libera l\u2019emozione: dove la tecnica svanisce, l\u2019anima diventa visibile. Scuola di danza a Castelfranco di Sopra, Arezzo.',
  icons: {
    icon: '/images/image-high-f03vod.webp',
    shortcut: '/images/image-high-f03vod.webp',
    apple: '/images/image-high-f03vod.webp',
  },
}

export const viewport: Viewport = {
  themeColor: '#2a2017',
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="it" className={`${dmSans.variable} ${playfairDisplay.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
        <WhatsAppChat />
      </body>
    </html>
  )
}
