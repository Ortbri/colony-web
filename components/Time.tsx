import React from 'react'

const stats = [
  {
    id: 1,
    name: 'Time spent on daily tasks every week',
    value: '14 hours'
  },
  {
    id: 2,
    name: 'Time spent on daily tasks every month',
    value: '56 hours'
  },
  {
    id: 3,
    name: 'days spend on tasks a year',
    value: '28 Days'
  }
]

function Time() {
  return (
    <>
      <div className='bg-white py-24 sm:py-32'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <dl className='grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3'>
            {stats.map((stat) => (
              <div
                key={stat.id}
                className='mx-auto flex max-w-xs flex-col gap-y-4'
              >
                <dt className='text-base leading-7 text-gray-600'>
                  {stat.name}
                </dt>
                <dd className='order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl'>
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </>
  )
}

export default Time
