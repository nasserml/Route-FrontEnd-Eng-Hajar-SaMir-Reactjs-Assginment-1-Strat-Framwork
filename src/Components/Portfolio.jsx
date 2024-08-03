import React from 'react'
import Title from './Title'
import part1 from '../assets/images/poert1.png';
import part2 from '../assets/images/port2.png';
import part3 from '../assets/images/port3.png';

export default function Portfolio() {
  return (
    <div className='bg-white h-lvh mb-6 pt-6 flex justify-center items-center'>

      <div className="container">
        <Title title='PORTFOLIO COMPONENT' color='rgb(44,62,41)'></Title>

        <div className="px-3 md:grid md:grid-cols-2 lg:grid-cols-3 gap-12 ">

          <div className="relative overflow-hidden rounded-[0.5rem]">
            <img src={part1} className='w-full rounded-[0.5rem]' alt="" />

            <div className='absolute start-0 w-full top-0 h-full flex justify-center items-center bg-[#1abc9ce6] ease-in cursor-pointer transition-[opacity] duration-[0.6s] opacity-0 hover:opacity-100'>
              <i className='text-white fa-solid fa-plus fa-6x '></i>
            </div>

          </div>

          
          <div className="relative overflow-hidden rounded-[0.5rem]">
            <img src={part2} className='w-full rounded-[0.5rem]' alt="" />

            <div className='absolute start-0 w-full top-0 h-full flex justify-center items-center bg-[#1abc9ce6] ease-in cursor-pointer transition-[opacity] duration-[0.6s] opacity-0 hover:opacity-100'>
              <i className='text-white fa-solid fa-plus fa-6x '></i>
            </div>

          </div>


          <div className="relative overflow-hidden rounded-[0.5rem]">
            <img src={part3} className='w-full rounded-[0.5rem]' alt="" />

            <div className='absolute start-0 w-full top-0 h-full flex justify-center items-center bg-[#1abc9ce6] ease-in cursor-pointer transition-[opacity] duration-[0.6s] opacity-0 hover:opacity-100'>
              <i className='text-white fa-solid fa-plus fa-6x '></i>
            </div>

          </div>


          <div className="relative overflow-hidden rounded-[0.5rem]">
            <img src={part1} className='w-full rounded-[0.5rem]' alt="" />

            <div className='absolute start-0 w-full top-0 h-full flex justify-center items-center bg-[#1abc9ce6] ease-in cursor-pointer transition-[opacity] duration-[0.6s] opacity-0 hover:opacity-100'>
              <i className='text-white fa-solid fa-plus fa-6x '></i>
            </div>

          </div>


          <div className="relative overflow-hidden rounded-[0.5rem]">
            <img src={part2} className='w-full rounded-[0.5rem]' alt="" />

            <div className='absolute start-0 w-full top-0 h-full flex justify-center items-center bg-[#1abc9ce6] ease-in cursor-pointer transition-[opacity] duration-[0.6s] opacity-0 hover:opacity-100'>
              <i className='text-white fa-solid fa-plus fa-6x '></i>
            </div>

          </div>


          <div className="relative overflow-hidden rounded-[0.5rem]">
            <img src={part3} className='w-full rounded-[0.5rem]' alt="" />

            <div className='absolute start-0 w-full top-0 h-full flex justify-center items-center bg-[#1abc9ce6] ease-in cursor-pointer transition-[opacity] duration-[0.6s] opacity-0 hover:opacity-100'>
              <i className='text-white fa-solid fa-plus fa-6x '></i>
            </div>

          </div>

          

        </div>



      </div>

    </div>
  )
}
