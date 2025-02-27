import React from 'react'

import Link from 'next/link'
// import { ThemeToggle } from '@/components/theme-toggle'

export default function Footer() {
  // const currentYear = new Date().getFullYear()

  return (
    <footer className='mx-auto flex w-full flex-col items-center gap-4 px-14 pt-10 pb-5'>
      {/* <ThemeToggle /> */}
      <div className='flex flex-row gap-6'>
        {/* <ThemeToggle /> */}
        <Link
          className='group text-muted-foreground hover:text-foreground relative transition-colors'
          href={'/legal/privacy'}
        >
          <span className='after:bg-foreground relative text-xs font-thin after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:transition-all after:duration-300 group-hover:after:w-full'>
            Privacy Policy
          </span>
        </Link>
        <Link
          className='group text-muted-foreground hover:text-foreground relative transition-colors'
          href={'/legal/tos'}
        >
          <span className='after:bg-foreground relative text-xs font-thin after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:transition-all after:duration-300 group-hover:after:w-full'>
            Terms of use
          </span>
        </Link>
      </div>
      <p className='text-muted-foreground text-xs font-thin'>
        © 2025 Copyright Colony. All rights reserved.
      </p>
    </footer>
  )
}
