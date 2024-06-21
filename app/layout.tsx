import type { Metadata } from 'next'
import { ThemeProvider } from './provider'
import { Navbar } from '@/components/Navbar'
import { navItems } from '@/data'
import Footer from '@/components/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: 'Join Colony App',
  description: 'Community based gig app'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
        >
          <Navbar navItems={navItems} />
          <main className='relative overflow-hidden'>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
