import React from "react";
import Vector from "../Assets/Vector.png";
import { FiGift } from "react-icons/fi";
import { FaDrum } from "react-icons/fa";

const Gift = () => {
  return (
    <div className="text-center">
      <div className="max-w-[1240px] mx-auto px-4 py-16">
        {/* Card Container */}
        <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Card */}
          <div className="flex border-[#feefe5] shadow-xl flex-col border rounded-2xl py-12 px-8">
            <div>
              <div className="animate-bounce bg-[#feefe5] inline-flex p-6 shadow-xl  rounded-full">
                <img src={Vector} alt="" width="40" />
              </div>
              <h2 className="text-xl font-bold py-7">
                Send and receive gifts from anyone, anywhere
              </h2>
            </div>
          </div>
          <div className="flex border-[#feefe5] shadow-xl  flex-col border rounded-2xl py-12 px-8">
            <div>
              <div className="animate-bounce bg-[#feefe5] text-[#920F0F] inline-flex p-6 shadow-xl rounded-full">
                <FiGift size={40}/>
              </div>
              <h2 className="text-xl font-bold py-7">
                Redeem gifts in cash or kind
              </h2>
            </div>
          </div>
          <div className="flex border-[#feefe5] shadow-xl  flex-col border rounded-2xl py-12 px-8">
            <div>
              <div className="animate-bounce bg-[#feefe5] inline-flex p-6 shadow-xl text-[#920F0F] rounded-full">
                <FaDrum  size={40}/>
              </div>
              <h2 className="text-xl font-bold py-7">
                Earn money by staking İFẸ tokens
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gift;
