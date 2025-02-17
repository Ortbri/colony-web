import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='mx-auto flex w-full flex-col items-center gap-4 px-14 pb-5 pt-24'>
      <div className='flex flex-row gap-6'>
        <Link
          className='group relative text-muted-foreground transition-colors hover:text-foreground'
          href={'/'}
        >
          <span className='relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-foreground after:transition-all after:duration-300 group-hover:after:w-full'>
            Privacy Policy
          </span>
        </Link>
        <Link
          className='group relative text-muted-foreground transition-colors hover:text-foreground'
          href={'/'}
        >
          <span className='relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-foreground after:transition-all after:duration-300 group-hover:after:w-full'>
            Terms of use
          </span>
        </Link>
      </div>
      <p className='text-xs font-thin text-muted-foreground'>
        © {currentYear} Copyright Colony. All rights reserved.
      </p>
    </footer>
  )
}
