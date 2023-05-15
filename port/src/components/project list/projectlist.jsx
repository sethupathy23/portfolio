import React from 'react'
import './projectlist.css'
import Project from '../project/project'


const ProjectList = () => {
  return (
    <div className='pl'>
     <div className="pl-text">
     <h1 className='title'>MY PROJECTS</h1>
    <div className="pl-list">
      <Project  />
      <Project />

      <Project />

    

      


    </div>
     </div>
    
    </div>
  )
}

export default ProjectList