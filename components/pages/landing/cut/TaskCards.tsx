'use client'

import React from 'react'
import { MovingCards } from '@/components/framer/MovingCards'
import {
  FaDog,
  FaBroom,
  FaUtensils,
  FaShoppingCart,
  FaRegClock
} from 'react-icons/fa'
import { GiHighGrass } from 'react-icons/gi'

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

export default TaskCards
