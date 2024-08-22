import React, { useState } from 'react'
import carddata from '/src/jsonfiles/carddata.json'
import ProjectCardSlider from './ProjectCardSlider'



function Project() {

  const [Filter , setFilter]=useState("All")

  const categories=["All","Painting","Reconstruction","Repairs","Residential","Styling"]

  
  const Cards=carddata

  const filteredCards = Filter === 'All' ? Cards : Cards.filter(card => card.class ===Filter );
  
 

  return (
    <div className='lg:w-full sm:w-full sm:h-[150vw] lg:bg-[#ffff] sm:bg-slate-500 lg:h-[48vw] sm:flex sm:flex-col  lg:flex lg:flex-col '>
      <div className='lg:ml-[15vw] sm:ml-[5vw]'>

        <div className='lg:w-[13vw] sm:w-[35vw] bg-red-300 sm:pb-[4vw] lg:pt-[2vw] lg:pb-[2vw] '>
          <h2 className='lg:text-[2vw] sm:text-[6vw] font-bold uppercase'>Projects</h2>
        </div>
        <div className='lg:w-[50vw]  lg:text-[1vw] lg:gap-[2vw] lg:flex uppercase'>
          <div className='lg:w-[10vw] lg:text-[#ffff] lg:text-[1vw] bg-[#000000] lg:flex lg:justify-center lg:items-center lg:h-[2.5vw]'>
            <h3>Category filter</h3>
          </div>
          <div className='lg:flex lg:justify-center lg:items-center lg:gap-[1.5vw] lg:text-[1vw] '>
            {
              categories.map((category)=>{
                return (
                  <button key={category} className= {` ${Filter===category? 'bg-[#f07b27] lg:p-[0.3vw] font-bold rounded-lg text-[#ffff]':''} uppercase`} onClick={ ()=>setFilter(category) }>{category}</button>
                )
              })
            }
          </div>
        </div>
          <div className=' lg:w-[70vw] lg:h-[35vw]  lg:flex lg:justify-center  lg:items-center lg:mt-[1vw] '>
            <ProjectCardSlider card={filteredCards} />
            
              
          </div>
      </div>

    </div>
  )
}

export default Project