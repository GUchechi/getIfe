import React from "react";
import hero from "../Assets/Hero.jpg";
import { FaInstagram, FaTelegramPlane, FaTwitter } from "react-icons/fa";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div className="w-full mx-auto">
      <div className=" relative">
        {/* Overlay */}
        <div className="absolute w-full h-full text-white bg-black/60 flex flex-col">
          <div className=" flex text-center items-center lg:text-start lg:items-start flex-col top-14 gap-6 lg:gap-[50px] absolute lg:top-[28%] lg:ml-[70px]">
            <h1 className="px-4 text-[30px] md:text-5xl lg:text-7xl font-bold">
              World's largest AI gift sharing platform
            </h1>
            <h5 className="text-1xl lg:text-4xl sm:text-2xl px-4">
              Share gifts easily and securely using blockchain technology
            </h5>
            <button className=" py-2 px-4 w-44">Get Early Access</button>
            <div className="flex gap-6 lg:text-2xl text-1xl">
              <p>Follow us on</p>
              <FaTwitter className="cursor-pointer" size={25} />{" "}
              <FaTelegramPlane className="cursor-pointer" size={25} />{" "}
              <FaInstagram className="cursor-pointer" size={25} />
            </div>
          </div>
        </div>
        <img src={hero} className='h-[400px] lg:h-full' alt="" />
      </div>
    </div>
  );
};

export default Home;
