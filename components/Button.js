import React from "react";
import Link from "next/link";

const Button = ({ children, className }) => {
  return (
    <Link href="#">
      <a
        className={`font-extended text-sm md:text-base 3xl:text-4xl text-center font-medium text-[#F2F2F2] py-3 3xl:py-10 px-8 3xl:px-28 rounded-[80px] ${className}`}
      >
        {children}
      </a>
    </Link>
  );
};

export default Button;
