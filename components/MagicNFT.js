import React from "react";
import { withNavigationContext } from "react-awesome-slider/dist/navigation";
import Button from "./Button";
import Image from "next/image";
import PageLayout from "./PageLayout";
import imageFrame from "../assets/images/Frame 86.svg";
import HeadingOne from "./HeadingOne";
// import video from "../assets/videos/nft-video.mp4"
const MagicNFT = withNavigationContext(({ fullpage }) => {
  return (
    <section
      style={{
        background: "linear-gradient(180deg, #4603D5 0%, #140A44 100%)",
      }}
      className="w-screen relative"
    >
      <div className="magic-nft-bg">
        <PageLayout className="flex flex-col lg:flex-row items-center py-2 sm:py-0 ">
          <div className="lg:flex-1 mt-12 lg:mt-0 px-4">
            <div className="hidden lg:block">
              <Image src={imageFrame} alt="Picture of Stone" />
            </div>
            <div className="h-48 sm:h-80 w-60 sm:w-96 relative lg:hidden">
              <Image
                src={imageFrame}
                alt="Picture of the nft"
                layout="fill" // required
              />
            </div>
          </div>
          <div className="flex-1 px-4">
            <HeadingOne className="text-center lg:text-start mb-2 md:mb-2 lg:mb-6 lg:leading">
              <span className="lg:hidden">
                {" "}
                Utility NFT Collection & Post-apocalypse Metaverse.{" "}
              </span>
              <span className="hidden lg:block 3xl:hidden">
                {" "}
                Utility NFT Collection <br /> & Post-apocalypse <br />{" "}
                Metaverse.{" "}
              </span>

              <span className="hidden 3xl:block">
                {" "}
                Utility NFT Collection & Post-apocalypse <br /> Metaverse.{" "}
              </span>
            </HeadingOne>
            <div className="text-[#FBFBFB] text-center lg:text-start font-narrow text-sm sm:text-base 2xl:text-lg 3xl:text-4xl 3xl:leading-[55px] mb-4 lg:mb-6">
              <p className="mb-2 lg:mb-4">
                Don&apos;t you think that most of even the most famous
                collections in the NFT world are simply useless! We think that
                we should do only useful things before apocalypse comes to us.
              </p>
              <p>
                {" "}
                Avoiding templates, we decided to create a limited NFT
                collection of people and superheroes who have made a huge
                contribution to the development of our society and IT
                technologies. Each NFT is completely unique and carries a hidden
                functionality that you can use every day and earn real money. In
                addition, with the help of a character, you will have access to
                the Post-apocalypse Metaverse, in which you can also earn money
                and safe yourself from the 3rd world war.
              </p>
            </div>
          </div>
        </PageLayout>
      </div>
    </section>
  );
});

export default MagicNFT;
