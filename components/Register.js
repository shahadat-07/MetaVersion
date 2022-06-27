import React from "react";
import { withNavigationContext } from "react-awesome-slider/dist/navigation";

// transform: "matrix(-1, 0, 0, 1, 0, 0)",

const Register = withNavigationContext(({ fullpage }) => {
  return (
    <section className="bg-white px-4 h-screen flex flex-col justify-center items-center">
      <div className="w-full max-w-xl">
        <form className="bg-[#553CDF] shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <p className="mb-4 text-center font-narrow font-semibold text-white">
            First time here ? Please register.
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

      {/* <form className="flex-1 rounded px-2 pt-6 pb-8 mb-4 text-white max-w-[500px]">
        <p className="mb-4 text-center font-narrow font-semibold">
          First time here ? Please register.
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
      </form> */}
    </section>
  );
});

export default Register;
