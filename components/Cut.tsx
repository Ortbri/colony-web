import React from 'react'
import { FlipWords } from './framer/FlipWords'
import { HoverEffect } from './framer/CardHover'
import { Button } from './ui/button'
import Link from 'next/link'

const words = [
  '2 hours a day',
  '14 hours a week',
  '56 hours a month',
  '28 days a year'
]

const tasks = [
  {
    title: 'Dog Walking',
    description:
      'Walking our dogs every day is a necessity for the well-being of our pet.',
    link: ''
  },
  {
    title: 'Yard Work',
    description:
      'Keeping your yard clean and maintained can be time-consuming.',
    link: ''
  },
  {
    title: 'Household tasks',
    description:
      'Daily chores around the house that take up a significant amount of time.',
    link: ''
  }
]

const personal = [
  {
    title: 'Family',
    description: 'Missing out on quality time with family and friends.',
    link: ''
  },
  {
    title: 'Personal Projects',
    description: 'Less time for hobbies and personal projects.',
    link: ''
  },
  {
    title: 'Time for you',
    description: 'Reduced time for relaxation and self-care.',
    link: ''
  }
]

function Cut() {
  return (
    <section className='py-20'>
      {/* card */}
      <div className='flex w-full flex-1 flex-col rounded-3xl border border-transparent bg-white p-4 shadow-input transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none'>
        {/* item 1 */}
        <div className='flex flex-1 flex-col items-center gap-8 pt-14'>
          <div className='text-7xl font-semibold'>
            <FlipWords words={words} />
          </div>
          <h3 className='text-xl text-gray-400'>
            The average time spent on everyday tasks like...
          </h3>
        </div>
        {/* item 2 */}
        <div className='mx-auto max-w-5xl px-8'>
          <HoverEffect items={tasks} />
        </div>
        {/* item 3 */}
        <div className='flex flex-col items-center gap-4'>
          <h3 className='text-4xl font-semibold'>That's a lot of time</h3>
          <p className='text-xl text-gray-400'>Taking time away from...</p>
        </div>
        <div className='mx-auto max-w-5xl px-8'>
          <HoverEffect items={personal} />
        </div>
        {/* link research */}
        <Link
          className='flex flex-col items-center'
          href='https://www.bls.gov/news.release/atus.nr0.htm#:~:text=(See%20table%201.),(See%20table%201.)'
          passHref
        >
          <Button variant={'link'} className='text-xs text-gray-500'>
            American Time Use Survey Summary
          </Button>
        </Link>
      </div>
    </section>
  )
}

export default Cut
