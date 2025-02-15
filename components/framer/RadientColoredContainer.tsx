'use client'

import { motion } from 'framer-motion'
import React from 'react'

interface CleanSkellyProps {
  children: React.ReactNode
  className?: string
}

const RadientColoredContainer: React.FC<CleanSkellyProps> = ({
  children,
  className = ''
}) => {
  const variants = {
    initial: {
      backgroundPosition: '0 50%'
    },
    animate: {
      backgroundPosition: ['0 50%', '100% 50%', '0 50%']
    }
  }

  return (
    <motion.div
      initial='initial'
      animate='animate'
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: 'reverse'
      }}
      className={`dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex h-full min-h-[6rem] w-full flex-1 flex-col space-y-2 rounded-3xl ${className}`}
      style={{
        background:
          'linear-gradient(-45deg, #ffbb00, #ff4500, #ff69b4, #800080)',
        backgroundSize: '400% 400%'
      }}
    >
      {children}
    </motion.div>
  )
}

export default RadientColoredContainer
