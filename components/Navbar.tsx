'use client'
import React, { useState } from 'react'
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent
} from 'framer-motion'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { FaHive } from 'react-icons/fa'
import Image from 'next/image'
import { Button } from './ui/button'

export const Navbar = ({
  navItems,
  className
}: {
  navItems: {
    name: string
    link: string
    icon?: JSX.Element
  }[]
  className?: string
}) => {
  /* ---------------------------------- state --------------------------------- */
  const [visible, setVisible] = useState(true)
  /* -------------------------------- animation ------------------------------- */
  const { scrollYProgress } = useScroll()

  useMotionValueEvent(scrollYProgress, 'change', (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === 'number') {
      let direction = current! - scrollYProgress.getPrevious()!

      if (scrollYProgress.get() < 0.05) {
        // also set true for the initial state
        setVisible(true)
      } else {
        if (direction < 0) {
          setVisible(true)
        } else {
          setVisible(false)
        }
      }
    }
  })
  /* --------------------------------- return --------------------------------- */
  return (
    <AnimatePresence mode='wait'>
      <motion.div
        initial={{
          opacity: 1,
          y: -100
        }}
        animate={{
          y: visible ? 0 : -200,
          opacity: visible ? 1 : 0
        }}
        transition={{
          duration: 0.2
        }}
        className={cn(
          'fixed inset-x-10 top-5 z-[5000] flex items-center justify-between rounded-3xl px-5 py-2 shadow-md',
          className
        )}
        style={{
          backdropFilter: 'blur(16px) saturate(180%)',
          backgroundColor: 'rgba(0, 0, 0, 0.33)'
        }}
      >
        <div className='flex items-center'>
          <Image
            src={'/colonyLogo.png'}
            width={50}
            height={50}
            alt='Colony Logo'
          />
        </div>
        <ul className='flex items-center space-x-4'>
          {navItems.map((navItem, idx) => (
            <li key={`link=${idx}`}>
              <Link
                href={navItem.link}
                className={cn(
                  'flex items-center space-x-1 text-white hover:text-gray-300'
                )}
              >
                {navItem.icon && <span className='block'>{navItem.icon}</span>}
                <span className='cursor-pointer text-sm'>{navItem.name}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className='flex items-center'>
          <Button>Download</Button>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
