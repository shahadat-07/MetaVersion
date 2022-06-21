import React from "react";

const HeadingOne = ({ children, className }) => {
  return (
    <h1
      className={`text-[#FBFBFB] text-xl sm:text-2xl md:text-3xl 2xl:text-[40px] font-semibold font-extended ${className}`}
    >
      {children}
    </h1>
  );
};

export default HeadingOne;
