import React from "react";
import { withNavigationContext } from "react-awesome-slider/dist/navigation";
import Button from "./Button";
import Image from "next/image";
import PageLayout from "./PageLayout";
import imageFrame from "../assets/images/Frame 86.svg";
import HeadingOne from "./HeadingOne";
import vision from "../assets/images/VISION.svg";
// import video from "../assets/videos/nft-video.mp4"
const MagicNFT = withNavigationContext(({ fullpage }) => {
  return (
    <section
      style={{
        background: "linear-gradient(180deg, #4603D5 0%, #140A44 100%)",
      }}
      className="w-[100vw] relative"
    >
      <PageLayout className="flex flex-col lg:flex-row items-center py-2 sm:py-0 ">
        <div className="lg:flex-1 mb-3 lg:mb-0 px-4 text-center">
          {/* <Image
            src={imageFrame}
            width={550}
            height={410}
            alt="Picture of Frame"
          /> */}
{/*          
          <video width="320" height="240" controls>
            <source src="https://youtu.be/9QWnOYDZTOc" type="video/mp4" />
            <source src="https://youtu.be/9QWnOYDZTOc" type="video/ogg" />
          Your browser does not support the video .
          </video> */}
          
          
          {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/9QWnOYDZTOc" title="NFT video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe> */}
        </div>
        <div className="flex-1 px-4">
          <HeadingOne className="mb-3 md:mb-4 lg:mb-8 lg:leading">
            Utility NFT Collection & Post-apocalypse Metaverse.
          </HeadingOne>
          <p className="text-[#FBFBFB] font-narrow text-base sm:text-lg mb-4 lg:mb-6">
            Don&apos;t you think that most of even the most famous collections
            in the NFT world are simply useless! We think that we should do only
            useful things before the apocalypse comes to us. <br /> <br />{" "}
            Avoiding templates, we decided to create a limited NFT collection of
            people and superheroes who have made a huge contribution to the
            development of our society and IT technologies. Each NFT is
            completely unique and carries a hidden functionality that you can
            use every day and earn real money. In addition, with the help of a
            character, you will have access to the Post-apocalypse Metaverse, in
            which you can also earn money and safe yourself from the 3rd world
            war.
          </p>
        </div>
      </PageLayout>
    </section>
  );
});

export default MagicNFT;
