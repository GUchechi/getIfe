import React from "react";
import {
  FaDiscord,
  FaInstagram,
  FaTelegramPlane,
  FaTwitter,
} from "react-icons/fa";
import hero from "../Assets/Hero.jpg";

const Hero = () => {
  return (
    <> 
      <div className="w-full">
        <img src={hero} alt="Hero" className="w-full h-[450px] lg:h-full object-cover" />
        <div className="max-w-[1140px] m-auto">
          <div className="absolute top-[22%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4">
            <h1 className="font-bold lg:text-6xl sm:text-4xl text-2xl">World's largest AI gift sharing platform</h1>
            <p className="text-1xl lg:text-2xl sm:text-2xl py-11">
              {" "}
              Share gifts easily and securely using blockchain technology.
            </p>
            <button className="py-2 px-4 w-44">Get Early Access</button>
            <div className="flex mt-12 gap-5 text-1xl">
              <p>Follow us on</p>
              <FaTwitter /> <FaTelegramPlane /> <FaInstagram />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
