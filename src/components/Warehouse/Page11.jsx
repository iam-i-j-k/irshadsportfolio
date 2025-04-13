import React from "react";

const Page11 = () => {
  return (
    <div className="flex flex-col items-start justify-center p-4 sm:p-6 md:p-10 pt-12 md:pt-20 gap-8 md:gap-12 max-w-full overflow-hidden">
      <div className="flex items-center gap-3">
        <h1 className="text-xl sm:text-2xl font-bold font-poppins">
          High Fidelity Prototype
        </h1>
      </div>

      <div className="relative p-10">
        <img src="/login.png" alt="login" />
      </div>

      <div className="relative">
        <img className="p-10" src="/inventory.png" alt="inventory" />
      </div>
      <div className="flex items-center justify-center w-full">
        <a
          target="_blank"
          href="https://rackup.vercel.app/dashboard"
          className="mt-6 bg-[#454563] bg-opacity-90 tracking-[0.03em] font-bold font-poppins text-xs sm:text-sm text-white antialiased py-3 px-5 lg:py-4 lg:px-6 rounded-full hover:bg-opacity-100 transition-all"
        >
          View hi-fi prototype
        </a>
      </div>
    </div>
  );
};

export default Page11