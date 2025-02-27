import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

export const Navbar = () => {
  return (
    <header className='fixed left-0 right-0 top-0 z-50 flex w-full flex-row items-center justify-between bg-background/80 px-14 py-5 backdrop-blur-xl'>
      <div className='flex flex-row items-center gap-2'>
        <div className='rounded-md bg-foreground p-[2px]'>
          <Image
            src='/ColonyLogoWhite.png'
            alt='Join Colony Logo'
            width={22}
            height={22}
          />
        </div>

        <h1 className='font-heading text-lg font-bold tracking-normal'>
          Colony
        </h1>
      </div>
      <Button size={'sm'} className='rounded-3xl'>
        Download on iOS
      </Button>
    </header>
  )
}
