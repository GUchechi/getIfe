import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col bg-[#feefe5] justify-center items-center w-full h-full py-12">
      <div className="flex flex-col justify-center items-center py-12">
        <h2 className="font-bold text-center lg:text-6xl sm:text-4xl text-[48px]">Be among the first to experience ifẹ</h2>
        <p className="text-center text-[20px] mt-4">
          We’ll keep you updated when the product launches
        </p>
      </div>
      <form class="w-full max-w-sm">
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-full-name"
            >
              Full Name
            </label>
          </div>
          <div class="md:w-2/3">
            <input
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-black-700 leading-tight focus:outline-none focus:bg-white"
              id="inline-full-name"
              type="text"
              placeholder="Full Name"
            />
          </div>
        </div>
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              Email
            </label>
          </div>
          <div class="md:w-2/3">
            <input
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"
              id="inline-password"
              type="Email"
              placeholder="Email"
            />
          </div>
        </div>
        <div class="md:flex md:items-center">
          <div class="md:w-1/3"></div>
          <div class="md:w-2/3">
            <button
              class="items-center text-center justify-center shadow-xl bg-[#920F0F] hover:bg[#920F0F] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="button"
            >
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
