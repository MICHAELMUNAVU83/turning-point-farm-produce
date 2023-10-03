import React from "react";

const Hero = () => {
  return (
    <div
      id="#home"
      className="w-[100%]   h-[110vh]"
      style={{
        backgroundImage: `url("/homepage background.jpg")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    >
      <div className="h-[100%] w-[100%] bg-black/50 flex flex-col-reverse justify-start md:gap-24 gap-8 items-center ">
        <div className=" w-[90%] mx-auto flex flex-col bg-[#6E9320]   justify-center items-center">
          <div className="p-8 grid md:grid-cols-4 ">
            <div className="flex gap-1 items-start">
              <img
                src="/vector1.svg"
                className="w-[28px] object-contain h-[34px]"
              />
              <div className="flex text-white flex-col gap-1">
                <p className="font-bold text-xl">Quality & Safety</p>
                <p className="text-xs">
                  Delivering highest quality fresh products while ensuring the
                  safety and well-being of our consumers.{" "}
                </p>
              </div>
            </div>
            <div className="flex gap-1 items-start">
              <img
                src="/vector2.svg"
                className="w-[28px] object-contain h-[34px]"
              />
              <div className="flex text-white flex-col gap-1">
                <p className="font-bold text-xl">Community Empowerment</p>
                <p className="text-xs">
                  To foster economic growth and provide opportunities within the
                  communities we serve.
                </p>
              </div>
            </div>
            <div className="flex gap-1 items-start">
              <img
                src="/vector3.svg"
                className="w-[28px] object-contain h-[34px]"
              />
              <div className="flex text-white flex-col gap-1">
                <p className="font-bold text-xl">Customer Focus</p>
                <p className="text-xs">
                  To understand and meet our customer needs by providing
                  exceptional service through meeting their expectations always.
                </p>
              </div>
            </div>
            <div className="flex gap-1 items-start">
              <img
                src="/vector4.svg"
                className="w-[28px] object-contain h-[34px]"
              />
              <div className="flex text-white flex-col gap-1">
                <p className="font-bold text-xl">Sustainability </p>
                <p className="text-xs">
                  We practice sustainable farming methods to minimize our
                  environmental impact, ensuring a healthier planet for future
                  generations.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-white md:text-6xl text-5xl md:w-[50%] w-[80%] font-bold">
            Harvesting Kenya's Finest: TurningPoint Farm Produce
          </p>
          <p className="md:text-4xl text-xl text-white md:w-[50%] w-[80%]  text-center font-semibold">
            Fully insured with a total satisfaction guarantee and amazing
            customer support.
          </p>
          <a
            href="#about"
            className="bg-[#A8D34B] hover:scale-105 transition-all duration-500 ease-in-out  mt-4 text-white p-4 rounded-md"
          >
            Discover More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
