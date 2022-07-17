/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import trianlgeDown from "../assets/images/triangle-down.svg";
import trianlgeUp from "../assets/images/triangle-up.svg";
import giftBox from "../assets/images/gift-box.svg";
import GiftBox from "./GiftBox";
import { useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import iLogo from "../assets/images/i.svg";
import { Fragment } from "react";
import Button from "./Button";

const ImageLevel = (props) => {
  const Info = () => {
    return (
      <Menu as="div" className="relative inline-block text-left z-50">
        <div>
          <Menu.Button className="inline-flex justify-center items-center bg-transparent">
            <Image src={giftBox} alt="Logo" width={60} height={60} />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute -top-[250px] left-[200px] mt-2 w-[190px] h-[100px] z-50">
            <div className="px-1 py-1 ">
              <Menu.Item>{() => <GiftBox />}</Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    );
  };

  let [isOpen, setIsOpen] = useState(true);

  // console.log(props.score)
  const { level, imgSource, score } = props.level;
  let size = "w-[85px] h-[85px]";
  if (level == props.score) {
    size = "w-[130px] h-[130px]";
  }
  const scoreLevel = props.score;

  return (
    <>
    <div className="z-10">
      <div className={`relative ${size}`}>
        <Image src={imgSource} alt="Level Image" layout="fill" />
      </div>
      <div
        className={`${
          level == scoreLevel ? "block" : "hidden"
        } absolute top-0 transform translate-y-[110%] -z-10 translate-x-[11%]`}
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
    <div className="absolute top-[150px] left-[175px]">
       <Info />
     </div>
    </>
  );
};

export default ImageLevel;
