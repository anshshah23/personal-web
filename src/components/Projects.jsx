import React from 'react'
import Navbar from './Navbar'
const Projects = () => {
  return (
    <div className='flex flex-col'>
      <div>
        <h2 className="text-3xl font-semibold text-gray-800">Projects</h2>
        <div className="mt-4 text-gray-600">
          <div className="my-4">
            <h3 className="text-2xl font-semibold">Project 1</h3>
            <p className="mt-2">Description of project 1 highlighting key features and technologies used.</p>
          </div>
          <div className="my-4">
            <h3 className="text-2xl font-semibold">Project 2</h3>
            <p className="mt-2">Description of project 2 highlighting key features and technologies used.</p>
          </div>
          <div className="my-4">
            <h3 className="text-2xl font-semibold">Project 3</h3>
            <p className="mt-2">Description of project 3 highlighting key features and technologies used.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects