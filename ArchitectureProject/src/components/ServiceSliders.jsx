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
        // fade: true,
    
    
      };
  return (
    <div className=' w-[70vw] '>

        <Slider {...settings}>

            <div className='w-[18vw] h-[18vw]  flex flex-col pr-[0.5vw] ' >
                <img className='h-[3vw] w-[3vw]  mb-[1vw]' src="https://www.free-css.com/assets/files/free-css-templates/preview/page293/fonicy/assets/images/s1.png" alt="" />
                <h3 className='text-[1.3vw] font-bold'>Construction Services</h3>
                <p className='mt-[1vw] text-[1vw] tracking-wide'>fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using L</p>
                <h4 className='mt-[2vw] text-[1vw] font-bold'>Read More</h4>
            </div>
            <div className='w-[18vw] h-[18vw]  flex flex-col  pr-[0.5vw] ' >
                <img className='h-[3vw] w-[3vw]  mb-[1vw]' src="https://www.free-css.com/assets/files/free-css-templates/preview/page293/fonicy/assets/images/s1.png" alt="" />
                <h3 className='text-[1.3vw] font-bold'>Construction Services</h3>
                <p className='mt-[1vw] text-[1vw] tracking-wide'>fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using L</p>
                <h4 className='mt-[2vw] text-[1vw] font-bold'>Read More</h4>
            </div>
            <div className='w-[18vw] h-[18vw]  flex flex-col  pr-[0.5vw] ' >
                <img className='h-[3vw] w-[3vw]  mb-[1vw]' src="https://www.free-css.com/assets/files/free-css-templates/preview/page293/fonicy/assets/images/s1.png" alt="" />
                <h3 className='text-[1.3vw] font-bold'>Construction Services</h3>
                <p className='mt-[1vw] text-[1vw] tracking-wide'>fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using L</p>
                <h4 className='mt-[2vw] text-[1vw] font-bold'>Read More</h4>
            </div>
            <div className='w-[18vw] h-[18vw]  flex flex-col  pr-[0.5vw] ' >
                <img className='h-[3vw] w-[3vw]  mb-[1vw]' src="https://www.free-css.com/assets/files/free-css-templates/preview/page293/fonicy/assets/images/s1.png" alt="" />
                <h3 className='text-[1.3vw] font-bold'>Construction Services</h3>
                <p className='mt-[1vw] text-[1vw] tracking-wide'>fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using L</p>
                <h4 className='mt-[2vw] text-[1vw] font-bold'>Read More</h4>
            </div>
            <div className='w-[18vw] h-[18vw]  flex flex-col  pr-[0.5vw] ' >
                <img className='h-[3vw] w-[3vw]  mb-[1vw]' src="https://www.free-css.com/assets/files/free-css-templates/preview/page293/fonicy/assets/images/s1.png" alt="" />
                <h3 className='text-[1.3vw] font-bold'>Construction Services</h3>
                <p className='mt-[1vw] text-[1vw] tracking-wide'>fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using L</p>
                <h4 className='mt-[2vw] text-[1vw] font-bold'>Read More</h4>
            </div>
        </Slider>
    </div>
  )
}

export default ServiceSliders