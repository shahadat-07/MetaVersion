import React from "react";
import { withNavigationContext } from "react-awesome-slider/dist/navigation";
import PageLayout from "./PageLayout";
import Image from "next/image";
import heroMan from "../assets/images/hero-man.png";
import bgLeft from "../assets/images/hero-bg-left.png";
import Button from "./Button";

// background: linear-gradient(180deg, #ED1E79 0%, #380329 100%);
// transform: matrix(-1, 0, 0, 1, 0, 0);

const EcoSystem = withNavigationContext(({ fullpage }) => {
  return (
    <section className="bg-[#0B0819] w-[100vw] relative">
      <PageLayout className="flex flex-col items-center justify-center">
        <h1 className="text-white text-5xl font-semibold mb-4">
          Future Ecosystem{" "}
        </h1>
        <p className="text-white mb-8">
          Virtual world exists and now after metaverse boom virtual world is
          developing very fast and time is not far away we all will start living
          in virtual world” ― Anuj Jasani
        </p>
        <div className="bg-gray-600 w-[80vw] h-[60vh] rounded-3xl"></div>
      </PageLayout>
    </section>
  );
});

export default EcoSystem;
