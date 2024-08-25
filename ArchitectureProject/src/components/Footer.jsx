import React from 'react'

function Footer() {
  return (
    <div className='bg-[url("https://images.pexels.com/photos/3088778/pexels-photo-3088778.jpeg?auto=compress&cs=tinysrgb&w=800")] sm:mt-[15vw] lg:mt-[2vw] text-[#ffff] bg-cover sm:pt-[7vw] lg:pt-[5vw] sm:w-full sm:h-[130vw] sm:pl-[6vw] lg:pl-[18vw] lg:w-full lg:h-[30vw]'>
        <div>
          <h1 className='text-[#f07b27] sm:text-[7vw] lg:text-[2vw] font-black'>Architecture Website</h1>
          <h3 className='sm:text-[6vw] lg:text-[2vw] capitalize font-semibold'>Subscribe to our blog</h3>
        </div>
        <div className='sm:mt-[4vw] sm:text-[4.5vw] lg:text-[1vw] lg:mt-[1.5vw] sm:tracking-[0.3vw] lg:tracking-[0.2vw]'>
          <h4>Pick the blog you want to receive.</h4>
        </div>
        <form action="">
          <div className='sm:flex sm:flex-col lg:flex lg:flex-row sm:gap-[4vw] lg:gap-[2vw] sm:mt-[4vw] lg:mt-[1vw] sm:text-[4vw] lg:text-[1.5vw] sm:ml-[7vw] lg:ml-0 font-bold'>
            <div className='sm:flex lg:gap-[1vw] sm:gap-[4vw] sm:items-center'>
              <label htmlFor="Business">Business</label>
              <input  type="checkbox" name="Business" id='Business'  />
            </div>
            <div className='sm:flex lg:gap-[1vw] sm:gap-[4vw] sm:items-center'>
              <label htmlFor="Sales">Sales</label>
              <input type="checkbox" name="Sales" id='Sales'  />
            </div>
            <div className='sm:flex lg:gap-[1vw] sm:gap-[4vw] sm:items-center'>
              <label htmlFor="Services">Services</label>
              <input type="checkbox" name="Services" id='Services'  />
            </div>
            <div className='sm:flex lg:gap-[1vw] sm:gap-[4vw] sm:items-center'>
              <label htmlFor="Website">Website</label>
              <input type="checkbox" name="Website" id='Website'  />
            </div>
            <div className='sm:flex lg:gap-[1vw] sm:gap-[4vw] sm:items-center'>
              <label htmlFor="AI">AI</label>
              <input type="checkbox" name="AI" id='AI'  />
            </div>
          </div>
          <div className='sm:mt-[5vw] lg:mt-[1vw] lg:ml-0 sm:flex sm:flex-col sm:gap-[2vw] lg:gap-[0.5vw] lg:relative'>
            <label className='font-semibold sm:tracking-[0.8vw] lg:tracking-[0.2vw]' htmlFor="email">Email Address</label>
            <input className='sm:w-[70vw] lg:w-[20vw] lg:h-[2vw] sm:h-[7vw] outline-dashed text-[#000000] sm:pl-[2vw] lg:pl-[1vw] ' type="email" name="email" id="email" required />
            <button className=' sm:w-[30vw] lg:w-[10vw] lg:h-[2vw] lg:mt-0 sm:h-[8vw] lg:absolute lg:top-[2vw] font-extrabold bg-[#f07b27] uppercase sm:ml-[21vw] sm:mt-[2vw] ' type='submit'>Subscribe</button>
          </div>
        </form>
        

    </div>
  )
}

export default Footer