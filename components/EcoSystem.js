import React from "react";
import { withNavigationContext } from "react-awesome-slider/dist/navigation";
import PageLayout from "./PageLayout";
import Image from "next/image";
import heroMan from "../assets/images/hero-man.png";
import Button from "./Button";
import HeadingOne from "./HeadingOne";

// transform: "matrix(-1, 0, 0, 1, 0, 0)",

const EcoSystem = withNavigationContext(({ fullpage }) => {
  return (
    <section
      style={{
        background: "linear-gradient(180deg, #ED1E79 0%, #380329 100%)",
      }}
      className="bg-[#0B0819] w-[100vw] relative"
    >
     <div style={{
      backgroundImage: `url('/ECOSYSTEM.svg')`,
      backgroundRepeat: "no-repeat",
      backgroundSize: '100%',
      backgroundPosition: 'center 70px'
}}> <PageLayout className="flex flex-col items-center justify-center">
        <HeadingOne className="mb-4 mt-8"> Future Ecosystem</HeadingOne>
        <p className="text-white mb-8 w-[50%] text-center font-narrow 3xl:text-4xl 3xl:leading-[55px]">
          Virtual world exists and now after metaverse boom virtual world is
          developing very fast and time is not far away we all will start living
          in virtual world” ― Anuj Jasani
        </p>

        <iframe
          src="https://www.youtube.com/embed/FEokzFMbeq0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-[50vw] aspect-[6/3] rounded-3xl	"
        ></iframe>
      </PageLayout> </div>
    </section>
  );
});

export default EcoSystem;
