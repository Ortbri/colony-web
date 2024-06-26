'use client'
import React from 'react'
// import
import { BentoGrid, BentoGridItem } from '../BentoGrid'
// import { BentoGrid, BentoGridItem } from '../BentoGrid'
import { cn } from '@/lib/utils'
import {
  FaClipboard,
  FaFileAlt,
  FaLightbulb,
  FaSmile,
  FaFileSignature
} from 'react-icons/fa'
import Image from 'next/image'

function HirerGrid() {
  return (
    <BentoGrid className='mx-auto'>
      {/* {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={cn('[&>p:text-lg]', item.className)}
            icon={item.icon}
            spanClass={item.spanClass} // Include spanClass for grid item spanning
            // titlePosition={}
            titlePosition='left'
          />
        ))} */}
      <BentoGridItem
        // key={i}
        title={'Create Post'}
        description={'description is here'}
        header={<PostSkelly />}
        className={cn('md:col-span-6')}
        icon={<FaSmile className='h-4 w-4 text-neutral-500' />}
      />
    </BentoGrid>
  )
}
/* -------------------------------------------------------------------------- */
/*                                  skeleton                                  */
/* -------------------------------------------------------------------------- */
const Skeleton = () => (
  <div className='dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex h-full min-h-[6rem] w-full flex-1 rounded-xl border border-transparent bg-neutral-100 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] dark:border-white/[0.2] dark:bg-black'></div>
)

const PostSkelly = () => (
  <div className='flex flex-col items-center rounded-lg border bg-white p-2 shadow-md dark:bg-gray-800'>
    <div className='w-full max-w-full overflow-hidden'>
      <Image
        src='/JobPost.png'
        alt='Posting a job image'
        width={500}
        height={90}
        className='h-auto w-full rounded-lg object-cover'
      />
    </div>
  </div>
)
const RequestSkelly = () => (
  <div className='dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex h-full min-h-[6rem] w-full flex-1 rounded-xl border-transparent bg-neutral-100 dark:border-white/[0.2] dark:bg-black'>
    {/* <FaClipboard color='white' size={100} /> */}
    <div className='flex flex-1 items-start'>
      <Image
        src='/JobRequests.png'
        alt='Posting a job image'
        width={900}
        height={200}
      />
    </div>
  </div>
)
const PaySkelly = () => (
  <div className='dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex h-full min-h-[6rem] w-full flex-1 rounded-xl border-transparent bg-neutral-100 dark:border-white/[0.2] dark:bg-black'>
    {/* <FaClipboard color='white' size={100} /> */}
    <div className='justify-cente r flex flex-1 items-center'>
      <Image
        src='/JobPay.png'
        alt='Posting a job image'
        width={600}
        height={200}
      />
    </div>
  </div>
)
/* -------------------------------------------------------------------------- */
/*                                    data                                    */
/* -------------------------------------------------------------------------- */
const items = [
  {
    title: 'Post a job',
    description: (
      <span className='text-sm'>Send a ping to workers in your town.</span>
    ),
    header: <PostSkelly />,
    className: 'lg:col-span-4',
    icon: <FaClipboard className='h-4 w-4 text-neutral-500' />,
    spanClass: 'lg:col-span-3' // Example spanning class
  },
  {
    title: 'Receive Requests',
    description: (
      <span className='text-sm'>Requests from workers in town.</span>
    ),
    header: <RequestSkelly />,
    className: 'md:col-span-2',
    icon: <FaFileAlt className='h-4 w-4 text-neutral-500' />,
    spanClass: 'md:col-span-2'
  },
  {
    title: 'Select a worker & Pay',

    description: (
      <span className='text-sm'>
        Payment is held at Colony until job is complete.
      </span>
    ),
    header: <PaySkelly />,
    className: 'md:col-span-1',
    icon: <FaLightbulb className='h-4 w-4 text-neutral-500' />,
    spanClass: 'md:col-span-1'
  },
  {
    title: 'Dispute Support',
    description: (
      <span className='text-sm'>
        If job is not complete, payment can be sent back.
      </span>
    ),
    header: <Skeleton />,
    className: 'md:col-span-1',
    icon: <FaSmile className='h-4 w-4 text-neutral-500' />,
    spanClass: 'md:col-span-1'
  },
  {
    title: 'Hours saved?',
    description: (
      <span className='text-sm'>It depends, Create your first post!</span>
    ),
    header: <Skeleton />,
    className: 'md:col-span-2',
    icon: <FaFileSignature className='h-4 w-4 text-neutral-500' />,
    spanClass: 'md:col-span-2'
  }
]

export default HirerGrid
