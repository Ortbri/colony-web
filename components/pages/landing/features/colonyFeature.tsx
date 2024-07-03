import React from 'react'
import { MdLocationOn, MdShield } from 'react-icons/md'
import { TbMailUp } from 'react-icons/tb'
import { FaMapPin } from 'react-icons/fa'
import { IoShieldCheckmarkSharp } from 'react-icons/io5'
import { IoShieldCheckmarkOutline } from 'react-icons/io5'
import { MdAlternateEmail } from 'react-icons/md'
import { GrMapLocation } from 'react-icons/gr'

import { FaMapMarkedAlt } from 'react-icons/fa'

function ColonyFeature() {
  return (
    <div className='mb-10 mt-14 flex flex-col items-center'>
      <dl className='flex w-full justify-between gap-14 px-4'>
        {/* item 1 */}
        <div className='flex w-1/3 flex-col items-center text-center'>
          <MdAlternateEmail className='mb-4 h-12 w-12 text-white' />
          <dt className='text-xl font-bold'>Customer Support</dt>
          <dd className='mx-auto mt-2 text-lg text-gray-400'>
            Email Brian@joincolonyapp.com
          </dd>
        </div>

        {/* item 3 */}
        <div className='flex w-1/3 flex-col items-center text-center'>
          <GrMapLocation className='mb-4 h-12 w-12 text-white' />
          <dt className='text-xl font-bold'>Small Town Centric</dt>
          <dd className='mx-auto mt-2 text-lg text-gray-400'>
            Focused on providing services for small towns and communities.
          </dd>
        </div>

        {/* item 2 */}
        <div className='flex w-1/3 flex-col items-center text-center'>
          <IoShieldCheckmarkOutline className='mb-4 h-12 w-12 text-white' />
          <dt className='text-xl font-bold'>Dispute Support</dt>
          <dd className='mx-auto mt-2 text-lg text-gray-400'>
            If job is not complete, payment will be returned
          </dd>
        </div>
      </dl>
    </div>
  )
}

export default ColonyFeature
