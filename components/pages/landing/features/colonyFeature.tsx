import React from 'react'
import { MdEmail, MdSupport } from 'react-icons/md'

function ColonyFeature() {
  return (
    <div className='flex flex-col items-center justify-center rounded-xl border bg-black p-10'>
      <div className='w-full'>
        <dl className='m-4 flex flex-col justify-center gap-16 md:flex-row'>
          {/* item 1 */}
          <div className='flex flex-col items-center text-center'>
            <MdEmail className='mb-4 h-12 w-12 text-white' />
            <dt className='text-xl font-bold'>Customer Support</dt>
            <dd className='mx-auto mt-2 text-lg text-gray-400'>
              Email Brian@joincolonyapp.com
            </dd>
          </div>

          {/* item 2 */}
          <div className='flex flex-col items-center text-center'>
            <MdSupport className='mb-4 h-12 w-12 text-white' />
            <dt className='text-xl font-bold'>Dispute Support</dt>
            <dd className='mx-auto mt-2 text-lg text-gray-400'>
              If job is not complete, payment will be returned
            </dd>
          </div>
        </dl>
      </div>
    </div>
  )
}

export default ColonyFeature
