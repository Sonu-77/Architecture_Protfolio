import React from 'react'
import './ProjectCard.css'

function ProjectCard({title,image,description}) {
  return (
    <div className=' lg:h-[27vw] lg:w-[20vw] sm:h-[85vw]  sm:w-[70vw] lg:hover:scale-110  sm:hover:scale-105 transition-transform duration-300  bg-[#f07b27] m-9  custom-shadow '>
        <a href="#"><img className={`lg:w-full lg:h-[15vw] sm:w-full sm:h-[50vw] object-cover`} src={`${image}`} alt="pic" /></a>
        <div className='lg:p-[1vw] sm:p-[4vw]'>
            <h3 className='lg:text-[1.5vw] sm:text-[4vw] text-[#ffff] tracking-[0.1vw]  font-bold'>{title}</h3>
            <p className='lg:text-[0.9vw] sm:text-[3.5vw] text-[#ffff] tracking-[0.02vw] sm:mt-[1vw] '>{description}</p>
        </div>
    </div>
  )
}

export default ProjectCard