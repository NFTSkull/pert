'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#quienes-somos', label: '¿Quiénes somos?' },
    { href: '#proyectos', label: 'Proyectos' },
    { href: '#crecimiento', label: 'Crecimiento' },
    { href: '#contacto', label: 'Contacto' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-md'
          : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="#inicio" className="flex flex-col">
            <span className="text-2xl font-bold text-primary-dark">PERT</span>
            <span className="text-xs text-gray-600 -mt-1">
              Servicios Constructivos
            </span>
          </Link>

          {/* Menú de navegación - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-accent transition-colors duration-200 font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contacto"
              className="bg-accent text-white px-6 py-2 rounded-lg font-semibold hover:bg-accent-dark transition-colors duration-200"
            >
              Contactar
            </Link>
          </div>

          {/* Botón menú móvil */}
          <button
            className="md:hidden text-primary-dark"
            aria-label="Menú"
            onClick={() => {
              // Implementar menú móvil si es necesario
              const menu = document.getElementById('mobile-menu')
              if (menu) {
                menu.classList.toggle('hidden')
              }
            }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Menú móvil */}
        <div id="mobile-menu" className="hidden md:hidden pb-4">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-accent transition-colors duration-200 font-medium py-2"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contacto"
              className="bg-accent text-white px-6 py-2 rounded-lg font-semibold hover:bg-accent-dark transition-colors duration-200 text-center"
            >
              Contactar
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

