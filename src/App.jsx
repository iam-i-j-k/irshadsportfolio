import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import BisonCaseStudy from './components/BisonCaseStudy'
import NotFound from './components/NotFound'
import Resume from './components/Resume'
import About from './components/About'
import ZaitoonCaseStudy from './components/ZaitoonCaseStudy'
import WarehouseCaseStudy from './components/WarehouseCaseStudy'
import MusicCaseStudy from './components/MusicCaseStudy'

const Component = () => <div><BisonCaseStudy /></div>;
const Zaitoon = () => <div><ZaitoonCaseStudy /></div>;
const Warehouse = () => <div><WarehouseCaseStudy /></div>;
const Music = () => <div><MusicCaseStudy /></div>
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/bisoncasestudy" element={<Component />} />
        <Route path="/zaitooncasestudy" element={<Zaitoon />} />
        <Route path='/warehousecasestudy' element={<Warehouse />} />
        <Route path='/musiccasestudy' element={<Music />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App