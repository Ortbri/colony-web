import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/previous/Navbar'
import { ThemeProvider } from 'next-themes'

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
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <main className='relative overflow-hidden'>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
