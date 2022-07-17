import React, { useState, useEffect } from "react";
import PageLayout from "./PageLayout";
import { Link } from "react-awesome-slider/dist/navigation";
import { DashHome, Guides, NewCard, Merch, Settings } from "./index";
import { useMoralis } from "react-moralis";

const OurTeam = () => {
    const [name, setName] = useState("");
    const [isRegistered, setIsRegistered] = useState(false);

    const { isWeb3Enabled, account } = useMoralis();

    let showPage = <DashHome />;

    if (name === "home") {
        showPage = <DashHome />;
    } else if (name === "guides") {
        showPage = <Guides />;
    } else if (name === "card") {
        showPage = <NewCard />;
    } else if (name === "merch") {
        showPage = <Merch />;
    } else if (name === "settings") {
        showPage = <Settings />;
    }

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

    // useEffect(() => {
    //     checkRegister();
    // }, [isWeb3Enabled, account]);

    if (isWeb3Enabled) {
        return (
            <section className="bg-[#140C25] w-[100vw] relative overflow-y-scroll md:overflow-hidden">
                <div className="bg-[#1F2736] w-screen fixed top-[55px] md:top-[73px] 3xl:top-[105px]">
                    <div className="container flex justify-around mx-auto px-4 sm:px-16 3xl:px-0 w-screen 3xl:max-w-[2000px]">
                        <button
                            onClick={() => {
                                setName("home");
                            }}
                            className={`focus:bg-[#5E45F5] p-3 sm:p-4 text-white font-extended text-xs sm:text-sm 3xl:text-2xl 3xl:p-8`}
                        >
                            Home
                        </button>
                        <button
                            onClick={() => {
                                setName("guides");
                            }}
                            className={`focus:bg-[#5E45F5] p-3 sm:p-4 text-white font-extended text-xs sm:text-sm 3xl:text-2xl 3xl:p-8`}
                        >
                            Guides
                        </button>
                        <button
                            onClick={() => setName("card")}
                            className={`focus:bg-[#5E45F5] hidden md:block p-3 sm:p-4 text-white font-extended text-xs sm:text-sm 3xl:text-2xl 3xl:p-8`}
                        >
                            Add a new card
                        </button>
                        <button
                            onClick={() => setName("card")}
                            className={`focus:bg-[#5E45F5] md:hidden p-3 sm:p-4 text-white font-extended text-xs sm:text-sm 3xl:text-2xl 3xl:p-8`}
                        >
                            Card
                        </button>
                        <button
                            onClick={() => setName("merch")}
                            className={`focus:bg-[#5E45F5] p-3 sm:p-4 text-white font-extended text-xs sm:text-sm 3xl:text-2xl 3xl:p-8`}
                        >
                            Merch
                        </button>
                        <button
                            onClick={() => setName("settings")}
                            className={`focus:bg-[#5E45F5] p-3 sm:p:-4 text-white font-extended text-xs sm:text-sm 3xl:text-2xl 3xl:p-8`}
                        >
                            Settings
                        </button>
                    </div>
                </div>
                <PageLayout className="flex flex-col justify-center">
                    <div className="h-screen flex items-center justify-center">
                        {showPage}
                    </div>
                </PageLayout>
            </section>
        );
    } else {
        return (
            <section className="bg-[#140C25] w-[100vw] relative overflow-y-scroll md:overflow-hidden">
                <div className="bg-[#1F2736] w-screen fixed top-[55px] md:top-[75px] 3xl:top-[110px]">
                    <div className="container flex justify-around mx-auto px-4 sm:px-16 3xl:px-0 w-screen 3xl:max-w-[2000px]"></div>
                </div>
                <PageLayout className="flex flex-col justify-center">
                    <div className="h-screen flex items-center justify-center">
                        <div className="text-white text-3xl">
                            Please connect wallet and register to explore
                            Personal Dashboard
                        </div>
                    </div>
                </PageLayout>
            </section>
        );
    }
};

export default OurTeam;
