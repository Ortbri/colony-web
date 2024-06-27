'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import useInView from '@/hooks/useInView'
import { InfiniteMovingCards } from '@/components/framer/customMovingCards'
import {
  FaDog,
  FaBroom,
  FaUtensils,
  FaShoppingCart,
  FaRegClock
} from 'react-icons/fa'
import { GiHighGrass } from 'react-icons/gi'
import { FaArrowDown } from 'react-icons/fa6'

function Cut() {
  /* ---------------------------------- hook ---------------------------------- */
  const [isInView, sectionRef] = useInView()
  /* --------------------------------- return --------------------------------- */
  return (
    <section ref={sectionRef} className='my-56 pb-80'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: [20, -5, 0] } : {}}
        transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
        className='flex flex-col gap-8'
      >
        {/* link */}
        <div className='flex flex-1 items-center justify-center'>
          <Link
            href='https://www.bls.gov/charts/american-time-use/activity-by-hldh.htm'
            className='text-3xl font-thin italic'
          >
            American Time Use Survey Summary
          </Link>
        </div>
        {/* problem */}
        <div className='flex flex-col gap-8'>
          <div className='mx-auto flex flex-col justify-center gap-10 px-28 text-center leading-relaxed md:leading-snug'>
            <h2 className='text-7xl font-bold'>
              14 hours, the average time spent on household tasks every week
            </h2>
            {/* <p className='text-2xl'>Almost 2 Full Work Days</p> */}
          </div>

          {/* cards */}
          <div className='dark:bg-grid-white/[0.05] relative flex flex-col items-center justify-center overflow-hidden rounded-md bg-white antialiased dark:bg-black'>
            <InfiniteMovingCards items={tasks} direction='right' speed='slow' />
          </div>
          <FaArrowDown color='white' size={40} className='m-8 self-center' />
        </div>
      </motion.div>
    </section>
  )
}
const tasks = [
  {
    title: 'Dog Walking',
    description: 'An average of 1 hour per week is spent on dog walking.',
    time: '1 hour',
    icon: <FaDog size={24} color='black' />
  },
  {
    title: 'Lawn Mowing',
    description: 'An average of 1.5 hours per week is spent on lawn mowing.',
    time: '1.5 hours',
    icon: <GiHighGrass size={24} color='black' />
  },
  {
    title: 'Cleaning',
    description: 'An average of 2.5 hours per week is spent on cleaning.',
    time: '2.5 hours',
    icon: <FaBroom size={24} color='black' />
  },
  {
    title: 'Cooking',
    description: 'An average of 5.5 hours per week is spent on cooking.',
    time: '5.5 hours',
    icon: <FaUtensils size={24} color='black' />
  },
  {
    title: 'Grocery Shopping',
    description:
      'An average of 1.2 hours per week is spent on grocery shopping.',
    time: '1.2 hours',
    icon: <FaShoppingCart size={24} color='black' />
  },
  {
    title: 'Laundry',
    description: 'An average of 1.5 hours per week is spent on laundry.',
    time: '1.5 hours',
    icon: <FaRegClock size={24} color='black' />
  },
  {
    title: 'Other Household Tasks',
    description:
      'An average of 2.8 hours per week is spent on other household tasks.',
    time: '2.8 hours',
    icon: <FaDog size={24} color='black' />
  }
]

export default Cut
