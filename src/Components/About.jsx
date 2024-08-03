import React from 'react'
import Title from './Title'

export default function About() {
  return (
    <div className='bg-[#1ABC9C] h-lvh text-white flex justify-center items-center '>

      <div className="container">
        <Title title="ABOUT COMPONENT" color="white"></Title>

        <div className="grid md:grid-cols-2 px-12">

          <div className="md:ps-12 md:pe-3">
            <p className='mb-4'>
            Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
            </p>

          </div>

          <div className="md:ps-12 md:pe-3">
            <p className='mb-4'>
            Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
            </p>

          </div>

        </div>
      </div>

    </div>
  )
}
