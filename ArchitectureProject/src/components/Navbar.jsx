import React from 'react'
import { FaSearch } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";



function Navbar() {
  return (
    <div className='w-full flex lg:justify-around lg:items-center  lg:gap-[15vw] sm:p-[4vw] lg:p-[1vw] sm:justify-between  '>
      <div className=' '>

      <img className='sm:ml-[2vw] lg:ml-[0] lg:w-[8vw] sm:w-[25vw] object-cover' src="https://www.free-css.com/assets/files/free-css-templates/preview/page293/fonicy/assets/images/logo.png" alt="" />
      </div>
      <div className='flex justify-between items-center lg:gap-[3vw] lg:first-line:text-[1.2vw] sm:hidden lg:flex'>
        <h2>Home</h2>
        <h2>Services</h2>
        <h2>About</h2>
        <h2>Project</h2>
        <h2>Testimonial</h2>
        <h2>Contact Us</h2>
        <h2>Login</h2>
        <FaSearch />
      </div>
      <div className=' lg:flex'> 
        <IoMdMenu className='lg:hidden sm:flex sm:text-[8vw] sm:mr-[2vw] lg:mr-[0]' />
        <button className='lg:w-[8vw] bg-[#f07b27] text-[#ffff] lg:p-[0.5vw] rounded lg:text-[1vw] sm:hidden lg:flex'>Get A Quoate</button>
      </div>
    </div>
  )
}

export default  Navbar;
