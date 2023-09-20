import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import { AiFillMail } from "react-icons/ai";
import { IoIosCall } from "react-icons/io";

const NavBar = () => {
  return (
    <div className="w-[100%] bg-white">
      <div className="w-[80%] mx-auto flex justify-between ">
        <div className="w-[50%] flex  items-center gap-2 border-r-[1px] border-[#927A7A]">
          {" "}
          <HiLocationMarker className="text-[#6E9320]" />
          <p>Mombasa Road , Nairobi Kenya</p>
        </div>
        <div className="w-[30%] flex gap-2 items-center border-r-[1px] px-2 border-[#927A7A]">
          <AiFillMail className="text-[#6E9320]" />
          <p>info@turningpointfarmproduce.com</p>
        </div>
        <div className="w-[20%] flex gap-2  items-center px-2">
          <IoIosCall className="text-[#6E9320]" />
          <p>+(254) 726-237650</p>
        </div>
      </div>
      <p className="bg-[rgb(146,122,122)] h-[1px] w-[100%]" />
      <div className="py-4 w-[80%] flex justify-between mx-auto">
        <p className="text-[#065804] font-semibold text-2xl">Turning Point</p>

        <div className="gap-4 flex items-center">
          <a
            href="#home"
            className="hover:text-[#076C05] transition-all ease-in-out duration-500 cursor-pointer "
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:text-[#076C05] transition-all ease-in-out duration-500 cursor-pointer "
          >
            About Us
          </a>
          <a
            href="#products"
            className="hover:text-[#076C05] transition-all ease-in-out duration-500 cursor-pointer "
          >
            Products
          </a>
          <a
            href="#contact"
            className="hover:text-[#076C05] transition-all ease-in-out duration-500 cursor-pointer "
          >
            Contact Us
          </a>
          <button className="bg-[#6E9320] rounded-md text-white p-2">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
