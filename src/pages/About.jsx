import React from "react";

const About = () => {
  return (
    <div>
      <img src="/shortbg.png" className="w-[100%] h-[240px]" />
      <div className="w-[80%] py-8 mx-auto">
        <div className="flex flex-col-reverse md:flex-row justify-between  w-[100%">
          <div className="md:w-[48%] flex flex-col gap-4">
            <p className="text-[#076C05] font-semibold text-2xl">About Us</p>
            <p className="text-[#626262] text-xl">
              At TurningPoint Farm Produce, we're Kenya's premier grower and
              exporter of fresh horticultural products and vegetables. Our
              journey began in 2023, driven by a passion for innovation,
              quality, and sustainability. Join us in bringing farm-fresh
              excellence to your table.
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

      <div className="w-[80%] py-8 mx-auto">
        <div className="flex flex-col-reverse md:flex-row-reverse justify-between  w-[100%">
          <div className="md:w-[48%] flex flex-col gap-4">
            <p className="text-[#076C05] font-semibold text-2xl">Our Mission</p>
            <div className="flex flex-col gap-2">
              <p className="text-[#076C05] font-semibold text-xl">Mission</p>
              <div className="flex gap-2 items-start">
                <img src="/about1.svg" className="w-[54px] h-[54px]" />
                <p className="text-[#626262]">
                  To empower communities, cultivate exceptional fresh produce,
                  and enrich lives globally through sustainable farming
                  practices.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[#076C05] font-semibold text-xl">Vision</p>
              <div className="flex gap-2 items-start">
                <img src="/about2.svg" className="w-[54px] h-[54px]" />
                <p className="text-[#626262]">
                  To be the leading global provider of premium, sustainably
                  grown horticultural products, making a positive impact on
                  communities and the environment.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-[#076C05] font-semibold text-xl">Values</p>
              <div className="flex gap-2 items-start">
                <img src="/about3.svg" className="w-[54px] h-[54px]" />
                <p className="text-[#626262]">
                  Our commitment to quality, safety, community empowerment,
                  customer focus, and sustainability drives everything we do to
                  deliver exceptional products while fostering economic growth,
                  protecting our planet, and exceeding expectations.
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-[48%]">
            <img
              src="/aboutimg.svg"
              className="w-[100%] h-[500px] object-contain"
            />
          </div>
        </div>
      </div>

      <div className="w-[80%] py-8 flex flex-col gap-8 items-center justify-center mx-auto">
        <p className="text-[#076C05] font-semibold text-2xl">Global Reach</p>
        <p className="w-[80%] text-xl mx-auto text-[#626262]">
          Our commitment to quality knows no borders. We export our produce to
          customers around the world, and our global partners trust us for
          consistent excellence.
        </p>

        <img src="/global.png" className="w-[100%] h-[440px] object-cover" />
      </div>
    </div>
  );
};

export default About;
