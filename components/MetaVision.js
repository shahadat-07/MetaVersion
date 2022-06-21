import React from "react";
import { withNavigationContext } from "react-awesome-slider/dist/navigation";
import PageLayout from "./PageLayout";
import Image from "next/image";
import triCircle from "../assets/images/triCircle.png";
import appStore from "../assets/images/appstore 1.png";
import Button from "./Button";
// linear-gradient(180deg, #D5030F 0%, #140A44 100%);
const MetaVision = withNavigationContext(({ fullpage }) => {
  return (
    <section className="bg-[#0B0819] w-[100vw] relative">
      <PageLayout className="flex items-center">
        <div className="flex-2">
          <h1 className="text-white text-[40px] font-semibold font-extended mb-8">
            Welcome to NFT oasis,
            <br /> humanity's last stronghold
          </h1>
          <div className="text-white mb-6">
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
            <p>
              {" "}
              - Play, participate in contests, show your collections, earn
              points and real money!
            </p>
          </div>
          <Image src={appStore} alt="Picture of asntronaut" />
        </div>
        <div className="flex-1">
          <Image src={triCircle} alt="Picture of asntronaut" />
        </div>
      </PageLayout>
    </section>
  );
});

export default MetaVision;
