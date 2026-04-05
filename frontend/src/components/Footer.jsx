import React from 'react'
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react'
import { brand, contact, navLinks } from '../data/content'

const Footer = () => (
  <footer id="contact" className="relative border-t border-white/10 bg-void-950 pt-20 pb-10">
    <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/20 to-violet-500/25 ring-1 ring-white/10">
              <span className="font-mono text-sm font-bold text-cyan-100">{brand.shortName}</span>
            </span>
            <div>
              <p className="text-lg font-bold text-white">{brand.name}</p>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-slate-500">Static react · 2026</p>
            </div>
          </div>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-slate-400">{brand.description}</p>
          <a href="#catalog" className="neo-btn mt-8 inline-flex">
            Open catalog
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:col-span-7">
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-slate-500">Navigate</h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="group inline-flex items-center gap-2 text-sm text-slate-300 hover:text-cyan-200"
                  >
                    <ArrowRight className="h-3.5 w-3.5 text-cyan-500/0 transition-all group-hover:translate-x-0.5 group-hover:text-cyan-400" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-slate-500">Contact</h3>
            <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Office</p>
                <p className="mt-1 text-sm leading-relaxed text-slate-400">
                  {contact.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-violet-300" />
                <div>
                  <p className="text-sm font-semibold text-white">Phone</p>
                  {contact.phones.map((p) => (
                    <p key={p} className="text-sm text-slate-400">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
              <div className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-fuchsia-300" />
                <div>
                  <p className="text-sm font-semibold text-white">Email</p>
                  {contact.emails.map((e) => (
                    <a key={e} href={`mailto:${e}`} className="block text-sm text-slate-400 hover:text-cyan-200">
                      {e}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-slate-500 md:flex-row">
        <p>© {new Date().getFullYear()} {brand.name}. All rights reserved.</p>
        <p className="font-mono text-xs">No backend · Pure display layer</p>
      </div>
    </div>
  </footer>
)

export default Footer
