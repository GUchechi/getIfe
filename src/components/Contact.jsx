import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_489hglo",
        "template_cekz6ec",
        form.current,
        "n-7vRxXnjRzFDNYcL"
      )
      .then(
        (result) => {
          alert("Thank you, We will get back to you shortly");
          window.location.reload(false);
        },
        (error) => {
          alert("Failed to Send Message, please try again.");
        }
      );
    e.target.reset();
  };

  return (
    <div
      name="contact"
      className="flex flex-col bg-[#FEEFE5] justify-center items-center w-full h-full py-12"
    >
      <div className="flex flex-col justify-center items-center px-6 py-12">
        <h2 className="font-bold text-center lg:text-6xl sm:text-4xl text-[48px]">
          Be among the first to experience ifẹ
        </h2>
        <p className="text-center text-[20px] mt-4">
          We’ll keep you updated when the product launches
        </p>
      </div>
      <form ref={form} onSubmit={sendEmail} className="w-full px-6 max-w-sm">
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              Name
            </label> 
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-black-700 leading-tight focus:outline-none focus:bg-white"
              id="inline-full-name"
              type="text"
              placeholder="Name"
              name="user_name"
              required
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              Email
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"
              id="inline-password"
              type="Email"
              placeholder="Email"
              required
              name="user_email"
            />
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3 flex items-center justify-center">
            <button
              className="items-center text-center justify-center shadow-xl bg-[#920F0F] hover:bg[#920F0F] focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded-full"
              type="submit"
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
