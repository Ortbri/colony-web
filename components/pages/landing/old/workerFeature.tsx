// import { CardGrid, CardGridItem } from '@/components/cards/gridCard'
// import React from 'react'
// import Image from 'next/image'
// import { IoMdCheckmark } from 'react-icons/io'

// function WorkerFeature() {
//   return (
//     <div className='flex flex-col items-center justify-center'>
//       <CardGrid className=''>
//         {WorkerGridData.map((data) => (
//           <CardGridItem
//             key={data.id}
//             item={data.item}
//             className={data.className}
//           />
//         ))}
//       </CardGrid>
//     </div>
//   )
// }

// /* --------------------------------- skelly --------------------------------- */
// const JobsSkelly = () => (
//   <div className='flex h-full w-full overflow-hidden rounded-lg'>
//     <div className='relative h-full w-full'>
//       <Image
//         src='/JobPost.png'
//         alt='Screen showing the details of a job'
//         fill
//         style={{ objectFit: 'contain', objectPosition: 'bottom center' }}
//         className='rounded-lg'
//       />
//     </div>
//   </div>
// )
// const RequestJobSkelly = () => (
//   <div className='flex h-full w-full overflow-hidden rounded-lg'>
//     <div className='relative h-full w-full'>
//       <Image
//         src='/RequestJob.png'
//         alt='Screen showing the request to apply for a job'
//         fill
//         style={{ objectFit: 'contain', objectPosition: 'bottom center' }}
//         className='rounded-lg'
//       />
//     </div>
//   </div>
// )
// const CompleteJobSkelly = () => (
//   <div className='-mb-14 flex h-full w-full overflow-hidden rounded-lg'>
//     <div className='relative h-full w-full'>
//       <Image
//         src='/CompleteJob.png'
//         alt='Screen showing a worker marking a job as complete with a photo'
//         fill
//         style={{ objectFit: 'contain', objectPosition: 'bottom center' }}
//         className='rounded-lg'
//       />
//     </div>
//   </div>
// )

// const CompleteSkelly = () => {
//   return (
//     <div className='my-24 flex flex-col items-center'>
//       <IoMdCheckmark size={100} />
//       <div className='mx-14 flex flex-col items-center gap-6 text-center'>
//         <h3 className='text-4xl font-bold'>Complete</h3>
//         <p>Extra income. One task at a time.</p>
//       </div>
//     </div>
//   )
// }

// /* -------------------------------- grid data ------------------------------- */
// const WorkerGridData = [
//   {
//     id: 1,
//     item: {
//       title: 'Find a Job',
//       description: 'Get Notified when jobs are near you',
//       content: <JobsSkelly />
//     },
//     className: 'col-span-6 md:col-span-6'
//   },
//   {
//     id: 2,
//     item: {
//       title: 'Request Jobs',
//       description: 'Send requests for jobs you are interested in.',
//       content: <RequestJobSkelly />
//     },
//     className: 'col-span-6 md:col-span-3'
//   },
//   {
//     id: 3,
//     item: {
//       title: 'Complete Jobs & Receive Payment',
//       description: 'Keep track of job progress and completion.',
//       content: <CompleteJobSkelly />
//     },
//     className: 'col-span-6 md:col-span-3'
//   },
//   {
//     id: 4,
//     item: {
//       content: <CompleteSkelly />
//     },
//     className: 'col-span-6 md:col-span-6'
//   }
// ]

// export default WorkerFeature
