import Image from "next/image";
import React from "react";

const TextBox = ({ src, text }) => {
  return (
    <div className="flex space-x-4 items-center font-narrow">
      <Image src={src} alt="icon"></Image>
      <p className="font-medium">{text}</p>
    </div>
  );
};

export default TextBox;
