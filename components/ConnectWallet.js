import { useState, useEffect } from "react";
import { Popover, Transition } from "@headlessui/react";
import Image from "next/image";
import wallet from "../assets/images/wallet-svgrepo-com.svg";
import { Fragment } from "react";
import { useMoralis, useWeb3Contract } from "react-moralis";
import contractAbi from "../constants/contracts/MetaVisionRegister.sol/MetaVisionRegister.json";

export default function ConnectWallet() {
    const { isWeb3Enabled, account, enableWeb3, deactivateWeb3, provider } =
        useMoralis();

    const [telegram, setTelegram] = useState();
    const [email, setEmail] = useState();
    const [metaverse, setMetaverse] = useState();
    const [isRegistered, setIsRegistered] = useState(false);

    const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

    const { runContractFunction: register } = useWeb3Contract({
        abi: contractAbi,
        contractAddress: contractAddress,
        functionName: "register",
        params: {
            _tgUsername: telegram,
            _eMail: email,
            _metaVerse: metaverse,
        },
    });

    const { runContractFunction: getUser } = useWeb3Contract({
        abi: contractAbi,
        contractAddress: contractAddress,
        functionName: "getUser",
        params: {},
    });

    const handleSuccess = async (tx) => {
        await tx.wait(1);
        console.log("registered");
    };

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
        console.log(result.status);
    };

    const registerNewUser = async (telegram, email, metaverse, account) => {
        const postOptions = {
            method: "POST",
            body: JSON.stringify({
                methodName: "register",
                telegram: telegram,
                email: email,
                metaverse: metaverse,
                account: account,
            }),
        };

        await fetch("/api/endpoint", postOptions);
        setIsRegistered(true);
    };

    useEffect(() => {
        if (isWeb3Enabled) {
            checkRegister(account);
        }
    }, [isWeb3Enabled, isRegistered]);

    return (
        <div className="xl:px-4">
            <Popover className="relative">
                {({ open }) => (
                    <>
                        <Popover.Button
                            onClick={async () => {
                                if (!isWeb3Enabled) {
                                    await enableWeb3();
                                } else if (isWeb3Enabled) {
                                    await deactivateWeb3();
                                }
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
                                {isWeb3Enabled
                                    ? `${account.slice(0, 5)}...${account.slice(
                                          account.length - 5,
                                          account.length,
                                      )}`
                                    : "Connect Wallet"}
                            </p>
                        </Popover.Button>
                        {!isRegistered ? (
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-1"
                            >
                                <Popover.Panel className="mt-3 absolute -right-[80%] sm:right-0 z-10 w-[300px] h-[400] md:w-[400px] md:h-[500px]">
                                    <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-black ring-opacity-5">
                                        <div className="relative bg-[#553CDF] rounded-md">
                                            <form
                                                className="rounded px-8 pt-6 pb-8 mb-4 text-white"
                                                onSubmit={async (e) => {
                                                    e.preventDefault();
                                                    await register({
                                                        onSuccess: async (
                                                            tx,
                                                        ) => {
                                                            await handleSuccess(
                                                                tx,
                                                            );
                                                            await registerNewUser(
                                                                telegram,
                                                                email,
                                                                metaverse,
                                                                account,
                                                            );
                                                        },
                                                    });
                                                }}
                                            >
                                                <p className="mb-4 text-center font-narrow font-semibold">
                                                    First time here ? Please
                                                    register.
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
                                                        required={true}
                                                        onChange={(e) => {
                                                            setTelegram(
                                                                e.target.value,
                                                            );
                                                        }}
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
                                                        placeholder="info@example.com"
                                                        required={true}
                                                        onChange={(e) => {
                                                            setEmail(
                                                                e.target.value,
                                                            );
                                                        }}
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
                                                        required={true}
                                                        onChange={(e) => {
                                                            setMetaverse(
                                                                e.target.value,
                                                            );
                                                        }}
                                                    />
                                                </div>
                                                <div className="text-center">
                                                    <button className="bg-[#553CDF] shadow-xl font-extended text-sm md:text-base text-center font-medium text-[#F2F2F2] py-3 px-8 rounded-[80px]">
                                                        {" "}
                                                        Register{" "}
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        ) : (
                            <></>
                        )}
                    </>
                )}
            </Popover>
        </div>
    );
}
