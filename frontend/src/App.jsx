import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Team from './components/Team'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    document.documentElement.classList.add('scroll-smooth')
    return () => document.documentElement.classList.remove('scroll-smooth')
  }, [])

  return (
    <div className="min-h-screen font-sans bg-gray-50 text-gray-900 selection:bg-primary-200 selection:text-primary-900 overflow-x-hidden">
      <Navbar />
      <main>
        <div id="home">
          <Hero />
        </div>

        <div className="bg-white" id="categories-section">
          <Features />
        </div>

        <div id="team-section">
          <Team />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
