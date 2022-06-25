import React from "react";
import { withNavigationContext } from "react-awesome-slider/dist/navigation";
import PageLayout from "./PageLayout";
import Image from "next/image";
import lineHorizontal from "../assets/images/lines.png";
import lineVertical from "../assets/images/lines-2.png";
import greenIcon from "../assets/images/Green Icon.svg";
import yellowIcon from "../assets/images/YellowIcon.svg";
import TextBox from "./TextBox";
import RoadMapBox from "./RoadMapBox";
import progressBar from "../assets/images/lines.png";
import HeadingOne from "./HeadingOne";
const RoadMap = withNavigationContext(({ fullpage }) => {
  // transform: "matrix(-1, 0, 0, 1, 0, 0)",

  return (
    <section
      style={{
        background:
          "linear-gradient(180deg, #00C2FF 0%, #360E3D 0.01%, #140E31 100%)",
      }}
      className="bg-[#0B0819] w-[100vw] relative"
    >
      <PageLayout className="flex flex-col justify-center ">
        <HeadingOne className="text-center mt-3 mb-6">Roadmap</HeadingOne>
        <Image src={progressBar} alt="Progress Bar" />
        <div className="flex space-x-8 3xl:space-x-12 justify-center">
          <RoadMapBox>
            <TextBox src={greenIcon} text="Develop the idea of MetaVision" />
            <TextBox
              src={greenIcon}
              text="Start Smart contract development for Social Network"
            />
            <TextBox src={greenIcon} text="Start website development" />
            <TextBox src={greenIcon} text="Develop marketing plan" />
            <TextBox src={greenIcon} text="UX/UI for MetaVision" />
            <TextBox src={greenIcon} text="White Paper" />
          </RoadMapBox>
          <RoadMapBox>
            <TextBox src={greenIcon} text="Develop the idea of MetaVision" />
            <TextBox src={greenIcon} text="Smart contract for BSC Token" />
            <TextBox src={greenIcon} text="Token and Website Production" />
            <TextBox
              src={greenIcon}
              text="Begin marketing campaign: Telegram, Twitter,  Discord"
            />
            <TextBox src={yellowIcon} text="Social Research" />
            <TextBox src={yellowIcon} text="Press Releases" />
          </RoadMapBox>
          <RoadMapBox>
            <TextBox src={greenIcon} text="KYC and Audit" />
            <TextBox
              src={yellowIcon}
              text="AMAs, airdrops, shilling contests"
            />
            <TextBox src={yellowIcon} text="Presale on Pinksale" />
            <TextBox src={yellowIcon} text="NFT development" />
            <TextBox
              src={yellowIcon}
              text="Integrate NFT in MetaVision smart contract"
            />
            <TextBox src={yellowIcon} text="MetaVision Update" />
            <TextBox src={yellowIcon} text="Listings on Trackers" />
          </RoadMapBox>
          <RoadMapBox>
            <TextBox
              src={yellowIcon}
              text="Develop Cross Chain Routing system"
            />
            <TextBox
              src={yellowIcon}
              text="Finalize MetaVision local testing"
            />
            <TextBox src={yellowIcon} text="Open Beta Test" />
            <TextBox src={yellowIcon} text="MetaVision Launch" />
            <TextBox src={yellowIcon} text="Listings on Exchange platforms" />
            <TextBox
              src={yellowIcon}
              text="Update MetaVision to be compatible with other networks"
            />
            <TextBox src={yellowIcon} text="Marketing compaign" />
          </RoadMapBox>{" "}
        </div>
      </PageLayout>
    </section>
  );
});

export default RoadMap;
