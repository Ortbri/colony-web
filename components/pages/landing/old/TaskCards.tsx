'use client'

import React from 'react'
import { MovingCards } from '@/components/framer/MovingCards'
import {
  FaDog,
  FaBroom,
  FaUtensils,
  FaShoppingCart,
  FaRegClock,
  FaArrowDown
} from 'react-icons/fa'
import { GiHighGrass } from 'react-icons/gi'
import Link from 'next/link'

/* -------------------------------- task card ------------------------------- */
function TaskCards() {
  return (
    <div className='dark:bg-grid-white/[0.05] relative flex flex-col items-center justify-center overflow-hidden rounded-md bg-white antialiased dark:bg-black'>
      <MovingCards items={tasks} direction='right' speed='slow' />
    </div>
  )
}
/* ---------------------------------- tasks --------------------------------- */
const tasks = [
  {
    title: 'Dog Walking',
    description: 'An average of 1 hour per week is spent on dog walking.',
    time: '1 hour',
    icon: <FaDog size={24} color='black' title='Dog Walking' />
  },
  {
    title: 'Lawn Mowing',
    description: 'An average of 1.5 hours per week is spent on lawn mowing.',
    time: '1.5 hours',
    icon: <GiHighGrass size={24} color='black' title='Lawn Mowing' />
  },
  {
    title: 'Cleaning',
    description: 'An average of 2.5 hours per week is spent on cleaning.',
    time: '2.5 hours',
    icon: <FaBroom size={24} color='black' title='Cleaning' />
  },
  {
    title: 'Cooking',
    description: 'An average of 5.5 hours per week is spent on cooking.',
    time: '5.5 hours',
    icon: <FaUtensils size={24} color='black' title='Cooking' />
  },
  {
    title: 'Grocery Shopping',
    description:
      'An average of 1.2 hours per week is spent on grocery shopping.',
    time: '1.2 hours',
    icon: <FaShoppingCart size={24} color='black' title='Grocery Shopping' />
  },
  {
    title: 'Laundry',
    description: 'An average of 1.5 hours per week is spent on laundry.',
    time: '1.5 hours',
    icon: <FaRegClock size={24} color='black' title='Laundry' />
  },
  {
    title: 'Other',
    description:
      'An average of 2.8 hours per week is spent on other household tasks.',
    time: '2.8 hours',
    icon: <FaDog size={24} color='black' title='Other Tasks' />
  }
]

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
