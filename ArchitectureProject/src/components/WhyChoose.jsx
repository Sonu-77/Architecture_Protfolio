import React from 'react'
import WhyChooseData from '/src/jsonfiles/WhyChooseData.json'

function WhyChoose() {

    const content= WhyChooseData

  return (
    <div className='lg:w-full sm:w-[100vw]  flex flex-col sm:pl-[8vw] lg:pl-[20vw] sm:mt-[10vw] sm:pt-[5vw] lg:mt-[5vw] lg:pt-[0]'>
        <div>
            <h3 className='sm:text-[7vw] lg:text-[2vw] font-bold'>Why Choose Us?</h3>
        </div>
        {
            content.map((item)=>{
                return(
                    
                    <div key={item.id} className=' sm:mt-[5vw] lg:mt-[2vw] lg:w-[70vw] lg:h-[10vw] sm:w-[90vw] lg:mb-[2vw] sm:mb-[5vw]'>
                        <div className='sm:flex sm:flex-col lg:flex lg:flex-row' >
                            <div className='sm:w-[30vw] lg:w-[20vw] lg:h-[8vw] sm:h-[30vw] bg-[#f07b27]  flex justify-center items-center relative' >
                                <div className='sm:w-[8vw] lg:w-[3vw] lg:h-[3vw] sm:h-[8vw] bg-[#f07b27]  absolute sm:-bottom-[3.9vw] lg:bottom-[2.6vw] lg:-right-[1vw] rotate-45'></div>
                                <img className='sm:w-[10vw] lg:w-[3vw]  object-cover' src={item.image} alt="pic" />
                            </div>
                            <div className='sm:mt-[12vw] lg:mt-0 lg:ml-[4vw] '>
                                <h4 className='sm:text-[4vw] lg:text-[1.4vw] font-bold sm:mb-[3vw] lg:mb-[1vw] capitalize'>{item.title}</h4>
                                <p className='sm:text-[3.3vw] lg:text-[0.9vw] sm:pr-[4vw]'>{item.description}</p>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default WhyChoose