import React from "react";
import { withNavigationContext } from "react-awesome-slider/dist/navigation";
import PageLayout from "./PageLayout";
import Image from "next/image";
import heroMan from "../assets/images/hero-man.png";
import bgLeft from "../assets/images/hero-bg-left.png";
import bgRight from "../assets/images/hero-bg-right.png";
import Button from "./Button";

const Home = withNavigationContext(({ fullpage }) => {
  return (
    <section className="bg-[#0B0819] w-[100vw] relative">
      <PageLayout className="flex items-center bg-blue-500">
        <div className="flex-2 bg-yellow-500">
          <h1 className="text-white text-[40px] font-semibold font-extended mb-8">
            This is New View - MetaVision. <br />
            New world. New Life. New <br /> opportunities.
          </h1>
          <div className="flex space-x-6">
            <Button className="bg-[#553CDF] ">Join presale</Button>
            <Button className="border-2 border-[#553CDF] hover:bg-[#553CDF] transition">
              MetaVision
            </Button>
          </div>
        </div>
        <div className="hero-right-bg">
          <Image
            src={heroMan}
            width={300}
            height={300}
            alt="Picture of asntronaut"
          />
        </div>
      </PageLayout>
    </section>
  );
});

export default Home;
