import React from 'react'
import { Link, useLocation, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, CheckCircle2, Mail, Phone } from 'lucide-react'
import { categoryPages, categorySlugs } from '../data/categoryPages'

const CategoryPage = () => {
  const { pathname } = useLocation()
  const slug = pathname.replace(/^\//, '').replace(/\/$/, '')
  const data = categoryPages[slug]

  if (!categorySlugs.includes(slug) || !data) {
    return <Navigate to="/" replace />
  }

  return (
    <div className="bg-white">
      <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 bg-gradient-to-br from-primary-50 via-white to-primary-100 overflow-hidden">
        <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-primary-200/50 mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary-700 hover:text-primary-800 mb-8 transition-colors"
          >
            <ArrowLeft size={18} />
            Back to home
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
              <p className="text-primary-600 font-bold tracking-wider uppercase text-sm mb-3">Dedicated overview</p>
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-800">{data.title}</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">{data.intro}</p>
              <ul className="mt-8 space-y-3">
                {data.highlights.map((line) => (
                  <li key={line} className="flex gap-3 text-gray-700">
                    <CheckCircle2 className="shrink-0 text-primary-600 mt-0.5" size={20} />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="mailto:Gmi786@gmail.com?subject=GMI%20inquiry%20-%20"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-3 rounded-xl font-bold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
                >
                  <Mail size={18} />
                  Email GMI
                </a>
                <a
                  href="tel:+92514426080"
                  className="inline-flex items-center justify-center gap-2 bg-white text-gray-800 border-2 border-gray-200 px-6 py-3 rounded-xl font-bold hover:bg-gray-50 transition-all"
                >
                  <Phone size={18} />
                  Call +92-51-4426080
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="relative rounded-3xl border border-gray-100 bg-white shadow-xl overflow-hidden"
            >
              <div className="aspect-[4/3] bg-gray-50 flex items-center justify-center p-8">
                <img src={data.heroImage} alt="" className="max-h-full w-auto object-contain" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-12 text-center md:text-left">Capabilities & positioning</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {data.capabilities.map((c) => (
              <div key={c.heading} className="rounded-2xl border border-gray-100 bg-gray-50/80 p-8 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{c.heading}</h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-50/60 border-y border-primary-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Where this fits</h2>
            <ul className="space-y-3">
              {data.applications.map((item) => (
                <li key={item} className="flex gap-2 text-gray-700">
                  <span className="text-primary-600 font-bold">·</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900 mb-6">What we typically deliver in proposals</h2>
            <ul className="space-y-3">
              {data.deliverables.map((item) => (
                <li key={item} className="flex gap-2 text-gray-700">
                  <span className="text-primary-600 font-bold">·</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-10 text-center">Common questions</h2>
          <div className="space-y-6">
            {data.faq.map((item) => (
              <div key={item.q} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <p className="font-bold text-gray-900 mb-2">{item.q}</p>
                <p className="text-gray-600 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-gray-500">
            Static site — no checkout. For quotes and timelines, contact Gulf Marketing International using the footer details.
          </p>
        </div>
      </section>
    </div>
  )
}

export default CategoryPage
