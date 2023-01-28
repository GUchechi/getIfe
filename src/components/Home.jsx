import React from "react";
import hero from "../Assets/Hero.jpg";
import { FaInstagram, FaTelegramPlane, FaTwitter } from "react-icons/fa";

const Home = () => {
  return (
    <div className="w-full mx-auto">
      <div className=" relative">
        {/* Overlay */}
        <div className="absolute w-full h-full text-white bg-black/60 flex flex-col">
          <div className="flex flex-col gap-4 lg:gap-[40px] absolute lg:top-[28%] px-7">
            <h1 className="px-4 text-2xl md:text-5xl lg:text-6xl font-bold">
              World's largest AI gift sharing platform
            </h1>
            <h5 className="text-1xl lg:text-4xl sm:text-2xl px-4">
              Share gifts easily and securely using blockchain technology
            </h5>
            <button className="py-2 px-4 w-44">Get Early Access</button>
            <div className="flex gap-5 lg:text-3xl text-1xl">
              <p>Follow us on</p>
              <FaTwitter className="cursor-pointer" size={20} /> <FaTelegramPlane className="cursor-pointer" size={20} />{" "}
              <FaInstagram className="cursor-pointer" size={20} />
            </div>
          </div>
        </div>
        <img src={hero} alt="" />
      </div>
    </div>
  );
};

export default Home;
