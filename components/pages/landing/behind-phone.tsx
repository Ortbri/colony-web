'use client'
import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import {
  CheckCircle2,
  DollarSign,
  Calendar,
  MapPin,
  Plus,
  CircleDotDashed
} from 'lucide-react'

type Notification = {
  id: number
  icon: React.ReactNode
  title: string
  message: string
  amount?: string
  className?: string
}

const notifications: Notification[] = [
  // Left side (1-4)
  {
    id: 1,
    icon: <IconContainer icon={<Plus className='h-4 w-4' />} />,
    title: 'Job Created',
    message: 'Your job post for Yard Work is live! 🎉',
    className: '-translate-x-[245px] -translate-y-[150px] opacity-40'
  },
  {
    id: 2,
    icon: (
      <IconContainer
        icon={
          <Image
            src={'/brian-notion.png'}
            width={50}
            height={50}
            alt='person face'
            className='rounded-full border border-border'
          />
        }
      />
    ),
    title: 'Request Received',
    message: 'Brian requested to complete your job ✨',
    className: '-translate-x-[300px] -translate-y-[70px]'
  },
  {
    id: 3,
    icon: <IconContainer icon={<CircleDotDashed className='h-4 w-4' />} />,
    title: 'Job Completed!',
    message: 'Review the work to release the funds 🔍',
    className: '-translate-x-[320px] translate-y-[10px] opacity-40'
  },
  {
    id: 4,
    icon: <IconContainer icon={<DollarSign className='h-4 w-4' />} />,
    title: 'Funds Released',
    message: "You've successfully paid Brian 💰 $17.50",
    className: '-translate-x-[265px] translate-y-[90px] '
  },
  // Right side (5-8)
  {
    id: 5,
    icon: <IconContainer icon={<MapPin className='h-4 w-4' />} />,
    title: 'New Job Nearby 📍',
    message: 'A new Yard Work job was posted near you',
    className: 'translate-x-[305px] -translate-y-[150px] '
  },
  {
    id: 6,
    icon: (
      <IconContainer
        icon={
          <Image
            src={'/john-notion.png'}
            width={50}
            height={50}
            alt='person face'
            className='rounded-full border border-border'
          />
        }
      />
    ),
    title: 'Request Accepted',
    message: 'John accepted your request to do Yard Work ✅',
    className: 'translate-x-[310px] -translate-y-[70px] opacity-40'
  },
  {
    id: 7,
    icon: <IconContainer icon={<Calendar className='h-4 w-4' />} />,
    title: 'Job Starts Today',
    message: 'Reminder: Your Yard Work job starts today ⏰',
    className: 'translate-x-[320px] translate-y-[10px] opacity-40'
  },
  {
    id: 8,
    icon: <IconContainer icon={<CheckCircle2 className='h-4 w-4' />} />,
    title: 'Payout!',
    message: 'Funds were released to your account 💰',
    className: 'translate-x-[300px] translate-y-[90px] opacity-40'
  }
]

function IconContainer({
  icon,
  className = ''
}: {
  icon: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={`flex h-[35px] w-[35px] items-center justify-center rounded-full border border-border ${className}`}
    >
      {icon}
    </div>
  )
}

function NotificationCard({ notification }: { notification: Notification }) {
  // Generate random delay once on mount (0-0.3s)
  const delay = useRef(Math.random() * 0.3).current

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: delay,
        scale: { type: 'tween', damping: 24, stiffness: 200 },
        opacity: { duration: 0.3, delay: delay }
      }}
      className='w-[360px] rounded-2xl bg-white px-2 py-3 shadow-md'
    >
      <div className='flex items-center gap-3'>
        {notification.icon}
        <div className='flex flex-1 flex-col justify-center gap-1'>
          <h3 className='text-xs font-bold'>{notification.title}</h3>
          <p className='text-xs opacity-75'>{notification.message}</p>
        </div>
      </div>
    </motion.div>
  )
}

function BehindPhone() {
  return (
    <div className='pointer-events-none absolute inset-0'>
      <div className='relative flex h-full w-full items-center justify-center'>
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`absolute transform-gpu ${notification.className}`}
          >
            <NotificationCard notification={notification} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default BehindPhone
