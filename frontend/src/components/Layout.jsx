import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = () => (
  <div className="min-h-screen font-sans bg-gray-50 text-gray-900 selection:bg-primary-200 selection:text-primary-900 overflow-x-hidden flex flex-col">
    <Navbar />
    <main className="flex-1">
      <Outlet />
    </main>
    <Footer />
  </div>
)

export default Layout
