import React, { useState } from "react";
import {
  withNavigationContext,
  Link,
} from "react-awesome-slider/dist/navigation";
import { Transition } from "@headlessui/react";

import Container from "./Container";
import { FaUserCircle } from "react-icons/fa";
import Button from "./Button";
import Image from "next/image";
import userImg from "../assets/images/Vector.svg";
import Logo from "../assets/images/Logo.svg";
import LinkItem from "./LinkItem";

const Nav = withNavigationContext(({ fullpage }) => {
  const { slug } = fullpage.navigation;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
      className="fixed top-0 left-0 z-[101] w-full bg-[#131A17]"
    >
      <Container>
        <nav className="bg-[#131A17] py-2 xl:py-3 3xl:py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="flex space-x-4 items-center flex-shrink-0 text-white mr-6">
                <Link href="/">
                  <Image src={Logo} alt="Logo" />
                </Link>
                <Link href="/">
                  <span className="font-medium text-lg md:text-2xl 3xl:text-4xl tracking-tight font-narrow">
                    Metavision
                  </span>
                </Link>
              </div>
              <div className="hidden xl:block">
                <div className="flex text-white font-medium text-[18px] 3xl:text-3xl font-narrow">
                  <LinkItem
                    slug={slug}
                    slugParam="socialize2earn"
                    text="Socialize2Earn"
                  />
                  <LinkItem
                    slug={slug}
                    slugParam="market-place"
                    text="Marketplace"
                  />
                  <LinkItem
                    slug={slug}
                    slugParam="magic-nft"
                    text="Magic NFT"
                  />
                  <LinkItem
                    slug={slug}
                    slugParam="eco-system"
                    text="Ecosystem"
                  />
                  <LinkItem slug={slug} slugParam="road-map" text="Roadmap" />
                  <LinkItem slug={slug} slugParam="our-team" text="Our Team" />
                  {/* <LinkItem
                    slug={slug}
                    slugParam="personal-account"
                    text="Personal Account"
                  /> */}
                </div>
              </div>
            </div>
            <div className="-mr-2 flex items-center space-x-4 xl:hidden">
              <a href="#">
                <Image
                  src={userImg}
                  alt="User Image"
                  width={35}
                  height={35}
                ></Image>
              </a>
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center px-2 md:px-4 h-8 md:h-10 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-5 md:h-6 w-5 md:w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-5 md:h-6 w-5 md:w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
            <div className="hidden xl:block">
              <div className="flex items-center space-x-8">
                <a href="#" className="font-extended text-sm 2xl:text-base text-center
                 text-[#F2F2F2] py-2 2xl:py-3 px-4 2xl:px-8 3xl:text-lg rounded-[80px] bg-[#553CDF]">Connect wallet</a>
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
          </div>

          <Transition
            show={isOpen}
            enter="transition ease-in-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100 duration-150"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            {(ref) => (
              <div className="xl:hidden" id="mobile-menu">
                <div
                  ref={ref}
                  className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-white text-[18px] font-narrow"
                >
                  <LinkItem
                    slug={slug}
                    slugParam="socialize2earn"
                    text="Socialize2Earn"
                  />
                  <LinkItem
                    slug={slug}
                    slugParam="market-place"
                    text="Marketplace"
                  />
                  <LinkItem
                    slug={slug}
                    slugParam="magic-nft"
                    text="Magic NFT"
                  />
                  <LinkItem
                    slug={slug}
                    slugParam="eco-system"
                    text="Ecosystem"
                  />
                  <LinkItem slug={slug} slugParam="road-map" text="Roadmap" />
                  <LinkItem slug={slug} slugParam="our-team" text="Our Team" />
                  {/* <LinkItem
                    slug={slug}
                    slugParam="personal-account"
                    text="Personal Account"
                  /> */}
                  <Button className="bg-[#553CDF] block sm:w-[50%] lg:w-[25%]">
                    Connect wallet
                  </Button>
                </div>
              </div>
            )}
          </Transition>
        </nav>
      </Container>
    </header>
  );
});

export default Nav;
