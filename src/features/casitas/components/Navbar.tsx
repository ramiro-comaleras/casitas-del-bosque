'use client'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useScrolled } from '../hooks/useScrolled'

const NAV_LINKS = [
  { label: 'Apartamentos', href: '#apartments' },
  { label: 'Reservar',     href: '#booking' },
  { label: 'Ubicación',    href: '#location' },
  { label: 'Reseñas',      href: '#reviews' },
]

export function Navbar() {
  const scrolled = useScrolled(60)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[rgba(4,57,39,0.95)] backdrop-blur-xl border-b border-white/10 shadow-2xl'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#C5A55A] to-[#DFC080] flex items-center justify-center shadow-lg">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#043927" strokeWidth="2.5">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
            </div>
            <span className="font-display text-lg font-semibold text-white tracking-wide">
              Casitas <span className="casitas-text-gold">del Bosque</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/70 hover:text-white text-sm font-medium tracking-wide transition-colors duration-200 hover:text-[#DFC080]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a
              href="#booking"
              className="casitas-btn-gold px-5 py-2.5 rounded-full text-xs inline-block"
            >
              Reservar Ahora
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Menú"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-[rgba(4,57,39,0.98)] backdrop-blur-xl border-b border-white/10"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-white/80 hover:text-[#DFC080] text-base font-medium py-2 border-b border-white/5 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#booking"
                onClick={() => setMenuOpen(false)}
                className="casitas-btn-gold px-5 py-3 rounded-full text-center mt-2 text-xs"
              >
                Reservar Ahora
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
