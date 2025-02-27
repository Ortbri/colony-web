'use client'

import React, { ReactNode, useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

export const MovingCards = ({
  items,
  direction = 'left',
  speed = 'fast',
  pauseOnHover = true,
  className
}: {
  items: {
    iconBackgroundColor?: string
    icon: ReactNode
    title: string
    description: string
    time: string
  }[]
  direction?: 'left' | 'right'
  speed?: 'fast' | 'normal' | 'slow'
  pauseOnHover?: boolean
  className?: string
}) => {
  /* ----------------------------------- ref ---------------------------------- */
  const containerRef = React.useRef<HTMLDivElement>(null)
  const scrollerRef = React.useRef<HTMLUListElement>(null)
  /* ------------------------------- use effect ------------------------------- */
  useEffect(() => {
    addAnimation()
  })
  /* ---------------------------------- state --------------------------------- */
  const [start, setStart] = useState(false)
  /* ------------------------------ add animation ----------------------------- */
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children)

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true)
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem)
        }
      })

      getDirection()
      getSpeed()
      setStart(true)
    }
  }
  /* -------------------------------- direction ------------------------------- */
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === 'left') {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'forwards'
        )
      } else {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'reverse'
        )
      }
    }
  }
  /* ---------------------------------- speed --------------------------------- */
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === 'fast') {
        containerRef.current.style.setProperty('--animation-duration', '20s')
      } else if (speed === 'normal') {
        containerRef.current.style.setProperty('--animation-duration', '40s')
      } else {
        containerRef.current.style.setProperty('--animation-duration', '120s')
      }
    }
  }
  /* --------------------------------- return --------------------------------- */
  return (
    <div
      ref={containerRef}
      className={cn(
        'scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]',
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          'flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4',
          start && 'animate-scroll',
          pauseOnHover && 'hover:[animation-play-state:paused]'
        )}
      >
        {items.map((item) => (
          <li
            className='relative w-[350px] max-w-full shrink-0 rounded-3xl border border-b-0 border-slate-700 px-8 py-6 md:w-[450px]'
            style={{
              background:
                'linear-gradient(200deg, var(--neutral-800), var(--neutral-900)'
            }}
            key={item.title}
          >
            <div className='flex flex-col gap-2'>
              {/* upper container */}
              <div className='flex flex-row gap-4'>
                {/* icon */}
                <div
                  className={`flex items-center justify-center rounded-full bg-white p-2`}
                >
                  {item.icon}
                </div>
                <div className='flex flex-1 items-center'>
                  <h2 className='text-2xl font-semibold'>{item.title}</h2>
                </div>
              </div>
              {/* description */}
              <p className='py-3'>{item.description}</p>
              {/* time stamp */}
              <div className='flex self-start rounded-3xl border-2 border-white px-2'>
                <p>{item.time}</p>
              </div>
            </div>
            <div></div>
          </li>
        ))}
      </ul>
    </div>
  )
}
