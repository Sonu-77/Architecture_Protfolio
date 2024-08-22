import React from 'react'
import carddata from '/src/jsonfiles/carddata.json'
import ProjectCardSlider from './ProjectCardSlider'


function Project() {

  const categories=["All","Painting","Reconstruction","Repairs","Residential","Styling"]

 

  return (
    <div className='lg:w-full lg:h-[48vw]  lg:flex lg:flex-col '>
      <div className='lg:ml-[15vw]'>

        <div className='lg:w-[13vw] lg:pt-[2vw] lg:pb-[2vw] '>
          <h2 className='lg:text-[2vw] font-bold uppercase'>Projects</h2>
        </div>
        <div className='lg:w-[50vw]  lg:text-[1vw] lg:gap-[2vw] lg:flex uppercase'>
          <div className='lg:w-[10vw] lg:text-[#ffff] lg:text-[1vw] bg-[#000000] lg:flex lg:justify-center lg:items-center lg:h-[2.5vw]'>
            <h3>Category filter</h3>
          </div>
          <div className='lg:flex lg:justify-center lg:items-center lg:gap-[1.5vw] lg:text-[1vw] '>
            {
              categories.map((category)=>{
                return (
                  <button key={category} className=' hover:text-[#f07b27] uppercase'>{category}</button>
                )
              })
            }
          </div>
        </div>
          <div className=' lg:w-[70vw] lg:h-[35vw]  lg:flex lg:justify-center bg-slate-500 lg:items-center lg:mt-[3vw] '>
            <ProjectCardSlider></ProjectCardSlider>
          </div>
      </div>

    </div>
  )
}

export default Project