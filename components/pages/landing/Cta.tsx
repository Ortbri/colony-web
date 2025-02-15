import React from 'react'
import Image from 'next/image'
import RadientColoredContainer from '@/components/framer/RadientColoredContainer'

const Cta = () => {
  return (
    <section className='py-6'>
      <RadientColoredContainer className='flex flex-col items-center gap-8 py-14'>
        <div className='flex flex-col items-center gap-6 text-center'>
          <h2 className='text-5xl font-bold lg:text-5xl xl:max-w-[320px]'>
            Coming Soon!
          </h2>
          <p className='mx-14 text-2xl font-medium'>
            Download Colony App on the App store or Google Play
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
      </RadientColoredContainer>
    </section>
  )
}

export default Cta
