import React from "react";
import { withNavigationContext } from "react-awesome-slider/dist/navigation";
import Button from "./Button";
import Image from "next/image";
import PageLayout from "./PageLayout";
import stoneHole from "../assets/images/stone-hole.png";
import HeadingOne from "./HeadingOne";
const About = withNavigationContext(({ fullpage }) => {
  return (
    <section
      style={{
        background: "linear-gradient(180deg, #5A0091 0%, #1D1641 100%)",
      }}
      className="w-[100vw] relative"
    >
      <PageLayout className="flex flex-col lg:flex-row items-center py-4 sm:py-0">
        <div className="lg:flex-1 text-center mb-4 lg:mb-0">
          <Image
            src={stoneHole}
            width={495}
            height={452}
            alt="Picture of Stone"
          />
        </div>
        <div className="flex-1">
          <HeadingOne className="mb-4 lg:mb-8">Dreams come true</HeadingOne>
          <p className="text-[#FBFBFB] text-sm sm:text-base mb-4 lg:mb-6">
            Each person on our planet dreams of something. Metavision breaks
            patterns and makes dreams come true. Complete decentralization and
            freedom of speech, a multifunctional marketplace and a virtual world
            for interaction. Chat with friends and get real income, look for
            investments and promote your projects. Use unlimited functionality
            to make your dreams come true.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <Button className="bg-[#553CDF] ">Demo SocialNet</Button>
            <Button className="border-2 border-[#553CDF] hover:bg-[#553CDF] transition">
              Whitepaper
            </Button>
          </div>
        </div>
      </PageLayout>
    </section>
  );
});

export default About;
