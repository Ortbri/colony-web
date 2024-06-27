import React from 'react'
import Cta from '@/components/pages/landing/Cta'
import Cut from '@/components/pages/landing/Cut'
import Guide from '@/components/pages/landing/Guide'
import Features from '@/components/pages/landing/Features'
import Intro from '@/components/pages/landing/Intro'
import Em from '@/components/pages/landing/Em'

export default function Home() {
  return (
    <main className='relative mx-auto flex flex-col items-center justify-center overflow-hidden px-5 sm:px-10'>
      <div className='w-full max-w-7xl'>
        <Intro />
        <Cut />
        <Em />
        <Guide />
        <Features />
        <Cta />
      </div>
    </main>
  )
}
