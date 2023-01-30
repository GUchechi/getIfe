import React from "react";
import alert from '../Assets/alert.png'

const Alert = () => {
  return (
    <div className="flex items-center justify-center">
      <div
        className="bg-[#FEEFE5] w-[40%] text-black-700 gap-3 px-4 py-5 text-center shadow flex flex-col items-center justify-center rounded relative"
        role="alert"
      >
      <img src={alert} className='items-center w-[13rem]'  alt="" />
        <h1 className="text-[25px] font-bold" >Welcome aboard!</h1>
        <p className="text-[15px] w-[90%]">We’ll send an invite to you when the product launches</p>

        <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
          <svg
            class="fill-current h-6 w-6 text-[#920F0F]"
            role="button"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <title>Close</title>
            <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default Alert;
