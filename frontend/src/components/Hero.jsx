import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react'
import { brand, heroSlides, trustBadges } from '../data/content'

const Hero = () => {
  const [i, setI] = useState(0)
  const slide = heroSlides[i]

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % heroSlides.length), 6000)
    return () => clearInterval(t)
  }, [])

  return (
    <section id="signal" className="relative min-h-[100svh] overflow-hidden pt-28 pb-16 sm:pt-32">
      <div className="pointer-events-none absolute inset-0 bg-mesh" />
      <div
        className="pointer-events-none absolute inset-0 bg-grid bg-grid-size opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 scanlines opacity-60" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-12 px-4 sm:px-6 lg:px-8 lg:flex-row lg:items-center">
        <div className="flex-1 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-cyan-100"
          >
            <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
            {brand.tagline}
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45 }}
              className="space-y-6"
            >
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-violet-300/90">{slide.eyebrow}</p>
              <h1 className="text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
                <span className="neo-glow-text">{slide.title}</span>
              </h1>
              <p className="max-w-xl text-lg font-medium text-slate-300 sm:text-xl">{slide.subtitle}</p>
              <p className="max-w-xl text-sm leading-relaxed text-slate-500 sm:text-base">{slide.description}</p>
            </motion.div>
          </AnimatePresence>

          <div className="flex flex-wrap gap-3">
            <a href="#catalog" className="neo-btn">
              {slide.cta}
            </a>
            <a href="#solutions" className="neo-btn-ghost">
              Solution map
            </a>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {trustBadges.map((b) => (
              <div
                key={b.title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-sm"
              >
                <p className="text-sm font-semibold text-white">{b.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-slate-500">{b.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex-1">
          <div className="relative mx-auto aspect-square max-w-lg lg:max-w-none">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-cyan-500/20 via-transparent to-violet-600/25 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-void-850/90 shadow-card">
              <AnimatePresence mode="wait">
                <motion.div
                  key={slide.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="relative aspect-square"
                >
                  <img
                    src={slide.bg}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover opacity-40"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${slide.accent} mix-blend-screen opacity-30`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-void-950 via-void-950/20 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center p-8 sm:p-12">
                    <motion.img
                      initial={{ scale: 0.92, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: 'spring', stiffness: 120, damping: 18 }}
                      src={slide.image}
                      alt={slide.title}
                      className="max-h-[78%] w-auto object-contain drop-shadow-[0_30px_80px_rgba(0,0,0,0.65)]"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-void-950/80 p-4 backdrop-blur-md sm:p-5">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-widest text-slate-500">Live preview</p>
                        <p className="text-sm font-semibold text-white">{brand.shortName} · {slide.id}</p>
                      </div>
                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={() => setI((p) => (p - 1 + heroSlides.length) % heroSlides.length)}
                          className="rounded-xl border border-white/10 bg-white/5 p-2 text-slate-200 hover:border-cyan-400/40"
                          aria-label="Previous"
                        >
                          <ChevronLeft size={20} />
                        </button>
                        <button
                          type="button"
                          onClick={() => setI((p) => (p + 1) % heroSlides.length)}
                          className="rounded-xl border border-white/10 bg-white/5 p-2 text-slate-200 hover:border-cyan-400/40"
                          aria-label="Next"
                        >
                          <ChevronRight size={20} />
                        </button>
                      </div>
                    </div>
                    <div className="mt-3 flex gap-1.5">
                      {heroSlides.map((_, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setI(idx)}
                          className={`h-1 flex-1 rounded-full transition-all ${
                            idx === i ? 'bg-cyan-400 shadow-[0_0_12px_#22d3ee]' : 'bg-white/10 hover:bg-white/20'
                          }`}
                          aria-label={`Slide ${idx + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
