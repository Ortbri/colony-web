import type { Metadata } from 'next'
import { ThemeProvider } from '@/providers/ThemeProvder'
import { Navbar } from '@/components/pages/layout/Navbar'
import './globals.css'
import Footer from '@/components/pages/layout/Footer'

export const metadata: Metadata = {
  title: 'Join Colony App',
  description: 'Town Centric Gig Marketplace'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body>
        <ThemeProvider enableSystem>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
