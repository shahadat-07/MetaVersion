import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Button from "./Button";

export default function Wallet() {
    return (
        <div className="xl:px-4">
            <Popover className="relative">
                {({ open }) => (
                    <>
                        <Popover.Button
                            className="font-extended text-sm 2xl:text-base text-center
              text-[#F2F2F2] py-3 2xl:py-3 px-4 2xl:px-8 3xl:text-lg rounded-[80px] bg-[#553CDF]"
                        >
                            <span className="">Connect Wallet</span>
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
                            <Popover.Panel className="absolute right-0 z-10 lg:w-[400px] lg:h-[500px]">
                                <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-black ring-opacity-5">
                                    <div className="relative bg-[#553CDF] rounded-md">
                                        <form className="rounded px-8 pt-6 pb-8 mb-4 text-white">
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
                                                    placeholder=""
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
                                                    placeholder=""
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
                    </>
                )}
            </Popover>
        </div>
    );
}
