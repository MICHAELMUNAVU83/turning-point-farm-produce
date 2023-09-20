import React from "react";
import { BiLogoWhatsapp } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { AiFillMail } from "react-icons/ai";
import { IoIosCall } from "react-icons/io";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#6E9320] py-4">
      <div className="w-[80%] mx-auto flex justify-between ">
        <div className="flex flex-col text-white">
          <p className="text-xl font-semibold">Turning Point</p>
          <p className="w-[232px]">
            Nurturing Nature's Bounty, Delivered to You
          </p>
          <div className="flex gap-2 items-center">
            <a
              href="https://www.facebook.com/turningpointph"
              target="_blank"
              rel="noreferrer"
              className="H-[50px] W-[50px] bg-[#A8D34B]  flex justify-center items-center"
            >
              <FaFacebookF className="text-white text-3xl p-2" />
            </a>
            <a
              href="https://www.facebook.com/turningpointph"
              target="_blank"
              rel="noreferrer"
              className="H-[50px] W-[50px] bg-[#A8D34B]  flex justify-center items-center"
            >
              <BiLogoWhatsapp className="text-white text-3xl p-2" />
            </a>
            <a
              href="https://www.facebook.com/turningpointph"
              target="_blank"
              rel="noreferrer"
              className="H-[50px] W-[50px] bg-[#A8D34B]  flex justify-center items-center"
            >
              <AiOutlineYoutube className="text-white text-3xl p-2" />
            </a>
            <a
              href="https://www.facebook.com/turningpointph"
              target="_blank"
              rel="noreferrer"
              className="H-[50px] W-[50px] bg-[#A8D34B]  flex justify-center items-center"
            >
              <FaTwitter className="text-white text-3xl p-2" />
            </a>
          </div>
        </div>
        <div className="flex gap-2 text-white flex-col">
          <p className="text-xl font-semibold">Contact</p>
          <div className="flex gap-2 items-center">
            <HiLocationMarker className="text-white text-3xl p-2" />
            <p>Mombasa Road , Nairobi Kenya</p>
          </div>
          <div className="flex gap-2 items-center">
            <AiFillMail className="text-white text-3xl p-2" />
            <p>info@turningpointfarmproduce.com</p>
          </div>
          <div className="flex gap-2 items-center">
            <IoIosCall className="text-white text-3xl p-2" />
            <p>+(254) 726-237650</p>
          </div>
        </div>
        <div className="flex gap-2 text-white flex-col">
          <p className="text-xl font-semibold">Quick Links</p>

          <a
            href="#"
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
        </div>
      </div>
      <p className="w-[100%] bg-white h-[2px] my-2"></p>
      <p className="text-center text-white">
        Copyright © 2023 TurningPoint, All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
