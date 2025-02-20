'use client'

import { useRef } from 'react'
import { motion } from 'motion/react'
import DottedMap from 'dotted-map'
import Image from 'next/image'
import { useTheme } from 'next-themes'

interface MapProps {
  dots?: Array<{
    lat: number
    lng: number
    label?: string
  }>
  dotColor?: string
}

export function USMap({ dots = [], dotColor = '#0ea5e9' }: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null)
  const map = new DottedMap({
    height: 100,
    grid: 'diagonal',
    region: {
      lat: { min: 24.396308, max: 49.384358 },
      lng: { min: -125.0, max: -66.93457 }
    }
  })

  const { theme } = useTheme()

  const svgMap = map.getSVG({
    radius: 0.22,
    color: theme === 'dark' ? '#FFFFFF40' : '#00000040',
    shape: 'circle',
    backgroundColor: theme === 'dark' ? 'black' : 'white'
  })

  const projectPoint = (lat: number, lng: number) => {
    const minLng = -125.0
    const maxLng = -66.93457
    const minLat = 24.396308
    const maxLat = 49.384358

    const x = ((lng - minLng) / (maxLng - minLng)) * 800
    const y = ((maxLat - lat) / (maxLat - minLat)) * 400
    return { x, y }
  }

  return (
    <div className='relative aspect-[2/1] w-full rounded-lg bg-white font-sans dark:bg-black'>
      <Image
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        className='pointer-events-none h-full w-full select-none [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)]'
        alt='US map'
        height='495'
        width='1056'
        draggable={false}
      />
      <svg
        ref={svgRef}
        viewBox='0 0 800 400'
        className='pointer-events-none absolute inset-0 h-full w-full select-none'
      >
        {dots.map((dot, i) => (
          <g key={`point-${i}`}>
            <circle
              cx={projectPoint(dot.lat, dot.lng).x}
              cy={projectPoint(dot.lat, dot.lng).y}
              r='3'
              fill={dotColor}
            />
            <circle
              cx={projectPoint(dot.lat, dot.lng).x}
              cy={projectPoint(dot.lat, dot.lng).y}
              r='3'
              fill={dotColor}
              opacity='0.5'
            >
              <animate
                attributeName='r'
                from='3'
                to='12'
                dur='2s'
                begin='0s'
                repeatCount='indefinite'
              />
              <animate
                attributeName='opacity'
                from='0.5'
                to='0'
                dur='2s'
                begin='0s'
                repeatCount='indefinite'
              />
            </circle>
          </g>
        ))}
      </svg>
    </div>
  )
}
