import React from "react";
import { withNavigationContext } from "react-awesome-slider/dist/navigation";
import PageLayout from "./PageLayout";
import Image from "next/image";
import heroMan from "../assets/images/hero-man.png";
// import bgLeft from "../assets/images/hero-bg-left.png";
// import bgRight from "../assets/images/hero-bg-right.png";
import Button from "./Button";
import HeadingOne from "./HeadingOne";

const Home = withNavigationContext(({ fullpage }) => {
  return (
    <section className="bg-[#0B0819] w-[100vw] h-[88vh] md:h-[82vh] relative">
    <div style={{
      backgroundImage: `url('/hero-bg-right.png')`,
      width: '100%',
      height: '100%',
      backgroundRepeat: "no-repeat",
      backgroundSize: 'contain',
      backgroundPosition: '310px 70px'
}}>
    <img src="/hero-bg-left.png" alt="Bg" className="absolute w-[15%] -top-8 left-0" />
    <img src="/image 3.svg" alt="Bg" className="absolute w-[5%] top-10 left-[7%]" />
      <div className="flex container mx-auto px-20 3xl:px-0 w-[100vw] h-[88vh] md:h-[82vh]">
       
        <div className="flex-2 h-full relative">
         <div className=" flex flex-col justify-center h-full">
         <HeadingOne className="mb-8">
            This is New View - MetaVision. <br />
            New world. New Life. New <br /> opportunities.
          </HeadingOne>
          <div className="flex space-x-6">
            <Button className="bg-[#553CDF] ">Join presale</Button>
            <Button className="border-2 border-[#553CDF] hover:bg-[#553CDF] transition">
              MetaVision
            </Button>
          </div>
         </div>
        </div>
        <div className="flex-1">
         <div className=" flex items-end h-full justify-center">
         <Image
            src={heroMan}
            width={400}
            height={400}
            alt="Picture of asntronaut"
          />
         </div>
        </div>
        {/* <img src="/hero-bg-right.png" alt="k" className="absolute" /> */}
      </div>
    </div>
    </section>
  );
});

export default Home;
