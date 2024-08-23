import React from 'react'
import ProjectCard from './ProjectCard'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ProjectCardSlider({card}) {
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
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 3000,
        // pauseOnHover: true,
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
    <div className='lg:w-[61vw] sm:w-[90vw]'>
        <Slider {...settings}>
          {card.map((item)=>{
            return(
              <ProjectCard key={item.id} title={item.title} image={item.image} description={item.description}/>
            )
          })}
        </Slider>
    </div>
  )
}

export default ProjectCardSlider