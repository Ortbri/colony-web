import { CardGrid, CardGridItem } from '@/components/cards/gridCard'
import React from 'react'
import Image from 'next/image'

function ColonyFeature() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div>
        <h2 className='text-4xl font-bold'>How we help</h2>
      </div>
      <CardGrid className='py-10'>
        {ColonyFeatureList.map((data) => (
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
    <div className='relative h-full w-full'></div>
  </div>
)

/* -------------------------------- grid data ------------------------------- */
const ColonyFeatureList = [
  {
    id: 1,
    item: {
      title: 'Find Local Help',
      description: 'Connect with trusted local help for various tasks.',
      titlePosition: 'bottom' as 'bottom', // Ensure correct typing
      content: <PostSkelly />
    },
    className: 'col-span-6 md:col-span-2'
  },
  {
    id: 2,
    item: {
      title: 'Post a Job Easily',
      description: 'Quickly post job listings and find help.',
      content: <PostSkelly />,
      titlePosition: 'bottom' as 'bottom' // Ensure correct typing
    },
    className: 'col-span-6 md:col-span-2'
  }
]

export default ColonyFeature
