import React from "react";

const ContactUs = () => {
  return (
    <div id="contact" className="py-8 w-[100%]">
      <p className="text-center text-[#076C05] text-4xl font-bold  ">
        Contact Us
      </p>
      <div className="w-[80%]  mx-auto">
        <div className="w-[100%] flex md:flex-row flex-col items-center justify-between">
          <div className="md:w-[48%] ">
            <img
              src="/contact.svg"
              className="w-[100%] h-[548px] object-contain"
            />
          </div>
          <div className="md:w-[48%] flex flex-col gap-4">
            <form className="w-[100%] flex flex-col gap-4">
              <div className="w-[100%] flex flex-col justify-center items-center">
                <p className="text-[#076C05] text-2xl  my-3 font-bold ">
                  Get in Touch
                </p>
                <div className="w-[100%] flex flex-col  gap-6">
                  <div className="w-[100%] flex justify-between items-center">
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-[48%] h-[40px] border-0 bg-[#DFDFDF] text-[#626262]  focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder-[#626262] py-2 px-4"
                    />
                    <input
                      type="text"
                      placeholder="Email"
                      className="w-[48%] h-[40px] border-0 bg-[#DFDFDF] text-[#626262]  focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder-[#626262] py-2 px-4"
                    />
                  </div>
                  <div className="w-[100%] flex justify-between items-center">
                    <input
                      type="text"
                      placeholder="Phone Number"
                      className="w-[48%] h-[40px] border-0 bg-[#DFDFDF] text-[#626262]  focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder-[#626262] py-2 px-4"
                    />
                    <input
                      type="text"
                      placeholder="Subject"
                      className="w-[48%] h-[40px] border-0 bg-[#DFDFDF] text-[#626262]  focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder-[#626262] py-2 px-4"
                    />
                  </div>

                  <textarea
                    type="text"
                    placeholder="Message"
                    className="w-[100%] h-[90px] border-0 bg-[#DFDFDF] text-[#626262]  focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder-[#626262] py-2 px-4"
                  />
                </div>
                <div className="w-[100%] mt-8">
                  <button className="bg-[#1FBF1C] px-6 py-2 text-white hover:scale-105 transition-all ease-in-out duration-500 cursor-pointer">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
