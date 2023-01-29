import React from "react";
import Iframe from "./Iframe";

const Contact = () => {

  return (
    <div
      name="contact"
      className="flex flex-col bg-[#FEEFE5] justify-center items-center w-full h-full"
    >
      <div className="flex flex-col justify-center items-center px-6 py-10 lg:py-12">
        <h2 className="font-bold text-center lg:text-6xl sm:text-4xl text-[48px]">
          Be among the first to experience ifẹ
        </h2>
        <p className="text-center lg:text-3xl text-[20px] mt-4">
          We’ll keep you updated when the product launches
        </p>
      </div>
      <Iframe/>
    </div>
  );
};

export default Contact;
