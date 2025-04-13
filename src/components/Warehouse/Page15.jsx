import React from "react";

const Page13 = () => {
  return (
    <div className="flex flex-col items-start justify-center p-4 sm:p-6 md:p-10 pt-12 md:pt-20 gap-8 md:gap-12 max-w-full overflow-hidden">
      <div className="flex items-center gap-3">
        <h1 className="text-lg sm:text-xl font-semibold font-poppins">
          Employee management
        </h1>
      </div>

      <div className="relative flex flex-row flex-wrap justify-center items-start gap-3">
        <img className="w-[32%]" src="/employee1.svg" alt="Employee" />
        <img className="w-[32%]" src="/employee2.svg" alt="Employee" />
        <img className="w-[32%]" src="/employee3.svg" alt="Employee" />
        <img className="w-[33%]" src="/employee4.svg" alt="Employee" />
      </div>
    </div>
  );
};

export default Page13