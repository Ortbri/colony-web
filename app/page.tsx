import React from 'react'
import Cta from '@/components/pages/landing/Cta'
import Cut from '@/components/pages/landing/Cut'
import Intro from '@/components/pages/landing/Intro'
import Features from '@/components/pages/landing/features'

export default function Home() {
  return (
    <main className='flex flex-col items-center px-5 sm:px-14'>
      <div className='w-full max-w-7xl'>
        <Intro />
        <Cut />
        <Features />
        <Cta />
      </div>
    </main>
  )
}
