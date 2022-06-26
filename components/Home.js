/* eslint-disable @next/next/no-img-element */
import React from "react";
import { withNavigationContext } from "react-awesome-slider/dist/navigation";
import PageLayout from "./PageLayout";
import Image from "next/image";
import heroMan from "../assets/images/hero-man.png";
import Button from "./Button";
import HeadingOne from "./HeadingOne";

const Home = withNavigationContext(({ fullpage }) => {
  return (
    <section className="bg-[#0B0819] w-[100vw] h-[95vh] relative">
      <div className="home-bg">
        <img
          src="/hero-bg-left.png"
          alt="Bg"
          className="absolute w-[15%] -top-8 left-0"
        />
        <img
          src="/image 3.svg"
          alt="Bg"
          className="absolute w-[5%] top-10 left-[7%]"
        />
        <PageLayout className="flex flex-col lg:flex-row">
          <div className="flex-2 h-full relative order-2 lg:order-none">
            <div className="flex flex-col lg:justify-center h-full">
              <HeadingOne className="text-center lg:text-start mb-4 lg:mb-8">
                This is New View - MetaVision. <br />
                New world. New Life. New <br /> opportunities.
              </HeadingOne>
              <div className="flex flex-col justify-center lg:justify-start md:flex-row space-y-4 md:space-y-0 md:space-x-6">
                <Button className="bg-[#553CDF] ">Join presale</Button>
                <Button className="border-2 border-[#553CDF] hover:bg-[#553CDF] transition">
                  MetaVision
                </Button>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-end 3xl:items-center h-full mt-8 lg:mt-0 justify-center">
            <div className="hidden lg:block" ><Image src={heroMan} alt="Picture of asntronaut" /></div>
            <div className="h-52 md:h-80 w-52 md:w-80 relative lg:hidden">
              <Image
                src={heroMan}
                alt="Picture of asntronaut"
                layout="fill" // required
              />
            </div>

              {/* <Image
                src={heroMan}
                // width={400}
                // height={400}
                // sizes="320 640 750"
                alt="Picture of asntronaut"
              /> */}
            </div>
          </div>
          {/* <img src="/hero-bg-right.png" alt="k" className="absolute" /> */}
        </PageLayout>
      </div>
    </section>
  );
});

export default Home;
