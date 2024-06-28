'use client'

import React from 'react'
import { motion } from 'framer-motion'
import useInView from '@/hooks/useInView'
import { FlipWords } from '@/components/framer/customFlipWords'
import { FaArrowDown } from 'react-icons/fa'

function Em() {
  /* ---------------------------------- hook ---------------------------------- */
  const [isInView, sectionRef] = useInView()
  /* --------------------------------- return --------------------------------- */
  return (
    <section ref={sectionRef} className='my-80'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: [20, -5, 0] } : {}}
        transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
        className='flex flex-col gap-8'
      >
        <div className='mx-14 flex flex-col items-center justify-center text-center text-5xl font-bold text-neutral-400'>
          <h2 className=''>Taking your time away from {''}</h2>
          <div className='h-24'>
            <FlipWords words={words} className='' duration={1500} />
          </div>
        </div>
        {/* <FaArrowDown color='white' size={40} className='m-8 self-center' /> */}
      </motion.div>
    </section>
  )
}

const words = ['family', 'hobbies', 'relaxing', 'adventures']

export default Em
