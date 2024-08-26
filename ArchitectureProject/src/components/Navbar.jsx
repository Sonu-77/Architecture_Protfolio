import React from 'react'
import { Link,NavLink } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";



function Navbar() {

  

  return (
    <div className='w-full flex lg:justify-around lg:items-center  lg:gap-[15vw] sm:p-[3vw] lg:p-[0.5vw] sm:justify-between sm:items-center  '>
      <div className=' '>

      <img className='sm:ml-[2vw] bg-[#f07b27] sm:p-[1vw] rounded-full lg:p-[0.4vw] lg:ml-[0] lg:w-[4vw] lg:h-[4vw] sm:w-[12vw] object-cover' src="./src/assets/logo.webp" alt="" />
      {/* <img className='sm:ml-[2vw] lg:ml-[0] lg:w-[8vw] sm:w-[25vw] object-cover' src="https://www.free-css.com/assets/files/free-css-templates/preview/page293/fonicy/assets/images/logo.png" alt="" /> */}
      </div>
      <div className='flex justify-between items-center lg:gap-[3vw] lg:first-line:text-[1.2vw] sm:hidden lg:flex'>
        <Link to={"/"}><h2>Home</h2></Link>
        <Link to={"service"}><h2>Services</h2></Link>
        <Link to={"about"}><h2>About</h2></Link>
        <Link to={"project"}><h2>Project</h2></Link>
        <Link to={"testimonial"}><h2>Testimonial</h2></Link>
        <Link to={"contact"}><h2>Contact Us</h2></Link>
        <Link to={"login"}><h2>Login</h2></Link>
        <FaSearch />
      </div>
      <div className=' lg:flex'> 
        <IoMdMenu className='lg:hidden sm:text-[8vw] sm:mr-[2vw] lg:mr-[0]' />
        <button className='lg:w-[8vw] bg-[#f07b27] text-[#ffff] lg:p-[0.5vw] rounded lg:text-[1vw] sm:hidden lg:flex'>Get A Quoate</button>
      </div>
    </div>
  )
}

export default  Navbar;
