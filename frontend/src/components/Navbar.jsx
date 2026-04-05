import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navClass = (path) =>
    location.pathname === path
      ? 'text-primary-700 font-semibold border-b-2 border-primary-600 pb-1'
      : 'text-gray-600 hover:text-primary-600 font-medium transition-colors'

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-3 shadow-md' : 'bg-white/80 backdrop-blur-sm py-4 border-b border-gray-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}>
            <img
              src="/images/gmi/logo.png"
              alt="GMI Logo"
              className="h-10 w-auto object-contain transition-transform duration-300 hover:scale-105"
              onError={(e) => {
                e.target.onerror = null
                e.target.style.display = 'none'
                e.target.nextElementSibling.style.display = 'block'
              }}
            />
            <span className="hidden font-bold text-xl tracking-tight text-primary-700">Gulf Marketing Int.</span>
          </Link>

          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <Link to="/" className={navClass('/')}>
              Home
            </Link>
            <Link to="/clinical-microbiology" className={navClass('/clinical-microbiology')}>
              Clinical Microbiology
            </Link>
            <Link to="/hematology" className={navClass('/hematology')}>
              Hematology
            </Link>
            <Link to="/chemistry" className={navClass('/chemistry')}>
              Chemistry
            </Link>
            <Link to="/#profile" className="text-gray-600 hover:text-primary-600 font-medium transition-colors">
              Company Profile
            </Link>
          </div>

          <div className="lg:hidden flex items-center">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-primary-600 focus:outline-none p-2 rounded-md hover:bg-gray-100 transition-colors"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden absolute top-full left-0 w-full overflow-hidden bg-white shadow-xl border-t border-gray-100"
          >
            <motion.div
              initial={{ y: -12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -8, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="px-4 pt-4 pb-6 space-y-2"
            >
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 rounded-xl bg-primary-50 text-primary-700 font-medium transition-colors"
              >
                Home
              </Link>
              <Link
                to="/clinical-microbiology"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 rounded-xl text-gray-700 font-medium hover:bg-gray-50 transition-colors"
              >
                Clinical Microbiology
              </Link>
              <Link
                to="/hematology"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 rounded-xl text-gray-700 font-medium hover:bg-gray-50 transition-colors"
              >
                Hematology
              </Link>
              <Link
                to="/chemistry"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 rounded-xl text-gray-700 font-medium hover:bg-gray-50 transition-colors"
              >
                Chemistry
              </Link>
              <Link
                to="/#profile"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 rounded-xl text-gray-700 font-medium hover:bg-gray-50 transition-colors"
              >
                Company Profile
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
