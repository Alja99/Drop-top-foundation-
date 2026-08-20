
import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import Button from './Button'
import Logo from '../assets/image/Logo3.png'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Programs', to: '/program' },
  { label: 'Volunteer', to: '/volunteer' },
  { label: 'Contact', to: '/contact' },
]

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <>
      <nav className="sticky top-0 z-40 w-full bg-white border-b border-gray-100">
        <div className="container-base">
          <div className="flex h-24 items-center justify-between">
            <Link
  to="/"
  className="flex items-center gap-3 flex-shrink-0"
>
  <img
    src={Logo}
    alt="Billionaire Drop Tap Foundation"
    className="h-12 w-12 object-contain rounded-full"
  />

  <span className="text-lg font-semibold text-[#171717] leading-tight">
    Billionaire Drop Tap
    <span className="block text-[#C9A227]">
      Foundation
    </span>
  </span>
</Link>

            {/* Desktop Navigation */} 
            <ul className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) => 
                      `text-16px transition-colors duration-200 font-medium ${
                        isActive 
                          ? 'text-[#C9A227] font-semibold' 
                          : 'text-[#5F6368] hover:text-[#C9A227]'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Desktop Donate Button */}
            <div className="hidden lg:block">
              <Button to="/donate" variant="primary" size="md">
                Donate Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-24 z-30 lg:hidden bg-white border-t border-gray-100 overflow-y-auto animate-slideDown">
          <div className="container-base py-6">
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    onClick={closeMobileMenu}
                    className={({ isActive }) => 
                      `block text-18px font-medium py-2 transition-colors duration-200 ${
                        isActive 
                          ? 'text-[#C9A227]' 
                          : 'text-[#5F6368]'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Mobile Donate Button */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <Button 
                to="/donate" 
                variant="primary" 
                size="lg"
                className="w-full justify-center"
                onClick={closeMobileMenu}
              >
                Donate Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar