
import TestimonySlider from "./TestimonySlider"
function Testimony() {
  return (
    <div className='lg:w-full sm:w-[100vw] lg:h-[40vw] sm:h-[150vw] lg:mt-[6vw] sm:mt-[20vw] sm:bg-cover lg:bg-cover  lg:flex sm:flex sm:flex-col lg:flex-col  sm:items-center lg:items-center ' style={{backgroundImage: `url('https://img.freepik.com/free-vector/gradient-hexagonal-background_23-2148944164.jpg?size=626&ext=jpg&ga=GA1.1.1461838641.1724084967&semt=ais_hybrid')` }} >
      <div className='sm:mt-[15vw] lg:mt-[4vw] sm:mb-[10vw] lg:mb-[3vw]'>
        <h3 className='sm:text-[7vw] lg:text-[2vw] sm:text-[#ffff] uppercase font-bold '>Testimonial</h3>
      </div>
      <div className='sm:w-[100%] sm:h-[90vw] lg:w-full lg:h-[25vw]  sm:flex sm:justify-center sm:items-center '>
        

        <TestimonySlider></TestimonySlider>
        
        
      </div>
    </div>
  )
}

export default Testimony