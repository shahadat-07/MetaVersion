import Image from "next/image";
import React from "react";
import Link from "next/link";
import conference from "../assets/images/conference.svg";
import tree from "../assets/images/tree.svg";
import t3 from "../assets/images/t3.svg";
import media from "../assets/images/media.svg";
import Button from "./Button";
// bg-[url('/conference.svg')] bg-contain bg-no-repeat bg-center
const Guides = () => {
  return (
    <section className="mt-10">
      <div className="p-4 grid gap-6 md:gap-4 2xl:gap-8 md:grid-cols-4 md:grid-rows-4 max-w-5xl 2xl:max-w-7xl 3xl:max-w-[1800px] h-[70vh] w-screen">
        <div className="md:col-span-3 md:row-span-2 md:grid md:grid-cols-5 gap-6 2xl:gap-8">
          <div className="md:col-span-3 bg-conference rounded-[30px] flex items-end h-[250px] md:h-auto mb-6 md:mb-0">
            <div
              style={{ background: "rgba(0, 0, 0, 0.5)" }}
              className="flex py-1 space-x-4 pl-10 w-full rounded-b-[30px]"
            >
              <p className="text-white font-verdana">Crypto conference</p>
              <div className="relative">
                <Image
                  src={media}
                  alt="Conference Image"
                  width={30}
                  height={30}
                />
              </div>
            </div>
          </div>
          <div className="md:col-span-2 border border-gray-700 rounded-[30px] py-5">
            <div className="bg-tree h-[250px] md:h-[150px] 2xl:h-2/3 3xl:h-[300px]">
              
            </div>
            <p className="text-white text-sm p-3 3xl:text-2xl">
              Accepting cryptocurrency is &quot;a logical step&quot; for the
              company, an executive says, and &quot;separates us from our
              industry peers.&quot;....
            </p>
          </div>
        </div>
        <div className="bg-nft md:col-start-1 md:col-span-3 md:row-start-3 md:row-span-2 rounded-[30px] py-6">
          <div className="max-w-lg ml-10 mt-4 md:mt-10 ">
            <p className="text-white text-xl 3xl:text-4xl mb-4 3xl:mb-6">
              El Salvador buys 21 NFT
            </p>
            <p className="text-white mb-6 3xl:mb-12 3xl:text-2xl">
              {" "}
              Lorem Ipsum lorem ipsumLorem Ipsum lorem ipsumLorem Ipsum lorem
              ipsumLorem Ipsum lorem ipsumLorem Ipsum lorem ipsumLorem Ipsum
              lorem ipsum
            </p>
            <Link href="#">
              <a
                className={`font-extended text-sm md:text-base 3xl:text-2xl text-center font-medium text-[#F2F2F2] py-3 3xl:py-6 px-8 3xl:px-18 rounded-[80px] bg-[#553CDF]`}
              >
                Read more
              </a>
            </Link>
          </div>
        </div>
        <div className="md:row-span-4 text-white border border-gray-700 rounded-[16px] pt-5 pb-12">
          <div className="relative h-48 md:hidden ">
          <Image
            src={t3}
            alt="Conference Image"
            layout="fill"
            // width={400}
            // height={300}
          />
          </div>
          <div className="hidden md:block ">
          <Image
            src={t3}
            alt="Conference Image"

          />
          </div>
          <div className="p-3">
            <h1 className="mb-3 text-lg 3xl:mb-6 3xl:text-3xl">
              NFT LOREM UPSUmNFT LOREM UPSUm
            </h1>
            <p className="text-sm mb-2 3xl:mb-5 3xl:text-2xl">
              Lorem Ipsum lorem ipsumLorem Ipsum lorem ipsum Lorem Ipsum lorem
              ipsum Lorem Ipsum lorem ipsum Lorem Ipsum lorem ipsum Lorem Ipsum
              lorem ipsumLorem Ipsum lorem ipsum Lorem{" "}
            </p>
            <div className="relative h-[20px] w-[20px] 3xl:w-[50px] 3xl:h-[50px]">
              <Image
                src={media}
                alt="Conference Image"
                // width={20}
                // height={20}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guides;
