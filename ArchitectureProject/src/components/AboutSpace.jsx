import React from 'react'

function AboutSpace({children}) {
  return (
    <div className='lg:w-[96vw] sm:w-[92vw]  lg:h-[30vw] sm:h-[130vw] lg:ml-[2%] sm:ml-[2%] lg:mb-[2%] sm:mb-[2%] lg:p-[14vw] lg:flex lg:flex-row lg:gap-2 lg:justify-center lg:items-center sm:flex sm:flex-col sm:justify-center  sm:gap-6  '>    
        {children}   
    </div>
  )
}

export default AboutSpace