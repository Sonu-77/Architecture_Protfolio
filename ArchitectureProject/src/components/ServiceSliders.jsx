import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function ServiceSliders() {
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "none"}}
            onClick={onClick}
          />
        );
      }
      
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "none" }}
            onClick={onClick}
          />
        );
      }
      
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
              breakpoint: 1024, // 1024px and below
              settings: {
                  slidesToShow: 4,
                  slidesToScroll: 1,
              }
          },
          {
              breakpoint: 768, // 768px and below
              settings: {
                  slidesToShow: 1, // Show 2 slides on medium screens
                  slidesToScroll: 1,
              }
          },
          {
              breakpoint: 300, // 480px and below
              settings: {
                  slidesToShow: 1, // Show 1 slide on small screens
                  slidesToScroll: 1,
              }
          }
      ]
        // fade: true,
    
    
      };
  return (
    <div className='lg:w-[70vw] sm:w-[100%] lg:mt-0 sm:mt-[5vw]'>

        <Slider {...settings}>

            <div className='lg:w-[18vw] lg:h-[18vw]  flex flex-col lg:pr-[0.5vw] ' >
                <img className='lg:h-[3vw] sm:h-[16vw] lg:w-[3vw] sm:w-[16vw] sm:mb-[5vw] lg:mb-[1vw]' src="https://www.free-css.com/assets/files/free-css-templates/preview/page293/fonicy/assets/images/s1.png" alt="" />
                <h3 className='lg:text-[1.3vw] sm:text-[4vw] font-bold'>Construction Services</h3>
                <p className='lg:mt-[1vw] sm:mt-[3vw] sm:text-[3.5vw] lg:text-[1vw] tracking-wide'>fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using L</p>
                <h4 className='lg:mt-[2vw] sm:mt-[4vw] lg:text-[1vw] sm:text-[3vw] font-bold hover:text-[#f07b27] sm:mb-[4vw]'><a href="#">Read More</a> </h4>
            </div>
            <div className='lg:w-[18vw] lg:h-[18vw]  flex flex-col lg:pr-[0.5vw] ' >
                <img className='lg:h-[3vw] sm:h-[16vw] lg:w-[3vw] sm:w-[16vw] sm:mb-[5vw] lg:mb-[1vw]' src="https://www.free-css.com/assets/files/free-css-templates/preview/page293/fonicy/assets/images/s1.png" alt="" />
                <h3 className='lg:text-[1.3vw] sm:text-[4vw] font-bold'>Construction Services</h3>
                <p className='lg:mt-[1vw] sm:mt-[3vw] sm:text-[3.5vw] lg:text-[1vw] tracking-wide'>fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using L</p>
                <h4 className='lg:mt-[2vw] sm:mt-[4vw] lg:text-[1vw] sm:text-[3vw] font-bold hover:text-[#f07b27] sm:mb-[4vw]'><a href="#">Read More</a> </h4>
            </div>
            <div className='lg:w-[18vw] lg:h-[18vw]  flex flex-col lg:pr-[0.5vw] ' >
                <img className='lg:h-[3vw] sm:h-[16vw] lg:w-[3vw] sm:w-[16vw] sm:mb-[5vw] lg:mb-[1vw]' src="https://www.free-css.com/assets/files/free-css-templates/preview/page293/fonicy/assets/images/s1.png" alt="" />
                <h3 className='lg:text-[1.3vw] sm:text-[4vw] font-bold'>Construction Services</h3>
                <p className='lg:mt-[1vw] sm:mt-[3vw] sm:text-[3.5vw] lg:text-[1vw] tracking-wide'>fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using L</p>
                <h4 className='lg:mt-[2vw] sm:mt-[4vw] lg:text-[1vw] sm:text-[3vw] font-bold hover:text-[#f07b27] sm:mb-[4vw]'><a href="#">Read More</a> </h4>
            </div>
            <div className='lg:w-[18vw] lg:h-[18vw]  flex flex-col lg:pr-[0.5vw] ' >
                <img className='lg:h-[3vw] sm:h-[16vw] lg:w-[3vw] sm:w-[16vw] sm:mb-[5vw] lg:mb-[1vw]' src="https://www.free-css.com/assets/files/free-css-templates/preview/page293/fonicy/assets/images/s1.png" alt="" />
                <h3 className='lg:text-[1.3vw] sm:text-[4vw] font-bold'>Construction Services</h3>
                <p className='lg:mt-[1vw] sm:mt-[3vw] sm:text-[3.5vw] lg:text-[1vw] tracking-wide'>fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using L</p>
                <h4 className='lg:mt-[2vw] sm:mt-[4vw] lg:text-[1vw] sm:text-[3vw] font-bold hover:text-[#f07b27] sm:mb-[4vw]'><a href="#">Read More</a> </h4>
            </div>
            
        </Slider>
    </div>
  )
}

export default ServiceSliders