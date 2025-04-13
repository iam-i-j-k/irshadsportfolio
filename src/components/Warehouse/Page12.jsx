import React from "react";

const Page12 = () => {
  return (
    <div className="flex flex-col items-start justify-center p-4 sm:p-6 md:p-10 pt-12 md:pt-20 gap-8 md:gap-12 max-w-full overflow-hidden">
      <div className="flex items-center gap-3">
        <h1 className="text-lg sm:text-xl font-semibold font-poppins">
          Inventory management
        </h1>
      </div>

      <div className="relative flex flex-row flex-wrap justify-center items-start gap-3">
        <img src="/inventory1.svg" alt="Home" />
        <img src="/inventory2.svg" alt="Home" />
        <img className="w-[35%]" src="/inventory3.svg" alt="Home" />
        <img className="w-[33%]" src="/inventory4.svg" alt="Home" />
        <img className="w-[33%]" src="/inventory5.svg" alt="Home" />
        <img className="w-[30%]" src="/inventory6.svg" alt="Home" />
        <img src="/inventory7.svg" alt="Home" />
        <img src="/inventory8.svg" alt="Home" />

      </div>

    </div>
  );
};

export default Page12