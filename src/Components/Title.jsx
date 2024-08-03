import React from 'react'

export default function Title({title, color}) {
  return (
    <div className='text-center'>

      <h2 className='mb-4 text-[40px] leading-[48px] font-bold' style={{color:color}}>{title}</h2>

      <div className='flex justify-center items-center mb-4'>
        <div style={{backgroundColor:color}} className='w-20 h-1 mr-4'></div>
        <i style={{color:color}} className='fa-solid fa-star'></i>
        <div style={{backgroundColor: color}} className='w-20 h-1 ml-4'></div>

      </div>
    </div>
  )
}
