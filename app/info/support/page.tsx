'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FiCheck, FiClipboard } from 'react-icons/fi'

export default function Support() {
  /* ---------------------------- copy to clipboard --------------------------- */
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText('brian@joincolonyapp.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000) // Reset copied status after 2 seconds
  }
  /* --------------------------------- return --------------------------------- */
  return (
    <div className='flex items-center justify-center pt-28'>
      <Card className='border-amber-50 bg-black p-14'>
        <CardHeader>
          <CardTitle>Issues? Contact us</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='flex items-center'>
            <button onClick={handleCopy} className='mr-2'>
              <FiClipboard className='text-white' />
            </button>
            <span className='text-xl'>brian@joincolonyapp.com</span>
            {copied && (
              <span className='ml-2'>
                <FiCheck className='text-green-500' />
              </span>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
