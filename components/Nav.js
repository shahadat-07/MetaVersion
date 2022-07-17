import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import {
    withNavigationContext,
    Link,
} from "react-awesome-slider/dist/navigation";
import Container from "./Container";
import Image from "next/image";
import userImg from "../assets/images/Vector.svg";
import Logo from "../assets/images/Logo.svg";
import { useMoralis } from "react-moralis";

import ConnectWallet from "./ConnectWallet";

const Nav = withNavigationContext(({ fullpage }) => {
    const { slug } = fullpage.navigation;

    useEffect(() => {
        const element = document.getElementsByClassName("awssld__next");
        const button = element[0];
        if(slug === 'our-team'){
            button.classList.add('visibility');
        }else {
            button.classList.remove('visibility');
        }
    }, [slug] )

    console.log(slug);

    const [isOpen, setIsOpen] = useState(false);

    const { isWeb3Enabled, account } = useMoralis();
    const [isRegistered, setIsRegistered] = useState(false);

    const checkRegister = async (userAddress) => {
        const requestOptions = {
            method: "POST",
            body: JSON.stringify({
                methodName: "checkRegister",
                account: userAddress,
            }),
        };
        const result = await (
            await fetch("/api/endpoint", requestOptions)
        ).json();
        setIsRegistered(result.status);
    };

    useEffect(() => {
        if (isWeb3Enabled) {
            checkRegister(account);
        }
    }, [isWeb3Enabled, isRegistered]);

    const LinkItem = ({ slug, slugParam, text, className = "" }) => {
        return (
            <Link
                onClick={() => {
                    console.log(slugParam);
                    setTimeout(setIsOpen(false), 50000);
                }}
                className={`${
                    slug === slugParam
                        ? "selected bg-gray-700 rounded-md"
                        : null
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
                                    <LinkItem
                                        slug={slug}
                                        slugParam="road-map"
                                        text="Roadmap"
                                    />
                                    <LinkItem
                                        slug={slug}
                                        slugParam="our-team"
                                        text="Our Team"
                                    />
                                    {isWeb3Enabled && isRegistered ? (
                                        <LinkItem
                                            slug={slug}
                                            slugParam="personal-account"
                                            text="Personal Account"
                                        />
                                    ) : (
                                        <></>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="-mr-2 flex items-center space-x-4 ">
                            {isWeb3Enabled ? (
                                <div className="h-8 md:h-14 w-10 md:w-14 relative ">
                                    <Image
                                        src={userImg}
                                        alt="Picture of user"
                                        layout="fill" // required
                                    />
                                </div>
                            ) : (
                                <></>
                            )}
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

                                    {isWeb3Enabled && isRegistered ? (
                                        <LinkItem
                                            slug={slug}
                                            slugParam="personal-account"
                                            text="Personal Account"
                                        />
                                    ) : (
                                        <></>
                                    )}
                                    
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
