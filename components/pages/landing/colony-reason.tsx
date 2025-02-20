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
  title: string
  desc: string
  person: string
}

const notifications = [
  {
    id: 1,
    title: 'Dog Walking Near You',
    desc: 'By Brian • $13.25 • Mar 14th @3pm (30 min)',
    person: 'brian-notion'
  },
  {
    id: 2,
    title: 'Yard Work Near You',
    desc: 'By John • $12.00 • Mar 15th @5pm (30 min)',
    person: 'john-notion'
  },
  {
    id: 3,
    title: 'Dog Sitting Near You',
    desc: 'By Brian • $14.50 • Mar 16th @7pm (30 min)',
    person: 'brian-notion'
  }
]

export function JobCategoriesAnim() {
  const CARD_OFFSET = 10
  const SCALE_FACTOR = 0.06
  const [cards, setCards] = useState<NotificationType[]>(notifications)

  useEffect(() => {
    const interval = setInterval(() => {
      setCards((prevCards: NotificationType[]) => {
        const newArray = [...prevCards] // create a copy of the array
        newArray.unshift(newArray.pop()!) // move the last element to the front
        return newArray
      })
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className=''>
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index //  decrease z-index for the cards that are behind
            }}
            className='flex flex-row gap-4 rounded-2xl bg-white p-4 shadow-md'
          >
            <Image
              src={`/${card.person}.png`}
              width={60}
              height={60}
              alt='person face'
              className='h-[60px] w-[60px] rounded-full border border-border'
            />
            <div className='flex flex-col justify-center'>
              <div className='font-bold'>{card.title}</div>
              <div>{card.desc}</div>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*                              TRANSPARENT FEES                              */
/* -------------------------------------------------------------------------- */
export function TransparentFeesAnim() {
  return (
    <div className='flex h-[400px] w-full flex-col items-center justify-center'>
      <div className='flex gap-6'>
        {/* Hirer's Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='flex w-[300px] flex-col gap-4 rounded-3xl bg-white p-6 shadow-lg'
        >
          <div className='flex flex-row gap-4'>
            <Image
              src={`/john-notion.png`}
              width={50}
              height={50}
              alt='person face'
              className='rounded-full border border-border'
            />
            <div className='flex w-full flex-col justify-center'>
              <div className='text-lg font-bold'>Hirer Pays</div>
              <div className='text-sm text-gray-600'>Dog Walking Service</div>
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
          className='flex w-[300px] flex-col gap-4 rounded-3xl bg-white p-6 shadow-lg'
        >
          <div className='flex flex-row gap-4'>
            <Image
              src={`/brian-notion.png`}
              width={50}
              height={50}
              alt='person face'
              className='rounded-full border border-border'
            />
            <div className='flex w-full flex-col justify-center'>
              <div className='text-lg font-bold'>Worker Receives</div>
              <div className='text-sm text-gray-600'>Dog Walking Service</div>
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
      {/* this UI looks really nice do some lke this later */}
      {/* <div className='mt-4 w-[620px] rounded-lg bg-blue-50 p-3 text-sm text-blue-700'>
        <span className='font-medium'>✨ Fair & Transparent:</span> We keep our
        fees low to support both hirers and workers in local economies.
        Processing fees are passed through at cost.
      </div> */}
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*                            BUILT FOR SMALL TOWNS                           */
/* -------------------------------------------------------------------------- */
export function LocalComparisonAnim() {
  return (
    <div className='flex h-[400px] w-full flex-col items-center justify-center'>
      <div className='flex w-full gap-6'>
        {/* Big City Side */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 0.5, x: 0 }}
          transition={{ duration: 0.5 }}
          className='flex w-1/2 flex-col gap-4 rounded-3xl bg-white/50 p-6 shadow-sm'
        >
          <div className='flex items-center gap-3'>
            <div className='flex h-10 w-10 items-center justify-center rounded-full bg-gray-200'>
              🌆
            </div>
            <h3 className='text-lg font-semibold text-gray-500'>Big Cities</h3>
          </div>

          <div className='flex flex-col gap-3'>
            <div className='flex items-center gap-2 text-sm text-gray-500'>
              <span>• Saturated market</span>
            </div>
            <div className='flex items-center gap-2 text-sm text-gray-500'>
              <span>• High competition</span>
            </div>
            <div className='flex items-center gap-2 text-sm text-gray-500'>
              <span>• Complex pricing</span>
            </div>
          </div>
        </motion.div>

        {/* Small Town Side */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='flex w-1/2 flex-col gap-4 rounded-3xl bg-white p-6 shadow-lg'
        >
          <div className='flex items-center gap-3'>
            <div className='flex h-10 w-10 items-center justify-center rounded-full bg-blue-100'>
              🏠
            </div>
            <h3 className='text-lg font-semibold text-blue-600'>Small Towns</h3>
          </div>

          <div className='flex flex-col gap-3'>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className='flex items-center gap-2 text-sm'
            >
              <span className='flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-600'>
                ✓
              </span>
              <span>Community focused</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className='flex items-center gap-2 text-sm'
            >
              <span className='flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-600'>
                ✓
              </span>
              <span>Direct relationships</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className='flex items-center gap-2 text-sm'
            >
              <span className='flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-600'>
                ✓
              </span>
              <span>Simple, fair pricing</span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className='mt-2 rounded-lg bg-blue-50 p-3 text-sm text-blue-700'
          >
            <span className='font-medium'>Colony is different:</span> We focus
            on small towns where community matters most.
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
