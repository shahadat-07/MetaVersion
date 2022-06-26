import React from "react";
import { withNavigationContext } from "react-awesome-slider/dist/navigation";
import PageLayout from "./PageLayout";
import Image from "next/image";
import hazardIcon from "../assets/images/hazard-unscreen.gif";
import HeadingOne from "./HeadingOne";
import appStore from "../assets/images/appstore 1.png";
// import metaSvg from "../assets/images/META.svg";
import Button from "./Button";
import Link from "next/link";
const MarketPlace = withNavigationContext(({ fullpage }) => {
  return (
    <section
      style={{
        background: "linear-gradient(180deg, #D5030F 0%, #140A44 100%)",
      }}
      className="bg-[#0B0819] w-[100vw] relative"
    >
      <div className="market-place-bg">
        <PageLayout className="flex flex-col lg:flex-row items-center ">
          <div className="flex-1 lg:flex-2 order-2 lg:order-none">
            <HeadingOne className="mb-3 md:mb-4 lg:mb-8 lg:leading">
              Welcome to NFT oasis,
              <br /> humanity&apos;s last stronghold
            </HeadingOne>

            <div className="text-white mb-6 3xl:mb-12 font-narrow font-medium text-sm lg:text-xl 3xl:text-4xl 3xl:leading-[55px]">
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
          <div className="lg:flex-1 mt-12 lg:mt-0">
            <div className="hidden lg:block">
              <Image
                src={hazardIcon}
                width={723}
                height={539}
                alt="Picture of Stone"
              />
            </div>
            <div className="h-60 sm:h-96 w-60 sm:w-96 relative lg:hidden">
              <Image
                src={hazardIcon}
                alt="Picture of the nft"
                layout="fill" // required
              />
            </div>

            {/* <Image
              src={hazardIcon}
              width={723}
              height={539}
              alt="Picture of asntronaut"
            /> */}
          </div>
        </PageLayout>
      </div>
    </section>
  );
});

export default MarketPlace;
