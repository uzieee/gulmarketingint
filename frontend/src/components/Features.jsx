import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'

const Features = () => {
  const categories = [
    {
      title: 'Clinical Microbiology',
      description: 'State-of-the-art microbiology testing solutions and systems.',
      image: '/images/gmi/microbiology_equip.png',
      link: '#microbiology',
      color: 'from-blue-500 to-indigo-600',
    },
    {
      title: 'Hematology',
      description: 'Precision hematology analyzers for reliable complete blood counts.',
      image: '/images/gmi/hematology_analyzer.png',
      link: '#hematology',
      color: 'from-rose-500 to-red-600',
    },
    {
      title: 'Chemistry',
      description: 'Automated clinical chemistry analyzers designed for high throughput.',
      image: '/images/gmi/chemistry_analyzer.png',
      link: '#chemistry',
      color: 'from-teal-500 to-emerald-600',
    },
  ]

  const popularItems = [
    { name: 'Chemistry Analyzer Model X', price: '$28.00', oldPrice: '$35.99', img: '/images/gmi/chemistry_analyzer.png' },
    { name: 'Hematology System Y', price: '$24.99', oldPrice: '$29.99', img: '/images/gmi/hematology_analyzer.png' },
    { name: 'Microbiology Incubator Z', price: '$20.99', oldPrice: '$26.99', img: '/images/gmi/microbiology_equip.png' },
    { name: 'Clinical Consumables Pack', price: '$19.99', oldPrice: '$24.99', img: '/images/gmi/lab_background.png' },
  ]

  return (
    <section className="py-24 bg-white" id="categories">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.45 }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
        >
          <div className="max-w-2xl">
            <span className="text-primary-600 font-bold tracking-wider uppercase text-sm mb-3 block">Discover Our Range</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
              Leading Medical{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-800">Categories</span>
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              Browse our exclusive, high-performance diagnostic machinery and instruments tailored for modern clinics.
            </p>
          </div>
          <button
            type="button"
            className="flex-shrink-0 flex items-center gap-2 text-primary-600 hover:text-primary-800 font-semibold group transition-all"
          >
            View All Categories
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {categories.map((cat, idx) => {
            const anchorId = cat.link.replace('#', '')
            return (
              <motion.a
                key={cat.title}
                href={cat.link}
                id={anchorId}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: idx * 0.08, duration: 0.45 }}
                className="group relative rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gray-100 min-h-[400px] scroll-mt-28"
              >
                <div className="absolute inset-0 w-full h-full">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t opacity-80 group-hover:opacity-90 transition-opacity duration-300 via-gray-900/60 to-transparent ${cat.color} mix-blend-multiply`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-90" />
                </div>

                <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                  <h3 className="text-3xl font-bold text-white mb-3 group-hover:translate-x-2 transition-transform duration-300">
                    {cat.title}
                  </h3>
                  <p className="text-gray-200 text-lg opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100 line-clamp-2">
                    {cat.description}
                  </p>
                  <div className="mt-6 flex items-center text-white font-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-200">
                    Explore Now <ArrowUpRight className="ml-2 w-5 h-5" />
                  </div>
                </div>
              </motion.a>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <span className="text-primary-600 font-bold tracking-wider uppercase text-sm mb-3 block">Top Picks</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight">Popular Items</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {popularItems.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ delay: idx * 0.06, duration: 0.4 }}
              className="group flex flex-col items-center p-6 bg-white border border-gray-100 rounded-2xl hover:shadow-xl hover:border-primary-100 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative w-full aspect-square bg-gray-50 rounded-xl overflow-hidden mb-6 flex items-center justify-center p-4">
                <img
                  src={item.img}
                  alt={item.name}
                  className="max-h-full max-w-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = '/images/gmi/p2.png'
                  }}
                />

                <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                  Sale
                </div>

                <div className="absolute inset-0 bg-white/40 opacity-0 group-hover:opacity-100 backdrop-blur-[2px] transition-opacity duration-300 flex items-center justify-center">
                  <button
                    type="button"
                    className="bg-primary-600 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:bg-primary-700 hover:scale-105 transition-all"
                  >
                    Quick View
                  </button>
                </div>
              </div>

              <h4 className="text-lg font-bold text-gray-900 text-center mb-2">{item.name}</h4>
              <div className="flex items-center gap-3">
                <span className="text-xl font-extrabold text-primary-600">{item.price}</span>
                <span className="text-sm font-medium text-gray-400 line-through">{item.oldPrice}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
