import React from 'react'

function Service({children}) {
  return (
    <div className='lg:w-[96vw] sm:w-[92vw] sm:h-[100vw] lg:h-[34vw] sm:ml-[4vw] sm:mr-[4vw] sm:mt-[8vw]  lg:mt-[5%] lg:ml-[2%] lg:mb-[2%] sm:flex sm:justify-center lg:flex lg:justify-center lg:items-center shadow-slate-500 sm:shadow-2xl lg:shadow-2xl '>
        <div className='lg:w-[73%] sm:w-[90%] sm:h-[90%] lg:h-[90%]  '>

            <h2 className=' lg:mt-[1%] sm:mt-[5vw] sm:text-[5vw] lg:text-[2vw] font-bold'>Services</h2>
            <p className='lg:mt-[0.4vw] sm:mt-[1.6vw] sm:text-[3.2vw] lg:text-[1vw]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration</p>
            <div className='lg:w-[100%] sm:w-[100%] sm:h-[78%] lg:h-[78%] lg:flex lg:justify-center  lg:items-center'>
                {children}
            </div>
        </div>
    </div>
  )
}

export default Service