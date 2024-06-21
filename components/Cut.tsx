import React from 'react'
import { FlipWords } from './framer/FlipWords'
import { HoverEffect } from './framer/CardHover'
import { Button } from './ui/button'

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
            The Average time spent on everday tasks like...
          </h3>
        </div>
        {/* item 2 */}
        <div className='mx-auto max-w-5xl px-8'>
          <HoverEffect items={tasks} />
        </div>

        <div className='flex flex-col items-center justify-center text-4xl font-semibold'>
          Taking time away from
          <div className='mx-auto max-w-5xl px-8'>
            <HoverEffect items={personal} />
          </div>
        </div>

        {/* link research */}
        <Button variant={'link'} className='text-xs text-gray-500'>
          {/* https://www.bls.gov/news.release/atus.nr0.htm#:~:text=(See%20table%201.),(See%20table%201.) */}
          American Time Use Survey Summary
        </Button>
      </div>
    </section>
  )
}

/* ----------------------------- flipping words ----------------------------- */
const words = [
  '2 hours a day',
  '14 hours a week',
  '56 hours a month',
  '28 days a year'
]
/* ---------------------------------- tasks --------------------------------- */
export const tasks = [
  {
    title: 'Dog Walking',
    description:
      'Walking our dogs everday is a necessity for the well being of our pet.',
    link: 'https://stripe.com'
  },
  {
    title: 'Yard Work',
    description:
      'A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.',
    link: 'https://netflix.com'
  },
  {
    title: 'Household tasks',
    description:
      'A multinational technology company that specializes in Internet-related services and products.',
    link: 'https://google.com'
  }
]
/* -------------------------------- personal -------------------------------- */
export const personal = [
  {
    title: 'Family',
    description: ' Missing out on quality time with family and friends.',
    link: 'https://stripe.com'
  },
  {
    title: 'Personal Projects',
    description: 'Less time for hobbies and personal projects.',
    link: 'https://netflix.com'
  },
  {
    title: 'Time for you',
    description: '  Reduced time for relaxation and self-care.',
    link: 'https://google.com'
  }
]

export default Cut
