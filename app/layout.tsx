import type { Metadata } from 'next'
import { ThemeProvider } from '@/providers/ThemeProvder'
import { Navbar } from '@/components/pages/layout/Navbar'
import './globals.css'
import Footer from '@/components/pages/layout/Footer'
import { Quicksand, Outfit } from 'next/font/google'

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-quicksand'
})

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-outfit'
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
      <body className={`${quicksand.variable} ${outfit.variable} font-sans`}>
        <ThemeProvider enableSystem>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
