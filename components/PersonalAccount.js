import React, { useState } from "react";
import PageLayout from "./PageLayout";
import { Link } from "react-awesome-slider/dist/navigation";
import {DashHome, Guides, NewCard, Merch ,Settings} from "./index"

const OurTeam = () => {
  const [name, setName] = useState("");


  let showPage = "";


  if (name === "home") {
    showPage = <DashHome />
  } else if (name === "guides") {
    showPage = <Guides />
  } else if (name === "card") {
    showPage = <NewCard />
  } else if (name === "merch") {
    showPage = <Merch />
  } else if (name === "settings") {
    showPage = <Settings />
  }

  // let background = "";
  // if ((!name == "")) {
  //   background = "bg-red-500";
  // }

  return (
    <section
      className="bg-[#140C25] w-[100vw] relative"
    >
      <div className="bg-[#1F2736] w-screen fixed top-[75px]">
        <div className="container flex justify-around mx-auto px-4 sm:px-16 3xl:px-0 w-[100vw] 3xl:max-w-[2000px]">
          <button
            onClick={() => {
              setName("home");
            }}
            className={`hover:bg-[#5E45F5] p-4 text-white font-extended text-sm`}
          >
            Home
          </button>
          <button
            onClick={() => {
              setName("guides");
            }}
            className={`hover:bg-[#5E45F5] p-4 text-white font-extended text-sm`}
          >
            Guides
          </button>
          <button
            onClick={() => setName("card")}
            className={`hover:bg-[#5E45F5] p-4 text-white font-extended text-sm`}
          >
            Add a new card
          </button>
          <button
            onClick={() => setName("merch")}
            className={`hover:bg-[#5E45F5] p-4 text-white font-extended text-sm`}
          >
            Merch
          </button>
          <button
            onClick={() => setName("settings")}
            className={`hover:bg-[#5E45F5] p-4 text-white font-extended text-sm`}
          >
            Settings
          </button>
        </div>
      </div>
      <PageLayout className="flex flex-col justify-center">
        <div className="h-screen flex items-center justify-center">
          {showPage}
        </div>
      </PageLayout>
    </section>
  );
};

export default OurTeam;
