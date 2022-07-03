import React, {useState} from "react";
import { Menu, Transition } from "@headlessui/react";



import { Fragment } from "react";
import { FaChevronDown } from "react-icons/fa";
import Image from "next/image";

const NewCard = () => {
  function DeleteActiveIcon(props) {
    return (
      <svg
        {...props}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="5"
          y="6"
          width="10"
          height="10"
          fill="#8B5CF6"
          stroke="#C4B5FD"
          strokeWidth="2"
        />
        <path d="M3 6H17" stroke="#C4B5FD" strokeWidth="2" />
        <path d="M8 6V4H12V6" stroke="#C4B5FD" strokeWidth="2" />
      </svg>
    );
  }

  function EditInactiveIcon(props) {
    return (
      <svg
        {...props}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 13V16H7L16 7L13 4L4 13Z"
          fill="#EDE9FE"
          stroke="#A78BFA"
          strokeWidth="2"
        />
      </svg>
    );
  }

  function EditActiveIcon(props) {
    return (
      <svg
        {...props}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 13V16H7L16 7L13 4L4 13Z"
          fill="#8B5CF6"
          stroke="#C4B5FD"
          strokeWidth="2"
        />
      </svg>
    );
  }

  function DuplicateInactiveIcon(props) {
    return (
      <svg
        {...props}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 4H12V12H4V4Z"
          fill="#EDE9FE"
          stroke="#A78BFA"
          strokeWidth="2"
        />
        <path
          d="M8 8H16V16H8V8Z"
          fill="#EDE9FE"
          stroke="#A78BFA"
          strokeWidth="2"
        />
      </svg>
    );
  }

  function DuplicateActiveIcon(props) {

    // const myRef = React.createRef<HTMLDivElement>();
    const [isOpen, setIsOpen] = useState(false);
    // Default this to a country's code to preselect it
    const [country, setCountry] = useState('AF');

    return (
      <svg
        {...props}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 4H12V12H4V4Z"
          fill="#8B5CF6"
          stroke="#C4B5FD"
          strokeWidth="2"
        />
        <path
          d="M8 8H16V16H8V8Z"
          fill="#8B5CF6"
          stroke="#C4B5FD"
          strokeWidth="2"
        />
      </svg>
    );
  }

  function ArchiveInactiveIcon(props) {
    return (
      <svg
        {...props}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="5"
          y="8"
          width="10"
          height="8"
          fill="#EDE9FE"
          stroke="#A78BFA"
          strokeWidth="2"
        />
        <rect
          x="4"
          y="4"
          width="12"
          height="4"
          fill="#EDE9FE"
          stroke="#A78BFA"
          strokeWidth="2"
        />
        <path d="M8 12H12" stroke="#A78BFA" strokeWidth="2" />
      </svg>
    );
  }

  function ArchiveActiveIcon(props) {
    return (
      <svg
        {...props}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="5"
          y="8"
          width="10"
          height="8"
          fill="#8B5CF6"
          stroke="#C4B5FD"
          strokeWidth="2"
        />
        <rect
          x="4"
          y="4"
          width="12"
          height="4"
          fill="#8B5CF6"
          stroke="#C4B5FD"
          strokeWidth="2"
        />
        <path d="M8 12H12" stroke="#A78BFA" strokeWidth="2" />
      </svg>
    );
  }

  function MoveInactiveIcon(props) {
    return (
      <svg
        {...props}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10 4H16V10" stroke="#A78BFA" strokeWidth="2" />
        <path d="M16 4L8 12" stroke="#A78BFA" strokeWidth="2" />
        <path d="M8 6H4V16H14V12" stroke="#A78BFA" strokeWidth="2" />
      </svg>
    );
  }

  function MoveActiveIcon(props) {
    return (
      <svg
        {...props}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10 4H16V10" stroke="#C4B5FD" strokeWidth="2" />
        <path d="M16 4L8 12" stroke="#C4B5FD" strokeWidth="2" />
        <path d="M8 6H4V16H14V12" stroke="#C4B5FD" strokeWidth="2" />
      </svg>
    );
  }

  function DeleteInactiveIcon(props) {
    return (
      <svg
        {...props}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="5"
          y="6"
          width="10"
          height="10"
          fill="#EDE9FE"
          stroke="#A78BFA"
          strokeWidth="2"
        />
        <path d="M3 6H17" stroke="#A78BFA" strokeWidth="2" />
        <path d="M8 6V4H12V6" stroke="#A78BFA" strokeWidth="2" />
      </svg>
    );
  }


  return (
    <div className="w-full max-w-3xl 2xl:max-w-4xl 3xl:max-w-5xl">
      <form>
        <div>
          <label className="block text-white text-sm sm:text-xl font-medium mb-1 2xl:mb-4 3xl:mb-8 font-narrow 3xl:text-5xl 2xl:text-xl">
            Card number
          </label>
          <label className="block text-[#A3A0A0] text-sm sm:text-sm font-medium mb-2 2xl:mb-4 3xl:mb-8 font-narrow 3xl:text-5xl 2xl:text-xl">
            Enter the 16 digit card number on the card
          </label>
          <div className="flex justify-between mt-5 mb-8">
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
                <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="px-1 py-1 ">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                              ? "bg-violet-500 text-white"
                              : "text-gray-900"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          {active ? (
                            <EditActiveIcon
                              className="mr-2 h-5 w-5"
                              aria-hidden="true"
                            />
                          ) : (
                            <EditInactiveIcon
                              className="mr-2 h-5 w-5"
                              aria-hidden="true"
                            />
                          )}
                          Edit
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                              ? "bg-violet-500 text-white"
                              : "text-gray-900"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          {active ? (
                            <DuplicateActiveIcon
                              className="mr-2 h-5 w-5"
                              aria-hidden="true"
                            />
                          ) : (
                            <DuplicateInactiveIcon
                              className="mr-2 h-5 w-5"
                              aria-hidden="true"
                            />
                          )}
                          Duplicate
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                  <div className="px-1 py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                              ? "bg-violet-500 text-white"
                              : "text-gray-900"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          {active ? (
                            <ArchiveActiveIcon
                              className="mr-2 h-5 w-5"
                              aria-hidden="true"
                            />
                          ) : (
                            <ArchiveInactiveIcon
                              className="mr-2 h-5 w-5"
                              aria-hidden="true"
                            />
                          )}
                          Archive
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                              ? "bg-violet-500 text-white"
                              : "text-gray-900"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          {active ? (
                            <MoveActiveIcon
                              className="mr-2 h-5 w-5"
                              aria-hidden="true"
                            />
                          ) : (
                            <MoveInactiveIcon
                              className="mr-2 h-5 w-5"
                              aria-hidden="true"
                            />
                          )}
                          Move
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                  <div className="px-1 py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                              ? "bg-violet-500 text-white"
                              : "text-gray-900"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          {active ? (
                            <DeleteActiveIcon
                              className="mr-2 h-5 w-5 text-violet-400"
                              aria-hidden="true"
                            />
                          ) : (
                            <DeleteInactiveIcon
                              className="mr-2 h-5 w-5 text-violet-400"
                              aria-hidden="true"
                            />
                          )}
                          Delete
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
            <input
              className="bg-transparent placeholder:text-white placeholder:text-sm 3xl:placeholder:text-3xl text-white appearance-none border border-[#686868] rounded w-3/4 py-3 px-3 mb-3 3xl:p-10  leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="XXXX  -  XXXX  -  XXXX  -  XXXX"
            />
          </div>
        </div>
        <div className="mb-4 2xl:mb-8 3xl:mb-14 flex justify-between">
          <div>
            <label className="block text-white text-sm sm:text-base font-medium mb-1 2xl:mb-4 3xl:mb-8 font-narrow 3xl:text-5xl 2xl:text-xl">
              CVV number
            </label>
            <label className="block text-[#A3A0A0] text-sm sm:text-sm font-medium mb-2 2xl:mb-4 3xl:mb-8 font-narrow 3xl:text-5xl 2xl:text-xl">
              Enter the 3 or 4 digit number on the card
            </label>
          </div>
          <input
            className="bg-transparent placeholder:text-white placeholder:text-sm 3xl:placeholder:text-3xl text-white appearance-none border border-[#686868] rounded w-1/2 py-3 px-3 mb-3 3xl:p-10  leading-tight focus:outline-®none focus:shadow-outline"
            id="text"
            type="text"
            placeholder="XXXX  -  XXXX"
          />
        </div>
        <div className="mb-4 2xl:mb-8 3xl:mb-14 flex justify-between">
          <div>
            <label className="block text-white text-sm sm:text-base font-medium mb-1 2xl:mb-4 3xl:mb-8 font-narrow 3xl:text-5xl 2xl:text-xl">
              Expiration date
            </label>
            <label className="block text-[#A3A0A0] text-sm sm:text-sm font-medium mb-2 2xl:mb-4 3xl:mb-8 font-narrow 3xl:text-5xl 2xl:text-xl">
            Enter the expiration date of the card
            </label>
          </div>
          <div className="flex space-x-5 items-center justify-end">
            <input
              className="bg-transparent placeholder:text-white placeholder:text-sm 3xl:placeholder:text-3xl text-white appearance-none border border-[#686868] rounded w-1/3 py-3 px-3 mb-3 3xl:p-10  leading-tight focus:outline-®none focus:shadow-outline"
              id="text"
              type="text"
              placeholder="06"
            />
            <div><Image src="/vertical.svg" alt="Vertical Line" width={30} height={30} /> </div>
            <input
              className="bg-transparent placeholder:text-white placeholder:text-sm 3xl:placeholder:text-3xl text-white appearance-none border border-[#686868] rounded w-1/3 py-3 px-3 mb-3 3xl:p-10  leading-tight focus:outline-®none focus:shadow-outline"
              id="text"
              type="text"
              placeholder="22"
            />
          </div>
        </div>

        <div className="mb-4 2xl:mb-8 3xl:mb-14 flex justify-between">
          <div>
            <label className="block text-white text-sm sm:text-base font-medium mb-1 2xl:mb-4 3xl:mb-8 font-narrow 3xl:text-5xl 2xl:text-xl">
            Password
            </label>
            <label className="block text-[#A3A0A0] text-sm sm:text-sm font-medium mb-2 2xl:mb-4 3xl:mb-8 font-narrow 3xl:text-5xl 2xl:text-xl">
            Enter your password </label>
          </div>
          <input
            className="bg-transparent placeholder:text-white placeholder:text-sm 3xl:placeholder:text-3xl text-white appearance-none border border-[#686868] rounded w-1/2 py-3 px-3 mb-3 3xl:p-10  leading-tight focus:outline-®none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="XXXX"
          />
        </div>
        <div className="mb-4 2xl:mb-8 3xl:mb-14 flex justify-between">
        <h1>Menu</h1>
        </div>

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
