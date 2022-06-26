import React from "react";
import { withNavigationContext } from "react-awesome-slider/dist/navigation";
import Button from "./Button";
import Image from "next/image";
import PageLayout from "./PageLayout";
import stoneHole from "../assets/images/stone-hole.png";
import HeadingOne from "./HeadingOne";
const Socialize2Earn = withNavigationContext(({ fullpage }) => {
  return (
    <section
      style={{
        background: "linear-gradient(180deg, #5A0091 0%, #1D1641 100%)",
      }}
      className="w-[100vw] relative"
    >
      <div
        style={{
          backgroundImage: `url('/VISION.svg')`,

          backgroundRepeat: "no-repeat",
          backgroundSize: "70%",
          backgroundPosition: "right 70px",
        }}
      >
        <PageLayout className="flex flex-col lg:flex-row items-center py-2 sm:py-0 ">
          <div className="lg:flex-1 text-center mb-3 lg:mb-0">
            {/* sizes="320 440 750"  */}
            <Image src={stoneHole} alt="Picture of Stone" />
            {/* <div className="h-96 3xl:h-[700px] w-[400px] 3xl:w-[700px] relative">
              <Image
                src={stoneHole}
                alt="Picture of the author"
                layout="fill" // required
                // objectFit="cover"
                className=""
              />
            </div> */}
          </div>
          <div className="flex-1">
            <HeadingOne className="mb-3 md:mb-4 lg:mb-8 3xl:mb-12">
              Dreams come true
            </HeadingOne>
            <p className="text-[#FBFBFB] text-sm sm:text-lg 3xl:text-4xl 3xl:leading-[55px] font-narrow mb-4 lg:mb-6 3xl:mb-16">
              Each person on our planet dreams of something. Metavision breaks
              patterns and makes dreams come true. Complete decentralization and
              freedom of speech, a multifunctional marketplace and a virtual
              world for interaction. Chat with friends and get real income, look
              for investments and promote your projects. Use unlimited
              functionality to make your dreams come true.
            </p>
            <div className="flex flex-col sm:flex-row 3xl:flex-col sm:space-x-6 3xl:space-x-0 space-y-4 sm:space-y-0 3xl:space-y-10 ">
              <Button className="bg-[#553CDF] ">Demo SocialNet</Button>
              <Button className="border-2 border-[#553CDF] hover:bg-[#553CDF] transition">
                Whitepaper
              </Button>
            </div>
          </div>
        </PageLayout>
      </div>
    </section>
  );
});

export default Socialize2Earn;
