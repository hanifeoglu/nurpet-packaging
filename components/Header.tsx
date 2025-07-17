'use client'

import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import Logo from './Logo'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const menuItems = [
    {
      name: 'Products',
      dropdown: [
        'Food Packaging',
        'Beverage Packaging',
        'Pharmaceutical Packaging',
        'Personal Care',
        'Home Care'
      ]
    },
    {
      name: 'Design & RD',
      dropdown: [
        'R&D Department',
        'Technology Development',
        'Product Innovation',
        'Quality Standards'
      ]
    },
    {
      name: 'About Us',
      dropdown: [
        'Company Profile',
        'Quality and Product Safety Policy',
        'Human Resources',
        'Mission and Vision',
        'Environmental Policy',
        'Social Responsibility',
        'Contact Us'
      ]
    },
    {
      name: 'Media',
      dropdown: [
        'News',
        'E-Catalog',
        'Promotional Video',
        'Exhibitions'
      ]
    }
  ]

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <Logo className="text-nurpet-blue" width={180} height={50} />
            </a>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a href={`/${item.name.toLowerCase().replace(' & ', '-').replace(' ', '-')}`} className="flex items-center text-nurpet-dark-gray hover:text-nurpet-blue transition-colors duration-200">
                  {item.name}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </a>
                
                {activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-md py-2 z-50">
                    {item.dropdown.map((subItem) => (
                      <a
                        key={subItem}
                        href={`/${item.name.toLowerCase().replace(' & ', '-').replace(' ', '-')}/${subItem.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                        className="block px-4 py-2 text-sm text-nurpet-dark-gray hover:bg-nurpet-gray hover:text-nurpet-blue transition-colors duration-200"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="bg-nurpet-blue text-white px-6 py-2 rounded-md hover:bg-nurpet-light-blue transition-colors duration-200"
            >
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-nurpet-dark-gray hover:text-nurpet-blue"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {menuItems.map((item) => (
                <div key={item.name}>
                  <button className="block w-full text-left px-3 py-2 text-nurpet-dark-gray hover:text-nurpet-blue">
                    {item.name}
                  </button>
                  <div className="pl-4">
                    {item.dropdown.map((subItem) => (
                      <a
                        key={subItem}
                        href="#"
                        className="block px-3 py-1 text-sm text-nurpet-dark-gray hover:text-nurpet-blue"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
              <div className="pt-4">
                <a
                  href="#contact"
                  className="block bg-nurpet-blue text-white px-3 py-2 rounded-md text-center"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header 