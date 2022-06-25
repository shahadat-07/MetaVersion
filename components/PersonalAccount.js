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
const OurTeam = withNavigationContext(({ fullpage }) => {

  return (
    <section
      style={{
        background: "linear-gradient(150.23deg, #9A0059 1.85%, #160B8F 100%)",
      }}
      className="bg-[#0B0819] w-[100vw] relative"
    >
      <div>
      <PageLayout className="flex flex-col justify-center ">
       <h1 className="text-6xl text-white font-bold text-center">Personal Account</h1>
      </PageLayout>
      </div>
    </section>
  );
});

export default OurTeam;
