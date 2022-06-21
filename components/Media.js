import React from "react";
import "react-awesome-button/dist/themes/theme-c137.css";
import { Home, About, MetaVision, EcoSystem, RoadMap } from "./index";
import { OurTeam, PersonalAccount } from "./Pages";

export const media = [
  {
    slug: "",
    className: "",
    children: <Home />,
  },
  {
    slug: "about",
    className: "",
    children: <About />,
  },
  {
    slug: "meta-vision",
    preload: ["https://caferati.me/images/series/bojack-0.png"],
    className: "",
    children: <MetaVision />,
  },
  {
    slug: "eco-system",
    preload: ["https://caferati.me/images/series/bojack-0.png"],
    className: "",
    children: <EcoSystem />,
  },
  {
    slug: "road-map",
    preload: ["https://caferati.me/images/series/bojack-0.png"],
    className: "",
    children: <RoadMap />,
  },
  {
    slug: "our-team",
    preload: ["https://caferati.me/images/series/bojack-0.png"],
    className: "",
    children: <OurTeam />,
  },
  {
    slug: "personal-account",
    preload: ["https://caferati.me/images/series/bojack-0.png"],
    className: "",
    children: <PersonalAccount />,
  },
];
