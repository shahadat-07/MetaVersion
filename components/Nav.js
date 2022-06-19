import React, { useState } from "react";
import {
  withNavigationContext,
  Link,
} from "react-awesome-slider/dist/navigation";
import Container from "./Container";
import { FaUserCircle } from "react-icons/fa";

const Nav = withNavigationContext(({ fullpage }) => {
  const { slug } = fullpage.navigation;

  const [isBoxVisible, setVisible] = useState({ isBoxVisible: false });

  const toogle = () => {
    setVisible((prevState) => ({ isBoxVisible: !prevState.isBoxVisible }));
  };

  return (
    <header className="fixed top-0 left-0 z-[101] w-full bg-black">
      <Container>
        <nav className="flex items-center justify-between flex-wrap h-[10vh]">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <span className="font-semibold text-xl tracking-tight">
              Tailwind CSS
            </span>
          </div>
          <div className="block lg:hidden">
            <button
              onClick={toogle}
              className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
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
            <div className="flex flex-col lg:flex-row lg:flex-grow text-white font-semibold  lg:space-x-4">
              <Link classNameName={slug === "" ? "selected" : null} href="/">
                Home
              </Link>
              <Link
                classNameName={slug === "about" ? "selected" : null}
                href="/about"
              >
                About
              </Link>
              <Link
                classNameName={slug === "meta-vision" ? "selected" : null}
                href="/meta-vision"
              >
                Metavision
              </Link>
              <Link
                classNameName={slug === "eco-system" ? "selected" : null}
                href="/eco-system"
              >
                Ecosystem
              </Link>

              <Link
                classNameName={slug === "road-map" ? "selected" : null}
                href="/road-map"
              >
                Roadmap
              </Link>
              <Link
                classNameName={slug === "our-team" ? "selected" : null}
                href="/our-team"
              >
                Our Team
              </Link>
              <Link
                classNameName={slug === "personal-account" ? "selected" : null}
                href="/personal-account"
              >
                Personal Account
              </Link>
            </div>
            <div className="flex items-center space-x-6">
              <a
                href="#"
                className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
              >
                Connect Wallet
              </a>
              <a href="#">
                <FaUserCircle color="white" size="30px" />
              </a>
            </div>
          </div>
        </nav>
      </Container>
    </header>

    // <header classNameName="page-header">
    //   <div classNameName="page-header__wrapper">
    //     <nav>
    //       <Link classNameName={slug === "" ? "selected" : null} href="/">
    //         Home
    //       </Link>
    //       <Link classNameName={slug === "about" ? "selected" : null} href="/about">
    //         About
    //       </Link>
    //       <Link
    //         classNameName={slug === "meta-vision" ? "selected" : null}
    //         href="/meta-vision"
    //       >
    //         Metavision
    //       </Link>
    //       <Link
    //         classNameName={slug === "eco-system" ? "selected" : null}
    //         href="/eco-system"
    //       >
    //         Ecosystem
    //       </Link>

    //       <Link
    //         classNameName={slug === "road-map" ? "selected" : null}
    //         href="/road-map"
    //       >
    //         Roadmap
    //       </Link>
    //       <Link
    //         classNameName={slug === "our-team" ? "selected" : null}
    //         href="/our-team"
    //       >
    //         Our Team
    //       </Link>
    //       <Link
    //         classNameName={slug === "personal-account" ? "selected" : null}
    //         href="/personal-account"
    //       >
    //         Personal Account
    //       </Link>
    //     </nav>
    //     <div classNameName="flex space-x-6">
    //       <button>Connect Wallet</button>
    //       <h2>Icon</h2>
    //     </div>
    //   </div>
    // </header>
  );
});

export default Nav;
