import React from "react";
import Container from "./Container";
import {
  FaTwitter,
  FaTelegramPlane,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

import copyRight from "../assets/images/copyright.svg";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 z-[101] w-full bg-[#131A17] py-2 rounded-lg shadow">
      <Container className="flex items-center justify-between h-[8vh] ">
        {" "}
        <div className="flex-1 text-sm text-gray-500">
          <div className="flex space-x-2 items-center mb-1 md:mb-2">
            <Image src={copyRight} alt="Copy Right Icon"></Image>
            <p className="text-white text-xl">2022</p>
          </div>
          <p className="text-[#A6A6A6] text-xs sm:text-sm">
            447 Sutter St 405 PMB 4 San Francisco, CA 96108
          </p>
        </div>
        <div className="flex-1 text-end">
          <div className="flex space-x-1 sm:space-x-2 justify-end text-[#303E56] mb-1 md:mb-2">
            <Link href="#">
              <FaTwitter
                size="25px"
                className="cursor-pointer hover:text-[#A6A6A6] transition-all hover:scale-110"
              />
            </Link>
            <Link href="#">
              <FaTelegramPlane
                size="25px"
                className="cursor-pointer hover:text-[#A6A6A6] transition-all hover:scale-110"
              />
            </Link>
            <Link href="#">
              <FaFacebookF
                size="25px"
                className="cursor-pointer hover:text-[#A6A6A6] transition-all hover:scale-110"
              />
            </Link>
            <Link href="#">
              <FaLinkedinIn
                size="25px"
                className="cursor-pointer hover:text-[#A6A6A6] transition-all hover:scale-110"
              />
            </Link>
          </div>
          <p className="text-[#A6A6A6] text-xs sm:text-sm">
            Phone: +19853043302
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
