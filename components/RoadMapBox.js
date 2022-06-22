import React from "react";
import PageLayout from "./PageLayout";

const RoadMapBox = ({ children }) => {
  return (
    <div
      style={{
        background:
          "linear-gradient(200.79deg, #341235 4.28%, #370B41 21.32%, #130E30 95.17%)",
      }}
      className="flex flex-col space-y-6 rounded-[20px] h-[470px] w-[326px] text-white font-narrow px-8 pt-10"
    >
      {children}
    </div>
  );
};

export default RoadMapBox;
