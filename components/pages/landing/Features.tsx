'use client'
import React from 'react'
import { Button } from '../../ui/button'
import WorkerGrid from '@/components/framer/BentoGrid/WorkerGrid'
import HirerGrid from '@/components/framer/BentoGrid/HirerGrid'

function Features() {
  const [view, setView] = React.useState('hirer')

  return (
    <div className='mx-auto flex flex-col gap-8'>
      <div className='mx-auto flex flex-col gap-4'>
        <h1 className='text-8xl font-semibold'>Features</h1>
        <div className='flex flex-row items-center justify-center gap-4'>
          <Button
            size={'lg'}
            onClick={() => setView('hirer')}
            variant={view === 'hirer' ? undefined : 'outline'}
          >
            Hirer
          </Button>
          <Button
            size={'lg'}
            onClick={() => setView('worker')}
            variant={view === 'worker' ? undefined : 'outline'}
          >
            Worker
          </Button>
        </div>
      </div>

      {view === 'hirer' ? <HirerGrid /> : <WorkerGrid />}
    </div>
  )
}

export default Features
