import React from 'react'

function About() {
  return (
    <div className='lg:w-[40vw] lg:pr-[1vw] sm:w-[92vw] lg:p-0 sm:p-[2vw] lg:mt-0 sm:ml-[2vw] sm:mt-[10vw] '>
        <h2 className='lg:text-[2vw] sm:text-[5vw] font-bold'>About Us</h2>
        <p className='lg:text-[0.9vw] sm:text-[3vw] lg:mt-[0.4vw] sm:mt-[2.5vw] font-normal'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis itaque inventore cupiditate fugiat esse. Facilis assumenda magnam, at exercitationem esse non animi expedita ipsa velit nisi aspernatur dolorum praesentium nobis!Lorem Omnis itaque inventore cupiditate fugiat esse. Facilis assumenda magnam,Omnis itaque inventore cupiditate fugiat esse. Facilis assumenda magnam.
        </p>
        <button className='lg:w-[8vw] sm:w-[24vw] lg:p-[0.5vw] sm:p-[1vw] bg-[#f07b27] lg:text-[1vw] sm:text-[3vw] text-[#ffff] lg:mt-[1.3vw] sm:mt-[4vw] hover:bg-[#b66c37]'><a href="#">Read More</a></button>
        
    </div>
  )
}

export default About