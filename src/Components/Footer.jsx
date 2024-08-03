import React from 'react'

export default function Footer() {
  return (<>
    <div className='p-10 bg-[#2C3E50] text-white'>

      <div className='sm:flex sm:flex-row sm:flex-wrap m-6 text-center'>
        
        <div className='sm:grow sm:shrink-0  sm:basis-0'>
          <div className='p-4 text-center'>
            <h3 className=' text-[28px] leading-[34px] font-[500] pt-5 mb-2'>LOCATION</h3>
            <p className='mb-4'>2215 John Daniel Drive</p>
            <p className='mb-4'>Clark, MO 65243</p>
          </div>
        </div>

        <div className='sm:grow sm:shrink-0 sm:basis-0'>
          <div className='p-4 text-center'>
            <h3 className=' text-[28px] leading-[34px] font-[500] pt-5 mb-2'>AROUND THE WEB</h3>
            
            <div>

              <i className='fa-brands fa-facebook p-[10px] border border-solid rounded-full ml-2'></i>
              <i className='fa-brands fa-twitter p-[10px] border border-solid rounded-full ml-2'></i>
              <i className='fa-brands fa-linkedin-in p-[10px] border border-solid rounded-full ml-2'></i>
              <i className='fa-solid fa-globe p-[10px] border border-solid rounded-full ml-2'></i>

            </div>

          </div>
        </div>

        <div className='sm:grow sm:shrink-0 sm:basis-0'>
          <div className='p-4 text-center'>
            <h3 className=' text-[28px] leading-[34px] font-[500] pt-5 mb-2'>ABOUT FREELANCER</h3>
            <p className='mb-4'>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            
          </div>
        </div>

      </div>

    </div>

    <div className='p-[10px] bg-[#1A252F]'>
      <p className='pt-[10px] mb-4 text-center text-[#f0f8ff]'>Copyright © Your Website 2021</p>
    </div>
    </>
  )
}
