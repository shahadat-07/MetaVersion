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
      <div  style={{
      backgroundImage: `url('/OUR TEAM.svg')`,
      backgroundRepeat: "no-repeat",
      backgroundSize: '100%',
      backgroundPosition: 'center 70px'
}}>
       <PageLayout className="flex items-center ">
        <div className="flex-0">
        <HeadingOne className="mb-3 md:mb-4 lg:mb-8 lg:leading">
       Our team
          </HeadingOne>

          <div className="text-white mb-6 font-narrow font-medium text-sm lg:text-xl">
            <p>
              - Buy, sell and look for new partners in the NFT marketplace of
              the future{" "}
            </p>
            <p>- Share your emotions and ideas in NFT format</p>
            <p>
              {" "}
              - Use NFTs from our collection to become unique and increase your
              income.
            </p>
          </div>
        </div>
        <div className="flex-grow bg-red-800">
         <h1>lor </h1>
        </div>
      </PageLayout>
      </div>
    </section>
  );
});

export default OurTeam;
