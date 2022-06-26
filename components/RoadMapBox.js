import React from "react";
import PageLayout from "./PageLayout";

const RoadMapBox = ({ children }) => {
  return (
    <div
      style={{
        background:
          "linear-gradient(200.79deg, #341235 4.28%, #370B41 21.32%, #130E30 95.17%)",
      }}
      className="flex flex-col mx-auto space-y-3 rounded-[20px] h-[420px] 3xl:h-auto w-[75%] md:w-[90%] lg:w-full text-white 3xl:text-4xl 3xl:leading-[55px] font-narrow p-8 3xl:p-10"
    >
      {children}
    </div>
  );
};

export default RoadMapBox;
