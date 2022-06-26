import React from "react";

const HeadingOne = ({ children, className }) => {
  return (
    <h1
      className={`text-[#FBFBFB] text-[16px] sm:text-[24px] md:text-[30px] 2xl:text-[35px] 3xl:text-[70px] font-semibold font-extended ${className} `}
    >
      {children}
    </h1>
  );
};

export default HeadingOne;
