import React from 'react'
import Page1 from './Zaitoon/Page1'
import Footer from './Footer'
import Page2 from './Zaitoon/Page2'
import Page3 from './Zaitoon/Page3'
import Page4 from './Zaitoon/Page4'
import Page5 from './Zaitoon/Page5'
import Page6 from './Zaitoon/Page6'
import Page7 from './Zaitoon/Page7'
import Page8 from './Zaitoon/Page8'
import Page9 from './Zaitoon/Page9'
import Page10 from './Zaitoon/Page10'
import Page11 from './Zaitoon/Page11'
import Page12 from './Zaitoon/Page12'

const ZaitoonCaseStudy = () => {
  return (
    <div className="grid grid-cols-1 gap-10">
      {/* { first page } */}
      <Page1 />
      {/* { second page } */}
      <Page2 /> 
      {/* { third page } */}
      <Page3 />
      {/* { fourth page } */}
      <Page4 />
      {/* { fifth page } */}
      <Page5 />
      {/* { sixth page } */}
      <Page6 />
      {/* { seventh page } */}
      <Page7 />
      {/* { eighth page } */}
      <Page8 />
      {/* { ninth page } */}
      <Page9 />
      {/* { tenth page } */}
      <Page10 />
      {/* { eleventh page } */}
      <Page11 />
      {/* { twelfth page } */}
      <Page12 />
      
      <Footer />
    </div>
  )
}

export default ZaitoonCaseStudy