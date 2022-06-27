import React from "react";
import { withNavigationContext } from "react-awesome-slider/dist/navigation";
import HeadingOne from "./HeadingOne";
import PageLayout from "./PageLayout";
const OurTeam = withNavigationContext(({ fullpage }) => {
  return (
    <section
      style={{
        background: "linear-gradient(150.23deg, #9A0059 1.85%, #160B8F 100%)",
      }}
      className="bg-[#0B0819] w-[100vw] relative"
    >
      <div className="our-team-bg">
        <PageLayout className="flex items-center ">
          <div className="basis-1/4">
            <HeadingOne className="mb-3 md:mb-4 lg:mb-8 lg:leading">
              Our team
            </HeadingOne>
            <div className="text-white mb-6 font-narrow font-medium text-sm lg:text-lg 3xl:text-4xl 3xl:leading-[55px]">
              <p>
                - Buy, sell and look for new partners in the NFT marketplace of
                the future{" "}
              </p>
              <p>- Share your emotions and ideas in NFT format</p>
              <p>
                {" "}
                - Use NFTs from our collection to become unique and increase
                your income.
              </p>
            </div>
          </div>
          <div className="basis-3/4 pl-8">
            <div className="relative h-screen"> 
              <div className="absolute bg-[#5CA1B2] w-[60px] h-[60px] rounded-full top-[32%] left-[8%]" > </div>
              <div className="absolute bg-[#290A88] w-[100px] h-[100px] rounded-full top-[40%] text-[12px] text-white font-extended font-semibold flex justify-center items-center" >CoinMar<br/>ketCap</div>
              <div className="absolute bg-[#08A1E3] w-[90px] h-[90px] rounded-full top-[55%] left-[3%]" > </div>
              <div className="absolute bg-[#C53479] w-[100px] h-[100px] rounded-full" > </div>
              <div className="absolute bg-[#C53479] w-[100px] h-[100px] rounded-full" > </div>
              <div className="absolute bg-[#C53479] w-[100px] h-[100px] rounded-full" > </div>
              <div className="absolute bg-[#C53479] w-[100px] h-[100px] rounded-full" > </div>
              <div className="absolute bg-[#C53479] w-[100px] h-[100px] rounded-full" > </div>
              <div className="absolute bg-[#C53479] w-[100px] h-[100px] rounded-full" > </div>
              <div className="absolute bg-[#C53479] w-[100px] h-[100px] rounded-full" > </div>
              <div className="absolute bg-[#C53479] w-[100px] h-[100px] rounded-full" > </div>
              <div className="absolute bg-[#C53479] w-[100px] h-[100px] rounded-full" > </div>
              <div className="absolute bg-[#C53479] w-[100px] h-[100px] rounded-full" > </div>
              <div className="absolute bg-[#C53479] w-[100px] h-[100px] rounded-full" > </div>
              <div className="absolute bg-[#C53479] w-[100px] h-[100px] rounded-full" > </div>
              <div className="absolute bg-[#C53479] w-[100px] h-[100px] rounded-full" > </div>
              <div className="absolute bg-[#C53479] w-[100px] h-[100px] rounded-full" > </div>
              <div className="absolute bg-[#C53479] w-[100px] h-[100px] rounded-full" > </div>
              <div className="absolute bg-[#C53479] w-[100px] h-[100px] rounded-full" > </div>
              <div className="absolute bg-[#C53479] w-[100px] h-[100px] rounded-full" > </div>
              <div className="absolute bg-[#C53479] w-[100px] h-[100px] rounded-full" > </div>
              <div className="absolute bg-[#C53479] w-[100px] h-[100px] rounded-full" > </div>
              <div className="absolute bg-[#C53479] w-[100px] h-[100px] rounded-full" > </div>
              <div className="absolute bg-[#C53479] w-[100px] h-[100px] rounded-full" > </div>
              <div className="absolute bg-[#C53479] w-[100px] h-[100px] rounded-full" > </div>
            </div>
          </div>
        </PageLayout>
      </div>
    </section>
  );
});

export default OurTeam;
