'use client'
import { cn } from '@/utils/cn'
import React from 'react'
// import { BentoGrid, BentoGridItem } from './framer/BentoGrid/BentoGrid'
import { BentoGrid, BentoGridItem } from '../BentoGrid'
import {
  FaClipboard,
  FaFileAlt,
  FaLightbulb,
  FaSmile,
  FaFileSignature
} from 'react-icons/fa'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

function WorkerGrid() {
  return (
    <>
      <BentoGrid className='mx-auto max-w-7xl md:auto-rows-[20rem]'>
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={cn('[&>p:text-lg]', item.className)}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
    </>
  )
}
const Skeleton = () => (
  <div className='dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex h-full min-h-[6rem] w-full flex-1 rounded-xl border border-transparent bg-neutral-100 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] dark:border-white/[0.2] dark:bg-black'></div>
)

const items = [
  {
    title: 'AI Content Generation',
    description: (
      <span className='text-sm'>
        Experience the power of AI in generating unique content.
      </span>
    ),
    header: <Skeleton />,
    className: 'md:col-span-1',
    icon: <FaClipboard className='h-4 w-4 text-neutral-500' />
  },
  {
    title: 'Automated Proofreading',
    description: (
      <span className='text-sm'>
        Let AI handle the proofreading of your documents.
      </span>
    ),
    header: <Skeleton />,
    className: 'md:col-span-1',
    icon: <FaFileAlt className='h-4 w-4 text-neutral-500' />
  },
  {
    title: 'Contextual Suggestions',
    description: (
      <span className='text-sm'>
        Get AI-powered suggestions based on your writing context.
      </span>
    ),
    header: <Skeleton />,
    className: 'md:col-span-1',
    icon: <FaLightbulb className='h-4 w-4 text-neutral-500' />
  },
  {
    title: 'Sentiment Analysis',
    description: (
      <span className='text-sm'>
        Understand the sentiment of your text with AI analysis.
      </span>
    ),
    header: <Skeleton />,
    className: 'md:col-span-2',
    icon: <FaSmile className='h-4 w-4 text-neutral-500' />
  },

  {
    title: 'Text Summarization',
    description: (
      <span className='text-sm'>
        Summarize your lengthy documents with AI technology.
      </span>
    ),
    header: <Skeleton />,
    className: 'md:col-span-1',
    icon: <FaFileSignature className='h-4 w-4 text-neutral-500' />
  }
]

export default WorkerGrid
