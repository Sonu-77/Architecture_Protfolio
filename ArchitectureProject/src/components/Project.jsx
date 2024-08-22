import  { useState } from 'react'
import carddata from '/src/jsonfiles/carddata.json'
import ProjectCardSlider from './ProjectCardSlider'



function Project() {

  const [Filter , setFilter]=useState("All")

  const categories=["All","Painting","Reconstruction","Repairs","Residential","Styling"]

  
  const Cards=carddata

  const filteredCards = Filter === 'All' ? Cards : Cards.filter(card => card.class ===Filter );
  
 

  return (
    <div className='lg:w-full sm:w-full sm:h-[170vw] lg:bg-[#ffff]  lg:h-[48vw] sm:flex sm:flex-col  lg:flex lg:flex-col '>
      <div className='lg:ml-[15vw] sm:ml-[5vw] sm:pl-[1vw]'>

        <div className='lg:w-[13vw] sm:w-[35vw]  sm:pb-[7vw] lg:pt-[2vw] lg:pb-[2vw] '>
          <h2 className='lg:text-[2vw] sm:text-[6.5vw] font-bold uppercase'>Projects</h2>
        </div>
        <div className='lg:w-[55vw] sm:w-[85vw]  sm:text-[3.4vw] lg:text-[1vw] sm:flex sm:flex-col sm:gap-[4vw] lg:gap-[2vw] lg:flex lg:flex-row uppercase'>
          <div className='lg:w-[10vw] sm:w-[35vw] lg:text-[#ffff] sm:text-[#ffff] lg:text-[1vw]  bg-[#000000] sm:flex sm:justify-center sm:items-center lg:flex lg:justify-center lg:items-center sm:h-[6vw] lg:h-[2.5vw]'>
            <h3>Category filter</h3>
          </div>
          <div className='lg:flex sm:flex sm:flex-wrap sm:justify-start sm:items-center lg:justify-center lg:items-center sm:gap-[4vw] lg:gap-[1.5vw] lg:text-[1vw] sm:pl-[2vw] lg:pl-0 sm:font-bold '>
            {
              categories.map((category)=>{
                return (
                  <button key={category} className= {` ${Filter===category? 'bg-[#f07b27] sm:p-[1vw] lg:p-[0.3vw] font-bold rounded-lg text-[#ffff]':null} uppercase`} onClick={ ()=>setFilter(category) }>{category}</button>
                )
              })
            }
          </div>
        </div>
          <div className=' sm:w-[90vw] sm:pl-[3vw] sm:pr-[4vw] lg:pr-0 lg:pl-0 lg:w-[70vw] sm:h-110vw] sm:mt-[4vw] lg:h-[35vw]  lg:flex      
           lg:flex-row sm:flex sm:flex-col sm:justify-center lg:justify-center  lg:items-center lg:mt-[1vw] '>
            <ProjectCardSlider card={filteredCards} />
              
          </div>
      </div>

    </div>
  )
}

export default Project