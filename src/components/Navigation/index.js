'use client'

import { useState, useEffect } from 'react'
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@heroicons/react/24/outline'
import { Logo, Link } from '@/components'
import clsx from 'clsx'
import { config } from '@/data'

import './styles.css'

function NavItem({ item }) {
  return (
    <>
      <a
        href={item.href}
        className="nav-link"
        aria-haspopup={item.items ? 'true' : undefined}
        aria-expanded={item.items ? 'false' : undefined}
      >
        {item.label}
        {item.items && <ChevronDownIcon className="nav-icon ml-2 h-4 w-4" />}
      </a>
      {item.items && <SubMenu subItems={item.items} />}
    </>
  )
}

function SubMenu({ subItems }) {
  return (
    <div className="nav-dropdown shadow-lg">
      {subItems.map((subItem, subIndex) => (
        <a key={subIndex} href={subItem.href} className="nav-dropdown-link">
          {subItem.label}
        </a>
      ))}
    </div>
  )
}

function MobileNav({
  navItems = config?.navigation,
  isOpen,
  isSubMenuOpen,
  toggleSubMenu,
}) {
  return (
    <div
      id="mobile-menu"
      className={clsx(
        'nav-mobile-container',
        isOpen ? 'max-height-screen' : 'max-height-0'
      )}
    >
      <div className="nav-mobile-inner">
        {navItems.map((item, index) => (
          <div key={index}>
            {!item.items ? (
              <a href={item.href} className="nav-mobile-link">
                {item.label}
              </a>
            ) : (
              <>
                <button
                  onClick={() => toggleSubMenu(index)}
                  aria-controls={`nav-dropdown-${index}`}
                  aria-expanded={isSubMenuOpen[index] || false}
                  className="nav-mobile-button"
                >
                  {item.label}
                  {isSubMenuOpen[index] ? (
                    <ChevronUpIcon className="nav-icon ml-2 h-4 w-4" />
                  ) : (
                    <ChevronDownIcon className="nav-icon ml-2 h-4 w-4" />
                  )}
                </button>
                <div
                  id={`nav-dropdown-${index}`}
                  className={clsx(
                    'nav-mobile-dropdown-container',
                    isSubMenuOpen[index] ? 'max-height-screen' : 'max-height-0'
                  )}
                >
                  {item.items.map((subItem, subIndex) => (
                    <a
                      key={subIndex}
                      href={subItem.href}
                      className="nav-mobile-dropdown-link"
                    >
                      {subItem.label}
                    </a>
                  ))}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export function Navigation({ navItems = config?.navigation }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isSubMenuOpen, setIsSubMenuOpen] = useState({})

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState)
  }

  const toggleSubMenu = (index) => {
    setIsSubMenuOpen((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }))
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false)
        setIsSubMenuOpen({})
      }
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <nav className="nav">
      <div className="nav-container">
        <div>
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <div className="nav-desktop">
          {navItems.map((item, index) => (
            <div key={index} className="nav-item">
              <NavItem item={item} />
            </div>
          ))}
        </div>
        <div className="nav-mobile">
          <button
            onClick={toggleMenu}
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
            className="nav-mobile-toggle"
          >
            {isOpen ? (
              <XMarkIcon className="nav-icon h-6 w-6" />
            ) : (
              <Bars3Icon className="nav-icon h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      <MobileNav
        isOpen={isOpen}
        isSubMenuOpen={isSubMenuOpen}
        toggleSubMenu={toggleSubMenu}
      />
    </nav>
  )
}
