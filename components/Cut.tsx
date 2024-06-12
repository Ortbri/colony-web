import Link from 'next/link'
import { FlipWords } from './framer/FlipWords'
import { InfiniteMovingCards } from './framer/InfinateMovingCards'
import { Button } from './ui/button'

/* ---------------------------------- words --------------------------------- */
const words = [
  '2 hours a day',
  '14 hours a week',
  '56 hours a month',
  '28 days a year'
]
/* ---------------------------------- jobs ---------------------------------- */
const Jobs = [
  {
    title: 'Dog Walking'
  },
  {
    title: 'Yard Work'
  },
  {
    title: 'housework'
  }
]
/* --------------------------------- return --------------------------------- */
function Cut() {
  return (
    <section className='flex flex-col items-center justify-center px-4 py-20'>
      {/* header */}
      <div className='mx-auto flex flex-col text-6xl font-semibold text-neutral-600 dark:text-neutral-400 sm:text-6xl lg:text-8xl'>
        We spend
        <div className='relative flex flex-1'>
          <FlipWords words={words} />
        </div>
        on household tasks
        <div className='flex py-10'>
          <Button size={'lg'} asChild>
            <Link href={'/about'}>Get Your Time back</Link>
          </Button>
        </div>
      </div>
      {/* cards */}
      {/* <InfiniteMovingCards items={Jobs} direction='right' speed='slow' /> */}
    </section>
  )
}

export default Cut

// <section className='flex flex-col items-center justify-center px-4 py-20'>
//   <div className='mx-auto flex flex-col text-6xl font-semibold text-neutral-600 dark:text-neutral-400 sm:text-6xl lg:text-8xl'>
//     <h1>Reclaim Your Weekends</h1>
//     <p>
//       Stop wasting your time on endless tasks. Let us handle the chores.
//     </p>
//     <div className='relative flex flex-1'>
//       <FlipWords
//         words={[
//           'housework',
//           'yard work',
//           'dog walking',
//           'small business help'
//         ]}
//       />
//     </div>
//     <div className='flex py-10'>
//       <Button size={'lg'}>Get Started</Button>
//     </div>
//   </div>
// </section>
