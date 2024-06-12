import { InfiniteMovingCards } from './framer/InfinateMovingCards'

const Guide = () => {
  return (
    <section className='flex flex-col items-center justify-center px-4 py-20'>
      {/* header */}
      <div className='mx-auto flex flex-col text-6xl font-semibold text-neutral-600 dark:text-neutral-400 sm:text-6xl lg:text-8xl'>
        We spend
        {/* <div className='relative flex flex-1'>
          <FlipWords words={words} />
        </div> */}
        on household tasks
        {/* <div className='flex py-10'>
          <Button size={'lg'} asChild>
            <Link href={'/about'}>Get Your Time back</Link>
          </Button>
        </div> */}
      </div>
      {/* cards */}
      {/* <InfiniteMovingCards items={Jobs} direction='right' speed='slow' /> */}
    </section>
  )
}

export default Guide
