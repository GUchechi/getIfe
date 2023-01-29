import React from "react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaTelegramPlane,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="">
      <div className=" w-full flex items-center justify-center h-full bg-[#920F0F] text-white py-4  gap-[30px]">
        <div className="font-bold mr-1 flex gap-6">
          <a
            href="https://twitter.com/GetIfe_?t=p0hcy56HUd4ooW5BYR_Ylw&s=09"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="cursor-pointer" size={25} />
          </a>{" "}
          <a
            href="https://t.me/+N-aOeJghIGliZWM8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTelegramPlane className="cursor-pointer" size={25} />{" "}
          </a>
          <a
            href="https://example.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="cursor-pointer" size={25} />
          </a>
          <a
            href="https://example.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn size={25} />
          </a>
        </div>
        <div className="font-bold text-[16px] mr-3">
          <p>&copy;2023</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
