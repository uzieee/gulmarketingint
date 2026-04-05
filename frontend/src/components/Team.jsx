import React from 'react'
import { motion } from 'framer-motion'
import { Linkedin, Mail, Twitter } from 'lucide-react'
import { teamMembers } from '../data/content'

const Team = () => (
  <section id="crew" className="relative py-24 sm:py-32">
    <div className="pointer-events-none absolute inset-0 bg-grid bg-grid-size opacity-25 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-300">Humans</p>
        <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-5xl">
          Crew behind <span className="neo-glow-text">the signal</span>
        </h2>
        <p className="mt-4 text-slate-400">Real names and roles from your materials — styled for a holographic deck.</p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {teamMembers.map((member, idx) => (
          <motion.article
            key={member.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08 }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-void-950/80 p-8 text-center backdrop-blur-xl"
          >
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <div className="absolute inset-[-40%] bg-[conic-gradient(from_120deg,transparent,rgba(34,211,238,0.12),transparent,rgba(167,139,250,0.12),transparent)] blur-2xl" />
            </div>
            <div className="relative mx-auto h-40 w-40">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400/30 to-violet-500/30 blur-md" />
              <img
                src={member.image}
                alt={member.name}
                className="relative h-full w-full rounded-full border-2 border-white/20 object-cover shadow-[0_0_40px_-10px_rgba(34,211,238,0.35)]"
                onError={(e) => {
                  e.target.src = '/images/gmi/logo.png'
                  e.target.classList.add('object-contain', 'p-6', 'bg-void-900')
                }}
              />
            </div>
            <h3 className="relative mt-6 text-xl font-bold text-white">{member.name}</h3>
            <p className="relative mt-2 font-mono text-xs uppercase tracking-widest text-violet-200/90">{member.role}</p>
            <div className="relative mt-6 flex justify-center gap-3">
              <a
                href={member.social.mail}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 hover:border-cyan-400/40 hover:text-cyan-200"
              >
                <Mail size={18} />
              </a>
              <a
                href={member.social.linkedin}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 hover:border-violet-400/40 hover:text-violet-200"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={member.social.twitter}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 hover:border-fuchsia-400/40 hover:text-fuchsia-200"
              >
                <Twitter size={18} />
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
)

export default Team
