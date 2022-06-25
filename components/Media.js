import React from "react";
import "react-awesome-button/dist/themes/theme-c137.css";
import {
  Home,
  MarketPlace,
  EcoSystem,
  RoadMap,
  Socialize2Earn,
  MagicNFT,
} from "./index";
import { OurTeam, PersonalAccount } from "./Pages";

export const media = [
  {
    slug: "",
    className: "",
    children: <Home />,
  },
  {
    slug: "socialize2earn",
    className: "",
    children: <Socialize2Earn />,
  },
  {
    slug: "market-place",
    // preload: ["https://caferati.me/images/series/bojack-0.png"],
    className: "",
    children: <MarketPlace />,
  },
  {
    slug: "magic-nft",
    // preload: ["https://caferati.me/images/series/bojack-0.png"],
    className: "",
    children: <MagicNFT />,
  },
  {
    slug: "eco-system",
    // preload: ["https://caferati.me/images/series/bojack-0.png"],
    className: "",
    children: <EcoSystem />,
  },
  {
    slug: "road-map",
    // preload: ["https://caferati.me/images/series/bojack-0.png"],
    className: "",
    children: <RoadMap />,
  },
  {
    slug: "our-team",
    // preload: ["https://caferati.me/images/series/bojack-0.png"],
    className: "",
    children: <OurTeam />,
  },
  {
    slug: "personal-account",
    // preload: ["https://caferati.me/images/series/bojack-0.png"],
    className: "",
    children: <PersonalAccount />,
  },
];
