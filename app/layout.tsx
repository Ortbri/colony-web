import type { Metadata } from 'next'
import { ThemeProvider } from '@/context/ThemeProvder'
import { Navbar } from '@/components/pages/layout/Navbar'
import { Geist_Mono, Geist } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import Footer from '@/components/pages/layout/Footer'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Colony App',
  description: 'Community based gig marketplace'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
