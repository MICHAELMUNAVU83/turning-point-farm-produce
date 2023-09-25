import React from "react";
import { Link } from "react-router-dom";
const AboutUs = () => {
  return (
    <div id="about" className="bg-white py-8">
      <div className="w-[80%] mx-auto">
        <div className="flex flex-col-reverse md:flex-row justify-between  w-[100%">
          <div className="md:w-[48%] flex flex-col gap-4">
            <p className="text-[#076C05] font-semibold text-2xl">About Us</p>
            <p className="text-[#626262] text-xl">
              At TurningPoint Farm Produce, we're Kenya's premier grower and
              exporter of fresh horticultural products and vegetables. Our
              journey began in 2023, driven by a passion for innovation,
              quality, and sustainability. Join us in bringing farm-fresh
              excellence to your table.  <Link to="/about" className="text-[#076C05] font-semibold">
                Read More
              </Link>
            </p>
            <p className="text-[#076C05] font-semibold text-2xl">
              Why Choose Us?
            </p>
            <div className="flex flex-col gap-0">
              <div className="md:w-[80%] w-[100%] h-[100px] bg-[#6E9320] py-2  px-4 flex justify-between items-center">
                <div className="flex flex-col text-center justify-center items-center text-white">
                  <p className="text-white font-bold">100k +</p>
                  <p>Farmers joined us</p>
                </div>
                <div className="flex flex-col text-center justify-center items-center text-white">
                  <p className="text-white font-bold">50 +</p>
                  <p>Partners Worldwide</p>
                </div>
                <div className="flex flex-col text-center justify-center items-center text-white">
                  <p className="text-white font-bold">1500</p>
                  <p>Products Sold</p>
                </div>
              </div>
              <div className="md:w-[80%] w-[100%] h-[10px] bg-[#076C05] " />
            </div>
          </div>
          <div className="mf:w-[48%]">
            <img
              src="/about.svg"
              className="w-[100%] h-[500px] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
