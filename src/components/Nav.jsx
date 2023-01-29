import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../Assets/logo.png";

const Nav = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const handleClose = () => setNav(!nav);

  return (
    <div className="w-screen h-[70px] z-10 bg-white fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center cursor-pointer">
          <img src={logo} alt="logo" className="md:cursor-pointer h-9" />
        </div>
        <div className="hidden md:flex pr-4">
          <button className="text-white px-3 py-3">Get Early Access</button>
        </div>
        <div className="md:hidden mr-4" onClick={handleClick}>
          {!nav ? (
            <FiMenu className="w-5" />
          ) : (
            <AiOutlineClose className="w-5" />
          )}
        </div>
      </div>

      <ul
        className={!nav ? "hidden" : "absolute bg-white w-full px-8 md:hidden"}
      >
        <div className="flex flex-col my-4">
          <Link  onClick={handleClose}
            to="contact"
            smooth={true}
            offset={-50}
            duration={500}>
            <button className="text-white px-3 py-3">Get Early Access</button>
          </Link>
        </div>
      </ul>
    </div>
  );
};

export default Nav;
