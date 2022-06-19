import React from "react";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/themes/theme-c137.css";
import { withNavigationContext } from "react-awesome-slider/dist/navigation";
import Lettering from "./Lettering";
import Background from "./Background";
import Content from "./Content";
import Mouse from "./Mouse";
import Section from "./Section";
import Page from "./Page";
import { Third } from "./Third";

export const Home = withNavigationContext(({ fullpage }) => {
  return (
    <div className="bg-blue-900 w-[1200px] h-[500px]">
      <h1 className="text-5xl text-white font-bold">Hello Bangladesh</h1>
    </div>
    // <Section
    //   wrapper={false}
    //   backgroundColor="rgb(0,0,128)
    // "
    // >
    //   <h1 className="text-white text-5xl">This is my landing page</h1>
    //   {/* <Content
    //     main={<h1>This is home page</h1>}
    //     action={
    //       <div className="button">
    //         <AwesomeButton
    //           size="large"
    //           onPress={() => {
    //             fullpage.navigate("/page-two");
    //           }}
    //         >
    //           Goto the next page
    //         </AwesomeButton>
    //       </div>
    //     }
    //   /> */}
    // </Section>
  );
});

export const media = [
  {
    slug: "",
    className: "",
    children: <Home />,
  },
  {
    slug: "about",
    className: "slide",
    children: (
      <div className="bg-blue-900 w-[1200px] h-[500px]">
        <h1 className="text-5xl text-white font-bold">Hello About Page</h1>
      </div>
    ),
  },
  {
    slug: "meta-vision",
    preload: ["https://caferati.me/images/series/bojack-0.png"],
    className: "slide",
    children: (
      <div className="bg-blue-900 w-[1200px] h-[500px]">
        <h1 className="text-5xl text-white font-bold">Hello Meta Vision</h1>
      </div>
    ),
  },
  {
    slug: "eco-system",
    preload: ["https://caferati.me/images/series/bojack-0.png"],
    className: "slide",
    children: (
      <div className="bg-blue-900 w-[1200px] h-[500px]">
        <h1 className="text-5xl text-white font-bold">Hello Eco System</h1>
      </div>
    ),
  },
  {
    slug: "road-map",
    preload: ["https://caferati.me/images/series/bojack-0.png"],
    className: "slide",
    children: (
      <div className="bg-blue-900 w-[1200px] h-[500px]">
        <h1 className="text-5xl text-white font-bold">Hello Read Map</h1>
      </div>
    ),
  },
  {
    slug: "our-team",
    preload: ["https://caferati.me/images/series/bojack-0.png"],
    className: "slide",
    children: (
      <div className="bg-blue-900 w-[1200px] h-[500px]">
        <h1 className="text-5xl text-white font-bold">Hello My Team</h1>
      </div>
    ),
  },
  {
    slug: "personal-account",
    preload: ["https://caferati.me/images/series/bojack-0.png"],
    className: "slide",
    children: (
      <div className="bg-blue-900 w-[1200px] h-[500px]">
        <h1 className="text-5xl text-white font-bold">
          Hello My Personal Account
        </h1>
      </div>
    ),
  },
];
