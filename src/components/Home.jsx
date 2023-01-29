import React from "react";
import hero from "../Assets/Hero.jpg";
import {
  FaInstagram,
  FaLinkedinIn,
  FaTelegramPlane,
  FaTwitter,
} from "react-icons/fa";

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
                href="https://www.instagram.com/invites/contact/?i=58dvljrve89u&utm_content=jdf2w0y"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="cursor-pointer" size={25} />
              </a>
              <a
                href="https://www.linkedin.com/company/getife-com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn className="cursor-pointer" size={25} />
              </a>
            </div>
          </div>
        </div>
        <img src={hero} className="h-[400px] lg:h-full" alt="" />
      </div>
    </div>
  );
};

export default Home;
