import { MapGoal } from '@/components/pages/landing/map-goal'
import { redirect } from 'next/navigation'
import React from 'react'

function Test() {
  if (process.env.NODE_ENV === 'development') {
    redirect('/')
  }
  return <MapGoal />
}

export default Test
