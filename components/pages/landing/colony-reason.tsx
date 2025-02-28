'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Separator } from '@/components/ui/separator'
/* -------------------------------------------------------------------------- */
/*                            Multiple job category                           */
/* -------------------------------------------------------------------------- */
type NotificationType = {
  id: number
  title: React.ReactNode
  description: React.ReactNode
  person: string
}

const notifications = [
  {
    id: 1,
    title: (
      <p className='font-medium text-neutral-700 dark:text-neutral-200'>
        🐶 <span className='font-bold text-blue-500'>Dog Walking</span> Near you
      </p>
    ),
    description: (
      <p className='text-muted-foreground font-medium'>
        by Brian <span className='font-bold'>$13.25</span> •
        <span> Mar 14th @ 3pm (30 min)</span>
      </p>
    ),
    person: 'brian-notion'
  },
  {
    id: 2,
    title: (
      <p className='font-medium text-neutral-700 dark:text-neutral-200'>
        🏡 <span className='font-bold text-blue-500'>Yard Work</span> Near you
      </p>
    ),
    description: (
      <p className='font-medium text-neutral-500 dark:text-neutral-400'>
        By Megan <span className='font-bold'>$26.00</span> •
        <span> Mar 15th @ 5pm (1 hr 30 min)</span>
      </p>
    ),
    person: 'megan-notion'
  },
  {
    id: 3,
    title: (
      <p className='font-medium text-neutral-700 dark:text-neutral-200'>
        🐝 <span className='font-bold text-blue-500'>Small Business Help</span>{' '}
        Near you
      </p>
    ),
    description: (
      <p className='font-medium text-neutral-500 dark:text-neutral-400'>
        By Sarah <span className='font-bold'>$50.50</span> •
        <span> Mar 16th @ 7pm (3 hr)</span>
      </p>
    ),
    person: 'sarah-notion'
  }
]

