import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    <div className="w-[40vw]">

    <Slider {...settings}>
      <div>
        <div>
          <h2 className="text-[2.3vw] font-bold leading-[3vw]">
            ARCHITECT <br />
            BUILDER CONSTRUCTION <br />
            SERVICES
          </h2>
        </div>
        <div className="flex  gap-[1vw] mt-[1.4vw] ">
          <button className="text-[1vw] w-[10vw] text-[#ffff] bg-[#f07b27] p-[0.4vw] rounded ">
            Contact Us
          </button>
          <button className="text-[1vw] text-[#ffff] w-[10vw] bg-[#000000] p-[0.4vw] rounded ">
            About
          </button>
        </div>
      </div>
      <div>
        <div>
          <h2 className="text-[2.3vw] font-bold leading-[3vw]">
            ARCHITECT <br />
            BUILDER CONSTRUCTION <br />
            SERVICES
          </h2>
        </div>
        <div className="flex  gap-[1vw] mt-[1.4vw] ">
          <button className="text-[1vw] w-[10vw] text-[#ffff] bg-[#f07b27] p-[0.4vw] rounded ">
            Contact Us
          </button>
          <button className="text-[1vw] text-[#ffff] w-[10vw] bg-[#000000] p-[0.4vw] rounded ">
            About
          </button>
        </div>
      </div>
      <div>
        <div>
          <h2 className="text-[2.3vw] font-bold leading-[3vw]">
            ARCHITECT <br />
            BUILDER CONSTRUCTION <br />
            SERVICES
          </h2>
        </div>
        <div className="flex  gap-[1vw] mt-[1.4vw] ">
          <button className="text-[1vw] w-[10vw] text-[#ffff] bg-[#f07b27] p-[0.4vw] rounded ">
            Contact Us
          </button>
          <button className="text-[1vw] text-[#ffff] w-[10vw] bg-[#000000] p-[0.4vw] rounded ">
            About
          </button>
        </div>
      </div>
    </Slider>
    </div>
  );
}

export default HeroSlider;
