import React from 'react'
import { FaSearch } from "react-icons/fa";


function Navbar() {
  return (
    <div className='w-full flex justify-around items-center  gap-[15vw] p-[1vw] '>
      <div className=' '>

      <img src="https://www.free-css.com/assets/files/free-css-templates/preview/page293/fonicy/assets/images/logo.png" alt="" />
      </div>
      <div className='flex justify-between items-center gap-[3vw] text-[1.2vw]'>
        <h2>Home</h2>
        <h2>Services</h2>
        <h2>About</h2>
        <h2>Project</h2>
        <h2>Testimonial</h2>
        <h2>Contact Us</h2>
        <h2>Login</h2>
        <FaSearch />
      </div>
      <div className=''> 
        <button className='w-[8vw] bg-[#f07b27] text-[#ffff] p-[0.5vw] rounded text-[1vw]'>Get A Quoate</button>
      </div>
    </div>
  )
}

export default  Navbar;
