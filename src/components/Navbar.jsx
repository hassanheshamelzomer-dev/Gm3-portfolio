import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon, Menu, X } from 'lucide-react'
import { cn } from '../lib/utils'

const NAV_LINKS = [
  { label: 'Home',     href: '#home' },
  { label: 'About',    href: '#about' },
  { label: 'Skills',   href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact' },
]

export default function Navbar() {
  const [isDark,         setIsDark]         = useState(false)
  const [isScrolled,     setIsScrolled]     = useState(false)
  const [mobileOpen,     setMobileOpen]     = useState(false)
  const [activeSection,  setActiveSection]  = useState('home')

  /* ── Theme initialisation ── */
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    if (prefersDark) {
      document.documentElement.classList.add('dark')
      setIsDark(true)
    }
  }, [])

  /* ── Scroll listener: elevation + ScrollSpy ── */
  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20)

      const sectionIds = NAV_LINKS.map(l => l.href.slice(1))
      let current = 'home'
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) current = id
      }
      setActiveSection(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleTheme = () => {
    const next = !isDark
    document.documentElement.classList.toggle('dark', next)
    setIsDark(next)
  }

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-m3-surface-container/95 backdrop-blur-md shadow-m3-elevation-2'
          : 'bg-m3-surface',
      )}
    >
      {/* ── Top bar ── */}
      <div className="section-container h-16 flex items-center justify-between">
        {/* Wordmark */}
        <a href="#home" className="m3-title-md text-m3-on-surface select-none tracking-tight">
          HZ<span className="text-m3-primary">.</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center h-16 gap-1">
          {NAV_LINKS.map(({ label, href }) => {
            const id = href.slice(1)
            const isActive = activeSection === id
            return (
              <a
                key={id}
                href={href}
                className={cn('m3-nav-item', isActive && 'active')}
              >
                {label}
                {isActive && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute bottom-0 inset-x-3 h-[3px] rounded-t-full bg-m3-primary"
                    transition={{ type: 'spring', stiffness: 380, damping: 36 }}
                  />
                )}
              </a>
            )
          })}

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="m3-icon-btn ml-2"
            aria-label="Toggle colour scheme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-1">
          <button onClick={toggleTheme} className="m3-icon-btn" aria-label="Toggle theme">
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={() => setMobileOpen(v => !v)}
            className="m3-icon-btn"
            aria-label="Open menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-m3-surface-container border-t border-m3-outline-variant"
          >
            <ul className="flex flex-col py-2">
              {NAV_LINKS.map(({ label, href }) => {
                const id    = href.slice(1)
                const isActive = activeSection === id
                return (
                  <li key={id}>
                    <a
                      href={href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        'flex items-center gap-3 px-6 py-3 m3-label-lg transition-colors',
                        isActive
                          ? 'bg-m3-secondary-container text-m3-on-secondary-container rounded-r-full mx-4 px-4'
                          : 'text-m3-on-surface-variant hover:text-m3-on-surface',
                      )}
                    >
                      {label}
                    </a>
                  </li>
                )
              })}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
