import React, { useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { FaChevronDown } from "react-icons/fa";
import Image from "next/image";

const NewCard = () => {
  const WrapperRow = ({ children }) => {
    return (
      <div className="mb-3 md:mb-4 2xl:mb-8 3xl:mb-14 flex flex-col md:flex-row justify-between">
        {" "}
        {children}{" "}
      </div>
    );
  };

  const PaymenetImgDrop = () => {
    return (
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center items-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-white border border-[#686868]">
            <Image
              src="/mastercard.svg"
              alt="Master Card"
              width="30"
              height="30"
            />
            <FaChevronDown
              className="ml-2 -mr-1 h-5 w-3 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            />
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
          <Menu.Items className="absolute right-0 mt-2 w-28 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>{() => <h1>Others Payment</h1>}</Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    );
  };

  const LabelBox = ({
    labelOne,
    labelTwo,
    fontSize = "text-sm sm:text-base",
  }) => {
    return (
      <div>
        <label
          className={`block text-white font-medium md:mb-1 2xl:mb-4 3xl:mb-8 font-narrow 3xl:text-4xl 2xl:text-xl ${fontSize}`}
        >
          {labelOne}
        </label>
        <label className="block text-[#A3A0A0] text-xs sm:text-sm font-medium mb-2 2xl:mb-4 3xl:mb-8 font-narrow 3xl:text-3xl 2xl:text-xl">
          {labelTwo}
        </label>
      </div>
    );
  };

  const Input = ({ type, className, placeholder }) => {
    return (
      <input
        className={`bg-transparent focus:bg-transparent placeholder:text-white 3xl:text-3xl placeholder:text-sm 3xl:placeholder:text-3xl text-white appearance-none border border-[#686868] rounded py-3 px-3 lg:mb-3 3xl:p-6 leading-tight focus:outline-®none ${className}`}
        id={`${type}`}
        type={`${type}`}
        placeholder={`${placeholder}`}
      />
    );
  };

  return (
    <div className="w-full max-w-2xl md:max-w-3xl 2xl:max-w-4xl 3xl:max-w-screen-2xl	">
      <form>
        <div>
          <LabelBox
            fontSize="text-sm sm:text-xl"
            labelOne="Card number"
            labelTwo="Enter the 16 digit card number on the card"
          />
          <div className="flex justify-between items-center my-4 md:mt-5 md:mb-8">
            <PaymenetImgDrop />
            <Input
              type="text"
              className="w-3/4"
              placeholder="XXXX  -  XXXX  -  XXXX  -  XXXX"
            />
          </div>
        </div>

        <WrapperRow>
          <LabelBox
            labelOne="CVV number"
            labelTwo="Enter the 3 or 4 digit number on the card"
          />
          <Input
            type="text"
            className="w-full md:w-1/2"
            placeholder="XXXX  -  XXXX"
          />
        </WrapperRow>

        <WrapperRow>
          <LabelBox
            labelOne="Expiration date"
            labelTwo="Enter the expiration date of the card"
          />
          <div className="flex space-x-5 items-center md:justify-end">
            <Input type="number" className="w-1/2 md:w-1/3" placeholder="06" />
            <div>
              <Image
                src="/vertical.svg"
                alt="Vertical Line"
                width={30}
                height={30}
              />{" "}
            </div>
            <Input type="number" className="w-1/2 md:w-1/3" placeholder="22" />
          </div>
        </WrapperRow>

        <WrapperRow>
          <LabelBox labelOne="Password" labelTwo=" Enter your password" />
          <Input
            type="password"
            className="w-full md:w-1/2"
            placeholder="XXXX"
          />
        </WrapperRow>

        <WrapperRow> </WrapperRow>

        <button
          className="bg-[#553CDF] w-full rounded-3xl text-white font-medium py-3 px-4 3xl:text-4xl 3xl:p-8  focus:outline-none focus:shadow-outline font-extended"
          type="button"
        >
          Add a new card
        </button>
      </form>
    </div>
  );
};

export default NewCard;
