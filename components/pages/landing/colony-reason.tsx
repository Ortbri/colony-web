'use client'

import React, { useRef } from 'react'
/**
 * Brainstorming: Why Colony?
 *
 * Problem: Existing gig apps (Rover, TaskRabbit, Uber) don't serve small towns and college towns well.
 *
 * Colony Solution:
 *   - Focus on underserved communities.
 *   - Tailored to the needs of smaller towns (e.g., yard work, local errands).
 *   - Builds community trust through local connections.
 *   - Offers opportunities for students and residents in these areas.
 *
 * Key Differentiators:
 *   - Local focus vs. nationa l/global reach.
 *   - Emphasis on community building and trust.
 *   - Caters to specific needs of smaller communities.
 *
 * Value Proposition:
 *   - For residents: Access convenient services and support local talent.
 *   - For workers: Find flexible work opportunities within their community.
 *   - For the community: Strengthen local economy and build connections.
 */

const data = [
  {
    title: 'Built for Small Towns',
    description:
      'National gig apps overlook small college towns due to inconsistent demand. Our platform is designed specifically to help these communities thrive.'
  },
  {
    title: 'Multiple Job Categories',
    description:
      'Our platform provides a variety of job types like Yard Work, Small Business Help, and Pet Services, allowing workers to find consistent opportunities.'
  },
  {
    title: 'Boosts Local Economy',
    description:
      'By increasing job opportunities in small towns, our platform helps keep money circulating within the local economy.'
  },
  {
    title: 'Transparent Fees',
    description:
      '3 percent + for a job and 3 percent jobs completed, this helps us operate in towns'
  }
]
export const ColonyReason = () => {
  const ref = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div className='w-full bg-white dark:bg-neutral-950' ref={containerRef}>
      <div ref={ref} className='mx-auto flex'>
        {/* Left column with sticky title */}
        <div className='sticky top-40 h-fit w-1/2'>
          <h3 className='text-2xl font-bold md:text-3xl'>Why Colony?</h3>
          <p className='text-md'>
            The gig economy wasn&apos;t built for small towns. We&apos;re
            changing that.
          </p>
        </div>

        {/* Right column with scrolling content */}
        <div className='flex w-full flex-col items-end gap-14 pl-14'>
          {data.map((item, index) => (
            <div
              key={index}
              className='flex w-full flex-col gap-2 rounded-2xl border border-border p-4'
            >
              <div className='h-80 w-full rounded-2xl bg-gray-50'>
                <div className='flex flex-col gap-2'></div>
              </div>

              <div className='flex w-full flex-col gap-1'>
                <h3 className='text-xs font-bold text-blue-500'>
                  {item.title}
                </h3>
                <p className='text-sm'>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
