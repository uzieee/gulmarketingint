import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { brand, navLinks } from '../data/content'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`neo-glass flex items-center justify-between gap-4 rounded-2xl px-4 py-3 sm:px-6 ${
            scrolled ? 'shadow-[0_0_50px_-20px_rgba(34,211,238,0.25)]' : ''
          }`}
        >
          <a href="#signal" className="group flex items-center gap-3 min-w-0">
            <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-violet-500/20 ring-1 ring-white/10">
              <span className="font-mono text-xs font-semibold tracking-tighter text-cyan-200">GMI</span>
              <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee]" />
            </span>
            <span className="min-w-0">
              <span className="block truncate text-sm font-bold tracking-tight text-white sm:text-base">
                {brand.shortName}
              </span>
              <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500 sm:block">
                diagnostics · static
              </span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-3 py-2 text-sm font-medium text-slate-400 transition-colors hover:bg-white/5 hover:text-cyan-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a href="#contact" className="neo-btn-ghost text-sm">
              Brief us
            </a>
            <a href="#catalog" className="neo-btn text-sm">
              View catalog
            </a>
          </div>

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-200 lg:hidden"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="border-b border-white/10 bg-void-950/95 backdrop-blur-xl lg:hidden"
          >
            <div className="mx-auto max-w-7xl space-y-1 px-4 py-4 sm:px-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-slate-200 hover:bg-white/5"
                >
                  {link.label}
                </a>
              ))}
              <div className="grid grid-cols-2 gap-2 pt-2">
                <a href="#contact" onClick={() => setOpen(false)} className="neo-btn-ghost justify-center text-sm">
                  Brief us
                </a>
                <a href="#catalog" onClick={() => setOpen(false)} className="neo-btn justify-center text-sm">
                  Catalog
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
