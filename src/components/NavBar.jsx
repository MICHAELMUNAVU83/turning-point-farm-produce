import React, { useState } from "react";
import { HiLocationMarker } from "react-icons/hi";
import { AiFillMail } from "react-icons/ai";
import { IoIosCall } from "react-icons/io";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const toggleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="w-[100%] z-10  bg-white">
      <div className="md:w-[80%] mx-auto md:flex hidden justify-between ">
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
          <p>+254114285301</p>
        </div>
      </div>
      <p className="bg-[rgb(146,122,122)] h-[1px] w-[100%]" />
      <div className="py-4 md:w-[80%] w-[95%]  flex justify-between mx-auto">
        <Link
          to="/"
          className="text-[#065804] flex gap-2 items-center font-semibold text-2xl"
        >
          <img src="/Logo Colored.svg" alt="logo" className="w-12" />
          Turning Point
        </Link>

        <div className="gap-4 md:flex hidden  items-center">
          <Link
            to="/#home"
            className="hover:text-[#076C05] transition-all ease-in-out duration-500 cursor-pointer "
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-[#076C05] transition-all ease-in-out duration-500 cursor-pointer "
          >
            About Us
          </Link>
          <Link
            to="/#products"
            className="hover:text-[#076C05] transition-all ease-in-out duration-500 cursor-pointer "
          >
            Products
          </Link>
          <Link
            to="/#contact"
            className="hover:text-[#076C05] transition-all ease-in-out duration-500 cursor-pointer "
          >
            Contact Us
          </Link>
          <button className="bg-[#6E9320] rounded-md text-white p-2">
            Get Started
          </button>
        </div>
        <AiOutlineMenu className="text-4xl md:hidden" onClick={toggleNav} />
      </div>
      <div
        className={
          nav
            ? "sm:hidden absolute top-0 right-0 left-0 bottom-0 flex justify-center items-center  w-full h-screen bg-white text-black text-center duration-300 ease-in-out"
            : "sm:hidden absolute top-0 right-0 left-[-100%] bottom-0 flex justify-center items-center w-full h-screen bg-white  text-black text-center duration-300 ease-in-out"
        }
      >
        <p className="absolute top-4 right-4">
          <AiOutlineClose className="text-4xl" onClick={toggleNav} />
        </p>
        <ul onClick={toggleNav} className="flex flex-col text-2xl gap-8">
          <Link
            to="/"
            className="hover:text-[#076C05] transition-all ease-in-out duration-500 cursor-pointer "
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-[#076C05] transition-all ease-in-out duration-500 cursor-pointer "
          >
            About Us
          </Link>
          <Link
            href="/#products"
            className="hover:text-[#076C05] transition-all ease-in-out duration-500 cursor-pointer "
          >
            Products
          </Link>
          <Link
            to="/#contact"
            className="hover:text-[#076C05] transition-all ease-in-out duration-500 cursor-pointer "
          >
            Contact Us
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
