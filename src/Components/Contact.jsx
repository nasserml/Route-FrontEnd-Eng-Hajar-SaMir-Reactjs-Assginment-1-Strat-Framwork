import React, { useState } from 'react'
import Title from './Title'

export default function Contact() {



  const [inputNameValue, setInputNameValue] = useState('');
  const [inputAgeValue, setInputAgeValue] = useState('');
  const [inputEmailValue, setInputEmailValue] = useState('');
  const [inputPasswordValue, setInputPasswordValue] = useState('');

  const handleInputNameChange = (event) => {
    setInputNameValue(event.target.value)
  }


  const handleInputAgeNameChange = (event) => {
    setInputAgeValue(event.target.value);
  }

  const handleInputEmailNameChange = (event) => {
    setInputEmailValue(event.target.value);
  }

  const handleInputPasswordNameChange = (event) => {
    setInputPasswordValue(event.target.value);
  }
  
  return (
    <div className='bg-white h-lvh mb-6 flex justify-center items-center pt-4 '>

      <div className="container">
        <Title title='CONTACT SECTION' color='(44,62,41)'></Title>

        <form action="" className='p-4  mt-12 w-1/2 mx-auto  '>

        <div className="relative z-0 w-full mb-5 group">

          <label for="floating_userName" 
          className={`text-[rgb(26,188,156)] mb-[7px] transition-[top] duration-[0.6s] relative ${inputNameValue.length > 0 ? 'top-0' : 'top-10'} `}>userName:</label>

            <input type="text" name="floating_userName" id="floating_userName" className="relative block py-4 px-3  w-full  text-sm text-gray-900 bg-white border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder="userName" value={inputNameValue} onChange={handleInputNameChange}  required />

            
        </div>

        <div className="relative z-0 w-full mb-5 group">

          <label for="floating_userAge" 
            className={`text-[rgb(26,188,156)] mb-[7px] transition-[top] duration-[0.6s] relative ${inputAgeValue.length > 0 ? 'top-0' : 'top-10'} `}>userAge:</label>

            <input type="text" name="floating_userAge" id="floating_userName" className="relative block py-4 px-3  w-full  text-sm text-gray-900 bg-white border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder="userAge" value={inputAgeValue} onChange={handleInputAgeNameChange}  required />

            
        </div>

        <div className="relative z-0 w-full mb-5 group">

          <label for="floating_userEmail" 
              className={`text-[rgb(26,188,156)] mb-[7px] transition-[top] duration-[0.6s] relative ${inputEmailValue.length > 0 ? 'top-0' : 'top-10'} `}>userEmail:</label>

            <input type="email" name="floating_userEmail" id="floating_userName" className="relative block py-4 px-3  w-full  text-sm text-gray-900 bg-white border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder="userEmail" value={inputEmailValue} onChange={handleInputEmailNameChange}  required />

        </div>

        <div className="relative z-0 w-full mb-5 group">

          <label for="floating_userPassword" 
              className={`text-[rgb(26,188,156)] mb-[7px] transition-[top] duration-[0.6s] relative ${inputPasswordValue.length > 0 ? 'top-0' : 'top-10'} `}>userPassword:</label>

            <input type="password" name="floating_userPassword" id="floating_userName" className="relative block py-4 px-3  w-full  text-sm text-gray-900 bg-white border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder="userPassword" value={inputPasswordValue} onChange={handleInputPasswordNameChange}  required />

        </div>

        <button type="submit" class="text-white bg-[#1abc9c]      px-3 py-[6px] text-center  mt-6 border rounded-[6px]">send Message</button>


        </form>


      </div>

    </div>
  )
}
