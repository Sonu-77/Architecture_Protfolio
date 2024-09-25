import { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";

function Navbar() {
  const [menushow, setMenuShow] = useState(false);
  const [crossmenuIcon, setcrossMenuIcon] = useState("hidden");
  const [menuIcon, setMenuIcon] = useState("flex");

  const activateBg = ({ isActive }) => {
    return {
      // fontWeight: isActive?"bold":"normal",
      backgroundColor: isActive && "#f07b27",
      padding: isActive && "0.3vw",
      borderRadius: isActive && "2vw",
      color: isActive && "#ffff",
      paddingLeft: isActive && "0.5vw",
      paddingRight: isActive && "0.5vw",
    };
  };

  const toogleMenu = () => {
    if (menushow == false) {
      return setMenuShow(true), setcrossMenuIcon("flex"), setMenuIcon("hidden");
    } else {
      return (
        setMenuShow(false), setcrossMenuIcon("hidden"), setMenuIcon("flex")
      );
    }
  };

  return (
    <div className="w-full flex lg:justify-around lg:items-center  lg:gap-[15vw] sm:p-[3vw] lg:p-[0.5vw] sm:justify-between sm:items-center  relative ">
      <div className=" ">
        <img
          className="sm:ml-[2vw] bg-[#f07b27] sm:p-[1vw] rounded-full lg:p-[0.4vw] lg:ml-[0] lg:w-[4vw] lg:h-[4vw] sm:w-[12vw] object-cover"
          src="./src/assets/logo.jpg"
          alt="pic"
        />
      </div>
      <div className="flex justify-between items-center lg:gap-[3vw] lg:text-[1vw] uppercase sm:hidden  lg:flex">
        <NavLink style={activateBg} to={"/"}>
          <h2>Home</h2>
        </NavLink>
        <NavLink style={activateBg} to={"service"}>
          <h2>Services</h2>
        </NavLink>
        <NavLink style={activateBg} to={"about"}>
          <h2>About</h2>
        </NavLink>
        <NavLink style={activateBg} to={"project"}>
          <h2>Project</h2>
        </NavLink>
        <NavLink style={activateBg} to={"testimonial"}>
          <h2>Testimonial</h2>
        </NavLink>
        <NavLink style={activateBg} to={"contact"}>
          <h2>Contact Us</h2>
        </NavLink>
        {/* <NavLink style={activateBg} to={"login"}><h2>Login</h2></NavLink> */}
      </div>
      <div className=" lg:flex">
        <IoMdMenu
          onClick={toogleMenu}
          className={`lg:hidden sm:text-[8vw] sm:mr-[2vw] sm:${menuIcon}  text-[#000000] lg:mr-[0]`}
        />
        <RxCross1
          onClick={toogleMenu}
          className={`lg:hidden sm:${crossmenuIcon} sm:text-[7.5vw] sm:mr-[2vw] lg:mr-[0] absolute right-[2vw] top-[5vw]`}
        />
        {menushow && (
          <div
            onClick={toogleMenu}
            className="absolute sm:right-[0.5vw] sm:top-[18vw]  sm:w-[99vw] text-[#fb8500] z-10 sm:h-[130vw] gap-[5vw] uppercase text-[5vw] flex flex-col justify-center items-center bg-[#023047] rounded-md  "
          >
            <NavLink style={activateBg} to={"/"}>
              <h2>Home</h2>
            </NavLink>
            <NavLink style={activateBg} to={"service"}>
              <h2>Services</h2>
            </NavLink>
            <NavLink style={activateBg} to={"about"}>
              <h2>About</h2>
            </NavLink>
            <NavLink style={activateBg} to={"project"}>
              <h2>Project</h2>
            </NavLink>
            <NavLink style={activateBg} to={"testimonial"}>
              <h2>Testimonial</h2>
            </NavLink>
            <NavLink style={activateBg} to={"contact"}>
              <h2>Contact Us</h2>
            </NavLink>
            <NavLink style={activateBg} to={"login"}>
              <h2>Login</h2>
            </NavLink>
          </div>
        )}
        <button className="lg:w-[8vw] bg-[#f07b27] text-[#ffff] lg:p-[0.5vw] rounded lg:text-[1vw] sm:hidden lg:flex justify-center items-center">
          Get A Quoate
        </button>
      </div>
    </div>
  );
}

export default Navbar;
