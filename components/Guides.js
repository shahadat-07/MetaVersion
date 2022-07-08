import Image from "next/image";
import React from "react";
import Link from "next/link";
import conference from "../assets/images/conference.svg";
import tree from "../assets/images/tree.svg";
import t3 from "../assets/images/t3.svg";
import media from "../assets/images/media.svg";
import Button from "./Button";

const Guides = () => {
  return (
    <section className="mt-10 3xl:mt-20">
      <div className="p-4 grid gap-6 md:gap-6 2xl:gap-8 md:grid-cols-4 md:grid-rows-4 max-w-5xl 2xl:max-w-7xl 3xl:max-w-[1800px] h-[70vh] w-screen">
        <div className="md:col-span-3 md:row-span-2 md:grid md:grid-cols-5 gap-6 2xl:gap-8">
          <div className="md:col-span-3 bg-conference rounded-[30px] flex items-end h-[250px] md:h-auto mb-6 md:mb-0">
            <div
              style={{ background: "rgba(0, 0, 0, 0.5)" }}
              className="flex py-1 space-x-4 pl-10 w-full rounded-b-[30px]"
            >
              <p className="text-white">Crypto conference</p>
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
          <div className="md:col-span-2 border border-gray-700 rounded-[30px] py-5 md:py-0 3xl:py-5">
            <div className="bg-tree h-[250px] md:h-[140px] 3xl:h-[250px]">
            </div>
            <p className="text-white text-[13px] p-2 3xl:text-xl">
              Accepting cryptocurrency is &quot;a logical step&quot; for the
              company, an executive says, and &quot;separates us from our
              industry peers.&quot;....
            </p>
          </div>
        </div>
        <div className="bg-nft md:col-start-1 md:col-span-3 md:row-start-3 md:row-span-2 rounded-[30px] py-6">
          <div className="max-w-lg ml-10 mt-2 2xl:mt-10 ">
            <p className="text-white mb-2 lg:text-xl 3xl:text-4xl 3xl:mb-6">
              El Salvador buys 21 NFT
            </p>
            <p className="text-white text-[15px] mb-6 3xl:mb-12 3xl:text-xl">
              {" "}
              Lorem Ipsum lorem ipsumLorem Ipsum lorem ipsumLorem Ipsum lorem
              ipsumLorem Ipsum lorem ipsumLorem Ipsum lorem ipsumLorem Ipsum
              lorem ipsum
            </p>
            <Link href="#">
              <a
                className={`font-extended text-sm 2xl:text-base 3xl:text-xl text-center font-medium text-[#F2F2F2] py-2.5 3xl:py-4 px-6 3xl:px-12 rounded-[80px] bg-[#553CDF]`}
              >
                Read more
              </a>
            </Link>
          </div>
        </div>
        <div className="md:row-span-4 text-white border border-gray-700 rounded-[16px] py-5 md:py-0">
          <div className="relative h-48 md:hidden">
          <Image
            src={t3}
            alt="Conference Image"
            layout="fill"
          />
          </div>
          <div className="hidden md:block text-center 3xl:py-5">
          <Image
            src={t3}
            alt="T3 Image"
          />
          </div>
          <div className="p-3">
            <h1 className="mb-3 3xl:mb-6 3xl:text-2xl">
              NFT LOREM UPSUmNFT LOREM UPSUm
            </h1>
            <p className="text-[13px] mb-2 3xl:mb-5 3xl:text-xl">
              Lorem Ipsum lorem ipsum Lorem Ipsum lorem ipsum Lorem Ipsum lorem
              ipsum Lorem Ipsum lorem ipsum Lorem Ipsum lorem  Ipsum lorem{" "}
            </p>
            <div className="relative h-[20px] w-[20px] 3xl:w-[50px] 3xl:h-[50px]">
              <Image
                src={media}
                alt="Media Image"
              />
            </div>
          </div>
        </div>
        <div className="bg-yellow-500 h-14 w-14 opacity-0 md:hidden"> </div>
      </div>
    </section>
  );
};

export default Guides;
