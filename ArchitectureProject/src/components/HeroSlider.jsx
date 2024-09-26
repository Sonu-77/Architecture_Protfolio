import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import About from "./About";

function HeroSlider() {
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
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    // fade: true,


  };
  return (
    <div className="lg:w-[40vw] sm:w-[80vw] sm:pl-[2vw]">

    <Slider {...settings}>
      <div className="sm:ml-[4vw] sm:h-[40vw] lg:h-[14vw]">
        <div>
          <h2 className="lg:text-[2.3vw] text-[#FFEF91] sm:text-[5.5vw] font-bold lg:leading-[3vw] sm:leading-[7vw]">
            ARCHITECT <br />
            BUILDER CONSTRUCTION <br />
            SERVICES
          </h2>
        </div>
        <div className="flex  lg:gap-[1vw] sm:gap-[2vw] sm:mt-[7vw] lg:mt-[1.4vw] lg:mb-[10vw] ">
          <button className="lg:text-[1vw] sm:text-[3vw] sm:w-[30vw] lg:w-[10vw] text-[#ffff] bg-[#f07b27] lg:p-[0.4vw] sm:p-[2vw] lg:rounded ">
            <Link to={"contact"}>Contact Us</Link>
          </button>
          <button className="lg:text-[1vw] sm:text-[3vw] sm:w-[30vw] text-[#ffff] lg:w-[10vw] bg-[#000000] sm:p-[2vw] lg:p-[0.4vw] lg:rounded ">
            <Link to={"about"}>About</Link>
          </button>
        </div>
      </div>
      <div className="sm:ml-[4vw] sm:h-[40vw] lg:h-0">
        <div>
          <h2 className="lg:text-[2.3vw] text-[#FFEF91] sm:text-[5.5vw] font-bold lg:leading-[3vw] sm:leading-[7vw]">
            ARCHITECT <br />
            BUILDER CONSTRUCTION <br />
            SERVICES
          </h2>
        </div>
        <div className="flex  lg:gap-[1vw] sm:gap-[2vw] sm:mt-[7vw] lg:mt-[1.4vw] ">
          <button className="lg:text-[1vw] sm:text-[3vw] sm:w-[30vw] lg:w-[10vw] text-[#ffff] bg-[#f07b27] lg:p-[0.4vw] sm:p-[2vw] lg:rounded ">
            <Link to={"contact"}>Contact Us</Link>
          </button>
          <button className="lg:text-[1vw] sm:text-[3vw] sm:w-[30vw] text-[#ffff] lg:w-[10vw] bg-[#000000] sm:p-[2vw] lg:p-[0.4vw] lg:rounded ">
            <Link to={"about"}>About</Link>
          </button>
        </div>
      </div>
      <div className="sm:ml-[4vw] sm:h-[40vw] lg:h-0">
        <div>
          <h2 className="lg:text-[2.3vw] text-[#FFEF91] sm:text-[5.5vw] font-bold lg:leading-[3vw] sm:leading-[7vw]">
            ARCHITECT <br />
            BUILDER CONSTRUCTION <br />
            SERVICES
          </h2>
        </div>
        <div className="flex  lg:gap-[1vw] sm:gap-[2vw] sm:mt-[7vw] lg:mt-[1.4vw] ">
          <button className="lg:text-[1vw] sm:text-[3vw] sm:w-[30vw] lg:w-[10vw] text-[#ffff] bg-[#f07b27] lg:p-[0.4vw] sm:p-[2vw] lg:rounded ">
            <Link to={"contact"}>Contact Us</Link>
          </button>
          <button className="lg:text-[1vw] sm:text-[3vw] sm:w-[30vw] text-[#ffff] lg:w-[10vw] bg-[#000000] sm:p-[2vw] lg:p-[0.4vw] lg:rounded ">
            <Link to={"about"}>About</Link>
          </button>
        </div>
      </div>
      <div className="sm:ml-[4vw] sm:h-[40vw] lg:h-0">
        <div>
          <h2 className="lg:text-[2.3vw] text-[#FFEF91] sm:text-[5.5vw] font-bold lg:leading-[3vw] sm:leading-[7vw]">
            ARCHITECT <br />
            BUILDER CONSTRUCTION <br />
            SERVICES
          </h2>
        </div>
        <div className="flex  lg:gap-[1vw] sm:gap-[2vw] sm:mt-[7vw] lg:mt-[1.4vw] ">
          <button className="lg:text-[1vw] sm:text-[3vw] sm:w-[30vw] lg:w-[10vw] text-[#ffff] bg-[#f07b27] lg:p-[0.4vw] sm:p-[2vw] lg:rounded ">
            <Link to={"contact"}>Contact Us</Link>
          </button>
          <button className="lg:text-[1vw] sm:text-[3vw] sm:w-[30vw] text-[#ffff] lg:w-[10vw] bg-[#000000] sm:p-[2vw] lg:p-[0.4vw] lg:rounded ">
            <Link to={"about"}>About</Link>
          </button>
        </div>
      </div>
      
    </Slider>
    </div>
  );
}

export default HeroSlider;
