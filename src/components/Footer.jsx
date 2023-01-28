import React from "react";
import logo2 from "../Assets/logo2.png";
import {
  FaDiscord,
  FaInstagram,
  FaTelegramPlane,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="">
      <div className=" w-full flex items-center justify-center h-full bg-[#920F0F] text-white py-4  gap-[30px]">
        <div className="">
          <img src={logo2} width="55px" height="55px" className="mx-3" alt="" />
        </div>
        <div className="font-bold mr-1 flex gap-6">
          <FaTwitter size={25} />
          <FaInstagram size={25} />
          <FaTelegramPlane size={25} />
        </div>
        <div className="font-bold text-[16px] mr-3">
          <p>&copy; ifẹ, 2022</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
