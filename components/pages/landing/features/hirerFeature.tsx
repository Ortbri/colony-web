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
<<<<<<< Updated upstream
const PostSkelly = () => (
  <div className='flex h-full w-full items-center justify-center overflow-hidden rounded-lg border'>
    <div className='relative h-full w-full'>
      <Image
        src='/JobPost.png'
        alt='Posting a job image'
        layout='fill'
        objectFit='contain'
=======
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
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
      content: <PostSkelly />
    },
    className: 'col-span-6 md:col-span-6'
=======
      content: <PostJobSkelly />
    },
    className: 'col-span-4 md:col-span-6'
>>>>>>> Stashed changes
  },
  {
    id: 2,
    item: {
      title: 'Receive Requests',
<<<<<<< Updated upstream
      description: 'Requests from worekrs in town.',
      content: <PostSkelly />,
=======
      description: 'Requests from workers in town.',
      content: <RequestSkelly />,
>>>>>>> Stashed changes
      titlePosition: 'top' as 'top' // Ensure correct typing
    },
    className: 'col-span-6 md:col-span-3'
  },
  {
    id: 3,
    item: {
      title: 'Select a worker & pay',
      description: 'Keep track of job progress and completion.',
<<<<<<< Updated upstream
      content: <PostSkelly />,
=======
      content: <PaySkelly />,
>>>>>>> Stashed changes
      titlePosition: 'top' as 'top' // Ensure correct typing
    },
    className: 'col-span-6 md:col-span-3'
  }
]

export default HirerFeature
