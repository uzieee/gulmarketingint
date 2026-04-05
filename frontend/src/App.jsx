import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import CategoryPage from './pages/CategoryPage'

function App() {
  useEffect(() => {
    document.documentElement.classList.add('scroll-smooth')
    return () => document.documentElement.classList.remove('scroll-smooth')
  }, [])

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/clinical-microbiology" element={<CategoryPage />} />
        <Route path="/hematology" element={<CategoryPage />} />
        <Route path="/chemistry" element={<CategoryPage />} />
      </Route>
    </Routes>
  )
}

export default App
