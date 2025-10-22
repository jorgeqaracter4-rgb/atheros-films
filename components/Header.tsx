'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Contato', href: '#contato' },
    { name: 'Galeria', href: '#galeria' },
    { name: 'Perguntas Frequentes', href: '#faq' },
  ]

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/20 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between py-6">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="block">
              <img
                src="/logo.webp"
                alt="Atheros Films"
                className="h-[76.625px] w-auto"
                loading="eager"
              />
            </a>
          </div>

          {/* Desktop Navigation - Centralized */}
          <div className="hidden md:block flex-1">
            <div className="flex items-center justify-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`font-medium text-[16px] transition-colors duration-200 relative ${
                    isScrolled ? 'text-white/80 hover:text-white' : 'text-white/90 hover:text-white'
                  } ${
                    item.name === 'Home' ? 'text-brand-500 border-b-2 border-brand-500 pb-1' : ''
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex-shrink-0">
            <a
              href="#contato"
              className="inline-flex items-center rounded-full bg-brand-600 hover:bg-brand-700 text-white px-6 py-3 font-semibold text-sm shadow-lg shadow-brand-600/30 transition-colors"
            >
              Entre em contato
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-md transition-colors duration-200 ${
                isScrolled 
                  ? 'text-gray-800 hover:bg-gray-100' 
                  : 'text-white hover:bg-white/10'
              }`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md rounded-lg mx-4 mb-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
