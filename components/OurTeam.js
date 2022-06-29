import React from "react";
import { withNavigationContext } from "react-awesome-slider/dist/navigation";
import HeadingOne from "./HeadingOne";
import PageLayout from "./PageLayout";
import { TextCircle, Circle, ImageCircle } from "./CircleProvider";

const OurTeam = withNavigationContext(({ fullpage }) => {
  return (
    <section
      style={{
        background: "linear-gradient(150.23deg, #9A0059 1.85%, #160B8F 100%)",
      }}
      className="bg-[#0B0819] w-[100vw] relative"
    >
      <div className="our-team-bg ">
        <PageLayout className="flex flex-col lg:flex-row items-center">
          <div className="basis-1/4 flex-1 mt-16">
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
          <div className="basis-3/4 w-full flex-2 lg:px-10 text-center">
            <div className="relative h-screen">
              <ImageCircle
                text="23 Max CEO & CTO"
                background="bg-slate-900"
                position="top-[10%] left-[30%] lg:top-[35%] lg:left-[68%]"
                topBackground=" bg-member-1"
              />

              <ImageCircle
                text="9 Max CEO & CTO"
                background="bg-slate-700"
                position="top-[27%] left-[63%] lg:top-[31%] lg:left-[37%] "
                topBackground=" bg-member-2"
              />

              <ImageCircle
                text="10 Max CEO & CTO"
                background="bg-slate-700"
                position="top-[22%] left-[3%] lg:top-[60%] lg:left-[16%] "
                topBackground=" bg-member-3"
              />

              <ImageCircle
                text="23 Max CEO & CTO"
                background="bg-slate-900"
                position="top-[40%] left-[35%] lg:top-[65%] lg:left-[45%]"
                topBackground=" bg-member-4"
              />

              <TextCircle
                text="UX 1"
                position=" left-[30%]  lg:top-[18%] lg:left-[40%]"
                circleSize="w-[75px] h-[75px]"
                background="bg-[#8163A8]"
                fontSize="text-[16px] lg:text-[20px]"
              />

              <TextCircle
                text="CoinGecko 2"
                position=" top-[42%] left-[70%] lg:top-[17%] lg:left-[54%]"
                background="bg-[#C53479]"
              />

              <TextCircle
                text="  CoinMar    
                ketCap 4"
                position="top-[24%] left-[37%] lg:left-[0px] lg:top-[40%]"
                background="bg-[#290A88]"
              />

              <TextCircle
                text="6 Binance"
                position="top-[10%] left-[3%] lg:top-[35%] lg:left-[17%]"
                background="bg-[#F2C94C]"
              />

              <TextCircle
                text="Coinpaprika"
                position=" top-[13%] left-[62%] lg:top-[46%] lg:left-[27%]"
                background="bg-[#C53479]"
                circleSize="w-[110px] h-[110px] lg:w-[130px] lg:h-[130px] 3xl:w-[180px] 3xl:h-[180px]"
              />

              <TextCircle
                text="12 Poo Coin"
                position="top-[72%] left-[32%]"
                background="bg-[#664E84]"
                circleSize="w-[90px] h-[90px] 3xl:w-[140px] 3xl:h-[140px]"
              />

              <TextCircle
                text="Pinksale 15"
                position="top-[3%] left-[60%] lg:top-[45%] lg:left-[53%]"
                background="bg-[#5CA1B2] "
                circleSize="w-[75px] h-[75px] 3xl:hidden"
              />

              <TextCircle
                text="20 Pancake Swap"
                position="top-[37%] left-[5%] lg:top-[58%] lg:left-[65%]"
                circleSize="w-[90px] h-[90px] 3xl:w-[140px] 3xl:h-[140px]"
                background="bg-[#08A1E3]"
              />

              <TextCircle
                text="21 DEXT"
                position=" top-[70%] left-[74%]"
                background="bg-[#C53479]"
                circleSize=" w-[90px] h-[90px] 3xl:w-[140px] 3xl:h-[140px]"
                fontSize="text-[16px]"
              />

              <Circle
                text="3"
                position=" top-[53%] left-[60%] lg:top-[55%] lg:left-[76%] lg:top-[32%] lg:left-[8%]"
                background="bg-[#5CA1B2]"
              />

              <Circle
                text="5"
                position="hidden lg:blcok lg:top-[55%] lg:left-[4%]"
                background="bg-[#08A1E3]"
              />

              <Circle
                text="7"
                position="hidden lg:block lg:top-[49%] lg:left-[15%]"
                background="bg-[#664E84] "
              />

              <Circle
                text="8"
                position="hidden lg:block lg:top-[30%] lg:left-[29%]"
                background="bg-[#C53479] "
              />

              <Circle
                text="11"
                position="top-[73%] left-[8%]"
                background="bg-[#F2C94C]  "
              />

              <Circle
                text="13"
                position="hidden lg:block top-[63%] left-[33%]"
                background="bg-[#553CDF]  "
              />

              <Circle
                text="14"
                position="hidden lg:block lg:top-[55%] lg:left-[45%]"
                background="bg-[#8163A8]   "
              />

              <Circle
                text="16"
                position="top-[8%] left-[85%] lg:top-[32%] lg:left-[57%]"
                background="bg-[#553CDF]"
                circleSize="w-[45px] h-[45px] lg:w-[80px] lg:h-[80px] 3xl:w-[130px] 3xl:h-[130px]"
              />

              <Circle
                text="18"
                position="top-[34%] left-[35%] lg:top-[60%] lg:left-[57%]"
                background="bg-[#F2C94C]"
                circleSize="w-[45px] h-[45px]  "
              />

              <Circle
                text="19"
                position=" top-[50%] left-[15%] lg:top-[53%] lg:left-[61%]"
                background="bg-[#C53479]"
                circleSize="w-[45px] h-[45px] 3xl:w-[90px] 3xl:h-[90px] "
              />

              <Circle
                text="22"
                position="top-[3%] left-[8%] "
                background="bg-[#C53479]"
                circleSize="w-[45px] h-[45px]  "
              />
            </div>
          </div>
        </PageLayout>
      </div>
    </section>
  );
});

export default OurTeam;
