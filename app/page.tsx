import { Button } from '@/components/ui/button'
import { AppleIcon } from 'lucide-react'
import React from 'react'

export default function Home() {
  return (
    <div className=''>
      <CTA />
      <About />
      <QuickFeature />
      <Description />
      <Features />
      <ThePlan />
    </div>
  )
}

function CTA() {
  return (
    <div className='flex flex-col items-center gap-4 py-36'>
      <h1 className='text-4xl font-bold'>Community Based Gig App.</h1>
      <p className='text-lg'>Expore this and this...</p>
      <div>
        <Button className='gap-2 rounded-3xl'>
          {/* <AppleLog /> */}
          <img
            src='/apple.svg'
            className='content-fit invert'
            height={18}
            width={18}
          />
          Download on iOS
        </Button>
      </div>
    </div>
  )
}

function About() {
  return <div>...</div>
}

function QuickFeature() {
  return <div>...</div>
}

function Description() {
  return <div>...</div>
}
function Features() {
  return <div>...</div>
}

function ThePlan() {
  return <div>...</div>
}
