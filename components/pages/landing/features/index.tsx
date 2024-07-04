'use client'

import React from 'react'
import HirerFeature from './hirerFeature'
import WorkerFeature from './workerFeature'
import { Button } from '../../../ui/button'

function Features() {
  /* ---------------------------------- view ---------------------------------- */
  const [view, setView] = React.useState('hirer')
  /* --------------------------------- return --------------------------------- */
  return (
    <section className='py-14'>
      {/* header */}
      <div className='flex flex-col items-center justify-center gap-4 py-8'>
        <h2 className='mx-4 text-center text-6xl font-bold md:mx-14'>
          {view === 'hirer'
            ? 'Your app for getting hours back'
            : 'Start earning extra income'}
        </h2>
        {/* buttons */}
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
    </section>
  )
}

export default Features
