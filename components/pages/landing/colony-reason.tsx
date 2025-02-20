'use client'
import { USMap } from '@/components/us-map'

/* ------------------------------------ 1 ----------------------------------- */
export function ReasonOne() {
  const nebraskaTowns = [
    {
      lat: 40.6267,
      lng: -96.9584,
      label: 'Crete'
    },
    {
      lat: 40.9153,
      lng: -98.1167,
      label: 'Seward'
    }
  ]

  return <USMap dots={nebraskaTowns} dotColor='#0ea5e9' />
}
/* ------------------------------------ 2 ----------------------------------- */
export function ReasonTwo() {
  return (
    <div className=''>
      {/* avatar */}
      {/* <div className=''>
        <Image src />
      </div> */}
    </div>
  )
}
/* ------------------------------------ 3 ----------------------------------- */
export function ReasonTree() {
  return <div>Component C</div>
}
/* ------------------------------------ 4 ----------------------------------- */
export function ReasonFour() {
  return <div>Component D</div>
}
