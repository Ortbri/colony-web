'use client'

import React, { useState } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { FiCheck, FiClipboard } from 'react-icons/fi'

export default function Support() {
  /* ---------------------------------- state --------------------------------- */
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText('brian@joincolonyapp.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000) // Reset copied status after 2 seconds
  }
  /* --------------------------------- return --------------------------------- */
  return (
    <div className='flex items-center justify-center py-28'>
      <Card className='rounded-3xl border-2 bg-black px-8 py-14'>
        <CardHeader>
          <CardTitle>Contact us</CardTitle>
          <CardDescription>Issues? Send an email</CardDescription>
        </CardHeader>
        <CardContent>
          <div className='flex items-center'>
            {copied ? (
              <span className='ml-2 text-green-500'>
                <FiCheck />
              </span>
            ) : (
              <button onClick={handleCopy} className='mr-2'>
                <FiClipboard className='text-white' />
              </button>
            )}
            <span className='text-white'>brian@joincolonyapp.com</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
