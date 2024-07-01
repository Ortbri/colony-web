import * as React from 'react'
import { IoMdMenu } from 'react-icons/io'
import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from '@/components/ui/drawer'
import Link from 'next/link'

interface DrawerProps {
  navItems: {
    name: string
    link: string
    icon?: JSX.Element
  }[]
}

export function DrawerDemo({ navItems }: DrawerProps) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button
          variant={'ghost'}
          className='flex items-center justify-center rounded-full p-2 text-white'
          icon={<IoMdMenu size={24} />}
        />
      </DrawerTrigger>
      <DrawerContent>
        <div className='mx-auto w-full max-w-sm'>
          <DrawerHeader className='justify-center'>
            <DrawerTitle className='text-3xl'>Links</DrawerTitle>
          </DrawerHeader>
          <ul className='flex flex-col items-center space-y-4 py-24'>
            {navItems.map((navItem, idx) => (
              <li key={`menu-link=${idx}`}>
                <Link
                  href={navItem.link}
                  className='flex items-center space-x-1 text-white hover:text-gray-300'
                >
                  {navItem.icon && (
                    <span className='block'>{navItem.icon}</span>
                  )}
                  <span className='cursor-pointer text-lg'>{navItem.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
