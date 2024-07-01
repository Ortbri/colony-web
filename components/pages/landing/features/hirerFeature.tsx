import { CardGrid, CardGridItem } from '@/components/cards/gridCard'
import React from 'react'
import Image from 'next/image'

function HirerFeature() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <h2 className='text-6xl font-bold'>Your app for getting hours back</h2>
      <CardGrid className='m-8'>
        {HirerGridData.map((data) => (
          <CardGridItem key={data.id} item={data} className={data.className} />
        ))}
      </CardGrid>
    </div>
  )
}
/* --------------------------------- skelly --------------------------------- */
const PostSkelly = () => (
  <div className='flex h-full w-full overflow-hidden rounded-lg border'>
    <div className='h-full w-full'>
      <Image
        src='/JobPost.png'
        alt='Posting a job image'
        layout='responsive'
        width={16} // Maintain aspect ratio
        height={9} // Maintain aspect ratio
        objectFit='none'
        className='rounded-lg'
      />
    </div>
  </div>
)
/* -------------------------------- grid data ------------------------------- */
const HirerGridData = [
  {
    id: 1,
    title: 'Post a job',
    className: 'col-span-6 md:col-span-6 bg-black row-span-2 ',
    description: 'Send a ping to workers in your town.',
    content: <PostSkelly />
  },
  {
    id: 2,
    title: 'Receieve Requests',
    className: 'col-span-3 md:col-span-3 ',
    description: 'Requests from workers in town.',
    content: <PostSkelly />
  },
  {
    id: 3,
    title: 'Select a worker & pay',
    className: 'col-span-3 md:col-span-3 ',
    description: 'Payment is held at Colony until job is complete.',
    content: <PostSkelly />
  },
  {
    id: 4,
    title: 'Job Complete',
    className: 'col-span-3 md:col-span-6 ',
    description: 'Start getting hours back.',
    content: <PostSkelly />
  }
]

export default HirerFeature
