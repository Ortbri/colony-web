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
  <div className='mt-6 flex h-full w-full items-center justify-center overflow-hidden rounded-lg border'>
    <div className='relative h-full w-full'>item</div>
  </div>
)

/* -------------------------------- grid data ------------------------------- */
const ColonyFeatureList = [
  {
    id: 1,
    item: {
      title: 'Dispute Support',
      description: 'If job is not complete, payment can be sent back.',
      titlePosition: 'bottom' as 'bottom', // Ensure correct typing
      content: <PostSkelly />
    },
    className: 'col-span-6 md:col-span-6'
  }
]

export default ColonyFeature
