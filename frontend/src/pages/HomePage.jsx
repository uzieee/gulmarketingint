import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Team from '../components/Team'

const HomePage = () => {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return
    const id = location.hash.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      requestAnimationFrame(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }))
    }
  }, [location.hash, location.pathname])

  return (
    <>
      <div id="home">
        <Hero />
      </div>
      <div className="bg-white" id="categories-section">
        <Features />
      </div>
      <div id="team-section">
        <Team />
      </div>
    </>
  )
}

export default HomePage
