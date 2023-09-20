import React from "react";

const Hero = () => {
  return (
    <div
      id="#home"
      className="w-[100%] flex flex-col-reverse justify-start md:gap-24 gap-8 items-center h-[120vh] md:h-[100vh]"
      style={{
        backgroundImage: `url("/hero.png")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    >
      <div className="md:w-[80%] w-[90%] mx-auto flex flex-col bg-[#6E9320]  justify-center items-center">
        <div className="p-8 grid md:grid-cols-4 ">
          <div className="flex gap-1 items-start">
            <img
              src="/vector1.svg"
              className="w-[28px] object-contain h-[34px]"
            />
            <div className="flex text-white flex-col gap-1">
              <p className="font-bold text-xl">Crop Cultivation</p>
              <p>Planning, planting, nurturing, harvesting, and maintaining.</p>
            </div>
          </div>
          <div className="flex gap-1 items-start">
            <img
              src="/vector2.svg"
              className="w-[28px] object-contain h-[34px]"
            />
            <div className="flex text-white flex-col gap-1">
              <p className="font-bold text-xl">Sustainability</p>
              <p>
                Eco-friendly farming, conservation, and responsible practices.
              </p>
            </div>
          </div>
          <div className="flex gap-1 items-start">
            <img
              src="/vector3.svg"
              className="w-[28px] object-contain h-[34px]"
            />
            <div className="flex text-white flex-col gap-1">
              <p className="font-bold text-xl">Packaging</p>
              <p>Sorting, cleaning, packaging, labeling, quality control.</p>
            </div>
          </div>
          <div className="flex gap-1 items-start">
            <img
              src="/vector4.svg"
              className="w-[28px] object-contain h-[34px]"
            />
            <div className="flex text-white flex-col gap-1">
              <p className="font-bold text-xl">Market Research </p>
              <p>Consumer analysis, market trends, strategic planning.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className="text-white md:text-7xl text-5xl md:w-[50%] w-[80%] font-bold">
          Harvesting Kenya's Finest: TurningPoint Farm Produce
        </p>
        <p className="md:text-4xl text-xl text-white md:w-[50%] w-[80%]  text-center font-semibold">
          Fully insured with a total satisfaction guarantee and amazing customer
          support.
        </p>
        <button className="bg-[#A8D34B] mt-4 text-white p-4 rounded-md">
          Discover More
        </button>
      </div>
    </div>
  );
};

export default Hero;
