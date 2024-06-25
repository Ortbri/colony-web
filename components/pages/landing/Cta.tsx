import React from 'react'
import Image from 'next/image'

const Cta = () => {
  return (
    <section className='mx-auto mb-4 mt-4 flex w-full max-w-7xl flex-col rounded-3xl bg-white p-8'>
      <div className='z-20 flex w-full flex-col items-center gap-8'>
        <div className='flex flex-col items-center gap-6 text-center'>
          <h2 className='text-5xl font-bold text-black lg:text-5xl xl:max-w-[320px]'>
            Get started!
          </h2>
          <p className='text-gray-500'>
            Download Colony App on the App store or Google Play and get your
            time back!
          </p>
        </div>

        <div className='flex flex-col gap-6'>
          <div>
            <Image
              src='/GooglePlayBadge.png'
              alt='Get it on Google Playstore'
              width={180}
              height={90}
            />
          </div>
          <div>
            <Image
              src='/AppStoreBadge.svg'
              alt='Get it on App Store'
              width={180}
              height={90}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cta
