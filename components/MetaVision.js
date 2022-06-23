import React from "react";
import { withNavigationContext } from "react-awesome-slider/dist/navigation";
import PageLayout from "./PageLayout";
import Image from "next/image";
import hazardIcon from "../assets/images/hazard-unscreen.gif";
import HeadingOne from "./HeadingOne";
import appStore from "../assets/images/appstore 1.png";
import metaSvg from "../assets/images/META.svg";
import Button from "./Button";
import Link from "next/link";
const MetaVision = withNavigationContext(({ fullpage }) => {
  return (
    <section
      style={{
        background: "linear-gradient(180deg, #D5030F 0%, #140A44 100%)",
      }}
      className="bg-[#0B0819] w-[100vw] relative"
    >
      <PageLayout className="lg:flex items-center ">
        <div className="flex-2 order-last">
        <HeadingOne className="mb-3 md:mb-4 lg:mb-8 lg:leading">
        Welcome to NFT oasis,
            <br /> humanity&apos;s last stronghold
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
            <p>
              {" "}
              - Play, participate in contests, show your collections, earn
              points and real money!
            </p>
          </div>
          <div>
            <Link href="#">
              <Image
                src={appStore}
                alt="Picture of App Store"
                className="cursor-pointer"
              />
            </Link>
          </div>
        </div>
        <div className="flex-1">
          <Image
            src={hazardIcon}
            width={723}
            height={539}
            alt="Picture of asntronaut"
          />
        </div>
      </PageLayout>
    </section>
  );
});

export default MetaVision;
