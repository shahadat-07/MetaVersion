import Image from "next/image";
import React, { useEffect, useState } from "react";
import userImg from "../assets/images/Mask group.svg";
import grayLogo from "../assets/images/gray-logo.svg";
import iLogo from "../assets/images/i.svg";
import ImageLevel from "./ImageLevel";
import { Menu, Transition } from "@headlessui/react";
import Button from "./Button";
import { Fragment } from "react";
import { useMoralis } from "react-moralis";

const DashHome = () => {
    const [score, setScore] = useState(1);
    const [userData, setUserData] = useState();
    const [isRegistered, setIsRegistered] = useState(false);

    const { isWeb3Enabled, account } = useMoralis();

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

    const updateUI = async () => {
        await checkRegister(account);
        if (isWeb3Enabled && isRegistered) {
            const postReqOptions = {
                method: "POST",
                body: JSON.stringify({
                    methodName: "fetchUser",
                    account: account,
                }),
            };
            const userDataFromBack = await (
                await fetch("/api/endpoint", postReqOptions)
            ).json();

            if (userDataFromBack) {
                setUserData(userDataFromBack);
                if (userDataFromBack.score > 0) {
                    const userScore = userDataFromBack.score;
                    if (userScore >= 0 && userScore <= 4000) {
                        setScore(1);
                    } else if (userScore >= 4000 && userScore <= 6000) {
                        setScore(2);
                    } else if (userScore >= 6000 && userScore <= 10000) {
                        setScore(3);
                    } else if (userScore >= 10000 && userScore <= 12000) {
                        setScore(4);
                    } else if (userScore >= 12000 && userScore <= 17000) {
                        setScore(5);
                    } else if (userScore >= 17000 && userScore <= 20000) {
                        setScore(6);
                    } else if (userScore >= 20000) {
                        setScore(7);
                    }
                }
            }
        }
    };

    useEffect(() => {
        updateUI();
    }, [isWeb3Enabled, isRegistered]);

    const Info = () => {
        return (
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button className="inline-flex justify-center items-center bg-transparent">
                        <Image src={iLogo} alt="Logo" width={18} height={18} />
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute right-0 mt-2 w-[450px] h-[180px] z-[100000] origin-top-right border border-[#828282] rounded-xl bg-[#140C25] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="px-1 py-1 ">
                            <Menu.Item>
                                {() => (
                                    <div className="p-8 text-center">
                                        <p className="mb-6 text-white text-lg">
                                            {" "}
                                            Take part in our events, make arts,
                                            be active in telegram chat and earn.{" "}
                                        </p>
                                        <Button className="bg-[#553CDF] text-sm">
                                            {" "}
                                            Go to buy more{" "}
                                        </Button>
                                    </div>
                                )}
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        );
    };

    const Levels = [
        {
            level: 1,
            imgSource: "/level-one.svg",
        },
        {
            level: 2,
            imgSource: "/level-two.svg",
        },
        {
            level: 3,
            imgSource: "/level-three.svg",
        },
        {
            level: 4,
            imgSource: "/level-four.svg",
        },
        {
            level: 5,
            imgSource: "/level-five.svg",
        },
        {
            level: 6,
            imgSource: "/level-six.svg",
        },
        {
            level: 7,
            imgSource: "/level-seven.svg",
        },
    ];

    if (isWeb3Enabled) {
        return (
            <section className="h-[65vh] w-screen md:mt-20 overflow-y-scroll md:overflow-hidden">
                <div className="relative flex justify-center items-center">
                    <div className="flex flex-col md:flex-row justify-between items-center w-[550px] p-4 border-b border-[#553CDF]">
                        <div className="flex space-x-8 items-center">
                            <div className="bg-frame">
                                <div className="relative mt-2 h-24 w-28 overflow-clip">
                                    <Image
                                        src={userImg}
                                        alt="User Image"
                                        layout="fill"
                                    />
                                </div>
                            </div>
                            <h1 className="text-white font-extended text-2xl leading-9">
                                {userData != undefined
                                    ? `@${userData.user_telegram}`
                                    : ""}
                            </h1>
                        </div>
                        <div className="flex flex-col mt-6 md:mt-0 justify-center">
                            <h1 className="text-white font-medium text-2xl leading-9">
                                Your score:
                            </h1>
                            <div className="flex items-center space-x-4">
                                <h1 className="text-white font-medium text-2xl">
                                    {userData != undefined ? userData.score : 0}
                                </h1>
                                <div className="relative">
                                    <Image
                                        src={grayLogo}
                                        alt="Logo"
                                        width={40}
                                        height={40}
                                    />
                                    <div className="absolute top-1 -right-5">
                                        <Info />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative mt-32 flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-7">
                    {Levels.map((item, index) => {
                        return (
                            <ImageLevel
                                level={item}
                                key={index}
                                score={score}
                            />
                        );
                    })}
                    <div
                        style={{
                            background:
                                "linear-gradient(180deg, #5200FF 0%, rgba(0, 0, 0, 0.92) 100%)",
                        }}
                        className="rotate-90 md:rotate-0 w-[74vw] h-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    >
                        {" "}
                    </div>
                </div>
            </section>
        );
    }
};

export default DashHome;
