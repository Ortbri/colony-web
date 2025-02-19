import { BentoFeatures } from '@/components/pages/landing/bento-features'
import { Button } from '@/components/ui/button'
import { ColonyReason } from '@/components/pages/landing/colony-reason'
import { MapGoal } from '@/components/pages/landing/map-goal'
import VideoCarousel from '@/components/pages/landing/video-carousel'
import Image from 'next/image'
import React from 'react'
import PhoneCTA from '@/components/pages/landing/phone-cta'

export default function Home() {
  return (
    <div className='flex flex-col gap-8'>
      <CTA />
      <About />
      <QuickFeature />
      <WorkerQuickFeature />
      <WhyColony />
      {/* <CantWithoutPeople /> */}
      {/* <OurGoal /> */}
      <BottomCTA />
    </div>
  )
}

function CTA() {
  return (
    <section className='mx-auto flex w-full flex-col items-center justify-center gap-4 bg-yellow-50/20 py-36'>
      <div className='flex max-w-3xl flex-col items-center gap-4'>
        <h1 className='text-center text-6xl font-bold'>
          Find Local Help for Everyday Tasks
        </h1>
        <p className='text-center text-lg'>
          Connect with trusted locals for yard work, dog walking, small business
          help. | Currently Available in Nebraska
        </p>

        <Button className='gap-2 rounded-3xl'>
          <img
            src='/apple.svg'
            className='content-fit invert'
            height={18}
            width={18}
          />
          Download on iOS
        </Button>
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

function About() {
  return (
    <section className='mx-auto flex max-w-7xl flex-col items-center justify-center gap-8 px-14 py-4'>
      <h2 className='text-4xl font-medium'>Save time in a whole new way</h2>
      <BentoFeatures />
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

function WhyColony() {
  return (
    <section className='mx-auto flex w-full max-w-7xl flex-col gap-8 px-14 py-10'>
      <ColonyReason />
    </section>
  )
}

function ItemWDescription({
  title,
  description
}: {
  title: string
  description: string
}) {
  return (
    <div className='flex w-full flex-col gap-2'>
      <h3 className='text-lg font-medium'>{title}</h3>
      <p className='text-sm text-muted-foreground'>{description}</p>
    </div>
  )
}

const CantWithoutPeopleItems = [
  {
    title: '1 not jobs = no workers',
    description: 'We cant do this without people'
  },
  {
    title: '2 not workers = no jobs to save time',
    description: 'We cant do this without people'
  },
  {
    title: '3. no feedback = we cant improve',
    description: 'We cant do this without people'
  },
  {
    title: '4. no community = we cant help',
    description: 'We cant do this without people'
  }
]
function CantWithoutPeople() {
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
  return (
    <section className='mx-auto flex w-full max-w-7xl flex-col gap-8 bg-gray-50/60 px-14 py-10 xl:rounded-3xl'>
      <h3 className='text-4xl font-thin'>We cant do this alone</h3>
      {/* 2 stack left item and right item  */}
      <div className='flex'>
        <div className='grid w-full grid-cols-2 gap-4'>
          {CantWithoutPeopleItems.map((item, idx) => (
            <ItemWDescription
              key={idx}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function OurGoal() {
  return (
    <div className=''>
      <MapGoal />
    </div>
  )
}

function BottomCTA() {
  return (
    <section className='mx-auto flex w-full flex-col items-center justify-center gap-4 bg-yellow-50 px-14 py-14'>
      <h2 className='text-3xl font-bold'>Ready to get started?</h2>
      <p className='max-w-xl text-center text-muted-foreground'>
        Download the app and start saving time today. If your town is not yet
        available, suggest the town and we'll reach out to you!
      </p>
      <Button className='gap-1 rounded-3xl'>
        <img
          src='/apple.svg'
          className='content-fit invert'
          height={18}
          width={18}
        />
        Download the app
      </Button>
    </section>
  )
}
