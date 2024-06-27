'use client'

import React from 'react'
import { motion } from 'framer-motion'
import useInView from '@/hooks/useInView'
import { FlipWords } from '@/components/framer/customFlipWords'

function Em() {
  /* ---------------------------------- hook ---------------------------------- */
  const [isInView, sectionRef] = useInView()
  /* --------------------------------- return --------------------------------- */
  return (
    <section ref={sectionRef} className='my-56 pb-80'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: [20, -5, 0] } : {}}
        transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
        className=''
      >
        <div className='mx-14 flex flex-col items-center justify-center text-center text-7xl font-bold text-neutral-400'>
          <h2 className=''>Taking your time away from {''}</h2>
          <FlipWords words={words} className='' />
        </div>
      </motion.div>
    </section>
  )
}

const words = ['family', 'hobbies', 'relaxing', 'adventures']

export default Em
