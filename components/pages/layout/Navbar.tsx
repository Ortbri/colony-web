import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

export const Navbar = () => {
  return (
    <header className='flex flex-row items-center justify-between px-14 py-5'>
      <div className='flex flex-row items-center gap-[2px]'>
        <Image
          src='/ColonyLogoWhite.png'
          alt='Join Colony Logo'
          className='invert dark:invert-0'
          width={38}
          height={38}
        />
        <h1 className='text-xl font-semibold'>Colony</h1>
      </div>
      <Button size={'sm'} className='rounded-3xl'>
        Download on iOS
      </Button>
    </header>
  )
}
