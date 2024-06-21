import React from 'react'
import { InfiniteMovingCards } from './framer/InfinateMovingCards'
import {
  FaProjectDiagram,
  FaUmbrellaBeach,
  FaUserFriends
} from 'react-icons/fa'

const tasks = [
  { icon: <FaProjectDiagram />, title: 'Small Business Help' },
  { icon: <FaUmbrellaBeach />, title: 'Yard Work' },
  { icon: <FaUserFriends />, title: 'Dog Walking' }
]

const Guide = () => {
  return (
    <section className='flex flex-col items-center justify-center px-4 py-20'>
      {/* Header */}
      <div className='mx-auto flex flex-col text-center text-6xl font-semibold text-neutral-600 dark:text-neutral-400 sm:text-6xl lg:text-8xl'>
        <div>We're here to help you save time</div>
        <div className='py-10 text-2xl text-neutral-500 dark:text-neutral-300'>
          Reduce the loss of time by finding trusted local helpers for your
          tasks.
        </div>
      </div>

      {/* Cards */}
      <div className='mt-10 w-full'>
        <InfiniteMovingCards items={tasks} direction='right' speed='slow' />
      </div>

      {/* Explanation */}
      <div className='mt-10 text-center text-xl text-neutral-700 dark:text-neutral-300'>
        <p>
          Our app connects you with reliable, local helpers who can take care of
          your yard work, assist with small business tasks, and walk your dog.
        </p>
        <p className='mt-4'>
          Designed with ease of use in mind, our app ensures that you can
          quickly find the help you need without the hassle of hiring
          professionals.
        </p>
        <p className='mt-4'>
          Trust and reliability are our top priorities, which is why all our
          helpers are vetted and reviewed by other users. You can rest assured
          knowing that you're getting the best help available in your community.
        </p>
      </div>

      {/* Trust Elements */}
      <div className='mt-10 text-center text-xl text-neutral-700 dark:text-neutral-300'>
        <p className='font-bold'>Trusted by Thousands</p>
        <div className='mt-4 flex justify-center space-x-8'>
          <img
            src='/path/to/security-badge.png'
            alt='Security Badge'
            className='h-12'
          />
          <img
            src='/path/to/endorsement-logo.png'
            alt='Endorsement Logo'
            className='h-12'
          />
        </div>
        <p className='mt-4'>
          Created by a team of dedicated professionals, our app is designed to
          seamlessly integrate into your life and make finding help effortless.
        </p>
      </div>
    </section>
  )
}

export default Guide
