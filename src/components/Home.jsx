import React from 'react'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import Projects from './Projects'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
        <HeroSection />
        <Projects />
        <Footer />
    </div>
  )
}

export default Home