import React, { useState } from "react";
import { useMoralis, useWeb3Contract } from "react-moralis";
import contractAbi from "../constants/contracts/MetaVisionRegister.sol/MyVerseRegister.json";

const Settings = () => {
    const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
    const [newTelegram, setNewTelegram] = useState("");
    const [newEmail, setNewEmail] = useState("");
    const { isWeb3Enabled, account } = useMoralis();

    const { runContractFunction: updateUserData } = useWeb3Contract({
        abi: contractAbi,
        contractAddress: contractAddress,
        functionName: "updateUserData",
        params: {
            telegram: newTelegram.length > 0 ? newTelegram : " ",
            email: newEmail.length > 0 ? newEmail : " ",
        },
    });

    const updateUser = async (newEmail, newTelegram) => {
        if (isWeb3Enabled && account) {
            const postOptions = {
                method: "POST",
                body: JSON.stringify({
                    methodName: "updateUserInfo",
                    account: account,
                    newTelegram: newTelegram,
                    newEmail: newEmail,
                }),
            };

            await fetch("api/endpoint", postOptions);
        }
    };

    return (
        <div className="w-full max-w-lg 2xl:max-w-2xl 3xl:max-w-5xl">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    console.log("Submitted!");
                }}
            >
                <div className="mb-4 2xl:mb-8 3xl:mb-14">
                    <label
                        className="block text-white text-sm sm:text-base font-medium mb-2 2xl:mb-4 3xl:mb-8 font-narrow 3xl:text-5xl 2xl:text-xl"
                        htmlFor="address"
                    >
                        Change your Telegram
                    </label>
                    <input
                        className="bg-transparent placeholder:text-white placeholder:text-sm 3xl:placeholder:text-3xl text-white appearance-none border border-[#686868] rounded w-full py-3 px-3 3xl:p-10  leading-tight focus:outline-none focus:shadow-outline"
                        id="address"
                        type="text"
                        placeholder="your telegram without @"
                        onChange={(e) => {
                            setNewTelegram(e.target.value);
                        }}
                    />
                </div>
                <div className="mb-6 2xl:mb-12 3xl:mb-16">
                    <label
                        className="block text-white text-sm sm:text-base font-medium mb-2 2xl:mb-4 3xl:mb-8 font-narrow 3xl:text-5xl 2xl:text-xl"
                        htmlFor="email"
                    >
                        Change E-mail address
                    </label>
                    <input
                        className="bg-transparent placeholder:text-white placeholder:text-sm 3xl:placeholder:text-3xl text-white appearance-none border border-[#686868] rounded w-full py-3 px-3 mb-3 3xl:p-10  leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder="example@myverse.com"
                        onChange={(e) => {
                            setNewEmail(e.target.value);
                        }}
                    />
                </div>
                <button
                    className="bg-[#553CDF] w-full rounded-3xl text-white font-medium py-3 px-4 3xl:text-4xl 3xl:p-8  focus:outline-none focus:shadow-outline font-extended"
                    type="button"
                    onClick={async () => {
                        if (newEmail.length > 1 || newTelegram.length > 1) {
                            console.log(newEmail, newTelegram);
                            await updateUserData({
                                onSuccess: async (tx) => {
                                    await tx.wait(1);
                                    await updateUser(newEmail, newTelegram);
                                    alert("User data updated!");
                                },
                            });
                        } else {
                            alert("You have to provide email or telegram");
                        }
                    }}
                >
                    Save changes
                </button>
            </form>
        </div>
    );
};

export default Settings;
