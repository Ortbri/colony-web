import { CardGrid, CardGridItem } from '@/components/cards/gridCard'
import React from 'react'
import Image from 'next/image'

function HirerFeature() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <CardGrid className=''>
        {HirerGridData.map((data) => (
          <CardGridItem
            key={data.id}
            item={data.item}
            className={data.className}
          />
        ))}
      </CardGrid>
    </div>
  )
}

/* --------------------------------- skelly --------------------------------- */
const PostJobSkelly = () => (
  <div className='flex h-full w-full overflow-hidden rounded-lg'>
    <div className='relative h-full w-full'>
      <Image
        src='/CreateJob.png'
        alt='Posting a job image'
        layout='fill'
        objectFit='contain'
        objectPosition='bottom center'
        className='rounded-lg'
      />
    </div>
  </div>
)
const RequestSkelly = () => (
  <div className='flex h-full w-full overflow-hidden rounded-lg'>
    <div className='relative h-full w-full'>
      <Image
        src='/jobRequests.png'
        alt='Posting a job image'
        layout='fill'
        objectFit='contain'
        objectPosition='bottom center'
        className='rounded-lg'
      />
    </div>
  </div>
)
const PaySkelly = () => (
  <div className='-mb-14 flex h-full w-full overflow-hidden rounded-lg'>
    <div className='relative h-full w-full'>
      <Image
        src='/JobPay.png'
        alt='Posting a job image'
        layout='fill'
        objectFit='contain'
        objectPosition='bottom center'
        className='rounded-lg'
      />
    </div>
  </div>
)

/* -------------------------------- grid data ------------------------------- */
const HirerGridData = [
  {
    id: 1,
    item: {
      title: 'Post a job',
      description: 'Send a ping to workers in your area.',
      titlePosition: 'top' as 'top', // Ensure correct typing
      content: <PostJobSkelly />
    },
    className: 'col-span-4 md:col-span-6'
  },
  {
    id: 2,
    item: {
      title: 'Receive Requests',
      description: 'Requests from workers in town.',
      content: <RequestSkelly />,
      titlePosition: 'top' as 'top' // Ensure correct typing
    },
    className: 'col-span-6 md:col-span-3'
  },
  {
    id: 3,
    item: {
      title: 'Select a worker & pay',
      description: 'Keep track of job progress and completion.',
      content: <PaySkelly />,
      titlePosition: 'top' as 'top' // Ensure correct typing
    },
    className: 'col-span-6 md:col-span-3'
  }
]

export default HirerFeature
