import Image from "next/image";
import React from "react";
import userImg from "../assets/images/Mask group.svg";
import grayLogo from "../assets/images/gray-logo.svg";
import iLogo from "../assets/images/i.svg";
import border from "../assets/images/border-b.svg";
import ImageLevel from "./ImageLevel";
import LevelOne from "../assets/images/level-one.svg"
import LevelTwo from "../assets/images/level-two.svg"
import LevelThree from "../assets/images/level-three.svg"
import LevelFour from "../assets/images/level-four.svg"
import LevelFive from "../assets/images/level-five.svg"
import LevelSix from "../assets/images/level-six.svg"
import LevelSeven from "../assets/images/level-seven.svg"
import LevelEight from "../assets/images/level-eight.svg"
import LevelNine from "../assets/images/level-nine.svg"
import LevelTen from "../assets/images/level-ten.svg"
// linear-gradient(180deg, #5200FF 0%, rgba(0, 0, 0, 0.92) 100%)
const DashHome = () => {
  return (
    <section className="h-[65vh] w-screen mt-20 overflow-y-scroll md:overflow-hidden">
      <div className="relative flex justify-center items-center">
        <div className="flex flex-col md:flex-row justify-between items-center w-[550px] p-4 border-b border-[#553CDF]">
          <div className="flex space-x-8 items-center">
            <div className="bg-frame">
              <div className="relative mt-2 h-24 w-28 overflow-clip">
                <Image src={userImg} alt="User Image" layout="fill" />
              </div>
            </div>
            <h1 className="text-white font-extended text-2xl leading-9">
              Nick <br /> Alison{" "}
            </h1>
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-white font-medium text-2xl leading-9">
              Your Balance{" "}
            </h1>
            <div className="flex items-center space-x-4">
              <h1 className="text-white font-medium text-2xl">
                5.85{" "}
              </h1>
              <div className="relative">
                <Image src={grayLogo} alt="Logo" width={40} height={40} />
                <div className="absolute top-1 -right-5">
                  <Image src={iLogo} alt="Logo" width={18} height={18} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="absolute top-[20%] left-[33%]">
        <Image src={border}  alt="Logo" width={550} />
      </div> */}

      <div className="relative mt-32 flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-7">
        <ImageLevel src={LevelOne} />
        <ImageLevel src={LevelTwo}  width="125px" height="125px" boolean="true"/>
        <ImageLevel src={LevelThree} />
        <ImageLevel src={LevelFour} />
        <ImageLevel src={LevelFive} />
        <ImageLevel src={LevelSix} />
        <ImageLevel src={LevelSeven} />
        <ImageLevel src={LevelEight} />
        <ImageLevel src={LevelNine} />
        <ImageLevel src={LevelTen} />
        <div style = {{
          background: 'linear-gradient(180deg, #5200FF 0%, rgba(0, 0, 0, 0.92) 100%)',
        }} className="rotate-90 md:rotate-0 w-[92%] h-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"> </div>
      </div>

    </section>
  );
};

export default DashHome;
