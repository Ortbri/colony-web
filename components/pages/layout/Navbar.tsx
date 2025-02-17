import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

export const Navbar = () => {
  return (
    <header className='fixed left-0 right-0 top-0 z-50 flex w-full flex-row items-center justify-between bg-background/80 px-14 py-5 backdrop-blur-xl'>
      <div className='flex flex-row items-center gap-[2px]'>
        <Image
          src='/ColonyLogoWhite.png'
          alt='Join Colony Logo'
          className='invert dark:invert-0'
          width={40}
          height={40}
        />
        <h1 className='font-heading text-xl font-semibold'>Colony</h1>
      </div>
      <Button size={'sm'} className='rounded-3xl'>
        Download on iOS
      </Button>
    </header>
  )
}
