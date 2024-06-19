import Cut from '@/components/Cut'
import Features from '@/components/Features'
import Guide from '@/components/Guide'
import Intro from '@/components/Intro'
import Link from 'next/link'
import React from 'react'

export default function Home() {
  return (
    <main className='relative mx-auto flex flex-col items-center justify-center overflow-hidden px-5 sm:px-10'>
      <div className='w-full max-w-7xl'>
        <Intro />
        {/* <Cut /> */}
        <Guide />
        <Features />
      </div>
    </main>
  )
}
