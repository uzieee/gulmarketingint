import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronRight, ChevronLeft, ShieldCheck, Truck, CreditCard } from 'lucide-react'
import { motion } from 'framer-motion'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: 'Chemistry Analyzer',
      subtitle: 'Shop exclusive diagnostic items',
      description: 'Clinical Chemistry equipment with state-of-the-art accuracy.',
      discount: 'Get up to 20% OFF',
      tagline: 'on special sale',
      image: '/images/gmi/chemistry_analyzer.png',
      bgImg: '/images/gmi/lab_background.png',
      detailPath: '/chemistry',
    },
    {
      title: 'Hematology',
      subtitle: 'Shop premium clinical instruments',
      description: 'Advanced hematology analyzers for precise lab results.',
      discount: 'Get up to 20% OFF',
      tagline: 'on special sale',
      image: '/images/gmi/hematology_analyzer.png',
      bgImg: '/images/gmi/lab_background.png',
      detailPath: '/hematology',
    },
    {
      title: 'Clinical Microbiology',
      subtitle: 'Explore modern diagnostic tools',
      description: 'Reliable solutions for rigorous clinical diagnosis and research.',
      discount: 'Get up to 45% OFF',
      tagline: 'on special sale',
      image: '/images/gmi/microbiology_equip.png',
      bgImg: '/images/gmi/lab_background.png',
      detailPath: '/clinical-microbiology',
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  const badges = [
    { icon: ShieldCheck, title: '30 Days Replacement', body: 'Guaranteeing quality for every product' },
    { icon: Truck, title: 'Free Shipping', body: 'Fast and reliable worldwide delivery' },
    { icon: CreditCard, title: 'Secure Payments', body: '100% secure payment transactions' },
  ]

  return (
    <div className="relative pt-24 pb-12 lg:pt-32 lg:pb-24 bg-gradient-to-br from-primary-50 via-white to-primary-100 overflow-hidden">
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-primary-200/50 mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
      <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 rounded-full bg-primary-300/30 mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="relative bg-white rounded-3xl shadow-xl border border-gray-100/50 overflow-hidden flex items-center min-h-[500px] lg:min-h-[600px]"
        >
          {slides.map((slide, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out flex flex-col-reverse lg:flex-row items-center ${
                idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <div className="w-full lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center h-full bg-white/80 backdrop-blur-sm relative z-20">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 text-primary-700 font-semibold text-sm mb-6 w-max border border-primary-100 animate-fade-in shadow-sm">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-500" />
                  </span>
                  {slide.discount} {slide.tagline}
                </span>

                <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 tracking-tight mb-4 leading-tight">
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-800">
                    {slide.title}
                  </span>
                </h1>

                <h2 className="text-xl lg:text-2xl font-medium text-gray-700 mb-6">{slide.subtitle}</h2>

                <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">{slide.description}</p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to={slide.detailPath}
                    className="group flex items-center justify-center gap-2 bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  >
                    Explore this range
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/#categories"
                    className="flex items-center justify-center gap-2 bg-white text-gray-700 border-2 border-gray-200 px-8 py-4 rounded-xl font-bold hover:bg-gray-50 hover:border-gray-300 hover:shadow-md transition-all duration-300"
                  >
                    View catalog
                  </Link>
                </div>
              </div>

              <div className="w-full lg:w-1/2 h-64 lg:h-full relative overflow-hidden group">
                <div className="absolute inset-0 bg-primary-900/10 z-10 group-hover:bg-transparent transition-colors duration-500" />
                <img
                  src={slide.bgImg}
                  alt={slide.title}
                  className="absolute inset-0 w-full h-full object-cover object-center transform scale-105 group-hover:scale-100 transition-transform duration-700"
                />

                <div className="absolute inset-0 z-20 flex items-center justify-center p-8 backdrop-blur-sm bg-white/10 hidden lg:flex">
                  <img
                    src={slide.image}
                    alt={`${slide.title} Product`}
                    className="w-auto max-h-[80%] rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-500 hover:-rotate-1 border-4 border-white"
                    onError={(e) => {
                      e.target.style.display = 'none'
                    }}
                  />
                </div>
              </div>
            </div>
          ))}

          <div className="absolute bottom-6 left-1/2 lg:left-8 -translate-x-1/2 lg:translate-x-0 z-30 flex items-center gap-3 bg-white/70 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-gray-100">
            <button type="button" onClick={prevSlide} className="p-2 rounded-full hover:bg-white text-gray-600 hover:text-primary-600 transition-colors">
              <ChevronLeft size={24} />
            </button>
            <div className="flex gap-2">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === currentSlide ? 'bg-primary-600 w-6' : 'bg-gray-300 hover:bg-primary-400'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
            <button type="button" onClick={nextSlide} className="p-2 rounded-full hover:bg-white text-gray-600 hover:text-primary-600 transition-colors">
              <ChevronRight size={24} />
            </button>
          </div>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {badges.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-lg border border-white hover:border-primary-100 transition-colors shadow-primary-500/5 group hover:-translate-y-1 duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-primary-50 flex items-center justify-center text-primary-600 mb-4 group-hover:scale-110 transition-transform">
                <b.icon size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{b.title}</h3>
              <p className="text-gray-500 font-medium">{b.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Hero
