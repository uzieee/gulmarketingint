import React from 'react'
import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { testimonials } from '../data/content'

const Testimonials = () => (
  <section id="proof" className="relative border-t border-white/10 py-24 sm:py-32">
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-violet-500/5 via-transparent to-cyan-500/5" />
    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-fuchsia-300">Signal · noise</p>
        <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-5xl">
          Voices from the <span className="neo-glow-text">mock dataset</span>
        </h2>
        <p className="mt-4 text-slate-400">
          Fictional titles for layout polish — replace with real quotes when you have them.
        </p>
      </div>

      <div className="mt-16 grid gap-6 lg:grid-cols-3">
        {testimonials.map((t, idx) => (
          <motion.figure
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08 }}
            className={`relative overflow-hidden rounded-3xl border border-white/10 bg-void-850/70 p-8 backdrop-blur-xl`}
          >
            <div className={`pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${t.glow} blur-2xl`} />
            <Quote className="relative h-9 w-9 text-cyan-400/80" />
            <blockquote className="relative mt-6 text-sm leading-relaxed text-slate-300 sm:text-base">
              “{t.quote}”
            </blockquote>
            <figcaption className="relative mt-8 border-t border-white/10 pt-6">
              <p className="font-semibold text-white">{t.name}</p>
              <p className="mt-1 font-mono text-xs text-slate-500">{t.role}</p>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </div>
  </section>
)

export default Testimonials
