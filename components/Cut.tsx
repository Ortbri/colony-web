import { FlipWords } from './framer/FlipWords'
import { Button } from './ui/button'

const words = [
  '2 hours a day',
  '14 hours a week',
  '56 hours a month',
  '28 days a year'
]

function Cut() {
  return (
    <div className='flex h-[40rem] flex-col items-center justify-center px-4'>
      <div className='mx-auto flex flex-col text-8xl font-semibold text-neutral-600 dark:text-neutral-400'>
        We spend
        <div>
          <FlipWords words={words} />
        </div>
        on household tasks
      </div>
      <div className='flex'>
        <Button>Button</Button>
      </div>
    </div>
  )
}

export default Cut
