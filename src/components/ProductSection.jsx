import React from "react";
import Rectangle from "../Assets/Rectangle 65.png";
import Rectangle66 from "../Assets/Rectangle 66.png";
import Rectangle67 from "../Assets/Rectangle 67.png";

const ProductSection = () => {
  return (
    <section className="bg-[#920F0F] text-white lg:py-[3rem] py-0 px-1">
      <div className="max-w-[1640px] mx-auto p-4 py-5 grid md:grid-cols-3 px-12 gap-6 ">
        <div className="rounded-xl relative">
          <img
            className="max-h-[200px] md:max-h-[400px] w-full object-cover rounded-xl"
            src={Rectangle}
            alt="/"
          />
        </div>

        <div className="rounded-xl relative">
          <img
            className="max-h-[200px] md:max-h-[400px] w-full object-cover rounded-xl"
            src={Rectangle66}
            alt="/"
          />
        </div>

        <div className="rounded-xl relative">
          <img
            className="max-h-[200px] md:max-h-[400px] w-full object-cover rounded-xl"
            src={Rectangle67}
            alt="/"
          />
        </div>
      </div>

      <p className="px-6 text-xl lg:text-2xl text-center">
        ifẹ uses artificial intelligence to analyse the interests, lifestyle and
        preferences of both the giver and the recipients so that you can be sure
        that you are giving and receiving the perfect gift.
      </p>
    </section>
  );
};

export default ProductSection;
