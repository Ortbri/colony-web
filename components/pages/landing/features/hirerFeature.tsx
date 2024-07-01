import { CardGrid, CardGridItem } from '@/components/cards/gridCard'
import React from 'react'
import Image from 'next/image'

function HirerFeature() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <CardGrid className='py-10'>
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
const PostSkelly = () => (
  <div className='flex h-full w-full items-center justify-center overflow-hidden rounded-lg border'>
    <div className='relative h-full w-full'>
      <Image
        src='/JobPost.png'
        alt='Posting a job image'
        layout='fill'
        objectFit='contain'
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
      titlePosition: 'left' as 'left', // Ensure correct typing
      content: <PostSkelly />
    },
    className: 'col-span-6 md:col-span-6'
  },
  {
    id: 2,
    item: {
      title: 'Receive Requests',
      description: 'Requests from worekrs in town.',
      content: <PostSkelly />,
      titlePosition: 'top' as 'top' // Ensure correct typing
    },
    className: 'col-span-6 md:col-span-3'
  },
  {
    id: 3,
    item: {
      title: 'Select a worker & pay',
      description: 'Keep track of job progress and completion.',
      content: <PostSkelly />,
      titlePosition: 'top' as 'top' // Ensure correct typing
    },
    className: 'col-span-6 md:col-span-3'
  }
]

export default HirerFeature
