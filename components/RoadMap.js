import React from "react";
import { withNavigationContext } from "react-awesome-slider/dist/navigation";
import PageLayout from "./PageLayout";
import Image from "next/image";
import lineHorizontal from "../assets/images/lines.png";
import lineVertical from "../assets/images/lines-2.png";
import greenIcon from "../assets/images/i-4.png";
import yellowIcon from "../assets/images/i-8.png";
const RoadMap = withNavigationContext(({ fullpage }) => {
  return (
    <section className="bg-[#0B0819] w-[100vw] relative">
      <PageLayout className="">
        <h1>Road Map</h1>
      </PageLayout>
    </section>
  );
});

export default RoadMap;
