import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

function Layout ({ children, testProp }) {
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false)
  const router = useRouter()

  const navLinks = [
    { name: 'Jobs', pathname: '/' },
    { name: 'Categories', pathname: '/categories' },
    { name: 'Companies', pathname: '/companies' },
    { name: 'Locations', pathname: '/locations' }
  ]

  return (
    <div id='layout-container' className='h-screen w-full overflow-y-scroll'>
      <nav className='fixed w-full bg-gray-800'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-16'>
            <div className='flex items-center'>
              <div className='flex-shrink-0'>
                <Link href='/'>
                  <img className='h-8 w-8 cursor-pointer' src='https://tailwindui.com/img/logos/workflow-mark-on-dark.svg' alt='website logo' />
                </Link>
              </div>

              {/* nav links for md+ screen sizes */}
              <div className='hidden md:block'>
                <div className='ml-10 flex items-baseline'>
                  {navLinks.map(link =>
                    <Link href={link.pathname} key={link.name}>
                      <a className={`mr-4 ${router.pathname === link.pathname ? 'nav-link-current' : 'nav-link'}`}>{link.name}</a>
                    </Link>)}
                </div>
              </div>
            </div>
            <div className='-mr-2 flex md:hidden'>
              <button
                className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white'
                onClick={() => setDropdownIsOpen(!dropdownIsOpen)}
              >
                <svg className='block h-6 w-6' stroke='currentColor' fill='none' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16' />
                </svg>
                <svg className='hidden h-6 w-6' stroke='currentColor' fill='none' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* nav links for sm screens */}
        {dropdownIsOpen &&
          <div className='md:hidden'>
            <div className='p-2 sm:px-3'>
              {navLinks.map(link =>
                <Link href={link.pathname} key={link.name}>
                  <a className={router.pathname === link.pathname ? 'nav-link-mobile-current' : 'nav-link-mobile'}>
                    {link.name}
                  </a>
                </Link>)}
            </div>
          </div>}
      </nav>

      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1, viewport-fit=cover' />
        <link rel='icon' href='/favicon.ico' />
        <title>NextJobs</title>
      </Head>

      <main className='mt-24 mx-8'>
        {children}
      </main>
    </div>
  )
}

export default Layout
