import React from "react";
import "react-awesome-button/dist/themes/theme-c137.css";
import {
  Home,
  MarketPlace,
  EcoSystem,
  RoadMap,
  Socialize2Earn,
  MagicNFT,
  OurTeam,
  PersonalAccount,
} from "./index";

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
    className: "",
    children: <MarketPlace />,
  },
  {
    slug: "magic-nft",
    className: "",
    children: <MagicNFT />,
  },
  {
    slug: "eco-system",
    className: "",
    children: <EcoSystem />,
  },
  {
    slug: "road-map",
    className: "",
    children: <RoadMap />,
  },
  {
    slug: "our-team",
    className: "",
    children: <OurTeam />,
  },
  // {
  //   slug: "personal-account",
  //   className: "",
  //   children: <PersonalAccount />,
  // },
  // {
  //   slug: "register",
  //   className: "xl:hidden",
  //   children: <Register />,
  // },
];
