import React from 'react'
import IconButton from './Button'
import { FaUserPlus, FaMap } from 'react-icons/fa'
import Image from 'next/image'

const Guide = () => {
  return (
    <section className='max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row'>
      {/* map */}
      <div className='guide-map' />

      {/* title */}
      <div className='relative z-20 flex flex-1 flex-col gap-6 xl:w-1/2'>
        <text className='absolute left-[-20px] top-[-30px] w-10 scale-x-[-1] transform text-3xl lg:w-[50px]'>
          🐝
        </text>
        <h1 className='bold-52 lg:bold-88'>Community based app to save time</h1>
        <p className='text-lg leading-relaxed text-slate-500'>
          Your guide to getting your time back within your community. We want to
          help you get your hours back from dog walking, yard work, to even
          small business help all in one app.
        </p>
        <div className='mt-4'>
          <IconButton>Join Waitlist</IconButton>
        </div>
      </div>
      {/* floating */}
      <div className='relative flex flex-1 items-start'>
        <div className='relative z-20 flex w-[300px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8'>
          <div className='flexBetween flex flex-1'>
            <div className='flex flex-col'>
              <div className='flexBetween'>
                <p className='regular-16 text-gray-20'>Location</p>
              </div>
              <p className='bold-20 text-white'>Crete, NE</p>
            </div>
            <div className='flex h-12 w-12 items-center justify-center rounded-full bg-white p-4'>
              <FaMap />
            </div>
          </div>
          <div className='flex flex-col'>
            <div className='flexBetween'>
              <p className='regular-16 text-gray-20'>Job</p>
            </div>
            <p className='bold-20 text-white'>Yard Work</p>
          </div>

          <div className='flexBetween'>
            <div className='flex flex-col'>
              <p className='regular-16 block text-gray-20'>Duration</p>
              <p className='bold-20 text-white'>1 hour</p>
            </div>
            <div className='flex flex-col'>
              <p className='regular-16 block text-gray-20'>Time</p>
              <p className='bold-20 text-white'>2pm</p>
            </div>
            <div className='flex flex-col'>
              <p className='regular-16 block text-gray-20'>Job Pay</p>
              <p className='bold-20 text-white'>$16.30</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Guide
