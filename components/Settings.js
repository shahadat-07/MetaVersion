import React from 'react';

const Settings = () => {
    return(
        <div className="w-full max-w-lg 2xl:max-w-2xl 3xl:max-w-5xl">
        <form>
          <div className="mb-4 2xl:mb-8 3xl:mb-14">
            <label
              className="block text-white text-sm sm:text-base font-medium mb-2 2xl:mb-4 3xl:mb-8 font-narrow 3xl:text-5xl 2xl:text-xl"
              htmlFor="address"
            >
              Change Telegram address
            </label>
            <input
              className="bg-transparent placeholder:text-white placeholder:text-sm 3xl:placeholder:text-3xl text-white appearance-none border border-[#686868] rounded w-full py-3 px-3 3xl:p-10  leading-tight focus:outline-none focus:shadow-outline"
              id="address"
              type="text"
              placeholder="XXXX  -  XXXX  -  XXXX  -  XXXX"
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
              placeholder="XXXX  -  XXXX  -  XXXX  -  XXXX"
            />
          </div>
            <button
              className="bg-[#553CDF] w-full rounded-3xl text-white font-medium py-3 px-4 3xl:text-4xl 3xl:p-8  focus:outline-none focus:shadow-outline font-extended"
              type="button"
            >
              Save changes
            </button>
        </form>
      </div>
        
    )
}

export default Settings;