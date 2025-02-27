import { redirect } from 'next/navigation'
import React from 'react'

function Test() {
  if (process.env.NODE_ENV === 'development') {
    redirect('/')
  }
  return <div>Test</div>
}

export default Test
