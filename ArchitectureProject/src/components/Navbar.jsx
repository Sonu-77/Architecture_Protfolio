import React, { useState } from 'react'
import { Link,NavLink } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";




function Navbar() {
  const [menushow,setMenuShow]=useState(false)
  const [crossmenuIcon,setcrossMenuIcon]=useState('hidden')
  const [menuIcon,setMenuIcon]=useState('flex')

  const toogleMenu= ()=>{
    if (menushow==false){
      return (
        setMenuShow(true),
        setcrossMenuIcon('flex'),
        setMenuIcon('hidden')
      )

    }else{
      return(
        setMenuShow(false),
        setcrossMenuIcon('hidden'),
        setMenuIcon('flex')

      ) 
    }
  }

  

  return (
    <div className='w-full flex lg:justify-around lg:items-center  lg:gap-[15vw] sm:p-[3vw] lg:p-[0.5vw] sm:justify-between sm:items-center  relative '>
      <div className=' '>

      <img className='sm:ml-[2vw] bg-[#f07b27] sm:p-[1vw] rounded-full lg:p-[0.4vw] lg:ml-[0] lg:w-[4vw] lg:h-[4vw] sm:w-[12vw] object-cover' src="./src/assets/logo.webp" alt="" />
      {/* <img className='sm:ml-[2vw] lg:ml-[0] lg:w-[8vw] sm:w-[25vw] object-cover' src="https://www.free-css.com/assets/files/free-css-templates/preview/page293/fonicy/assets/images/logo.png" alt="" /> */}
      </div>
      <div className='flex justify-between items-center lg:gap-[3vw] lg:first-line:text-[1.2vw] uppercase sm:hidden  lg:flex'>
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
        <IoMdMenu onClick={toogleMenu} className={`lg:hidden sm:text-[8vw] sm:mr-[2vw] sm:${menuIcon}  lg:mr-[0]`} />
        <RxCross1 onClick={toogleMenu} className={`lg:hidden sm:${crossmenuIcon} sm:text-[7.5vw] sm:mr-[2vw] lg:mr-[0] absolute right-[2vw] top-[5vw]`} />
        {
          menushow && (
            <div onClick={toogleMenu} className='absolute sm:right-[0.5vw] sm:top-[18vw]  sm:w-[99vw] text-[#fb8500] z-10 sm:h-[130vw] gap-[5vw] uppercase text-[5vw] flex flex-col justify-center items-center bg-[#023047] bottom-ro'>
              <Link to={"/"}><h2>Home</h2></Link>
              <Link to={"service"}><h2>Services</h2></Link>
              <Link to={"about"}><h2>About</h2></Link>
              <Link to={"project"}><h2>Project</h2></Link>
              <Link to={"testimonial"}><h2>Testimonial</h2></Link>
              <Link to={"contact"}><h2>Contact Us</h2></Link>
              <Link to={"login"}><h2>Login</h2></Link>
              <FaSearch />
            </div>
          )
        }
        <button className='lg:w-[8vw] bg-[#f07b27] text-[#ffff] lg:p-[0.5vw] rounded lg:text-[1vw] sm:hidden lg:flex'>Get A Quoate</button>
      </div>
    </div>
  )
}

export default  Navbar;
