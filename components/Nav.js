import React, { useState } from "react";
import {
  withNavigationContext,
  Link,
} from "react-awesome-slider/dist/navigation";
import Container from "./Container";
import { FaUserCircle } from "react-icons/fa";
import Button from "./Button";
import Image from "next/image";
import userImg from "../assets/images/Vector.svg";
import Logo from "../assets/images/Logo.svg";

const Nav = withNavigationContext(({ fullpage }) => {
  const { slug } = fullpage.navigation;

  const [isBoxVisible, setVisible] = useState({ isBoxVisible: false });

  const toogle = () => {
    setVisible((prevState) => ({ isBoxVisible: !prevState.isBoxVisible }));
  };
  return (
    <header
      style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
      className="fixed top-0 left-0 z-[101] w-full bg-[#131A17]"
    >
      <Container>
        <nav className="flex items-center justify-between flex-wrap h-[6vh] md:h-[10vh]">
          <div className="flex space-x-4 items-center flex-shrink-0 text-white mr-6">
            <Link href="/">
              <Image src={Logo} alt="Logo" />
            </Link>
            <Link href="/">
              <span className="font-medium text-lg md:text-2xl tracking-tight font-narrow">
                Metavision
              </span>
            </Link>
          </div>
          <div className="block lg:hidden">
            <button
              onClick={toogle}
              className="flex items-center px-2 md:px-3 py-1.5 md:py-2 border rounded text-white border-white hover:text-black hover:bg-white"
            >
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div
            className={`${
              isBoxVisible.isBoxVisible ? "block" : "hidden"
            } w-full flex-grow lg:flex lg:items-center lg:w-auto`}
          >
            <div className="flex flex-col lg:flex-row lg:flex-grow text-white font-medium lg:space-x-4 text-[18px] font-narrow">
              <Link
                className={slug === "socialize2earn" ? "selected" : null}
                href="/socialize2earn"
              >
                Socialize2Earn
              </Link>
              <Link
                className={slug === "market-place" ? "selected" : null}
                href="/market-place"
              >
                Marketplace
              </Link>
              <Link
                className={slug === "magic-nft" ? "selected" : null}
                href="/magic-nft"
              >
                Magic NFT
              </Link>
              <Link
                className={slug === "eco-system" ? "selected" : null}
                href="/eco-system"
              >
                Ecosystem
              </Link>

              <Link
                className={slug === "road-map" ? "selected" : null}
                href="/road-map"
              >
                Roadmap
              </Link>
              <Link
                className={slug === "our-team" ? "selected" : null}
                href="/our-team"
              >
                Our Team
              </Link>
              <Link
                className={slug === "personal-account" ? "selected" : null}
                href="/personal-account"
              >
                Personal Account
              </Link>
            </div>
            <div className="flex items-center space-x-8">
              <Button className="bg-[#553CDF]">Connect wallet</Button>
              <a href="#">
                <Image
                  src={userImg}
                  alt="User Image"
                  width={55}
                  height={55}
                ></Image>
              </a>
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
});

export default Nav;
