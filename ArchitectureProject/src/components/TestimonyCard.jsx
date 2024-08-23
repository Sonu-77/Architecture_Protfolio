import { FaQuoteLeft } from "react-icons/fa";

function TestimonyCard() {
  return (
    <div className="sm:w-[80vw] lg:w-[60vw] lg:h-[15vw] sm:h-[95vw] sm:pt-[8vw] lg:pt-[0] relative">
        <div className="absolute sm: top-[0.5vw] lg:top-[1vw]  sm:left-[2.8vw] lg:left-[0.5vw] ">
            <img className="sm:h-[20vw] lg:h-[6vw] lg:w-[6vw] sm:w-[25vw] object-cover rounded-2xl" src="https://img.freepik.com/free-photo/handsome-man-with-shiny-skin-posing_23-2149396129.jpg?uid=R154999407&ga=GA1.1.1461838641.1724084967&semt=ais_hybrid" alt="" />
        </div>
        <div  className="sm:w-[80vw] lg:w-[50vw] lg:h-full sm:h-[75vw]  bg-[#ffff] lg:ml-[4vw] sm:pt-[15vw] lg:pt-0">
          <div className="sm:pl-[2.8vw] lg:pl-[4vw] sm:pr-[2.8vw] lg:pt-[2vw] lg:mb-[1vw]  sm:flex sm:items-center sm:justify-between ">
            <div  className="sm:flex sm:flex-col sm:-gap-[1vw] lg:gap-[0]">
              <h3 className="sm:text-[4vw] font-semibold uppercase lg:text-[1.3vw]">Name</h3>
              <h6 className="sm:text-[#f07b27] sm:text-[2.5vw] lg:text-[0.9vw] font-semibold uppercase">Customer</h6>
            </div>
            <FaQuoteLeft className="text-[#f07b27] lg:text-[1.2vw] sm:text-[5vw]" />

          </div>
          <div className="sm:pl-[2.8vw] lg:pl-[4vw] lg:text-[0.9vw] sm:text-[4vw] lg:mt-[2vw] sm:mt-[2vw] lg:pr-[2vw] sm:pr-[2.8vw]">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum exercitationem dolores eum odio laborum dignissimos, facilis ea repellendus, voluptas quaerat ut maiores delectus, provident animi fugit at. Amet, quod aliquam?</p>
          </div>
        </div>
    </div>
  )
}

export default TestimonyCard