import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Projects from './components/Projects'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import BisonCaseStudy from './components/BisonCaseStudy'

const App = () => {
  return (
    
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/bisoncasestudy" element={<BisonCaseStudy />} />
      </Routes>
    </div>
  )
}

export default App