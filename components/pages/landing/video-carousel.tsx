import { CheckCircle, CircleDashed, Plus } from 'lucide-react'
import React from 'react'

export default function VideoCarousel() {
  return (
    <div className='mx-auto grid w-full max-w-7xl auto-rows-[40rem] grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3 lg:auto-rows-[30rem]'>
      {items.map((item, index) => (
        <div
          key={index}
          className='group/bento relative flex flex-col gap-4 rounded-xl border border-border bg-white p-4 shadow-input transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none'
          // viewport={{ once: true }}
        >
          <div className='flex-1 rounded-xl bg-gray-100/50'>
            {/* video content will go here */}
            {item.video}
          </div>

          <div className='flex flex-row items-center justify-center gap-2 transition-all duration-200 group-hover/bento:scale-105'>
            <div className='flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 transition-transform duration-200 group-hover/bento:scale-105'>
              {item.icon}
            </div>
            {/* <div className='text-md font-normal'>{item.title}</div> */}
          </div>
        </div>
      ))}
    </div>
  )
}

const items = [
  {
    title: 'Create',
    icon: <Plus className='p-1' color='white' />,
    focused: true,
    video: <div />
  },
  {
    title: 'Select',
    icon: <CircleDashed className='p-1' color='white' />,
    focused: false,
    video: <div />
  },
  {
    title: 'Complete',
    icon: <CheckCircle className='p-1' color='white' />,
    focused: false,
    video: <div />
  }
]
