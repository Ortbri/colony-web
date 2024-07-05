import React from 'react'
import Link from 'next/link'
import { FaArrowDown } from 'react-icons/fa'
import TaskCards from './TaskCards'

function Cut() {
  /* --------------------------------- return --------------------------------- */
  return (
    <section className='my-24 py-52'>
      <div className='flex flex-col items-center gap-10'>
        <div className='flex flex-1 items-center justify-center'>
          <Link
            href='https://www.bls.gov/charts/american-time-use/activity-by-hldh.htm'
            className='text-center text-xl font-thin italic'
            title='American Time Use Survey Summary'
          >
            American Time Use Survey Summary
          </Link>
        </div>
        <div className='mx-auto flex flex-col justify-center gap-10 text-center leading-relaxed md:leading-snug lg:px-28'>
          <h2 className='text-4xl font-bold md:text-6xl'>
            14 hours, the average time spent on household tasks every week
          </h2>
        </div>
        {/* cards */}
        <TaskCards />
        {/* em */}
        <div className='flex items-center justify-center'>
          <p className='text-center text-2xl'>
            Reducing time for family, personal projects, relaxing
          </p>
        </div>
        <FaArrowDown
          color='white'
          size={40}
          className='m-8 self-center'
          title='Scroll Down'
        />
      </div>
    </section>
  )
}

export default Cut
