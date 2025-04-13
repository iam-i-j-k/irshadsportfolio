import React from 'react'
import Zaitoon from './Zaitoon'
import Bison from './Bison'
import Warehouse from './Warehouse'
import Music from './Music'

const Projects = () => {
  return (
    <div className='flex flex-col gap-2'>
        <Warehouse />
        <Zaitoon />
        <Bison />
        <Music />
    </div>
  )
}

export default Projects