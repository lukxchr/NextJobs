import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useAuth } from '../auth/firebase-auth'

function Layout ({ children, testProp }) {
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false)
  const router = useRouter()
  const auth = useAuth()

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
                  <img className='h-8 w-8 cursor-pointer' src='https://tailwindui.com/img/logos/workflow-mark-on-dark.svg' alt='Workflow logo' />
                </Link>
              </div>
              {/* nav links for md+ screen sizes */}
              <div className='hidden md:block'>
                <div className='ml-10 flex items-baseline'>
                  {navLinks.map(link =>
                    <Link href={link.pathname} key={link.name}>
                      <p className={`mr-4 ${router.pathname === link.pathname ? 'nav-link-current' : 'nav-link'}`}>{link.name}</p>
                    </Link>)}
                </div>
              </div>
            </div>
            <div className='hidden md:block'>
              <div className='ml-4 flex items-center md:ml-6'>

                <div className='ml-3 relative' onClick={() => setDropdownIsOpen(!dropdownIsOpen)}>
                  <div>
                    <button className='max-w-xs flex items-center text-sm rounded-full text-white focus:outline-none focus:shadow-solid' id='user-menu' aria-label='User menu' aria-haspopup='true'>
                      {auth.user
                        ? <p className='nav-link'>Account</p>
                        : <p className='nav-link'>Sign in</p>}
                    </button>
                  </div>
                  {dropdownIsOpen &&
                    <div className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg'>
                      <div className='py-1 rounded-md bg-white shadow-xs' role='menu' aria-orientation='vertical' aria-labelledby='user-menu'>
                        <Link href='/signin'>
                          <a
                            className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                            role='menuitem'
                          >Sign in (for companies)
                          </a>
                        </Link>
                        <a
                          className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                          role='menuitem'
                          onClick={() => auth.signout()}
                        >Sign out
                        </a>
                      </div>
                    </div>}
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
            <div className='px-2 pt-2 pb-3 sm:px-3'>
              {navLinks.map(link =>
                <Link href={link.pathname} key={link.name}>
                  <p className={router.pathname === link.pathname ? 'nav-link-mobile-current' : 'nav-link-mobile'}>
                    {link.name}
                  </p>
                </Link>)}
            </div>
            <div className='pt-2 pb-2 border-t border-gray-700'>
              <div className='mt-0 px-2'>
                <Link href='/signin'>
                  <p className='nav-link-mobile'>
                  Sign in (for companies)
                  </p>
                </Link>
              </div>
            </div>
          </div>}
      </nav>
      <Head>
        <title>NextJobs</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='mt-24'>
        {children}
      </main>
    </div>
  )
}

export default Layout
