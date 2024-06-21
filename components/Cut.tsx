import React from 'react'
import { FlipWords } from './framer/FlipWords'
import { BentoGrid, BentoGridItem } from './framer/BentoGrid/BentoGrid'
import {
  FaProjectDiagram,
  FaUmbrellaBeach,
  FaUserFriends
} from 'react-icons/fa'
import { cn } from '@/lib/utils'

const words = [
  '2 hours a day',
  '14 hours a week',
  '56 hours a month',
  '28 days a year'
]

function Cut() {
  return (
    <section className='py-20'>
      <div className='flex w-full flex-1 flex-col rounded-3xl border border-neutral-200 bg-white p-4 shadow-xl shadow-black/[0.1] dark:border-white/[0.1] dark:bg-black dark:shadow-white/[0.05]'>
        {/* top */}
        <div className='flex h-60 flex-1 flex-col items-center'>
          <h3 className='text-xl text-gray-400'>
            The hidden cost of household tasks
          </h3>
          <div className='text-6xl font-semibold'>
            <FlipWords words={words} />
          </div>
        </div>
        {/* bottom */}
        <div className='mt-10 p-4'>
          <BentoGrid className='mx-auto max-w-4xl md:auto-rows-[20rem]'>
            {items.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                // header={item.header}
                icon={item.icon}
              />
            ))}
          </BentoGrid>
        </div>
      </div>
    </section>
  )
}

const Skeleton = () => (
  <div className='dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex h-full min-h-[6rem] w-full flex-1 rounded-xl border border-transparent bg-neutral-100 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] dark:border-white/[0.2] dark:bg-black'></div>
)

const items = [
  {
    icon: <FaUserFriends className='h-6 w-6 text-neutral-500' />,
    title: 'Family Time',
    description: (
      <span className='text-sm'>
        Missing out on quality time with family and friends.
      </span>
    ),
    // header: <Skeleton />,
    className: 'sm:col-span-1'
  },
  {
    icon: <FaProjectDiagram className='h-6 w-6 text-neutral-500' />,
    title: 'Personal Projects',
    description: (
      <span className='text-sm'>
        Less time for hobbies and personal projects.
      </span>
    ),
    // header: <Skeleton />,
    className: 'sm:col-span-1'
  },
  {
    icon: <FaUmbrellaBeach className='h-6 w-6 text-neutral-500' />,
    title: 'Relaxation',
    description: (
      <span className='text-sm'>
        Reduced time for relaxation and self-care.
      </span>
    ),
    // header: <Skeleton />,
    className: 'sm:col-span-1'
  }
]

export default Cut
