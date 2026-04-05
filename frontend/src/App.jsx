import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StatsStrip from './components/StatsStrip'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import Team from './components/Team'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    document.documentElement.classList.add('scroll-smooth')
    return () => document.documentElement.classList.remove('scroll-smooth')
  }, [])

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-void-950 text-slate-200">
      <Navbar />
      <main>
        <Hero />
        <StatsStrip />
        <Features />
        <Testimonials />
        <Team />
      </main>
      <Footer />
    </div>
  )
}

export default App
