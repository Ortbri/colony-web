'use client'
import React from 'react'
import { Button } from '../../../ui/button'
import HirerFeature from './hirerFeature'
import WorkerFeature from './workerFeature'
import ColonyFeature from './colonyFeature'

function Features() {
  /* ---------------------------------- view ---------------------------------- */
  const [view, setView] = React.useState('hirer')
  /* --------------------------------- return --------------------------------- */
  return (
    <section className='py-14'>
      {/* header */}
      <div className='flex flex-col items-center justify-center gap-4'>
        <h2 className='text-6xl font-bold'>
          {view === 'hirer'
            ? 'Your app for getting hours back'
            : 'Start earning extra income'}
        </h2>
        {/* button  */}
        <div className='flex flex-row gap-4 py-4'>
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
      {/* grid */}
      {view === 'hirer' ? <HirerFeature /> : <WorkerFeature />}
      {/* feature for both  */}
      <ColonyFeature />
    </section>
  )
}

export default Features
