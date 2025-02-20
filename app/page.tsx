import {
  ReasonFour,
  ReasonOne,
  ReasonTree,
  ReasonTwo
} from '@/components/pages/landing/colony-reason'
import VideoCarousel from '@/components/pages/landing/video-carousel'
import Image from 'next/image'
import React from 'react'
import PhoneCTA from '@/components/pages/landing/phone-cta'

export default function Home() {
  return (
    <div className='flex flex-col gap-8'>
      <CTA />
      <WhyColony />
      <QuickFeature />
      <WorkerQuickFeature />
    </div>
  )
}

function CTA() {
  return (
    <section className='mx-auto flex w-full flex-col items-center justify-center gap-6 pt-24'>
      <div className='flex max-w-xl flex-col items-center gap-4'>
        <h1 className='text-center text-5xl font-bold'>
          Find Local Help for Everyday Tasks
        </h1>
        <p className='text-center text-lg'>
          Connect with trusted locals for yard work, dog walking, small business
          help. | Currently Available in Nebraska
        </p>
      </div>

      <PhoneCTA />
      {/* mock iphone w/ animations */}
      <div className='flex flex-col items-center justify-center gap-2'>
        <div className='flex flex-col text-center'>
          <p className='text-xs font-light'>
            Self funded & Supported in part by
          </p>
          <b className='text-xs'>Nebraska Prototype Grant</b>
        </div>
        <Image
          src='/NPG.svg'
          width={30}
          height={30}
          className='invert'
          alt='Nebraska Innovation Fund'
        />
      </div>
    </section>
  )
}

const ColonyReason = [
  {
    title: 'Built for Small Towns',
    description:
      'National gig apps overlook small college towns due to inconsistent demand. Our platform is designed specifically to help these communities thrive.',
    content: <ReasonOne />
  },
  {
    title: 'Multiple Job Categories',
    description:
      'Our platform provides a variety of job types like Yard Work, Small Business Help, and Pet Services, allowing workers to find consistent opportunities.',
    content: <ReasonTwo />
  },
  {
    title: 'Boosts Local Economy',
    description:
      'By increasing job opportunities in small towns, our platform helps keep money circulating within the local economy.',
    content: <ReasonTree />
  },
  {
    title: 'Transparent Fees',
    description:
      '3 percent + for a job and 3 percent jobs completed, this helps us operate in towns',
    content: <ReasonFour />
  }
]
function WhyColony() {
  return (
    <section className='mx-auto flex w-full max-w-7xl flex-col gap-8 px-14 py-10'>
      <div className='w-full bg-white dark:bg-neutral-950'>
        <div className='mx-auto flex'>
          {/* Left column with sticky title */}
          <div className='sticky top-40 h-fit w-1/2'>
            <h3 className='text-2xl font-bold md:text-3xl'>
              Why we&apos;re here
            </h3>
            <p className='text-md'>
              The gig economy wasn&apos;t built for small towns. We&apos;re
              changing that.
            </p>
          </div>

          {/* Right column with scrolling content */}
          <div className='flex w-full flex-col items-end gap-14 pl-14'>
            {ColonyReason.map((item, index) => (
              <div
                key={index}
                className='flex w-full flex-col gap-2 rounded-2xl border border-border p-4'
              >
                <div className='flex h-80 w-full items-center justify-center rounded-2xl bg-gray-50'>
                  {item.content}
                </div>

                <div className='flex w-full flex-col gap-1'>
                  <h3 className='text-xs font-bold text-blue-500'>
                    {item.title}
                  </h3>
                  <p className='text-sm'>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function QuickFeature() {
  return (
    <section className='mx-auto flex w-full max-w-7xl flex-col gap-8 px-14 pb-10 pt-4'>
      <h2 className='text-4xl font-medium'>
        <span>Create a job,</span>
        <br />
        <span>Select a worker,</span>
        <br />
        <span>Save time.</span>
      </h2>
      <VideoCarousel />
    </section>
  )
}

function WorkerQuickFeature() {
  return (
    <section className='mx-auto flex w-full max-w-7xl flex-col gap-8 px-14 py-10'>
      <h2 className='slef-end text-end text-4xl font-medium'>
        <span>Select a job,</span>
        <br />
        <span>Complete it,</span>
        <br />
        <span>Get paid.</span>
      </h2>
      <VideoCarousel />
    </section>
  )
}

// function ItemWDescription({
//   title,
//   description
// }: {
//   title: string
//   description: string
// }) {
//   return (
//     <div className='flex w-full flex-col gap-2'>
//       <h3 className='text-lg font-medium'>{title}</h3>
//       <p className='text-sm text-muted-foreground'>{description}</p>
//     </div>
//   )
// }

// const CantWithoutPeopleItems = [
//   {
//     title: '1 not jobs = no workers',
//     description: 'We cant do this without people'
//   },
//   {
//     title: '2 not workers = no jobs to save time',
//     description: 'We cant do this without people'
//   },
//   {
//     title: '3. no feedback = we cant improve',
//     description: 'We cant do this without people'
//   },
//   {
//     title: '4. no community = we cant help',
//     description: 'We cant do this without people'
//   }
// ]
/**
 * we cant do this without people
 * 1 not jobs = no workers
 * 2 not workers = no jobs to save time
 * 3. no feedback = we cant improve
 * 4. no community = we cant help
 * 5. we are against the all odds
 * a. low feeds
 * b. single deveooper
 * c. single community
 * 6. suggest a new town
 * 7 create a job
 * 8.
 */
// function CantWithoutPeople() {
//   return (
//     <section className='mx-auto flex w-full max-w-7xl flex-col gap-8 px-14 py-80'>
//       <div className='flex flex-col gap-2'>
//         <h2 className='text-4xl font-bold'>What can go wrong?</h2>
//         <p className='text-xl'>the reality is, just about everything</p>
//       </div>
//       {/* 2 stack left item and right item  */}
//       <div className='flex'>
//         <div className='grid w-full grid-cols-2 gap-4'>
//           {CantWithoutPeopleItems.map((item, idx) => (
//             <ItemWDescription
//               key={idx}
//               title={item.title}
//               description={item.description}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

/**
 * BOTTOM CTA and Cant without peopel should be the same section
 */
// function BottomCTA() {
//   return (
//     <section className='mx-auto flex w-full flex-col items-center justify-center gap-4 bg-yellow-50/40 px-14 py-14'>
//       <h2 className='text-3xl font-bold'>Try Colony</h2>
//       <p className='max-w-xl text-center text-muted-foreground'>
//         Download the app and start saving time today. If your town is not yet
//         available, suggest the town and we&apos;ll reach out to you!
//       </p>
//       <Button className='gap-1 rounded-3xl'>
//         <Image
//           alt='apple logo'
//           src='/apple.svg'
//           className='content-fit invert'
//           height={18}
//           width={18}
//         />
//         Download the app
//       </Button>
//     </section>
//   )
// }
