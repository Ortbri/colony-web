'use client'
import React from 'react'
import { BentoGrid, BentoGridItem } from './framer/BentoGrid'
import { Button } from './ui/button'
import Link from 'next/link'

const Skeleton = () => (
  <div className='flex h-full min-h-[6rem] w-full flex-1 rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800'></div>
)

// Define two sets of items
const hirerItems = [
  {
    title: 'Efficient Hiring Process',
    header: <Skeleton />
    // description and icon can be uncommented or added as needed
  },
  {
    title: 'Cost Effective Solutions',
    header: <Skeleton />
  },
  {
    title: 'Wide Range of Skills',
    header: <Skeleton />
  }
]

const workerItems = [
  {
    title: 'Flexible Working Hours',
    header: <Skeleton />
  },
  {
    title: 'Diverse Opportunities',
    header: <Skeleton />
  },
  {
    title: 'Competitive Pay',
    header: <Skeleton />
  }
]

function Features() {
  // State to toggle between hirer and worker views
  const [view, setView] = React.useState('hirer')

  return (
    <>
      <div className='flex flex-col items-center px-4 py-20 text-6xl font-semibold text-neutral-600 dark:text-neutral-400 sm:text-6xl lg:text-8xl'>
        <h1>Features</h1>
        <div className='flex flex-row gap-5 py-6'>
          <Button
            size={'lg'}
            onClick={() => setView('hirer')}
            variant={view === 'hirer' ? undefined : 'outline'}
          >
            Hirer
          </Button>
          <Button
            size={'lg'}
            onClick={() => setView('worker')}
            variant={view === 'worker' ? undefined : 'outline'}
          >
            Worker
          </Button>
        </div>
      </div>
      <BentoGrid className='mx-auto max-w-4xl'>
        {view === 'hirer'
          ? hirerItems.map((item, i) => (
              <BentoGridItem key={i} title={item.title} header={item.header} />
            ))
          : workerItems.map((item, i) => (
              <BentoGridItem key={i} title={item.title} header={item.header} />
            ))}
      </BentoGrid>
      <div className='flex flex-col'>
        <Link href='/privacy'>GO TO PRIVACY</Link>
        <Link href='/tos'>GO TO TERMS OF SERVICE</Link>
      </div>
    </>
  )
}

export default Features
