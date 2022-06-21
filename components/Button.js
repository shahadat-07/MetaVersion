import React from "react";
import Link from "next/link";

const Button = ({ children, className }) => {
  return (
    <Link href="#">
      <a
        className={`font-extended text-sm md:text-base text-center font-medium text-[#F2F2F2] py-3 px-8 rounded-[80px] ${className}`}
      >
        {children}
      </a>
    </Link>
  );
};

export default Button;
