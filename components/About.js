import React from "react";
import { withNavigationContext } from "react-awesome-slider/dist/navigation";
import Button from "./Button";
import Image from "next/image";
import PageLayout from "./PageLayout";
import stoneHole from "../assets/images/stone-hole.png";
// linear-gradient(180deg, #5A0091 0%, #1D1641 100%)
const About = withNavigationContext(({ fullpage }) => {
  return (
    <section className="bg-[#0B0819] w-[100vw] relative">
      <PageLayout className="flex items-center">
        <div className="flex-1">
          <Image src={stoneHole} alt="Picture of asntronaut" />
        </div>
        <div className="flex-1">
          <h1 className="text-[#FBFBFB] text-[40px] font-semibold font-extended mb-8">
            Dreams come true
          </h1>
          <p className="text-[#FBFBFB] mb-6">
            Each person on our planet dreams of something. Metavision breaks
            patterns and makes dreams come true. Complete decentralization and
            freedom of speech, a multifunctional marketplace and a virtual world
            for interaction. Chat with friends and get real income, look for
            investments and promote your projects. Use unlimited functionality
            to make your dreams come true.
          </p>
          <div className="flex space-x-6">
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
