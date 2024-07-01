'use client'
import React from 'react'
import { Button } from '../../../ui/button'
import HirerFeature from './hirerFeature'
import WorkerFeature from './workerFeature'

function Features() {
  /* ---------------------------------- view ---------------------------------- */
  const [view, setView] = React.useState('hirer')
  /* --------------------------------- return --------------------------------- */
  return (
    <section className=''>
      <div className='flex flex-row items-center justify-center gap-4 py-4'>
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
      {view === 'hirer' ? <HirerFeature /> : <WorkerFeature />}
    </section>
  )
}

export default Features
