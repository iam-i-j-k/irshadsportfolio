import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import BisonCaseStudy from './components/BisonCaseStudy'
import NotFound from './components/NotFound'

const Component = () => <div><BisonCaseStudy /></div>;
const App = () => {
  return (
    
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/bisoncasestudy" element={<Component />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App