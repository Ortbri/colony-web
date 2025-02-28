import VideoCarousel from '@/components/pages/landing/video-carousel'
import Image from 'next/image'
import React from 'react'
import PhoneCTA from '@/components/pages/landing/phone-cta'
import {
  JobCategoriesAnim,
  LocalComparisonAnim,
  TransparentFeesAnim
} from '@/components/pages/landing/colony-reason'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger
} from '@/components/ui/hover-card'

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
    <section className='mx-auto flex w-full flex-col items-center justify-center gap-6 px-4 pt-16 pb-10 sm:px-8 sm:pt-20 md:px-14'>
      <div className='flex max-w-xl flex-col items-center gap-4 px-2'>
        <h1 className='animate-fade-up text-center text-4xl font-bold opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards] sm:text-5xl'>
          Find Local Help for Everyday Tasks
        </h1>
        <p className='animate-fade-up text-center text-base opacity-0 [animation-delay:400ms] [animation-fill-mode:forwards] sm:text-lg'>
          Connect with trusted locals for yard work, dog walking, small business
          help. | Currently Available in Nebraska
        </p>
      </div>
      <PhoneCTA />
      <div className='animate-fade-up flex flex-col items-center justify-center gap-2 opacity-0 [animation-delay:1200ms] [animation-fill-mode:forwards]'>
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
    description: (
      <div className='text-lg'>
        Colony will not provide every type. We select a variety of job types
        like{' '}
        <HoverCard>
          <HoverCardTrigger asChild>
            <span className='cursor-pointer font-bold underline-offset-4 hover:underline'>
              @Yard Work
            </span>
          </HoverCardTrigger>
          <HoverCardContent className='w-80'>
            <div className='flex space-x-4'>
              <div className='flex aspect-square h-12 w-12 items-center justify-center rounded-full bg-green-200'>
                🌱
              </div>
              <div className='space-y-1'>
                <h4 className='text-sm font-semibold'>Yard Work</h4>
                <ul className=''>
                  <li>Mowing Lawns</li>
                  <li>Fall Leaves</li>
                  <li>Snow Removal</li>
                </ul>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
        ,{' '}
        <HoverCard>
          <HoverCardTrigger asChild>
            <span className='cursor-pointer font-bold underline-offset-4 hover:underline'>
              @Small Business Help
            </span>
          </HoverCardTrigger>
          <HoverCardContent className='w-80'>
            <div className='flex space-x-4'>
              <div className='flex aspect-square h-12 w-12 items-center justify-center rounded-full bg-amber-200'>
                🐝
              </div>
              <div className='space-y-1'>
                <h4 className='text-sm font-semibold'>Small Business Help</h4>
                <ul className=''>
                  <li>Mom & Pop Shops</li>
                  <li>Warehouse Work</li>

                  <li>Packing</li>
                  <li>Warehouse Cleaning</li>
                  <li>Its your business!</li>
                </ul>

                {/* <div className='flex items-center pt-2'>
                  <span className='text-xs text-muted-foreground'>
                    Year-round opportunities
                  </span>
                </div> */}
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
        , and{' '}
        <HoverCard>
          <HoverCardTrigger asChild>
            <span className='cursor-pointer font-bold underline-offset-4 hover:underline'>
              @Pet Services
            </span>
          </HoverCardTrigger>
          <HoverCardContent className='w-80'>
            <div className='flex space-x-4'>
              <div className='flex aspect-square h-12 w-12 items-center justify-center rounded-full bg-orange-200'>
                🐶
              </div>
              <div className='space-y-1'>
                <h4 className='text-sm font-semibold'>Pet Services</h4>
                <ul className=''>
                  <li>Dog Walking</li>
                  <li>Pet Sitting</li>
                </ul>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
        , allowing workers to find consistent opportunities.
      </div>
    ),
    content: <JobCategoriesAnim />,
    philosophy: 'Too many job categories makes it hard for us to market'
  },
  {
    title: 'Transparent Fees',
    description: (
      <div className='text-lg'>
        Colony charges a{' '}
        <HoverCard>
          <HoverCardTrigger asChild>
            <span className='cursor-pointer font-bold underline-offset-4 hover:underline'>
              @3% fee
            </span>
          </HoverCardTrigger>
          <HoverCardContent className='w-80'>
            <div className='flex justify-between space-x-4'>
              <div className='flex aspect-square h-12 w-12 items-center justify-center rounded-full bg-emerald-200'>
                💰
              </div>
              <div className='space-y-1'>
                <h4 className='text-sm font-semibold'>Job Acceptance Fee</h4>
                <p className='text-sm'>
                  A small 3% + 10 cents fee is charged when a worker accepts a
                  job, helping us maintain the platform.
                </p>
                <div className='flex items-center pt-2'>
                  <span className='text-muted-foreground text-xs'>
                    Applied at job acceptance
                  </span>
                </div>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>{' '}
        when a job is accepted and another{' '}
        <HoverCard>
          <HoverCardTrigger asChild>
            <span className='cursor-pointer font-bold underline-offset-4 hover:underline'>
              @3% fee
            </span>
          </HoverCardTrigger>
          <HoverCardContent className='w-80'>
            <div className='flex justify-between space-x-4'>
              <div className='flex aspect-square h-12 w-12 items-center justify-center rounded-full bg-emerald-200'>
                ✅
              </div>
              <div className='space-y-1'>
                <h4 className='text-sm font-semibold'>Job Completion Fee</h4>
                <p className='text-sm'>
                  Another 3% fee is applied when a job is completed, ensuring
                  sustainable operations.
                </p>
                <div className='flex items-center pt-2'>
                  <span className='text-muted-foreground text-xs'>
                    Applied after successful completion
                  </span>
                </div>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>{' '}
        when the job is completed. These fees allow us to{' '}
        <HoverCard>
          <HoverCardTrigger asChild>
            <span className='cursor-pointer font-bold underline-offset-4 hover:underline'>
              @sustain operations
            </span>
          </HoverCardTrigger>
          <HoverCardContent className='w-80'>
            <div className='flex justify-between space-x-4'>
              <div className='flex aspect-square h-12 w-12 items-center justify-center rounded-full bg-sky-200'>
                🔄
              </div>
              <div className='space-y-1'>
                <h4 className='text-sm font-semibold'>Sustainable Platform</h4>
                <p className='text-sm'>
                  Our fee structure ensures we can maintain the platform,
                  provide customer support, and continue expanding to more
                  communities.
                </p>
                <div className='flex items-center pt-2'>
                  <span className='text-muted-foreground text-xs'>
                    No hidden costs or surprise charges
                  </span>
                </div>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>{' '}
        and continue providing opportunities in small towns.
      </div>
    ),
    content: <TransparentFeesAnim />,
    philosophy: 'Fees allow us to opperate '
  },
  {
    title: 'Built for Small Towns',
    description: (
      <div className='text-md'>
        Big gig apps ignore small towns due to low demand. Colony is built for
        these{' '}
        <HoverCard>
          <HoverCardTrigger asChild>
            <span className='cursor-pointer font-bold underline-offset-4 hover:underline'>
              @community connections
            </span>
          </HoverCardTrigger>
          <HoverCardContent className='w-80'>
            <div className='flex space-x-4'>
              <div className='flex aspect-square h-12 w-12 items-center justify-center rounded-full bg-indigo-200'>
                🤝
              </div>
              <div className='space-y-1'>
                <h4 className='text-sm font-semibold'>
                  Community-Focused Connections
                </h4>
                <p className='text-sm'>
                  We prioritize smaller communities where neighbors can help
                  neighbors, creating meaningful relationships that strengthen
                  small towns in ways big gig apps can&apos;t.
                </p>
                <div className='flex items-center pt-2'>
                  <span className='text-muted-foreground text-xs'>
                    Building relationships, not just transactions
                  </span>
                </div>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
        , ensuring reliable local connections and keeping money within the local
        economy.
      </div>
    ),
    content: <LocalComparisonAnim />,
    philosophy: 'Small towns need gig economy too'
  }
]
function WhyColony() {
  return (
    <section className='mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-10 sm:px-8 md:px-14'>
      <div className='w-full bg-white dark:bg-neutral-950'>
        <div className='mx-auto flex flex-col gap-10 lg:flex-row'>
          {/* floating */}
          <div className='top-40 flex h-fit w-full flex-col gap-6 md:w-full lg:sticky'>
            <h3 className='text-2xl font-bold md:text-3xl'>
              Why we&apos;re here
            </h3>
            <p className='text-xl'>
              The gig economy wasn&apos;t built for small towns. We&apos;re
              changing that.
            </p>
          </div>
          {/* content */}
          <div className='flex w-7/12 flex-col items-end gap-24'>
            {ColonyReason.map((item, index) => (
              <div
                key={index}
                className='border-border flex w-full flex-col gap-2 rounded-2xl border p-4'
              >
                <div className='relative w-full rounded-xl bg-blue-50'>
                  {item.content}
                </div>
                <div className='flex w-full flex-col gap-1 pt-5'>
                  <h3 className='text-md font-bold text-blue-500'>
                    {item.title}
                  </h3>
                  {item.description}
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
    <section className='mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 pt-4 pb-10 sm:px-8 md:px-14'>
      <h2 className='text-3xl font-medium md:text-4xl'>
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
    <section className='mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-10 sm:px-8 md:px-14'>
      <h2 className='text-end text-3xl font-medium md:text-4xl'>
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
