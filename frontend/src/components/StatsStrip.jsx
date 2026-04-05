import React from 'react'
import { motion } from 'framer-motion'
import { stats } from '../data/content'

const StatsStrip = () => (
  <section className="relative border-y border-white/10 bg-void-900/80 py-10">
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-violet-500/5" />
    <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
      {stats.map((s, idx) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ delay: idx * 0.06, duration: 0.45 }}
          className="text-center md:text-left"
        >
          <p className="font-mono text-3xl font-bold tracking-tight text-white sm:text-4xl">{s.value}</p>
          <p className="mt-1 text-sm font-semibold text-cyan-200/90">{s.label}</p>
          <p className="mt-0.5 text-xs text-slate-500">{s.sub}</p>
        </motion.div>
      ))}
    </div>
  </section>
)

export default StatsStrip
