import React from 'react'

function AboutSpace({children ,smHeight,lgHeight}) {


  return (
    <div className={`lg:w-[96vw] sm:w-[92vw]  lg:h-[${lgHeight}] sm:h-[${smHeight}] lg:ml-[2%] sm:ml-[2%] lg:mb-[2%] sm:mb-[2%] lg:p-[14vw] lg:flex lg:flex-row lg:gap-0 lg:justify-center lg:items-center sm:flex sm:flex-col sm:justify-center  sm:gap-6`} >    
        {children}   
    </div>
  )
}

export default AboutSpace