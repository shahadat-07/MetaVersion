import React from "react";
import Container from "./Container";
import {
  FaTwitter,
  FaTelegramPlane,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="fixed bottom-0 left-0 z-[101] w-full bg-[#131A17] h-[10vh]">
      <Container>
        <div className="flex justify-between items-center bg-red-500">
          <div className="">
            <p>2022</p>
            <p>447 Sutter St 405 PMB 4 San Francisco, CA 96108</p>
          </div>
          <div>
            <div className="flex">
              <FaTwitter />
              <FaTelegramPlane />
              <FaFacebookF />
              <FaLinkedinIn />
            </div>
            <p>Phone: +19853043302</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
