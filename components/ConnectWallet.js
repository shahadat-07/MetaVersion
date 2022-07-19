import { useState, useEffect } from "react";
import { Popover, Transition } from "@headlessui/react";
import Image from "next/image";
import wallet from "../assets/images/wallet-svgrepo-com.svg";
import { Fragment } from "react";
import { useMoralis, useWeb3Contract } from "react-moralis";
import { useNotification, Loading } from "web3uikit";
import contractAbi from "../constants/contracts/MetaVisionRegister.sol/MyVerseRegister.json";

export default function ConnectWallet() {
    const {
        isWeb3Enabled,
        isWeb3EnableLoading,
        account,
        enableWeb3,
        deactivateWeb3,
    } = useMoralis();

    const [telegram, setTelegram] = useState();
    const [email, setEmail] = useState();
    const [metaverse, setMetaverse] = useState();
    const [isRegistered, setIsRegistered] = useState(false);
    const [isPending, setIsPending] = useState(false);

    const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;

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

    const handleSuccess = async (tx, telegram, email, metaverse, account) => {
        await tx.wait(1);
        setIsPending(false);
        await registerNewUser(telegram, email, metaverse, account);
        window.location.reload();
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
        if (document.cookie == "isOnline=true") {
            enableWeb3();
        }
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
                                    try {
                                        await window.ethereum.request({
                                            method: "wallet_switchEthereumChain",
                                            params: [{ chainId: "0x61" }],
                                        });
                                    } catch {
                                        if (err.code === 4902) {
                                            await window.ethereum.request({
                                                method: "wallet_addEthereumChain",
                                                params: [
                                                    {
                                                        chainName:
                                                            "Smart Chain",
                                                        chainId: "0x61",
                                                        nativeCurrency: {
                                                            name: "Binance Coin",
                                                            decimals: 18,
                                                            symbol: "BNB",
                                                        },
                                                        rpcUrls: [
                                                            "https://bsc-dataseed.binance.org/",
                                                        ],
                                                        blockExplorerUrls: [
                                                            "https://bscscan.com",
                                                        ],
                                                    },
                                                ],
                                            });
                                        }
                                    }
                                    document.cookie = "isOnline=true";
                                } else if (isWeb3Enabled) {
                                    document.cookie = "isOnline=false";
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
                        {isWeb3Enabled &&
                        !isWeb3EnableLoading &&
                        !isRegistered &&
                        !isPending ? (
                            // <Transition
                            //     as={Fragment}
                            //     enter="transition ease-out"
                            //     enterFrom="opacity-0 translate-y-1"
                            //     enterTo="opacity-100 translate-y-0"
                            //     leave="transition ease-in"
                            //     leaveFrom="opacity-100 translate-y-0"
                            //     leaveTo="opacity-0 translate-y-1"
                            // >
                            <Popover.Panel className="mt-3 absolute -right-[80%] sm:right-0 z-10 w-[300px] h-[400] md:w-[400px] md:h-[500px]">
                                <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-black ring-opacity-5">
                                    <div className="relative bg-[#553CDF] rounded-md">
                                        <form
                                            className="rounded px-8 pt-6 pb-8 mb-4 text-white"
                                            onSubmit={async (e) => {
                                                setIsPending(true);
                                                e.preventDefault();
                                                await register({
                                                    onSuccess: async (tx) => {
                                                        await handleSuccess(
                                                            tx,
                                                            telegram,
                                                            email,
                                                            metaverse,
                                                            account,
                                                        );
                                                        // await registerNewUser(
                                                        //     telegram,
                                                        //     email,
                                                        //     metaverse,
                                                        //     account,
                                                        // );
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
                        ) : (
                            // </Transition>
                            <></>
                        )}
                        {isWeb3Enabled &&
                        !isWeb3EnableLoading &&
                        !isRegistered &&
                        isPending ? (
                            <Popover.Panel className="mt-3 absolute -right-[80%] sm:right-0 z-10 w-[300px] h-[400] md:w-[400px] md:h-[500px]">
                                <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-black ring-opacity-5">
                                    <div className="relative bg-[#553CDF] rounded-md">
                                        <div
                                            style={{
                                                backgroundColor: "#ECECFE",
                                                borderRadius: "8px",
                                                padding: "20px",
                                                display: "flex",
                                                justifyContent: "center",
                                            }}
                                        >
                                            <Loading
                                                size={40}
                                                spinnerColor="#2E7DAF"
                                                text={`Registration pending...`}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </Popover.Panel>
                        ) : (
                            <></>
                        )}
                    </>
                )}
            </Popover>
        </div>
    );
}
