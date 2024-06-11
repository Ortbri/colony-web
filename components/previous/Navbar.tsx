import Image from 'next/image'
import Link from 'next/link'
// import { NAV_LINKS } from '@/constants'
// import Button from './Button'
// NAVIGATION
export const NAV_LINKS = [
  // { href: '/', key: 'home', label: 'Home' }
  // { href: '/', key: 'how_hilink_work', label: 'How Hilink Work?' },
  // { href: '/', key: 'services', label: 'Services' },
  // { href: '/', key: 'pricing ', label: 'Pricing ' },
  // { href: '/', key: 'contact_us', label: 'Contact Us' }
]

function Navbar() {
  return (
    <nav className='flexBetween max-container padding-container relative z-30 py-5'>
      <Link href='/'>
        <Image
          src={'/colonlyLogoText.svg'}
          width={100}
          height={100}
          alt='Colonly Logo'
        />
      </Link>
      {/* nav links */}
      {/* <ul className='hidden h-full gap-12 lg:flex'>
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className='regular-16 text-grey-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold'
          >
            {link.label}
          </Link>
        ))}
      </ul> */}
      {/* <div className='lg:flexCenter hidden'>
        <Button
          type='button'
          title='Login'
          icon='/user.svg'
          variant='btn_dark_green'
        />
      </div> */}
      {/* <Image
        src={'menu.svg'}
        alt='menu'
        width={32} 
        className='inline-block cursor-pointer lg:hidden'
      /> */}
    </nav>
  )
}

export default Navbar
