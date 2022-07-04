import Image from "next/image";
import React from "react";
import conference from "../assets/images/conference.svg";
import tree from "../assets/images/tree.svg";
import t3 from "../assets/images/t3.svg";
// bg-[url('/conference.svg')] bg-contain bg-no-repeat bg-center
const Guides = () => {
  return (
    <section className="">
      <div className="grid gap-6 grid-rows-12 grid-cols-10 max-w-5xl h-[60vh] w-screen">
        <div className="col-start-1 col-end-8 row-start-1 row-end-4 bg-red-500">
         
        </div>
        <div className="bg-gray-400 col-start-8 col-end-11 row-start-1 row-end-7">
          {/* <Image
            src={t3}
            alt="Conference"
            // layout="fill"
          /> */}
          dfdjfkdjfkdfk<br />
          {/* dfdjfkdjfkdfk<br />
          dfdjfkdjfkdfk<br /> */}
          dfjkdfjkdj
          dfkjdkj
        </div>
        <div className="bg-nft col-start-1 col-end-8 row-start-4 row-end-7 bg-yellow-700 rounded-xl p-10"></div>
      </div>

      {/* <div className="flex">
        <div className="basis-2/3 bg-gray-900">
          <div className="flex">
            <div className="basis-2/3 bg-gray-900600">
              <Image
                src={conference}
                alt="Conference Image"
                // width={400}
                // height={300}
              />
            </div>
            <div className="basis-1/3 bg-gray-300">
              <Image
                src={tree}
                alt="Tree Image"
                // width={400}
                // height={300}
              />
            </div>
          </div>
        </div>
        <div className="basis-1/3 bg-red-800">
          <Image
            src={t3}
            alt="Conference Image"
            // width={400}
            // height={300}
          />
        </div>
      </div> */}
    </section>
  );
};

export default Guides;
