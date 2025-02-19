'use client'

import { Moon, Sun, Monitor } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from './ui/button'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const cycleTheme = () => {
    if (theme === 'light') setTheme('dark')
    else if (theme === 'dark') setTheme('system')
    else setTheme('light')
  }

  return (
    <Button
      variant='ghost'
      size='sm'
      onClick={cycleTheme}
      className='relative h-8 w-8 rounded-full dark:bg-white'
    >
      <Sun
        className={`h-[1.2rem] w-[1.2rem] transition-all duration-300 ${theme === 'light' ? 'rotate-0 scale-100' : 'rotate-90 scale-0'}`}
      />
      <Moon
        className={`absolute left-1/2 top-1/2 h-[1.2rem] w-[1.2rem] -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${theme === 'dark' ? 'rotate-0 scale-100' : 'rotate-90 scale-0'}`}
      />
      <Monitor
        className={`absolute left-1/2 top-1/2 h-[1.2rem] w-[1.2rem] -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${theme === 'system' ? 'rotate-0 scale-100' : 'rotate-90 scale-0'}`}
      />
      <span className='sr-only'>Toggle theme</span>
    </Button>
  )
}
