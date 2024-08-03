import React from 'react'
import Title from './Title'
import userImage from '../assets/images/avataaars.svg'

export default function Home() {
  return (

    <div className="home bg-[#1ABC9C] h-lvh flex justify-center items-center">
      <div className="container">

        <img className='w-[250px] block text-center mx-auto mb-4' src={userImage} alt="" />
        <Title  title="START FRAMEWORK" color="white" ></Title>
        <p className='text-center text-white'>Graphic Artist - Web Designer - Illustrator</p>
      
    </div>
    </div>
    
  )
}
