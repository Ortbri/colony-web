import Image from 'next/image'
import React from 'react'
import BehindPhone from './behind-phone'

function PhoneCTA() {
  return (
    <div className='relative z-10 flex w-full justify-center'>
      {/* behind phone */}
      {/* <BehindPhone /> */}
      {/* phone */}
      <div className='animate-fade-up relative flex h-[600px] w-[300px] items-center justify-center opacity-0 [animation-delay:800ms] [animation-fill-mode:forwards]'>
        <div className='absolute overflow-hidden rounded-[20px]'>
          <Image
            src='/colony-home.png'
            alt='image screenshot'
            quality={20}
            width={1179}
            height={2556}
            className='h-full w-full object-cover'
          />
        </div>
      </div>
    </div>
  )
}

export default PhoneCTA
