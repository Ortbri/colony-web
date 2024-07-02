import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaInstagram, FaGithub, FaFacebookF, FaTiktok } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='flex flex-col items-center gap-8 bg-black px-5 py-14'>
      {/* links */}
      <div className='flex w-full max-w-7xl flex-col items-center justify-center gap-10 md:flex-row'>
        <ul className='flex flex-col items-center gap-10 pb-8 text-white md:flex-row md:pb-0'>
          <li>
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
          </li>
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
          <li>
            <Link href='/' className='hover:text-gray-300'>
              <FaFacebookF size={18} />
            </Link>
          </li>
          <li>
            <Link href='/' className='hover:text-gray-300'>
              <FaInstagram size={18} />
            </Link>
          </li>
          <li>
            <Link href='/' className='hover:text-gray-300'>
              <FaTiktok size={18} />
            </Link>
          </li>
          <li>
            <Link href='/' className='hover:text-gray-300'>
              <FaGithub size={18} />
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
