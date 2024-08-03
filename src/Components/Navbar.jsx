import React, { useEffect, useState } from 'react'
import { NavLink,Link } from 'react-router-dom'


export default function Navbar() {

    const [isScrolled, setIsScrolled]= useState(false);

    useEffect(()=>{

    

        window.addEventListener('scroll', () => {

            setIsScrolled(window.scrollY > 0);
        })
    },[])



  return (
    <nav className={`bg-[#2C3E50] border-gray-200 text-white  fixed top-0 left-0 right-0 z-20 transition-[padding] duration-[0.6s] ${isScrolled ? 'py-2': 'py-6'}`}>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto ">
            <Link to={'/'}
            
            className="flex items-center space-x-3 rtl:space-x-reverse"
            >
            
            <span className="self-center text-2xl  whitespace-nowrap uppercase text-[32px] leading-[48px] font-bold py-[5px] ml-4">
            Start Framework
            </span>
            </Link>
            <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
            aria-controls="navbar-default"
            aria-expanded="false"
            >
            <span className="sr-only">Open main menu</span>
            <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
            >
                <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
                />
            </svg>
            </button>
            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className=" flex flex-col p-4 md:p-0 mt-4 border  rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  ">
                
                <li>
                <NavLink 
                    to={'/about'}
                    className="block py-2 px-3 text-white p-2 font-bold rounded   md:border-0  transition-colors ease-in-out duration-150 "
                >
                    ABOUT
                </NavLink>
                </li>
                <li>
                <NavLink
                    to={'/portfolio'}
                    className="block py-2 px-3 text-white p-2 font-bold rounded   md:border-0  transition-colors ease-in-out duration-150" 
                >
                    PORTFOLIO
                </NavLink>
                </li>
                <li>
                <NavLink
                    to={'/contact'}
                    className="block py-2 px-3 text-white p-2 font-bold rounded   md:border-0  transition-colors ease-in-out duration-150 "
                >
                    CONATCT
                </NavLink>
                </li>
                
            </ul>
            </div>
        </div>
    </nav>

  )
}
