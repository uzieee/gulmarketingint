import React from 'react'
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const Footer = () => (
  <footer className="bg-gray-900 text-gray-300 pt-20 pb-10 border-t-4 border-primary-600 font-sans" id="profile">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
      >
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <img
              src="/images/gmi/logo.png"
              alt="GMI Logo"
              className="h-12 w-auto object-contain bg-white/10 p-1 rounded-lg"
              onError={(e) => {
                e.target.onerror = null
                e.target.style.display = 'none'
                e.target.nextElementSibling.style.display = 'block'
              }}
            />
            <span className="hidden font-bold text-2xl tracking-tight text-white">Gulf Marketing Int.</span>
          </div>
          <p className="text-gray-400 leading-relaxed text-sm">
            Delivering high-quality clinical diagnostic equipment and premium laboratory instruments with trusted reliability across the region.
          </p>
          <div className="flex items-center gap-4 pt-2">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors duration-300 shadow-md"
            >
              <Facebook size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors duration-300 shadow-md"
            >
              <Twitter size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors duration-300 shadow-md"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-white font-bold text-lg mb-6 tracking-wide uppercase text-sm border-b border-gray-800 pb-3">Categories</h3>
          <ul className="space-y-4">
            <li>
              <a
                href="#microbiology"
                className="hover:text-primary-400 hover:translate-x-1 inline-flex items-center transition-all duration-300"
              >
                <ArrowRight size={14} className="mr-2 text-primary-500" /> Clinical Microbiology
              </a>
            </li>
            <li>
              <a href="#hematology" className="hover:text-primary-400 hover:translate-x-1 inline-flex items-center transition-all duration-300">
                <ArrowRight size={14} className="mr-2 text-primary-500" /> Hematology
              </a>
            </li>
            <li>
              <a href="#chemistry" className="hover:text-primary-400 hover:translate-x-1 inline-flex items-center transition-all duration-300">
                <ArrowRight size={14} className="mr-2 text-primary-500" /> Chemistry
              </a>
            </li>
            <li>
              <a href="#team" className="hover:text-primary-400 hover:translate-x-1 inline-flex items-center transition-all duration-300">
                <ArrowRight size={14} className="mr-2 text-primary-500" /> Our Team
              </a>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h3 className="text-white font-bold text-lg mb-6 tracking-wide uppercase text-sm border-b border-gray-800 pb-3">Contact Us</h3>
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-800/50 hover:bg-gray-800 transition-colors border border-gray-800">
              <div className="p-3 bg-primary-900/50 rounded-lg text-primary-400">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">Office Address</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Office # 11 B2 Satellite Town, Abdulah Jan Masjid Road, <br />
                  Near Kali Tanki Saidpur Road, Rawalpindi, Pakistan
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-800/50 hover:bg-gray-800 transition-colors border border-gray-800">
                <div className="p-3 bg-primary-900/50 rounded-lg text-primary-400">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1 text-sm">Phone</h4>
                  <p className="text-gray-400 text-sm">
                    +92-51-4426080
                    <br />
                    +92-51-4426587
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-800/50 hover:bg-gray-800 transition-colors border border-gray-800 overflow-hidden">
                <div className="p-3 bg-primary-900/50 rounded-lg text-primary-400">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1 text-sm">Email</h4>
                  <p className="text-gray-400 text-sm truncate">
                    <a href="mailto:Gmi786@yahoo.com" className="hover:text-primary-400">
                      Gmi786@yahoo.com
                    </a>
                    <br />
                    <a href="mailto:Gmi786@gmail.com" className="hover:text-primary-400">
                      Gmi786@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-500 text-sm tracking-wide">
          © {new Date().getFullYear()} Gulf Marketing International. All rights reserved. | Design by GMI.
        </p>
        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:text-white transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
