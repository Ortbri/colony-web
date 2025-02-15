import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='flex flex-col items-center gap-8 border-t-2 px-5 py-14'>
      {/* image here */}
      <div className='flex items-center'>
        <Link href={'/'}>
          {/*  theme based logo just change them manually */}
          <Image
            src={'/ColonyLogoWhite.png'}
            width={100}
            height={100}
            alt='Colony Logo'
          />
        </Link>
      </div>
      <div className='flex flex-col gap-6'>
        {/* <div>
          <Image
            src='/GooglePlayBadge.png'
            alt='Get it on Google Playstore'
            width={120}
            height={90}
          />
        </div> */}
        {/* <div>
          <Image
            src='/AppStoreBadge.svg'
            alt='Get it on App Store'
            width={120}
            height={90}
          />
        </div> */}
      </div>

      <div className='flex w-full max-w-7xl flex-col items-center justify-center gap-10 md:flex-row'>
        {/* links */}
        <ul className='flex flex-col items-center gap-10 pb-8 text-white md:flex-row md:pb-0'>
          {/* <li>
            <Link href='/info/about' className='hover:text-gray-300'>
              About
            </Link>
          </li>
          <li>
            <Link href='/info/support' className='hover:text-gray-300'>
              Contact Us
            </Link>
          </li>
          <li>
            <Link href='/login' className='hover:text-gray-300'>
              Admin
            </Link>
          </li> */}
          <li>
            <Link href='/info/tos' className='hover:text-gray-300'>
              Terms of Service
            </Link>
          </li>
          <li>
            <Link href='/info/privacy' className='hover:text-gray-300'>
              Privacy Policy
            </Link>
          </li>
        </ul>
      </div>
      {/* socials */}
      <div>
        <ul className='flex items-center gap-5 text-white md:flex-row'>
          {/* <li>
            <Link href='/' className='hover:text-gray-300'>
              <FaFacebookF size={20} />
            </Link>
          </li>
          <li>
            <Link href='/' className='hover:text-gray-300'>
              <FaInstagram size={20} />
            </Link>
          </li>
          <li>
            <Link href='/' className='hover:text-gray-300'>
              <FaTiktok size={20} />
            </Link>
          </li> */}
          <li>
            <Link href='/' className='hover:text-gray-300'>
              <FaGithub size={20} />
            </Link>
          </li>
        </ul>
      </div>
      {/* reserved */}
      <div>
        <p className='text-xs text-gray-500'>
          @ 2024 Colony LLC | All rights reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer
