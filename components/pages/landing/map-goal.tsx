'use client'
import { USMap } from '@/components/us-map'
import { motion } from 'motion/react'

export function MapGoal() {
  return (
    <div className='w-full bg-white py-40 dark:bg-black'>
      <div className='mx-auto max-w-7xl text-center'>
        <p className='text-xl font-bold text-black dark:text-white md:text-4xl'>
          The{' '}
          <span className='text-neutral-400'>
            {'Goal'.split('').map((word, idx) => (
              <motion.span
                key={idx}
                className='inline-block'
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
              >
                {word}
              </motion.span>
            ))}
          </span>
        </p>
        <p className='mx-auto max-w-2xl py-4 text-sm text-neutral-500 md:text-lg'>
          Start in Crete, NE. Then a straight line across Nebraska, then a
          straight line across the country.
        </p>
      </div>
      <USMap
      // dots={[
      //   {
      //     start: {
      //       lat: 40.6257,
      //       lng: -96.9605
      //     }, // Crete, NE
      //     end: {
      //       lat: 40.6257,
      //       lng: -104.0
      //     } // Straight west across Nebraska to Colorado border
      //   },
      //   {
      //     start: {
      //       lat: 40.6257,
      //       lng: -104.0
      //     }, // From Nebraska-Colorado border
      //     end: {
      //       lat: 37.7749,
      //       lng: -122.4194
      //     } // To San Francisco (representing "across the country")
      //   },
      //   {
      //     start: { lat: 42.9957, lng: -96.4564 }, // Northeast corner
      //     end: { lat: 42.9984, lng: -97.9289 }
      //   },
      //   {
      //     start: { lat: 42.9984, lng: -97.9289 },
      //     end: { lat: 43.0017, lng: -99.2547 }
      //   },
      //   {
      //     start: { lat: 43.0017, lng: -99.2547 },
      //     end: { lat: 42.9946, lng: -101.2314 }
      //   },
      //   {
      //     start: { lat: 42.9946, lng: -101.2314 },
      //     end: { lat: 43.0026, lng: -104.0535 } // Northwest corner
      //   },
      //   {
      //     start: { lat: 43.0026, lng: -104.0535 },
      //     end: { lat: 41.0024, lng: -104.0535 } // Southwest corner
      //   },
      //   {
      //     start: { lat: 41.0024, lng: -104.0535 },
      //     end: { lat: 40.0034, lng: -102.0506 }
      //   },
      //   {
      //     start: { lat: 40.0034, lng: -102.0506 },
      //     end: { lat: 40.0024, lng: -99.9018 }
      //   },
      //   {
      //     start: { lat: 40.0024, lng: -99.9018 },
      //     end: { lat: 40.0004, lng: -96.4564 } // Southeast corner
      //   },
      //   {
      //     start: { lat: 40.0004, lng: -96.4564 },
      //     end: { lat: 42.9957, lng: -96.4564 } // Back to northeast corner
      //   }
      // ]}
      />
    </div>
  )
}
