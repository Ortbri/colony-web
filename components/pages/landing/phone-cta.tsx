import Image from 'next/image'
import React from 'react'
import BehindPhone from './behind-phone'

function PhoneCTA() {
  return (
    <div className='relative z-10 flex w-full justify-center'>
      {/* Phone Container */}
      <BehindPhone />

      <div className='relative flex h-[600px] w-[300px] items-center justify-center'>
        <div className='absolute overflow-hidden rounded-[20px]'>
          <Image
            // onLoad={}// animate
            src='/colony-home.png'
            alt='image screenshot'
            // sizes=''
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
// function PhoneCTA() {
//   return (
//     <div className='relative z-10 flex w-full justify-center'>
//       {/* Phone Container */}
//       <BehindPhone />

//       <div className='relative flex h-[600px] w-[300px] items-center justify-center'>
//         {/* Inside Content (Screenshot or Video) */}
//         <div className='absolute scale-[.83] overflow-hidden rounded-[20px] md:scale-[.8333] lg:scale-[.83]'>
//           <Image
//             // onLoad={}// animate
//             src='/ss.jpeg'
//             alt='image screenshot'
//             width={1179}
//             height={2556}
//             className='h-full w-full object-cover'
//           />
//         </div>
//         {/* Phone Frame */}
//         <Image
//           // onLoad={}
//           src='/phone.png'
//           alt='phone frame'
//           width={300}
//           height={600}
//           quality={20}
//           className='pointer-events-none absolute z-10'
//         />
//       </div>
//     </div>
//   )
// }

export default PhoneCTA
