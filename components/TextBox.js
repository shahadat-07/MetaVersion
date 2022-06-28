import Image from "next/image";
import React from "react";

const TextBox = ({ src, text }) => {
  return (
    <div className="flex space-x-4 font-narrow">
      <div className="basis-1/6">
        <Image src={src} alt="icon"></Image>
      </div>
      {/* <Image src={src} alt="icon"></Image> */}

      <div className="basis-5/6">
        <p className="font-medium">{text}</p>
      </div>
    </div>
  );
};

export default TextBox;
