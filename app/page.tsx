import React from 'react'
import Cta from '@/components/pages/landing/Cta'
import Cut from '@/components/pages/landing/Cut'
import Intro from '@/components/pages/landing/Intro'
import Em from '@/components/pages/landing/Em'
import Features from '@/components/pages/landing/features'

export default function Home() {
  /**
   * all need
   * max-w-7xl
   * w-full
   *a
   */
  return (
    <main className='relative mx-auto flex flex-col items-center justify-center overflow-hidden px-5 sm:px-10'>
      <Intro />
      <Cut />
      <Features />
      <Cta />
    </main>
  )
}
