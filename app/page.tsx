import React from 'react'
import Cta from '@/components/pages/landing/Cta'
import Cut from '@/components/pages/landing/cut'
import Features from '@/components/pages/landing/features'
import Intro from '@/components/pages/landing/Intro'
import ColonyFeature from '@/components/pages/landing/features/colonyFeature'

export default function Home() {
  return (
    <main className='flex flex-col items-center px-5 sm:px-14'>
      <div className='w-full max-w-7xl'>
        <Intro />
        <Cut />
        <Features />
        <Cta />
        <ColonyFeature />
      </div>
    </main>
  )
}
