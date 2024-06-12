import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from './provider'

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
          <main className='relative overflow-hidden'>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
