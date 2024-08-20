import React from 'react'

function Service({children}) {
  return (
    <div className='w-[96vw] h-[34vw] mt-[5%] ml-[2%] mb-[2%]  flex justify-center items-center shadow-slate-500 shadow-2xl '>
        <div className='w-[73%] h-[90%]  '>

            <h2 className='mt-[1%] text-[2vw] font-bold'>Services</h2>
            <p className='mt-[0.4vw] text-[1vw]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration</p>
            <div className=' w-[100%] h-[78%]  flex justify-center  items-center'>
                {children}
            </div>
        </div>
    </div>
  )
}

export default Service