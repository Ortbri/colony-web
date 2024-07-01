import React from 'react'
import { Button } from '../../ui/button'
import Image from 'next/image'
import { Spotlight } from '../../framer/Spotlight'

function Intro() {
  return (
    <section className='mx-auto flex w-full max-w-7xl flex-col pb-14 pt-52'>
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
      <div className='flex flex-row'>
        <div className='flex w-full max-w-xl flex-col gap-8'>
          <h1 className='text-6xl font-bold lg:text-7xl'>
            Free Your Time, Reclaim Your Weekends, One task at a time
          </h1>
          <p className='text-lg text-neutral-600 dark:text-neutral-400'>
            Connect with local help for all your tasks and enjoy more free time.
            Small business help, dog walking, yard work, and more coming soon!
          </p>
          <div className='flex gap-3'>
            <Button>Download now</Button>
            {/* apple or android */}
          </div>
        </div>
        {/* right of title */}
        <div className='hidden flex-1 items-end justify-end lg:flex'>
          <Image
            src='/ColonyAppImage.png'
            className='-mr-28 -mt-20'
            width={400}
            height={400}
            alt='Colony App Home Page'
          />
        </div>
      </div>
      {/* NIF */}
      <div className='flex h-full flex-1 items-center justify-center py-14'>
        <div>
          <Image
            src='/NIF.png'
            width={30}
            height={30}
            alt='Nebraska Innovation Fund'
          />
        </div>
        {/* neb */}
        <div className='ml-3'>
          <p className='-mb-1 text-xs font-light text-neutral-600 dark:text-neutral-400'>
            Funded by
          </p>
          <b className='text-xs text-white'>Nebraska Innovation Fund</b>
        </div>
      </div>
    </section>
  )
}

export default Intro
