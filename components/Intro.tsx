import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import { Spotlight } from './framer/Spotlight'

function Intro() {
  return (
    <div className='flex min-h-44 flex-col px-4 pb-20 pt-36'>
      {/* spotlight */}
      <div>
        <Spotlight
          className='-left-10 -top-14 h-screen w-[100vw] md:-left-32 md:-top-20'
          fill='white'
        />
        <Spotlight className='top-30 left-80 h-[80vh] w-[100vw]' fill='white' />
        <Spotlight className='left-full top-0 h-[80vh] w-[50vw]' fill='white' />
      </div>
      {/* details */}
      <div className='mb-24 flex w-full max-w-xl flex-col gap-5'>
        <h1 className='text-7xl font-semibold'>
          Free Your Time, Reclaim Your Weekends
        </h1>
        <p className='text-lg text-neutral-600 dark:text-neutral-400'>
          Connect with local help for all your tasks and enjoy more free time.
          Small business help, dog walking, yard work, and more coming soon!
        </p>
        <div className='flex gap-3'>
          <Button>Download</Button>
          <Button variant={'outline'}>Learn More</Button>
        </div>
      </div>
      {/* neb */}
      <div className='flex h-full flex-1 items-center justify-center py-14'>
        <div>
          <Image
            src='/NIF.png'
            width={30}
            height={30}
            alt='Nebraska Innovation Fund'
          />
        </div>

        <div className='ml-3'>
          <p className='-mb-1 text-xs font-light text-neutral-600 dark:text-neutral-400'>
            Funded by
          </p>
          <b className='text-xs text-white'>Nebraska Innovation Fund</b>
        </div>
      </div>
    </div>
  )
}

export default Intro
