import React from 'react'
import ProjectCard from './ProjectCard'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ProjectCardSlider() {
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
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        // fade: true,
    
    
      };

  return (
    <div className='lg:w-[61vw]    '>
        <Slider {...settings}>

        <ProjectCard title={"Title"} image={"../src/assets/cardimage.jpg"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt quaerat, quae consequatur tempore dolore eveniet itaque eligendi labore molestiae provident blanditiis."}></ProjectCard>
        <ProjectCard title={"Title"} image={"../src/assets/cardimage.jpg"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt quaerat, quae consequatur tempore dolore eveniet itaque eligendi labore molestiae provident blanditiis."}></ProjectCard>
        <ProjectCard title={"Title"} image={"../src/assets/cardimage.jpg"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt quaerat, quae consequatur tempore dolore eveniet itaque eligendi labore molestiae provident blanditiis."}></ProjectCard>
        
        
        </Slider>
    </div>
  )
}

export default ProjectCardSlider