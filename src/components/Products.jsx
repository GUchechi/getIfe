import React from "react";
import Rectangle from "../Assets/ss4.png";
import Rectangle66 from "../Assets/Rectangle 66.png";
import Rectangle67 from "../Assets/Rectangle 67.png";

const Products = () => {
  return (
    <div>
      <div className="max-w-[1640px] mx-auto p-4 py-5 grid md:grid-cols-3 gap-6">
        <div className="rounded-xl relative">
          <img
            className="max-h-[200px] md:max-h-[400px] w-full object-cover rounded-xl"
            src={Rectangle}
            alt="/"
          />
        </div>

        <div className="rounded-xl relative">
          <img
            className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
            src={Rectangle66}
            alt="/"
          />
        </div>
        {/* Card */}
        <div className="rounded-xl relative">
          <img
            className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
            src={Rectangle67}
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
