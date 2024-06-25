'use client'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { cn } from '@/utils/cn'

export const FlipWords = ({
  words,
  duration = 3000,
  className
}: {
  words: string[]
  duration?: number
  className?: string
}) => {
  /* ---------------------------------- state --------------------------------- */
  const [currentWord, setCurrentWord] = useState(words[0])
  const [isAnimating, setIsAnimating] = useState<boolean>(false)
  /* --------------------------------- animate -------------------------------- */
  const startAnimation = useCallback(() => {
    const nextIndex = words.indexOf(currentWord) + 1
    const word = words[nextIndex % words.length]
    setCurrentWord(word)
    setIsAnimating(true)
  }, [currentWord, words])
  /* -------------------------------- useeffect ------------------------------- */
  useEffect(() => {
    if (!isAnimating) {
      const timer = setTimeout(() => {
        startAnimation()
      }, duration)
      return () => clearTimeout(timer)
    }
  }, [isAnimating, duration, startAnimation])
  /* --------------------------------- return --------------------------------- */
  return (
    <AnimatePresence onExitComplete={() => setIsAnimating(false)}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.4,
          ease: 'easeInOut',
          type: 'spring',
          stiffness: 100,
          damping: 10
        }}
        exit={{
          opacity: 0,
          y: -40,
          x: 40,
          filter: 'blur(8px)',
          scale: 2,
          position: 'absolute'
        }}
        className={cn(
          'relative z-10 inline-block text-left text-neutral-900 dark:text-neutral-100',
          className
        )}
        key={currentWord}
      >
        {currentWord.split('').map((letter, index) => (
          <motion.span
            key={currentWord + index}
            initial={{ opacity: 0, y: 10, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{
              delay: index * 0.08,
              duration: 0.4
            }}
            className='inline-block'
          >
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        ))}
      </motion.div>
    </AnimatePresence>
  )
}
