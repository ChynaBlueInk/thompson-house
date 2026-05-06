import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Thompson House | Community Arts & Cultural Centre, Levin',
  description:
    'Thompson House is a heritage 1920s community arts and cultural centre in Levin, New Zealand. Hire rooms for meetings, exhibitions, workshops, weddings and more.',
  keywords: [
    'Thompson House',
    'Levin',
    'community centre',
    'heritage building',
    'arts centre',
    'room hire',
    'Horowhenua',
    'exhibitions',
    'gallery',
  ],
}

export const viewport: Viewport = {
  themeColor: '#2D5016',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
