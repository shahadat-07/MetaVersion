/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import trianlgeDown from "../assets/images/triangle-down.svg";
import trianlgeUp from "../assets/images/triangle-up.svg";
import giftBox from "../assets/images/gift-box.svg";

const ImageLevel = (props) => {
  // console.log(props.score)
  const { level, imgSource, score } = props.level;
  let size = "w-[85px] h-[85px]";
  if (level == props.score) {
    size = "w-[130px] h-[130px]";
  }
  const scoreLevel = props.score;

  return (
    <div className={`z-[10000]`}>
      <div className={`relative ${size}`}>
        <Image src={imgSource} alt="Level Image" layout="fill" />
      </div>
      <div
        className={`${
          level == scoreLevel ? "block" : "hidden"
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
      </div>
    </div>
    );
};

export default ImageLevel;
