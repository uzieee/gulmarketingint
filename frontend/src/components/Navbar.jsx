import React, { useState, useEffect } from 'react'
import { Menu, X, ShoppingCart, User, Search } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-3 shadow-md' : 'bg-white/80 backdrop-blur-sm py-4 border-b border-gray-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer">
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
          </div>

          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <a href="#" className="text-primary-700 font-semibold border-b-2 border-primary-600 pb-1">
              Home
            </a>
            <a href="#microbiology" className="text-gray-600 hover:text-primary-600 font-medium transition-colors">
              Clinical Microbiology
            </a>
            <a href="#hematology" className="text-gray-600 hover:text-primary-600 font-medium transition-colors">
              Hematology
            </a>
            <a href="#chemistry" className="text-gray-600 hover:text-primary-600 font-medium transition-colors">
              Chemistry
            </a>
            <a href="#profile" className="text-gray-600 hover:text-primary-600 font-medium transition-colors">
              Company Profile
            </a>
          </div>

          <div className="hidden lg:flex items-center space-x-3">
            <button
              type="button"
              className="text-gray-600 hover:text-primary-600 transition-colors p-2 hover:bg-gray-100 rounded-full"
            >
              <Search size={20} />
            </button>
            <button
              type="button"
              className="text-gray-600 hover:text-primary-600 transition-colors p-2 hover:bg-gray-100 rounded-full"
            >
              <User size={20} />
            </button>
            <button
              type="button"
              className="text-gray-600 hover:text-primary-600 transition-colors p-2 hover:bg-gray-100 rounded-full relative"
            >
              <ShoppingCart size={20} />
              <span className="absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-primary-600 rounded-full border border-white translate-x-1/2 -translate-y-1/2">
                0
              </span>
            </button>
            <button
              type="button"
              className="ml-2 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-6 py-2 rounded-full font-medium transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Login
            </button>
          </div>

          <div className="lg:hidden flex items-center">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-primary-600 focus:outline-none p-2 rounded-md hover:bg-gray-100 transition-colors"
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
              <a href="#" className="block px-4 py-3 rounded-xl bg-primary-50 text-primary-700 font-medium transition-colors">
                Home
              </a>
              <a
                href="#microbiology"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 rounded-xl text-gray-700 font-medium hover:bg-gray-50 transition-colors"
              >
                Clinical Microbiology
              </a>
              <a
                href="#hematology"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 rounded-xl text-gray-700 font-medium hover:bg-gray-50 transition-colors"
              >
                Hematology
              </a>
              <a
                href="#chemistry"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 rounded-xl text-gray-700 font-medium hover:bg-gray-50 transition-colors"
              >
                Chemistry
              </a>
              <a
                href="#profile"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 rounded-xl text-gray-700 font-medium hover:bg-gray-50 transition-colors"
              >
                Company Profile
              </a>

              <div className="mt-6 pt-6 border-t border-gray-100 grid grid-cols-2 gap-4">
                <button
                  type="button"
                  className="flex items-center justify-center gap-2 text-gray-700 hover:text-primary-600 bg-gray-50 py-3 rounded-xl font-medium"
                >
                  <Search size={18} /> Search
                </button>
                <button
                  type="button"
                  className="flex items-center justify-center gap-2 text-gray-700 hover:text-primary-600 bg-gray-50 py-3 rounded-xl font-medium"
                >
                  <ShoppingCart size={18} /> Cart (0)
                </button>
                <button
                  type="button"
                  className="col-span-2 bg-gradient-to-r from-primary-600 to-primary-700 text-white w-full py-3 rounded-xl font-medium shadow-md"
                >
                  Login
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
