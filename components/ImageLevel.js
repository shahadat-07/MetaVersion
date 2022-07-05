import Image from "next/image";
import React from "react";
import trianlgeDown from "../assets/images/triangle-down.svg";
import trianlgeUp from "../assets/images/triangle-up.svg";
import giftBox from "../assets/images/gift-box.svg";

const ImageLevel = ({
  position = "",
  src,
  width = "90",
  height = "90",
  boolean,
}) => {
  return (
    <div className={`z-[10000]`}>
      <Image src={src} alt="Level Image" width={width} height={height} />
      <div
        className={`${
          boolean ? "block" : "hidden"
        } absolute top-0 transform translate-y-[110%] -z-[100] translate-x-[11%]`}
      >
        <div className="relative">
          <Image
            src={trianlgeDown}
            alt="Level Image"
            width={100}
            height={100}
          />
        </div>
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2">
          <Image src={giftBox} alt="Gift Box" width={50} height={50} />
        </div>
      </div>
      <div
        className={`${
          boolean ? "block" : "hidden"
        } absolute top-0 transform -translate-y-[37%] -z-[100] -translate-x-[62%]`}
      >
        <div className="relative">
          <Image
            src={trianlgeUp}
            alt="Level Image"
            width={100}
            height={100}
          />
        </div>
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-[120%]">
          <p className="text-[#B149C4] font-extended text-xs"> 1500 </p>
          <div className="bg-[#B149C4] rounded-full w-2 h-2 mx-auto mt-2"> </div>
        </div>
      </div>
    </div>
  );
};

export default ImageLevel;