export function JobCategoriesAnim() {
  const CARD_OFFSET = -16
  const SCALE_FACTOR = 0.06
  const [cards, setCards] = useState<NotificationType[]>(notifications)
  const [, setIntervalId] = useState<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const timerId = setInterval(() => {
      setCards((prevCards: NotificationType[]) => {
        const newArray = [...prevCards] // create a copy of the array
        newArray.unshift(newArray.pop()!) // move the last element to the front
        return newArray
      })
    }, 3000)

    setIntervalId(timerId)

    return () => {
      if (timerId) clearInterval(timerId)
    }
  }, [])

  return (
    <div className='flex h-full w-full items-center justify-center p-2 md:p-4 lg:p-10'>
      <div className='relative h-32 w-full max-w-[500px]'>
        {cards.map((noti, index) => {
          return (
            <motion.div
              key={noti.id}
              className='absolute top-6 right-0 left-0 flex w-full max-w-[500px] flex-row gap-2 rounded-3xl border border-neutral-200 bg-white p-3 shadow-xl shadow-black/[0.04] sm:gap-3 sm:p-4 dark:border-white/[0.1] dark:bg-black dark:shadow-white/[0.05]'
              style={{
                transformOrigin: 'center top'
              }}
              animate={{
                top: index * -CARD_OFFSET,
                scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
                zIndex: cards.length - index //  decrease z-index for the cards that are behind
              }}
            >
              <Image
                src={`/${noti.person}.png`}
                width={50}
                height={50}
                alt='person face'
                className='border-border h-[50px] w-[50px] shrink-0 rounded-full border sm:h-[60px] sm:w-[60px]'
              />
              <div className='flex w-full flex-col gap-1 overflow-hidden'>
                <div className='text-sm sm:text-base'>{noti.title}</div>
                <div className='text-xs sm:text-sm'>{noti.description}</div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*                              TRANSPARENT FEES                              */
/* -------------------------------------------------------------------------- */

export function TransparentFeesAnim() {
  // TODO: we dont need enter animations just use keyframes, but then animate the different type of jobs and fee types
  return (
    // TODO: bring height to the parent so we can size it to different sizes

    <div className='flex flex-col items-center justify-center gap-4 p-4 md:flex-row lg:p-10'>
      {/* Hirer's Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='border-border bg-background flex w-[350px] flex-col gap-4 rounded-3xl border p-5 shadow-lg'
      >
        <div className='flex flex-row gap-4'>
          <Image
            src={`/megan-notion.png`}
            width={50}
            height={50}
            alt='person face'
            className='border-border rounded-full border'
          />
          <div className='flex w-full flex-col justify-center'>
            <div className='text-lg font-bold'>Hirer Pays</div>
            <div className='text-sm text-gray-600'>🐶 Dog Walking Service</div>
          </div>
        </div>
        <Separator />
        <div className='flex flex-col gap-2'>
          <div className='flex justify-between text-sm'>
            <span className='text-gray-600'>Base Pay</span>
            <span className='font-medium'>$20.00</span>
          </div>
          <div className='flex justify-between text-sm'>
            <span className='text-gray-600'>Processing (2.9% + $0.30)</span>
            <span className='font-medium text-gray-600'>$0.88</span>
          </div>
          <div className='flex justify-between text-sm'>
            <span className='text-gray-600'>Colony (3% + $0.10)</span>
            <span className='font-medium text-blue-600'>$0.70</span>
          </div>
          <Separator />
          <div className='flex justify-between'>
            <span className='font-medium'>Total</span>
            <span className='font-bold'>$21.58</span>
          </div>
        </div>
      </motion.div>

      {/* Worker's Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className='border-border bg-background flex w-[350px] flex-col gap-4 rounded-3xl border p-5 shadow-lg'
      >
        <div className='flex flex-row gap-4'>
          <Image
            src={`/brian-notion.png`}
            width={50}
            height={50}
            alt='person face'
            className='border-border rounded-full border'
          />
          <div className='flex w-full flex-col justify-center'>
            <div className='text-lg font-bold'>Worker Payout</div>
            <div className='text-sm text-gray-600'>🐾 Dog Walking Service</div>
          </div>
        </div>
        <Separator />
        <div className='flex flex-col gap-2'>
          <div className='flex justify-between text-sm'>
            <span className='text-gray-600'>Job Amount</span>
            <span className='font-medium'>$20.00</span>
          </div>
          <div className='flex justify-between text-sm'>
            <span className='text-gray-600'>Payout Fee</span>
            <span className='font-medium text-gray-600'>$0.00</span>
          </div>
          <div className='flex justify-between text-sm'>
            <span className='text-gray-600'>Colony Fee (3%)</span>
            <span className='font-medium text-blue-600'>-$0.60</span>
          </div>
          <Separator />
          <div className='flex justify-between'>
            <span className='font-medium'>Payout</span>
            <span className='font-bold'>$19.40</span>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*                            BUILT FOR SMALL TOWNS                           */
/* -------------------------------------------------------------------------- */
export function LocalComparisonAnim() {
  return (
    <div className='flex flex-col items-center justify-center gap-4 p-4 md:flex-row lg:p-10'>
      {/* Big Gig Apps Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='bg-background flex h-[280px] w-[350px] flex-col gap-4 rounded-3xl border border-red-200 p-5 shadow-lg'
      >
        <div className='flex flex-row gap-4'>
          <div className='flex aspect-square h-12 w-12 items-center justify-center rounded-full bg-red-100'>
            🏙️
          </div>
          <div className='flex w-full flex-col justify-center'>
            <div className='text-lg font-bold text-red-600'>Big Gig Apps</div>
            <div className='text-sm text-gray-600'>
              Not built for small towns
            </div>
          </div>
        </div>
        <Separator />
        <ul className='flex w-full flex-col gap-2'>
          <li className='flex items-center gap-2'>
            <span className='text-red-500'>❌</span>
            <span className='text-gray-600'>Ignore small towns</span>
          </li>
          <li className='flex items-center gap-2'>
            <span className='text-red-500'>❌</span>
            <span className='text-gray-600'>Money leaves the community</span>
          </li>
          <li className='flex items-center gap-2'>
            <span className='text-red-500'>❌</span>
            <span className='text-gray-600'>Limited job categories</span>
          </li>
          <li className='flex items-center gap-2'>
            <span className='text-red-500'>❌</span>
            <span className='text-gray-600'>Only serve high-density areas</span>
          </li>
        </ul>
      </motion.div>

      {/* Colony Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className='bg-background flex h-[280px] w-[350px] flex-col gap-4 rounded-3xl border border-blue-200 p-5 shadow-lg'
      >
        <div className='flex flex-row gap-4'>
          <div className='flex aspect-square h-12 w-12 items-center justify-center rounded-full bg-indigo-100'>
            🏡
          </div>
          <div className='flex w-full flex-col justify-center'>
            <div className='text-lg font-bold text-blue-600'>Colony</div>
            <div className='text-sm text-gray-600'>Built for small towns</div>
          </div>
        </div>
        <Separator />
        <ul className='flex w-full flex-col gap-2'>
          <li className='flex items-center gap-2'>
            <span className='text-green-500'>✅</span>
            <span className='text-gray-600'>Focused on small towns</span>
          </li>
          <li className='flex items-center gap-2'>
            <span className='text-green-500'>✅</span>
            <span className='text-gray-600'>
              Keeps money in community and local work
            </span>
          </li>
          <li className='flex items-center gap-2'>
            <span className='text-green-500'>✅</span>
            <span className='text-gray-600'>Tailored job categories</span>
          </li>
          <li className='flex items-center gap-2'>
            <span className='text-green-500'>✅</span>
            <span className='text-gray-600'>Community-focused connections</span>
          </li>
        </ul>
      </motion.div>
    </div>
  )
}
