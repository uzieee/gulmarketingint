import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Orbit, Package } from 'lucide-react'
import { solutions, catalogItems, milestones } from '../data/content'

const Features = () => (
  <>
    <section id="solutions" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-violet-300">Solutions</p>
          <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Three pillars. <span className="neo-glow-text">One coherent lab story.</span>
          </h2>
          <p className="mt-4 text-slate-400 sm:text-lg">
            Static content only — crafted to read like a premium product narrative, without wiring to any server.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {solutions.map((sol, idx) => (
            <motion.a
              key={sol.title}
              href={sol.href}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-void-850/60 p-1 shadow-card"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${sol.gradient} opacity-80`} />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[1.35rem] bg-void-900/90">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={sol.image}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-void-950 via-transparent to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/40 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-cyan-100 backdrop-blur-md">
                    {sol.chip}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-xl font-bold text-white">{sol.title}</h3>
                    <span className="rounded-full border border-white/10 bg-white/5 p-2 text-cyan-200 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      <ArrowUpRight size={18} />
                    </span>
                  </div>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">{sol.description}</p>
                  <p className="mt-4 font-mono text-[11px] text-slate-500">Scroll to catalog →</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>

    <section id="catalog" className="relative border-t border-white/10 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-mesh opacity-50" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-cyan-300">
              <Package className="h-4 w-4" />
              Catalog
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-5xl">Featured instruments</h2>
            <p className="mt-3 max-w-xl text-slate-400">
              Mock SKUs and prices for layout. Swap values anytime in <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-xs">src/data/content.js</code>.
            </p>
          </div>
          <a href="#proof" className="neo-btn-ghost text-sm">
            Why teams trust GMI
          </a>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {catalogItems.map((item, idx) => (
            <motion.article
              key={item.sku}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-transparent p-4 backdrop-blur-sm"
            >
              <div className="relative aspect-square overflow-hidden rounded-xl border border-white/5 bg-void-950">
                <img src={item.img} alt="" className="h-full w-full object-contain p-4" />
                <span className="absolute right-3 top-3 rounded-full bg-fuchsia-500/90 px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wide text-white">
                  {item.badge}
                </span>
              </div>
              <h3 className="mt-4 text-sm font-bold text-white">{item.name}</h3>
              <p className="mt-1 font-mono text-[11px] text-slate-500">{item.sku}</p>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-lg font-bold text-cyan-200">{item.price}</span>
              </div>
              <p className="mt-1 text-xs text-slate-500">{item.note}</p>
              <button
                type="button"
                className="mt-4 w-full rounded-xl border border-white/10 bg-white/5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400/35 hover:bg-white/10"
              >
                Request spec sheet
              </button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>

    <section className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-4">
            <p className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-violet-300">
              <Orbit className="h-4 w-4" />
              Trajectory
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">Milestones</h2>
            <p className="mt-3 text-slate-400">
              A vertical timeline with neon ticks — purely illustrative, easy to edit in the data file.
            </p>
          </div>
          <div className="lg:col-span-8">
            <ol className="relative space-y-10 border-l border-white/10 pl-8">
              {milestones.map((m) => (
                <li key={m.year} className="relative">
                  <span className="absolute -left-[39px] top-1 flex h-5 w-5 items-center justify-center rounded-full border border-cyan-400/40 bg-void-950 shadow-[0_0_20px_rgba(34,211,238,0.35)]">
                    <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulsebar" />
                  </span>
                  <p className="font-mono text-sm text-cyan-300">{m.year}</p>
                  <h3 className="mt-1 text-xl font-bold text-white">{m.title}</h3>
                  <p className="mt-2 max-w-2xl text-slate-400">{m.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  </>
)

export default Features
