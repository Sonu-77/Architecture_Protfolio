import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonyCard from './TestimonyCard'

function TestimonySlider() {
  
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
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    // fade: true,
    responsive: [
      {
          breakpoint: 1024, // 1024px and below
          settings: {
              slidesToShow: 1,
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


  };

  return (
    <div className='lg:w-[70vw]  sm:w-[90vw] lg:pl-[10vw]  sm:pl-[8vw]'>
      <Slider {...settings}>
        <TestimonyCard></TestimonyCard>
        <TestimonyCard></TestimonyCard>
      </Slider>
        
    </div>
  )
}

export default TestimonySlider