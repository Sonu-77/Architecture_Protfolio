import { FaQuoteLeft } from "react-icons/fa";

function TestimonyCard() {
  return (
    <div className="sm:w-[80vw] sm:h-[90vw] pt-[8vw]  relative">
        <div className="absolute sm:-top-[1.5vw] sm:left-[2.8vw] ">
            <img className="sm:h-[20vw] sm:w-[25vw] object-cover rounded-2xl" src="https://img.freepik.com/free-photo/handsome-man-with-shiny-skin-posing_23-2149396129.jpg?uid=R154999407&ga=GA1.1.1461838641.1724084967&semt=ais_hybrid" alt="" />
        </div>
        <div  className="sm:w-[80vw] sm:h-[65vw]  bg-white sm:pt-[15vw]">
          <div className="sm:pl-[2.8vw] sm:pr-[2.8vw] sm:flex sm:items-center sm:justify-between ">
            <div  className="sm:flex sm:flex-col sm:-gap-[1vw]">
              <h3 className="sm:text-[4vw] font-semibold uppercase">Name</h3>
              <h6 className="sm:text-[#f07b27] sm:text-[2.5vw] font-semibold uppercase">Customer</h6>
            </div>
            <FaQuoteLeft className="text-[#f07b27] sm:text-[5vw]" />

          </div>
          <div className="sm:pl-[2.8vw] sm:mt-[2vw] pr-[2.8vw]">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum exercitationem dolores eum odio laborum dignissimos, facilis ea repellendus, voluptas quaerat ut maiores delectus, provident animi fugit at. Amet, quod aliquam?</p>
          </div>
        </div>
    </div>
  )
}

export default TestimonyCard