import { FlipWords } from './ui/FlipWords'

const words = ['14', '56', '28']

function Cut() {
  return (
    <div className='flex h-[40rem] items-center justify-center px-4'>
      <div className='mx-auto text-4xl font-normal text-neutral-600 dark:text-neutral-400'>
        Time spent on everday tasks
        <FlipWords words={words} /> <br />
      </div>
    </div>
  )
}

export default Cut
