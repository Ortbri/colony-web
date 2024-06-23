'use client'
import { cn } from '@/utils/cn'
import React from 'react'
// import { BentoGrid, BentoGridItem } from './framer/BentoGrid/BentoGrid'
import { BentoGrid, BentoGridItem } from './BentoGrid'
import {
  FaClipboard,
  FaFileAlt,
  FaLightbulb,
  FaSmile,
  FaFileSignature
} from 'react-icons/fa'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

function HirerGrid() {
  return (
    <>
      <BentoGrid className='mx-auto max-w-7xl md:auto-rows-[20rem]'>
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={cn('[&>p:text-lg]', item.className)}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
    </>
  )
}
// const Skeleton = () => (
//   <div className='dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex h-full min-h-[6rem] w-full flex-1 rounded-xl border border-transparent bg-neutral-100 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] dark:border-white/[0.2] dark:bg-black'></div>
// )
const MessageSkelly = () => {
  const variants = {
    initial: {
      x: 0
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2
      }
    }
  }
  const variantsSecond = {
    initial: {
      x: 0
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2
      }
    }
  }

  return (
    <motion.div
      initial='initial'
      whileHover='animate'
      className='dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex h-full min-h-[6rem] w-full flex-1 flex-col space-y-2'
    >
      <motion.div
        variants={variants}
        className='flex flex-row items-center space-x-2 rounded-full border border-neutral-100 bg-white p-2 dark:border-white/[0.2] dark:bg-black'
      >
        <div className='h-6 w-6 flex-shrink-0 rounded-full bg-gradient-to-r from-amber-500 to-orange-800' />
        <div className='h-4 w-full rounded-full bg-gray-100 dark:bg-neutral-900' />
      </motion.div>
      {/* <motion.div
        variants={variantsSecond}
        className='ml-auto flex w-3/4 flex-row items-center space-x-2 rounded-full border border-neutral-100 bg-white p-2 dark:border-white/[0.2] dark:bg-black'
      >
        <div className='h-4 w-full rounded-full bg-gray-100 dark:bg-neutral-900' />
        <div className='h-6 w-6 flex-shrink-0 rounded-full bg-gradient-to-r from-amber-500 to-orange-800' />
      </motion.div> */}
      <motion.div
        variants={variantsSecond}
        className='flex flex-row items-center space-x-2 rounded-full border border-neutral-100 bg-white p-2 dark:border-white/[0.2] dark:bg-black'
      >
        <div className='h-6 w-6 flex-shrink-0 rounded-full bg-gradient-to-r from-amber-500 to-orange-800' />
        <div className='h-4 w-full rounded-full bg-gray-100 dark:bg-neutral-900' />
      </motion.div>
      <motion.div
        variants={variants}
        className='flex flex-row items-center space-x-2 rounded-full border border-neutral-100 bg-white p-2 dark:border-white/[0.2] dark:bg-black'
      >
        <div className='h-6 w-6 flex-shrink-0 rounded-full bg-gradient-to-r from-amber-500 to-orange-800' />
        <div className='h-4 w-full rounded-full bg-gray-100 dark:bg-neutral-900' />
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className='flex flex-row items-center space-x-2 rounded-full border border-neutral-100 bg-white p-2 dark:border-white/[0.2] dark:bg-black'
      >
        <div className='h-6 w-6 flex-shrink-0 rounded-full bg-gradient-to-r from-amber-500 to-orange-800' />
        <div className='h-4 w-full rounded-full bg-gray-100 dark:bg-neutral-900' />
      </motion.div>
    </motion.div>
  )
}
const TimeSkelly = () => {
  const variants = {
    initial: {
      width: 0
    },
    animate: {
      width: '100%',
      transition: {
        duration: 0.2
      }
    },
    hover: {
      width: ['0%', '100%'],
      transition: {
        duration: 2
      }
    }
  }
  const arr = new Array(6).fill(0)
  return (
    <motion.div
      initial='initial'
      animate='animate'
      whileHover='hover'
      className='dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex h-full min-h-[6rem] w-full flex-1 flex-col space-y-2'
    >
      {arr.map((_, i) => (
        <motion.div
          key={'skelenton-two' + i}
          variants={variants}
          style={{
            maxWidth: Math.random() * (100 - 40) + 40 + '%'
          }}
          className='flex h-4 w-full flex-row items-center space-x-2 rounded-full border border-neutral-100 bg-neutral-100 p-2 dark:border-white/[0.2] dark:bg-black'
        ></motion.div>
      ))}
    </motion.div>
  )
}
const PaySkelly = () => {
  const variants = {
    initial: {
      backgroundPosition: '0 50%'
    },
    animate: {
      backgroundPosition: ['0, 50%', '100% 50%', '0 50%']
    }
  }
  return (
    <motion.div
      initial='initial'
      animate='animate'
      variants={variants}
      transition={{
        duration: 20,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut'
      }}
      className='flex h-full min-h-[6rem] w-full flex-1 flex-col space-y-2 rounded-lg'
      style={{
        background:
          'linear-gradient(-45deg, #ffbb00, #ff8800, #e73c7e, #8a2be2)',
        backgroundSize: '400% 400%'
      }}
    >
      <motion.div className='h-full w-full rounded-lg'></motion.div>
    </motion.div>
  )
}
const JobsSkelly = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5
    },
    hover: {
      x: 0,
      rotate: 0
    }
  }
  const second = {
    initial: {
      x: -20,
      rotate: 5
    },
    hover: {
      x: 0,
      rotate: 0
    }
  }
  return (
    <motion.div
      initial='initial'
      animate='animate'
      whileHover='hover'
      className='dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex h-full min-h-[6rem] w-full flex-1 flex-row space-x-2'
    >
      <motion.div
        variants={first}
        className='flex h-full w-1/3 flex-col items-center justify-center rounded-2xl border border-neutral-200 bg-white p-4 dark:border-white/[0.1] dark:bg-black'
      >
        {/* <Image
          src='https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg'
          alt='avatar'
          height='100'
          width='100'
          className='h-10 w-10 rounded-full'
        /> */}
        <p className='mt-4 text-center text-xs font-semibold text-neutral-500 sm:text-sm'>
          Small Business Help
        </p>
        <p className='mt-4 rounded-full border border-red-500 bg-red-100 px-2 py-0.5 text-xs text-red-600 dark:bg-red-900/20'>
          4 Hour
        </p>
      </motion.div>
      <motion.div className='relative z-20 flex h-full w-1/3 flex-col items-center justify-center rounded-2xl border border-neutral-200 bg-white p-4 dark:border-white/[0.1] dark:bg-black'>
        {/* <Image
          src='https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg'
          alt='avatar'
          height='100'
          width='100'
          className='h-10 w-10 rounded-full'
        /> */}
        <p className='mt-4 text-center text-xs font-semibold text-neutral-500 sm:text-sm'>
          Dog Walking
        </p>
        <p className='mt-4 rounded-full border border-green-500 bg-green-100 px-2 py-0.5 text-xs text-green-600 dark:bg-green-900/20'>
          1 Hour
        </p>
      </motion.div>
      <motion.div
        variants={second}
        className='flex h-full w-1/3 flex-col items-center justify-center rounded-2xl border border-neutral-200 bg-white p-4 dark:border-white/[0.1] dark:bg-black'
      >
        {/* <Image
          src='https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg'
          alt='avatar'
          height='100'
          width='100'
          className='h-10 w-10 rounded-full'
        /> */}
        <p className='mt-4 text-center text-xs font-semibold text-neutral-500 sm:text-sm'>
          Yard Work
        </p>
        <p className='mt-4 rounded-full border border-orange-500 bg-orange-100 px-2 py-0.5 text-xs text-orange-600 dark:bg-orange-900/20'>
          2 Hour
        </p>
      </motion.div>
    </motion.div>
  )
}
const DisputeSkelly = () => {
  const variants = {
    initial: {
      x: 0
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2
      }
    }
  }
  const variantsSecond = {
    initial: {
      x: 0
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2
      }
    }
  }

  return (
    <motion.div
      initial='initial'
      whileHover='animate'
      className='dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex h-full min-h-[6rem] w-full flex-1 flex-col space-y-2'
    >
      <motion.div
        variants={variants}
        className='flex flex-row items-start space-x-2 rounded-2xl border border-neutral-100 bg-white p-2 dark:border-white/[0.2] dark:bg-black'
      >
        {/* <Image
          src='https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg'
          alt='avatar'
          height='100'
          width='100'
          className='h-10 w-10 rounded-full'
        /> */}
        <p className='text-xs text-neutral-500'>Ive had an issue with ....</p>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className='ml-auto flex flex-row items-center justify-end space-x-2 rounded-full border border-neutral-100 bg-white p-2 dark:border-white/[0.2] dark:bg-black'
      >
        <p className='text-xs text-neutral-500'>We're here to help!</p>
        <div className='h-6 w-6 flex-shrink-0 rounded-full bg-gradient-to-r from-amber-500 to-orange-800' />
      </motion.div>
    </motion.div>
  )
}
const items = [
  {
    title: 'Post a job',
    description: (
      <span className='text-sm'>Send a ping to workers in your town.</span>
    ),
    header: <JobsSkelly />,
    className: 'md:col-span-3',
    icon: <FaClipboard className='h-4 w-4 text-neutral-500' />
  },
  {
    title: 'Receive Requests',
    description: (
      <span className='text-sm'>Requests from workers in town.</span>
    ),
    header: <MessageSkelly />,
    className: 'md:col-span-2',
    icon: <FaFileAlt className='h-4 w-4 text-neutral-500' />
  },
  {
    title: 'Select a worker & Pay',
    description: (
      <span className='text-sm'>
        Payment is held at Colony until job is complete.
      </span>
    ),
    header: <PaySkelly />,
    className: 'md:col-span-1',
    icon: <FaLightbulb className='h-4 w-4 text-neutral-500' />
  },
  {
    title: 'Dispute Support',
    description: (
      <span className='text-sm'>
        If job is not complete, payment can be sent back.
      </span>
    ),
    header: <DisputeSkelly />,
    className: 'md:col-span-1',
    icon: <FaSmile className='h-4 w-4 text-neutral-500' />
  },

  {
    title: 'Hours saved?',
    description: (
      <span className='text-sm'>It depends, Create your first post!</span>
    ),
    header: <TimeSkelly />,
    className: 'md:col-span-2',
    icon: <FaFileSignature className='h-4 w-4 text-neutral-500' />
  }
]

export default HirerGrid
