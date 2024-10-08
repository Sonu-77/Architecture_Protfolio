import React from 'react'

function AboutImageSection() {
  return (
    <div className='lg:w-[37.9vw] sm:w-[90%] sm:h-[50%] lg:h-[23vw] relative lg:m-[2vw] lg:mt-[6vw]  '>
        <img className='lg:ml-[1.2vw] lg:w-[35vw] sm:ml-[4vw] sm:w-[100%] sm:h-[70%] lg:h-[100%] object-cover ' src="https://images.pexels.com/photos/27306413/pexels-photo-27306413/free-photo-of-snow-clearing.jpeg?auto=compress&cs=tinysrgb&w=800" alt="img" />
        {/* <img className='lg:ml-[1.2vw] lg:w-[35vw] sm:ml-[4vw] sm:w-[100%] sm:h-[70%] lg:h-[100%] object-cover ' src="https://www.free-css.com/assets/files/free-css-templates/preview/page293/fonicy/assets/images/about-img.jpg" alt="img" /> */}
        <div className='lg:w-[2.5vw] sm:w-[6.5vw] sm:h-[30vw] lg:h-[16vw] bg-[#f07b27] absolute sm:top-[5vw] sm:left-[0.5vw] lg:left-0 lg:top-[4vw] '></div>
        <div className='lg:w-[1.7vw] sm:w-[3.5vw] lg:h-[16vw] sm:h-[30vw] bg-[#f07b27] absolute lg:top-[4vw] sm:top-[5vw] sm:-right-[7.5vw] lg:-right-[2.9vw]'></div>
    </div>
  )
}

export default AboutImageSection