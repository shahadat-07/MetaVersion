import React, { useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import {
  withNavigationContext,
  Link,
} from "react-awesome-slider/dist/navigation";
import Container from "./Container";
import Image from "next/image";
import userImg from "../assets/images/Vector.svg";
import wallet from "../assets/images/wallet-svgrepo-com.svg";
import Logo from "../assets/images/Logo.svg";

const Nav = withNavigationContext(({ fullpage }) => {
  const { slug } = fullpage.navigation;


  const [isOpen, setIsOpen] = useState(false);

  const LinkItem = ({ slug, slugParam, text, className = "" }) => {
    return (
      <Link
        onClick={() => {
          setTimeout(setIsOpen(false), 50000);
        }}
        className={`${
          slug === slugParam ? "selected bg-gray-700 rounded-md" : null
        }`}
        href={`/${slugParam}`}
      >
        <span
          className={`text-white hover:bg-gray-800 rounded-md block px-3 py-2 font-medium ${className}`}
        >
          {text}
        </span>
      </Link>
    );
  };

  function ConnectWallet() {
    return (
      <div className="xl:px-4">
        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button
                onClick={() => {
                  setTimeout(setIsOpen(false), 1500);
                }}
                className="focus:outline-0 flex items-center"
              >
                <div className="h-8 md:h-14 w-10 md:w-14 relative xl:hidden">
                  <Image
                    src={wallet}
                    alt="Picture of wallet"
                    layout="fill" // required
                  />
                </div>
                <p
                  className="hidden xl:block font-extended text-sm 2xl:text-base text-center
              text-[#F2F2F2] py-3 2xl:py-3 px-4 2xl:px-8 3xl:text-lg rounded-[80px] bg-[#553CDF]"
                >
                  Connect wallet
                </p>
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute -right-[80%] sm:right-0 z-10 w-[300px] h-[400] md:w-[400px] md:h-[500px]">
                  <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="relative bg-[#553CDF] rounded-md">
                      <form
                        className="rounded px-8 pt-6 pb-8 mb-4 text-white"
                        onSubmit={(e) => {
                          e.preventDefault();
                          console.log("Submitted!");
                        }}
                      >
                        <p className="mb-4 text-center font-narrow font-semibold">
                          First time here ? Please register.
                        </p>

                        <div className="mb-2">
                          <label
                            className="block text-sm font-medium mb-2 font-extended text-white"
                            htmlFor="telegram"
                          >
                            Telegram
                          </label>
                          <input
                            className="shadow appearance-none border bg-gray-200 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="text"
                            type="text"
                            placeholder="@example"
                          />
                        </div>
                        <div className="mb-2">
                          <label
                            className="block text-sm font-medium mb-2 font-extended text-white"
                            htmlFor="email"
                          >
                            E-mail
                          </label>
                          <input
                            className="shadow appearance-none border bg-gray-200 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder=""
                          />
                        </div>
                        <div className="mb-2">
                          <label
                            className="block  text-sm font-medium mb-2 font-extended text-white"
                            htmlFor="text"
                          >
                            Metaverse
                          </label>
                          <input
                            className="shadow appearance-none border bg-gray-200 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="text"
                            type="text"
                            placeholder="Decentraland"
                          />
                        </div>
                        <div className="text-center">
                          <button
                            className="bg-[#553CDF] shadow-xl font-extended text-sm md:text-base text-center font-medium text-[#F2F2F2] py-3 px-8 rounded-[80px]"
                            onClick={() => console.log("Register clicked!")}
                          >
                            {" "}
                            Register{" "}
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      </div>
    );
  }

  return (
    <header className="fixed top-0 left-0 z-[101] w-full bg-[#131A17]">
      <Container>
        <nav className="bg-[#131A17] py-2 3xl:py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="flex space-x-4 items-center flex-shrink-0 text-white mr-6">
                <Link href="/">
                  <Image src={Logo} alt="Logo" />
                </Link>
                <Link href="/">
                  <span className="font-medium text-lg md:text-2xl 3xl:text-4xl tracking-tight font-narrow">
                    My Verse
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
                  <LinkItem
                    slug={slug}
                    slugParam="personal-account"
                    text="Personal Account"
                    className=""
                  />
                </div>
              </div>
            </div>
            <div className="-mr-2 flex items-center space-x-4 ">
              <div className="h-8 md:h-14 w-10 md:w-14 relative ">
                <Image
                  src={userImg}
                  alt="Picture of user"
                  layout="fill" // required
                />
              </div>
              <ConnectWallet />
              <button
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center px-2 md:px-4 h-10 md:h-14 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-offset-gray-800 focus:ring-white xl:hidden"
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
                  className="link px-2 pt-2 pb-3 space-y-1 sm:px-3 text-white text-[18px] font-narrow "
                >
                  <LinkItem
                    slug={slug}
                    slugParam="socialize2earn"
                    text="Socialize2Earn"
                    className="hover:bg-gray-700"
                  />
                  <LinkItem
                    slug={slug}
                    slugParam="market-place"
                    text="Marketplace"
                    className="hover:bg-gray-700"
                  />
                  <LinkItem
                    slug={slug}
                    slugParam="magic-nft"
                    text="Magic NFT"
                    className="hover:bg-gray-700"
                  />
                  <LinkItem
                    slug={slug}
                    slugParam="eco-system"
                    text="Ecosystem"
                    className="hover:bg-gray-700"
                  />
                  <LinkItem
                    slug={slug}
                    slugParam="road-map"
                    text="Roadmap"
                    className="hover:bg-gray-700"
                  />
                  <LinkItem
                    slug={slug}
                    slugParam="our-team"
                    text="Our Team"
                    className="hover:bg-gray-700"
                  />

                  <LinkItem
                    slug={slug}
                    slugParam="personal-account"
                    text="Personal Account"
                  />
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
