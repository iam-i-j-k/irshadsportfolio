import React from "react";

const Page14 = () => {
  return (
    <div className="flex flex-col items-start justify-center p-4 sm:p-6 md:p-10 pt-12 md:pt-20 gap-8 md:gap-12 max-w-full overflow-hidden">
      <div className="flex items-center gap-3">
        <h1 className="text-lg sm:text-xl font-semibold font-poppins">
          Vendor management
        </h1>
      </div>

      <div className="relative flex flex-row flex-wrap justify-center items-start gap-3">
        <img className="w-[32%]" src="/vendor1.svg" alt="Order" />
        <img className="w-[32%]" src="/vendor2.svg" alt="Order" />
        <img className="w-[32%]" src="/vendor3.svg" alt="Order" />
        <img className="w-[33%]" src="/vendor4.svg" alt="Order" />
      </div>

    </div>
  );
};

export default Page14