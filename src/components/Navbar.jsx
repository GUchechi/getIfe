import React, { useState } from "react";
import logo from "../Assets/logo.png";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(!open);
  return (
    <nav className="bg-white px-3 ">
      <div className="flex items-center font-medium justify-between">
        <div className="z-50 p-3 lg:p-5 md:w-auto w-full flex justify-between">
          <img src={logo} alt="logo" className="md:cursor-pointer h-9" />
          <div
            className="text-3xl cursor-pointer text-[#920F0F] md:hidden"
            onClick={() => setOpen(!open)}
          >
            <ion-icon
              className=""
              name={`${open ? "close" : "menu"}`}
            ></ion-icon>
          </div>
        </div>

        <div className="md:block cursor-pointer hidden">
          <Link to="contact" smooth={true} duration={500}>
            <button className="text-white px-3 py-3">Get Early Access</button>
          </Link>
        </div>
        {/* Mobile nav */}
        <ul
          className={`
        md:hidden z-40 bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%] "}
        `}
        >
          <div className="py-5">
            <Link to="contact" smooth={true} duration={500} onClick={handleClose}>
              <button className="text-white px-3 py-3">Get Early Access</button>
            </Link>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
