import React from "react";
import { withNavigationContext } from "react-awesome-slider/dist/navigation";
import HeadingOne from "./HeadingOne";
import PageLayout from "./PageLayout";
// import member1 from "../assets/images/member-1.svg"
// import member2 from "../assets/images/member-2.svg"
// import member3 from "../assets/images/member-3.svg"
// import member4 from "../assets/images/member-4.svg"
import Image from "next/image";
const OurTeam = withNavigationContext(({ fullpage }) => {

  return (
    <section
      style={{
        background: "linear-gradient(150.23deg, #9A0059 1.85%, #160B8F 100%)",
      }}
      className="bg-[#0B0819] w-[100vw] relative"
    >
      <div className="our-team-bg ">
        <PageLayout className="flex items-center">
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
          <div className="basis-3/4 text-center">
            <div className="relative h-screen " > 
              <div className="absolute hover:animate-ping bg-[#5CA1B2] w-[60px] h-[60px] rounded-full top-[32%] left-[8%]" > </div>

              <div className="absolute hover:animate-ping bg-[#290A88] w-[100px] h-[100px] rounded-full top-[40%] text-[12px] text-white font-extended font-semibold flex justify-center items-center" >CoinMar<br/>ketCap</div>

              <div className="absolute hover:animate-ping bg-[#08A1E3] w-[90px] h-[90px] rounded-full top-[55%] left-[4%]" > </div>

              <div className="absolute hover:animate-ping bg-[#F2C94C] w-[100px] h-[100px] rounded-full top-[35%] left-[17%] text-[12px] text-white font-extended font-semibold flex justify-center items-center" > Binance </div>

              <div className="absolute hover:animate-ping bg-[#664E84] w-[60px] h-[60px] rounded-full top-[49%] left-[15%]" > </div>

              <div className="absolute hover:animate-ping bg-[#C53479] w-[60px] h-[60px] rounded-full top-[30%] left-[29%]" > </div>

              <div className="absolute z-[1000]  hover:animate-bounce bg-member-1 w-[130px] h-[130px] rounded-full top-[31%] left-[37%] cursor-pointer" > 
                <div className="relative hover:bg-orange-300 transition duration-300 opacity-0 hover:opacity-100 w-[130px] h-[130px] rounded-full">
                    <p className=" absolute top-1/2 text-center transform -translate-y-1/2 font-extended text-white font-semibold text-[12px]"> Max CEO & CTO  </p>
                </div>
               </div>

              <div className="absolute hover:animate-ping bg-[#C53479] w-[130px] h-[130px] rounded-full top-[46%] left-[27%] text-[12px] text-white font-extended font-semibold flex justify-center items-center" > Coinpaprika </div>
              <div className="absolute z-[1000] hover:animate-bounce bg-member-3 w-[130px] h-[130px] rounded-full top-[60%] left-[16%] cursor-pointer" > 
                <div className="relative  hover:bg-slate-700 transition duration-300 opacity-0 hover:opacity-100 w-[130px] h-[130px] rounded-full">
                    <p className=" absolute top-1/2 text-center transform -translate-y-1/2 font-extended text-white font-semibold text-[12px]"> Max CEO & CTO  </p>
                </div>
               </div>
              <div className="absolute hover:animate-ping bg-[#F2C94C] w-[60px] h-[60px] rounded-full top-[73%] left-[8%]" > </div>

              <div className="absolute hover:animate-ping bg-[#664E84] w-[90px] h-[90px] rounded-full top-[72%] left-[32%] text-[12px] text-white font-extended font-semibold flex justify-center items-center" > Poo Coin </div>

              <div className="absolute hover:animate-ping bg-[#553CDF] w-[60px] h-[60px] rounded-full top-[63%] left-[33%]" > </div>

              <div className="absolute hover:animate-ping bg-[#8163A8] w-[60px] h-[60px] rounded-full top-[55%] left-[45%]" > </div>

              <div className="absolute hover:animate-ping bg-[#5CA1B2] w-[75px] h-[75px] rounded-full top-[45%] left-[53%] text-[12px] text-white font-extended font-semibold flex justify-center items-center" > 
                Pinksale
              </div>

              <div className="absolute hover:animate-ping bg-[#553CDF] w-[80px] h-[80px] rounded-full top-[32%] left-[57%]" > </div>

              <div className="absolute hover:animate-ping bg-[#C53479] w-[100px] h-[100px] rounded-full top-[17%] left-[54%] text-[12px] text-white font-extended font-semibold flex justify-center items-center" > CoinGecko </div>

              <div className="absolute hover:animate-ping bg-[#8163A8] w-[75px] h-[75px] rounded-full top-[18%] left-[40%] text-[22px] text-white font-extended font-semibold flex justify-center items-center" > UX </div>

              <div className="absolute z-[1000] hover:animate-bounce bg-member-4 w-[130px] h-[130px] rounded-full top-[65%] left-[45%] cursor-pointer" > 
                <div className="relative hover:bg-slate-900 transition duration-300 opacity-0 hover:opacity-100 w-[130px] h-[130px] rounded-full">
                    <p className=" absolute top-1/2 text-center transform -translate-y-1/2 font-extended text-white font-semibold text-[12px]"> Max CEO & CTO  </p>
                </div>
               </div>

               <div className="absolute hover:animate-ping bg-[#F2C94C] w-[45px] h-[45px] rounded-full top-[60%] left-[57%]" > </div>

               <div className="absolute hover:animate-ping bg-[#C53479] w-[45px] h-[45px] rounded-full top-[53%] left-[61%]" > </div>

               <div className="absolute hover:animate-ping bg-[#08A1E3] w-[90px] h-[90px] rounded-full top-[58%] left-[65%] text-[12px] text-white font-extended font-semibold flex justify-center items-center" > Pancake<br/>Swap </div>

               <div className="absolute hover:animate-ping bg-[#C53479] w-[90px] h-[90px] rounded-full top-[70%] left-[74%] text-[16px] text-white font-extended font-semibold flex justify-center items-center" > DEXT </div>

               <div className="absolute hover:animate-ping bg-[#C53479] w-[45px] h-[45px] rounded-full top-[55%] left-[76%]" > </div>

               <div className="absolute hover:animate-bounce bg-member-2 w-[130px] h-[130px] rounded-full top-[35%] left-[68%] cursor-pointer" > 
                <div className="relative z-[1000] hover:bg-slate-900 transition duration-300 opacity-0 hover:opacity-100 w-[130px] h-[130px] rounded-full">
                    <p className=" absolute top-1/2 text-center transform -translate-y-1/2 font-extended text-white font-semibold text-[12px]"> Max CEO & CTO  </p>
                </div>
               </div>
            </div>
          </div>
        </PageLayout>
      </div>
    </section>
  );
});

export default OurTeam;
