import Cta from '@/components/Cta'
import Cut from '@/components/Cut'
import Guide from '@/components/Guide'
import Features from '@/components/Features'
import Intro from '@/components/Intro'
import React from 'react'

export default function Home() {
  return (
    <main className='relative mx-auto flex flex-col items-center justify-center overflow-hidden px-5 sm:px-10'>
      <div className='w-full max-w-7xl'>
        <Intro />
        <Cut />
        <Guide />
        <Features />
        <Cta />
      </div>
    </main>
  )
}
