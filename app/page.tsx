import VideoCarousel from '@/components/pages/landing/video-carousel'
import Image from 'next/image'
import React from 'react'
import PhoneCTA from '@/components/pages/landing/phone-cta'
import {
  JobCategoriesAnim,
  LocalComparisonAnim,
  TransparentFeesAnim
} from '@/components/pages/landing/colony-reason'

export default function Home() {
  return (
    <div className='flex flex-col gap-8'>
      <CTA />
      <WhyColony />
      <HirerQuickFeature />
      <WorkerQuickFeature />
    </div>
  )
}
/* -------------------------------------------------------------------------- */
/*                                     CTA                                    */
/* -------------------------------------------------------------------------- */
function CTA() {
  return (
    <section className='mx-auto flex w-full flex-col items-center justify-center gap-6 pt-24'>
      {/* only for now */}
      <div className='rounded-3xl bg-foreground px-4 py-2 font-bold text-background '>
        Website in development 
      </div>
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
/* -------------------------------------------------------------------------- */
/*                              Reason for colony                             */
/* -------------------------------------------------------------------------- */
const ColonyReason = [
  {
    title: 'Multiple Job Categories',
    description:
      'Our platform does not provide every job... but provides a variety of job types like Yard Work, Small Business Help, and Pet Services, allowing workers to find consistent opportunities.',
    content: <JobCategoriesAnim />,
    philosophy: 'Too many job categories makes it hard for us to market'
  },
  {
    title: 'Transparent Fees',
    description:
      '3 percent + for a job and 3 percent jobs completed, this helps us operate in towns',
    content: <TransparentFeesAnim />,
    philosophy: 'Fees allow us to opperate '
  },
  {
    title: 'Built for Small Towns',
    description:
      'National gig apps overlook small college towns due to inconsistent demand. Our platform is designed specifically to help these communities thrive.',
    content: <LocalComparisonAnim />
  }
]
function WhyColony() {
  return (
    <section className='mx-auto flex w-full max-w-7xl flex-col gap-8 px-14 py-10'>
      <div className='w-full bg-white dark:bg-neutral-950'>
        <div className='mx-auto flex gap-10'>
          {/* Left column with sticky title */}
          <div className='sticky top-20 h-fit w-1/2'>
            <h3 className='text-2xl font-bold md:text-3xl'>
              Why we&apos;re here
            </h3>
            <p className='text-md'>
              The gig economy wasn&apos;t built for small towns. We&apos;re
              changing that.
            </p>
          </div>

          {/* Right column with scrolling content */}
          <div className='flex w-full flex-col items-end gap-10'>
            {ColonyReason.map((item, index) => (
              <div
                key={index}
                className='flex w-full flex-col gap-2 rounded-2xl border border-border p-4'
              >
                {/* <div className='flex h-80 w-full items-center justify-center rounded-2xl bg-gray-50'> */}
                {item.content}
                <div className='flex w-full flex-col gap-1'>
                  <h3 className='text-xs font-bold text-blue-500'>
                    {item.title}
                  </h3>
                  <p className='text-md'>{item.description}</p>
                  <p className='text-md'>philosophy | {item.philosophy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
/* -------------------------------------------------------------------------- */
/*                                HIRER FEATURE                               */
/* -------------------------------------------------------------------------- */
function HirerQuickFeature() {
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
/* -------------------------------------------------------------------------- */
/*                               WORKER FEATURE                               */
/* -------------------------------------------------------------------------- */
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
