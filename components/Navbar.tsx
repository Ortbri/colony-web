import Link from 'next/link'

function Navbar() {
  return (
    <nav className='flexBetween max-container padding-container relative z-30 border-8 border-red-500 py-5'>
      <Link href={'/'}>Logo here</Link>
    </nav>
  )
}

export default Navbar
