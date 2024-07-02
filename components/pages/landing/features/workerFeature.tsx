import { CardGrid, CardGridItem } from '@/components/cards/gridCard'
import React from 'react'
import Image from 'next/image'

function WorkerFeature() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <CardGrid className=''>
        {WorkerGridData.map((data) => (
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
const JobsSkelly = () => (
  <div className='flex h-full w-full overflow-hidden rounded-lg'>
    <div className='relative h-full w-full'>
      <Image
        src='/JobPost.png'
        alt='Posting a job image'
        layout='fill'
        objectFit='contain'
        objectPosition='bottom center'
        className='rounded-lg'
      />
    </div>
  </div>
)
const RequestJobSkelly = () => (
  <div className='flex h-full w-full overflow-hidden rounded-lg'>
    <div className='relative h-full w-full'>
      <Image
        src='/RequestJob.png'
        alt='Posting a job image'
        layout='fill'
        objectFit='contain'
        objectPosition='bottom center'
        className='rounded-lg'
      />
    </div>
  </div>
)
const CompleteJobSkelly = () => (
  <div className='-mb-14 flex h-full w-full overflow-hidden rounded-lg'>
    <div className='relative h-full w-full'>
      <Image
        src='/CompleteJob.png'
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
const WorkerGridData = [
  {
    id: 1,
    item: {
      title: 'Find a Job',
      description: 'Get Notified when jobs are near you',
      titlePosition: 'top' as 'top', // Ensure correct typing
      content: <JobsSkelly />
    },
    className: 'col-span-4 md:col-span-6'
  },
  {
    id: 2,
    item: {
      title: 'Request Jobs',
      description: 'Send requests for jobs you are interested in.',
      content: <RequestJobSkelly />,
      titlePosition: 'top' as 'top' // Ensure correct typing
    },
    className: 'col-span-6 md:col-span-3'
  },
  {
    id: 3,
    item: {
      title: 'Complete Jobs & Receive Payment',
      description: 'Keep track of job progress and completion.',
      content: <CompleteJobSkelly />,
      titlePosition: 'top' as 'top' // Ensure correct typing
    },
    className: 'col-span-6 md:col-span-3'
  }
]

export default WorkerFeature
