'use client'

import React from 'react'
import useInView from '@/hooks/useInView'
import { motion } from 'framer-motion'

const Guide = () => {
  const [isInView, sectionRef] = useInView()
  return (
    <section ref={sectionRef} className='my-56'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: [20, -5, 0] } : {}}
        transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
        className=''
      >
        <div className='border-4 p-4'>
          <div>
            <h2 className='text-4xl font-bold md:text-7xl'>
              Your app for getting hours back
            </h2>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Guide
