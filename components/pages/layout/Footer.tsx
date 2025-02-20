import React from 'react'

import Link from 'next/link'
import { ThemeToggle } from '@/components/theme-toggle'

export default function Footer() {
  // const currentYear = new Date().getFullYear()

  return (
    <footer className='mx-auto flex w-full flex-col items-center gap-4 px-14 pb-5 pt-10'>
      <ThemeToggle />
      <div className='flex flex-row gap-6'>
        {/* <ThemeToggle /> */}
        <Link
          className='group relative text-muted-foreground transition-colors hover:text-foreground'
          href={'/'}
        >
          <span className='relative text-xs font-thin after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-foreground after:transition-all after:duration-300 group-hover:after:w-full'>
            Privacy Policy
          </span>
        </Link>
        <Link
          className='group relative text-muted-foreground transition-colors hover:text-foreground'
          href={'/'}
        >
          <span className='relative text-xs font-thin after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-foreground after:transition-all after:duration-300 group-hover:after:w-full'>
            Terms of use
          </span>
        </Link>
      </div>
      <p className='text-xs font-thin text-muted-foreground'>
        © 2025 Copyright Colony. All rights reserved.
      </p>
    </footer>
  )
}
