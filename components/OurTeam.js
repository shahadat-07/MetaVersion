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
          <div className="basis-1/4 flex-1 mt-20 lg:mt-0 ">
            <HeadingOne className="mb-3 md:mb-4 lg:mb-4 lg:leading">
              Our team
            </HeadingOne>
            <div className="text-white mb-6 font-narrow font-medium text-sm lg:text-base 3xl:text-4xl 3xl:leading-[55px]">
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
                text="Max CEO & CTO"
                background="bg-slate-900"
                position="left-[28%] lg:top-[35%] lg:left-[68%]"
                topBackground="bg-member-1"
              />

              <ImageCircle
                text="Max CEO & CTO"
                background="bg-slate-700"
                position="top-[20%] left-[70%] lg:top-[31%] lg:left-[37%] "
                topBackground="bg-member-2"
              />

              <ImageCircle
                text="Max CEO & CTO"
                background="bg-slate-700"
                position="top-[19%] left-[2%] lg:top-[60%] lg:left-[16%] "
                topBackground=" bg-member-3"
              />

              <ImageCircle
                text="Max CEO & CTO"
                background="bg-slate-900"
                position="top-[37%] left-[35%] lg:top-[65%] lg:left-[45%]"
                topBackground="bg-member-4"
              />

              <TextCircle
                text="UX"
                position="left-[30%] top-[14%] lg:top-[18%] lg:left-[40%]"
                circleSize="w-[60px] h-[60px] lg:w-[75px] lg:h-[75px]"
                background="bg-[#8163A8]"
                fontSize="text-[14px] lg:text-[20px]"
              />

              <TextCircle
                text="CoinGecko"
                position=" top-[12%] left-[58%] lg:top-[17%] lg:left-[54%]"
                background="bg-[#C53479]"
              />

              <TextCircle
                text="CoinMar    
                ketCap"
                position="top-[23%] left-[40%] lg:left-[0px] lg:top-[40%]"
                background="bg-[#290A88]"
              />

              <TextCircle
                text="Binance"
                position="top-[8%] left-[2%] lg:top-[35%] lg:left-[17%]"
                background="bg-[#F2C94C]"
              />

              <TextCircle
                text="Coinpaprika"
                position="top-[35%] lg:top-[46%] lg:left-[27%]"
                background="bg-[#C53479]"
                circleSize="w-[100px] h-[100px] lg:w-[130px] lg:h-[130px] 3xl:w-[180px] 3xl:h-[180px]"
              />

              <TextCircle
                text="Poo Coin"
                position="top-[72%] left-[32%]"
                background="bg-[#664E84]"
                circleSize="w-[90px] h-[90px] 3xl:w-[140px] 3xl:h-[140px]"
              />

              <TextCircle
                text="Pinksale"
                position="top-[2%] left-[64%] lg:top-[45%] lg:left-[53%]"
                background="bg-[#5CA1B2] "
                circleSize="w-[75px] h-[75px] 3xl:hidden"
              />

              <TextCircle
                text="Pancake Swap"
                position=" top-[35%] left-[70%] lg:top-[58%] lg:left-[65%]"
                circleSize="w-[90px] h-[90px] 3xl:w-[140px] 3xl:h-[140px]"
                background="bg-[#08A1E3]"
              />

              <TextCircle
                text="DEXT"
                position=" top-[70%] left-[74%]"
                background="bg-[#C53479]"
                circleSize=" w-[90px] h-[90px] 3xl:w-[140px] 3xl:h-[140px]"
                fontSize="text-[16px]"
              />

              <Circle
                text=""
                position="top-[32%] left-[58%] lg:top-[55%] lg:left-[76%] lg:top-[32%] lg:left-[8%]"
                background="bg-[#5CA1B2]"
              />

              <Circle
                text=""
                position="hidden lg:blcok lg:top-[55%] lg:left-[4%]"
                background="bg-[#08A1E3]"
              />

              <Circle
                text=""
                position="hidden lg:block lg:top-[49%] lg:left-[15%]"
                background="bg-[#664E84] "
              />

              <Circle
                text=""
                position="hidden lg:block lg:top-[30%] lg:left-[29%]"
                background="bg-[#C53479] "
              />

              <Circle
                text=""
                position="top-[73%] left-[8%]"
                background="bg-[#F2C94C]  "
              />

              <Circle
                text=""
                position="hidden lg:block top-[63%] left-[33%]"
                background="bg-[#553CDF]  "
              />

              <Circle
                text=""
                position="hidden lg:block lg:top-[55%] lg:left-[45%]"
                background="bg-[#8163A8]   "
              />

              <Circle
                text=""
                position="top-[8%] left-[85%] lg:top-[32%] lg:left-[57%]"
                background="bg-[#553CDF]"
                circleSize="w-[45px] h-[45px] lg:w-[80px] lg:h-[80px] 3xl:w-[130px] 3xl:h-[130px]"
              />

              <Circle
                text=""
                position="top-[30%] left-[25%] lg:top-[60%] lg:left-[57%]"
                background="bg-[#F2C94C]"
                circleSize="w-[45px] h-[45px]  "
              />

              <Circle
                text=""
                position=" hidden lg:block lg:top-[53%] lg:left-[61%]"
                background="bg-[#C53479]"
                circleSize="w-[45px] h-[45px] 3xl:w-[90px] 3xl:h-[90px] "
              />

              <Circle
                text=""
                position="top-[1%] left-[10%] "
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
